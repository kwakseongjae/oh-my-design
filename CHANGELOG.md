# Changelog

User-facing changes to `oh-my-design-cli` and the bundled skill / agent files.

After any release: `npx oh-my-design-cli@latest install-skills`. Managed files (those carrying the `<!-- omd:installed-skill -->` marker) refresh automatically; your edits outside the marker block are preserved. See `Upgrading` in `README.md`.

---

## 1.8.8 — 2026-07-02

**44 new Korean company references added (catalog 356 → 400; KR refs 149 → 193) via the full 추천→선발→수집→검수 pipeline — every ref Tier-1 brand-owned proof-gated. Milestone: catalog hits 400.**

- Coverage: **AI 10** (asleep·scatterlab·friendliai·pozalabs·selectstar·squeezebits·corca·gaudiolab·maum-ai·sionic), **consumer-tech 6** (heydealer·barogo·frip·nrise·stayfolio·tabling), **fintech 6** (payhere·8percent·moin·peoplefund·quotabook·qraft), **healthcare 5** (fitpet·tellingme·drdiary·humanscape·medibloc), **ecommerce 4** (petfriends·idus·cjonstyle·dealicious), **marketing 4** (dable·beusable·igaworks·wisetracker), **education 3** (likelion·mildang·teamsparta), **design-tools 2** (protopie·sandoll), **automotive 2** (autopedia·42dot), **productivity 1** (typed), **saas 1** (jobplanet).
- Standouts carry named / official design systems or distinctive product UIs: likelion (Storybook DS), protopie (Studio XID), sandoll (type foundry), asleep / scatterlab (consumer AI apps).
- Recommend fanned 9 sector deep-research agents (64-item clean pool, deduped vs the full 356-id catalog); **an LLM-synthesis drift that silently re-introduced 12 catalog-existing ids + 1 same-company alias was caught at curation** and hard-re-deduped against on-disk `references/`. User excluded 6 母-brand sub-products (tosspayments/kakaopaysec/kakaowebtoon/brunch/kakaowork/watchapedia) + tistory. Build ran one CREATE subagent per brand in demand-driven waves of 5, stopping at 44 green.
- `urbanbase` dropped as **INFEASIBLE** (brand defunct — domain now a GoDaddy parking lander; agent correctly refused to fabricate). `peoplefund` captured through its 크플(Cple) rebrand redirect.
- All 44 pass `verify-reference` 27/27 + catalog-integrity (16 files / 638 tests). KR proof gate met for every ref (≥2 brand-owned Tier-1 sources + `## Proof` block). Tier 2 (getdesign / refero) empty for all 44, as `spec/regional-sources.yaml` anticipates.
- Audit: `data/reference-audits/2026-07-02-kr44.md` (13 High / 29 Medium / 2 Low). Counts propagated by `sync-catalog.mjs` (README, llms.txt, SEO layouts ×3, fingerprints ×3, design-md mirror).

---

## 1.8.7 — 2026-06-26

**30 new Korean company references added (catalog 326 → 356; KR refs 119 → 149) via the full 탐색→선발→수집→검수→배포 pipeline — every ref Tier-1 brand-owned proof-gated.**

- Coverage deliberately steered toward under-represented categories: **AI 7** (nota·rebellions·furiosaai·returnzero·makinarocks·supertone·neosapience), **marketing 4** (airbridge·buzzvil·datarize·bigin), **education 3** (goorm·elice·codeit), **SaaS 3** (saramin·lemonbase·shiftee), **ecommerce 3** (kyobobook·cafe24·queenit), **developer-tools 2** (hackle·solapi), **backend-devops 2** (lablup·moreh), **consumer-tech 2** (hwahae·weverse), **fintech 2** (portone·kcd), **automotive 1** (greencar), **healthcare 1** (vuno).
- Standouts carry named / official design systems: goorm (Vapor UI), 교보문고 (KDS), 화해 (HDS), cafe24 (Smart Design), lablup (Backend.AI WebUI).
- Discovery fanned 8 sector agents (101 raw → 89 unique, deduped vs the full 326-id catalog); two LLM-drift duplicates caught at curation (`wadiz`, `yeogi`==`yeogiotte`) and swapped for clean alternates. Build ran one CREATE subagent per brand in waves of 5 (Tier-1 live Playwright `getComputedStyle` over ≥2 brand-owned surfaces each).
- All 30 pass `verify-reference` 27/27 + catalog-integrity (16 files / 594 tests). KR proof gate met for every ref: ≥2 brand-owned Tier-1 sources + `## Proof` block (≥80 raw computed-style samples). Tier 2 (getdesign / refero) empty for all 30, as `spec/regional-sources.yaml` anticipates.
- Audit: `data/reference-audits/2026-06-26-kr30.md` (23 High / 7 Medium / 0 Low). Counts propagated by `sync-catalog.mjs` (README ×4, llms.txt, SEO layouts, fingerprints ×3, design-md mirror).

---

## 1.8.6 — 2026-06-23

**New skill `omd:feel` — quantifies the design / frontend industry's "gut-feel" into 113 provenance-graded, machine-checkable interface rules an AI can APPLY (inject motion / spacing / type / a11y defaults during UI work) and AUDIT (BLOCK / WARN / FYI). Inherits Jakub Krehel's `make-interfaces-feel-better` and extends it with Apple HIG / Material 3 / WCAG / design-system tokens + practitioner research.**

- 17 feel-dimensions, 113 rules. 85 are spec / design-system-token-backed (enforceable); the rest are labelled convention / opinion so folklore is never presented as spec. Core idea: **provenance tier → enforcement strength** (SPEC/DS = gate, CONV = default, OP/FOLK = suggestion). `DESIGN.md` tokens always win. Files: `skills/omd-feel/{SKILL.md, reference.md, provenance.md}` — auto-installs via `install-skills`. Skill bundle 17 → 18.
- Dogfooded on this site's home + docs: fixed a real `prefers-reduced-motion` a11y gap (framer-motion + `animate-ping` + smooth-scroll were ungated) via a global CSS net + `<MotionConfig reducedMotion="user">`, swept `transition: all` → named props on the landing / docs surfaces, and added `text-wrap: balance / pretty`. `tsc` + 553 tests green.
- Docs / README: reference count corrected 286 → 326 across localized READMEs + site metadata (catalog grew in 1.8.3–1.8.4; localized surfaces had drifted).

---

## 1.8.5 — 2026-06-23

**QA pass on the 2026-06-22 batch: 40 refs re-inspected vs live + benchmarked against the `designlang` deterministic extractor. 35/40 PASS, mean accuracy 98.3/100, 5 MINOR token-value fixes applied.**

- Two multi-agent workflows: per-ref live re-inspection + adversarial verify (QA), and our-tokens-vs-designlang-vs-reality comparison. Zero major errors, zero fabrications; brand primaries/fonts all held. `designlang` independently corroborated ~5.4/6 of our key tokens per ref.
- **5 confirmed MINOR corrections** (structural token values, not brand errors): **paypal** card shadow `0.1/4px/12px → 0.08/24px/48px` (live `layered-card`); **chunghwa** radius scale +20px (dominant modal/card default, ~46%); **hyundai** chatbot FAB box-shadow `rgba(0,0,0,0.15) 0 0 20px` added (CREATE sampled the wrapper, not the button); **snapchat** §6 "none across nav" softened — components flat but marketing nav wrapper carries one shadow; **octopusenergy** postcode input split into hero (white/Arial-600) vs tariffs (transparent/Chromatophore) surfaces. All 5 verify-reference green; 553 tests pass.
- Benchmark write-up: `data/reference-audits/2026-06-23-qa-designlang-benchmark.md`. Finding: our LLM pipeline is 39–0 (1 tie) more brand-accurate than `designlang` (which picks most-frequent color as "primary", ~35% brand-correct); recommendation = fold designlang in as a free deterministic Stage 0 (palette histograms + DTCG) feeding our brand-judgment pass.

---

## 1.8.4 — 2026-06-22

**Catalog +30: TW·US·UK 메가브랜드 — 카탈로그가 296 → 326개로. 4개국 확장 라운드 2의 배치 2~4/4 (KR은 1.8.3). Phase 4 프로모는 이 라운드에서 생략.**

- **TW 10** (Taiwan-HQ 한정) — E.SUN Bank(玉山銀行) · Fubon(富邦) · iPASS MONEY(一卡通) · EasyWallet(悠遊付) · OPENPOINT(統一/7-11) · Bahamut(巴哈姆特) · iCook(愛料理) · Taiwan Mobile(台灣大哥大) · Chunghwa Telecom(中華電信) · 591(591房屋交易). 핀테크 ≤5 도메인 균형.
- **US 10** — PayPal · Zoom · Asana · Squarespace · Reddit(RPL) · Snapchat · DoorDash · Instacart · Databricks(brand portal) · HubSpot(Canvas). 4종은 공개 DS/brand 포털 보유로 토큰 grounding 최상.
- **UK 10** (registry enum=UK) — GOV.UK(Design System) · BBC(GEL) · Monzo · Starling · Deliveroo · Octopus Energy · ASOS · Skyscanner(Backpack) · Trainline · Farfetch. UK 보유 2 → 12개로. GOV.UK·BBC·Backpack 등 공개 DS 골드스탠다드 다수.
- 전 30종 verify-reference 게이트 그린(US/UK는 26, KR/TW 규칙 비적용) + token↔prose 정합. TW는 brand-owned Tier-1 ≥2 충족. 큐레이션은 HQ-국가 규칙으로 Shopify(CA)·Shopee(SG)·Atlassian(AU)·Depop(US-owned) 등 제외.
- getdesign.md/refero: KR/TW 0/20(empty 지속), US/UK는 7종 등재 — 영미권 공개 DS 가시성이 동아시아 대비 확연.
- 배치별 audit `data/reference-audits/2026-06-22-{tw,us,uk}10.md`.

---

## 1.8.3 — 2026-06-22

**Catalog +10: KR 메가브랜드 — 카탈로그가 286 → 296개로. 4개국 확장 라운드 2의 배치 1/4 (KR→TW→US→UK).**

- **KR 10** — Samsung(삼성전자, One UI) · Hyundai(현대자동차) · Kia(기아) · Naver Pay(네이버페이) · KB Pay(KB페이) · Hana Bank(하나은행) · Shinhan Bank(신한은행) · SSG.COM(쓱닷컴) · KakaoPage(카카오페이지) · Liner(라이너). 실제 브랜드 인지도/사용량 상위 기준으로 큐레이션.
- 자동차 2종은 모노크롬·0px radius·무그림자(차량 사진이 깊이 담당), 금융 4종은 로그인 게이트 뒤 네이티브 앱 — 공개 웹/개발자 디자인가이드 표면에서 정직하게 토큰 추출(naverpay/kbpay는 Medium-High, in-app 상태는 UPDATE 대상).
- getdesign.md/refero는 KR 0/10(여전히 empty) — KR brand-owned Tier-1 소스 ≥2로 전 항목 충족. verify-reference 27/27 게이트 전원 그린, 523 테스트 통과.
- 배치 audit `data/reference-audits/2026-06-22-kr10.md`.

---

## 1.8.2 — 2026-06-17

**Catalog +40: KR/US/TW/JP IT 확장 — 카탈로그가 246 → 286개로. 4개국 × 10개, 전 항목 Proof Gate + live-inspect.**

- **KR 10** — NHN(Kenya Hara 무채색 CI) · Wrtn(뤼튼) · TMAP모빌리티 · NCSOFT(→NC) · Spoqa(스포카, Spoqa Han Sans) · Stibee(스티비) · ZEPETO(제페토) · Shift Up(시프트업) · IICOMBINED(Gentle Monster·Tamburins·Nudake) · The Pinkfong Company.
- **US 10** — Twilio(Paste) · Workday(Canvas) · Cash App · Mailchimp · GitLab(Pajamas) · Plaid(Threads) · Headspace · Datadog · Twitch · Patreon. 공개 디자인시스템 헤비웨이트 다수.
- **TW 10** — Fourdesire(SPARKFUL) · Bito · Cubo Ai · MOZE · Vocus(方格子) · Portaly · Readmoo(讀墨) · XREX · MaiCoin/MAX · Heptabase(operating-base 기준 TW 분류).
- **JP 10** — Spindle(CyberAgent Ameba) · 디지털청 DADS(CC BY 4.0) · DMM Turtle · GMO Pepabo Inhouse · Gaudiy · SPEEDA(FALCON) · Cybozu(kintone DS) · Goodpatch · Nintendo · mikan. DS 강국답게 공식 디자인시스템 직접 추출.
- 전 항목 verify-reference 게이트 그린 + token↔prose 정합, KR/TW는 brand-owned Tier-1 소스 ≥2 충족. 후보는 4개국 어드버서리얼 검증(HQ 국가 + 디자인 가치)으로 큐레이션 — Typed(서비스 종료) · iCook/BlendVision(모회사 HQ 일본) · Disquiet/PopDaily(일반적 UI) 등 탈락.
- 배치별 audit `data/reference-audits/2026-06-17-{kr,us,tw,jp}10.md` + 큐레이션 문서 `research/2026-06-17_reference-candidates-kr-us-tw-jp.md`.

---

## 1.8.1 — 2026-06-11

**Catalog +25: KR/JP/TW/US 배치 — 카탈로그가 221 → 246개로. 수집→검수→배포 파이프라인 스크립트화.**

- **KR 5** — 3o3(삼쩜삼) · Blind(블라인드) · MiriCanvas(미리캔버스) · Imweb(아임웹) · Modusign(모두싸인). 미리캔버스가 KR design-tools 공백을 채움.
- **JP 5** — Rakuten(ReX 토큰을 공개 npm tarball에서 직접 추출) · Wantedly(공식 Brand Guide PDF 기반) · ABEMA(다크 스트리밍 시스템) · STORES · Timee.
- **TW 5** — Accupass · FunNow · Firstory · Omnichat · Greenvines(綠藤生機).
- **US 5** — Google(Material 3) · Microsoft(Fluent 2) · Adobe(Spectrum 2) · Salesforce(SLDS 2 styling hooks) · Dropbox(brand.dropbox.com). 공식 DS 헤비웨이트 5종이 처음으로 카탈로그에 합류.
- 전 레퍼런스 Proof Gate(라이브 inspect raw sample ≥5) + token↔prose 정합 게이트 통과, KR/TW는 brand-owned Tier-1 소스 ≥2 충족.
- **KR 5 (2차)** — Ringle(링글) · POSTYPE(포스타입) · LaundryGo(런드리고) · Greeting(그리팅) · Danawa(다나와). 개선된 게이트 파이프라인으로 추가 — 5/5 첫 실행에 전 게이트 그린.
- **새 파이프라인 스크립트** — `web/scripts/verify-reference.mjs`(레퍼런스 단독 게이트: catalog-integrity per-ref 항목 + strict-YAML + 로고 liveness, registry 빌드 불필요) + `web/scripts/sync-catalog.mjs`(fingerprints ×3 / design-md mirror / 카운트 문자열 / llms.txt Examples / npm test 일괄). `omd:add-reference` 스킬에 batch 서브에이전트 프로토콜 명문화.

---

## 1.8.0 — 2026-06-10

**The taste loop closes: your corrections become preferences, preferences become proposals, and one click folds them into DESIGN.md. Plus a taste dashboard and a scripted release bench.**

- **Auto-fold gate.** When a preference scope recurs past the threshold, `session-end-foldin` writes a structured proposal and your *next session opens by asking* — one selectable-option question ("이 취향, DESIGN.md에 반영할까요?"). Approve → `omd:learn` folds it; decline → snoozed until it recurs again. The old remember → wait → manually-run-learn dance is gone.
- **Ambient capture now persists — and sees more.** `post-edit-watch` no longer just warns: off-system drift is recorded to `.omd/preferences.md` as `confidence: inferred` (24h dedup, never while editing DESIGN.md/.omd). Detection grew from hex colors to radius and motion-duration — including Tailwind classes, kebab-case CSS, **camelCase JSX inline styles**, and `.html` outputs (what `omd:harness` actually emits).
- **`omd:taste` — see what the system thinks you like.** One command renders applied / pending (with recurrence counts and how far from the fold threshold) / snoozed / not-yet-known axes, with inline actions (fold now · forget · refine). Skill count: 16 → 17.
- **Reviewers feed the loop.** `omd:designer-review` and `omd:final-qa` now end recurring findings with a single opt-in question — "이 패턴, 취향으로 기록할까요?" — recording with `signal: review` on consent. Never auto-recorded, never auto-folded.
- **Scripted 2-bench release routine.** `scripts/bench/score-init.mjs` (first-60s) and the new `scripts/bench/score-taste.mjs` (capture → reflect → propose) score real headless runs deterministically; both at 10/10 on this release.
- Fixes & hygiene: `session-state-loader` output envelope corrected (its session-start context was silently dropped); catalog resolution order normalized across all 4 documents with a CI drift guard; installer channel mapping unified into one table (cursor dedup behavior preserved, tested); `omd:kr-writer` presets now self-contained for npx installs; dangling dev-only references cleaned; docs/JSON-LD FAQ generated from one source; release workflow actions bumped for Node 24 runners.

---

## 1.7.2 — 2026-06-10

**First-run fixes for npx installs (skill triggering, local catalog, dead hooks), a first-class Cursor install channel, and a safer `omd:init`.**

- **Installed-skill marker moved below frontmatter.** The `<!-- omd:installed-skill -->` marker was written *above* the YAML frontmatter, which broke frontmatter parsing in some hosts and stopped skills from triggering on natural language. Managed files are rewritten with the marker after the frontmatter block; re-run `install-skills` to pick it up.
- **Reference catalog + ctx-prime install locally.** `install-skills` now copies the reference catalog and ctx-prime data into `.claude/data/`, so `omd:init` works on the very first run of an npx install — no more empty-catalog dead end. As a safety net, `omd:init` also falls back to the website's raw `.md` endpoints when the local catalog can't be resolved.
- **Cursor install channel.** `install-skills --agent cursor` (also offered in the channel multiselect, auto-detected when `.cursor/` exists) writes the `.cursor/rules/omd-design.mdc` shim — identical to the `omd:sync` template, body-hash marker included — plus the shared `.claude/data` catalog. No skills, hooks, or settings are written for Cursor.
- **Hooks revived on clean installs.** `post-edit-watch`, `foldin`, `state-loader`, and `skill-activation` shipped in states that left them dead on a fresh install; all four now register and fire correctly.
- **`omd:init` apply-mode confirmation.** Before writing, `omd:init` now distinguishes root bootstrap vs reference-only mode and asks before replacing an existing `DESIGN.md` — on Claude Code via the selectable-option (AskUserQuestion) UI.
- **Builder → agent prompt handoff.** The builder preview's install CTA composes your first prompt from the live config (reference, components, token overrides vs reference defaults, dark mode, style preferences) instead of a generic one-liner, so what you customized in the builder is what `omd:init` bootstraps.

> Site-only (no npm impact, deploys with the site): raw DESIGN.md twin endpoints at `/design-systems/<id>.md` (agents can fetch references over HTTP), 8 curated collection pages at `/collections/[slug]`, builder floating install CTA + neutral logo nameplates, GA4 install-funnel events (`install_copy` / `prompt_copy`), The Wall card-expand interaction removed (static tiles, hover kept), and a four-README restructure around the install→activate path.

---

## 1.6.7 — 2026-06-05

**Codex / OpenCode skills now install to their real discovery paths — and `claude-design` runs on all three channels.**

- **Correct channel paths.** `install-skills` installed Codex skills to `.codex/skills/` and OpenCode skills to a flat `.opencode/agents/<name>.md`. Neither matches the agents' actual discovery rules, so those skills were effectively invisible. Now:
  - **Codex → `.agents/skills/<name>/SKILL.md`** (official path per `developers.openai.com/codex/skills`).
  - **OpenCode → `.opencode/skills/<name>/SKILL.md`** (folder skills per `opencode.ai/docs/skills`).
  - Both are folder layouts, so multi-file skills install with their `scripts/` and `references/` intact.
- **`claude-design` is no longer Claude-Code-only.** Its primary backend is Playwright (a `node`-only, agent-agnostic Chrome driver), so it works from Codex and OpenCode too. `x-omd-channels` now lists all three. The `claude-in-chrome` path remains a Claude-Code-only fallback.
- **Note:** if you previously installed for Codex/OpenCode, the old `.codex/skills/` and `.opencode/agents/` files are now stale — re-run `install-skills` and delete the old copies. OpenCode also reads `~/.claude/skills/`, so a `--global` install already surfaces skills there.

---

## 1.6.4–1.6.6 — 2026-06-05

**`install-skills` selection UX.**

- `--skills-only` now actually shows agents as skipped (was listing all 16 in the summary).
- Auto-resolved targets no longer blast all three ecosystems; they're narrowed to channels the selected skills support.
- Scope / skills / sub-agents / channels resolve independently — passing `--skills` no longer suppresses the "where do I install" (channel) and scope prompts.

---

## 1.6.3 — 2026-06-05

**Project / global install scope for `install-skills`.**

- **Install scope: project or global** — `install-skills` now asks where to install (or pass `--global`): **Project** (`./.claude/skills`, the default) or **Global** (`~/.claude/skills`, available in every project). Global writes skills + sub-agents (+ data) to the user-level dir and deliberately leaves your global hooks/`settings.json` untouched — ideal for using `claude-design` everywhere without per-project installs.

---

## 1.6.2 — 2026-06-05

**New bundled skill `claude-design` (terminal → claude.ai/design), single-skill install via `--skills-only`, and channel-restricted skills.**

- **`claude-design` skill (Claude Code only)** — analyzes your codebase (stack, tokens, components, real UI copy, brand assets) and drives **claude.ai/design** end-to-end to generate a code-grounded design, returning a shareable link. If claude.ai/design interjects a "Quick questions" clarifying panel before generating, the skill detects it (it appears late, in a closed Questions tab, in varying layouts) and — by default — the agent reads the questions and picks the appropriate option per your codebase, with a "Decide for me" autonomous fallback for headless runs. Install standalone: `npx oh-my-design-cli install-skills --skills claude-design --agent claude-code --skills-only`.
- **`--skills-only` install flag** — install a single skill with no agents / hooks / omd onboarding (clean standalone install).
- **`x-omd-channels` skill frontmatter** — a skill can declare its compatible agent channels; incompatible targets are skipped (`claude-design` is claude-code-only — needs Chrome automation + `python3` + a global `playwright`).
- **Multi-file skills** — `install-skills` now copies a skill's full tree (`scripts/`, `references/`), not just `SKILL.md`.

> Site-only (no npm impact, deploys with the site): builder UX (registry-wide curation, scroll-to-top, mobile DESIGN.md toggle), landing mobile polish (Live Proof carousel, The Wall show-more, 2-col footer), and footer version sync to `package.json`.

---

## 1.6.1 — 2026-06-02

**Catalog grows to 150 brands (+13), the bundled DESIGN.md mirror is fixed, and the reference pipeline gains deterministic proof/format gates.**

- **13 new references** through a new proof-gated pipeline — Sendbird (US), KR: velog · NHN Cloud · Hyundai Card · Melon · Bithumb, TW: Rayark · 91APP · Kdan · Hahow · Gogolook · KKBOX · Cake. Every spec value is live-DOM-inspected or pulled from an open-source token file; no fabricated values.
- **Fixed the bundled `design-md/` mirror** — 110 DESIGN.md files carried stale pre-migration frontmatter/bodies (one shipped a broken `## 1. Overview` header). Re-synced to the canonical references.
- **Backfilled Do's-and-Don'ts** for 21 references that previously rendered an empty Guidelines section.
- **New deterministic catalog gates** — proof block for verified refs, §4 placeholder-value lint, §7 guideline-marker advisory, §1 blank-line guard; plus `spec/regional-sources.yaml` for KR/TW source coverage.

---

## 1.6.0 — 2026-05-28

**Conversational deepening — harness skill now reads your codebase before asking, then runs a single-batch picker interview matching the Ouroboros/donguri feel — zero external plugin dependencies.**

> **2026-05-29 post-release AEO addendum** (no version bump — npm bundle unchanged):
>
> Marketing/docs site (`oh-my-design.kr`) and LLM-facing content deepened so LLMs cite oh-my-design when asked about design.md / vibe coding / design systems for AI coding agents. CLI behavior unchanged; no `npm publish` needed.
>
> Added — LLM-facing content:
> - `web/public/llms-full.txt` — full concatenated context (README + entire CHANGELOG + primary SKILL.md files + omd-master agent + spec/omd-v0.1 + 100+ brand catalog one-liners). 173 KB / 2,653 lines. Pair with the curated TOC at `/llms.txt`. Generated by `scripts/gen-llms-full.cjs`; regenerated automatically on `web` dev / build / publish.
> - `web/public/llms.ko.txt` — Korean mirror of `llms.txt` for KR-first LLM queries with inline Korean mini-FAQ.
> - `scripts/gen-llms-full.cjs` — deterministic concatenation helper. Reads canonical sources, never invents content.
>
> Added — Next.js routes (5 new, 24 dynamic):
> - `/faq` — 18 Q&A in 4 sections; `FAQPage` JSON-LD with 18 Question/Answer entities.
> - `/what-is-design-md` — definitional page claiming the term; `DefinedTerm` + `Article` JSON-LD.
> - `/alternatives/[slug]` for `shadcn`, `v0`, `anima`, `locofy` — 7-row comparison + when-to-use; `Article` + 2× `SoftwareApplication` JSON-LD.
> - `/changelog` + `/changelog/[version]` — 24 SSG pages parsed from this file via `web/src/lib/changelog.ts`; per-version `Article` JSON-LD with `datePublished`.
>
> Changed — AEO hygiene:
> - `web/src/app/layout.tsx` — `softwareVersion` in schema.org now imports from `package.json` (was hardcoded `"1.5.0"`). Three v1.6 entries appended to `featureList`.
> - `web/public/llms.txt` — new section describing CTX-PRIME, Interview-lite, sub-agent auto-recovery, and the natural-language auto-trigger phrasings.
> - `web/src/app/sitemap.ts` — 7 new static routes + 24 dynamic changelog routes.
> - `web/package.json` — `dev`/`build` regenerate `llms-full.txt` first so the deployed copy never drifts from canonical sources.

Closes the gap where natural-language design requests ("그럴싸한 랜딩 만들어줘", "프로토타입이라도 구색 갖춰서") fell through `omd-harness` and landed in plain-coding mode. Five entry-side defects fixed in one release. Full RFC: `research/harness-design/20-harness-1.6-conversational-deepening.md`.

### Added

- **`scripts/ctx-prime.cjs`** — deterministic, sub-50ms codebase analyzer. Emits `<RUN_DIR>/ctx-prime.json` with stack detection, dominant brand color, font families, voice keywords, language, surface inventory, audience hypothesis (with confidence + evidence), and wow-moment candidates. Pure node, no deps.
- **`omd-harness` Step 2.5 — CTX-PRIME phase.** Runs `ctx-prime.cjs` before reference selection, surfaces analysis as the opening move ("이 레포 분석했어요 — Next.js + #0064FF 베이스 + 11개 surface"), and asks one `AskUserQuestion` picker for audience confirmation with confidence-ranked options + free-text "Other".
- **`omd-harness` Interview-lite** — a single batched `AskUserQuestion` covering `exit_scope` / `wow_moment` / `cta_primary` / `visual_grounding`. Options derived from `ctx-prime.json` (e.g., wow-moment options use detected `wow_moment_candidates`). Answers written to `<RUN_DIR>/handoff/.handoff.json` as `prefilled_slots`.
- **`omd-master` INTAKE — prefilled-slots fast path.** When `.handoff.json` has `prefilled_slots`, skip SLOT_GATE entirely and jump straight to PROPOSE_PLAN. Never re-asks `audience` / `wow_moment` that the harness already collected.

### Changed

- **`omd-harness` trigger description broadened** — now matches "랜딩페이지", "프로토타입", "그럴싸한", "구색", "first screen", "MVP UI", "landing", "prototype", etc. Generic natural-language requests now activate the harness reliably.
- **`omd-harness` Step 1 — subagent registration auto-recovery.** Was a hard gate that stopped on missing `omd-master`; now copies the agent file from `npm root -g`/local to `.claude/agents/` (or detected agent flavor) and continues. Restart-Claude-Code message demoted to last-resort fallback.

### Why

Real-session failure trace where a user requested a landing-page prototype, expected an Ouroboros-style multi-turn brainstorm, and got a single-shot DESIGN.md emit instead. Diagnosis traced five concrete entry-side defects in `skills/omd-harness/SKILL.md`. All five fixed without breaking the run-dir / handoff contract — legacy runs (without `prefilled_slots`) follow the unchanged path.

### Migration

`npx oh-my-design-cli@latest install-skills --all` picks up the new harness skill + master agent. No config changes required.

### Files added to bundle

- `scripts/ctx-prime.cjs` added to package `files:` array.

---

## 1.5.0 — 2026-05-19

**v0.2 agent layer ships in the bundle. Blog feature removed. Release-hygiene routine added.**

Bundle is now **15 skills + 16 sub-agents** (was 9 + 11). Re-run `npx oh-my-design-cli@latest install-skills` to pick it up.

### Added — v0.2 agent layer (6 skills + 6 sub-agents)

A supervisor + specialist topology for multi-step authoring, all channel-aware (Claude Code / Codex / OpenCode):

- **omd-orchestrator** — supervisor. 5-stage workflow (write → review → revise → localize → critic → images → handoff), hard 2-round revision cap. Anthropic orchestrator-workers + LangGraph supervisor pattern.
- **omd-kr-writer** — Korean prose with **12 voice presets** (toss-tech-design default / karrot-neighborly / brunch-maker / naver-d2 / biz-report / academic / journalism / …). 9-field voice spec per preset in `data/research/2026-05-18-kr-style-presets.md`. Anti translation-ese.
- **omd-locale-adapter** — KR → EN/JP/ZH-TW **adaptation** (cultural reference swaps, JP honorific matching, ZH-TW traditional idioms). KR is the source of truth.
- **omd-designer-review** — visual + brand audit vs DESIGN.md (typo hierarchy, color budget, radius scale, component states, mobile). Severity BLOCK / WARN / FYI with line refs. Read-only advisory.
- **omd-final-qa** — read-only critic, **8-item publish rubric**, forbids "looks good" rubber-stamps, hard 2-round cap.
- **omd-codex-image** — channel-aware image materialization. One `<!-- omd:gen-image -->` spec, three downstream paths: **Codex native generation** / `omd-asset-curator` free-license fallback (Claude Code) / OpenCode user-queue. Idempotent, IP-safe (no logo/face synthesis).

### Added — release hygiene

- **omd-release-hygiene** skill + `scripts/check-release-hygiene.sh` + husky `pre-commit` gate. Blocks experiment byproducts (v1/v2 `.bak`, `_source-*`, contact sheets, logs, scratch dirs) from entering a commit. Codifies the docs-sync + npm-packaging checklist for new skills.

### Removed

- **`/blog` route and the blog feature** (was dev-only behind `NODE_ENV`). Routes, components, `@/lib/blog*`, and the blog views/likes KV endpoints removed. `omd-kr-writer` is kept — KR voice synthesis is useful beyond the blog.
- **kr-spellcheck** — a deterministic Korean-orthography linter was prototyped and dropped. A 25-pattern regex heuristic had too low recall (~50–67%) to be worth shipping. If you need automated KR spellcheck, wire an external service such as the 부산대 한국어 맞춤법 검사기. (`omd-final-qa` dropped its rubric item 9 accordingly.)

### Changed

- **`install-skills` TUI** — interactive multiselect order is now **skill → sub-agent → channel**. Agent channels default to none-selected (you pick); "detected" hints read real `.claude/`/`.codex/`/`.opencode/` presence instead of the all-3 fallback. Added `enter = 확인` hints.
- `experiments/` is now gitignored (local scratch, like `.promo/` and `.experiments/`).

---

## 1.4.0 — 2026-05-15

**Architectural refactor — single-source registry replaces 5 hand-maintained maps.**

Three consecutive KR-10 batches (78→88, 88→98, 98→108) lost data because the sub-agent missed one of 5 hand-maintained data maps (`route.ts`, `logos.ts`, `tokens.ts`, `homepage-urls.ts`, `design-systems.ts`). `homepage-urls.ts` was missed in 2 batches in a row, requiring a 20-brand backfill. Prose checklists in `omd-add-reference` Phase 5 failed to enforce parity.

Option C — single source of truth + machine gate:

- **Canonical YAML frontmatter** in every `references/<id>/DESIGN.md` carries `id`, `name`, `country` (ISO), `category` (slug), `homepage`, `primary_color`, `logo.{type,slug}`, `verified`, and optional `display_name_kr` + `ds` block. All 108 existing references migrated via `web/scripts/migrate-frontmatters.mjs` (preserves any existing fm; merges from the 5 source maps; emits canonical block).
- **Typed registry** at `web/src/data/registry.generated.ts` (autogenerated, ~41 KB, 108 entries, sorted by id for stable diff). Built by `web/scripts/build-registry.mjs`, which validates the schema and fails fast pointing at the offending file. Auto-runs on `npm run dev` and `npm run build`.
- **5 consumers refactored** to derive everything from `REGISTRY` / `REGISTRY_BY_ID`. `route.ts`, `logos.ts`, `tokens.ts` (`BRAND_COLORS`), `design-systems.ts` (`getDesignSystem` / `getAllDesignSystems`). `web/src/lib/homepage-urls.ts` **deleted** — `getHomepageUrl` now lives in `registry.generated.ts`. `preview-export-view.tsx` import updated.
- **Catalog-integrity vitest** at `web/__tests__/catalog-integrity.test.ts`: 108 parametrized per-id assertions (schema, §1 canonical header, prose-first paragraph, fingerprint cross-check, design-md mirror) plus 5 cross-cutting invariants (registry sort, triple-fingerprint byte identity, mirror coverage, llms.txt advisory check). 328 tests, all green.
- **Husky pre-commit hook** at `.husky/pre-commit` runs `build-registry + catalog-integrity` only when data-plane paths change (`references/`, `data/reference-fingerprints.json`, mirror copies, `registry.generated.ts`, scripts, the test itself). Other commits stay fast. Hook wired via `core.hooksPath = .husky`.
- **Skill thin-out:**
  - `.claude/skills/omd-add-reference/SKILL.md` Phase 5: 80 lines → 32 lines. Prose checklist replaced with the canonical frontmatter schema + a single `npm run build-registry && npm test` gate. Sub-agent self-verification step required.
  - `.claude/skills/omd-batch-launch/SKILL.md` Phase 3: 58 lines → 22 lines. Same pattern.
- **Build verified** — `cd web && npm run build` passes type-check and prerenders all 247 routes (incl. all 108 `/design-systems/<id>` pages). No regression in API, builder, playground, or browse modal — every surface reads the same registry.

Migration is one-way and irreversible: any new reference must follow the canonical frontmatter schema. The vitest gate (and husky) will refuse to merge a DESIGN.md missing a required field.

---

## 1.3.11 — 2026-05-15

- **+10 KR references** (98 → 108): `toss-securities`, `oliveyoung`, `gmarket`, `tving`, `catchtable`, `upstage`, `chai`, `dabang`, `jumpit`, `fastcampus`. Each ships full DESIGN.md + `assets/_reference/{tokens,structure,fonts}.json` + `.live-inspect-proof.json` (≥ 5 raw_samples) with canonical §1 `Visual Theme & Atmosphere` (regression guard verified).
- Notable: **chai** flagged as service-terminated (2024 → PortOne Solutions rebrand) — kept as archaeological reference. **upstage** Tier-1 partial-positive (brand resource center exists, no token tables).
- **Dev-only NEW tag** — landing wall + design-systems catalog now surface a `NEW` badge on the latest batch (toss-securities/oliveyoung/gmarket/tving/catchtable/upstage/chai/dabang/jumpit/fastcampus) when `NODE_ENV=development`. Production rendering unaffected.
- Numbers cascade: READMEs × 4 + llms.txt + landing (hero/sections/the-wall/tokens) + SEO layouts (root/docs/builder/design-systems) + body copy (reference-preview/result-card). All `98` → `108`.
- API mappings: `route.ts` CATEGORIES/COUNTRIES/DISPLAY_NAMES + `logos.ts` LOGO_MAP/DOMAIN_OVERRIDES + BRAND_COLORS + design-md/ mirror sync. Fingerprints × 3 byte-identical at count=108.
- Audit log: `data/reference-audits/2026-05-15-kr10.md`.

## 1.3.10 — 2026-05-14

- **+10 KR references** (88 → 98): `kream`, `upbit`, `kbank`, `inflearn`, `wadiz`, `channeltalk`, `lunit`, `bunjang`, `flex`, `classum`. Each ships full DESIGN.md + `assets/_reference/{tokens,structure,fonts}.json` + `.live-inspect-proof.json` (≥ 5 raw_samples) per `omd:add-reference` skill.
- Tier-1 official DS finding: **Channel Talk publishes Bezier** (github.com/channel-io/bezier-react, MIT) — first canonical KR SaaS DS in the catalog.
- Numbers refreshed across surfaces: README badges + intro, README.ko.md, docs page, `web/public/llms.txt`, landing copy, root SEO metadata.
- `web/src/app/api/references/route.ts` + `web/src/lib/logos.ts` register the 10 new brands (categories / country / display name / logo / domain fallback).
- Audit log: `data/reference-audits/2026-05-14-kr10.md`.

## 1.3.9 — 2026-05-14

- Docs only. `README.md` and `README.ko.md` gain an **Upgrading** section. `CHANGELOG.md` (this file) extended to cover the 1.2.x → 1.3.x line.
- Docs page (`oh-my-design.kr/docs`) gains an Upgrading card.
- No skill, agent, hook, CLI, or data change.

## 1.3.8 — 2026-05-14

- **`omd:harness` rule 9** (new): hero archetype catalog with 7 variants — `left-character`, `center-text`, `carousel`, `split-screen`, `editorial-magazine`, `dashboard-preview`, `quote-led`. Brand-vibe → archetype matching table. Same brand re-run → 2nd-rank archetype, so visual variation is automatic.
- `experiment-meta.json` gains a `hero_archetype` field.
- Per-archetype grep gates documented (e.g. `center-text` mandates `position:absolute = 0` in the hero block; `dashboard-preview` mandates `<img> = 0` + mock ≥ 50% of viewport).

## 1.3.7 — 2026-05-14

- **`omd:harness` rule 5** rewritten — header logo is a wordmark in a display font, not a separate icon mark. Anti-pattern list: DiceBear `shapes`+wordmark pairs, DiceBear `initials` chips, hand-drawn inline-svg logos, and dashed-box `[YOUR LOGO]` placeholders are all forbidden.
- Brand-vibe → font + product-name matching table added (Bricolage Grotesque / Space Grotesk / DM Serif Display / Fraunces, all SIL OFL via Google Fonts).
- `omd:asset-fetch` §1 rewritten to match.

## 1.3.6 — 2026-05-13

- **New skill `omd:experiment-gallery`** — builds a single `index.html` that previews every brand experiment under a folder as iframe-scaled cards with archetype badges, wow ratings, multi-turn deltas, and per-brand IP audit. Reusable across batches.
- **`omd:reference-capture` Phase 3.9** (new): browser-harness fast-path auto-detect. When the user has `browser-harness` (https://github.com/browser-use/browser-harness) installed and Chrome with `--remote-debugging-port=9222`, the skill drives live computed-style capture via CDP — measured 3-5× faster than playwright MCP. Falls back to playwright MCP otherwise.
- **`omd:harness` rule 10** (new): IntersectionObserver reveal safety net mandatory. `@keyframes failsafeReveal` + `html.js-ready` gate + reduced-motion guard. Stops the recurring "fullpage screenshot has blank sections below the fold" regression.

## 1.3.5 — 2026-05-13

- **New skill `omd:asset-fetch`** — free-license asset catalog with verified-200 CDN URLs. DiceBear (CC0 avatars: notionists / lorelei / personas / adventurer / fun-emoji), Lucide (ISC icons), Heroicons (MIT), Tabler (MIT), Picsum (CC0 photos with deterministic seeds), Loremflickr (Flickr-CC photos with deterministic locks), and SIL OFL display fonts (Bricolage Grotesque, Space Grotesk, DM Serif Display, Fraunces, Pretendard, Wanted Sans, Noto Sans KR).
- **`omd:harness` rule 6** tightened — generator must read from `omd:asset-fetch`. Handcraft inline-svg characters / icons / logos forbidden. CDN call fails → fall back to a brand-color CSS gradient placeholder. Provenance comment `<!-- omd-asset: source=<url>, license=<license>, fetched=<ISO> -->` mandatory on any saved asset file (e.g. `assets/illustrations/hero-character.svg`).

## 1.3.4 — 2026-05-13

- **`omd:harness` rule 7**: single shared `.container-inner` class enforces consistent horizontal padding across `<header>`, `.hero`, sections, `<footer>`. Stops the "header offset 24px from hero" class of bugs on wide viewports.
- **`omd:harness` rule 8**: hero composition decomposed into separate elements (`.hero-character`, `.hero-chart`, `.hero-stat-card`, `.hero-ornament`). Single-SVG-with-everything forbidden — asset swap no longer destroys the scene.
- **`omd:reference-capture` Phase 4.0** (new): `.live-inspect-proof.json` mandatory with ≥ 5 raw samples from playwright `browser_evaluate`. If `tokens.json#live_overrides` ends up byte-equal to canonical, the block is deleted (drift-detection: live inspect didn't really run).

## 1.3.3 — 2026-05-13

- Wordmark-only logo pattern introduced in `omd:asset-fetch` §1 (rewritten further in 1.3.7).
- `omd:asset-fetch` becomes the single source of truth for which CDN URLs the generator may use.

## 1.3.2 — 2026-05-13

- Deferred experiment: a `clone` / `inspired` mode toggle that turned out to be the wrong split. Removed in 1.3.3 in favor of a single-mode flow.

## 1.3.1 — 2026-05-13

- Skill descriptions made count-agnostic. Replaced hard-coded `"67개 / 78개 / 88개 reference"` strings with `"실제 기업 reference"` so the description never drifts with the reference count. `omd:init` and `omd:harness` SKILL.md descriptions updated.

## 1.3.0 — 2026-05-13

- **New skill `omd:reference-capture`** — live brand-site CDP / playwright inspect. Writes `assets/_reference/<id>/` with `tokens.json`, `structure.json`, `fonts.json`, `screenshots/{hero-desktop,hero-mobile}.png`, `LICENSE-NOTE.md`, and `attribution.md`. The captured material is reference-only and never embedded in user product DOM.
- **`omd:init` CLI drift fix**: the skill body referenced `omd init recommend` and `omd init prepare` subcommands the CLI never actually exposed. Rewritten to use the bundled fingerprints + Bash directly. Skill is now self-contained.

## 1.2.0 — 2026-05-13

- 10 new Korean references (78 → 88 total). Fingerprints + DESIGN.md files now ship in the npm tarball: `socar`, `gangnamunni`, `kakaopay`, `zigzag`, `29cm`, `ably`, `banksalad`, `zigbang`, `wanted`, `remember`.
- Web `api/references/route.ts`, `lib/logos.ts`, `lib/homepage-urls.ts` mappings extended for the new IDs. `tokens.ts` `BRAND_COLORS` const extended.

## 1.1.0 — 78 references (+11 Korean cluster including KRDS)

The reference bundle expanded from 67 → 78 and the npm tarball now actually carries them.

### Added

- **11 new references** (Korean cluster): `yeogiotte` (여기어때) · `musinsa` · `kurly` (마켓컬리) · `ohouse` (오늘의집) · `naver` · `yanolja` (야놀자) · `coupang` · `kakaobank` · `ridi` · `qanda` · **`krds`** (Korea Republic Design System, 행정안전부 주관 — the first government DS in the bundle).
- Each new ref ships with a `.verification.md` alongside its `DESIGN.md` documenting Tier 1 live DOM measurements, Tier 2 cross-check status, conflict matrix, and cited philosophy sources.
- `data/reference-fingerprints.json` regenerated → **count 67 → 78**, all 11 new entries added.
- `data/reference-tags.md`: 11 new rows + Korean shortcut buckets (한국 이커머스 · 한국 여행 · 공공·행정·정부).

### Fixed

- **Tarball was missing references entirely.** `package.json` `files[]` pointed at `references/**/DESIGN.md` which is now a local-dev symlink — npm doesn't follow symlinks in the whitelist, so 1.0.x shipped 0 reference files. Updated to `web/references/*/DESIGN.md` (the canonical path); tarball now contains all 78 `DESIGN.md` files.

### Changed

- `omd-init` skill references the canonical `web/references/<id>/DESIGN.md` path inside the package.
- Apple-tier philosophy verification for all 67 pre-existing refs (Tier 1 live DOM + Tier 2 cross-check + `.verification.md` with conflict matrix). Skill behavior unchanged — this only deepens the source-of-truth.

## 1.0.2 — Onboarding banner correction

The `install-skills` "Next" panel still claimed *"Hook이 자동으로 라우팅 — 디자인 의도 감지해서 하네스/스킬 호출"* and described `/omd-harness` as *"hook 우회"*. That language described the 1.0.0 forced-eval hook which was retired in 1.0.1 — auto-routing now happens via Claude's standard description matching, and the hook only gates on DESIGN.md existence. The banner is the first thing users see after install, so it's worth getting right even for a single panel.

### Changed

- `install-skills` Next panel:
  - "Hook이 자동으로 라우팅 — 디자인 의도 감지해서 하네스/스킬 호출" → "Claude가 description 매칭으로 자동 라우팅. Hook은 DESIGN.md 부재 시 omd:init 안내만."
  - `/omd-harness <task>` description: "hook 우회, 즉시 진입" → "즉시 진입"
  - inline comment: "자동 hook 라우팅" → "자동 라우팅"

## 1.0.1 — Trigger surface cleanup

Patch release focused on skill triggering — descriptions, hook behavior, and a stale dependency in the package manifest. No public API change.

### Changed

- Skill triggering uses the standard mechanism (SKILL.md `description`) as the single source of truth. Descriptions trimmed to ~230 chars on average (down from ~700) and rewritten in the canonical "what it does + use-when + chain hints" pattern that the rest of the Claude Code skill ecosystem uses. Modern models generalize from one phrase per language, so the keyword-inflated form was paying maintenance cost without measurable trigger gain.
- Skill descriptions now ship Japanese and Traditional Chinese trigger examples alongside Korean and English (`omd-apply`, `omd-init`, `omd-harness`, `omd-remember`, `omd-learn`, `omd-sync`, `omd-add-reference`). About half of OmD users work in JP / TW, so they previously fell back to weaker description-only matching with English/Korean phrases.
- `.claude/hooks/skill-activation.cjs` simplified from a keyword/regex forced-eval injector to a DESIGN.md existence gate. The "OMD SKILL ACTIVATION CHECK" block no longer appears on every UI prompt — the hook is silent unless DESIGN.md is missing and the prompt looks like UI work, in which case it surfaces a single one-line nudge to run `omd:init` first. The forced-eval layer was a custom belt-and-suspenders pattern from the 3.x model era; with 4.x description matching it became overlap and a second source of truth that drifted.

### Removed

- `.claude/skills/skill-rules.json` (dual source-of-truth for the forced-eval matcher).
- Dangling reference to that file in `package.json` `files[]`.

## 1.0.0 — Skill-first

Breaking release. The CLI surface collapsed from 9 user-facing commands down to 1 (`install-skills`). All operational logic moved to skill markdown + agent prose. See [MIGRATION.md](MIGRATION.md).

### Removed

- CLI commands: `generate`, `init recommend`, `init prepare`, `learn`, `remember`, `sync`, `context`, `harness`, `setup-blender`, `reference list/show`, `preview`.
- Public API exports (`src/index.ts`): `detectContext`, `extractUrl`, `renderPlan`, `applyOverrides`, `loadReference`, `appendEntry`, `writeAllShims`, all v4 modules. The package no longer ships a programmatic API; use the skill markdown directly.
- TypeScript modules (≈ 7000 lines): customizer, preview-generator, recommend, vocabulary, init-deprecate, apply-delta-stub, preferences, shims, sync-lock, sync-marker, run-archive, memory, code-introspect, context-detect, url-token-extractor, plan-emitter, signal-classifier, budget-tracker, visual-anchor, trace, and supporting utility / preset modules.
- Tests for removed surface (≈ 480 of 545 retired).

### Added

- `omd-asset-curator` agent: stack-aware asset medium selection. Detects framework (Next/Vue/Svelte/etc.), CSS framework, icon libs (lucide/heroicons), chart libs (recharts/chartjs/nivo/etc.), animation libs (framer-motion/lottie/rive). Recommends the best matching medium per asset (inline SVG / chart library / Lottie / Rive / Unsplash / 3D dispatch). Inline SVG recipes for liquid fills, progress indicators, simple icons, empty-state illustrations.
- `omd-apply` skill: explicit dispatch decision tree. Complex requests (assets, charts, screens, a11y, microcopy, persona) now route to specialized sub-agents instead of being handled inline.
- `scripts/context.cjs`: 80-line deterministic project scan helper invoked by master Phase A as a fast cache, optional but preserved for repeatability.
- `omd-3d-blender` agent: just-in-time install walkthrough (uv check → brew install / brew --cask blender → claude mcp add → addon prompt). No longer bundled into `install-skills`.
- `MIGRATION.md`, this `CHANGELOG.md`.

### Changed

- npm tarball ~60% smaller (no preview templates, no stale src/, no preset library).
- Dependencies: 9 → 3 (`@clack/prompts`, `commander`, `picocolors`).
- `package.json`: removed `main`, `types`, `exports` fields. Bin-only package.
- README rewritten around the single-command flow + agent natural-language pattern.
- Skill activation rules: `omd-apply` triggers tightened (39 → 23) so high-intent requests like "에셋 / 차트 / 아이콘" route to omd-asset-curator instead of being absorbed by omd-apply inline. Orphan `omd-add-reference` rule removed.

### Migration

```bash
cd my-project
npx oh-my-design-cli@latest install-skills
```

Then restart your agent (Cmd+Q + relaunch for Claude Code).

## 0.1.3 — 2026-04-29

- Drop unused dependencies (shadcn, tw-animate-css).

## 0.1.2 — 2026-04-29

- Trim 90% of npm tarball (drop research / preview / per-reference READMEs).

## 0.1.1 — 2026-04-29

- Five usability fixes from npm-publish verification.

## 0.1.0 — 2026-04-29

- First publish under the `oh-my-design-cli` npm name.
