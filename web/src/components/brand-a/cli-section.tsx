import transcript from "@/data/cli-transcript.json";
import type { SiteLocale } from "@/lib/i18n/site-locales";
import { CopyButton } from "./copy-button";
import { CliSteps } from "./cli-steps";
import { fmt, type BrandCopy } from "./copy";
import type { R10Copy } from "./copy/r10";

/**
 * Round 10 "oh-my-design-cli 시작하기" (#use). Three steps beside the real transcript of the
 * published 2.0.3 package (data/cli-transcript.json, never edited), on the page's one dark field.
 *
 * What the terminal leaves out, at render time and named in the caption (DIRECTIONS.md):
 *   - the install run's per-file list (the transcript itself already marks it `elided`);
 *   - doctor's "Render checks: Google Chrome channel — /Applications/…" line;
 *   - the Next box's border, its blank rows, the two restart/trust notes, and the example
 *     prompt in the other language (ko keeps the KR line, every other locale the EN one).
 * Every printed line is otherwise verbatim (the box rows lose only their right border and padding).
 */
export const INSTALL = transcript.runs[0].cmd;

const BOX_NOTE = /Start a new agent session|Codex also requires/;

/** doctor's output, cut as the caption says, split at the Next box: [checks, next]. */
export function doctorLines(locale: SiteLocale): [string[], string[]] {
  const lines = transcript.runs[1].lines;
  const drop = locale === "ko" ? /^\s+EN\s/ : /^\s+KR\s/;
  const out: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (/Render checks:/.test(l)) { if (lines[i + 1] === "│") i++; continue; }
    if (/^├─+╯$/.test(l)) continue;
    if (l.startsWith("◇")) { out.push(l.replace(/\s*─+╮\s*$/, "")); continue; }
    if (l.length > 2 && l.startsWith("│") && l.endsWith("│")) {
      const inner = l.slice(1, -1).replace(/\s+$/, "");
      if (!inner.trim() || BOX_NOTE.test(inner) || drop.test(inner)) continue;
      out.push("│" + inner);
      continue;
    }
    out.push(l);
  }
  const at = out.findIndex((l) => l.startsWith("◇"));
  return [out.slice(0, at), out.slice(at)];
}

const Cmd = ({ cmd }: { cmd: string }) => (
  <code className="sq-tc" lang="en"><span className="sq-tc-ps" aria-hidden="true">$ </span>{cmd}</code>
);
const tone = (l: string) => (l.startsWith("◆") || l.startsWith("└  Done") ? "sq-ta" : l.startsWith("▲") ? "sq-tw" : /^│\s+(KR|EN)\s/.test(l) ? "sq-tp" : undefined);
const Out = ({ lines }: { lines: string[] }) => (
  <pre className="sq-to" lang="en">{lines.map((l, i) => <span key={i} className={tone(l)}>{l + "\n"}</span>)}</pre>
);

export function CliSection({ locale, c, r, total, skills, skillsHref }: { locale: SiteLocale; c: BrandCopy; r: R10Copy; total: number; skills: number; skillsHref: string }) {
  const [install, doctor] = transcript.runs;
  const [checks, next] = doctorLines(locale);
  const t = r.cli;
  const steps = [
    {
      title: t.steps[0].t,
      body: (
        <>
          <p>{t.steps[0].p}</p>
          <div className="sq-cmd" role="group" aria-label={t.steps[0].t}>
            <code lang="en"><span className="sq-cmd-ps" aria-hidden="true">$ </span>{INSTALL}</code>
            <CopyButton text={INSTALL} labels={c.use} className="sq-cmd-copy" />
          </div>
        </>
      ),
    },
    { title: t.steps[1].t, body: <><p>{t.steps[1].p}</p><p><code className="sq-chip-code" lang="en">{doctor.cmd}</code></p></> },
    { title: t.steps[2].t, body: <><p>{t.steps[2].p}</p><p className="sq-say">{t.say}</p></> },
  ];
  const term = [
    <>
      <Cmd cmd={install.cmd} />
      <pre className="sq-to" lang="en">
        {install.lines.join("\n") + "\n"}
        <span className="sq-tg" lang={locale === "zh-tw" ? "zh-Hant" : locale}>{"│  … " + fmt(c.use.gap, { n: install.elided }) + "\n"}</span>
        <span className="sq-ta">{install.tail.join("\n")}</span>
      </pre>
    </>,
    <><Cmd cmd={doctor.cmd} /><Out lines={checks} /></>,
    <Out lines={next} />,
  ];
  return (
    <section className="sq-sec" id="use" aria-labelledby="h-use">
      <div className="sq-wrap">
        <h2 id="h-use">{t.h2}</h2>
        <p className="sq-intro">{fmt(t.p, { total })}</p>
        <CliSteps steps={steps} term={term} label={t.h2} termLabel={t.term} />
        <p className="sq-cli-cap">{fmt(t.caption, { ver: transcript.version, date: transcript.captured, n: install.elided })}</p>
        <p className="sq-cli-skills" id="skills"><a href={skillsHref}>{fmt(t.skillsLine, { skills })}</a></p>
      </div>
    </section>
  );
}
