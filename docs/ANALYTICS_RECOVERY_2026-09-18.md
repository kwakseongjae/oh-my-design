# 애널리틱스 복구 — 오너 콘솔 절차 (승인 05)

2026-09-18 오너 승인. 권고안 **(가) GCP 프로젝트 + 서비스 계정 재생성**.
기존 5개 스크립트를 무비용으로 되살리는 유일한 경로이고, **콘솔 작업이라 제가 못 합니다.**

## 지금 무슨 일이 일어나 있나

```
$ node scripts/analytics/pull-ga4-modes.mjs
Error: 403 PERMISSION_DENIED / CONSUMER_INVALID
  "Project #95733920708 has been deleted."
```

`scripts/analytics/.secrets/sa.json`은 그대로 있고 JWT 서명도 정상이다.
**키가 문제가 아니라 그 키가 속한 GCP 프로젝트가 삭제됐다.**

Mixpanel은 별개로 막혀 있다 — `MIXPANEL_API_SECRET`은 인증되지만 플랜이 Query/Export를
차단한다(`HTTP 402`). 이건 2026-06-23에 이미 확인돼 메모리에 기록돼 있던 사실이다.

그래서 **프로그램으로 잴 수 있는 지표가 현재 0개다.**

## 무엇이 막혀 있나

- 승인 02의 나머지 절반 — `/design-systems/*` 착지 세션과 `/builder` 도달률
- 2026-06 분석의 활성화 누수(generate → install_copy 6.7%) 재측정
- `scripts/analytics/` 전체: `pull-ga4-modes` · `annotate-ga4` · `prune-ga4-keyevents` ·
  `setup-ga4`, 그리고 `research/2026-07-10-v2-growth/pull-ga4-v2.mjs`

## 오너가 하실 일 (약 10분)

1. **GCP 프로젝트 생성** — console.cloud.google.com → 새 프로젝트 (이름 무관)
2. **Analytics Data API 활성화** — 그 프로젝트에서 "APIs & Services" → Library →
   *Google Analytics Data API* → Enable
3. **서비스 계정 생성** — IAM & Admin → Service Accounts → Create.
   역할은 **주지 않아도 된다** (GA4 권한은 4번에서 준다)
4. **GA4 속성에 뷰어 부여** — analytics.google.com → 해당 속성 → 관리 → 속성 액세스 관리 →
   3번의 서비스 계정 이메일(`...@....iam.gserviceaccount.com`)을 **뷰어**로 추가
5. **JSON 키 발급 후 배치** — 서비스 계정 → Keys → Add key → JSON →
   받은 파일을 `scripts/analytics/.secrets/sa.json`에 덮어쓰기

`GA4_PROPERTY_ID`는 `web/.env.local`에 이미 있으므로 건드릴 필요 없다.

## 끝나면 제가 확인할 것

```
node scripts/analytics/pull-ga4-modes.mjs
```

이게 200을 받으면 바로 02가 요구하던 수치를 냅니다 — 90일 착지 세션을 라우트별로 묶고,
`/design-systems/*`에서 `/builder`로 얼마나 넘어가는지.

## 하지 않은 것과 그 이유

- **Mixpanel 유료 전환** — 오너 결제가 필요하고, 제가 대신 정할 일이 아니다.
- **`@vercel/analytics` 도입** — 이 프로젝트에는 Consent Mode v2 동의 게이트가 있고
  (EEA/UK/CH 기본 거부, `/api/geo` 기반 배너, 철회 경로까지) 세 번째 트래커를 거기 배선하지 않고
  넣는 것은 그 설계를 우회하는 것이다. 별도 작업으로 분리한다.
