import transcript from "@/data/cli-transcript.json";
import type { SiteLocale } from "@/lib/i18n/site-locales";
import { PUBLIC_SKILL_COUNT, REFERENCE_COUNT, SKILL_COUNT, SUBAGENT_COUNT } from "@/lib/catalog-count";
import { getCliScreen } from "@/lib/landing-a/chat-data.server";
import { CliSteps, type TermRow } from "./cli-steps";
import { fmt, type BrandCopy } from "./copy";
import type { R10Copy } from "./copy/r10";
import { getR11Hero } from "./copy/r11-hero";

/**
 * "oh-my-design-cli 시작하기" (#use): one line of context, then two steps — install, then apply — as
 * rows, each step's text beside the visual it plays once in view (cli-steps.tsx). Round 13 (owner
 * 2026-10-21) replaced round 11's sticky stage, which left empty bands before and after it.
 *
 *   install  the command typed at the prompt (copyable; the hero's install box carries the same
 *            INSTALL), then an abstract of what that one command does (installScript): it finds the
 *            coding agents in the project and installs every skill in each agent's own format.
 *            Owner, 2026-10-21: "실제 설치되는 스크립트가 필요한 게 아니야 … 저 스크립트 하나로 사용자가
 *            필요로 하는 에이전트 환경에 맞춰 설치가 된다는 걸 보여 주는 거지." Every number and path in it
 *            is the installer's own: counts from catalog-meta.generated (SKILL / SUBAGENT /
 *            REFERENCE), the hook count from the real 2.0.4 run's Done line, and what each agent
 *            gets from src/cli/install-skills.ts (sub-agents for Claude Code, Codex and OpenCode;
 *            hooks for Claude Code only; Cursor's Agent Skills plus a DESIGN.md rule).
 *   apply    the agent trace (agent-trace.tsx, the hero's) on the left, the screen it writes on
 *            the right: the CLI's own printed next step ("Using this DESIGN.md, design the home
 *            screen.") on a Toss-inspired project, drawn only from Toss's verified tokens. No
 *            brand-face note under the trace (owner, round 13).
 *
 * The example project has Claude Code, Codex and Cursor but no OpenCode, so the run shows the
 * installer skipping an agent that isn't there (it preselects the agents it detects).
 */
export const INSTALL = transcript.runs[0].cmd;

/** The command as typed, breakable only at its spaces (never inside `oh-my-design-cli@latest`). */
export function CmdText({ cmd = INSTALL }: { cmd?: string }) {
  const words = cmd.split(" ");
  return <>{words.map((w, i) => <span key={i}>{i ? " " : null}<span className="sq-nb">{w}</span></span>)}</>;
}

/** The skills `npx skills` lists (no `metadata.internal`); __tests__/r13-cli.test.ts pins them to skills/. */
export const PUBLIC_SKILLS = [
  "omd-init", "omd-apply", "omd-autopilot", "omd-feel", "omd-restraint",
  "omd-slop-audit", "omd-humanize", "omd-landing", "omd-shader-hero", "omd-cjk-type-shader",
] as const;

/** Hooks the installer writes for Claude Code, read from the real 2.0.4 run's Done line. */
export const HOOK_COUNT = Number(/(\d+) hooks/.exec(transcript.runs[0].tail.join("\n"))?.[1]);

/**
 * The install as the terminal streams it: one command, the agents it finds, what each one gets, the
 * skills, the archive, Done. `hold` marks the beat where the install does its work.
 */
export function installScript(): TermRow[] {
  const more = SKILL_COUNT - PUBLIC_SKILLS.length;
  // three lines on a wide terminal, the rest of the bundle closing the last one, so the whole run fits
  // the fixed-height terminal at 1440 without the agents line scrolling away
  const names = `${PUBLIC_SKILLS.join(" · ")} · + ${more} more`.match(/.{1,64}(?:\s·\s|$)/g) ?? [];
  return [
    { t: "◆  Coding agents in this project", c: "sq-tp" },
    { t: "│  ✓ Claude Code   ✓ Codex   ✓ Cursor   – OpenCode (not here)" },
    { t: "│" },
    { t: "◇  Installing for each agent", c: "sq-tp", hold: true },
    { t: `│  Claude Code   ${SKILL_COUNT} skills · ${SUBAGENT_COUNT} sub-agents · ${HOOK_COUNT} hooks` },
    { t: `│  Codex         ${SKILL_COUNT} skills · ${SUBAGENT_COUNT} sub-agents` },
    { t: "│  Cursor        Agent Skills · DESIGN.md rule" },
    { t: "│" },
    { t: `◇  Skills — ${PUBLIC_SKILL_COUNT} public, ${SKILL_COUNT} in the bundle`, c: "sq-tp" },
    ...names.map((n) => ({ t: `│  ${n.replace(/\s·\s$/, "")}` })),
    { t: "│" },
    { t: `◇  DESIGN.md archive — ${REFERENCE_COUNT} references, offline`, c: "sq-tp" },
    { t: "└  Done. Restart your agent and ask in one sentence.", c: "sq-ta" },
  ];
}

/** Pre-hydration, right after the steps: hide the two runs that are about to play (agent-trace.tsx usePlay). */
const PRE = `(function(){try{if(/[?&]demo=/.test(location.search)||matchMedia("(prefers-reduced-motion: reduce)").matches)return;["cli-term","cli-apply"].forEach(function(i){var c=document.getElementById(i);if(c)c.classList.add("sq-pre")})}catch(e){}})();`;

/** The product name never breaks at its hyphens (a 390px /ja heading broke after "oh-my-design-"). */
function noBreakName(h: string) {
  const name = "oh-my-design-cli";
  const i = h.indexOf(name);
  if (i < 0) return h;
  return <>{h.slice(0, i)}<span className="sq-nb">{name}</span>{h.slice(i + name.length)}</>;
}

export function CliSection({ locale, c, r, skills, skillsHref }: { locale: SiteLocale; c: BrandCopy; r: R10Copy; total: number; skills: number; skillsHref: string }) {
  const h = getR11Hero(locale);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- the printed source stays on the server
  const { source, ...card } = getCliScreen(locale);
  return (
    <section className="sq-sec" id="use" aria-labelledby="h-use">
      <div className="sq-wrap">
        <h2 id="h-use">{noBreakName(r.cli.h2)}</h2>
        <p className="sq-intro">{h.cli.context}</p>
        <CliSteps
          steps={h.cli.steps}
          install={{
            cmd: INSTALL,
            rows: installScript(),
            gapLang: locale === "zh-tw" ? "zh-Hant" : locale,
            labels: { region: r.cli.term, copy: { copy: c.use.copy, copied: c.use.copied, failed: c.use.failed }, replay: h.cli.replay },
          }}
          apply={{ card, prompt: h.cli.prompt, think: h.cli.think, trace: h.trace }}
        />
        <script dangerouslySetInnerHTML={{ __html: PRE }} />
        <p className="sq-cli-skills" id="skills"><a href={skillsHref}>{fmt(r.cli.skillsLine, { skills })}</a></p>
      </div>
    </section>
  );
}
