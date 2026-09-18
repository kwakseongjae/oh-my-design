# 출처 인덱스 실명(失明) — 토스에서 드러난 리서치 절차의 구조적 결함

작성 2026-09-17. 오너 질문: *"토스는 design system이 공개되어 있는 몇 안되는 기업인데,
해당 기업에 대해서도 저따구로 리서치를 해서 없다고 하는건 진짜 말이 안된다. 왜 못찾았어?"*

## 답: 못 찾은 게 아니라, 찾아놓고 목록을 안 읽었다

`web/references/toss/DESIGN.md`는 **처음부터 올바른 호스트를 인용하고 있었다** —
`tossmini-docs.toss.im/tds-mobile/components/…`. TDS를 놓친 게 아니다.
놓친 것은 **로스터**다. 토스는 **"앱인토스에서 가장 자주 쓰는 11개 코어 TDS 컴포넌트"**를
명시적으로 열거한다 — TDS 전체가 아니라 미니앱 파트너용 큐레이션 목록이다:

> Badge · Border · BottomCTA · Button · Asset · ListRow · ListHeader · Navigation · Paragraph · Tab · Top

우리가 측정한 것은 그중 **2개**(Button, Badge)다. 나머지 9개는 이름조차 레퍼런스에 없었다.
6개 컴포넌트를 문서화했지만 그건 11개 중 6개가 아니라, **목록을 본 적 없이 고른 6개**였다.
(TextField·Agreement는 같은 문서에 있으나 11개 목록에는 없다. TDS 전체 컴포넌트 수는
어떤 인덱스로도 아직 확정되지 않았다 — 11은 상한이 아니라 큐레이션이다.)

## 왜 그렇게 됐나 — 절차가 인덱스를 안 본다

`omd:add-reference` Phase 2 (Tier 1 수집)의 탐색 수단은 셋뿐이다:

1. `<brand>.design`, `design.<domain>`, `<brand>/design-system` HEAD
2. WebSearch `"<brand>" design system site:<domain>`
3. `gh search repos "<brand> design tokens"`

셋 다 **URL 이름 추측**이거나 **검색엔진 의존**이다. 어디에도 "그 사이트가 자기 문서
목록을 발행하는가"를 묻는 단계가 없다. 토스의 인덱스는 이름 추측으로 닿을 수 없는 곳에 있다:

- `developers-apps-in-toss.toss.im` — **개발자** 포털이지 디자인 포털이 아니다.
  `toss.design`도 `design.toss.im`도 아니므로 1번은 영원히 못 맞힌다.
- 그 포털은 `llms.txt`(32,846 bytes, 링크 258개)와 **모든 페이지의 `.md` 판**을 발행한다.
- 디자인 문서만 6건: 개요 / 도구 / **Figma·TDS Mobile UI Kit 라이선스** /
  디자인 도구 / **UI·UX 가이드(38,550 bytes)** / TDS 컴포넌트.
- 심지어 GitBook `?ask=` 자연어 질의 엔드포인트까지 열려 있다.

그리고 그 컴포넌트 표의 링크는 **전부 `tossmini-docs.toss.im`으로 돌아온다** —
우리가 이미 인용하던 그 호스트로. 인덱스만 한 번 읽었으면 끝날 일이었다.
`tossmini-docs.toss.im` 자체는 `sitemap.xml`도 `robots.txt`도 `llms.txt`도 404다.
그 사이트에는 목록이 없다. 목록은 개발자 포털에만 있다.

## 모션 주장은 철회하지 않는다 — 오히려 1차 출처로 확인됐다

기존 주장: *"공식 DS를 발행하는 18개 중 5-토큰 모션 스케일을 발행하는 곳은 없다."*
토스 문서 6건 전체 grep 결과 `duration`/`easing`/`cubic-bezier` 수치 **0건**.
TDS 자체 질의 엔드포인트에 직접 물었고, 답은 이렇다:

> "현재 제가 접근 가능한 TDS 문서/가이드들에서는 애니메이션의 duration, easing,
> cubic-bezier에 대한 공개된 정확한 수치 값을 확인할 수 없어요. … TDS는 Figma
> UI Kit 안에 컴포넌트 스타일이 포함돼서 동작/표현을 맞추는 방식으로 안내돼요."

이건 주장의 확인일 뿐 아니라 **이유**다. 토스의 모션 스펙은 문서가 아니라 Figma 라이브러리에 있다.
`§15`는 이제 "출처 없는 면책"에서 **"출처 있는 부재"**로 승격됐다.

## 일반화 — 인덱스를 발행하는 호스트는 드물지 않다

**모집단 주의:** 앞서 인용한 "공식 DS 발행 18개"는 별도 조사의 수이고, 아래 10개는
`verification_v2`에 `kind: design-system` 표면을 가진 부분집합이다. 나머지 8개는 미조사다.
그 10개 호스트를 실측했다.
**내용까지 검사해야 한다** — `woowahan.com/llms.txt`는 SPA index.html을 200으로 돌려주는
소프트 404였고, 크기만 본 1차 측정은 이걸 통과시켰다(즉시 정정).

| 레퍼런스 | 호스트 | 기계 판독 인덱스 |
|---|---|---|
| pega | design.pega.com | `llms.txt` 1,528 b + sitemap |
| kakao | developers.kakao.com | sitemap **316 URL** |
| krds | www.krds.go.kr | sitemap 81 URL (**컴포넌트 페이지 45개**) |
| yeogiotte | designlibrary.yeogi.com | sitemap 40 URL |
| baemin | www.woowahan.com | sitemap 5 URL |
| apple / karrot / line / mongodb / toss | — | 없음 |

**10개 중 5개가 인덱스를 발행하고 있었고, 우리는 한 번도 읽지 않았다.**
한국 호스트만의 현상도 아니다 — 별도 프로브에서 `linear.app`(10,119 b),
`vercel.com`(4,721 b), `serendie.design`(12,743 b)이 모두 `llms.txt`를 발행했다.
krds 하나만 봐도 공식 컴포넌트 페이지가 45개 열거돼 있다.

## 절차 수정 (게이트 해제 시 적용)

`omd:add-reference` Phase 2에 **Step 0 — 인덱스 우선**을 추가한다. 이름 추측보다 먼저 온다.

1. `<host>/llms.txt`, `<host>/sitemap.xml`, `<host>/robots.txt` 프로브.
   **상태코드만으로 판정 금지** — 본문이 `<!DOCTYPE`/`<html`로 시작하면 소프트 404다.
2. 페이지 URL에 `.md`를 붙여본다(GitBook·Mintlify·Docusaurus 계열은 대부분 준다).
3. 브랜드 도메인의 `developers.*` / `developer.*` / `developers-*.*` 서브도메인을 프로브한다.
   디자인 시스템이 **개발자 포털 안에** 있는 경우가 실재한다(토스).
4. 인덱스를 찾으면 **로스터를 먼저 기록하고** 개별 페이지를 측정한다.
   측정 안 한 항목은 이름만 남기고 토큰 값은 절대 채우지 않는다 — Unknown means absent.

## 이번에 실제로 반영한 것

`web/references/toss/DESIGN.md` (증거 갱신이므로 write gate 통과, 미러 2곳 동기화, 453/453 통과):

- surfaces +3 / sources +4 — 개요·UX가이드·**라이선스**·`llms.txt` 인덱스
- §4에 공식 11개 로스터 기록. 측정 2개, **미측정 9개는 이름만** — 토큰·상태·수치 0건
- Figma/TDS UI Kit 라이선스 조건 명시(위반 시 자동 종료·전량 삭제 의무) —
  `assets_fonts_licenses` CORE_CHECK의 직접 증거
- §15를 1차 출처 기반 "출처 있는 부재"로 재작성

## 남은 것

- kakao(316) / krds(81·컴포넌트 45) / yeogiotte(40) / pega 인덱스 판독 — 각각 로스터 대조
- 나머지 430개 레퍼런스 호스트에 대한 인덱스 프로브(일괄)
- 토스 리뷰 패키지 `.omd/execution/2026-09-17/toss-core-review/`는 **출처 추가 이전**에
  만들어졌다. 오너 승인 전에 `prepare-design-md-core-review.cjs` 재생성 필요.

## 부수 발견 — Core v2 투영이 §4의 산문을 떨어뜨린다

로스터를 §4에 넣고 검토 패키지를 재생성한 결과, 텍스트는 그래프에 **보존되지만**
(`extensions.dev.oh-my-design.migration.original_segments[6].content`,
`dropped 0` · `reconstruction_equal true`) **투영된 Core v2 DESIGN.md에는 렌더되지 않는다.**

§4 매핑은 `### <컴포넌트명>` 블록을 컴포넌트 스펙으로 읽는다. 컴포넌트 스펙이 아닌
산문 소제목은 불투명 확장으로 흡수된다. `### Unknowns` 클레임도 목록 슬롯이 아니라
`unknown_policy` 고정 문구만 렌더하므로 대체 자리가 되지 못한다.

**지금은 보인다** — `/design-systems/toss`가 legacy
DESIGN.md 마크다운을 그대로 렌더하므로 로스터가 노출된다. **채택 이후에는 안 보인다.**
오너가 채택을 승인하기 전에 알아야 할 사항이다. 선택지는 둘:

- (a) 그대로 둔다 — 무손실 보존되고, legacy 리더가 계속 보여준다. 채택 시 소실.
- (b) 컴파일러에 "미측정 컴포넌트 명단" 슬롯을 추가한다 — 스펙 변경이므로 별도 결정.

이번에는 (a)로 두고 기록만 남긴다. 오너 검토 직전에 스펙을 바꾸지 않는다.
