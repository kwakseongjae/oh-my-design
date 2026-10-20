import type { ReactNode } from "react";
import { InlineText } from "./inline-text";

/** Page head: the one <h1> and its lede. Docs pages carry no eyebrow above it (RESTRAINT R9). */
export function DocsHead({ title, lead }: { title: string; lead: string }) {
  return (
    <header className="dx-head">
      <h1 className="dx-h1">{title}</h1>
      <p className="dx-lede">{lead}</p>
    </header>
  );
}

/** An <h2 id> section; the id is what the on-this-page list links to. */
export function DocsSection({
  id,
  title,
  lead,
  children,
}: {
  id: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="dx-sec" aria-labelledby={id}>
      <h2 id={id} className="dx-h2">{title}</h2>
      {lead ? <p className="dx-p dx-muted"><InlineText text={lead} /></p> : null}
      {children}
    </section>
  );
}
