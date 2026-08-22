# Final QA — v2-a-design-system-your-agent-can-hold

**Artifacts:** `web/src/content/blog/v2-a-design-system-your-agent-can-hold/{ko,en}.md`
**Routes:** `blog.localhost:3335/<slug>` · `/en/<slug>` (dev, NEXT_PUBLIC_BLOG_SUBDOMAIN=1)
**DESIGN.md read at:** 2026-08-21T10:43:48Z (288 lines)
**Voice preset:** toss-tech-design

---

## Round 1

| # | Item | Verdict | Evidence |
|---|---|---|---|
| 1 | Brand consistency | PASS | 두 본문에 hex·font-family·px 리터럴 0건. 스타일은 전부 공유 렌더러와 토큰 클래스(`text-muted-foreground`, `border-primary/40`)에서 온다. |
| 2 | Typography hierarchy | PASS | 본문은 H2만 사용(ko 8 / en 6), H1은 라우트가 `post.title`로 한 번 렌더. h1→h3 skip 0건. |
| 3 | Voice register | PASS | 금지 어미(습니다/입니다/한다/이다) **0건**. 한국어 종결 78문장 중 75문장이 `-요/-죠`. 나머지 3건은 열거를 잇는 의도적 체언 종결(`~답해야 하는 것.`, `~접근성 계약이 뭔지.`, `~몇 개까지 얹는지.`)로 preset의 "한 줄 단락 강조" 허용 범위. |
| 4 | Image / figure | PASS (vacuous) | 두 본문 모두 이미지 0건 — alt 위반이 성립하지 않는다. 릴리스 노트 성격상 figure 없이 발행. |
| 5 | Cross-locale parity | **FAIL** | ko 8 H2 vs en 6 H2. |
| 6 | Accessibility | PASS | `--primary` on `--background` = **5.08:1**(light) / **7.02:1**(dark), `--muted-foreground` = 5.84 / 5.21 — 10px 배지 포함 전부 AA(4.5:1) 충족. 본문 `<article lang={post.locale}>`로 한국어 본문에 `lang="ko"` 부여. |
| 7 | Performance | PASS | 이미지 0건. 코드 블록 4개 전부 ` ```bash ` 언어 태그. |
| 8 | Links | PASS | 본문 마크다운 링크 0건. 크롬 링크 4개 전부 200 실측(`/cli`, `/docs/en`, `/logo.png`, `/logo-white.png`). |

### Failed items detail

#### [5] Cross-locale parity — H2 개수 불일치

- Location: `ko.md` 8 × `^## ` vs `en.md` 6 × `^## `
- Evidence: ko에만 있는 두 섹션 — `## 프롬프트는 시스템이 아니에요`, `## flavor는 베끼기가 아니에요`
- 원인: ko는 EN 원문의 도입부 논증("A prompt is not a system…")을 섹션으로 승격했고, flavor 5종(토스·당근·오늘의집·무신사·배민)을 한국 독자용으로 신설했다. 두 내용 모두 EN 독자에게도 유효한데 EN에만 없다.
- Fix: EN에서 (a) 도입부 논증을 `## A prompt is not a system`으로 승격, (b) `## Flavors are not copies` 신설. 번역이 아니라 같은 주장을 영어로 다시 쓴다.

### Verdict — round 1

**REVISION** — 1 item FAIL ([5]). 동일 항목이 round 2에서 다시 FAIL이면 BLOCK.

---

## Round 2 (after revision)

수정: `en.md`에 `## A prompt is not a system`(도입부 논증을 섹션으로 승격)과
`## Flavors are not copies`(신설)를 추가했다. 브랜드 표기는 카탈로그 정본을 따라
`Ohouse`(= `web/references/ohouse` frontmatter `name`)로 맞췄다.

| # | Item | Verdict | Evidence |
|---|---|---|---|
| 1 | Brand consistency | PASS | 두 파일 hex·font-family 리터럴 0건(grep). |
| 2 | Typography hierarchy | PASS | 본문 H2만, h1→h3 skip 0건. |
| 3 | Voice register | PASS | 금지 어미 0건 재확인. ko 본문은 이번 라운드에서 미수정. |
| 4 | Image / figure | PASS (vacuous) | 이미지 0건. |
| 5 | Cross-locale parity | **PASS** | ko 8 H2 = en 8 H2, 렌더된 라우트에서 `<h2>` 개수 8/8 실측, 섹션 순서 1:1. |
| 6 | Accessibility | PASS | round 1 측정치 유효(스타일 미변경). primary/bg 5.08:1(light)·7.02:1(dark). |
| 7 | Performance | PASS | 코드 블록 4개 전부 lang 태그, 이미지 0건. |
| 8 | Links | PASS | 본문 링크 0건. 크롬 링크 4개 200 실측. |

## 닫지 못한 게이트 (플레이북 §5-5)

**1440/390 실렌더 확인 — 미수행.** 이 머신의 Chrome이 헤드리스·MCP 양쪽에서
`localhost`와 `127.0.0.1` 모두에 `ERR_NAME_NOT_RESOLVED`를 낸다(curl은 정상, 샌드박스
해제해도 동일). 블로그 코드와 무관한 환경 문제로 판단해 더 파지 않았다.

**남은 위험**: 헤더 내비게이션에 로케일 전환 링크가 하나 늘었다(`Read in English` /
`한국어로 읽기`). 390px에서 로고 + 전환 링크 + CLI + Docs가 한 줄에 들어가는지는
**계산으로만** 확인했고 화면으로는 확인하지 못했다. 배포 후 실기기에서 먼저 볼 것.

## 판정 근거로 삼지 않은 것 (정직)

- kr-writer preset의 분량 기준은 5,500자+지만 본문은 2,741자다. 원문이 지지하지 않는
  분량을 채우는 건 창작이라 맞추지 않았다. preset의 분량 기준은 브랜드 딥다이브용이고
  이 글은 릴리스 노트다. **의도적 미달이며 rubric 8항목과 무관하다.**
- figure 0건도 같은 이유 — 넣을 검증된 스크린샷이 없다.

## Verdict — round 2

**PASS (8/8)** — 발행 가능. 단, 위 실렌더 게이트는 열린 채로 남았다.
