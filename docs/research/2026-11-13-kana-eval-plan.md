# /kana evaluation plan (not run)

Does loading the Japanese skill reduce Japanese typography defects in agent-built web UI? Same shape as the
`/hangul` eval of 2026-09-29 (`docs/research/2026-09-29-growth/hangul-eval-plan.md`, results in
`skills/hangul/references/eval-2026-09.md`), with the differences that Japanese forces.

## What is different from the Korean eval

- **No BLOCK tier.** The Korean checker has rules a ratified source requires; the Japanese rule draft has none
  that survive as a web requirement (independent check, 2026-11-12: 27 of 102 rules claimed more than their source,
  now narrowed in `rules.v2.md`). `scripts/lang/kana-check.mjs` reports WARN and FYI only. The primary metric is
  therefore **WARN count per run**, and the claim the eval can support is "fewer departures from what the Japanese
  government design system and the browser vendors recommend", not "fewer errors".
- **The baseline may already be clean.** Korean defects came from agents applying Latin habits (negative tracking,
  `break-all`, Latin-only stacks). The Japanese checks that can fire on such habits are JT-01 (body line-height
  under 1.5), JT-22 (no Japanese face in the stack), JT-25 (`lang` left as `en`), JT-26 (italic) and JT-32
  (ellipsis without its companions). Whether agents actually trip them is not known. **Run arm A first, alone**
  (9 runs): if the median WARN is 0 on every prompt, the typography half of the skill has nothing to show and the
  eval moves to the writing rules, which need their own checker.
- **A reader who is not us.** Neither the builders nor the owner read Japanese natively. The prompts below and the
  screenshot pair need a native reader's pass before anything is published from this eval.

## Design

3 prompts × 2 arms × 3 runs = 18 runs per channel.

| Arm | Setup |
|---|---|
| A: without | clean template, no skill |
| B: with | same template, the skill folder copied into the project, and one line added to the prompt: 「この作業では kana スキルを使う：.agents/skills/kana/SKILL.md を読み、そのとおりに従う」 |

Arm B waits for `SKILL.md`. Arm A can run as soon as the prompts have been read by a native speaker.

## Controls

- **Model and harness:** Codex CLI, one model id and effort for every run (the Korean eval used `gpt-6-astra` at
  medium; max ran over the 20-minute cap). Claude subagents on Sonnet as the second channel. Record versions.
- **Isolation.** A Codex run loads the user's skills from `~/.agents/skills` even with `--ignore-user-config`
  (seen in every worker log on 2026-11-12), and this machine has `hangul` and `omd-feel` installed there. Each run
  gets an empty `HOME` and `CODEX_HOME` holding only the login file, and a workspace outside the repository. A run
  whose log shows a skill loaded from the user's home is discarded. Claude subagents inherit the repository's
  `CLAUDE.md` and hooks: run them from a folder outside it.
- **Workspace:** the pinned `create-next-app` tarball of the Korean eval (SHA-256 prefix `7616f2ba63d7ee9d`), with
  its defaults (`<html lang="en">`, Geist through `next/font`) and without `AGENTS.md` / `CLAUDE.md`.
- **Identical prompt text** in both arms, byte for byte, apart from the one skill line.
- Save the transcript, the final diff, run id, date, skill commit, and the checker's SHA-256.

## Prompts (to be read by a native speaker before use)

1. **Fintech landing hero.** 「日本のフィンテックサービスのランディングページのヒーローセクションを作ってください。2行の大きな見出し、
   サブコピー、「今すぐはじめる」ボタン、登録者数や累計送金額などの数値指標を3つ入れてください。」 Stresses JT-01, JT-05, JT-22, JT-25.
2. **Settings page.** 「日本語のモバイルWeb設定ページを作ってください。アカウント情報（メールアドレス、長い紹介リンクのURLを含む）、
   通知設定のトグル5つと各項目の説明、退会ボタン。」 Stresses JT-13, JT-32 (a long URL in a narrow column), JT-09, JT-12.
3. **Pricing section.** 「日本のSaaSの料金プランのセクションを作ってください。ベーシック・プロ・エンタープライズの3プラン、
   円建ての月額料金、プランごとの機能6つ、「一番人気」バッジ、年払い割引の案内。」 Stresses JT-01 on wrapping headings, JT-26
   (emphasis), JT-07.

The prompts name no typography values.

## Measurement

`node scripts/lang/kana-check.mjs --json <run-dir>` per run.

- **Primary:** WARN count per run. **Secondary:** FYI count; per-rule hit (yes/no per run).
- **Report:** per prompt × arm, the median (min–max) over the 3 runs, and a per-rule hit table (hits out of 3).
- **Success for the typography half:** on each prompt, median WARN ≥ 1 in arm A and 0 in arm B, with no rise in FYI.
- **Regression gates:** `kana-check.mjs --self-test` passes at the recorded commit.
- **Against what sites ship:** quote the measured table next to the result (77 Japanese sites, 2026-11-12:
  paragraph line-height median 1.7, body tracking 0 on 63, `palt` on any text 23, `break-all` on a tenth of the
  text or more 12, a Latin face before the Japanese one 30). A run can pass the checker and still sit outside what
  Japanese services do; say so where it happens.
- **With n = 3 per cell the results are descriptive.** No significance claims.

## What the checker cannot see

It reads source, not rendered pages: not which font renders, not where lines break, not kinsoku at line ends
(no source states those as web requirements, so the checker does not test them and the eval makes no claim about
them). It checks exactly the rules the skill teaches, so it measures compliance, not typographic quality.

## Screenshot pair

Prompt 1, the median-WARN run of each arm, Chrome on macOS at 390 × 844 and 1440 × 900, taken headless (no
window). Look for: body text set tighter than 1.5, Latin and Japanese glyphs from mismatched faces, italic
Japanese, a headline that breaks inside a word-like unit. A native reader says what they see before any caption
is written.

## Threats to validity

- Checker and skill share an author and a rule file, so they share blind spots.
- The typography rules are recommendations; an agent that ignores them is not wrong, and the write-up must not say
  it is.
- The template shapes the baseline (`lang="en"` and a Latin-only font import make JT-22 and JT-25 likely in arm A;
  report results with and without those two rules).
- n = 3.

## Cost

Arm A alone: 9 Codex runs at medium (the Korean runs took a few minutes each) and 9 Claude subagent runs.
The full eval: 18 + 18.
