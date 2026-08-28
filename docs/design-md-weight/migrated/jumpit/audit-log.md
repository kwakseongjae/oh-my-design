# jumpit 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/jumpit/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/jumpit/DESIGN.md`
검증 sibling: `web/references/jumpit/.verification.md` — `find web/references/jumpit/.verification.md` → `No such file`. `find web/references/jumpit -type f`는 `DESIGN.md`, `_research.md`, `assets/_reference/` 네 파일. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음. sibling 없음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). 대괄호 카피는 `grep -oF`. `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Jumpit-authored or a separately published UI specification`을 요구한다. 기존 24건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 24 / 원장 24. 숫자는 맞았으나 Scope `:9`는 표면 귀속 규칙을 빠뜨렸고, Primary tasks `:19`는 persona-off를 한정 절 밖에 두었고, Spacing `:98`은 inferred rhythm을 빠뜨렸고, Type roles `:167`은 binary-emphasis / skipped 600을 빠뜨렸고, Layout `:430`은 light-mode-only를 빠뜨렸고, Role Filter Chip `:274` Active-not-seventh-row와 Voice-sample `:458` incomplete “derived from the *shape*”는 인접 완전형이 없었다. 24는 과소였다(fastcampus형 좁은 쪽).

## 수정 목록 (23건)

### B2a — 인접 한정 (본문 7건, 발생 수 +2)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:9` — Scope ¶1 | “Every value stays attached to the surface that established it”는 세 번째 부류. 같은 단락의 기존 한정은 two-captures / homepage-as-identity / consolidation-as-domain-fact만 가리킨다. | 기존 완전형에 keeping every value attached to the surface that established it를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:19` — Primary tasks | “They do not come from the source’s persona section”는 세 번째 부류. 기존 한정은 과제 선정만 가리키고 그 문장은 한정 절 밖에 있었다. | 기존 완전형에 not taken from the source’s persona section을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:98` — Spacing | “Section vertical rhythm uses ~24/32/40px steps (inferred from sampling, not measured)”는 세 번째 부류. 기존 한정은 five steps / keep-apart만 가리킨다. | 기존 완전형에 keeping the ~24/32/40px section rhythm as an inferred observation rather than a spacing token을 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:167` — Type roles | “Emphasis is binary… The skipped 600 weight is intentional… Type does the brand work”는 세 번째 부류. 기존 한정은 unitless keep-both / body-16 / a11y flags만 가리킨다. | 기존 완전형에 binary emphasis / skipped 600 / “type does the brand work” as source §3 principles를 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:274` — Role Filter Chip | “It is not a seventh canonical-state row”는 세 번째 부류. `:201`은 Capture record에 있고 이 블록에 인접하지 않다. | 같은 행에 완전형 신설. 발생 수 +1. 줄 수 불변. |
| 6 | `DESIGN.md:430` — Layout | “Jumpit ships light-mode only on web”는 세 번째 부류. 기존 한정은 desktop-samples / native-app / UPDATE-unnamed만 가리킨다. | 기존 완전형에 reading light-mode-only as a capture observation rather than a published color-scheme contract를 접어 넣음. 발생 수 +0. |
| 7 | `DESIGN.md:458` — Voice samples | “derived from the *shape* of Jumpit voice”는 불완전 한정(B2a). `:502`가 같은 판단을 이름하나 인접하지 않다. | 같은 행에 완전형 신설. 발생 수 +1. 줄 수 불변. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 26, `not Jumpit-authored` 26, `separately published UI specification` 26. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 45, 55, 65, 81, 92, 98, 109, 113, 123, 140, 149, 167, 175, 197, 201, 274, 430, 458, 502, 536.

### E1 — provenance derived 범위 (8건)

좁은 쪽 FAIL(fastcampus형). 본문 신설·확장을 행으로 안 세면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 8 | `provenance.md` 헤더 | `24` complete / `24` data rows. | `26` / `26`. |
| 9 | Scope ¶1 행 | two-captures / homepage / consolidation만. | surface-attachment를 행에 추가. |
| 10 | Primary tasks 행 | 과제 선정 + persona-off를 세미콜론으로만 적음. 본문 `:19`가 이제 한정 절 안에 넣는다. | each naming a recorded surface or control; not taken from the persona section. |
| 11 | Spacing 행 | five steps / keep-apart만. | inferred rhythm as observation, not a spacing token을 행에 추가. |
| 12 | Type roles 행 | unitless / body-16 / a11y만. | binary emphasis / skipped 600 / type-does-the-brand-work를 행에 추가. |
| 13 | inventory | 본문 `:274` Active-not-seventh-row가 원장에 없음. | 행 Components — Role Filter Chip 신설. |
| 14 | Layout 행 | desktop-samples / native-app / UPDATE-unnamed만. | light-mode-only as capture observation을 행에 추가. |
| 15 | inventory | 본문 `:458` voice-sample 한정이 원장에 없음. | 행 Content — Voice samples 신설. |

헤더 `24` → `26` / 데이터 행 **26** at 124–149 (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (8건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 16 | YAML identity 행 | Inspected token surfaces를 `DESIGN.md` 9만. `https://jumpit.saramin.co.kr/` DESIGN dest **2** at 9/182. `positions?sort=popular` dest **2** at 9/182. | dual 9 + 182 (E2a). |
| 17 | YAML spacing/shape 행 | spacing을 95, shape를 101. 둘 다 빈 줄. 토큰 목록은 **96** / **102**. | 96 / 102. |
| 18 | YAML components 행 | `DESIGN.md` 202–410. 202는 빈 줄, View-all 상태표는 421. | **203–421**. Token-set use 220/254/261/294/322/347/361/374/389/411 유지. |
| 19 | §4 행 | 202–410. 같은 오포인터. | **203–421**. |
| 20 | §9 행 | skip 500 / WCAG / h1을 164, Toss-family를 91. 164·91은 빈 줄. 본문은 **165** / **92**. | 165 / 92. |
| 21 | §10 행 | 502만. 신설 458이 없음. | 458 voice-sample + 502. |
| 22 | §12 행 | inventory 24 rows. | **26**. |
| 23 | Deviations · F1 · F2 · SHA | B2a 24=24. `wc -w` 6862. worker-close SHA만. | 26=26. `wc -w` **6990**. F1에 274·458. auditor SHA `f6e249c2924e96edacdfc0cc889fc4d218c4c680268757f350556c2f4fb8be3c`. |

Destination SHA `db70dc30…` → `f6e249c2924e96edacdfc0cc889fc4d218c4c680268757f350556c2f4fb8be3c` (한정 신설·확장 후). 줄 수 DESIGN `wc -l` **545** 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 UI 사양 없음, v12 전제 주석).
- Audience — 원본이 독립 기록한 그룹(`developers and engineers` dest 1 · `recruiters` dest 2). 페르소나 이름·동기·소속 분류를 재구성하지 않음. 한정 유지.
- Semantic 역할 행의 원본 use 문장 — `:81` 포괄절이 슬롯팅을 덮음.
- Chip rest YAML `#ffffff` / §4 transparent, Hero YAML `#ffffff` / photographic full-bleed — 두 원본 표기를 병기한 A1 keep-both. 접기 판단을 본문에 새로 쓰지 않음.
- JobCard C4 `:349` · Eyebrow/H3 `Kind: non-interactive` dest 2 at 354/366 — `:201`이 every interactive-kind verdict를 이름함.
- B3 준수 주장 — `DESIGN.md` 123이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트를 전문으로 담음 (E2c 유지, 543은 재진술).
- 2차 목적지 전수: homepage `https://www.jumpit.co.kr` DESIGN dest 1 at 9 · P dest 1 at 13 · inspected `https://jumpit.saramin.co.kr/` DESIGN dest 2 at 9/182 · `#00dd6d` dest 8 at 11/34/81/83/237/249/355/359 · favicon slug dest 1 at 171 · `Verified:` dest 1 at 182 · `Kind: non-interactive` dest 2 · `kind: non-interactive` DESIGN 0 · `loading \| applicable` dest 0 · YAML `use` 10/10 · cubic-bezier DESIGN dest 0 — fitpet형 0회 없음.
- A1 키 경로: 원본 `tokens.components` 10레코드의 type/bg/fg/radius/padding/font/use가 대응 블록에 Token-set 행으로 있음. `card-job` YAML `fg: "#444444"`는 JobCard `Token-set fg` 행. icook형 필드 소실 없음. 값 복원 없음.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/jumpit/DESIGN.md` — 읽기만. sibling 없음.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — 점핏, 사람인HR, 회원가입 / 로그인, 요즘 폼 미친 기업s, #꿀 피드, 테마별 모음.zip, 전체 보기, Notice, 기술스택 / 경력 / 지역 / 태그, 더.루키, YAML use/font 바이트, §7 Do/Don't, §12 다섯 원칙 문장, §10 표 카피.
- **관측 기술** — `#00dd6d` / `#00DD6D` · unitless `1.3` / `1.5` · `full: 9999` · 8/20/100 radius · 112/112 Pretendard · `Primitive type` · token-set keys · 1280×720 · 121px / 363px / 340px.
- **편집적 해석·인과 판단** — 두 캡처를 토큰 표면으로 읽기, homepage≠세 번째 계산 표면, 통합 노트≠토큰 표면, 값의 표면 귀속, 여섯 분위기 문구를 source statements로 분류, 서사≠토큰, 과제 선정·persona-off, 청중 그룹 읽기, 특성 묶기, 원칙·Do/Don't, 팔레트 역할 슬롯팅, binary-signal, spacing/shape 키 분리, inferred rhythm, elevation 분류, motion 게이트, 폰트 증거 class, no-substitution, type-role keep-both·§3 원칙 읽기, favicon 읽기, inferred treatment 생략, applicability, Active≠일곱 번째 canonical, layout desktop-sample·light-mode-only, voice/byte-exact, voice-sample illustrative, unresolved 프레이밍.

세 번째 부류 중 24곳은 착수 시 인접 완전형이 있었고, 5곳은 범위만 좁아 확장했으며, 2곳(274·458)은 한정이 없어 신설했다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

`find`로 산출 3 + 원본 1 확인 후 `grep -o <패턴> <파일> | wc -l` 파일별. sibling 경로는 `find`가 `No such file` — 미측정이 아니라 파일 부재. `1.3` / `1.5` / `#00dd6d`는 `grep -oF`.

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 26 | 1 | 2 |
| `not Jumpit-authored` | 26 | 2 | 2 |
| `separately published UI specification` | 26 | 2 | 2 |
| inventory 데이터 행 | — | 26 | — |
| `Primitive type: \`button\`` | 1 | 0 | 0 |
| `Kind: non-interactive` | 2 | 0 | 1 |
| `kind: non-interactive` | 0 | 0 | 1 |
| `#00dd6d` (`-oF`) | 8 | 3 | 3 |
| `1.3` (`-oF`) | 6 | 1 | 1 |
| `1.5` (`-oF`) | 5 | 1 | 1 |
| `tokens.rounded.full: 9999` | 2 | 1 | 1 |
| `loading \| applicable` (`-oF` DESIGN; 로그는 escaped dest 0) | 0 | 0 | 1 |
| `https://www.jumpit.co.kr` | 1 | 1 | 1 |
| `https://jumpit.saramin.co.kr/` | 2 | 4 | 1 |
| B3 다섯 종류+게이트 (`DESIGN.md` 123) | 1 | 0 | 1 |

provenance `derived editorial` 1 · `not Jumpit-authored` 2는 원장 색인/전제 주석(mention). 한정 use는 DESIGN 26.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **28** / candidates **211**. 발행 라벨 손 대조에서 손실은 안 보임. `Notice` DESIGN dest 8 = 원본 8. `D-day` DESIGN dest 5 / 원본 2(본문 재수록, 발행 카피 유지). latin-copy-audit lost=`Animation.enable` / `transitionstart`는 §15 도구 명령(발행 카피 아님); DESIGN dest **0**. 직접 고치지 않음.
- **B1.** sibling 파일 없음. `_research.md` 전용 `2020-12` / `개발자 커리어를 위한 점핏` DESIGN dest **0**. 구조 관측(h3·섹션 표제) 침투 없음.
- **D2a.** 삭제 처분 행은 무식별(`§13 inferred personas` / four entries). 이름·나이·도시(`Pangyo`/`판교`/`연차 3-7년`)·동기(`what's that company actually like`/`inbound funnel`/`comp range`)·소속 분류(`테크 리크루터`/`Saramin enterprise customer`) DESIGN/provenance dest **0**. Audience는 원본 그룹만. **로그 A5a 칸**이 lost sample로 `what's that company actually like`를 mention — 처분 지목이지 본문 use는 아님. 직접 고치지 않음.
- **E2d.** 부재 단언 행이 자기 분모에 그 문자열을 넣고 「세 파일 어디에도 없다」고 단언한 형태 없음. Sibling handling은 mention-is-not-use를 적고 부재를 단언하지 않음. `native application` / `cubic-bezier` dest 0은 DESIGN 분모.
- **A1.** 원본 YAML 컴포넌트 10레코드의 type/bg/fg/radius/padding/font/use가 대응 블록에 행으로 있음. `card-hero` YAML padding 없음(Padding 행 없음이 생략). 필드 소실 없음.

원본 `web/references/jumpit/**` 미수정. 카탈로그 채택 아님.

AUDIT_DONE fixes=23
