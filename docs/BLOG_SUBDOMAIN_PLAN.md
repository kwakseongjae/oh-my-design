# blog.oh-my-design.kr — 서브도메인 분리 + 발행 파이프라인 계획

작성: 2026-08-21 · 상태: **A1(도메인 연결) 빼고 전부 구현 완료 · 커밋 2cb4ebc0 / aa1b1abc / d8f46598**
정본 결정 기록. 실행 중 변경이 생기면 이 문서를 먼저 고치고 CURRENT_STATE.md에 반영한다.

---

## 0. 확정된 결정 (사용자 승인 2026-08-21)

| 항목 | 결정 | 함의 |
|---|---|---|
| 호스트 | `blog.oh-my-design.kr` = **정본**, `oh-my-design.kr/blog/*` → 301 | URL만 분리, 코드베이스는 분리하지 않음 |
| 코드 | 같은 레포 · 같은 Vercel 프로젝트 (`web/`) · middleware host rewrite | 토큰·컴포넌트·배포 파이프라인 1벌 유지 |
| 언어 | **KO 정본 + EN 동시 발행**, hreflang `ko`/`en`/`x-default` | JA/zh-TW는 구조만 열고 보류 |
| 리듬 | **파이프라인 먼저**, 시드는 현행 1편 유지 후 순차 발행 | 인프라 완주 전 대량 집필 금지 |

**따로 뗀다 = 도메인만 뗀다.** 별도 레포/별도 Vercel 프로젝트는 채택하지 않았다. 이유: DESIGN.md·토큰·`Markdown` 렌더러·`/api/og`·GA4 계측이 전부 `web/`에 있고, 두 벌이 되는 순간 드리프트 관리 비용이 블로그 자체보다 커진다.

---

## 1. 왜 하는가 (근거와 성공 기준)

- GSC 기준 검색 클릭의 **99.2%가 브랜드 쿼리**다(2026-06-23 분석). 논브랜드 유입 엔진이 아예 없다. 블로그는 그 구멍을 메우는 유일한 상시 표면이다.
- `web/docs/aeo-and-public-design-md.md`: Claude 웹검색은 Brave 인덱스 기반이고, Claude Code는 llms.txt를 가장 많이 긁는 클라이언트다. 즉 블로그는 **사람 독자 + 에이전트 인용** 두 독자를 동시에 노린다.
- 활성화 누수(generate→install 6.7%)는 블로그가 못 고친다. **블로그의 KPI로 설치·전환을 걸지 않는다.**

성공 기준 (90일):
1. 논브랜드 쿼리로 들어온 세션 > 0 → 월간 증가 추세
2. 포스트 1편 이상이 Brave/Claude 답변에서 인용 (수동 스팟체크)
3. 발행이 파이프라인으로 재현 가능 — 한 편당 사람 손 작업이 브리프 작성 + 최종 승인뿐

정직한 비용: 구글은 서브도메인을 사실상 별도 사이트로 다룬다. 메인 도메인의 (약한) 권위가 즉시 이전되지 않는다. 완화책은 §5-D에 배선했다 — 상시 내부 링크, 양쪽 사이트맵, GSC 별도 속성, 모든 포스트가 레포 경로로 되돌아가는 링크.

---

## 2. 현재 상태 (착수 지점)

- `web/src/app/blog/page.tsx` (인덱스), `web/src/app/blog/[slug]/page.tsx` (상세, JSON-LD 있음) — 동작 중
- `web/src/lib/blog/posts.ts` — 포스트 1편이 **TS 구조화 데이터**로 인라인. 본문은 마크다운 문자열, 공유 `Markdown` 렌더러가 렌더
- `web/src/app/sitemap.ts`가 blog 라우트를 열거 (72행, 142행)
- RSS 없음, 로케일 분기 없음, `middleware.ts` 없음, 오리진(`https://oh-my-design.kr`)이 파일마다 하드코딩 (src 전체 43곳)
- 이력: `/blog`(국내 브랜드 딥다이브 4편) → dev 게이팅 → 1.5.0에서 제거 → v2 시점에 1편으로 재도입. **두 번 접혔다.** 이번 계획이 "파이프라인 먼저"인 이유다.

---

## 3. Phase A — 인프라 (서브도메인 + 라우팅)

| # | 작업 | 산출물 | 비고 |
|---|---|---|---|
| A1 | Vercel Domains에 `blog.oh-my-design.kr` 추가 + DNS CNAME | 도메인 Valid | **사용자 수동** (Vercel 대시보드 + 레지스트라) |
| A2 | ✅ 오리진 상수 모듈 | `web/src/lib/site.ts` — `SITE_ORIGIN`/`BLOG_ORIGIN`/`blogIndexUrl()`/`blogPostUrl()` | 블로그 2파일 + sitemap + robots 전환. 나머지 40곳은 그대로 |
| A3 | ✅ host rewrite | `web/src/proxy.ts` + `web/src/lib/blog/host-routing.ts` | `host === blog.*` 일 때 `/` → `/blog`, `/<slug>` → `/blog/<slug>`, `/en/<slug>` → `/blog/en/<slug>`, `/feed.xml` → `/blog/feed.xml`, `/sitemap.xml` → `/blog/sitemap.xml` |
| A4 | ✅ 구 경로 301 | `next.config.ts` redirects: `/blog/:path*` → `BLOG_ORIGIN/:path*` | **A1 완료 후에만 켠다.** 도메인 미연결 상태에서 켜면 블로그가 죽는다 |
| A5 | ✅ 사이트맵/robots 분리 | 메인 sitemap에서 blog URL 제거, `app/blog/sitemap.xml` + host별 robots | 두 호스트가 같은 URL을 중복 신고하지 않게 |
| A6 | ✅ 테스트 | `host-routing.test.ts` 15케이스 + `site.test.ts` 2케이스 | 매처가 `_next`/`api` 제외, 나머지는 순수 함수가 판단 |

주의 (기존 부채에서 배운 것): `next.config.ts` 주석에 이미 기록돼 있듯, **호스트 정규화를 앱과 Vercel 두 레이어에서 동시에 하면 리다이렉트 루프가 난다.** apex↔www는 Vercel Domains가 소유한다. A4의 `/blog/*` 301은 경로 리다이렉트라 층이 겹치지 않지만, 배포 후 `curl -I`로 체인 길이를 실측한다.

---

## 4. Phase B — 콘텐츠 파이프라인 (posts.ts → 파일 기반)

TS 인라인 문자열은 1편일 때만 성립한다. 작성 스킬(`omd:kr-writer`)의 산출물이 `.md`이므로 파일 기반이 접합면이 맞다.

| # | 작업 | 산출물 |
|---|---|---|
| B1 | ✅ 콘텐츠 트리 | `web/src/content/blog/<slug>/{ko,en}.md` — frontmatter title/description/date/tags |
| B2 | ✅ 로더 | `posts.ts` 공개 API 유지 + `locale` 인자 + `getPostLocales()`. `frontmatter.ts` 엄격 파서(미지의 키·잘못된 날짜·빈 tags는 빌드 실패) |
| B3 | ✅ 라우트 | `/blog/[slug]`(ko 정본), `/blog/en/[slug]`. `alternates.languages` hreflang, JSON-LD `BlogPosting` + `inLanguage` |
| B4 | ✅ 피드 | `/feed.xml` (+ `/en/feed.xml`), 사이트맵 연동 |
| B5 | ✅ OG | 기존 `/api/og` 재사용해 제목 기반 동적 OG. 커버 아트가 필요한 편만 `omd:codex-image` |
| B6 | ✅ 기존 1편 이관 + KO 정본 | EN 본문을 `en.md`로, KO 번안 생성해 `ko.md` 정본화. **구 URL → 서브도메인 슬러그 301 체인 실측** |

B6 주의: 구 URL(`oh-my-design.kr/blog/v2-a-design-system-your-agent-can-hold`)은 지금 EN을 서빙한다. 301 후 그 자리에 KO가 오면 기존 EN 링크의 언어가 바뀐다. 슬러그 참조는 현재 `posts.ts` 내부뿐(외부 배포물에 하드코딩 없음)이므로 손실은 없지만, 릴리스 노트/스레드에 이미 뿌린 링크가 있으면 **그 편만 EN 정본으로 예외 처리**한다.

---

## 5. Phase C — 발행 파이프라인 (CLI v2 도그푸딩)

한 편 발행 = 아래 사슬 1회. `omd:orchestrator`가 2-round revision cap으로 감싼다.

```
브리프(사람)
  → omd:kr-writer   preset=toss-tech-design      ko.md 초안
  → omd:humanize    locale=ko                    번역투·기계적 대비 제거
  → omd:locale-adapter → en                      en.md (번역 아님, adaptation)
  → omd:designer-review + omd:slop-audit         실제 route 렌더 기준 검수
  → omd:final-qa    8-item rubric                FAIL 1건이라도 있으면 발행 금지
  → 커밋 + 배포 + 실렌더 검증(1440/390)
```

발행 게이트 (하나라도 미달이면 머지 금지):
1. `omd:final-qa` 전 항목 PASS (라인 ref 있는 FAIL 0)
2. 모든 수치에 **측정일 + 레포 경로**가 붙어 있다 (예: "7→3, G3-SELF-INSPECTION-2026-08-19")
3. `docs/NARRATIVE_CONTEXT_DESIGN_HARNESS.md`의 **금지 주장 6개**를 하나도 어기지 않는다 (경쟁 우열 판정 금지, Google 규격 주장 금지 등)
4. ko/en 두 파일이 같은 thesis·같은 수치를 말한다 (locale-adapter 대조 리포트 첨부)
5. 실렌더 확인: 데스크탑 1440 / 모바일 390, 가로 스크롤 0

산출물: `docs/BLOG_PUBLISH_PLAYBOOK.md` — 위 사슬을 명령 단위로 적은 표준 절차. 두 번째 포스트부터는 이 문서만 보고 돌린다.

---

## 6. Phase D — 계측 · 유입 · 배포 검증

| # | 작업 | 비고 |
|---|---|---|
| D1 | GA4 이벤트 | `/ga4` 스킬 경유. `blog_post_view` / `blog_locale_switch` / `blog_cta_click`, 파라미터는 `post`(슬러그) — 카디널리티 규칙 준수. 스크롤뎁스는 기존 `initScrollDepth` 재사용 |
| D2 | 크로스링크 | 메인 nav/footer에 Blog 상시 노출, `/cli`·`/docs`에서 관련 포스트로, 포스트 하단 CTA는 `npx` 한 줄 + 레포 경로 |
| D3 | 색인 | GSC에 `blog.` 속성 추가 + 사이트맵 제출, Brave `submit-url`, llms.txt에 블로그 섹션 추가 |
| D4 | 배포 검증 | 301 체인, hreflang 양방향, RSS 유효성, JSON-LD Rich Results, 프로덕션 실렌더 |

---

## 7. 첫 발행 큐 (파이프라인 완주 후 착수)

전부 레포에서 검증 가능한 실물이 있는 주제만 올렸다. 없는 주제는 쓰지 않는다.

1. **(KO)** 왜 프롬프트가 아니라 DESIGN.md인가 — 유도 사슬 8단계, 실제 생성물 발췌 (`/cli#derivation` 재료 재사용)
2. **(KO)** 프리셋 93개를 만든 이유 — 동일 픽스처 A/B에서 첫 렌더 결함 7→3, 입력 토큰 −47% (2026-08-19 실측)
3. **(KO)** AI가 만든 화면이 티 나는 이유 — 슬롭 게이트 54+8 카탈로그에서 5종 해부 (한글 세리프 폴백, 마우스 포커스 링, native select, opacity disabled, 와이드 빈 공간)
4. **(KO)** 레퍼런스 딥다이브 시리즈 재개 — 440개 카탈로그 자산 활용 (과거 4편 이력 있음)
5. **(EN)** v2.0.0 릴리스 — 기존 1편, B6에서 ko/en 쌍으로 정규화

---

## 8. 위험과 대응

| 위험 | 대응 |
|---|---|
| 서브도메인 권위 분산 | §5-D 배선 + 메인에서 상시 내부 링크. 90일 후 GSC로 재평가, 실패 시 서브폴더 회귀(301 방향만 뒤집으면 됨) |
| 세 번째로 블로그가 방치됨 | "파이프라인 먼저" 결정 자체가 대응. 발행 사슬이 안 돌면 인덱스 노출 자체를 재검토 |
| 포스트의 수치가 낡음 | 수치는 generated 상수를 인용하거나 **측정일 명기**. 카운트(440·93·54)는 sync 대상에 포함 검토 |
| middleware 신규 도입 | 현재 미들웨어가 0개다. 매처를 좁게 잡고 유닛 테스트로 호스트 매핑 표를 고정 |
| A4를 A1보다 먼저 켬 | 순서 강제 — 도메인 Valid 확인 스크린샷 없이는 A4 머지 금지 |

---

## 9. 실행 순서와 체크포인트

```
A1(사용자) ─┬─> A2 → A3 → A6 ──┐
            └─> B1 → B2 → B3 ──┴─> [체크포인트 1] 프리뷰에서 서브도메인 동작 확인
                                    → A4 → A5 → B4 → B5 → B6
                                    → [체크포인트 2] 프로덕션 301·hreflang·RSS 실측
                                    → C(플레이북) → [체크포인트 3] 첫 포스트 final-qa 통과
                                    → D1~D4
```

- **체크포인트 1**: 프리뷰 배포에서 `blog.` 호스트가 블로그를 서빙하고 메인은 그대로인지. 여기까지는 사용자에게 보이는 변화 0.
- **체크포인트 2**: 301·hreflang·피드가 프로덕션에서 실제로 맞는지. 여기서부터 되돌리기가 비싸진다.
- **체크포인트 3**: 파이프라인이 사람 손 없이 한 편을 끝까지 밀어내는지.


---

## 10. 구현 메모 (2026-08-21, A2·A3·A6·B1·B2)

실행하며 계획과 달라진 것 + 다음 사람이 알아야 할 것.

### 계획 수정 3건

1. **`middleware.ts`가 아니라 `web/src/proxy.ts`.** 설치된 Next 16.2.6에서 `middleware`
   파일 규약은 deprecated 경고 대상이고, `proxy`와 둘 다 있으면 빌드가 E900으로 죽는다
   (`next/dist/build/index.js` 실측). `proxy` 네임드 export 또는 default 함수를 받는다.
2. **컷오버는 코드 수정이 아니라 환경변수 `NEXT_PUBLIC_BLOG_SUBDOMAIN=1`.** 이게 없으면
   canonical·OG·JSON-LD·사이트맵이 전부 `oh-my-design.kr/blog`를 계속 가리킨다. 도메인이
   붙기 전에 머지해도 크롤러에게 존재하지 않는 호스트를 정본이라 말하지 않는다는 뜻이고,
   A1 완료 시점에 Vercel 환경변수 하나만 켜면 원자적으로 전환된다.
3. **판단 로직은 proxy가 아니라 순수 함수에.** `resolveBlogHostRouting(host, pathname)`이
   rewrite/redirect/null을 반환하고 proxy는 어댑터만 한다. 엣지 런타임 없이 매핑 표
   전체를 유닛 테스트할 수 있다.

### 실측으로 잡은 결함 1건

`NextResponse.redirect`에 `nextUrl`을 그대로 쓰면 Location의 호스트가 요청 호스트와
어긋난다(dev에서 Host 헤더를 위조하면 `localhost`가 나왔다). 프로덕션에서 독자를 블로그
밖으로 튕겨낼 수 있어, 검증된 Host 헤더로 `url.host`를 고정했다.

### 현재 동작 (dev 실측, 플래그 ON 기준)

| 요청 | 결과 |
|---|---|
| `blog./` · `blog./<slug>` | 200, 블로그 인덱스·포스트 |
| `blog./blog/<slug>` · `blog./blog` | 308 → `blog./<slug>` · `blog./` |
| `blog./logo.png` · `blog./_next/*` · `blog./api/*` | 통과(200) |
| `blog./nope` | 404 |
| `oh-my-design.kr/blog`, `/blog/<slug>`, `/` | 200, 이전과 동일 |
| canonical·og:url·JSON-LD·sitemap | 플래그 ON이면 `blog.oh-my-design.kr`, OFF면 `oh-my-design.kr/blog` |

### 예약된 경로

`/robots.txt`, `/sitemap.xml`, `/feed.xml`은 확장자 규칙에 걸려 **현재 메인 앱 것으로
통과**한다. A5(블로그 전용 sitemap/robots)와 B4(피드)에서 `host-routing.ts`의 표에 명시
항목을 추가하면 된다 — 바꿀 곳은 그 표 하나다.

### 콘텐츠 이관 등가성

기존 EN 1편을 `src/content/blog/<slug>/en.md`로 옮긴 뒤, 이관 전후 렌더 HTML을
스크립트 제거 후 대조해 **문자 단위로 동일**함을 확인했다(포스트 11,950자 / 인덱스
6,006자). KO 정본은 아직 없다 — 로더가 canonical 없으면 있는 로케일로 폴백하므로 현재
표시는 이전과 같다. KO 번안은 B6(발행 파이프라인 사용).

### 검증 상태

타입체크 통과 · 웹 테스트 877개 통과(신규 28개 포함) · lint 에러 0(경고 40건은 전부 선재).


---

## 11. 2차 구현 메모 (B3·B4·B5·A4·A5·C·B6)

### 구조

- 로케일: `/blog`(ko 정본) · `/blog/en`. 블로그 호스트에서는 `/` · `/en`.
- KO판이 없는 글의 KO URL은 **307로 있는 로케일로** 보낸다. 404도 아니고, 한국어
  canonical에 영어 본문을 얹지도 않는다. 번역이 들어오면 리다이렉트가 저절로 사라진다.
- hreflang은 **실제 있는 로케일만** 신고한다. 404 나는 alternate를 광고하지 않는다.
- 인덱스는 없는 로케일의 글도 배지를 달아 노출한다. 절반의 독자에게 글을 숨기는 것보다 낫다.

### 새 파일

`lib/blog/locales.ts`(리프 — 엣지 번들에 fs가 딸려가지 않게) · `i18n.ts`(로케일별 크롬
카피) · `metadata.ts`(canonical/hreflang/OG/JSON-LD 빌더) · `feed.ts` ·
`components/blog/{blog-header,index-view,post-view}.tsx` ·
`app/blog/{en,feed.xml,sitemap.xml,robots.txt}` · `app/api/og/blog`.

### 실측으로 잡은 결함 3건

1. **블로그 호스트에서 메인 사이트 링크가 죽는다.** 블로그 페이지의 `/cli`는 블로그
   호스트에서 `/blog/cli`로 rewrite돼 404다. `siteHref()`가 컷오버 후 절대 URL을 내도록 했다.
2. **메인 사이트맵이 307 나는 URL을 싣고 있었다.** 모든 글을 canonical 로케일 URL로
   적었는데, KO판이 없는 글은 그 URL이 리다이렉트다. `post.locale` 기준으로 고치고
   회귀 테스트를 붙였다.
3. **OG 카드의 폰트가 반씩 갈렸다.** 폰트 서브셋을 제목 글자로만 요청해서 날짜의 "2"는
   Noto Sans KR, "6"은 폴백으로 그려졌다. 카드가 그리는 모든 문자열을 서브셋에 넣었다.

### 발행 파이프라인 첫 실행 (B6)

`omd:kr-writer`(preset toss-tech-design) → 사실 검증 → `omd:final-qa` 2라운드.
라운드 1에서 **교차 로케일 패리티 FAIL**(ko 8섹션 vs en 6섹션)이 나와 EN을 보강했고
라운드 2에서 8/8 통과. 기록은 `docs/blog-reviews/v2-post-final-qa.md`.

**닫지 못한 게이트**: 1440/390 실렌더 확인. 이 머신의 Chrome이 헤드리스·MCP 양쪽에서
`localhost`/`127.0.0.1`을 못 잡는다(curl은 정상, 샌드박스 해제해도 동일). 헤더에 로케일
전환 링크가 늘었으니 **배포 후 390px 내비게이션을 가장 먼저 볼 것.**

### 검증 상태

프로덕션 빌드 통과(EXIT=0, 블로그 라우트 10개 + Proxy 컴파일) · 타입체크 통과 ·
웹 테스트 891개 통과 · lint 에러 0.

### 남은 것 = A1 하나

Vercel Domains에 `blog.oh-my-design.kr` 추가 + DNS CNAME → 도메인 Valid 확인 →
Vercel 환경변수 `NEXT_PUBLIC_BLOG_SUBDOMAIN=1` → 재배포. 그 순간 canonical·OG·
JSON-LD·사이트맵·301이 **한꺼번에** 서브도메인으로 넘어간다.
