import { Fragment, type ReactNode } from "react";

/**
 * Renders the few inline marks the landing copy uses — <b>, <code>,
 * <span class="nb"> (an unbreakable phrase) and &nbsp; &lt; &gt; &amp; —
 * as React elements. The copy is our own static text; anything else is
 * printed literally rather than injected as HTML.
 */
const TOKEN = /(<b>[\s\S]*?<\/b>|<code>[\s\S]*?<\/code>|<span class="nb">[\s\S]*?<\/span>)/g;

function decode(s: string): string {
  return s.replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
}

export function rich(s: string): ReactNode {
  return s.split(TOKEN).map((part, i) => {
    if (part.startsWith("<b>")) return <b key={i}>{decode(part.slice(3, -4))}</b>;
    if (part.startsWith("<code>")) return <code key={i}>{decode(part.slice(6, -7))}</code>;
    if (part.startsWith('<span class="nb">')) return <span key={i} className="sq-nb">{decode(part.slice(17, -7))}</span>;
    return <Fragment key={i}>{decode(part)}</Fragment>;
  });
}

/** Plain-text version (titles, aria labels). */
export function plain(s: string): string {
  return decode(s.replace(/<[^>]+>/g, ""));
}
