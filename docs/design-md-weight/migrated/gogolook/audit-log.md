# Gogolook F3 audit — B2a · E2

대상: `docs/design-md-weight/migrated/gogolook/{DESIGN.md,provenance.md,migration-log.md}`
원본: `web/references/gogolook/DESIGN.md`
sibling: `web/references/gogolook/.verification.md` (`find`로 존재 확인 후 전문 판독)
규칙: B2 · B2a · E1 · E2 · E2a–c (추가 조건 D2a · E2d · B1 보고 · A5a 보고)
계수: 파일별 `grep -oF <pat> <file> | wc -l`. `grep -c` 미사용.
워커 보고는 입력으로 쓰지 않음. 토큰 값 · 컴포넌트 표 · applicability · 구조 · 원본 무변경.

Whoscall Brand Guidelines는 `ds.type: brand` 페이지다. toss형 「발행 사양 부재」 예문을 요구하지 않았다. 기존 한정이 `including the published Whoscall Brand Guidelines`로 class를 닫고 있어 형태만으로 FAIL하지 않았다.

## 문장 분류 (B2a)

portable `DESIGN.md` 전 문장을 세 부류로 읽었다.

- **브랜드 발행 사실** — 브랜드 페이지가 문서화한 세 색·로고 가이드, 회사/제품명(Taiwan TrustTech, Whoscall caller-ID), 발행 색 이름.
- **관측 기술** — 라이브 hex·치수·family·`type: button`, 레코드가 자기 산문에서 뽑은 named set, 캡처 부재, 표의 선언 필드.
- **편집적 해석·인과 판단** — 분위기·역할명 성격, 과제/청중 읽기, 원칙·적용·회피, 측정 계급, 치환 금지·정전, 고도/모션/보이스/구성, 상태 제약.

세 번째 부류인데 인접 완전형 한정(`derived editorial implementation inference` + `not Gogolook-authored` + `separately published UI specification, including the published Whoscall Brand Guidelines`)이 없던 자리만 고쳤다.

감사 전 본문 완전형: 세 조각 각 **15**. provenance 원장 데이터행 **15**.
감사 후: 본문 **17** / 원장 **17** (1:1).

## 수정 목록

1. `DESIGN.md` Spacing `:95` — 「named set ≠ live padding; not an independently computed scale」 측정 계급 판단 뒤에 인접 완전형 한정 신설.
2. `DESIGN.md` Family `:139` — 시스템 폰트 치환 금지와 「canonical only because live use agrees」 뒤에 인접 완전형 한정 신설.
3. `DESIGN.md` Layout `:246` — 기존 섹션 한정에 「named spacing steps are not a measured grid」 읽기를 포함하도록 확장 (같은 사이트, +0).
4. `provenance.md` Portable derived-editorial scope — 원장 15행→**17행** (`:95` Spacing, `:139` Family). Layout 행 서술을 `:246` 확장에 맞춤. 계수 문장 15→17.
5. `provenance.md` sibling RGB 단락 — 「appear only in the sibling」을 mention/use 처분으로 교체. 그 문장이 RGB 문자열을 담은 채 부재를 단언하던 형태(E2d).
6. `provenance.md` Omission RGB 행 — 「Sibling-only」 부재 함의를 「disposition mention, not a portable-body use」로 교체. 문자열은 처분 지목으로 유지 (DESIGN **0** / provenance **3**).
7. `migration-log.md` `typography.family` 목적지 — prov **84→85** (84는 premium `use:` 행).
8. `migration-log.md` use-string 목적지·A5 표 — hero/body/button/primary/secondary/premium이 전부 +1 어긋남. 79/80/81/82/83/84로 교정.
9. `migration-log.md` §10 Voice — 원장 2차 목적지 **prov 140→136** (140은 sibling 존재 확인 문장; 본문 쌍은 DESIGN `:257` = 1).
10. `migration-log.md` A5 `TrustTech` — **prov 117→112** (117은 계수 문장, TrustTech 없음).
11. `migration-log.md` Footer/Freshness/Sources — conflicts `none` **prov 43→40**; 카탈로그-primary 각주 **prov 62→63**; Freshness 데이터 **36–38**; Sources **55–63**; verbatim lowercase hex **71–78**.
12. `migration-log.md` F1/계수/SHA — 본문 한정 15→**17**, `Whoscall Brand Guidelines` DESIGN 17→**19**, sibling 절 **140–152**, §13/§9 omission **158/159**, `components_harvested` **167**, portable SHA `335c3c8b…`.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 17 | 1 | 3 |
| `not Gogolook-authored` | 17 | 0 | 1 |
| `separately published UI specification` | 17 | 1 | 1 |
| `including the published Whoscall Brand Guidelines` | 17 | 0 | 3 |
| inventory 데이터 행 | — | 17 | — |
| `Cautious Everyday` / `Family Protector` / `Regional Mobile-First` | 0 | 0 | 0 |
| `feel safe from scam` / `parents or kids` / `security jargon` | 0 | 0 | 0 |
| `rgb(5,240,103)` / `rgb(230,250,239)` | 0 / 0 | 3 / 3 | 1 / 1 |
| `appear only` | 0 | 0 | 0 |
| `Official documentation of a single curve` (B3 절) | 1 | 0 | 0 |
| `cdn.prod.website-files.com` | 0 | 1 | 1 |
| `Primary download CTA pill, 56px height` | 0 | 1 | 3 |

DESIGN.md SHA-256 `335c3c8b7934e04b261d1551b67bc642f067f1e017cb1ffaae0b99dd98531e18`.
줄 수 299 불변(제자리 편집). 원본 SHA `ee088f48…` · sibling SHA `2b8b88b7…` 불변.

## 범위 밖 관찰

- **A5a.** 로그 기재 `copy-loss` compared **0** / candidates **49**. `verdict: PASS`는 대조한 바늘이 없음. 발행명 `Whoscall` / `Whoscall Green` / `Dark Gray` / `TrustTech` / `Nunito` / `Noto Sans`와 대문자 hex는 본문에 생존. 컴포넌트 `use:` 3건과 YAML 소문자 hex는 원장만 (A5a 손 대조 대상 아님). 원본 소문자 `approachable protection`(§9·§11)과 `mission energy`(§11)는 DESIGN **0** — 편집 gloss이지 발행 카피가 아님. 라틴 발행 카피 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 전용 `rgb(5,240,103)` / `rgb(230,250,239)` / `playwright` / `getComputedStyle` / `non-Western` 은 DESIGN.md **0**. 구조 분류(h3·섹션 표제) 승격 없음. 고치지 않음.
- **D2a.** §13 삭제 행·Omission ledger는 무식별. 이름·전기 문구 세 파일 0. Primary tasks는 §4 컨트롤 읽기이며 페르소나 동기 승격 없음.
- **E2d.** 자기분모 「only in the sibling」은 5번에서 제거. 남은 부재 단언(`ds.description` 0 in DESIGN, RGB not in portable body)은 분모를 그 파일로 닫음.
- **E2c.** B3 다섯 종류+게이트+「single curve is not that gate」는 DESIGN `:116`에 실재. 준수 주장 유지.

AUDIT_DONE fixes=12
