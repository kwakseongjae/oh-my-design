# DMM.com (Turtle) migration log

Source: `web/references/dmm/DESIGN.md` (legacy OmD 0.1, 15 sections + frontmatter + source comment)
Destination: `docs/design-md-weight/migrated/dmm/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/dmm/provenance.md`
규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v9**
Date: 2026-08-26

각 행은 쓰기 전에 세 산출물에 대한 grep으로 실제 위치를 확인했다(F2). 한 값이 두 곳에 있으면 두 목적지를 모두 적었다(E2a).

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`) | 분리 → provenance Identity | Portable 파일에 frontmatter 없음. `name`은 H1 `DMM.com (Turtle) Design System`으로 유지. `primary_color` `#94bcff`는 Foundations Turtle accent에도 값으로 존재(이중 목적지). |
| YAML `logo` (type favicon, Google favicon proxy slug) | 분리 → provenance Identity **+** 옮김 → DESIGN.md Governance Named gaps | 원장에 slug 보관, 본문에는 "first-party DMM mark"가 미해상이라는 항목으로 이름만. 두 목적지 모두 grep 확인. |
| YAML `omd: 0.1`, `verified`, `added` | 분리 → provenance Identity·Freshness | 포맷·freshness 원장. |
| YAML `tokens.source: live-extract`, `tokens.extracted` | 분리 → provenance Identity·Freshness | 추출 방식·일자 원장. |
| YAML `tokens.note` (2 surfaces, one-switch dark mode, primary 설명, translucent overlay 문장) | 분리 → provenance「Token note」전문 인용 | 본문에는 같은 사실이 Scope·Foundations에 값으로 존재. translucent overlay 문장은 본문에 승격하지 않음 — 원본도 `tokens.colors`로 올리지 않았다. |
| YAML `tokens.colors` (20개 hex) | 옮김 → Foundations Semantic color **+** 분리 → provenance Claim ledger | 20개 전부 역할명과 함께 본문에. `#0000ee`는 frontmatter에 없고 §1 산문에만 있던 값이라 light links 줄에 함께 보존. |
| YAML `tokens.typography.family.*` | 옮김 → Typography & Assets Font evidence | sans/cjk/cjk-alt/legacy-cjk 네 항목은 Font evidence 표의 두 스택 문자열 안에 전부 포함. §3에 `Family` 하위 절은 없다 — 목적지는 Font evidence 표 하나다. |
| YAML `tokens.typography.*` (portal-title / hero-title / section-head / card-head / body / body-tight / nav-label / legacy-link) | 옮김 → Typography & Assets Type roles 표 | size·weight·lineHeight·use 보존. unitless lineHeight(1.75 / 1.31 / 1.3)는 비율 그대로 유지(A1a). |
| YAML `tokens.spacing` (xs 4 / sm 8 / md 12 / base 16 / lg 24 / xl 32 / card-x 56 / card-y 24) | 옮김 → Foundations Spacing | 8px base + 스케일 + 24px 56px 비대칭 패드. |
| YAML `tokens.rounded` (sm 8 / md 12 / full 9999) | 옮김 → Foundations Shape | 0px(top-nav·crimson tag)도 §4에서 확인해 함께 기록. |
| YAML `tokens.shadow.none` | 옮김 → Foundations Elevation **+** 분리 → provenance Live inspect record | 본문은 `box-shadow: none` 관측 범위, 원장은 셀렉터 범위. |
| YAML `tokens.components.*` (card-link / pill-button / nav-button / side-tab / doc-link / crimson-tag / amber-pill) | 옮김 → Components & States 7개 컴포넌트 **+** 분리 → provenance Claim ledger | 검증된 `type:` (card / button / button / tab / listItem / badge / badge)을 컴포넌트별로 보존(A1b). `Kind:`로 뭉개지 않았다. |
| YAML `components_harvested: true` | 분리 → provenance Identity·Proof notes | 검증 메타데이터(A1c). |
| §1 Visual Theme & Atmosphere (본문 3문단) | 옮김 → Experience Scope + 인접 한정 | 60+ 서비스, Turtle 공개, dark-first 측정값, 소비자 플랫폼 register. 17행 한정이 "defining"·"restrained"·"hierarchy carried by luminance"·"built for breadth" 수식과 "dark mode as a peer / calm DS behind a loud crimson platform" 두 해석을 함께 덮고, 측정값 목록은 별도로 명시했다(B2a). |
| §1 Key Characteristics (7항) | 옮김 → Experience Distinctive traits + 인접 한정 | 7항 그대로. 값은 측정 토큰이지만 "dark-first by design"·"luminance hierarchy"·"shadowless depth"·"Japanese-first stack"이라는 명명·묶음은 편집적 읽기라 36행에 한정 부착. mode-switch 문장만 introduction doc 1차 발행분으로 예외 표시(B2a). |
| §2 Color Palette & Roles (5개 그룹) | 옮김 → Foundations Semantic color — 단, 두 구절은 흡수/삭제 | 다섯 그룹 구조와 20개 값·역할명 보존. "전부 보존"은 과했다 — 두 구절은 Semantic color 본문에 그대로 남지 않았다. (a) `Raised Surface`의 "The surface-step that replaces shadows."(원본:92) → **흡수**. 같은 명제가 Elevation 표 `Surface step (Level 1)`(146행)과 그 산문(149행), Distinctive traits(41행), Application rules(71행), Density(398행)에 실재한다(grep 확인). 값·명제 손실 없음. (b) `On-Dark Soft`의 "— a softened white"(원본:96) → **삭제**(중복 형용). 토큰명 `On-Dark Soft` + `#e3e3e3`가 같은 내용을 담아 형용구만 뺐고 값·역할·용도는 109행에 유지. |
| §3 Font Family | 옮김 → Typography & Assets Font evidence | 두 스택 문자열 바이트 그대로(`ヒラギノ角ゴ Pro W3`, `メイリオ`, `ＭＳ Ｐゴシック` 포함, A5) — Font evidence 표 1·2행. 세 번째 불릿(자체 서체 없음)은 같은 표의 `Brand-owned typeface` 행으로, 거기 붙은 "do more with less" 실용주의 읽기는 182행 한정으로 갔다. 그 모토 문자열 자체는 Content & Locales에도 존재(이중 목적지). |
| §3 Hierarchy 표 (9행, rem 병기 포함) | 옮김 → Typography & Assets Type roles | 9행 전부. `2.00rem`–`0.78rem` 9개 rem 값과 `42px`·`56px` 계산값 보존. Brand Title(28px/1.80rem)은 frontmatter에 없고 §3 표에만 있던 행이라 별도로 확인해 옮김(A3). |
| §3 Principles 4항 | 옮김 → Typography & Assets Type rules + 인접 한정 | 인과·해석 문장이므로 derived editorial 한정 부착(B2a). |
| §3 Principles의 "hangul-adjacent" 수식어 | 삭제 | 일본어 표면 레퍼런스에서 한글 인접성을 주장하는 근거가 원본 어디에도 없다. 검증된 값(line-height 1.3–1.75)과 kanji/kana 설정 주장은 그대로 남겼다. |
| §4 Buttons (Portal Pill / Top-Nav Trigger / Top-Nav Active) | 옮김 → Components & States | Top-Nav Active는 별도 컴포넌트가 아니라 Top-Nav Trigger의 active variant로 보존(`#e3e3e3` / 700 / "トップ"). |
| §4 Cards & Containers / Tabs / Badges / Links | 옮김 → Components & States | Resource / Product Card, Sidebar Nav Item, Brand Crimson Tag, Promo Amber Chip, In-Page Doc Link, Legacy Platform Link. Legacy Platform Link는 frontmatter에 없고 §4에만 있던 컴포넌트라 별도로 확인해 옮김(A3). |
| §4 컴포넌트 use의 일본어 라벨 | 옮김 → Components & States 각 컴포넌트 Use | `デザイントークン`·`コンポーネント`·`リソース`·`AI-friendly デザインガイドライン`·`Turtle について`·`プロダクト`·`ガイドライン`·`導入の手引き`·`はじめに`·`プロダクトビジョン`·`デザイン原則`·`システム全体像`·`トップ` 전부 바이트 그대로, 영문 대체 없음(A5). |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts unresolved | 분리 → provenance Freshness·Surfaces and sources | Tier 1 3개 URL + Tier 2 2건(getdesign.md 404, refero 무매칭) + conflicts none. |
| §5 Spacing System | 옮김 → Foundations Spacing | base 8px, 스케일 7값, 비대칭 24/56 패드. |
| §5 Grid & Container | 옮김 → Layout & Platforms Grid and container | 사이드바+본문 컬럼, 100px 카드, 소비자 다열 디렉토리, hero+タグライン. |
| §5 Whitespace Philosophy | 옮김 → Layout & Platforms Density + 인접 한정 | 측정분(24px 56px 패드, 루미넌스 분리, 다열 고밀도)과 해석분을 두 문단으로 갈랐다. "spacious and reading-oriented", "because its job is to expose an enormous service catalog", "calm"/"loud" 명명은 400행 한정 아래로 넣었다(B2a). |
| §5 Border Radius Scale | 옮김 → Foundations Shape | 8 / 12 / 9999 + 0px. 12px 항목의 "the workhorse on the portal"이라는 형용은 빈도 측정 근거가 원본에 없는 판단어라 문구만 빼고 값·용도는 유지했다. |
| §6 Depth & Elevation 표 3행 | 옮김 → Foundations Elevation 표 | Flat / Surface step / Light hairline(`1px solid #e9ebef`) 그대로. |
| §6 Shadow Philosophy | 옮김 → Foundations Elevation 산문 + 인접 한정 | `box-shadow: none`의 관측 범위(hero·nav·headings·`#252525` 카드)는 관측으로 남기고, 151행 한정이 두 읽기를 함께 덮는다 — "강조가 필요하면 elevation이 아니라 `#94bcff`로 간다"는 행동 일반화와 "one-switch 다크 시스템에 옳은 규율"이라는 판단(B2a). |
| §7 Do (8항) | 옮김 → Experience Application rules + 인접 한정 | 8항 그대로. 값은 관측 토큰이나 그 위에 세운 처방과 인과 문구는 편집적 추론이라 66행에 한정 부착(B2a). Governance 통제 문구에는 넣지 않음. |
| §7 Don't (7항) | 옮김 → Experience Avoid + 인접 한정 | 7항 그대로. 항목 안의 판단 문구("so it survives the dark/light switch", "weight is the hierarchy" 등)에 79행 한정 부착. base-theme 항목만 introduction doc 발행 문장에 기대고 있음을 구분해 적었다(B2a). |
| §8 Breakpoints 표 | 옮김 → Layout & Platforms Responsive bands + 인접 한정 | `<640px` / `640-1024px` / `1024-1440px` 세 밴드와 Key changes 보존. 원본 증거 원장에 뷰포트 관측 기록이 없어 derived editorial 한정 부착(B2a). |
| §8 Touch Targets | 옮김 → Layout & Platforms Touch targets **+** Components & States(Height 필드) | 35px / 40px / 100px는 컴포넌트 Height로도, 타깃 목록으로도 존재(이중 목적지). |
| §8 Collapsing Strategy / Image Behavior | 옮김 → Layout & Platforms Responsive bands·Touch targets, Typography & Assets Assets (각각 인접 한정) | 그림자 없는 일러스트/썸네일 관측은 Assets에 두고 "shadowless 시스템과 일관"이라는 연결 판단만 211행에서 한정. 12px radius 유지 문장은 Touch targets에 두되 cross-viewport 주장이므로 416행 responsive 한정 범위에 명시적으로 포함시켰다(B2a). |
| §9 Quick Color Reference | 삭제 | 9줄 전부 §2·Foundations에 같은 값·같은 역할로 이미 존재(grep 확인). 고유 근거값 없음. |
| §9 Example Component Prompts (5개) | 삭제 — 단, 고유 필드 1개는 옮김 → Components & States Portal Pill | 도구용 복붙 프롬프트는 받을 슬롯 없이 삭제. 다만 pill의 `transparent on dark` 배경값은 frontmatter·§4 어디에도 없고 §9에만 있던 렌더러블 필드라 Portal Pill Background로 옮겼다(A3). |
| §9 Iteration Guide (7단계) | 삭제 | 7단계 전부 §7 Do / §1 / §6의 같은 규칙 재진술. 고유 값 없음(grep 확인). |
| §10 Voice & Tone 서술 | 옮김 → Content & Locales + 인접 한정 | "pragmatic, candid, community-minded" 및 "내부 팀이 동료에게 쓰는 register" 판정은 관측 카피에서 파생한 해석이므로 한정 부착(B2a). |
| §10 Voice samples 3종 + 검증 일자 | 옮김 → Content & Locales(문자열) **+** 분리 → provenance(일자·출처 URL) | `発見と熱中を、創造する。`·`Turtle Design System ポータル β`·`Do more with less` 바이트 그대로. 여기에 `プラットフォーム開発本部のフロントエンドプロダクトの50%以上で導入`·`(準備中)`를 추가로 명시(원본 §10·§11·HTML 주석에 흩어져 있던 발행 문자열). |
| §10 Context/Tone 표 5행 | 옮김 → Content & Locales 표 + 인접 한정 | `一般公開の目的`·`Turtle を使って開発する` 포함 그대로. 다섯 개 tone 성격 규정과 β·(準備中) gloss는 인용 문자열에서 파생한 해석이라 표 바로 앞 431행에 한정 부착(B2a). |
| §10 Forbidden register | 옮김 → Content & Locales + 인접 한정 | `業界最高`·"not a completed form"·`(準備中)` 원문 유지(A5). 내부 발행 문자열은 1차 자료지만 이를 "forbidden register"로 규정하는 프레이밍은 편집적 추론이라 441행에 한정 부착(B2a). |
| §11 Brand Narrative — 1999 창업·亀山敬司·株式会社デジタルメディアマート·合同会社DMM.com·롯폰기·60+ 서비스·タグライン | 옮김 → Experience Scope **+** 분리 → provenance Evidence-class notes | 본문에 사실과 함께 "공개 기업 프로필 기반이며 1인칭 DMM 보도자료 인용이 아님"이라는 증거 등급 한정을 남겼다(E1). 원장에는 같은 한정의 근거를 기록. |
| §11 Turtle 동기·구성·공개 이유·"not a completed form" | 옮김 → Experience Scope **+** 옮김 → Typography & Assets Assets | Tier 1 doc page 1차 자료. 토큰·컴포넌트·템플릿·Figma·Storybook·Turtle MCP·50% 채택 포함. 구성 중 Figma community library·Storybook·Turtle MCP는 Scope 서술과 Assets 항목 양쪽에 존재(이중 목적지, 209·210행). |
| §12 ABCDE 5항의 일본어 질문 | 옮김 → Experience Principles | 5개 질문 바이트 그대로 + 영문 병기(A5). 출처 URL은 provenance. |
| §12 각 항의 *UI implication* | 옮김 → Experience Principles + 인접 한정 | 원본이 스스로 편집적 읽기라고 밝힌 부분. "derived editorial implementation inference … not DMM-authored or a separately published UI specification" 한정을 5항 바로 앞에 부착(B2a). |
| §13 Personas — 4명의 이름·나이·도시·행동 서사 | 삭제 | 원본이 fictional archetypes라고 명기. sidecar로 옮기지도 않았다(D2, T1-3 제약 5). provenance에는 "네 개 biography를 삭제했고 재수록하지 않았다"는 처분만 기록하고 인구통계는 재열거하지 않았다. |
| §13의 "publicly observable segments" 한정문 | 옮김 → Experience Audience **+** 분리 → provenance Evidence-class notes | 플랫폼 개발본부 프론트엔드 엔지니어·디자이너 + 외부 커뮤니티라는 그룹 수준만 승격. |
| §14 States 표 10행 | 옮김 → Components & States State contract record(표 전문) + 인접 한정 | graph 0/440 동안 본문 보존(A2). 원본 증거 원장에 상태 관측 기록이 없어 derived editorial 한정을 표 바로 앞에 부착(B2a). `エラー`·`必須`·`(準備中)` 원문 유지(A5). |
| §14 → 컴포넌트별 §4.4 applicability | 신규 표현(값 발명 없음) | 선언한 6개 interactive 컴포넌트에 7상태 표를 닫았다. `not-applicable`은 전부 **역할 근거**(라우팅 컨트롤이 fetch·폼·mutation을 소유하지 않음)로만 썼고 미관측을 사유로 쓰지 않았다(C1·C2). Portal Pill은 use가 명명 라벨과 일반 "primary CTAs"를 섞고 있어 loading·error·success를 닫지 않고 경계에서 생략했다. 두 badge는 `kind: non-interactive` + 사유로 map 자체를 생략(Core §4.4). state coverage 완료 주장 없음(C3). |
| §15 Durations 표 3행 (120ms / 200ms / 320ms) | 옮김 → Foundations Motion 표 + 인접 한정 | 값·토큰명·use 보존. 원본 증거 원장에 모션 관측이 없어 derived editorial 한정 부착(B2a). |
| §15 Easings 표 — 역할명 3개 | 옮김 → Foundations Motion | `ease-enter` / `ease-exit` / `ease-standard`와 각 use 보존. |
| §15 Easings 표 — cubic-bezier 값 3개 | 삭제 → 사유는 DESIGN.md Foundations Motion **+** provenance Evidence-class notes | 무출처 커브. `ease-exit`의 `cubic-bezier(0.4, 0.0, 1, 1)`은 `spec/omd-v0.1.md:267`의 비브랜드 구현 기본값과 바이트 동일. 가장 작은 값 경계에서 세 값만 제거하고 역할·duration·rule은 유지. 본문에 승격 게이트 전문(transition properties · animation name · duration · easing · reduced-motion behavior 다섯 종류 + 컴포넌트별 computed 관측 조건)을 적었고, 이 준수 주장은 `DESIGN.md` 163행에 실재한다(E2c·B3). Governance Named gaps 479행에도 같은 게이트를 요약으로 남겼다(이중 목적지). |
| §15 Motion rules + reduced-motion | 옮김 → Foundations Motion + 인접 한정 | signature theme switch, motion-standard/ease-enter reveal, no bounce/spring, `prefers-reduced-motion: reduce` 계약 전부 보존. |
| HTML 주석 — Tier 1 live inspect 상세(rgb 값·셀렉터 범위·폰트 스택) | 분리 → provenance Live inspect record **+** 옮김 → Typography & Assets Assets(resources 페이지 발행 항목) | 원장. 같은 값들은 본문에 hex로 이미 존재(이중 목적지). resources 페이지 줄의 Figma community library·GitHub/Storybook·`(準備中)` 라벨은 원장과 본문 Assets 209행 양쪽에 있다(이중 목적지). |
| HTML 주석 — Tier 1 doc pages(introduction / design-principle) | 분리 → provenance Doc-page record | `Dark-mode 対応をモード切り替えだけで完了できます` 원문을 원장에 바이트 그대로 보관(A5). 같은 사실의 영문 서술은 Experience Scope에 있다(이중 목적지). |
| HTML 주석 — voice samples 출처 | 분리 → provenance Evidence-class notes | 문자열 자체는 Content & Locales. |
| HTML 주석 — brand narrative 출처 등급 | 분리 → provenance Evidence-class notes **+** 옮김 → Experience Scope(한정문) | standalone 해석에 필요한 권위 한정은 본문에 남겼다(E1). |
| HTML 주석 — personas 성격 규정 | 분리 → provenance Evidence-class notes | 삭제 처분의 근거로만 기록. 인구통계 재열거 없음. |
| HTML 주석 — interpretive claims 목록 | 분리 → provenance Evidence-class notes **+** 옮김 → 각 해석 문장 인접 한정 | 원본이 지목한 세 해석(luminance step / dark-first as peer / calm DS behind loud platform)은 전부 본문에서 인접 한정을 받았다(B2a). |

## 확인한 게이트 결과

`node migrate-reference.mjs --brand dmm --gate-only` → `PASS`, `problems: []`.

## 의무 최종 패스

- **F1 (B2a 스캔).** 본문 전체를 재독하며 모든 문장을 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 분류했다. 세 번째 부류에 인접 한정을 부착한 자리는 `grep -n "derived editorial" DESIGN.md` 기준 18개소다 — 17행(Scope의 characterizing wording + 두-register 해석), 36행(Distinctive traits 명명), 56행(ABCDE UI implication 5항), 66행(Do 목록), 79행(Don't 목록), 151행(Elevation의 accent-blue 강조 서술 + 규율 판단), 167행(Motion duration·role·rule), 182행(폰트 pragmatism 읽기), 205행(Type rules 4항), 211행(에셋 그림자 일관성 읽기), 218행(State contract 표), 235행(applicability 역할 판정), 393행(소비자 디렉토리 목적 읽기), 400행(Density 전체), 416행(Responsive bands + cross-breakpoint radius), 431행(β·準備中 gloss + Tone 표), 441행(forbidden register 프레이밍), 443행(voice 성격 규정). 여기에 19행의 증거 등급 한정(창업사는 공개 기업 프로필 기반이며 1인칭 보도자료가 아님)을 더한다.
- **F2 (E2 대조).** 위 표의 모든 행을 세 산출물 grep으로 확인한 뒤 작성했다. 이중 목적지로 확인되어 두 곳을 모두 적은 행: logo/favicon(provenance Identity + DESIGN.md Named gaps), primary_color(provenance + Foundations), shadow.none(Foundations + provenance live inspect), touch target heights(컴포넌트 Height + Layout), live inspect 값(hex 본문 + rgb 원장), doc-page 인용(`Dark-mode 対応をモード切り替えだけで完了できます` 원장 + Scope 영문 서술), brand narrative 증거 등급(Scope 한정문 + 원장), 커브 삭제 사유(Foundations 163행 + provenance Evidence-class notes), 모션 승격 게이트(163행 + Named gaps 479행), Turtle 구성 항목(Scope 서술 + Assets 209·210행), resources 페이지 발행 항목(provenance Live inspect record + Assets 209행). 준수 주장은 B3 한 건이며 행 번호로 본문 실재를 확인했다.

## 개정 (웨이브 21 의미 검토, 2026-08-26)

의미 검토가 확정한 FAIL 2건 + 관찰 2건을 처리했다. 토큰 값·컴포넌트 표의 값·상태 applicability 판정·섹션 구조·원본(`web/references/dmm/`)은 건드리지 않았고, F3 감사자가 넣은 한정·정정도 되돌리지 않았다.

1. **D1 (FAIL) — `DESIGN.md:9` 새 부정 claim 삭제.** Scope 경계 문장 끝의 두 명사구(`for native apps, or for authenticated account areas`)를 제거하고 `It does not treat either surface as a proxy for the individual service products behind them.`까지만 남겼다. 근거: 원본 `web/references/dmm/DESIGN.md`에 `native` 0회 · `authenticated` 0회 · `account` 0회(grep 확인). 표본은 `turtle.dmm.com` 2페이지 + `dmm.com`뿐이고 원본은 네이티브 앱·인증 영역의 **존재 자체를 세우지 않는다** — 열거하는 순간 "그 도메인이 있는데 미해상"이라는 새 주장이 된다(D1a). 게이트의 D1 검사는 `not captured`류 부정 **문장**만 트리거하므로 이 명사구 목록은 PASS 상태로 통과했다. 60+ 서비스는 원본이 세운 도메인이라 유지했다. 개정 후에도 `native`/`authenticated`/`account`는 네 산출물 전체에 0회다.

2. **E2 (FAIL) — 위 표 §2 행의 사유를 실제 disposition에 맞췄다.** "그룹 구조와 역할 설명 전부 보존"은 파일보다 강한 서술이었다. 원본 §2의 두 구절이 이관본 Semantic color에 그대로 없다: `Raised Surface`의 "The surface-step that replaces shadows."(원본:92)와 `On-Dark Soft`의 "— a softened white"(원본:96). 값 손실은 아니다 — 전자의 명제는 `DESIGN.md` 41·71·146·149·398행에 실재하고(흡수), 후자는 토큰명 `On-Dark Soft` + `#e3e3e3`가 대신한다(중복 형용 삭제). 두 처분을 그 행에 명기했다.

3. **역방향 증거등급 오류 — `DESIGN.md:431`의 강등을 풀었다.** 같은 사실 「(準備中) = 준비 안 된 자리에 쓰인다」가 209행·437행에서는 관측·발행 사실로 서술되는데 431행만 derived editorial inference로 강등돼 문서 내 증거등급이 불일치했다. 원본의 Tier 1 live inspect 기록(원본:423-424 — resources 페이지의 Figma community library / GitHub·Storybook 항목에 붙은 `(準備中)` 라벨)이 이 배치를 관측으로 세우고, `準備中`의 "in preparation"은 번역이지 해석이 아니다. 431행을 "관측이지 추론이 아니다"로 고치고, β gloss와 Tone 표 다섯 성격 규정에 대한 derived editorial 한정은 그대로 두었다. `provenance.md:104`의 18개 한정 지점 목록도 같은 취지로 동기화했다(지점 수 18개 불변, `grep -c "derived editorial" DESIGN.md` = 18).

4. **`audit-log.md:91` 정정.** `Core §4.4` 참조를 "233·235행"으로 적었으나 실측은 233행 1곳뿐이다. 감사 기록이므로 원문 표기는 고쳐 쓰지 않고 하위 항목으로 실제 상태만 덧붙였다. 판정(E1 위반 아님)은 유지.

### 원장 포인터 전수 재검증

`migration-log`가 인용하는 `DESIGN.md` 행 번호 29개(17·19·36·41·56·66·71·79·109·146·149·151·163·167·182·205·209·210·211·218·235·393·398·400·416·431·441·443·479)를 전부 실측 grep으로 대조했다 — **밀린 번호 0건**. 개정 3건이 모두 같은 줄 안의 치환이라 `DESIGN.md`는 481행 그대로이고 행 번호가 이동하지 않았다. `audit-log`가 인용하는 포인터(migration-log 29·67·72행, `DESIGN.md` 267·481행, `provenance.md` 104행)도 함께 확인했고, 어긋난 233·235행만 위 4번으로 정정했다.

### 게이트 / 적합성

- `node migrate-reference.mjs --brand dmm --gate-only` → `PASS`, `problems: []`.
- `scripts/design-md-core-conformance.cjs` `portable_core` → **false** (`missing-product-surface-scope`). **E3에 따라 손대지 않았다.** 유일한 트리거는 위 1번에서 남긴 Scope 경계 문장이며, 그 문장만 제거하면 `portable-core: true`가 되는 것을 확인했다(디스크 수정 없이 메모리에서만 검증). `explicitlyNegatesClaim('scope')`가 "It does not treat either surface…"를 scope 자기부정으로 오인하는 검사 쪽 결함이고, 이미 진단·접수돼 있다 — `docs/reviews/t2-1-conformance-fp-2026-08-26-opus5.md`. 검사를 통과시키려고 문장을 왜곡하지 않았다.
