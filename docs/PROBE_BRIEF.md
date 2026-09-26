# Deep-probe brief — shared by every delegated probe in a wave

위임 프로브(sonnet)에게 대상별 지시와 함께 이 문서를 그대로 읽힌다. (2026-09-23 스크래치패드에서
레포로 옮김 — OS 재부팅으로 스크래치패드가 비면서 원본이 사라졌다.)

Measure only; do not edit repo files. **Never use Aside, the owner's own Chrome, Computer Use or any other real-browser channel** — those carry the owner's logins and history and are operated only by the main session under its privacy rules. If a site blocks the headless launch (Akamai / DataDome / Cloudflare 403), retry at most 3 times ~60s apart, then stop and report the block; do not change fingerprints or go headed to get past it. Do not browse hosts that look internal (proxy errors, intranet-style subdomains) even if they resolve (H&M, 2026-09-26). Write full raw output to the scratchpad path given in your task and return a summary under 40 lines.

Tools: run from `web/`. Browser scripts: `import { chromium } from "playwright-core"`, launch `{headless:true, channel:"chrome", args:["--disable-blink-features=AutomationControlled"]}`, the locale given, viewport 1440×1000; waitUntil "load" + ~6s (networkidle can hang). Consent banners: **dismiss before measuring any state** — reject / close non-essential (OneTrust: `#onetrust-reject-all-handler`; Cookiebot and others have their own reject buttons). A banner left open covers the page and traps focus: on Sainsbury's (2026-09-26) every hover and focus read came back unchanged until the banner was closed, then hover and an authored focus ring appeared. Before writing "hover: no change", confirm the element actually matched `:hover` (`el.matches(':hover') === true`); if it did not, the state is UNMEASURED. Logged out; never sign in, register, add to basket or submit forms. Temp scripts go in `web/scripts/.tmp-<yourtarget>-*.mjs` — delete ONLY your own temp files, never anyone else's. **Delete by exact filename you created — never with a glob or a list that includes files you did not create** (two probes deleted another agent's running script on 2026-09-26).

Per-control states: `node scripts/probe-component-states.mjs <url> --text "<label>" | --match <hex> | --selector <css> --locale <loc> [--vars <prefix>] [--min-height 10]`. `--text` matches visible text, aria-label, placeholder and value. It compares 7 values (bg, fg, border, shadow, outline, transform, opacity) and ignores outline changes while outline-style is none (nothing is drawn). A state printed as 못 쟀음 is UNMEASURED, never "no change". `outline-style: auto` = the browser's default ring, not brand. **Transitions:** if you read states with your own script, check `getComputedStyle(el).transition` and wait past it (≥800ms) before sampling — CHECK24 (2026-09-26) gave 14 different mid-transition hover alphas that were all `rgba(255,255,255,0.15)` once settled, and Doctolib's focus ring read as transparent on the first frame after Tab.

Measure:
1. All CSS custom properties via getComputedStyle(document.documentElement) enumeration AND a stylesheet walk that recurses with `if (rule.cssRules?.length)` (never truthiness — Chrome gives every rule an empty cssRules under CSS Nesting). Group by namespace; separate framework/embed ones (tw, Tailwind v4 defaults such as --text-xl / oklch or lab() --color-gray-*, wp, fa, mui, mantine, swiper, consent managers). Copy the full brand list with values.
2. Rendered colour census (bg / text / border, top 15 with counts). Body ink = the colour of text inside <p> (the most frequent text colour is often nav grey or link colour).
3. Fonts: declared family on body / h1 / buttons and `[...document.fonts].filter(f=>f.status==='loaded')` deduped. Only loaded = rendered. Say how each loaded face is served.
4. Up to 6 controls (primary CTA, secondary, nav link, search input, a card link): per-control probe; report rest values (bg, fg, border, radius, height, padding, font size/weight, shadow) and exactly what changes per state.
5. Radius / spacing / shadow values used.
6. First-party narrative (URLs fetched directly, not search snippets): founding, product, any rebrand or design writing, official design-system or brand page. Verify any design-system candidate with a nonsense-path control on the same host (/zz-this-does-not-exist) comparing status AND rendered body. 2 regional press sources you actually opened (title verified).
7. Third-party embeds to exclude.

Do not guess; mark anything unverified. Note the company's own HQ country and any parent company.

**Identity and blind spots (2026-09-26).** For every control, report the geometry (height, radius, padding, font) and rest bg/fg you measured, so the main session can confirm it is the intended element — a sweep reported three "findings" that were different elements. The probe tool compares bg, fg, border, shadow, outline, transform, opacity, `background-image`, `text-decoration` and `::before`/`::after`; if you read states with your own script, compare all of these too (FlixBus hovers via a background-image layer, Adyen via a `::before` overlay). A link's own `color` may be the browser default (`#0000ee`, active `#ff0000`) while the visible label is a child — report the child's colour.

**Time box (2026-09-26).** Finish within about 45 minutes. If a step stalls, mark it UNMEASURED and move on, and write the report even if it is partial — two probes ran five hours without reporting and had to be stopped.

## 순서: 대조군·회사 사실 먼저, 프로브는 나중 (2026-09-26)

idealista·wetransfer는 상태 프로브(상태마다 새 컨텍스트 = 짧은 시간에 수십 번 로드)를 돌린 직후
WAF가 403을 돌려주기 시작해, nonsense-path 대조군과 회사 페이지를 읽지 못했다. 측정값은 남았지만
등재를 못 했다. **nonsense-path 대조군 → 회사/법적 고지 페이지 → survey → 프로브** 순으로 한다.
