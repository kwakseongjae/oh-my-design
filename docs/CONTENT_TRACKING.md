# 콘텐츠(포스트) 유입 추적

어느 플랫폼의 어느 글이 어느 나라에서 몇 명을 데려왔는지 본다. 포스트에는 항상 `oh-my-design.kr/go/<code>` 단축 링크를 건다.

## UTM 규칙

| 키 | 값 | 예 |
|---|---|---|
| `utm_source` | 플랫폼 | `threads`, `x`, `zenn`, `geeknews` |
| `utm_medium` | 종류 | `social`, `community`, `blog` |
| `utm_campaign` | `YYYYMMDD-slug` (게시일 + 글 식별자) | `20261103-linear-tokens` |
| `utm_content` | 언어/변형 (선택) | `ko`, `zh-tw`, `ja` |

단축 링크가 이 네 값을 자동으로 붙인다. 손으로 UTM을 쓰지 않는다.

## 링크 추가

`web/src/data/go-links.ts`의 `GO_LINKS`에 한 항목을 추가한다.

```ts
"linear-ko": { to: "/design-systems/linear", source: "threads", medium: "social", campaign: "20261103-linear-tokens", content: "ko" },
```

- `to`는 사이트 안 경로 또는 `https://oh-my-design.kr/...`만 허용한다. 다른 도메인이면 `/`로 보낸다.
- 기존 쿼리와 `#해시`는 유지된다. 모르는 코드는 `/`로 보낸다.
- 같은 글을 플랫폼·언어별로 올리면 코드를 나눈다(`linear-ko`, `linear-zh`).
- 배포 후 `https://oh-my-design.kr/go/<code>`가 302로 열리는지 확인하고 포스트에 건다.

## 집계 방식

- 클릭 수: 서버가 직접 센다(동의 불필요, IP·쿠키·UA 저장 없음). Upstash 해시 `omd:go:v1:<code>:<YYYY-MM-DD>`의 필드가 국가 코드이고, 국가를 모르면 `XX`다. 400일 뒤 만료된다. 명백한 봇 UA는 세지 않는다.
- 방문 품질: GA4의 `sessionCampaignName × sessionSource × country`의 `sessions`, `engagedSessions`, `activeUsers`. 대표 지표는 `engagedSessions`다(크롤러는 참여하지 않는다).
- 클릭 수는 GA4와 무관하게 남는다. 브라우저 UA를 쓰는 크롤러는 클릭 수에 섞일 수 있으니 `engagedSessions`와 함께 본다.

## 리포트 보기

```bash
node scripts/analytics/pull-posts.mjs --days 28
```

글마다 국가별 클릭, GA4 sessions, GA4 engaged 표가 출력되고, 원본은 `data/analytics/raw/posts.json`(gitignore)에 저장된다. 인증은 기존 `pull-ga4.mjs`와 같은 `.env` 설정을 쓴다.

## 공개 저장소 주의

이 저장소는 공개다. 클릭 수·세션 수·국가별 수치는 코드, 문서, 커밋 메시지, 이슈에 적지 않는다. 레지스트리에는 링크 정의만 커밋하고, 수치는 `data/analytics/raw/`(gitignore) 안에만 둔다.
