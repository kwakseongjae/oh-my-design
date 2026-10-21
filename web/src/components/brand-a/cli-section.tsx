import transcript from "@/data/cli-transcript.json";
import type { SiteLocale } from "@/lib/i18n/site-locales";
import { getCliScreen } from "@/lib/landing-a/chat-data.server";
import { CopyButton } from "./copy-button";
import { CliSteps } from "./cli-steps";
import { fmt, type BrandCopy } from "./copy";
import type { R10Copy } from "./copy/r10";
import { getR11Hero } from "./copy/r11-hero";

/**
 * "oh-my-design-cli 시작하기" (#use): one line of context, then two steps — install, then apply — as
 * rows, each step's text beside its own visual (cli-steps.tsx). Round 13 (owner 2026-10-21) replaced
 * round 11's sticky stage, which left empty bands before and after it.
 *
 *   install  the command (copyable; the hero's install box carries the same INSTALL) and the real
 *            output of the published package (data/cli-transcript.json, recaptured with
 *            scripts/capture-cli-transcript.mjs; the JSON's one cut — the per-file list — is
 *            marked in the terminal with its line count).
 *   apply    the agent trace (agent-trace.tsx, the hero's) on the left, the screen it writes on
 *            the right: the CLI's own printed next step ("Using this DESIGN.md, design the home
 *            screen.") on a Toss-inspired project, drawn only from Toss's verified tokens. No
 *            brand-face note under the trace (owner, round 13).
 *
 * What the terminal changes at render time, and only this (boxLines): the Next box loses its
 * border characters, the padding before its right border and its blank rows; trailing spaces go.
 * Every printed word stays, in order. The doctor run stays in the JSON (same schema) but is no
 * longer shown — the "check" step is gone (owner, #12).
 */
export const INSTALL = transcript.runs[0].cmd;

/** The command as typed, breakable only at its spaces (never inside `oh-my-design-cli@latest`). */
export function CmdText({ cmd = INSTALL }: { cmd?: string }) {
  const words = cmd.split(" ");
  return <>{words.map((w, i) => <span key={i}>{i ? " " : null}<span className="sq-nb">{w}</span></span>)}</>;
}

/** A clack box printed flat: no ─╮ / ├─╯ rules, no right border or padding, no blank box rows. */
export function boxLines(lines: readonly string[]): string[] {
  const out: string[] = [];
  for (const l of lines) {
    if (/^├─+╯\s*$/.test(l)) continue;
    if (/^◇\s/.test(l)) { out.push(l.replace(/\s*─+╮\s*$/, "")); continue; }
    if (l.length > 2 && l.startsWith("│") && l.trimEnd().endsWith("│")) {
      const inner = l.trimEnd().slice(1, -1).replace(/\s+$/, "");
      if (inner.trim()) out.push("│" + inner);
      continue;
    }
    out.push(l.replace(/\s+$/, ""));
  }
  return out;
}

/* the output's own marks: ◆ / Done the success tone, ▲ / ⚠ the warning tone, the prompts it tells you to send in full ink */
const tone = (l: string) =>
  /^(◆|└ {2}Done)/.test(l) ? "sq-ta" : /^(▲|│ {2}⚠)/.test(l) ? "sq-tw" : /^│ {4}\S/.test(l) ? "sq-tp" : undefined;

/** Pre-hydration, right after the steps: hide the apply run that is about to play (agent-trace.tsx usePlay). */
const APPLY_PRE = `(function(){try{var c=document.getElementById("cli-apply");if(c&&!/[?&]demo=/.test(location.search)&&!matchMedia("(prefers-reduced-motion: reduce)").matches)c.classList.add("sq-pre")}catch(e){}})();`;

export function CliSection({ locale, c, r, skills, skillsHref }: { locale: SiteLocale; c: BrandCopy; r: R10Copy; total: number; skills: number; skillsHref: string }) {
  const h = getR11Hero(locale);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- the printed source stays on the server
  const { source, ...card } = getCliScreen(locale);
  const install = transcript.runs[0];
  const tail = boxLines(install.tail);
  const term = (
    <div className="sq-term" role="region" aria-label={r.cli.term}>
      <div className="sq-term-cmd">
        <code lang="en"><span className="sq-tc-ps" aria-hidden="true">$ </span><CmdText /></code>
        <CopyButton text={INSTALL} labels={c.use} className="sq-cmd-copy" />
      </div>
      <pre className="sq-to" lang="en" tabIndex={0}>
        {boxLines(install.lines).map((l, i) => <span key={i} className={tone(l)}>{l + "\n"}</span>)}
        <span className="sq-tg" lang={locale === "zh-tw" ? "zh-Hant" : locale}>{"│  … " + fmt(c.use.gap, { n: install.elided }) + "\n"}</span>
        {tail.map((l, i) => <span key={i} className={tone(l)}>{l + (i < tail.length - 1 ? "\n" : "")}</span>)}
      </pre>
    </div>
  );
  return (
    <section className="sq-sec" id="use" aria-labelledby="h-use">
      <div className="sq-wrap">
        <h2 id="h-use">{r.cli.h2}</h2>
        <p className="sq-intro">{h.cli.context}</p>
        <CliSteps steps={h.cli.steps} term={term} apply={{ card, prompt: h.cli.prompt, think: h.cli.think, trace: h.trace }} />
        <script dangerouslySetInnerHTML={{ __html: APPLY_PRE }} />
        <p className="sq-cli-skills" id="skills"><a href={skillsHref}>{fmt(r.cli.skillsLine, { skills })}</a></p>
      </div>
    </section>
  );
}
