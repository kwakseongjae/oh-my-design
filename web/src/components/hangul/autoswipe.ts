/**
 * The hero demo's auto-swipe (owner, 2026-10-21): developers drag a width slider unprompted, most
 * people don't, so the slider moves once by itself to show that it moves.
 *
 * - It plays when the demo is at least half in view, never before.
 * - It drives the same width the reader drives, so both frames, the break map and the readout
 *   follow it live.
 * - Any pointerdown, keydown or focus on the control stops it at once, for good.
 * - If nothing touched it, it may play once more after IDLE_MS. Never more than MAX_PLAYS times
 *   in one page view.
 * - The component never creates one under prefers-reduced-motion.
 *
 * No React and no DOM here: the clock and the frame scheduler are injected, so the rules above
 * are unit-tested with fake timers (__tests__/hangul-autoswipe.test.ts).
 */

/** One leg of the sweep: ease from wherever the last leg ended to `to` px over `ms`. */
export interface SweepLeg {
  readonly to: number;
  readonly ms: number;
}

/**
 * 360 → 430 → 340 → 360, about 3.5 s. Out to the widest phone, where the heading fits and nothing
 * breaks; back past the eval's own width to a narrow phone, where the "before" frame breaks; then it
 * rests at 360, the width of the eval page's real break ("있어 / 요."). The holds let the reader see
 * each end state.
 */
export const SWEEP: readonly SweepLeg[] = [
  { to: 430, ms: 1150 },
  { to: 430, ms: 350 },
  { to: 340, ms: 1250 },
  { to: 340, ms: 250 },
  { to: 360, ms: 500 },
];

export const IDLE_MS = 8000;
export const MAX_PLAYS = 2;

export const sweepMs = (legs: readonly SweepLeg[] = SWEEP) => legs.reduce((n, l) => n + l.ms, 0);

/** easeInOutCubic: slow out of a rest, slow into the next one. */
export function ease(t: number): number {
  const x = Math.min(1, Math.max(0, t));
  return x < 0.5 ? 4 * x * x * x : 1 - (-2 * x + 2) ** 3 / 2;
}

/** The width `elapsed` ms into a sweep that starts at `from`, rounded to whole px, and whether it has ended. */
export function sweepAt(from: number, elapsed: number, legs: readonly SweepLeg[] = SWEEP): { width: number; done: boolean } {
  let start = from;
  let t = Math.max(0, elapsed);
  for (const leg of legs) {
    if (t < leg.ms) return { width: Math.round(start + (leg.to - start) * ease(t / leg.ms)), done: false };
    t -= leg.ms;
    start = leg.to;
  }
  return { width: start, done: true };
}

export interface Clock {
  now(): number;
  frame(cb: (t: number) => void): number;
  cancelFrame(id: number): void;
  later(cb: () => void, ms: number): number;
  cancelLater(id: number): void;
}

export const browserClock = (): Clock => ({
  now: () => performance.now(),
  frame: (cb) => requestAnimationFrame(cb),
  cancelFrame: (id) => cancelAnimationFrame(id),
  later: (cb, ms) => window.setTimeout(cb, ms),
  cancelLater: (id) => window.clearTimeout(id),
});

export type SwipePhase = "idle" | "playing" | "stopped";

export class AutoSwipe {
  private plays = 0;
  private phase: SwipePhase = "idle";
  private inView = false;
  /** false between the first play's end and IDLE_MS later */
  private mayPlay = true;
  private raf: number | null = null;
  private timer: number | null = null;
  private from = 0;
  private t0 = 0;
  private last = Number.NaN;

  constructor(
    private readonly clock: Clock,
    /** the width the sweep starts from (the slider's current value) */
    private readonly current: () => number,
    /** called with each new whole-px width while playing */
    private readonly setWidth: (w: number) => void,
    /** called when it starts, ends, or is stopped */
    private readonly onPhase: (phase: SwipePhase, plays: number) => void = () => {},
    private readonly legs: readonly SweepLeg[] = SWEEP,
  ) {}

  get state(): { phase: SwipePhase; plays: number } {
    return { phase: this.phase, plays: this.plays };
  }

  /** From an IntersectionObserver: is at least half of the demo in view? */
  setInView(inView: boolean): void {
    this.inView = inView;
    this.maybePlay();
  }

  /** The reader touched the control: stop now and never play again. */
  interact(): void {
    if (this.phase === "stopped") return;
    this.cancel();
    this.phase = "stopped";
    this.onPhase("stopped", this.plays);
  }

  /** Unmount. */
  dispose(): void {
    this.cancel();
    this.phase = "stopped";
  }

  private cancel(): void {
    if (this.raf !== null) this.clock.cancelFrame(this.raf);
    if (this.timer !== null) this.clock.cancelLater(this.timer);
    this.raf = null;
    this.timer = null;
  }

  private maybePlay(): void {
    if (this.phase !== "idle" || !this.inView || !this.mayPlay || this.plays >= MAX_PLAYS) return;
    this.plays += 1;
    this.phase = "playing";
    this.from = this.current();
    this.t0 = this.clock.now();
    this.last = Number.NaN;
    this.onPhase("playing", this.plays);
    this.raf = this.clock.frame(this.tick);
  }

  private readonly tick = (t: number): void => {
    this.raf = null;
    if (this.phase !== "playing") return;
    const { width, done } = sweepAt(this.from, t - this.t0, this.legs);
    if (width !== this.last) {
      this.last = width;
      this.setWidth(width);
    }
    if (!done) {
      this.raf = this.clock.frame(this.tick);
      return;
    }
    this.phase = "idle";
    this.onPhase("idle", this.plays);
    if (this.plays >= MAX_PLAYS) return;
    this.mayPlay = false;
    this.timer = this.clock.later(() => {
      this.timer = null;
      this.mayPlay = true;
      this.maybePlay();
    }, IDLE_MS);
  };
}
