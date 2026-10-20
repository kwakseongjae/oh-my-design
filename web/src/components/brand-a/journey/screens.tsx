import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import type { ScreenKind } from "@/lib/landing-a/picks";
import type { JourneyCopy } from "../copy/r11-journey";
import type { Plan } from "./model";
import "./screens.css";

/**
 * The seven sample screens (owner #11). Presentational only: each draws the elements its plan
 * (journey/model.ts) holds and nothing for the ones it left out. Every brand value arrives through
 * the CSS custom properties on the frame; journey/screens.css only lays the elements out. The
 * action is a styled span, not a control: the screen is a picture of the product, and the only
 * interaction on it is the provenance tooltip (gen-ui.tsx), which `el` wires in.
 */

export type ElAttrs = HTMLAttributes<HTMLElement> & { readonly className: string; readonly "data-k": string };
/** Attributes for one plan element, or null when the plan left it out. */
export type ElFn = (id: string, cls: string) => ElAttrs | null;

type S = JourneyCopy["sample"];
type View<K extends ScreenKind> = (p: { c: S[K]; el: ElFn }) => ReactNode;

const wrap = (attrs: ElAttrs | null, child: ReactNode) => (attrs ? <div {...attrs}>{child}</div> : child);

const Transfer: View<"transfer"> = ({ c, el }) => {
  const label = el("label", "sq-x-s sq-x-body");
  const amount = el("amount", "sq-x-h");
  const rows = el("rows", "sq-x-list");
  const cta = el("cta", "sq-x-btn sq-x-wide");
  return (
    <>
      {label || amount ? (
        <div className="sq-x-stack">
          {label ? <p {...label}>{c.label}</p> : null}
          {amount ? <p {...amount}>{c.amount}</p> : null}
        </div>
      ) : null}
      {rows
        ? wrap(
            el("card", "sq-x-card"),
            <ul {...rows}>
              {c.rows.map(([name, meta, amt]) => (
                <li key={name} className="sq-x-row">
                  <span className="sq-x-col">
                    <span className="sq-x-p">{name}</span>
                    <span className="sq-x-s sq-x-meta">{meta}</span>
                  </span>
                  <span className="sq-x-p">{amt}</span>
                </li>
              ))}
            </ul>,
          )
        : null}
      {cta ? <span {...cta}>{c.cta}</span> : null}
    </>
  );
};

const Listing: View<"listing"> = ({ c, el }) => {
  const title = el("title", "sq-x-h");
  const cta = el("cta", "sq-x-btn");
  const items = el("items", "sq-x-feed");
  return (
    <>
      {title || cta ? (
        <div className="sq-x-bar">
          {title ? <p {...title}>{c.title}</p> : null}
          {cta ? <span {...cta}>{c.cta}</span> : null}
        </div>
      ) : null}
      {items ? (
        <ul {...items}>
          {c.items.map(([name, price, meta]) => (
            <li key={name} className="sq-x-item">
              <span className="sq-x-cf">{name}</span>
              <span className="sq-x-p">{price}</span>
              <span className="sq-x-s sq-x-meta">{meta}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

const Account: View<"account"> = ({ c, el }) => {
  const name = el("name", "sq-x-p sq-x-body");
  const balance = el("balance", "sq-x-h");
  const cta = el("cta", "sq-x-btn");
  const rows = el("rows", "sq-x-links");
  return (
    <>
      {name || balance ? (
        <div className="sq-x-stack">
          {name ? <p {...name}>{c.name}</p> : null}
          {balance ? <p {...balance}>{c.balance}</p> : null}
        </div>
      ) : null}
      {cta ? <span {...cta}>{c.cta}</span> : null}
      {rows ? (
        <ul {...rows}>
          {c.rows.map(([n, amt]) => (
            <li key={n} className="sq-x-link-row">
              <span className="sq-x-cf">{n}</span>
              <span className="sq-x-p">{amt}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

const Assets: View<"assets"> = ({ c, el }) => {
  const caption = el("caption", "sq-x-s sq-x-body");
  const total = el("total", "sq-x-h");
  const rows = el("rows", "sq-x-list sq-x-ruled");
  const cta = el("cta", "sq-x-btn sq-x-wide");
  const body = (
    <>
      {caption || total ? (
        <div className="sq-x-stack">
          {caption ? <p {...caption}>{c.caption}</p> : null}
          {total ? <p {...total}>{c.total}</p> : null}
        </div>
      ) : null}
      {rows ? (
        <ul {...rows}>
          {c.rows.map(([n, amt]) => (
            <li key={n} className="sq-x-row">
              <span className="sq-x-p">{n}</span>
              <span className="sq-x-p">{amt}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
  const card = el("card", "sq-x-card sq-x-panel");
  return (
    <>
      {card ? <div {...card}>{body}</div> : body}
      {cta ? <span {...cta}>{c.cta}</span> : null}
    </>
  );
};

const Ledger: View<"ledger"> = ({ c, el }) => {
  const title = el("title", "sq-x-h");
  const rows = el("rows", "sq-x-ledger");
  const cta = el("cta", "sq-x-btn");
  return (
    <>
      {title ? <p {...title}>{c.title}</p> : null}
      {rows ? (
        <ul {...rows}>
          {c.rows.map(([date, desc, amt]) => (
            <li key={date + desc} className="sq-x-entry">
              <span className="sq-x-p sq-x-meta">{date}</span>
              <span className="sq-x-p">{desc}</span>
              <span className="sq-x-p">{amt}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {cta ? <span {...cta}>{c.cta}</span> : null}
    </>
  );
};

const Job: View<"job"> = ({ c, el }) => {
  const title = el("title", "sq-x-h");
  const jobs = el("jobs", "sq-x-jobs");
  const cta = el("cta", "sq-x-btn");
  return (
    <>
      {title ? <p {...title}>{c.title}</p> : null}
      {jobs ? (
        <ul {...jobs}>
          {c.jobs.map(([t, who, meta]) => (
            <li key={t} className="sq-x-job">
              <span className="sq-x-l">{t}</span>
              <span className="sq-x-p sq-x-link">{who}</span>
              <span className="sq-x-p sq-x-meta">{meta}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {cta ? <span {...cta}>{c.cta}</span> : null}
    </>
  );
};

const Chats: View<"chats"> = ({ c, el }) => {
  const title = el("title", "sq-x-h");
  const rows = el("rows", "sq-x-chats");
  return (
    <>
      {title ? <p {...title}>{c.title}</p> : null}
      {rows ? (
        <ul {...rows}>
          {c.rows.map(([name, msg, time, unread]) => {
            const badge = unread > 0 ? el("badge", "sq-x-badge") : null;
            return (
              <li key={name} className="sq-x-chat">
                <span className="sq-x-l">{name}</span>
                <span className="sq-x-s sq-x-meta">{time}</span>
                <span className="sq-x-s sq-x-body">{msg}</span>
                {badge ? <span {...badge}>{unread}</span> : <span aria-hidden="true" />}
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
};

const VIEWS: { readonly [K in ScreenKind]: View<K> } = {
  transfer: Transfer,
  listing: Listing,
  account: Account,
  assets: Assets,
  ledger: Ledger,
  job: Job,
  chats: Chats,
};

/**
 * The screen: a frame carrying only the plan's variables (claimed values) plus the face stack, and
 * the kind's view inside. `frame` is the frame element's own attributes (skeleton state, tooltip).
 */
export function Screen({ plan, copy, el, frame, face }: { plan: Plan; copy: S; el: ElFn; frame: ElAttrs | null; face: string }) {
  const View = VIEWS[plan.kind] as View<ScreenKind>;
  const style = { ...plan.vars, "--scr-ff": face } as CSSProperties;
  const attrs = frame ?? { className: "", "data-k": "frame" };
  return (
    <div {...attrs} className={`sq-scr sq-x sq-x-${plan.kind}${attrs.className ? ` ${attrs.className}` : ""}`} style={style}>
      <div className="sq-x-in">
        <View c={copy[plan.kind] as never} el={el} />
      </div>
    </div>
  );
}
