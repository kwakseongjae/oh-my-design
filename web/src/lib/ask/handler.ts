/**
 * POST /api/ask: retrieve from the build-time index, then stream a cited answer from
 * Claude Haiku 5.5 (docs/REDESIGN_R11_PLAN_2026-10-20.md W4 and "Claude Haiku 5.5 확인 사실").
 *
 * Order, cheapest refusal first: key → request shape → store → per-visitor minute limit →
 * retrieval (no sources: answer locally, no model call) → daily cap (counted only for model
 * calls) → model. Pre-answer failures are JSON with a real status; the first stream event is
 * pulled before the Response is built, so an upstream 401/429/5xx also lands as a status.
 *
 * Request rules for Haiku 5.5 (each violation is a 400): no temperature / top_p / top_k, no
 * thinking budget (thinking is omitted, so it runs adaptive), no assistant prefill (the last
 * message is the user's). effort "low" for latency; thinking tokens count toward max_tokens.
 *
 * Logging is counts only: never the question, the answer, the IP or its hash.
 */
import Anthropic from "@anthropic-ai/sdk";
import { isSiteLocale, type SiteLocale } from "@/lib/i18n/site-locales";
import type { AskClient, AskStream } from "./client";
import { clientIp, parseDailyCap, takeDaily, takePerMinute, visitorKey, type CounterStore } from "./limits";
import { buildUserTurn, SYSTEM_PROMPT } from "./prompt";
import { ASK_MAX_CHARS, askLength, type AskErrorCode, type AskEvent, type AskSource } from "./protocol";
import type { AskRetriever } from "./retrieve";

export const ASK_DEFAULT_MODEL = "claude-haiku-5-5";
export const ASK_DEFAULT_DAILY_CAP = 1000;
export const ASK_MAX_TOKENS = 3072;
const MAX_BODY_BYTES = 8 * 1024;

export interface AskEnv {
  apiKey?: string;
  model?: string;
  dailyCap?: string;
  hashSalt?: string;
}

export interface AskDeps {
  env: AskEnv;
  /** Null when Redis is not configured: the route then fails closed. */
  store: CounterStore | null;
  retriever: () => AskRetriever;
  createClient: (apiKey: string) => AskClient;
  now?: () => Date;
  log?: (fields: Record<string, string | number | boolean | null>) => void;
}

export function buildAskRequest(model: string, userTurn: string): Anthropic.MessageStreamParams {
  return {
    model,
    max_tokens: ASK_MAX_TOKENS,
    output_config: { effort: "low" },
    system: [{ type: "text", text: SYSTEM_PROMPT, cache_control: { type: "ephemeral" } }],
    messages: [{ role: "user", content: userTurn }],
  };
}

const NO_STORE = { "cache-control": "no-store" } as const;

function fail(status: number, error: AskErrorCode, extra: Record<string, string> = {}, headers: Record<string, string> = {}): Response {
  return Response.json({ error, ...extra }, { status, headers: { ...NO_STORE, ...headers } });
}

/** SDK errors, most specific first (APIUserAbortError and APIConnectionError extend APIError). */
export function upstreamFailure(e: unknown): { status: number; code: AskErrorCode; kind: string } {
  if (e instanceof Anthropic.APIUserAbortError) return { status: 499, code: "failed", kind: "aborted" };
  if (e instanceof Anthropic.APIConnectionError) return { status: 504, code: "failed", kind: "connection" };
  if (e instanceof Anthropic.RateLimitError) return { status: 429, code: "busy", kind: "rate_limit" };
  if (e instanceof Anthropic.AuthenticationError || e instanceof Anthropic.PermissionDeniedError || e instanceof Anthropic.NotFoundError) {
    return { status: 503, code: "unavailable", kind: "config" };
  }
  if (e instanceof Anthropic.BadRequestError) return { status: 502, code: "failed", kind: "bad_request" };
  if (e instanceof Anthropic.InternalServerError) {
    return e.status === 529 ? { status: 503, code: "busy", kind: "overloaded" } : { status: 502, code: "failed", kind: "server" };
  }
  if (e instanceof Anthropic.APIError) {
    // a mid-stream `error` event carries no status, only the type
    if (e.type === "overloaded_error" || e.type === "rate_limit_error") return { status: 503, code: "busy", kind: e.type };
    return { status: 502, code: "failed", kind: e.type ?? "api" };
  }
  return { status: 500, code: "failed", kind: "unknown" };
}

function ndjson(events: (send: (e: AskEvent) => void) => Promise<void>, onCancel?: () => void): Response {
  const encoder = new TextEncoder();
  // a closed tab cancels the body; writes after that would throw, so they become no-ops
  let open = true;
  const body = new ReadableStream<Uint8Array>({
    async start(controller) {
      const send = (e: AskEvent) => {
        if (open) controller.enqueue(encoder.encode(`${JSON.stringify(e)}\n`));
      };
      try {
        await events(send);
      } finally {
        if (open) {
          open = false;
          controller.close();
        }
      }
    },
    cancel() {
      open = false;
      onCancel?.();
    },
  });
  return new Response(body, {
    status: 200,
    headers: { "content-type": "application/x-ndjson; charset=utf-8", "x-content-type-options": "nosniff", ...NO_STORE },
  });
}

export async function handleAsk(req: Request, deps: AskDeps): Promise<Response> {
  const started = Date.now();
  const now = (deps.now ?? (() => new Date()))();
  const log = deps.log ?? (() => {});

  // 1. The owner's separate key, and no other: without it the box shows "준비 중".
  const apiKey = deps.env.apiKey?.trim();
  if (!apiKey) return fail(503, "unavailable");

  // 2. Request shape. Same-site pages only (non-browser callers still meet the limits).
  if (req.headers.get("sec-fetch-site") === "cross-site") return fail(403, "forbidden");
  if (Number(req.headers.get("content-length") ?? 0) > MAX_BODY_BYTES) return fail(413, "too_long");
  const raw = await req.text();
  if (raw.length > MAX_BODY_BYTES) return fail(413, "too_long");
  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return fail(400, "invalid");
  }
  const { question: rawQuestion, locale: rawLocale } = (body ?? {}) as { question?: unknown; locale?: unknown };
  if (typeof rawQuestion !== "string" || typeof rawLocale !== "string" || !isSiteLocale(rawLocale)) return fail(400, "invalid");
  const locale: SiteLocale = rawLocale;
  const question = rawQuestion.replace(/\s+/g, " ").trim();
  if (!question) return fail(400, "invalid");
  if (askLength(question) > ASK_MAX_CHARS) return fail(413, "too_long");

  // 3. No counters, no protection: fail closed to protect the bill.
  const store = deps.store;
  if (!store) {
    log({ event: "ask", outcome: "kv_missing" });
    return fail(503, "unavailable", { reason: "kv" });
  }

  // 4. Per visitor: 5 a minute, keyed by a daily-rotating HMAC of the IP.
  try {
    const visitor = visitorKey(clientIp(req.headers), deps.env.hashSalt?.trim() || apiKey, now);
    const limit = await takePerMinute(store, visitor, now);
    if (!limit.ok) {
      log({ event: "ask", outcome: "rate_limited" });
      return fail(429, "rate_limited", {}, { "retry-after": String(limit.retryAfter) });
    }
  } catch {
    log({ event: "ask", outcome: "kv_error" });
    return fail(503, "unavailable", { reason: "kv" });
  }

  // 5. Retrieval. Nothing to cite → say so without spending a model call.
  const hits = deps.retriever().search(question, locale);
  const sources: AskSource[] = hits.map((h, i) => ({ n: i + 1, title: h.chunk.title, url: h.url }));
  if (!hits.length) {
    log({ event: "ask", outcome: "no_sources", locale, chars: askLength(question) });
    return ndjson(async (send) => {
      send({ type: "sources", sources: [] });
      send({ type: "done", reason: "no_sources" });
    });
  }

  // 6. Daily cap on model calls.
  try {
    const cap = await takeDaily(store, parseDailyCap(deps.env.dailyCap, ASK_DEFAULT_DAILY_CAP), now);
    if (!cap.ok) {
      log({ event: "ask", outcome: "daily_cap" });
      return fail(429, "daily_cap", {}, { "retry-after": String(cap.retryAfter) });
    }
  } catch {
    log({ event: "ask", outcome: "kv_error" });
    return fail(503, "unavailable", { reason: "kv" });
  }

  // 7. The model. Pull the first event before answering so an upstream failure gets a status.
  const model = deps.env.model?.trim() || ASK_DEFAULT_MODEL;
  const client = deps.createClient(apiKey);
  let stream: AskStream;
  let iterator: AsyncIterator<Anthropic.MessageStreamEvent>;
  let first: IteratorResult<Anthropic.MessageStreamEvent>;
  try {
    stream = client.messages.stream(buildAskRequest(model, buildUserTurn(question, hits, locale)), { signal: req.signal });
    iterator = stream[Symbol.asyncIterator]();
    first = await iterator.next();
  } catch (e) {
    const f = upstreamFailure(e);
    log({ event: "ask", outcome: "upstream_error", kind: f.kind, status: f.status });
    return fail(f.status, f.code);
  }

  return ndjson(
    async (send) => {
      send({ type: "sources", sources });
      const textBlocks = new Set<number>();
      let event = first;
      try {
        while (!event.done) {
          const e = event.value;
          if (e.type === "content_block_start" && e.content_block.type === "text") textBlocks.add(e.index);
          // text deltas of text blocks only; thinking blocks arrive empty and are skipped
          if (e.type === "content_block_delta" && e.delta.type === "text_delta" && textBlocks.has(e.index)) {
            send({ type: "delta", text: e.delta.text });
          }
          event = await iterator.next();
        }
        const final = await stream.finalMessage();
        const stop = final.stop_reason;
        log({
          event: "ask",
          outcome: stop === "refusal" ? "refused" : "answered",
          locale,
          chars: askLength(question),
          hits: hits.length,
          stop: stop ?? null,
          refusal: stop === "refusal" ? (final.stop_details?.category ?? null) : null,
          in: final.usage.input_tokens,
          out: final.usage.output_tokens,
          cache_read: final.usage.cache_read_input_tokens ?? 0,
          cache_write: final.usage.cache_creation_input_tokens ?? 0,
          ms: Date.now() - started,
        });
        // Haiku 5.5's safety classifiers have no server-side fallback: end with "can't answer".
        if (stop === "refusal") send({ type: "refused" });
        else send({ type: "done", reason: stop === "max_tokens" ? "max_tokens" : "end_turn" });
      } catch (e) {
        const f = upstreamFailure(e);
        log({ event: "ask", outcome: "stream_error", kind: f.kind });
        if (f.kind !== "aborted") send({ type: "error", code: f.code });
      }
    },
    () => stream.abort(),
  );
}
