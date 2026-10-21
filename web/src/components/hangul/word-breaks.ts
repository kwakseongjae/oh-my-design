/**
 * Finds Korean words the browser split across two lines: the same walk as the skill's
 * render-check.mjs. Every character gets a Range rect; two adjacent Hangul syllables whose rects
 * sit on different lines are a broken word. A visible <br> is an intentional break; a <br> hidden
 * with display:none renders no break, so it is skipped. Browser-only (call from effects).
 */

const HANGUL = /[가-힣]/;

export interface WordBreak {
  /** The word as two fragments, e.g. "있어" and "요." */
  readonly head: string;
  readonly tail: string;
  /** The tail fragment's box relative to `origin`, in unscaled CSS px (null without an origin). */
  readonly rect: { readonly x: number; readonly y: number; readonly width: number; readonly height: number } | null;
}

interface Ch {
  readonly c: string;
  readonly r: DOMRect | null;
}

function chars(el: HTMLElement): Ch[] {
  const out: Ch[] = [];
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
  let n: Node | null;
  while ((n = walker.nextNode())) {
    if (n.nodeType === Node.ELEMENT_NODE) {
      const e = n as HTMLElement;
      if (e.tagName === "BR" && getComputedStyle(e).display !== "none") out.push({ c: "\n", r: null });
      continue;
    }
    const t = n as Text;
    for (let i = 0; i < t.data.length; i++) {
      const range = document.createRange();
      range.setStart(t, i);
      range.setEnd(t, i + 1);
      out.push({ c: t.data[i], r: [...range.getClientRects()].find((x) => x.width > 0) ?? null });
    }
  }
  return out;
}

export function findWordBreaks(el: HTMLElement, origin?: HTMLElement, scale = 1): WordBreak[] {
  const cs = chars(el);
  const o = origin?.getBoundingClientRect();
  const out: WordBreak[] = [];
  for (let i = 0; i + 1 < cs.length; i++) {
    const a = cs[i];
    const z = cs[i + 1];
    if (!a.r || !z.r || !HANGUL.test(a.c) || !HANGUL.test(z.c)) continue;
    if (z.r.top <= a.r.top + a.r.height * 0.6) continue;
    let s = i;
    while (s > 0 && !/\s/.test(cs[s - 1].c)) s--;
    let e = i + 1;
    while (e + 1 < cs.length && !/\s/.test(cs[e + 1].c)) e++;
    const tailChars = cs.slice(i + 1, e + 1);
    let rect: WordBreak["rect"] = null;
    const rs = tailChars.map((x) => x.r).filter((r): r is DOMRect => r !== null);
    if (o && rs.length) {
      const left = Math.min(...rs.map((r) => r.left));
      const top = Math.min(...rs.map((r) => r.top));
      const right = Math.max(...rs.map((r) => r.right));
      const bottom = Math.max(...rs.map((r) => r.bottom));
      rect = { x: (left - o.left) / scale, y: (top - o.top) / scale, width: (right - left) / scale, height: (bottom - top) / scale };
    }
    out.push({
      head: cs.slice(s, i + 1).map((x) => x.c).join(""),
      tail: tailChars.map((x) => x.c).join(""),
      rect,
    });
  }
  return out;
}

/** The whole word a break split, without trailing punctuation: "있어" + "요." → "있어요". */
export function wordOf(b: Pick<WordBreak, "head" | "tail">): string {
  return (b.head + b.tail).replace(/[.,!?…·]+$/, "");
}
