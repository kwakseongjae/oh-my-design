"use client";

import { Fragment, useEffect, useId, useReducer, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import type { SiteLocale } from "@/lib/i18n/site-locales";
import { parseAnswer, sourceLabel, type AskInline } from "@/lib/ask/answer-format";
import { ASK_MAX_CHARS, askLength, createNdjsonParser, isAskErrorCode, type AskErrorCode, type AskSource } from "@/lib/ask/protocol";
import { askReducer, initialAskState, isAskBusy, type AskState } from "@/lib/ask/ui-state";
import type { R11AskCopy } from "./copy/r11-ask";

/**
 * The question box under the FAQ (docs/REDESIGN_R11_PLAN_2026-10-20.md W4): a question of up to
 * 500 characters, three example chips, the answer streaming in with [n] citations, and the
 * source cards. /api/ask answers only from retrieved docs, FAQ, README and archive entries.
 * States: idle, loading, streaming, done, error, rate-limited, unavailable ("준비 중" until the
 * owner sets the key; sticky for the visit) and refused. Iris is used only on the ask button
 * and the focus ring; everything else is tone on tone (RESTRAINT R7/R8).
 * Accessibility: a labelled field, a polite status line for state changes, and the answer as a
 * polite live region that is aria-busy while it streams.
 */
const fill = (s: string, n: number | string) => s.replace("{n}", String(n));

function Inline({ parts, sources, t }: { parts: AskInline[]; sources: AskSource[]; t: R11AskCopy }): ReactNode {
  return parts.map((p, i) => {
    if (p.k === "code") return <code key={i}>{p.v}</code>;
    if (p.k === "text") return <Fragment key={i}>{p.v}</Fragment>;
    return (
      <span key={i} className="sq-ask-cites">
        {p.n.map((n) => (
          <a key={n} className="sq-ask-cite" href={sources[n - 1].url} target="_blank" rel="noopener noreferrer" aria-label={`${fill(t.cite, n)}: ${sources[n - 1].title}`}>
            {n}
          </a>
        ))}
      </span>
    );
  });
}

function Answer({ state, t }: { state: AskState; t: R11AskCopy }) {
  const blocks = parseAnswer(state.text, state.sources.length);
  return blocks.map((b, i) =>
    b.k === "p" ? (
      <p key={i}><Inline parts={b.parts} sources={state.sources} t={t} /></p>
    ) : (
      <ul key={i}>
        {b.items.map((item, j) => <li key={j}><Inline parts={item} sources={state.sources} t={t} /></li>)}
      </ul>
    ),
  );
}

function message(state: AskState, t: R11AskCopy): string | null {
  switch (state.phase) {
    case "refused":
      return t.refused;
    case "unavailable":
      return t.unavailable;
    case "rate-limited":
      return state.problem === "daily_cap" ? t.rateDaily : state.problem === "busy" ? t.busy : t.rateIp;
    case "error":
      return state.problem === "too_long" ? t.tooLong : t.failed;
    case "done":
      return state.note === "no_sources" ? t.notFound : state.note === "max_tokens" ? t.truncated : state.note === "stopped" ? t.stopped : null;
    default:
      return null;
  }
}

export function Ask({ t, locale, docsHref, archiveHref }: { t: R11AskCopy; locale: SiteLocale; docsHref: string; archiveHref: string }) {
  const [state, dispatch] = useReducer(askReducer, initialAskState);
  const [draft, setDraft] = useState("");
  const live = useRef<AbortController | null>(null);
  const id = useId();
  const busy = isAskBusy(state);
  const unavailable = state.phase === "unavailable";

  useEffect(() => () => live.current?.abort(), []);

  async function run(question: string) {
    const q = question.replace(/\s+/g, " ").trim();
    if (!q || unavailable) return;
    if (askLength(q) > ASK_MAX_CHARS) {
      dispatch({ type: "submit", question: q });
      dispatch({ type: "http_error", code: "too_long" });
      return;
    }
    live.current?.abort("replaced");
    const ctrl = new AbortController();
    live.current = ctrl;
    dispatch({ type: "submit", question: q });
    setDraft("");
    let ended = false;
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ question: q, locale }),
        signal: ctrl.signal,
      });
      if (!res.ok || !res.body) {
        let code: AskErrorCode = "failed";
        try {
          const j: unknown = await res.json();
          const e = (j as { error?: unknown } | null)?.error;
          if (isAskErrorCode(e)) code = e;
        } catch {
          // not JSON: a platform error page
        }
        dispatch({ type: "http_error", code });
        return;
      }
      const parser = createNdjsonParser((event) => {
        if (event.type === "done" || event.type === "refused" || event.type === "error") ended = true;
        dispatch({ type: "event", event });
      });
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        parser.push(decoder.decode(value, { stream: true }));
      }
      parser.push(decoder.decode());
      parser.end();
      if (!ended) dispatch({ type: "ended_without_terminal" });
    } catch {
      if (ctrl.signal.aborted) {
        if (ctrl.signal.reason === "stop") dispatch({ type: "stopped" });
        return;
      }
      dispatch({ type: "network_error" });
    } finally {
      if (live.current === ctrl) live.current = null;
    }
  }

  function onKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    // Enter asks, Shift+Enter breaks the line; never while an IME is composing (Hangul, kana)
    if (e.key !== "Enter" || e.shiftKey || e.nativeEvent.isComposing || e.keyCode === 229) return;
    e.preventDefault();
    if (!busy) void run(draft);
  }

  const msg = message(state, t);
  // progress goes to the status line; the answer and every outcome message go to the answer's
  // live region, which stays mounted from the first render so its first update is announced
  const status = state.phase === "loading" ? t.loading : state.phase === "streaming" ? t.streaming : "";
  const showLinks = unavailable || state.note === "no_sources";
  const idle = state.phase === "idle";
  const len = askLength(draft);

  return (
    <div className="sq-ask" aria-labelledby={`${id}-h`}>
      <h3 className="sq-ask-h" id={`${id}-h`}>{t.title}</h3>
      <p className="sq-ask-d">{t.desc}</p>

      <form
        className="sq-ask-f"
        onSubmit={(e) => {
          e.preventDefault();
          if (busy) live.current?.abort("stop");
          else void run(draft);
        }}
      >
        <label className="sq-sr" htmlFor={`${id}-q`}>{t.label}</label>
        <div className="sq-ask-field" data-disabled={unavailable || undefined}>
          <textarea
            id={`${id}-q`}
            rows={2}
            maxLength={ASK_MAX_CHARS}
            value={draft}
            placeholder={t.placeholder}
            disabled={unavailable}
            aria-describedby={`${id}-c`}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <div className="sq-ask-bar">
            <span className="sq-ask-count" id={`${id}-c`}>{len}/{ASK_MAX_CHARS}</span>
            {busy ? (
              <button type="submit" className="sq-ask-stop">{t.stop}</button>
            ) : (
              <button type="submit" className="sq-ask-go" disabled={unavailable || !draft.trim()}>{t.submit}</button>
            )}
          </div>
        </div>
      </form>

      <div className="sq-ask-ex" role="group" aria-label={t.examplesLabel}>
        {t.examples.map((q) => (
          <button key={q} type="button" className="sq-ask-chip" disabled={unavailable || busy} onClick={() => void run(q)}>
            {q}
          </button>
        ))}
      </div>

      <p className="sq-sr" role="status">{status}</p>

      <div className="sq-ask-out" data-idle={idle || undefined}>
          {state.question ? (
            <p className="sq-ask-q"><span className="sq-sr">{t.question}: </span>{state.question}</p>
          ) : null}
          <div className="sq-ask-a" aria-live="polite" aria-busy={busy}>
            {state.phase === "loading" || (state.phase === "streaming" && !state.text) ? (
              <div className="sq-ask-sk" aria-hidden="true"><i /><i /><i /></div>
            ) : null}
            {state.text ? <Answer state={state} t={t} /> : null}
            {msg ? <p className={state.phase === "done" && state.note !== "no_sources" ? "sq-ask-note" : "sq-ask-msg"}>{msg}</p> : null}
            {state.phase === "error" && state.problem === "failed" ? (
              <p><button type="button" className="sq-ask-retry" onClick={() => void run(state.question)}>{t.retry}</button></p>
            ) : null}
            {showLinks ? (
              <p className="sq-ask-links">
                <a href={docsHref}>{t.docs}</a>
                <a href={archiveHref}>{t.archive}</a>
              </p>
            ) : null}
          </div>
          {state.sources.length ? (
            <div className="sq-ask-src">
              <h4>{t.sources}</h4>
              <ol>
                {state.sources.map((s) => (
                  <li key={s.n}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                      <span className="sq-ask-n" aria-hidden="true">{s.n}</span>
                      <span className="sq-ask-st">{s.title}</span>
                      <span className="sq-ask-su">{sourceLabel(s.url)}<span className="sq-sr"> ({t.newTab})</span></span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}
          {state.phase === "done" && state.text ? <p className="sq-ask-note">{t.disclaimer}</p> : null}
      </div>
    </div>
  );
}
