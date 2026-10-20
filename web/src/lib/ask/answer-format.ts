/**
 * Turns the model's plain-text answer into blocks the question box renders as React elements:
 * paragraphs, "- " bullet lists, `code` spans and [n] citations. Nothing is injected as HTML.
 * A citation number with no matching source is dropped rather than shown as a dead link.
 * Client-safe and pure, so a half-streamed answer re-parses cheaply on every delta.
 */

export type AskInline = { k: "text"; v: string } | { k: "code"; v: string } | { k: "cite"; n: number[] };
export type AskBlock = { k: "p"; parts: AskInline[] } | { k: "ul"; items: AskInline[][] };

const INLINE = /(`[^`\n]+`|\[\d{1,2}(?:\s*[,，、]\s*\d{1,2})*\])/g;
const CITE = /^\[(\d{1,2}(?:\s*[,，、]\s*\d{1,2})*)\]$/;

export function parseInline(line: string, sourceCount: number): AskInline[] {
  const out: AskInline[] = [];
  for (const piece of line.replace(/\*\*/g, "").split(INLINE)) {
    if (!piece) continue;
    if (piece.length > 2 && piece.startsWith("`") && piece.endsWith("`")) {
      out.push({ k: "code", v: piece.slice(1, -1) });
      continue;
    }
    const m = CITE.exec(piece);
    if (m) {
      const n = m[1].split(/\s*[,，、]\s*/).map(Number).filter((x) => x >= 1 && x <= sourceCount);
      if (n.length) {
        const last = out[out.length - 1];
        if (last?.k === "cite") last.n.push(...n.filter((x) => !last.n.includes(x)));
        else {
          // the pill keeps its own gap; "works [1]." should not read "works  ①."
          if (last?.k === "text") last.v = last.v.replace(/\s+$/, "");
          out.push({ k: "cite", n: [...new Set(n)] });
        }
      }
      continue;
    }
    const last = out[out.length - 1];
    if (last?.k === "text") last.v += piece;
    else out.push({ k: "text", v: piece });
  }
  return out;
}

export function parseAnswer(text: string, sourceCount: number): AskBlock[] {
  const blocks: AskBlock[] = [];
  let para: string[] = [];
  let list: AskInline[][] | null = null;
  const flushPara = () => {
    if (para.length) blocks.push({ k: "p", parts: parseInline(para.join(" "), sourceCount) });
    para = [];
  };
  const flushList = () => {
    if (list?.length) blocks.push({ k: "ul", items: list });
    list = null;
  };
  for (const raw of text.split("\n")) {
    const line = raw.trim();
    const bullet = /^[-•*]\s+(.*)$/.exec(line);
    if (bullet) {
      flushPara();
      (list ??= []).push(parseInline(bullet[1], sourceCount));
    } else if (!line) {
      flushPara();
      flushList();
    } else {
      flushList();
      para.push(line.replace(/^#{1,6}\s+/, ""));
    }
  }
  flushPara();
  flushList();
  return blocks;
}

/** "oh-my-design.kr/docs/ko/getting-started", "github.com/…/README.ko.md". */
export function sourceLabel(url: string): string {
  if (url.startsWith("/")) return `oh-my-design.kr${url.split("#")[0] === "/" ? "" : url.split("#")[0]}`;
  try {
    const u = new URL(url);
    const file = u.pathname.split("/").filter(Boolean).pop();
    return u.host === "github.com" ? `github.com/…/${file && file.includes(".") ? file : "README.md"}` : `${u.host}${u.pathname}`;
  } catch {
    return url;
  }
}
