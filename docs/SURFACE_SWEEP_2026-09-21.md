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

---

# 5. ①b GitHub 스윕 — **가설이 틀렸다는 것을 측정했다**

§3에서 "올바른 계측기는 GitHub"라고 적었고, 그대로 했다.

```
297개 브랜드 홈페이지를 긁어 GitHub org 수확        → 69개 브랜드 / 77개 org
77개 org의 repo 목록(프로필 탭, 서버 렌더·무제한)   → 26개 org에 design 계열 repo 40개
40개 repo의 homepage + <org>.github.io 프로브       → **스토리북 2개**
```

**찾은 것은 실질적으로 1건이다** — `sendbird/sendbird-uikit-react`(**56 스토리**).
나머지 하나는 `kintone-labs`(cybozu, 이미 §9에서 도메인 불일치로 기각).
docsite 5건은 대부분 잡음이다: `localhost:5173`(포크의 잘못된 homepage) ·
`chakra-ui.com`(velog가 포크한 남의 문서) · Atlassian 사내 위키. 실물은
`moneyforward.github.io/cloud-react-ui/` 정도다.

**여기서도 계측기를 한 번 고쳤다.** homepage 추출 정규식이 전부 빈값을 뱉길래 알려진 정답
(`kufu/smarthr-ui` → `story.smarthr-ui.dev`)으로 검증했더니 **내 정규식이 틀렸다**. GitHub은
homepage를 `<a href="URL">URL</a>` 쌍으로 렌더하는데 그 패턴을 안 잡고 있었다. 고쳐서 재실행 —
그래도 **결과는 2건으로 같았다.**

## 5.1 그래서 무엇이 밝혀졌나 — **남은 297건은 구조적으로 다르다**

```
공식 디자인 시스템(ds.url)을 선언한 비율
   verified_v2  65/141  =  46%
   미검증       21/297  =   7%      ← 6.5배 차이
```

미검증 297건의 구성: consumer-tech 88 · fintech 43 · ecommerce 30 · ai 26 · saas 18 …

**pixiv·smarthr·cybozu가 숨은 스토리북을 갖고 있던 건 대표성이 없었다.** 그 셋은 공개 디자인
시스템을 운영하는 기술 회사다. 카탈로그는 **그런 회사를 이미 다 걷어갔고**(verified의 46%),
남은 것은 애초에 디자인 시스템을 발행하지 않는 소비자 브랜드가 대부분이다.

## 5.2 계획 수정 — 예산을 깊이가 아니라 확충으로

①a(8건) + ①b(1건) = **도달 가능한 것은 약 9건**이다. 297건이 아니다.

- **기존 카탈로그의 깊이 상한은 낮다.** 표면이 없는 브랜드는 아무리 조사해도 `partial`이 맞고,
  그게 틀린 상태가 아니다(cybozu·paypay가 그 증거다).
- **확충은 브랜드를 고를 수 있다.** 디자인 시스템을 발행하는 회사를 골라 넣으면 처음부터
  verified 경로에 올릴 수 있다 — Serendie가 그랬고 asana가 그랬다.

→ **남은 예산은 ③ 확충으로 간다.** 깊이는 ①이 찾아낸 9건으로 한정한다.

## 5.3 즉시 착수 가능한 9건

| 브랜드 | 표면 | 종류 |
|---|---|---|
| **sendbird** | `sendbird.github.io/sendbird-uikit-react` | **스토리북 56** |
| ~~asana~~ | `storybook.asana.com` | ✅ 2026-09-21 완료(증거 1.00, partial) |
| gitlab | `design.gitlab.com` | 컴포넌트 89 · 토큰 1,197 |
| workday | `design.workday.com` | 컴포넌트 55 · 토큰 1,229 |
| digital-agency-jp | `design.digital.go.jp` | 컴포넌트 27 |
| octopusenergy | `design.octopus.energy` | 토큰 787 |
| smartnews · renault | zeroheight | 토큰 사이트 |
| cal | `ui.cal.com` · `design.cal.com` | 스토리북 + 토큰 |
| money-forward | `moneyforward.github.io/cloud-react-ui/` | 문서 사이트 |
