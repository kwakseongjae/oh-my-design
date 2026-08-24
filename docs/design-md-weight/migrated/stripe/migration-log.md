# Stripe migration log

Source: `web/references/stripe/DESIGN.md`
Destination: `docs/design-md-weight/migrated/stripe/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/stripe/provenance.md`
Date: 2026-08-23
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v5
Portable Core: pass (`scripts/design-md-core.cjs` inspectDesignMd, `portable_core: true`, placeholders 0)

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance; `primary_color` 옮김 → Foundations brand-asset boundary | Portable file has no frontmatter. Name kept as H1 `Stripe Design System`. Homepage `https://stripe.com` is identity-only in provenance (E2a: not dual-destination). Catalog `primary_color` `#635bff` is dual identity metadata + portable Foundations brand-asset boundary, and is not a Docs fill (E2a). Catalog logo type `simpleicons` / slug `stripe` is identity-only in provenance; it is not a portable Typography & Assets mark (E2a: not dual-destination). Identity fields do not include the three Docs URLs. |
| YAML `omd`, `verified`, token claims, `tokens.source` / `extracted`, `components_harvested` | 분리 → provenance | 출처 원장·freshness·Proof. `tokens.source: reconciled` is metadata (A1c). No `ds.type` on source; none invented. |
| YAML `tokens.note` | 옮김 → Experience Scope; 원장 분리 → provenance | Dual destination (E2a): portable Scope keeps `Only selector-backed public Docs values are tokens in this capture` and the marketing/newsroom/Docs/declaration evidence-domain split; provenance keeps the source note. |
| YAML `verification_v2` (surfaces/sources) | 분리 → provenance; 세 Docs URL 옮김 → Experience Scope | Dual destination (E2a): `https://docs.stripe.com/`, `https://docs.stripe.com/payments`, `https://docs.stripe.com/api` are portable Scope capture coverage AND provenance surfaces/sources. Newsroom/culture/foundry/license URLs in sources are provenance. Claims/conflicts stay provenance. |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `components` | 옮김 → Foundations, Typography & Assets, Components & States | 검증된 값만 최소 필드 단위. `#635bff`를 `#5469d4` / `#533afd`와 합치지 않음. Search Prompt `#5469d4`와 Docs Link, Secondary Action `#50617a`와 Muted Docs Text는 원본이 같은 관측으로 묶은 필드로 유지하되 일반 Ink로 합치지 않음 (A4). YAML unitless `lineHeight` 1.43 / 1.25는 비율로 보존하고 본문 표의 `20px or normal` / `40px` 관측과 합치지 않음 (A1a). 검증된 primitive type은 컴포넌트별로 보존: Search Prompt `Type: button`, Secondary Action `Type: button`, Content Tab `Type: tab`. `Kind: interactive`로 뭉개지 않음 (A1b). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 제품/표면 범위(Docs home / Payments / API reference; marketing home·Dashboard·checkout 제외), newsroom GDP·Collison 현재 포지셔닝, operating-principles ≠ marketing-as-Docs-token 경계. “information-dense, quiet interface” / “product documentation chrome” 문단 인접에 derived editorial implementation inference / not Stripe-authored or separately published UI specification 한정 (B2/B2a). Key characteristics는 Distinctive traits. Docs URL은 provenance와 dual (E2a). |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | `#414552` `#1a2c44` `#50617a` `#5469d4` `#533afd` `#ffffff` `#f4f7fa` `#d4dee9` `#95a4ba` 및 wordmark slate/blurple/white · `#635bff` 비 Docs-token 경계. |
| §3 Typography Rules | 옮김 → Typography & Assets | 다섯 증거 등급, OS 스택 355, Söhne foundry/brand context, declared-only CJK, Source Code Pro/Menlo `Unresolved claim`. YAML unitless line-height와 본문 표 size-local px는 별 값으로 유지 (A1a). 시스템 fallback을 Söhne/Source Code Pro로 표시하지 않음. |
| §3 Söhne foundry URL / Source Code Pro license URL | 분리 → provenance; 본문에 증거 등급으로도 유지 | 라이선스·서사 원장. 본문은 foundry context ≠ loaded Docs family, OFL ≠ Stripe deployment 경계를 유지 (E2a). |
| §4 Component Stylings | 옮김 → Components & States | Search Prompt (`Type: button`), Secondary Action (`Type: button`), Content Tab (`Type: tab`). YAML 기하와 본문 기하를 같은 슬롯에 유지. Hover/pressed/focus 정적 샘플 값 보존. Capture selector는 provenance. |
| §4 Scope boundary (`interactionCount: 0`, low-confidence card/badge, Docs input not promoted) | 옮김 → Components & States capture record | 관측 한계. card/badge/input은 interactive-kind 근거 없이 컴포넌트로 승격하지 않음 (C4). |
| §4 footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance; Tier 1 Docs URL 옮김 → Experience Scope | Dual destination (E2a): the three Docs URLs in footer Tier 1 (`https://docs.stripe.com/`, `https://docs.stripe.com/payments`, `https://docs.stripe.com/api`) are the same dual Scope + provenance surfaces. Newsroom and jobs/culture Tier 1 stay provenance. Tier 2 getdesign.md / refero는 numeric token 비승격 유지. |
| §5 Layout Principles | 옮김 → Layout & Platforms | 14px body, 32px API h1, 4/6/8/12/16/24 gaps, zero or low-radius chrome. marketing-grid / Dashboard / checkout / mobile breakpoint는 원본대로 미수립. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | 원칙적 flat, pressed/focused `#f4f7fa`+hairline. API-only dark shadow는 elevation system으로 승격하지 않음. 무출처 shadow 값 발명 없음. |
| §7 Do's | 옮김 → Experience principles (capture-bound application) | 브랜드 적용 규칙. Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience avoid | 브랜드 금지. zero-interaction packet에서 menu/dialog/toast/error/disabled/authenticated Dashboard states를 주장하지 말라는 원문 금지는 Avoid와 capture record에 유지. 그 금지는 미관측을 `not-applicable`로 바꾸는 근거가 아님 (C1). |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | No mobile viewport. breakpoint / collapsed-navigation / touch-target 미수립. 원본에 없는 최소폭 값을 발명하지 않음. |
| §9 Agent Prompt Guide | 삭제 | 도구별 복붙 프롬프트. `#ffffff` canvas, `#414552` foreground, 14px OS-stack controls, `#5469d4` 8px prompt, `#d4dee9`/`#95a4ba` hairline, marketing/Dashboard/checkout 금지, named font specimen 생략 조건은 이미 Foundations / Components / Typography / Avoid에 있음. 슬롯 없는 위임 없음 (A3: §9-only 고유값 없음). |
| §10 Voice & Tone | 옮김 → Content & Locales | 운영 원칙 목록(egoless collaboration, talent, curiosity 포함)과 표 3행. 합성 마케팅-카피 corpus 없음. 원본에 없는 도메인 coverage 문구 신설 없음 (D1). “direct and concrete” 문장 인접에 derived editorial implementation inference / not Stripe-authored or separately published UI specification 한정 (B2/B2a). |
| §11 Brand Narrative | 옮김 → Experience `scope`; URL·서사 원장 분리 → provenance | 현재 first-party 포지셔닝(economic infrastructure, Collison CEO/president, startups-to-public-companies). 근거 없는 origin story/valuation/customer/milestone는 원본대로 추가하지 않음. Newsroom URL은 provenance (E2a: Experience + provenance). |
| §12 Principles | 옮김 → Experience principles | 네 운영 원칙의 jobs/culture 줄기만 first-party. Principle #1의 Docs-specific 절 `a Docs interface should make the next implementation decision easier to locate`는 *UI implication*으로 옮김. *UI implication* notes와 capture-bound application이 derived editorial implementation inference / not Stripe-authored or a separately published UI specification. Governance 일반 문구는 그 한정의 대체물이 아님 (B2/B2a, E1, E2c). |
| §13 Personas | mixed: stakeholder groups 옮김 → Experience Audience; sidecar 재수록 없음 | 원본이 stakeholder groups이며 synthetic user-satisfaction claims가 아니라고 명시. 가상 biography 없음(원본도 없음). portable Audience는 세 그룹을 유지. sidecar 재수록 없음 (D2). Independently verified Primary tasks 3건은 §13이 아니라 캡처된 Docs home / Payments documentation / API reference 표면 (`count=3`). |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 본문 보존: no reusable Docs state matrix; 유일한 잔류 관측은 search-prompt·secondary-action focus/hover/pressed와 static selected tab; Error/loading/success/empty/disabled/menu/dialog/toast는 미래 selector-backed capture 필요 (A2). 선언 컴포넌트는 §4.4 7상태 표를 닫되 미관측 시각값은 발명하지 않음. `not captured`를 `not-applicable` 사유로 쓰지 않음 (C1). Search Prompt / Secondary Action / Content Tab의 loading·error·success는 역할 의미로 판정 (C2). generic `Focus`는 `focus-visible` treatment로 승격하지 않음 (B1). graph 위임 없음. State coverage 완료 주장 없음 (C3). |
| §15 Motion & Easing | 옮김 → Foundations motion | 무출처 커브 없음(삭제할 값 없음). duration / signature-motion도 원본에 없음. Foundations Motion은 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 승격한다는 게이트를 전문 명시. “공식 출처로 검증될 때까지” 약화 문구는 쓰지 않음 (B3, E2c). Named gaps가 같은 다섯 종류 게이트를 말함. |

## Revision 2026-08-23 (wave3 sol resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v6 (F1·F2 의무 최종 패스). Source FAIL: `docs/reviews/t2-1-wave3-2026-08-23-sol-sample.md` §2.

| Item | Correction |
|---|---|
| Principle #1 Docs clause | Moved `a Docs interface should make the next implementation decision easier to locate` from the first-party stem into the derived *UI implication*. Numbered stems remain jobs/culture language (B2/B2a, E1). |
| Derived range | Provenance and log derived scope match the body: *UI implication* notes (including the Docs clause) + capture-bound application. The previous “only UI implication notes are derived” claim is withdrawn (E1, E2c). |
| `tokens.note` | Log records dual `Experience Scope + provenance` (E2a). |
| Docs URLs | Dual disposition recorded on `verification_v2.surfaces/sources` and footer Tier 1. Identity row now covers homepage/logo/`primary_color` only (E2/E2a). |

### F1 / F2 (v6 mandatory final passes)

- **F1 B2a scan (full DESIGN.md reread):** Scope visual-character paragraph and Content product-copy block already had adjacent complete B2a. Principle #1 Docs application is now inside the derived *UI implication*, under the section qualifier that also covers capture-bound application. Remaining Scope sentences are first-party newsroom/jobs language or capture-boundary. Avoid “because” is a source Don't, not a brand causal reading. No unqualified Docs/UI application remains in numbered first-party stems.
- **F2 E2 grep:** `Only selector-backed` is in Scope and the provenance token note; the log records both. Three Docs URLs are in Scope and provenance surfaces/sources/Tier 1; the log records dual on `verification_v2` and footer rows, not on identity. Principle #1 Docs clause grep-matched to *UI implication* only. B3 five-kind gate is present in Foundations Motion. Compliance claims match the body.
