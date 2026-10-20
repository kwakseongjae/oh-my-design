/**
 * Cost protection for /api/ask (docs/REDESIGN_R11_PLAN_2026-10-20.md, owner decision 2):
 * 5 questions per minute per visitor and a daily cap on model calls, both as Redis counters.
 *
 * The visitor key is an HMAC-SHA256 of the UTC date and the IP under a server secret, cut to
 * 128 bits: the raw IP is never stored, and the same visitor gets a new key every day. Keys
 * expire on their own. No store means no protection, so the route fails closed instead.
 */
import { createHmac } from "node:crypto";
import type { Redis } from "@upstash/redis";
import { dayBucket } from "@/lib/kv";

export const PER_MINUTE = 5;
const MINUTE_TTL = 120;
const DAY_TTL = 60 * 60 * 48;

export interface CounterStore {
  /** INCR the key, (re)set its TTL, return the new count. */
  incr(key: string, ttlSeconds: number): Promise<number>;
}

export function upstashCounter(redis: Redis | null): CounterStore | null {
  if (!redis) return null;
  return {
    async incr(key, ttlSeconds) {
      const [count] = await redis.multi().incr(key).expire(key, ttlSeconds).exec<[number, number]>();
      return count;
    },
  };
}

/** Vercel's own header first (clients cannot set it), then the usual proxies. */
export function clientIp(headers: Headers): string {
  const first = (v: string | null) => v?.split(",")[0]?.trim() || null;
  return first(headers.get("x-vercel-forwarded-for")) ?? first(headers.get("x-real-ip")) ?? first(headers.get("x-forwarded-for")) ?? "unknown";
}

export function visitorKey(ip: string, secret: string, now: Date): string {
  return createHmac("sha256", secret).update(`${dayBucket(now)}|${ip}`).digest("hex").slice(0, 32);
}

function minuteBucket(now: Date): string {
  return now.toISOString().slice(0, 16).replace(/[-:T]/g, "");
}

export type LimitResult = { ok: true } | { ok: false; retryAfter: number };

export async function takePerMinute(store: CounterStore, visitor: string, now: Date): Promise<LimitResult> {
  const count = await store.incr(`omd:ask:ip:${visitor}:${minuteBucket(now)}`, MINUTE_TTL);
  return count <= PER_MINUTE ? { ok: true } : { ok: false, retryAfter: 60 - now.getUTCSeconds() };
}

/** Counted right before a model call, so retrieval misses and rejected requests cost nothing. */
export async function takeDaily(store: CounterStore, cap: number, now: Date): Promise<LimitResult> {
  const count = await store.incr(`omd:ask:day:${dayBucket(now)}`, DAY_TTL);
  if (count <= cap) return { ok: true };
  const midnight = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1);
  return { ok: false, retryAfter: Math.max(1, Math.ceil((midnight - now.getTime()) / 1000)) };
}

export function parseDailyCap(raw: string | undefined, fallback: number): number {
  const n = Number.parseInt(raw ?? "", 10);
  return Number.isFinite(n) && n >= 0 ? n : fallback;
}
