# CN 웨이브 1 후보 선정 (2026-09-22)

`docs/EXPANSION_BRIEF_2026-09-22.md` §6-1. **15개 브랜드를 실측해서** 5건을 골랐다.
평판이나 규모로 고르지 않았다 — 어제 확인한 예측자(**선언한 인터랙티브 컴포넌트 전부에
관측된 상태가 있는가**)를 기준으로 골랐다.

## 1. 현재 CN 5건

```
alipay · bilibili   verified_v2
dji · meituan · xiaohongshu   legacy_snapshot  (verified 2026-05-19, proof gate 이전이라 grandfathered)
```

기존 기각 9건은 전부 **컴포넌트 라이브러리**다: TDesign · Arco · Semi · Vant · NutUI ·
Fusion · antd-mobile · Zarm · Tonic UI. **다시 열지 않는다.**

## 2. 15개 실측 — 토큰 표면

```
brand      vars  own   자기 네임스페이스                      판정
huawei      344  344   --hwp-* 339                          강함 (#c7000b)
weibo       473  325   --w-* 190 · --feed-* 50 · --weibo-* 44 강함 (#ff8200)
ctrip       404  404   (bare) 402                            강함 (#007fe9)
zhihu       389  384   (bare) 276 · --rv-* 98                 강함 (#1772f6)
douyin      424  188   --color-* 131 · --gift-* 19 · --pk-* 18 강함 (#fe2c55)
kuaishou    113  112   --adapt-* 77                          중간 (#fe3666)
─────────────────────────────────────────────────────────────
tencent     169   98   --bs-* 66(Bootstrap) --wp-* 60(WordPress)  ✗ 프레임워크
byd         143    6   --el-* 137(Element UI)                     ✗ 프레임워크
baidu         4    4                                              ✗
jd · netease · lenovo · haier   0                                 ✗
```

**함정 두 개를 잡았다.**
- **xiaomi**: `mi.com`이 **한국 사이트**를 서빙했다(`Noto Sans KR`, "Xiaomi® Korea", vars 183).
  CN 표면(`mi.com/shop`·`/index.html`)은 **vars 0**이다. 183은 한국 사이트의 것이지 샤오미
  디자인 시스템이 아니다 — cookpad를 영국에서 잰 것과 같은 오류. **후보에서 뺀다.**
  (다만 CN 표면의 본문 서체가 **MiSans** — 샤오미 자체 서체다. 기록해 둔다.)
- **byd·tencent**: 숫자만 보면 143·169인데 각각 **Element UI · Bootstrap+WordPress**다.
  `tencent.com`은 WordPress 사이트다. **네임스페이스를 안 봤으면 둘 다 뽑았을 것이다.**

## 3. 그런데 토큰 수는 등급을 예측하지 못한다 — **상태를 쟀다**

라이브 홈에서 컨트롤을 잡아 hover/press를 측정했다(클릭=네비게이션이라 억제).

| 브랜드 | 상태 변화 | 실측 |
|---|---|---|
| **weibo** | **2/2** | 검색 `#ff8200` → hover **`#ff5900`** · 로그인 알약(r36) 동일 계약 |
| **ctrip** | **3/4** | 로그인 `#f2f8fe` r16 → hover fg·border **`#0086f6`** · 도시칩 hover fg |
| **zhihu** | **2/3** | 로그인 `#1772f6` r3 h36 → hover `oklch(0.535 0.214 259)` |
| huawei | **0/2** | 홈의 "컨트롤"은 **118px 카드**이고 hover 변화 없음 |
| douyin | **0/1** | 로그인 `#fe2c55` r12 h38, 변화 없음 |

**huawei가 토큰 1위인데 컴포넌트는 0이다.** asana·sendbird가 가르친 그대로 —
**토큰 풍부함과 상태 측정 가능성은 다른 축**이다.

## 4. 웨이브 1 선정 — 5건

| 순위 | 브랜드 | 근거 | 선언 전략 |
|---|---|---|---|
| 1 | **weibo** | 토큰 325 + **상태 2/2** · `#ff8200`→`#ff5900` 일관 | 컴포넌트 2개로 시작, 더 찾으면 추가 |
| 2 | **ctrip** | 토큰 404 + **상태 3/4** · `#0086f6` | 측정된 3개만 선언 |
| 3 | **zhihu** | 토큰 384 + **상태 2/3** · oklch 사용(현대적) | 측정된 2개만 선언 |
| 4 | **huawei** | 토큰 **339 `--hwp-*`** · 컴포넌트는 별도 표면 탐색 필요 | **컴포넌트 선언 0으로 시작** — 토큰·서체만 |
| 5 | **douyin** | 토큰 188 · `--gift-*`·`--pk-*`는 **라이브스트림 고유 어휘** | 토큰 위주, 컴포넌트는 찾는 만큼 |

**핵심 원칙**(어제 정정한 것): 컴포넌트를 **적게** 선언하는 게 아니라 **상태를 측정한 것만**
선언한다. huawei를 컴포넌트 0으로 넣는 건 게이트 우회가 아니라 **측정한 만큼만 말하는 것**이다 —
카탈로그에 이미 인터랙티브 0인 verified가 36건 있고, 그게 `partial`보다 정직하다.

## 5. proof gate 확인

CN은 어제부터 `REGIONAL_PROOF_COUNTRIES`에 있다 → **브랜드 소유 지역 Tier-1 2개 이상** 필수.
다섯 곳 모두 자체 도메인이 복수다(`weibo.com`/`open.weibo.com` · `ctrip.com`/`group.ctrip.com` ·
`zhihu.com`/`zhuanlan.zhihu.com` · `huawei.com`/`consumer.huawei.com` ·
`douyin.com`/`open.douyin.com`). **착수 전 각각 렌더된 신원으로 확인한다** —
`github.com/smarthr`≠SmartHR 교훈대로 200은 소유 증명이 아니다.

## 6. 안 고른 것과 이유

- **xiaomi** — CN 표면 vars 0. 한국 사이트를 재고 뽑을 뻔했다.
- **tencent · byd** — 프레임워크 토큰(WordPress/Bootstrap · Element UI).
- **jd · netease · lenovo · haier · baidu** — 커스텀 프로퍼티 0~4.
- **kuaishou** — `--adapt-*` 77로 중간. 웨이브 2 후보.
- **라이브러리 9건** — 기각 유지.
