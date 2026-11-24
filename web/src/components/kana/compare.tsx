import type { ReactNode } from "react";
import data from "@/data/kana-rules.generated.json";
import { COMPARE_STOPS, type CompareKind } from "./copy";
import { CompareTour } from "./compare-tour";
import { KANA_KIT } from "./locale";
import { RuleLine, SourceLink } from "./parts";

/**
 * The Japanese edition's first screen (owner 2026-11-24: the Japanese page opens source-first). Each stop sets one of a
 * source's wrong/right pairs in the component its rule is about, the wrong side over the right side. The Japanese is
 * the pair's own text from the generated data, character for character; around it the component is a skeleton: grey
 * bars wherever the source gives no string. Every stop is rendered here, on the server; compare-tour.tsx only picks
 * which one shows. Until 2026-11-24 this was #compare on /ko/kana, a section of its own.
 */

type Side = { role: string; label: string | null; texts: string[] };
type Example = { key: string; via?: string; sides: Side[] };
export type Role = "wrong" | "right";

const t = KANA_KIT.ja.t;
const RULE = new Map(data.rules.map((r) => [r.id, r]));

/** The stop's example and its two sides, or throws: a stop that names no pair is a data error, not an empty panel. */
export function comparePair(stop: (typeof COMPARE_STOPS)[number]) {
  const e = (RULE.get(stop.rule)?.examples as Example[] | undefined)?.[stop.example];
  const wrong = e?.sides.find((s) => s.role === "wrong");
  const right = e?.sides.find((s) => s.role === "right");
  if (!e || !wrong || !right) throw new Error(`stage: ${stop.rule} example ${stop.example} is not a wrong/right pair`);
  return { example: e, wrong, right };
}

/** One of the pair's strings, as the source gives it. */
function Text({ text, stop, role }: { text: string; stop: number; role: Role }) {
  return (
    <span className="kc-ja" lang="ja" data-stop={stop} data-role={role}>
      {text}
    </span>
  );
}

/** A grey bar where the component would hold a string the source does not give. */
function Bar({ w, kind = "line" }: { w: number; kind?: "line" | "title" | "btn" | "field" | "cell" }) {
  return <i className={`kc-bar kc-bar--${kind}`} style={{ width: `${w}%` }} aria-hidden="true" />;
}

function Dialog({ children, foot }: { children: ReactNode; foot: ReactNode }) {
  return (
    <div className="kc-scrim">
      <div className="kc-dialog">
        {children}
        <div className="kc-dialog-foot">{foot}</div>
      </div>
    </div>
  );
}

/** The component a stop's kind names, with the pair's strings where the component shows them. */
function Specimen({ kind, texts, stop, role }: { kind: CompareKind; texts: string[]; stop: number; role: Role }) {
  const all = texts.map((x, i) => <Text key={i} text={x} stop={stop} role={role} />);
  switch (kind) {
    case "button":
      return (
        <div className="kc-page">
          <Bar w={46} kind="title" />
          <Bar w={92} />
          <Bar w={70} />
          <div className="kc-push" />
          <span className="kc-btn kc-btn--main">{all}</span>
        </div>
      );
    case "instruction":
      return (
        <div className="kc-page">
          <Bar w={46} kind="title" />
          <Bar w={88} />
          <Bar w={64} />
          <p className="kc-instr">{all}</p>
          <div className="kc-push" />
          <i className="kc-bar kc-bar--btn kc-bar--wide" aria-hidden="true" />
        </div>
      );
    case "field-error":
      // the source lists its examples one under another, not as fields of one form; one field per example
      return (
        <div className="kc-page">
          {texts.map((x, i) => (
            <div key={i} className="kc-field">
              <Bar w={28} />
              <span className="kc-input" aria-hidden="true" />
              <p className="kc-err">
                <Text text={x} stop={stop} role={role} />
              </p>
            </div>
          ))}
        </div>
      );
    case "notification-bar":
      return (
        <div className="kc-page">
          <Bar w={40} kind="title" />
          <div className="kc-nbar">
            <span className="kc-nbar-icon" aria-hidden="true" />
            <p className="kc-nbar-t">{all}</p>
          </div>
          <Bar w={90} />
          <Bar w={76} />
          <Bar w={84} />
        </div>
      );
    case "count-line":
      return (
        <div className="kc-page">
          <Bar w={40} kind="title" />
          <p className="kc-countline">{all}</p>
          <div className="kc-table" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((r) => (
              <div key={r} className={r ? "kc-row" : "kc-row kc-row--head"}>
                <Bar w={22} kind="cell" />
                <Bar w={34} kind="cell" />
                <Bar w={18} kind="cell" />
              </div>
            ))}
          </div>
        </div>
      );
    case "dialog-title":
      return (
        <Dialog foot={<><Bar w={30} kind="btn" /><Bar w={30} kind="btn" /></>}>
          <p className="kc-dialog-h">{all}</p>
          <Bar w={90} />
          <Bar w={66} />
          <Bar w={100} kind="field" />
        </Dialog>
      );
    case "dialog-button":
      return (
        <Dialog foot={<><Bar w={30} kind="btn" /><span className="kc-btn kc-btn--main kc-btn--sm">{all}</span></>}>
          <Bar w={54} kind="title" />
          <Bar w={92} />
          <Bar w={100} kind="field" />
        </Dialog>
      );
    case "dialog-question":
      return (
        <Dialog foot={<><Bar w={30} kind="btn" /><Bar w={30} kind="btn" /></>}>
          <p className="kc-dialog-q">{all}</p>
          <Bar w={84} />
          <Bar w={58} />
        </Dialog>
      );
  }
}

/** One side of one stop: the source's own label for that side, then the screen. */
function Panel({ side, role, kind, stop }: { side: Side; role: Role; kind: CompareKind; stop: number }) {
  return (
    <div className="kc-panel">
      <p className={`kc-label kc-label--${role}`}>
        {side.label ? <span lang={/^[A-Za-z']+$/.test(side.label) ? "en" : "ja"}>{side.label}</span> : role === "wrong" ? t.rules.before : t.rules.after}
      </p>
      <div className="kc-screen">
        <Specimen kind={kind} texts={side.texts} stop={stop} role={role} />
      </div>
    </div>
  );
}

/** The Japanese edition's first-screen stage: the sources' own pairs, one stop at a time, each with its rule's lead
 *  quote (from the example's own source where it has one) and the source's link. */
export function KanaStage() {
  const c = t.compare!;
  const stops = COMPARE_STOPS.map((s, i) => {
    const { example, wrong, right } = comparePair(s);
    return {
      id: s.rule,
      caption: (
        <div key={i} className="kc-cap">
          <p className="kc-cap-top">
            <a className="kc-cap-id" href={`#${s.rule.toLowerCase()}`} lang="en" aria-label={`${s.rule}${t.paren[0]}${c.toCard}${t.paren[1]}`}>
              {s.rule}
            </a>
            <span className="kc-cap-kind">{c.kind[s.kind]}</span>
          </p>
          <p className="kc-cap-rule">
            <RuleLine id={s.rule} locale="ja" prefer={example.key} />
          </p>
          <p className="kc-cap-src">
            <SourceLink k={example.key} locale="ja" />
          </p>
        </div>
      ),
      wrong: <Panel key={i} side={wrong} role="wrong" kind={s.kind} stop={i} />,
      right: <Panel key={i} side={right} role="right" kind={s.kind} stop={i} />,
    };
  });
  return (
    <div className="kc-hero">
      <CompareTour
        labels={{
          wrong: c.wrong,
          right: c.right,
          group: c.switchGroup,
          stops: c.stopsLabel,
          hintAuto: c.hintAuto,
          hintPaused: c.hintPaused,
          play: c.play,
          pause: c.pause,
        }}
        ids={stops.map((s) => s.id)}
        kinds={COMPARE_STOPS.map((s) => c.kind[s.kind])}
        captions={stops.map((s) => s.caption)}
        wrong={stops.map((s) => s.wrong)}
        right={stops.map((s) => s.right)}
      />
      <p className="kc-real">{c.real}</p>
    </div>
  );
}
