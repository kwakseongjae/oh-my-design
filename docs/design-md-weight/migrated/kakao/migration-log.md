# Kakao migration log

Source: `web/references/kakao/DESIGN.md`
Destination: `docs/design-md-weight/migrated/kakao/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/kakao/provenance.md`
Date: 2026-08-23
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v5
Portable Core: pass (`scripts/design-md-core.cjs` inspectDesignMd, `portable_core: true`, placeholders 0)

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance; logo 경계 문장 옮김 → Typography & Assets | Portable file has no frontmatter. Name kept as H1 `Kakao Design System`. Catalog logo Simple Icons slug `kakaotalk` is dual: provenance identity + portable Typography & Assets boundary sentence (`Catalog logo metadata is Simple Icons identity (kakaotalk)`, not a captured first-party mark) (E2a). Catalog `primary_color` `#fee500` matches Login Container. |
| YAML `ds` (Kakao Login Design Guide name/url/type/description) | 분리 → provenance | 출처 원장. `ds.type: system` preserved (A1c). Description that corporate-site design is a separate surface stays as authority boundary in Experience, URLs in provenance (`/docs/latest/ko/…` and `/docs/ko/…`). |
| YAML `omd`, `verified`, `verification_v2`, token claims, `tokens.source` / `extracted` / `note` | 분리 → provenance | 출처 원장·freshness·Proof. Token note (Login vs corporate marketing vs Developers chrome) is also a portable Experience/Foundations/Typography contract (E1). |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `components` | 옮김 → Foundations, Typography & Assets, Components & States | 검증된 값만 최소 필드 단위. Kakao Login `fg` `rgba(0, 0, 0, 0.85)` is that button’s renderable foreground, not YAML `login-label` `#000000` or corporate Foreground `#333333` (A4). YAML lineHeight values are px strings (`66px` / `40px` / `42px` / `27px` / `21px` / `24.92px` / `18px`), preserved as px, not converted to unitless ratios (A1a). Login label size `30Pt` preserved as `30Pt`, not `30px`. Search-control `bg: transparent` stays on that control. |
| YAML component `type` | 옮김 → Components & States `Type` | 검증된 primitive type은 컴포넌트별로 보존: button / button / button / badge / button / button. `Kind: interactive`로 뭉개지 않음 (A1b). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 세 증거 도메인(corporate marketing / Kakao Login / Developers chrome), KakaoSmall 133 / KakaoBig 49 / Pretendard 1,339, dual-yellow, surface-named reuse. Identity/recognition 해석(“approachable”, “create recognition before a person reads a product name”)은 Scope에 유지하되 인접 derived editorial implementation inference / not Kakao-authored or a separately published UI specification 한정 (B2/B2a). |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | Login `#fee500` / symbol `#000000` / label `rgba(0, 0, 0, 0.85)`와 marketing `#fae100` 분리. Guide의 규제 밖 색·제3자 강조 금지 보존. |
| §3 Typography Rules | 옮김 → Typography & Assets | 증거 등급 5종. 원본 등급명 Unresolved는 portable placeholder 금지 때문에 셀을 `Unresolved mapping`으로 적고, 셀 본문(KakaoTalk/native-service family mapping)은 그대로 둠. Outside this capture로 바꾸지 않음. 역할 메트릭(53.82px / 24.92px / 30Pt / proportional / unchanged 포함). 미확인 family 대체 금지. KakaoDigitLatin declared-only. |
| §4 Component Stylings | 옮김 → Components & States | 6개 컴포넌트 anatomy·observed states. Dark Marketing Tag는 kind/map 생략 (C4). Corporate nav 라이트/다크 `#ffffff`/`#000000` 본문 값 보존. 원본에 capture selector 없음 — 발명하지 않음. |
| §4 footer **Verified** / Tier 1 / Tier 2 / Conflicts / Surface split | 분리 → provenance | freshness·원장. Surface split 문장은 portable Typography/Experience에도 유지 (E1). |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing | 4/6/8/16/20 rhythm; Login symbol/label zones, equal left-right widen, label height ≤ one third. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | No canonical shadow; corporate controls largely flat; Developers hover shadows are docs chrome. |
| §7 Do's | 옮김 → Experience principles (capture-bound application) | 브랜드 적용 규칙. Governance 통제 문구에 넣지 않음. Official Login guide 규칙은 editorial Principles와 분리해 first-party compliance로 적음. |
| §7 Don'ts | 옮김 → Experience avoid | 브랜드 금지. symbol/CI/Pretendard-as-login/KakaoTalk 비검증 토큰. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | 반응형은 사실이나 universal breakpoint 비승격. Login 비례 리사이즈·shortened label. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·복붙 프롬프트. 슬롯 없는 위임 없음. Login `#fee500`/symbol/85%/12px/30Pt, nav KakaoBig 17px/400/37px/999px light/dark, KakaoSmall vs Pretendard, KakaoTalk in-app unverified는 이미 Foundations/Components/Avoid에 있음 (A3: 고유 근거값 없음). |
| §10 Voice & Tone | 옮김 → Content & Locales | 미션 문장은 first-party. familiar Korean·everyday-action 번역과 surface별 톤 권장은 인접 derived editorial implementation inference / not Kakao-authored or a separately published UI specification 한정 아래 유지 (B2/B2a). Login 카피 장난 금지. 합성 보이스 샘플 없음. 원본에 없는 storefront 부정 claim 신설 없음 (D1). Login 라벨 문자열은 Components에도 있음. |
| §11 Brand Narrative | 옮김 → Experience `scope`; 서사 원장 분리 → provenance | first-party self-description(mobile-life platform, needed-future mission)은 Scope에 한정 없이 유지. mission이 human context를 앞세운다는 독해, KakaoTalk organizing metaphor 인과, yellow/speech-bubble이 connection을 signal한다는 결론은 Scope에 유지하되 인접 derived editorial implementation inference / not Kakao-authored or a separately published UI specification 한정 (B2/B2a). 연표식 나열 없음. surface-separation 문장은 Scope에 보존. |
| §12 Principles | 옮김 → Experience principles | 다섯 원칙과 capture-bound application. 인접 본문에 derived editorial implementation inference / not Kakao-authored or a separately published UI specification 한정을 둠 (B2/B2a). Official Login guide 규칙은 그 한정과 분리해 first-party compliance로 적음. Governance 일반 문구는 그 한정의 대체물이 아님. |
| §13 Personas | 네 공식 이해관계자 맥락 옮김 → Experience Audience; sidecar 재수록 없음 | 원본 “official service and stakeholder contexts, not invented demographic personas” 경계와 네 그룹(daily-life / channel-customer / channel-operator / developer Login integration)만 Audience. Independently verified Primary tasks는 §13 원천이 아님. Login task → official Login guide/component; browse corporate pages and search/filter milestone tasks → captured corporate surfaces/components (`count=3`). 가상 biography 없음. sidecar 재수록 없음 (D2). |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 본문 보존: Login full/short·interaction unspecified; nav light/dark/focus/hover; search default/hover; milestone selected; marketing/footer default only. 선언 컴포넌트는 §4.4 7상태 표를 닫되 미관측 시각값은 발명하지 않음. `not captured`/`not specified`를 `not-applicable` 사유로 쓰지 않음 (C1). Kakao Login / Corporate nav / Search control / Milestone filter / Footer pill의 loading·error·success는 역할 의미로 판정 (C2). Dark Marketing Tag kind/map 생략 (C4). graph 위임 없음. coverage 완료 주장 없음 (C3). |
| §15 Motion & Easing | 옮김 → Foundations motion | 무출처 커브 없음(삭제할 값 없음). duration/easing 비승격. signature guidance(corporate focus/hover clarity, Login platform-standard feedback)와 “custom timing as an extension” 보존. Foundations Motion은 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 승격한다는 게이트를 전문 명시. “공식 출처로 검증될 때까지” 약화 문구는 쓰지 않음 (B3, E2c). |

## Revision 2026-08-23 (wave3 sol resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v6 (F1·F2 의무 최종 패스). Source FAIL: `docs/reviews/t2-1-wave3-2026-08-23-sol-sample.md` §1.

| Item | Correction |
|---|---|
| Scope B2a | Adjacent complete qualifier on the identity/recognition reading and on the mission/ecosystem reading. First-party self-description and capture coverage remain unqualified (B2/B2a). |
| Content B2a | Mission sentence remains first-party. Copy-direction and surface-tone reading have an adjacent complete B2a qualifier (B2/B2a). |
| Logo E2a | Log and provenance now record dual `provenance + Typography & Assets` for Simple Icons `kakaotalk`. Portable Assets keeps the boundary sentence. |
| §13 mapping | Log no longer puts Primary tasks in the §13 disposition. Four stakeholder contexts → Audience. Login task → Login guide/component; browse/search/filter → captured corporate surfaces/components. |

### F1 / F2 (v6 mandatory final passes)

- **F1 B2a scan (full DESIGN.md reread):** Editorial/causal sentences in Scope (identity/recognition; human-context reading / KakaoTalk organizing metaphor / yellow-signals-connection) and Content (mission→copy translation; surface tone) have adjacent complete B2a phrases (`derived editorial implementation inference` / `not Kakao-authored or a separately published UI specification`). Principles qualifier covers the five numbered items and capture-bound application. Official Login guide remains first-party compliance, not that list. Remaining Scope sentences are first-party self-description, observed surface split, or capture coverage. No unqualified causal/editorial reading remains.
- **F2 E2 grep:** Logo `kakaotalk` is in `DESIGN.md` Assets and `provenance.md` identity/proof; the log records both destinations. §13 four contexts grep-matched to Audience only. Login/browse/search primary tasks grep-matched to Primary tasks + Login guide/corporate surfaces, not as a §13 destination. B3 five-kind gate is present in Foundations Motion (`transition properties`, `animation name`, `duration`, `easing`, `reduced-motion behavior`) and Named gaps. Compliance claims are not stronger than the body.
