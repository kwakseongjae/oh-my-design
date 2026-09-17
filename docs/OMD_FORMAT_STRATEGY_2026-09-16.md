# DESIGN.md 포맷 전략 — 업계 대조 결과 (2026-09-16)

오너 질문: *"철학·색상·타이포·간격 같은 핵심에만 집중하고 나머지(컴포넌트)는 모델이 알아서
만들게 하는 방향이 맞나? Vercel·Stitch도 컴포넌트를 경량화하고 있다고 들었다."*

근거: `docs/research/2026-09-16-briefing/industry-direction.md` (879줄).
아래 수치는 **전부 이 세션에서 직접 재확인**했다.

---

## 1. 답: 방향 감각은 맞고, 잘라낼 대상을 반대로 지목했다

업계가 덜어내는 것은 **컴포넌트가 아니라 토큰 값의 열거**다.

| 발행된 design.md | 크기 | 본문 내 hex 값 |
|---|---:|---:|
| **Vercel** | 39,519 B | **0** |
| Ant Design | 21,175 B | 52 |
| Atlassian | 80,797 B | 353 |

Vercel `design.md` 본문에 직접 적혀 있다 — *"do not read the stylesheet implementation
into context."* 토큰 값을 CSS로 위임하고 컨텍스트에서 뺐다. 대신 남긴 것은
`Use this priority order` · `Choose the composition` · `Reject generated-design reflexes` ·
`Use the published CSS API` — **구성·사용 규율·안티패턴**이다.

## 2. Google이 `DESIGN.md`를 규격으로 발행했다

```
google-labs-code/design.md   ★27,942   Apache-2.0
created 2026-04-10 · pushed 2026-09-14 · releases 5 (최신 0.4.0, 2026-07-27)
homepage: stitch.withgoogle.com/docs/design-md/specification
```

섹션 순서 (README `### Section Order` 표에서 직접 확인):

```
1 Overview   2 Colors   3 Typography   4 Layout
5 Elevation  6 Shapes   7 Components   8 Do's and Don'ts
```

**컴포넌트를 뺀 게 아니라 7번으로 표준화했고 린터까지 냈다.**

`PHILOSOPHY.md`는 동시에 이렇게 말한다 — *"Prose, not Tokens, is the focus of the
specification."* 즉 **prose 강화 + 컴포넌트 유지**가 한 세트다.

### 다만 이 규격은 정착된 것이 아니다

- 자체 버전이 `alpha`다 (README:113, README:360 — *"Expect changes to the format as it matures."*)
- **내부 모순이 있다**: README:108은 *"The tokens are the normative values"*,
  PHILOSOPHY.md는 *"Prose, not Tokens, is the focus"*.

→ **형태(shape)는 참고하되 이 모호성까지 상속하지 않는다.**

## 3. "토큰 대 컴포넌트"는 범주 오류다

Material 3에서 컴포넌트 명세가 **곧 토큰 테이블**이다. 토큰 3계층의 세 번째가 이름부터
`md.comp.*`이고(`md.comp.fab.primary.container.color`), Buttons 패밀리 하나에
`tokenType: COMPONENT` 토큰이 수백 개 있다.

그리고 M3는 폐기되지 않았다 — Google 공식 블로그(2025-05-13):
*"We're not deprecating M3, and this isn't 'M4.'"* M3 Expressive는 컴포넌트를 **14개 추가**했다.

즉 "토큰으로 가고 컴포넌트를 버린다"는 방향은 **아무도 가고 있지 않다.**

## 4. shadcn이 메우지 못하는 것

해결: anatomy · 상태 기전 · a11y · 사이즈별 밀도.
**미해결: 브랜드 값 전부** — 색상 슬롯 31개가 무채색 출하, 타입 스케일 없음, 간격 스케일 없음,
elevation·모션 없음, 컴포넌트 의미론·선택 기준 없음, 구성·카피 없음.

우리 `web/references/toss/DESIGN.md`가 이미 기록한 사례가 이 한계를 보여준다:

> TDS Mobile xlarge는 **56px 높이 / 16px radius**, toss.im 마케팅은 **40–46px / 7px**

한 브랜드, 한 파랑, **두 개의 기하**. 철학+색+타이포+간격 4슬롯 계약은 토스의 절반에 대해
반드시 틀린다.

실증: CHI '26 (`10.1145/3772363.3798616`)이 스타일가이드-텍스트 vs 사전제작 컴포넌트를
비교했고 **레지스트리 방식이 95.08%로 우세**했다.

## 5. 경쟁·포지셔닝

- `getdesign.md`를 받치는 `VoltAgent/awesome-design-md`가 **★116,075**다. 파일은 무료.
- Google 규격도 Apache-2.0 무료.
- → **해자는 파일 포맷이 아니라 검증과 출처(provenance)다.**

**포지셔닝 경고**: Atlassian 자체 벤치마크에서 DESIGN.md가 자사 MCP보다 토큰을 **92% 더 쓰고**
*"컴포넌트를 재생성하는 경향"*이 있다고 나왔다. 이 포맷은 **레퍼런스 전달·프로토타이핑**
산출물이지 사내 디자인 시스템 대체재가 아니다. 그렇게 팔지 않는다.

## 6. 기회 — 접근 통로의 공백

| 도메인 | `llms.txt` |
|---|---|
| `m3.material.io` | **404** |
| `material.io` | **404** |
| `design.google` | **404** |
| `stitch.withgoogle.com` | **200** |

Google은 세상에서 가장 완전한 기계 판독 디자인 시스템을 만들어놓고 **Material 쪽에는
에이전트용 문을 내지 않았다.** 문은 Stitch의 `DESIGN.md` 하나뿐이다.
검증된 추출 계층에 실제 자리가 있다.

**그리고 검증이 곧 제품이라는 증거**: M3 내부에서도 값이 갈린다 — state-layer opacity가
문서 사이트에서는 `0.08/0.10/0.10/0.16`인데 `material-web` 출하 SCSS에서는
focus `0.12` / pressed `0.12`다. `/styles/color/roles`는 *"26 standard color roles"*라고
쓰는데 생성된 `_md-sys-color.scss`에는 키가 **49개**다. **Google 문서가 Google 코드와
불일치한다.** 우리의 "Unknown means absent" 규율과 증거 번들이 정확히 그 틈을 메운다.

---

## 7. 그래서 우리 문서에 무엇을 할 것인가

현재 레거시 레퍼런스 12개 표본 구성비(실측):

| 묶음 | 비중 | 제안 |
|---|---:|---|
| 철학·서사 | ~32% | **유지/강화** — Google이 prose를 핵심이라 명시 |
| 파운데이션 | ~27% | **형태 경량화** — 값 열거 → 스케일 + CSS 위임(Vercel 방식) |
| 컴포넌트 | ~23% | **유지, 형태 교체** — 산문 서술 → 상태 인덱스 토큰 맵 |
| 기타(모션·페르소나 등) | ~18% | 재검토 |

핵심은 **컴포넌트를 없애는 게 아니라 산문을 표로 바꾸는 것**이다.
Atlassian의 `button-default-pressed` 형태면 같은 정보가 훨씬 적은 바이트에 들어간다.

참고: 우리 자사 `web/public/design.md`는 Components가 288줄 중 39줄(**~13.5%**)로
이미 카탈로그보다 가볍다. 자사 문서가 앞서 있고 카탈로그가 안 따라온 상태.

### 채택 후보

- Google 규격의 **`omitted:` 필드** — 우리 "unknown means absent"가 이미 그 규칙인데
  저쪽이 표준 필드로 만들었다. 모델이 모르는 값을 지어내는 자리를 막는다.
- Vercel의 **priority order** — 이미 이슈 #81로 접수돼 있다.
- DTCG 2025.10 — **stable**, `$type` 13종, **컴포넌트는 영원히 없음**. *export 대상*으로만.

---

## 8. 열린 결정

| # | 결정 | 권고 |
|---|---|---|
| ~~Q10~~ | 컴포넌트 형태 | ✅ **결정: b 먼저**(상태 인덱스화, 복구 140개와 함께) · a(§4 산문 은퇴)는 별도 |
| ~~Q11~~ | Google 8섹션 정렬 여부 | ✅ **결정: 우리 7섹션 유지** + `omitted:` · priority order · Google 리더 채택 |

## 9. 진행 상황

**선행 작업(게이트) — 완료 (2026-09-16).** 오너 승인으로 착수.

측정을 먼저 했고, 그 결과가 계획을 바꿨다. 두 결함을 **차단 기준으로 바로 조이면
verified_v2가 140 → 11로 떨어진다**:

| 현재 verified 140개의 내역 | 개수 |
|---|---:|
| 컴포넌트 0개 (결함 1로 통과) | 6 |
| interactive 컴포넌트 0개 | 36 |
| interactive는 있으나 상태값 없이 산문 `states:`만 (결함 2로 통과) | **93** |
| 실제 상태값 보유 | **11** |

즉 **93/140(66%)이 산문 `states` 한 줄로 게이트를 통과하고 있다.** 바로 조이면
만료(10-09)와 같은 결과를 3주 앞당겨 자초하는 셈이다.

그래서 **탐지는 지금, 강제는 복구 이후**로 나눴다. 구현:

- `INDEXED_STATE_KEYS` 신설 — 산문 `states`를 제외한 실제 상태 키 집합
- `componentCoverage()` — `{total, interactive, stated, proseStateOnly}` 산출, **비차단**
- 신규 필드 `componentCount` · `interactiveComponentCount` · `statedComponentCount`
- 신규 **`advisoryCodes`** 필드 — `component_absent` 6 · `component_noninteractive_only` 30 ·
  `component_state_prose_only` **166**

`reasonCodes`에 섞지 않고 별도 필드로 뺀 이유: 그 필드는 "왜 더 높은 등급이 아닌가"라는 뜻이고
Verified v2 항목은 비어 있어야 한다는 계약이 테스트로 강제돼 있다(첫 시도에서 이 테스트가
설계 실수를 잡아냈다).

검증: 등급 변동 **없음**(140/160/140 유지) · web 931 테스트 PASS · typecheck PASS ·
root lint PASS · `check:reference-pipeline` PASS. 픽스처 4개에 새 필드 추가.

**이제 복구 worklist가 데이터로 존재한다** — `advisoryCodes`로 166개를 바로 뽑을 수 있다.

**강제로 전환하는 시점은 별도 결정**이다. 복구가 충분히 진행된 뒤 `OBSERVED_STATE_KEYS`에서
`states`를 빼고 최소 커버리지 요건을 추가하면 된다.

근거 상세: `docs/research/2026-09-16-briefing/component-dependency-check.md`.

## 10. 파생값이 토큰 층에서 사실이 되는 문제 (2026-09-16 발견)

채우기 작업 중 드러난 결함. **산문은 값이 추정임을 밝히는데, 토큰 블록에는 그 단서가 없다.**

### 확인된 사례

**`ubie` — 6/6 틀림.** §4가 *"Hover: darken to `#304cad` (blue700)"*라고 적는다.
관측이 아니라 **팔레트 한 단계를 어둡게 한 규칙**이다. Ubie 배포 CSS의 실제 값과 대조:

| | 문서(파생) | 실제 |
|---|---|---|
| button-primary hover | `#304cad` | `#283f91` |
| button-secondary hover | `#f0f2fc` | `#f6f6f6` |
| button-alert hover | `#c12748` | `#a1213c` |
| card-interactive hover | `#8296df` 테두리 | `#f0f2fc` 배경 |
| textfield focus | `#3959cc` 테두리+링 | `#5d77d5` 하단선, `outline:none` |
| button-accent | hover `#21ad7b` | **accent 변형이 배포 CSS에 없음** |

버전 드리프트가 아니다 — 컴포넌트 CSS 최종 변경 2025-04-18, 우리 검증일 2026-06-06.

**`bunjang` — 더 나쁜 형태.** 산문은 정직하다:

> *"Pressed-state would darken toward `#c00b15` (**interpolated; not directly observed**
> in computed styles since no hover state was captured)."*

그런데 토큰에는 `primary-hover: "#c00b15"`와 `hover: "bg #c00b15"`가 **단서 없이** 들어가 있었다.
**정직한 주석이 기계 판독 층에서 소실된다.** 소비 에이전트는 이것을 관측된 사실로 읽는다.
→ 토큰 두 곳에서 제거하고 산문은 보존했다(그 설명은 여전히 유용하다).

### 확인 결과 결함이 아니었던 것

범위를 넓게 잡았다가 좁혔다. `darken to` 표현을 쓰는 6개 중:

- **`spoqa`** — `#008c5e`는 §Tier-1 출처에 *"homepage tokens … active green #008c5e"*로
  **관측 기록이 있다.** "darkens to"는 관측값에 대한 서술일 뿐이다. 결함 아님.
- **`amazingtalker`(`primary-deep`) · `openai`(`gray-400`)** — 팔레트 **이름**이지 상태 주장이 아니다.
- **`yourator`** — `primary-hover: "#2668a0"`. Tier-1 출처 기록은 `#0063d1`만 명시하고
  이 값의 근거가 불분명하다. **지우지 않고 검증 대상으로 남긴다** — 관측됐을 수도 있는 값을
  임의로 파기하지 않는다.

### 구조적 원인

**토큰 층에 "이 값은 파생/추정"을 표시할 자리가 없다.** 산문에는 쓸 수 있고 실제로 쓰고 있다.
그래서 정직하게 쓴 문서일수록 토큰으로 내려오면서 단서를 잃는다.

우리 하드룰("그럴듯한 대체값을 사실로 쓰지 않는다") 기준으로, 추정값은 **토큰에 있어선 안 된다.**
§9에서 도입한 `omitted` 클레임의 `unresolved` 분류가 그 자리를 대신한다 —
"이 상태는 존재하나 값을 확정하지 못했다"를 기계가 읽을 수 있게 기록한다.

### 남은 작업

- `yourator` `#2668a0` 출처 확인
- `ubie` §4 산문의 파생 규칙 6건을 검증값으로 교체 (현재 토큰만 고쳐져 산문과 불일치)
- `kakaopay` `corporate-search`의 `bg: "#eeeeee"` — 자매 ref `kakao`는 같은 컨트롤을
  `bg: transparent`로 기록한다. hover 값이 캡쳐 때 bg로 승격된 것으로 보인다
- 파생 규칙 문구(`darken to` 등)를 카탈로그 린트로 승격할지 검토

### 파생값 린트 — 구현 완료 (2026-09-16)

손으로 2건을 찾은 뒤, 재발을 막고 실제 범위를 확정하기 위해 검사기로 승격했다.
비차단 advisory 2종:

| 코드 | 조건 | 성격 |
|---|---|---|
| `token_value_self_declared_derived` | 산문이 값을 *interpolated / not observed / estimated*라고 **스스로 밝히는데** 그 값이 토큰 블록에 있다 | 고확신 결함 |
| `token_value_possibly_derived` | 산문이 *darken to / lighten toward* 같은 **파생 동사**를 쓰고 그 값이 토큰 블록에 있다 | 검토 요청 |

**핵심 조건: 값이 토큰 층에 도달했을 때만 잡는다.** 산문에만 있는 파생 서술은 소비자에게
아무것도 주장하지 않으므로 결함이 아니다.

**정밀도 — 오탐 두 건이 설계를 바꿨다.** 처음엔 줄 단위로 훑었더니:

- `bunjang`은 관측된 `#d80c18`과 보간된 `#c00b15`를 **한 문장**에 쓴다 → 앞의 정상값까지 잡혔다
- `hana`는 *"shadows were not observed"*라고 쓴 **다음 문장**에서 관측된 `#2dc396`을 인용한다
  → 그림자에 대한 단서가 색상에 잘못 붙었다

그래서 범위를 **문장 단위로, 그리고 그 문장 안에서 단서 뒤에 오는 hex로만** 좁혔다.
단서는 자기 문장에서 자기 뒤에 오는 값에 대해서만 말한다.

회귀 테스트 6개로 고정했다 — bunjang 원형 감지 / 수정 후 해제 / 같은 문장의 관측 base 미검출 /
ubie 형태 감지 / hana 오탐 미검출 / 토큰에 없는 파생 서술 미검출.

**현재 결과**: 고확신 **0건**(bunjang 수정 완료), 검토 대상 **14건** —
`amazingtalker chunghwa coinbase kintone meta muji openai returnzero sparkful spoqa ubie uniqlo wadiz yourator`.
이 중 `spoqa`·`amazingtalker`·`openai`는 이미 수동 확인에서 결함이 아님이 밝혀졌다
(각각 관측 기록 보유 / 팔레트 이름). 나머지가 실제 검토 대기열이다.

## 11. Q11 실행 결과 (2026-09-16)

권고대로 우리 7섹션을 유지하고 세 가지를 취했다. 세 개 모두 구현 완료.

### 1) `omitted` 클레임 — §9 참조

Google 필드명을 공유하되 **사유 분류**(`verified-absent` / `unresolved` / `out-of-scope`)를
추가했다. 저쪽 필드는 목록만 담아 "브랜드에 원래 없다"와 "우리가 못 알아냈다"를 구분하지 못한다.
검증기 + 테스트 5개.

### 2) 충돌 소비 사다리 — 이슈 #81 해소

스펙이 **작성자** 측만 정하고 있었다(§10: "conflicts are preserved as conflicts;
a migrator MUST NOT choose the most plausible value"). **소비자** 측이 비어 있어서,
모호함이 가장 해로운 자리 — 생성 시점 — 에 남아 매 실행마다 조용히 다르게 풀렸다.

`application-priority`는 값이 어디서 **왔는지**를 정렬한다. 같은 등급의 두 값에는
말해주지 않는데, 그게 흔한 경우다(한 브랜드를 자기 두 표면에서 측정한 것).

추가한 순서:

1. **표면 일치** — 만들고 있는 표면 종류에서 관측된 값을 쓴다
2. **선언된 권위** — 같은 표면 종류면 `application-priority` 등급이 높은 쪽
3. **신선도** — 같은 방법으로 캡쳐된 것끼리만, 더 최근 것
4. **고르지 않는다** — 그래도 동점이면 소비자는 **선택해선 안 된다.** 묻거나 생략한다

**규칙 4가 단일 브랜드 사다리와 갈리는 지점이다.** 자기 제품을 문서화하는 벤더는 답을
소유하므로 항상 해결할 수 있다. 우리는 소유하지 않은 브랜드를 문서화하고,
그들의 충돌 중 일부는 기록의 결함이 아니라 **브랜드의 실제 속성**이다
(`toss` 버튼: TDS Mobile 56px/16px, toss.im 마케팅 40–46px/7px — 둘 다 맞다).

문서는 Governance에서 이 순서를 자기 범위에 맞게 좁힐 수 있으나 **규칙 4는 제거할 수 없다.**

### 3) Google 포맷 리더

스펙 §10의 dual-read 목록 5번이 "unmarked Google-compatible documents"였는데
`classifyFormat()`에 감지 코드가 **없었다** — 스펙과 코드가 어긋나 있었다.

`looksGoogleCompatible()` 추가. 판별자는 **토큰 키가 `tokens:` 아래가 아니라 최상위에
있다**는 것 + OmD 카탈로그 식별 필드(`id`·`country`·`verified`·`verification_v2`) 부재 +
Google 섹션 순서. 둘 다 frontmatter와 `##` 섹션을 갖기 때문에 이 구분이 필요하다.

검증: Google 형태 문서가 `google-compatible`로 분류되고, 레거시 표본 40개는
`legacy-15` 37 / `legacy-16` 2 / `legacy-13` 1로 **변동 없음**. 테스트 4개 추가
(섹션 제목만으로는 Google이라 주장하지 않는 음성 케이스 포함).

## 12. 파생값 린트 — 13건 분류 완료 (2026-09-16)

린트가 올린 `token_value_possibly_derived` 13건을 두 단계로 걸렀다.

**1단계 — 값이 Proof/`.verification.md`에 측정 기록으로 있는가.**

| 결함 아님 (4) | 기록된 값 |
|---|---|
| `chunghwa` | `#0083ec` |
| `returnzero` | `#666666` |
| `sparkful` | `#000000` |
| `spoqa` | `#008c5e` |

"darkens to"는 **관측값에 대한 서술**이지 파생의 증거가 아니다. 이 넷이 그 증거다.

**2단계 — 남은 9건에서 팔레트 이름과 상태 주장을 분리.**

| 결함 아님 (4) | 이유 |
|---|---|
| `amazingtalker` `#02b3a4` | `primary-deep` — 팔레트 이름, 상태 주장 아님 |
| `openai` `#b4b4b4` | `gray-400` — 팔레트 스케일의 한 단계 |
| `muji` `#333333` | `primary`/`foreground` 본색. 12개 컴포넌트가 쓰는 브랜드 기본색이다 |
| `wadiz` `#bef5f5` | `tint-accent` — 팔레트 이름 |

**실제 검토 대상 5건** — `primary-hover` / `primary-pressed`처럼 **상태 전용 토큰**인데
측정 기록이 없다:

| ref | 토큰 | 소비처 |
|---|---|---|
| `coinbase` | `primary-hover` `#578bfa` | `button-primary.hover` |
| `kintone` | `primary-hover` `#d63b22` | `button-primary.hover` · `button-danger.hover` |
| `meta` | `primary-pressed` `#0058c4` | 팔레트만 |
| `uniqlo` | `primary-hover` `#c8161c` | `button-primary.use` 문자열 |
| `yourator` | `primary-hover` `#2668a0` | 팔레트만 |

다섯 모두 `verification_v2`가 **아예 없는** 문서다(전부 legacy 또는 partial).
그래서 이 값들이 관측인지 파생인지 **문서 자체로는 판별할 수 없다.**

### 삭제하지 않는다

`ubie`·`bunjang`과 달리 이 다섯에는 "파생이다"라는 **직접 증거가 없다**.
`darken to`라는 서술 하나로 관측일 수도 있는 값을 파기하면, 없는 값을 지어내는 것과
반대 방향의 같은 오류다. 재검증 대기열에 남기고, 해당 ref가 재검증될 때 확인한다.

린트는 이 다섯을 계속 표시한다 — 그것이 대기열의 역할이다.

---

## 13. Vercel 재조사 — 두 아티팩트 모델 (2026-09-17)

§1은 Vercel `design.md`를 "hex 0개, 39.5KB"로만 기록했다. 값이 **어디로 갔는지**를 안
적었고, 그게 우리에게 제일 중요한 부분이었다. 다시 읽었다.

### 실제로 하고 있는 것

| 시점 | 산출물 | 대상 | 값이 사는 곳 |
|---|---|---|---|
| 2026-06-25 | `product-design`(사내) | 제품 UI·대시보드 | `packages/geist/STYLE_GUIDE.md` |
| 2026-08-31 | `design.md`(공개) | 리포트·제안서 페이지 | 발행 CSS (`--vbg-*`) |

7개 고정 시나리오 × **200회 이상**(Claude Opus 4.8 + Codex GPT-5.5), 결정론적 체크로
기계적 실패 **91 → 39건(57% 감소)**.

**먼저 실패한 접근이 핵심 정보다.** *"The naive approach we tried first was to simply port
`product-design` into a public prompt."* — 모델이 주관적 문장을 제각각 해석했고 **실제
컴포넌트와 출하된 예시가 없어서** 실패했다. 해법이 CSS 발행이었다:
*"agents kept inventing their own typography, spacing, and layout, so we took those
decisions away from the model entirely."*

즉 **산문만으로 안 된다는 걸 200회 돌려서 확인했고, 답이 값을 아티팩트로 출하하는 것**이었다.

### 값은 빠지는 게 아니라 옮겨진다 — 그리고 우리는 옮길 데가 없다

`--vbg-surface-primary` · `--vbg-space-2` — 이름만 남고 값은 자사 CSS에 있다. 소비자가
그 CSS를 링크한다(*"link the byte-identical foundation once"*).

| | Vercel design.md | 우리 DESIGN.md |
|---|---|---|
| 대상 | **자사** 브랜드 | **관찰한 타사** 브랜드 |
| 값의 거처 | 자사 발행 CSS | **문서가 유일한 거처** |
| 값 제거의 의미 | 위임(delegation) | **소실(deletion)** |

우리는 토스 CSS를 발행하지 않고 소비자가 링크할 수도 없다. **값을 빼면 7월 배치가 저지른
실수를 포맷 층위에서 반복하는 것**이다. `spec/design-md-core-v2.md:235`가 이미 이걸
막아 뒀다 — *"an unavailable sidecar MUST reduce the conformance claim to Portable Core
rather than make the document unusable."*

### 그래서 결정

- **가져온다 — 판단 층.** design.md 본체는 값이 아니라 `Use this priority order` ·
  `Work in four passes` · `Reject generated-design reflexes`다. 57%를 만든 게 이것이고,
  **우리 레퍼런스에는 이게 거의 없다.** 값은 있는데 "이 브랜드에서 무엇을 먼저 고르고
  무엇을 거부하는가"가 없다. 값 덤프는 designmd.cc/designmd.co도 한다 — 해자는 판단 층이다.
- **가져온다 — 파운데이션 값 열거 경량화**(§7 결정 유지). 단 위임처는 **우리가 발행하는**
  토큰 아티팩트여야 한다. DTCG export가 이미 §7 채택 후보에 있다.
- **가져오지 않는다 — 문서에서 값을 빼는 것.** 위 비대칭 때문.

### 컴포넌트에 대한 오해 정정

"경량화"는 **바이트·형태** 기준이지 **개수** 기준이 아니다. §7은 컴포넌트를 "유지, 형태
교체(산문 → 상태 인덱스 토큰 맵)"라고 적었고 Q10 결정도 그것이다. 앞으로 완료 기준을
"컴포넌트 ≥5"가 아니라 **"상태 인덱스화된 컴포넌트"**로 쓴다 — 개수 목표로 읽히면
7월과 같은 실수를 유도한다. 참고로 컴포넌트 조건은 현재 전부 advisory(non-blocking)다.

### 다음 단계

레퍼런스 1개(`toss`)로 두 아티팩트 분리 프로토타입 — 판단 층 + 토큰 아티팩트로 쪼갰을 때
바이트와 사용성이 실제로 어떻게 되는지 재고 나서 1000개 확충 규격을 확정한다.

---

## 14. 프로토타입 측정 결과 — 경량화는 바이트로 정당화되지 않는다 (2026-09-17)

§13이 제안한 `toss` 두 아티팩트 프로토타입을 실제로 만들어 쟀다. **세 가지가 틀렸다.**

### 정정 1 — "우리 레퍼런스엔 판단 층이 거의 없다"는 틀렸다

§13에서 그렇게 썼는데, 440개 전수 측정 결과 **이미 거의 다 있다**:

| 섹션 | 보유 | 평균 |
|---|---:|---:|
| Do's and Don'ts | 426/440 (96.8%) | 1,169 B |
| Agent Prompt Guide | 406/440 (92.3%) | 1,527 B |
| Principles | 435/440 (98.9%) | 1,055 B |

`toss` §7은 *"Don't use logo brand blue as a silent replacement for UI primary"* ·
*"Don't merge the 16px TDS radius with the 7px marketing radius into an average value"* —
Vercel이 `Reject generated-design reflexes`로 부르는 바로 그것이다. **Vercel의 교훈은
이미 구현돼 있다.** 가져올 게 없다.

### 정정 2 — 두 아티팩트 분리는 5.8%밖에 못 산다

`toss`의 `verification_v2`가 파일의 25.2%라 크게 보였지만 `toss`가 유난히 작은 문서
(21.5KB)여서 생긴 착시다. 카탈로그 평균은 **5.8%**(1,556 B / 26,824 B).

### 정정 3 — 산문 → 표는 바이트를 줄이지 않는다

`toss` §2–§6을 표로 다시 썼다: 6,121 B → 6,077 B, **-0.7%**. 마크다운 표의 파이프·구분행
오버헤드가 산문 절감을 거의 그대로 먹는다. §7의 "같은 정보가 훨씬 적은 바이트에 들어간다"는
우리 콘텐츠에서는 성립하지 않는다.

### 성립한 것 — 토큰 맵 이전 (Q10 b안)

본문 산문을 **표로 바꾸는 게 아니라 `tokens.components`로 옮기고 본문엔 판단만 남기는**
변환은 실제로 줄었다. `toss` 컴포넌트 블록(공유 푸터 제외):

```
tokens.components  1,338 B → 1,694 B   (+356, sizes/surface 추가)
본문 §4            1,737 B →   665 B   (-1,072)
합계               3,075 B → 2,359 B   (-23.3%)
```

사실 보존 검사 통과 — hex/rgba/px/url/font/weight 전부 보존, 손실 0.

**그런데 카탈로그 전체로는 파일당 3.0%다.** 컴포넌트 블록이 파일의 12.7%(3,419 B)이고
거기서 23.3%를 줄이면 797 B. 440개 합쳐 342 KB.

### 결론

**바이트를 목적으로 한 경량화는 하지 않는다.** 3%를 위해 440개를 건드리는 것은 위험 대비
수익이 맞지 않고, 7월 배치가 정확히 "정리하다가 값을 잃는" 방식으로 실패했다.

토큰 맵 이전은 **다른 이유로 한다 — 기계 가독성**. 본문 §4 산문은 파싱되지 않고
`tokens.components`는 파싱된다. `/builder`와 aphrodite-mela가 소비할 수 있게 만드는 것이
목적이고, 바이트 절감은 부산물이다. Q10 b안의 원래 취지이기도 하다.

**용어를 바꾼다:** 이 작업을 "경량화"라고 부르지 않는다. 바이트가 목표라는 오해를 만들고,
개수 줄이기로 번역되면 7월과 같은 실수를 유도한다. **"토큰 맵 이전(machine-readable
projection)"**으로 부른다.

### 이 측정이 실제로 발견한 것

바이트를 재다가 훨씬 큰 것이 나왔다 — 모션 값 254건이 관측이 아니라 템플릿이다.
`docs/MOTION_TEMPLATE_2026-09-17.md`. 포맷 작업보다 이쪽이 먼저다.
