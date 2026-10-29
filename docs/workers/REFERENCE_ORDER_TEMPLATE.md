# Work order: research, measure and draft the oh-my-design reference for {{NAME}} ({{URL}})

You are a worker in a research folder outside the oh-my-design repository: `{{WORKDIR}}`. The repository is at `/Users/kwakseongjae/Desktop/projects/oh-my-design`; you may read it but never write to it.

oh-my-design publishes DESIGN.md files that describe real companies' live design systems: colours, type, components and their states, measured from the live site and backed by first-party sources. A reviewer (the orchestrator) re-measures your strongest claim, checks every sentence against your sources and decides what ships. **This order is a trial of you as the drafting author.** An earlier trial rejected another model's drafts for narrative and source errors: sentences that the cited pages did not say. Accuracy beats coverage. Anything you cannot back with a source you opened, or a value you measured, is left out.

**Do not:**
- write anywhere except `{{WORKDIR}}` (the capture tool writes its own evidence folder; that is fine);
- edit any state, journal or repository file; commit, push or create branches;
- sign in, register, accept cookies, add to basket, submit forms or download files. Reject consent or close it, never accept;
- start Chrome, Playwright or any browser yourself. Your sandbox cannot run one. Your only browser is the `probe_page` tool;
- retry around a block. On a 403, a captcha or a bot wall: wait about 60 seconds and retry once. If it is still blocked, record it as BLOCKED and continue with what you have. Never change user agents or headers to get past it;
- propose a substitute font, invent a token or fill a gap with a plausible value.

Time box: about 60 minutes. A partial report is better than no report.

## Read first

All of these are in your folder:
- `PROBE_BRIEF.md`: what to measure and how. Measures 1–7 and the identity rules apply to you.
- `HARD_RULES.md`: the repository's hard rules. "Unknown means absent", the font rules (G3) and "reference depth" apply directly to your draft.
- `example-n8n-legacy-DESIGN.md`: the frontmatter shape. Your `front.yaml` is everything between the first `---` and `verification_v2:`. Do not write `verification_v2`; the assembler generates it.
- `example-zara-legacy-DESIGN.md`: the body shape, with 15 numbered sections after the `# Design System Inspiration of …` title. Your `body.md` is everything after the closing `---`.
- `example-zara-verification.md`: the verification-notes shape for your `verification.md`.
{{PRIOR}}

## Steps, in this order

The order matters. A WAF often starts blocking after browser probes, so read the controls and company pages first.

1. **Nonsense-path control.** Fetch `{{ORIGIN}}/zz-this-does-not-exist` and the real home page with curl. Record status, byte length and `<title>` for both. If curl is blocked or the site is a single-page app, the survey in step 3 renders the real page; say which evidence you used. For any design-system or brand page you find, run the same control on that host. A 200 on a nonsense path means a catch-all, and a catch-all page proves nothing.
2. **Company facts from first-party pages you open.** About or company page, history, any rebrand or design writing, an official design-system or brand page, and the legal notice or imprint. From the legal notice, quote the legal entity, its registered address and any parent company verbatim. Then find up to 2 regional press articles about the company or its brand that you actually open, and verify their titles. Search snippets are not sources.
3. **Survey.** Call `probe_page` with `mode: "survey"`, `id: "{{ID}}"`, `url: "{{URL}}"`, `locale: "{{LOCALE}}"`. The reply text is only the tail of the output. The full data is in `survey.json` in the output folder it prints. Read that file now and state its size in bytes. It holds the interactive elements, and its `census` field holds the custom properties (computed and declared), the top colours, the `<p>` ink and the fonts. **If you cannot read that file, stop here and say so in your final message.** Do not author from the reply tail.
4. **Separate first-party tokens from framework and embed tokens.** Group custom properties by namespace. Exclude Tailwind defaults, Bootstrap, MUI, WordPress, Font Awesome, consent managers, chat widgets and the like, and say why each group was excluded.
5. **Choose up to 6 controls** from the survey: the primary CTA, a secondary button, a nav link, a search input and a card link, where they exist. Use the cfg shape in PROBE_BRIEF (`find: {tag, text, exact, landmark, selector, minH, nth, href}`); keys are short kebab-case.
6. **States.** Call `probe_page` with `mode: "states"` and those controls. **At most 2 states calls in total.** Read `states.json` from its output folder. For each control, record its identity: geometry (height, radius, padding, font) and rest bg/fg. Record exactly what changes on hover, pressed and keyboard focus. Follow PROBE_BRIEF on these rules:
   - UNMEASURED is not "no change";
   - "disabled — not measured" is not a measurement;
   - `outline-style: auto` is the browser's own ring, not a brand token.
7. **Write the four outputs** (below).
8. **Run the assembler** (Verify). Fix what it reports.

## Outputs, all in `{{WORKDIR}}`

- **`report.md`**: the PROBE_BRIEF report covering measures 1–7, with every value you used and where it came from. Include a "Doubts" section.
- **`verification.md`**, in the zara shape:
  - scope;
  - country evidence, with the legal entity quoted;
  - namespace ownership and the control result;
  - the Proof block: at least 5 raw token samples, fonts and census, and a controls table of rest, hover, pressed and focus;
  - narrative sources with short quotes.
- **`front.yaml`**:
  - `id: {{ID}}`, `name`, `country`, `category`, `homepage`, `primary_color`, and `logo` as the Google favicon form in the example;
  - `verified: "{{TODAY}}"`, `added: "{{TODAY}}"`, `omd: "0.1"`;
  - `tokens`, with `source: live-extract`, `extracted: "{{TODAY}}"`, `colors`, `typography`, `rounded` and `components` (plus `components_harvested: true`).
  - `category` must be one of: ecommerce, fintech, saas, ai, consumer-tech, education, productivity, developer-tools, design-tools, backend-devops, automotive, marketing, government, healthcare.
  - `country` must be one of: KR US JP TW CN UK DE FR IT FI NL SE ES LT NO DK AT EE CZ RO BE CH. The rule is **where the company's headquarters actually operates**, read from its own legal notice. An investor, a private-equity owner or an acquiring group does not move it: Wolt stays FI under DoorDash, eMAG RO under Prosus, Kiwi.com CZ under General Atlantic. A company whose own legal entity is abroad and runs it from there does count: Fever's terms name a US company, so Fever is US. Put your proposal in `country`, and the evidence and any doubt in `verification.md`. The orchestrator decides.
  - `category` is about the product, not the ownership. A federally owned railway is `consumer-tech`, like deutschebahn and ns.
- **`body.md`**: the 15 sections, written as a design reference for someone building in this brand's style.
  - §1 explains the company or product, its distinctive brand expression and its current evolution, from first-party evidence. It must not read like an audit disclaimer.
  - §3 separates the font evidence classes:
    - official product use (the company says so);
    - live-loaded (in the census's loaded faces);
    - official distributed assets;
    - declared-only (named in CSS but not loaded);
    - unresolved.
  - A face that is not loaded keeps its facts but gets no specimen. Never name or render a substitute. If you discuss one, write "Substitute: none chosen".
  - A section with nothing verified is omitted or says plainly what is absent, in one line.
- **`sources.json`**: a JSON array of every first-party URL you actually opened and used, as `{"id": "...", "kind": "official-doc" | "product-surface" | "brand-asset" | "license", "url": "...", "captured": "{{TODAY}}"}`. Use ids like `company`, `imprint`, `brand-page`, `ds-docs`. Add `{"id": "control-404", "kind": "product-surface", "url": "<the nonsense URL you fetched>", ...}`. Do not list the home page; the assembler adds it. Press articles go in `verification.md`, not here.

**Rules the assembler and the catalog gate enforce:**
- `tokens.colors` values are 6-digit lowercase hex only, quoted. Write alpha or rgba values in prose.
- `rounded` values are numbers only. Write percentages and pills in prose.
- Every hex in `tokens.colors`, and every hex in a component's `bg`, `fg` or `border`, must also appear in `body.md` outside the frontmatter.
- The body-text colour role is named `foreground`, never `text`.
- A component declares only the states that were measured. If focus is the browser's `auto` ring, create no focus token.
- Typography `family` lists only faces that were loaded or are officially documented as the product face, with their evidence class stated in §3.
- Component `type` must be one of: button, input, card, badge, tab, toggle, toast, dialog, listItem, avatar. A link styled as an action or a nav link is `button`; a card link is `card`. Say in `use` that it is a link.
- **Never declare an interactive component without at least one measured state.** If a control's states are all unchanged, browser-only (`auto` outline) or polluted (a change that persists after blur), keep it in the body prose and leave it out of `components`. The gate marks the whole reference partial otherwise.
- **Motion values must be grounded.** Every `NNms` and `cubic-bezier(...)` in §15 must appear verbatim in `verification.md`. Copy the raw computed `transition` strings from states.json into the Proof block, and write the curves in §15 exactly as computed, spaces included: `cubic-bezier(0.4, 0, 0.2, 1)`.
- **Consent.** If the survey or states summary does not print `# consent rejected via …`, the banner stayed open. Check the viewport screenshot. Name the banner's reject button in your report, quoting its exact text, so that the orchestrator can teach the probe. Do not withhold states only for that reason: record them as raw observations, and the orchestrator re-measures.
- No `[FILL IN]`, no placeholders, no guessed values.

## Verify

Run this from `{{WORKDIR}}` and quote its last lines in your final message:

```
node /Users/kwakseongjae/Desktop/projects/oh-my-design/web/scripts/assemble-reference.mjs front.yaml body.md ./out/DESIGN.md {{TODAY}} {{URL}} "$(cat sources.json)"
```

It must print `claims N · DESIGN.md v3 + reference.json written`, with no `⚠ not in body text` warning. If it fails, fix your files and run it again.

## Final message

Your final message is your report. Keep it under 50 lines and include:
- **Status:** done, partial or blocked, and why.
- **Evidence folders:** the survey and states output folders, and the size of `survey.json`.
- **Headline:** the single strongest or most surprising claim, with the exact control and value, so that the orchestrator can re-measure it.
- **Country:** your proposal and the quoted legal entity.
- **Controls:** one line each: key, identity (height / radius / rest bg / fg), and what changes per state.
- **Commands:** each command you ran that matters, with its result, including the assembler's last line.
- **Doubts and not done.**

Do not claim anything you did not open or measure.
