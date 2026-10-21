import { describe, expect, it } from "vitest";
import { AutoSwipe, IDLE_MS, MAX_PLAYS, START_DELAY_MS, SWEEP, ease, sweepAt, sweepMs, type Clock, type SwipePhase } from "@/components/hangul/autoswipe";

/**
 * The hero demo's auto-swipe (components/hangul/autoswipe.ts): when it plays, what it drives, and
 * that a reader's first touch stops it for good. A fake clock stands in for rAF and setTimeout.
 */
function fakeClock() {
  let now = 0;
  let id = 0;
  const frames = new Map<number, (t: number) => void>();
  const timers = new Map<number, { at: number; cb: () => void }>();
  const clock: Clock = {
    now: () => now,
    frame: (cb) => (frames.set(++id, cb), id),
    cancelFrame: (n) => void frames.delete(n),
    later: (cb, ms) => (timers.set(++id, { at: now + ms, cb }), id),
    cancelLater: (n) => void timers.delete(n),
  };
  /** advance time in 16 ms frames, firing frames and due timers */
  const run = (ms: number) => {
    const end = now + ms;
    while (now < end) {
      now = Math.min(end, now + 16);
      for (const [n, t] of [...timers]) if (t.at <= now) (timers.delete(n), t.cb());
      const due = [...frames];
      frames.clear();
      for (const [, cb] of due) cb(now);
    }
  };
  return { clock, run, pending: () => frames.size + timers.size };
}

function setup() {
  const c = fakeClock();
  let width = 360;
  const widths: number[] = [];
  const phases: SwipePhase[] = [];
  const swipe = new AutoSwipe(c.clock, () => width, (w) => (widths.push(w), (width = w)), (p) => phases.push(p));
  return { ...c, swipe, widths, phases, width: () => width };
}

describe("sweep path", () => {
  it("eases between rests and lasts about 3.5 s", () => {
    expect(ease(0)).toBe(0);
    expect(ease(1)).toBe(1);
    expect(ease(0.5)).toBeCloseTo(0.5);
    expect(ease(0.1)).toBeLessThan(0.1);
    expect(sweepMs()).toBeGreaterThanOrEqual(3000);
    expect(sweepMs()).toBeLessThanOrEqual(4000);
  });

  it("goes out to 430, down to a narrow phone, and rests at 360 inside the slider's range", () => {
    const seen = Array.from({ length: Math.ceil(sweepMs() / 16) + 2 }, (_, i) => sweepAt(360, i * 16).width);
    expect(Math.max(...seen)).toBe(430);
    expect(Math.min(...seen)).toBe(340);
    expect(seen.every((w) => w >= 320 && w <= 430 && Number.isInteger(w))).toBe(true);
    expect(sweepAt(360, sweepMs())).toEqual({ width: 360, done: true });
    expect(SWEEP.at(-1)?.to).toBe(360);
  });
});

describe("AutoSwipe", () => {
  it("waits until the demo is in view, then drives the width through the sweep", () => {
    const s = setup();
    s.run(5000);
    expect(s.widths).toEqual([]);
    s.swipe.setInView(true);
    expect(s.swipe.state).toEqual({ phase: "idle", plays: 0 });
    s.run(START_DELAY_MS + 16);
    expect(s.swipe.state).toEqual({ phase: "playing", plays: 1 });
    s.run(sweepMs() + 32);
    expect(Math.max(...s.widths)).toBe(430);
    expect(s.width()).toBe(360);
    expect(s.swipe.state.phase).toBe("idle");
    // whole pixels, one call per change
    expect(s.widths.every((w, i) => i === 0 || w !== s.widths[i - 1])).toBe(true);
  });

  it("does not start if the demo leaves view during the start delay", () => {
    const s = setup();
    s.swipe.setInView(true);
    s.run(START_DELAY_MS / 2);
    s.swipe.setInView(false);
    s.run(START_DELAY_MS * 4);
    expect(s.swipe.state).toEqual({ phase: "idle", plays: 0 });
    expect(s.widths).toEqual([]);
  });

  it("stops at once on interaction and never plays again", () => {
    const s = setup();
    s.swipe.setInView(true);
    s.run(START_DELAY_MS + 600);
    const at = s.width();
    expect(at).toBeGreaterThan(360);
    s.swipe.interact();
    expect(s.swipe.state.phase).toBe("stopped");
    const n = s.widths.length;
    s.run(IDLE_MS * 3);
    s.swipe.setInView(false);
    s.swipe.setInView(true);
    s.run(IDLE_MS * 3);
    expect(s.widths.length).toBe(n);
    expect(s.width()).toBe(at);
    expect(s.pending()).toBe(0);
  });

  it("replays once after the idle wait if untouched, and never more than twice", () => {
    const s = setup();
    s.swipe.setInView(true);
    s.run(START_DELAY_MS + sweepMs() + 32);
    expect(s.swipe.state.plays).toBe(1);
    s.run(IDLE_MS - 500);
    expect(s.swipe.state).toEqual({ phase: "idle", plays: 1 });
    s.run(600 + START_DELAY_MS);
    expect(s.swipe.state).toEqual({ phase: "playing", plays: 2 });
    s.run(sweepMs() + 32);
    s.run(IDLE_MS * 4);
    s.swipe.setInView(false);
    s.swipe.setInView(true);
    s.run(IDLE_MS * 2);
    expect(s.swipe.state).toEqual({ phase: "idle", plays: MAX_PLAYS });
    expect(s.phases.filter((p) => p === "playing")).toHaveLength(2);
  });

  it("holds the replay until the demo is back in view", () => {
    const s = setup();
    s.swipe.setInView(true);
    s.run(START_DELAY_MS + sweepMs() + 32);
    s.swipe.setInView(false);
    s.run(IDLE_MS * 2);
    expect(s.swipe.state).toEqual({ phase: "idle", plays: 1 });
    s.swipe.setInView(true);
    s.run(START_DELAY_MS + 16);
    expect(s.swipe.state).toEqual({ phase: "playing", plays: 2 });
  });

  it("a touch during the idle wait cancels the replay", () => {
    const s = setup();
    s.swipe.setInView(true);
    s.run(START_DELAY_MS + sweepMs() + 32);
    s.swipe.interact();
    s.run(IDLE_MS * 2);
    expect(s.swipe.state).toEqual({ phase: "stopped", plays: 1 });
    expect(s.pending()).toBe(0);
  });
});
