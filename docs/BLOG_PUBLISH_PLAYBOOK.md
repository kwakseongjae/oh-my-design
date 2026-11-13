# 블로그 한 편 발행하기 — 표준 절차

대상: `blog.oh-my-design.kr`(`oh-my-design.kr/blog…`는 전부 이 호스트로 308 된다).
이 문서 하나로 초안부터 배포, 발행 뒤 측정까지 간다. 구조·라우팅 배경은 `docs/BLOG_SUBDOMAIN_PLAN.md`, 무슨 글을
쓸지는 `docs/BLOG_ARTICLE_QUEUE.md`.

원칙 하나: **한 편 발행에 사람이 하는 일은 브리프 확인과 최종 승인뿐이다.** 그 사이가
사람 손을 타기 시작하면 블로그는 또 멈춘다(과거 두 번 그랬다).

---

## 0. 준비 — 브리프 (사람)

아래 7줄을 채운다. 못 채우면 아직 쓸 때가 아니다.

```
주제      :
독자      : (누가 이 글을 검색해서 오나)
검색어    : (그 독자가 검색창에 치는 말 2~3개. 제목·설명·첫 문단에 그대로 들어간다)
주장      : (한 문장. 반박 가능한 형태로)
실물 근거 : (레포 경로 / 커밋 / 실측 수치 + 측정일)
링크할 곳 : (이 글에서 링크할 아이템 페이지 10곳 이상, 그리고 이 글로 링크를 달 아이템 페이지)
안 할 말  : (이 글에서 의도적으로 주장하지 않는 것)
```

검색어는 추측으로 쓰지 않는다. `node scripts/analytics/pull-gsc.mjs --days 90`로 받은 검색어 가운데 노출은 있는데
클릭이 없는 것, 또는 그 브랜드의 아이템 페이지가 이미 받고 있는 검색어에서 고른다(수치는 저장소에 적지 않는다).

**표가 먼저다.** 데이터 글은 초안을 쓰기 전에 표와 그 원본 행을 만든다. 계산 스크립트와 원본 행은 저장소에 두고
(`docs/research/<날짜>-<주제>/`), 글의 모든 수치는 그 표에서만 가져온다. 2026-09-29의 배민 글은 OmD가 잰 숫자가 하나도
없었고, 검색으로 온 사람이 없었다.

**실물 근거가 없으면 글을 시작하지 않는다.** oh-my-design의 글은 전부 공개 레포에서
확인 가능한 경로에 묶여 있어야 한다.

---

## 1. 초안 (KO 정본)

```
/omd-kr-writer
```

호출 인자:

```yaml
preset_id: toss-tech-design      # 제품·기술 서사 기본값
task: "<브리프의 주제 + 주장>"
constraints:
  - 모든 수치에 측정일과 레포 경로를 붙인다
  - docs/NARRATIVE_CONTEXT_DESIGN_HARNESS.md 의 금지 주장 6개를 어기지 않는다
  - 경쟁 제품 우열을 판정하지 않는다
```

산출물을 `web/src/content/blog/<slug>/ko.md`에 저장한다.

**슬러그 규칙**: 소문자 kebab-case, 발행 후 영구 불변(= URL). 로더가
`^[a-z0-9]+(-[a-z0-9]+)*$`를 강제한다.

**프론트매터 계약** (엄격 파서 — 오타 키 하나에 빌드가 죽는다):

```markdown
---
title: "제목"
description: "한 문장 요약. 검색 결과와 카드에 그대로 노출된다."
date: 2026-08-21
tags: [release, design-systems]
---

본문...
```

허용 키는 `title` / `description` / `date` / `tags` 넷뿐. `date`는 `YYYY-MM-DD`,
`tags`는 비어 있으면 안 된다.

## 2. 한국어 다듬기

```
/hangul          # 맞춤법·띄어쓰기·번역투·높임, 글 종류에 맞는 문체
/omd-humanize   locale=ko
```

번역투·기계적 대비·추상 찬사를 걷어낸다. **사실·수치·명령어·URL은 잠근다.** 지적된 문장은 「나중에」로 넘기지 않는다
(배민 글은 번역투 11곳이 「고치면 좋음」으로 남은 채 발행됐고 지금도 그대로다).

**제목과 설명.** 제목에는 브리프의 검색어가 들어간다(브랜드 이름은 사람들이 부르는 대로: 「배민」, 「배달의민족」).
설명 한 문장에는 무엇을 몇 곳에서 쟀는지가 들어간다. 슬러그는 영어지만 제목과 H1은 한국어 검색어다.

## 3. 영문판

```
/omd-locale-adapter   → en
```

번역이 아니라 adaptation이다. thesis와 수치는 보존하되 정보 순서와 호흡을 영어로 다시
쓴다. 산출물은 `web/src/content/blog/<slug>/en.md`.

영문판을 못 만들면 그냥 KO만 발행해도 된다 — 로더가 한쪽만 있는 글을 허용하고,
없는 로케일은 hreflang에서 빠진다. 반대로 EN만 있으면 `/blog/<slug>`가
`/blog/en/<slug>`로 307한다.

## 4. 검수 (병렬)

```
/omd-slop-audit        # 실제 route 기준 — 로컬 서버 띄우고 돌린다
/omd-designer-review   # DESIGN.md 대비 타이포·색·간격
```

## 5. 최종 게이트

```
/omd-final-qa
```

**아래 8개가 전부 통과해야 발행한다. 하나라도 미달이면 머지 금지.**

1. `omd:final-qa` 라인 ref 있는 FAIL이 0건
2. 모든 수치에 **측정일 + 레포 경로**가 붙어 있다
3. `docs/NARRATIVE_CONTEXT_DESIGN_HARNESS.md`의 **금지 주장 6개**를 어기지 않는다
4. ko/en이 같은 thesis·같은 수치를 말한다 (한쪽만 있으면 해당 없음)
5. 실렌더 확인 — 데스크탑 1440 / 모바일 390, 가로 스크롤 0. **발행할 바이트로** 확인한다(임시 프리뷰에서 본 것은 확인이 아니다)
6. 제목·설명·첫 문단에 브리프의 검색어가 있다
7. OmD가 잰 값으로 만든 표나 그림이 하나 이상 있고, 그 원본 행이 저장소에 있다
8. 아이템 페이지 링크가 10곳 이상이고 전부 200으로 열린다. 한국어 글은 `/ko/design-systems/<id>`로 링크한다

---

## 6. 로컬 확인

```bash
cd web && npm run dev          # 3335 포트
```

```bash
# 메인 호스트 (컷오버 전 형태)
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:3335/blog/<slug>

# 블로그 호스트 (컷오버 후 형태) — Host 헤더 위조로 확인
curl -s -H 'Host: blog.localhost:3335' -o /dev/null -w '%{http_code}\n' http://localhost:3335/<slug>
curl -s -H 'Host: blog.localhost:3335' http://localhost:3335/feed.xml | head -20
curl -s -H 'Host: blog.localhost:3335' http://localhost:3335/sitemap.xml | grep <slug>
```

OG 카드도 눈으로 본다 (한글 제목은 폰트 서브셋을 원격에서 받아 그린다):

```bash
curl -s "http://localhost:3335/og/blog?slug=<slug>&locale=ko" -o og.png
```

## 7. 발행

```bash
npm run typecheck && npm test        # web/
git add web/src/content/blog/<slug> web/public/blog-assets/<slug>
git commit    # 훅이 하이지엔·카운트 게이트를 돌린다
```

배포는 main 머지 시 Vercel이 자동으로 한다. 배포 후 프로덕션에서 §6의 curl을 실제
호스트로 한 번 더 돌린다.

---

## 발행 후 체크리스트

- [ ] 포스트가 KO 인덱스와 EN 인덱스 양쪽에 뜬다(한쪽만 있으면 배지가 붙는다)
- [ ] `feed.xml`에 항목이 늘었다
- [ ] `sitemap.xml`에 두 로케일 URL과 hreflang이 들어갔다
- [ ] OG 카드에 제목이 제대로 그려진다(한글 tofu 없음)
- [ ] 본문의 모든 레포 링크가 살아 있다
- [ ] 글에 나온 브랜드의 아이템 페이지에서 이 글로 가는 링크가 열린다
- [ ] 단축 링크를 만들었다(`web/src/data/go-links.ts`, 플랫폼·언어별로 하나씩. `docs/CONTENT_TRACKING.md`)

## 발행 뒤 — 퍼뜨리고 잰다

- **퍼뜨리기.** 글 한 편에서 Threads 컷 3~5개를 뽑는다(`ops-showcase`가 초안, 게시는 오너 계정). 링크는 전부 단축 링크다.
- **2주 뒤와 4주 뒤에 잰다.** `node scripts/analytics/pull-gsc.mjs --days 28`에서 이 글의 주소와 브리프의 검색어를 찾고,
  `node scripts/analytics/pull-posts.mjs --days 28`로 단축 링크 클릭을 본다. 수치는 오너에게만 보고하고 저장소에 적지 않는다.
- **고치면 날짜를 남긴다.** 발행한 글의 사실을 고치면 프론트매터의 수정일을 바꾼다(수정일 키는 `fix/blog-basics`가 머지된
  뒤부터 쓸 수 있다. 그 전에는 고친 날짜를 커밋 메시지에 적는다).

## 하지 않는 것

- 수치를 "약", "대략"으로 뭉개기 — 측정값이 없으면 그 문장을 쓰지 않는다
- 경쟁 제품과의 우열 판정
- 존재하지 않는 사용자 후기·지표 인용
- 슬러그 변경 (URL은 발행 순간 영구다)
