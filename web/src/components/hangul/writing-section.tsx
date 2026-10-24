import { fill, type HangulCopy, WRITING_EVAL } from "./copy";

/** The before string with its faulty part marked the way a proofreader would, in vermilion. */
function Marked({ text, mark }: { text: string; mark: string }) {
  const at = mark ? text.indexOf(mark) : -1;
  if (at < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <mark className="hg-fix-mark">{mark}</mark>
      {text.slice(at + mark.length)}
    </>
  );
}

/**
 * The writing layer (skills/hangul/SKILL.md §3b): strings agents wrote without the skill in the
 * writing eval, each beside the same string rewritten to the rule it broke, and the eval's figures.
 * The before strings are quoted as the agents wrote them; the after strings are rewrites, and the
 * section says so.
 */
export function WritingSection({ t, band }: { t: HangulCopy["writing"]; band: boolean }) {
  return (
    <section id="writing" className={`hg-sec${band ? " hg-band" : ""}`} aria-labelledby="hg-writing-h">
      <div className="sq-wrap">
        <h2 id="hg-writing-h" className="hg-d">{t.h2}</h2>
        <p className="hg-intro">{t.intro}</p>
        <ol className="hg-fixes">
          {t.fixes.map((f) => (
            <li key={f.where} className="hg-fix">
              <p className="hg-fix-where">
                <span>{f.where}</span>
                <span className="hg-rule-tag" lang="en">{f.id}</span>
              </p>
              <p className="hg-fix-row hg-fix-row--before" lang="ko">
                <span className="hg-fix-k">{t.before}</span>
                <span className="hg-fix-t">
                  <Marked text={f.before} mark={f.mark} />
                </span>
              </p>
              <p className="hg-fix-row" lang="ko">
                <span className="hg-fix-k">{t.after}</span>
                <span className="hg-fix-t">{f.after}</span>
              </p>
              <p className="hg-fix-why">{f.why}</p>
            </li>
          ))}
        </ol>
        <p className="hg-fix-note">{t.fixesNote}</p>
        <p className="hg-eval-unit hg-eval-unit--w">{t.evalUnit}</p>
        <div className="hg-eval">
          <div className="hg-fig">
            <p className="hg-fig-l">{t.evalBefore.label}</p>
            <p className="hg-fig-n hg-num hg-d">
              {WRITING_EVAL.before.all}
              <span>/{WRITING_EVAL.runs}</span>
            </p>
            <p className="hg-fig-s">{fill(t.evalBefore.sub, WRITING_EVAL.before)}</p>
          </div>
          <span className="hg-fig-arrow" aria-hidden="true">→</span>
          <div className="hg-fig">
            <p className="hg-fig-l">{t.evalAfter.label}</p>
            <p className="hg-fig-n hg-num hg-d">
              {WRITING_EVAL.after.all}
              <span>/{WRITING_EVAL.runs}</span>
            </p>
            <p className="hg-fig-s">{fill(t.evalAfter.sub, WRITING_EVAL.after)}</p>
          </div>
        </div>
        <p className="hg-eval-m">{fill(t.evalMethod, { runs: WRITING_EVAL.runs })}</p>
        <p className="hg-eval-c">{fill(t.evalCaveat, { bwBefore: WRITING_EVAL.bw.before, bwAfter: WRITING_EVAL.bw.after, runs: WRITING_EVAL.runs })}</p>
      </div>
    </section>
  );
}
