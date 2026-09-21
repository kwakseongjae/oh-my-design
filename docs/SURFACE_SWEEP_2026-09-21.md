# 표면 발견 스윕 — 결과, 그리고 **방법이 틀렸다는 증거** (2026-09-21)

`docs/NEXT_2026-09-21.md` ①단계. 미검증 297건에 대해 "측정 가능한 자기 컴포넌트 표면이
있는가"를 자동 프로브로 조사했다. **1,782개 호스트를 4단계로 걸렀다.**

## 1. 결과

```
stage A  후보 1,782개 → 200 응답 163 → 넌센스 경로 대조군이 53개(catch-all) 기각 → 110
stage B  넌센스 서브도메인 대조군이 와일드카드 DNS 기각  (twilio 4→0 · smartnews 3→1)
stage C  브라우저로 자기 네임스페이스 토큰 측정 → 40개 이상인 호스트 25개
stage D  디자인 시스템인지 확인 → 브랜드 8건
```

**발견된 것 (전부 기존에 인용되지 않았던 표면):**

| 브랜드 | 등급 | 표면 | 근거 |
|---|---|---|---|
| **asana** | partial | `storybook.asana.com` | **스토리북 596 스토리** — 상태 측정 가능 |
| **gitlab** | partial | `design.gitlab.com` | "Pajamas Design System" · 컴포넌트 페이지 89 · 토큰 1,197 |
| **workday** | partial | `design.workday.com` | "Workday Canvas Design System" · 컴포넌트 55 · 토큰 1,229 |
| **digital-agency-jp** | partial | `design.digital.go.jp` | "デジタル庁デザインシステムβ版" · 컴포넌트 27 |
| **octopusenergy** | partial | `design.octopus.energy` | "Coral — The Octopus Energy Design System" · 토큰 787 |
| **smartnews** | partial | `design.smartnews.com` | "SmartNews Component Library" (zeroheight) |
| **renault** | partial | `design.renault.com` | "Renault Design System" (zeroheight) |
| **cal** | legacy | `ui.cal.com` · `design.cal.com` | 스토리북 + 토큰 145 |

관측 후보였으나 **디자인 시스템이 아닌 것**(제외): `story.kakao.com`=카카오계정 로그인 ·
`story.snapchat.com`=스토리 기능 · `design/story/ui.slack.com`=Slack 앱 ·
`story.pixnet.net`·`design.postype.com`=블로그 채널 · `*.github.io` 다수=기술 블로그.
**"design"이나 "story"가 붙었다고 디자인 시스템이 아니다.**

## 2. 그런데 이 8건은 **상한이 아니라 하한이다** — 방법을 검증했더니 틀렸다

스윕이 0건을 뱉었을 때 "표면이 없다"고 적을 뻔했다. **알고 있는 정답 3개로 계측기를
검증했더니 3개 다 놓친다.**

```
pixiv    내 패턴 pixiv.design/index.json        → 0 (없음)
         실제    charcoal-web.pixiv.design      → 200 · 97KB JSON
smarthr  내 패턴 story.smarthr.jp · smarthr.design/index.json → 404
         실제    story.smarthr-ui.dev           → 200 · 421KB JSON
cybozu   내 패턴 cybozu.github.io/index.json    → 404
         실제    kintone-labs.github.io/kintone-ui-component → 200 · 27KB JSON
```

**이유가 구조적이다. 디자인 시스템의 호스트는 브랜드 도메인이 아니라 *시스템 이름*을 딴다** —
charcoal · smarthr-ui · kintone-ui-component. 시스템 이름은 DNS 추측으로 알 수 없다.

→ **DNS 패턴 추측은 잘못된 계측기다.** 8건은 "이 방법으로 걸린 것"이지 "존재하는 전부"가 아니다.

## 3. 올바른 계측기 — GitHub

오늘 찾은 세 개가 전부 GitHub org 아래 있다:
`github.com/pixiv/charcoal` · `github.com/kufu/smarthr-ui` · `github.com/kintone-labs/kintone-ui-component`.
그리고 **스토리북 URL은 보통 repo의 `homepage` 필드에 적혀 있다**(kintone이 그랬다).

다음 스윕은 이렇게 해야 한다:
1. 각 브랜드의 **GitHub org를 확정**한다 — 상당수는 이미 Tier-1 푸터에 인용돼 있고,
   없으면 검색이 필요하다. **org 신원 확인 필수**(`github.com/smarthr` ≠ SmartHR = `kufu`,
   `zozo-tech` ≠ ZOZO = `st-tech` — `OMD_ROADMAP` §에 이미 적힌 교훈).
2. org의 repo 목록에서 design-system/ui 계열을 고른다.
3. repo의 `homepage` + README에서 스토리북/문서 URL을 뽑는다.
4. `index.json`으로 확정한다(catch-all이 흉내낼 수 없다).

**제약**: GitHub API는 미인증 60req/h. 297개 브랜드에는 부족하다. Tier-1 푸터에 이미
GitHub URL이 있는 것부터 처리하면 API 없이 상당수를 덮을 수 있다 — 그게 다음 단계다.

## 4. 그래서 ①은 끝났는가

**부분적으로.** 즉시 착수 가능한 **8건**을 확보했고(그중 asana는 상태까지 측정 가능한 스토리북),
**방법의 한계와 다음 방법을 증거로 확정**했다. 264건이 "없다"로 판정된 것이 아니라
**"이 방법으로는 안 보인다"**로 판정된 것이고, 그 차이가 이 문서의 요점이다.
