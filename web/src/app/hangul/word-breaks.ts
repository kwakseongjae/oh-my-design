// Finds Korean words that the browser split across two lines.
// Same walk as skills/hangul/scripts/render-check.mjs (feat/hangul-skill): every
// character gets a Range rect, and two adjacent Hangul syllables whose rects sit
// on different lines are a broken word. <br> counts as an intentional break,
// and a <br> hidden with display:none renders no break, so it is skipped.

const HANGUL = /[가-힣]/;

export type WordBreak = {
  /** The word as two fragments, e.g. ["있어", "요."]. */
  head: string;
  tail: string;
  /** The tail fragment's rect, relative to `origin`, in unscaled CSS px. */
  rect: { x: number; y: number; width: number; height: number } | null;
};

type Ch = { c: string; r: DOMRect | null };

export function findWordBreaks(el: HTMLElement, origin?: HTMLElement, scale = 1): WordBreak[] {
  const chars: Ch[] = [];
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
  let n: Node | null;
  while ((n = walker.nextNode())) {
    if (n.nodeType === 1) {
      const e = n as HTMLElement;
      if (e.tagName === "BR" && getComputedStyle(e).display !== "none") chars.push({ c: "\n", r: null });
      continue;
    }
    const t = n as Text;
    for (let i = 0; i < t.data.length; i++) {
      const range = document.createRange();
      range.setStart(t, i);
      range.setEnd(t, i + 1);
      const r = [...range.getClientRects()].find((x) => x.width > 0) ?? null;
      chars.push({ c: t.data[i], r });
    }
  }

  const out: WordBreak[] = [];
  const o = origin?.getBoundingClientRect();
  for (let i = 0; i + 1 < chars.length; i++) {
    const a = chars[i];
    const z = chars[i + 1];
    if (!a.r || !z.r || !HANGUL.test(a.c) || !HANGUL.test(z.c)) continue;
    if (z.r.top <= a.r.top + a.r.height * 0.6) continue;
    let s = i;
    while (s > 0 && !/\s/.test(chars[s - 1].c)) s--;
    let e = i + 1;
    while (e + 1 < chars.length && !/\s/.test(chars[e + 1].c)) e++;
    const head = chars.slice(s, i + 1).map((x) => x.c).join("");
    const tailChars = chars.slice(i + 1, e + 1);
    const tail = tailChars.map((x) => x.c).join("");
    let rect: WordBreak["rect"] = null;
    if (o) {
      const rs = tailChars.map((x) => x.r).filter((r): r is DOMRect => !!r);
      if (rs.length) {
        const left = Math.min(...rs.map((r) => r.left));
        const top = Math.min(...rs.map((r) => r.top));
        const right = Math.max(...rs.map((r) => r.right));
        const bottom = Math.max(...rs.map((r) => r.bottom));
        rect = {
          x: (left - o.left) / scale,
          y: (top - o.top) / scale,
          width: (right - left) / scale,
          height: (bottom - top) / scale,
        };
      }
    }
    out.push({ head, tail, rect });
  }
  return out;
}

/** The rendered lines of an element, as strings. */
export function renderedLines(el: HTMLElement): string[] {
  const lines: { top: number; text: string }[] = [];
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  let n: Node | null;
  while ((n = walker.nextNode())) {
    const t = n as Text;
    for (let i = 0; i < t.data.length; i++) {
      const range = document.createRange();
      range.setStart(t, i);
      range.setEnd(t, i + 1);
      const r = [...range.getClientRects()].find((x) => x.width > 0);
      if (!r) continue;
      const last = lines[lines.length - 1];
      if (last && Math.abs(r.top - last.top) < r.height * 0.6) last.text += t.data[i];
      else lines.push({ top: r.top, text: t.data[i] });
    }
  }
  return lines.map((l) => l.text.trim()).filter(Boolean);
}
