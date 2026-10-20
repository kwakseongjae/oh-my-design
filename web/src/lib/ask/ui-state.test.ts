import { describe, expect, it } from "vitest";
import { askReducer, initialAskState, type AskAction, type AskState } from "./ui-state";

const run = (actions: AskAction[], from: AskState = initialAskState) => actions.reduce(askReducer, from);
const SRC = [{ n: 1, title: "Which coding agents does it work with?", url: "/#faq" }];

describe("question box states", () => {
  it("goes idle → loading → streaming → done", () => {
    let s = run([{ type: "submit", question: "Codex?" }]);
    expect(s.phase).toBe("loading");
    s = run([{ type: "event", event: { type: "sources", sources: SRC } }], s);
    expect(s.phase).toBe("streaming");
    s = run([{ type: "event", event: { type: "delta", text: "Yes " } }, { type: "event", event: { type: "delta", text: "[1]." } }], s);
    expect(s.text).toBe("Yes [1].");
    s = run([{ type: "event", event: { type: "done", reason: "end_turn" } }], s);
    expect(s).toMatchObject({ phase: "done", note: null, sources: SRC });
  });

  it("notes a cut-off answer, a stop and a question with no sources", () => {
    const base: AskAction[] = [{ type: "submit", question: "q" }, { type: "event", event: { type: "sources", sources: SRC } }];
    expect(run([...base, { type: "event", event: { type: "done", reason: "max_tokens" } }]).note).toBe("max_tokens");
    expect(run([...base, { type: "stopped" }])).toMatchObject({ phase: "done", note: "stopped" });
    expect(run([{ type: "submit", question: "q" }, { type: "event", event: { type: "sources", sources: [] } }, { type: "event", event: { type: "done", reason: "no_sources" } }]).note).toBe("no_sources");
  });

  it("drops a partial answer on refusal but keeps the sources", () => {
    const s = run([{ type: "submit", question: "q" }, { type: "event", event: { type: "sources", sources: SRC } }, { type: "event", event: { type: "delta", text: "partial" } }, { type: "event", event: { type: "refused" } }]);
    expect(s).toMatchObject({ phase: "refused", text: "", sources: SRC });
  });

  it("maps failures to error, rate-limited and a sticky unavailable", () => {
    const sub: AskAction = { type: "submit", question: "q" };
    expect(run([sub, { type: "http_error", code: "rate_limited" }])).toMatchObject({ phase: "rate-limited", problem: "rate_limited" });
    expect(run([sub, { type: "http_error", code: "daily_cap" }])).toMatchObject({ phase: "rate-limited", problem: "daily_cap" });
    expect(run([sub, { type: "event", event: { type: "error", code: "busy" } }])).toMatchObject({ phase: "rate-limited", problem: "busy" });
    expect(run([sub, { type: "http_error", code: "too_long" }])).toMatchObject({ phase: "error", problem: "too_long" });
    expect(run([sub, { type: "network_error" }])).toMatchObject({ phase: "error", problem: "failed" });
    expect(run([sub, { type: "ended_without_terminal" }])).toMatchObject({ phase: "error", problem: "failed" });
    const off = run([sub, { type: "http_error", code: "unavailable" }]);
    expect(off.phase).toBe("unavailable");
    expect(run([{ type: "submit", question: "again" }], off).phase).toBe("unavailable");
  });

  it("ignores stream events once the answer has ended", () => {
    const done = run([{ type: "submit", question: "q" }, { type: "event", event: { type: "done", reason: "end_turn" } }]);
    expect(run([{ type: "event", event: { type: "delta", text: "late" } }], done).text).toBe("");
  });
});
