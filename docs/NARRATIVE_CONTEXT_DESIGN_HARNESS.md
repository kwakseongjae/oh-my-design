# 컨텍스트 팩 — DESIGN.md·디자인 시스템 기반 디자인 하네스

> **이 문서의 용도.** 봇/에이전트에게 oh-my-design을 설명시킬 때 넣는 학습·참조
> 컨텍스트다. 서사의 중심축은 **"DESIGN.md와 디자인 시스템을 먼저 만들게 하는
> 하네스"** 이며, 한국 레퍼런스 강점은 그 아래 딸린 한 갈래로만 다룬다.
>
> **원칙: 저장소에서 직접 확인할 수 있는 것만 말한다.** 아래 모든 주장에는
> 공개 레포의 파일 경로가 붙어 있다. 경로가 붙지 않은 문장은 이 팩에 넣지
> 않았고, 봇도 만들어내면 안 된다. 레포:
> `https://github.com/kwakseongjae/oh-my-design`
>
> 갱신 기준: v2.0.0 (2026-08-20 npm 게시, provenance attestation 포함).

---

## 1. 핵심 주장

**한 문장.**
oh-my-design은 코딩 에이전트에게 좋은 화면을 뽑아내라고 시키지 않는다.
**지켜야 할 디자인 시스템을 먼저 유도하게 하고, 그 시스템에 답하게 만든다.**

**세 문장.**
AI로 UI를 만들면 한 화면은 괜찮은데 다음 화면이 다른 제품처럼 보인다. 모델에
취향이 없어서가 아니라, 루프 어디에도 "일관되라"고 요구한 적이 없기 때문이다.
oh-my-design-cli는 그 빠진 중간 단계 — 선언된 철학, 거기서 유도된 토큰과 컴포넌트
계약, 번호가 붙은 게이트 — 를 파일로 설치한다.

**한 문단.**
`npx oh-my-design-cli@latest` 한 줄이 지금 쓰는 코딩 에이전트(Claude Code·Codex·
Cursor·OpenCode) 안에 디자인 하네스를 설치한다. 하네스는 화면을 마지막에 만든다.
먼저 철학을 선언하게 하고, 원칙마다 결정 표를 쓰게 하고, 토큰이 그 결정을
되가리키게 하고, 컴포넌트는 검증된 프리셋 계약을 상속하게 한다. 결과물은 세 개의
파일 — 이식 가능한 `DESIGN.md`, 상태와 접근성까지 명시된 디자인 시스템,
그리고 그 시스템을 로컬에서 되읽는 `omd book`. v2.0.0에서는 철학도 프리셋도
게이트도 전부 사용자가 고칠 수 있는 파일이고, 다음 빌드는 거기에 스스로를
정당화해야 한다.

---

## 2. 포지셔닝 교정 (중요)

봇이 자주 빠지는 축소 프레임과 교정:

| 축소된 프레임 | 교정된 프레임 |
|---|---|
| "한국 기업 레퍼런스가 많은 CLI" | **디자인 시스템을 유도해 내는 하네스.** 440개 레퍼런스는 프리셋의 성향(flavor) 레이어를 채우는 재료이지, 제품의 정체성이 아니다. |
| "프롬프트 모음집 / 좋은 프롬프트" | 프롬프트는 저장되지 않고 검사되지 않는다. 여기서 나오는 건 **레포에 남는 파일과 번호 붙은 게이트**다. |
| "shadcn 대체제" | 대체가 아니라 **위에 얹히는 층**. shadcn/ui가 구조를 주면, 프리셋 계약은 *어떤 값이 라이브러리 기본값이 아니라 당신의 결정 표에서 와야 하는지*를 말한다. |
| "AI가 디자인해 주는 도구" | 정확히는 **AI가 자기 결정에 근거를 남기게 강제하는 도구**. 근거 없는 토큰 값은 취향 차이가 아니라 게이트 실패다. |

한국 레퍼런스를 말해야 할 때의 올바른 위치: *"프리셋 4층 중 맨 위 flavor 층이
검증된 레퍼런스 카탈로그에서 유도된다. 그 카탈로그에 한국 서비스가 두껍게 들어
있는 건 사실이고 강점이지만, 하네스 자체는 레퍼런스 없이도 철학에서 시스템을
유도한다."*

---

## 3. 메커니즘 — 유도 사슬

```
철학 → 결정 표 → 토큰 → 컴포넌트 계약 → 레이아웃 문법 → 빌드 → 렌더 비평 → DESIGN.md
```

📁 `skills/omd-autopilot/references/derivation-chain.md`

각 단계가 다음 단계를 구속한다. 봇이 설명할 때 반드시 살려야 할 세 가지:

1. **원칙은 희생을 명시해야 한다.** "clean and modern"은 철학이 아니다.
   반박 가능해야 철학이다. (사슬 문서 1단계)
2. **모든 결정에 ID와 근거 한 줄.** `D-<원칙>-<번호>` 형식. 근거 없는 결정은
   쓸 수 없다. (사슬 문서 2단계, 게이트 `GS7`)
3. **컴포넌트는 0에서 시작하지 않는다.** 장르가 맞는 프리셋을 먼저 고르고,
   해부·상태·접근성 계약은 유지한 채 토큰 슬롯만 결정 표에서 파생한다.
   부합 프리셋이 없을 때만 `no-preset: <이유>`를 남긴다. (게이트 `GS8`)

📁 게이트 전문: `skills/omd-autopilot/references/slop-gates.md` — 슬롭 게이트 54개
+ 시스템 충실도 게이트 8개(GS1–GS8). 기계적으로 검사 가능한 게이트는 grep 검증이
의무다.
📁 컴포넌트 규범 45개(기하·히트 타깃·상태 매트릭스·광학 정렬):
`skills/omd-autopilot/references/component-craft.md`

---

## 4. 세 산출물

| 산출물 | 무엇인가 | 확인 경로 |
|---|---|---|
| **`DESIGN.md`** | 희생까지 적힌 철학, ID 붙은 결정 표, 결정을 되가리키는 토큰. 일반 채팅에 붙여넣어도 통하는 vendor-neutral 계약. 7개 안정 앵커(experience / foundations / typography-assets / components-states / layout-platforms / content-locales / governance). | `spec/design-md-core-v2.md` |
| **디자인 시스템** | 해부를 갖춘 컴포넌트 계약, **해당 없는 상태와 그 이유까지** 적힌 상태 매트릭스, 접근성 계약, 선언된 대비 쌍. 기계 판독 graph 스키마 포함. | `spec/schema/`, `skills/omd-autopilot/references/design-system-contract.md` |
| **`omd book`** | `npx oh-my-design-cli@latest book` → 로컬 포트에 자기 시스템을 띄운다. 토큰 옆 결정, 이유 달린 상태 매트릭스, **선언한 대비 쌍의 실측값**, 프리셋 계보. `--static`은 단일 HTML 출력. | `src/cli/book.ts` (684줄), 테스트 `test/unit/cli/book.test.ts` |

`omd book`의 한 줄 요약으로 쓸 만한 대비:
**"Storybook은 스토리를 렌더링한다. 이건 계약을 렌더링한다."**

---

## 5. 인용해도 되는 실물 발췌

전부 하네스가 실제로 생성한 파일에서 그대로 가져온 것이다. 출처:
📁 `benchmarks/ui-resolve-bench/e2e/onzip/DESIGN.md` (644줄, 처음부터 끝까지 생성물)

### 5-1. 같은 ID가 원칙과 토큰에 나타난다

```markdown
### Principles
- Accent is a signal — terracotta on linen, used for the primary action,
  selected chip, and focus ring, never a full-card wash (D-P2-4).

### Semantic tokens
- **color.accent**: `#8B4529` — Terracotta signal. D-P2-4. 6.1:1 on paper.
  Area budget under 5 percent.
```

**말할 것:** 시스템 안 어느 값에서 출발하든 그 값을 만든 문장까지 거슬러 올라갈 수
있다. 이게 "디자이너가 읽고 왜를 찾을 수 있는 문서"의 실체다.

### 5-2. 컴포넌트가 프리셋을 상속하고, 해당 없는 상태에 이유를 단다

```markdown
### Component: product-card
**Semantics:** P-CM-01. Lifestyle cut and one-line pitch required. Price is the
heaviest text. Whole-card link, no inner competing CTA. Painted hover uses
four-sided space.4 so the lifestyle cut does not touch the tinted edge (P-FN-07).

| State | Applicability | Reason |
|---|---|---|
| disabled | not-applicable | A sold-out item still opens its detail page;
                             stock is a badge, not a disabled card. |
| loading  | not-applicable | Card media uses explicit width and height;
                             the card itself is not a pending control. |
```

**말할 것:** 상태 매트릭스가 "적용됨"만 적는 게 아니라 **왜 이 상태는 해당이
없는지**를 적는다. 이게 카드에 아무도 요청하지 않은 가짜 disabled 스타일이 생기는
걸 막는다.

### 5-3. 정직성이 토큰 레벨에 있다

```markdown
- **color.stock-in**:  `#2F5A3D` — 판매중 token from stock_status enum. D-P3-1.
- **color.stock-low**: `#7A4E1D` — 품절임박 token. D-P3-1.
- **color.stock-out**: `#7A3535` — 품절 token. D-P3-1.
```

**말할 것:** 데이터의 enum이 그대로 토큰이 됐다. 화면에 있는 상태 색은 디자이너가
고른 세 가지가 아니라 **데이터가 실제로 가질 수 있는 값의 개수**다.

---

## 6. 숫자와 출처

봇은 이 표 밖의 수치를 만들어내면 안 된다.

| 수치 | 무엇 | 어디서 확인 |
|---|---|---|
| **93** | 프리셋 계약 (4층: fundamentals 10 / primitives 35 / genres 43 / flavors 5) | `skills/omd-autopilot/references/presets/catalog.json` |
| **54 + 8** | 슬롭 게이트 + 시스템 충실도 게이트(GS1–GS8) | `skills/omd-autopilot/references/slop-gates.md` |
| **45** | 컴포넌트 장인 규범 | `skills/omd-autopilot/references/component-craft.md` |
| **7** | DESIGN.md Core v2 안정 시맨틱 앵커 | `spec/design-md-core-v2.md` §4 |
| **440+** | 품질 등급 기업 레퍼런스 | `web/references/` |
| **22 / 19** | 스킬 / 전문 역할 | `skills/`, `.claude/agents/` |
| **684줄** | `omd book` 구현 (외부 의존성 0) | `src/cli/book.ts` |
| **7 → 3, P0/P1 0건** | 같은 픽스처·같은 브리프로 프리셋 도입 전후 첫 렌더 결함 | `docs/design-excellence/G3-SELF-INSPECTION-2026-08-19.md` |
| **−47%** | 같은 비교에서 입력 토큰 | 〃 |
| **2.0.0** | 현재 npm 버전, provenance attestation 확인됨 | npm registry / `package.json` |

소셜 지표(⭐ 별 수, 월 다운로드)는 **게시 직전에 실제 값을 다시 확인**하고 쓴다.
이 문서에 박아 두지 않는다.

---

## 7. 절대 하면 안 되는 주장 (guardrail)

봇이 이 선을 넘으면 제품의 신뢰가 깎인다. 하나하나 지킨다.

1. **경쟁 스킬보다 우수하다고 판정하지 않는다.** hallmark 등과의 비교 테스트는
   우리가 설계·실행했고 한쪽 팔의 제작자가 우리다. 제시할 수 있는 건 *조건이
   동일했다는 사실과 관측치*까지이고, 우열 판정은 보는 사람에게 남긴다.
   비교 대상 스킬을 깎아내리는 표현도 쓰지 않는다.
2. **Google DESIGN.md와 "같은 규격"이라거나 "공식 호환"이라고 말하지 않는다.**
   가져오기·내보내기 호환을 *목표로 한다*까지가 정확한 표현이다.
3. **없는 벤치마크 결과를 만들지 않는다.** 위 표에 없는 성능·품질 수치는
   존재하지 않는 것으로 취급한다.
4. **브랜드 사실을 지어내지 않는다.** 레퍼런스 카탈로그의 원칙이 그대로 봇에게도
   적용된다 — *모르면 없는 것*이다. 그럴듯한 대체값으로 채우지 않는다.
5. **"디자이너가 필요 없다"고 말하지 않는다.** 지향은 *디자인을 몰라도 디자인을
   할 수 있게 하는 것*이지 디자이너를 대체하는 게 아니다. 오히려 산출물의 판정
   기준이 "디자이너·프론트엔드가 읽고 납득하는가"다.
6. **자동으로 예뻐진다고 말하지 않는다.** 하네스가 하는 일은 결정에 근거를
   남기게 만드는 것이다. 취향의 방향은 사용자가 철학 파일에 쓴다.

---

## 8. 예상 반론과 답

**"결국 프롬프트 잘 쓰는 거 아니냐."**
프롬프트는 세션이 끝나면 사라지고, 검사할 수 없고, 다음 화면에 강제되지 않는다.
여기서 나오는 건 레포에 남는 파일이다. 다음 빌드는 그 파일을 읽고 시작하고,
어긴 값은 번호 붙은 게이트에서 걸린다. `omd book`으로 사람이 눈으로 확인도 한다.

**"shadcn 쓰면 되는 거 아니냐."**
shadcn/ui는 구조를 준다 — 좋은 일이고, 프리셋의 primitives 층은 실제 shadcn/Radix
컴포넌트와 ARIA APG 패턴에 매핑돼 있다. 문제는 같은 primitives 위에 만든 두 제품이
같은 제품처럼 보인다는 것이다. 프리셋 계약은 *어떤 값이 라이브러리 기본값이 아니라
당신의 결정 표에서 와야 하는지*를 지정한다.

**"AI가 만든 티가 나는 건 어차피 못 고치는 거 아니냐."**
그래서 실패를 익명의 "AI 티"로 두지 않고 번호를 붙였다 — 한글 본문에 세리프
폴백, 마우스 클릭에 포커스 링, 네이티브 select 팝업, opacity로 흉내 낸 disabled,
초광폭에서 비어 버리는 여백. 이름이 붙어야 검사할 수 있고, 검사할 수 있어야
고칠 수 있다.

**"한국 서비스용 아니냐."**
카탈로그에 한국 서비스가 두꺼운 건 맞다. 하지만 하네스는 레퍼런스가 아니라
**당신이 선언한 철학**에서 시스템을 유도한다. 레포의 e2e 3케이스가 같은 게이트와
같은 프리셋 바닥에서 나왔는데도 서로 다른 얼굴을 하고 있는 게 그 증거다
(`benchmarks/ui-resolve-bench/e2e/`).

**"파일만 늘어나는 거 아니냐."**
`DESIGN.md` 한 장이면 일반 채팅에 붙여넣어도 동작한다. 그 이상(graph, provenance,
coverage)은 검증된 프로젝트에서만 켜지는 선택 층이다.

---

## 9. 문장 재료

그대로 써도 되고 변형해도 되는 표현들. 사실 관계는 위 §5–§6에 묶여 있다.

**한국어**
- "화면은 첫 단계가 아니라 마지막 단계다."
- "반박할 수 없는 원칙은 장식 문장이다."
- "근거 없는 토큰 값은 취향 차이가 아니라 게이트 실패다."
- "검사할 수 없는 취향은 개선할 수 없다."
- "shadcn이 구조를 주면, 프리셋은 어떤 값이 당신의 결정 표에서 와야 하는지를 말한다."
- "Storybook은 스토리를 렌더링한다. 이건 계약을 렌더링한다."
- "시스템 안 어느 값에서 출발하든, 그 값을 만든 문장까지 거슬러 올라갈 수 있다."
- "디자인을 몰라도 디자인을 할 수 있게 하는 디자인 하네스."

**English**
- "A screen is the last step, not the first."
- "A principle you cannot argue with is decoration."
- "A token value with no decision behind it fails a gate."
- "Taste you cannot inspect cannot be improved."
- "shadcn gives you the structure. The preset says which values must come from
  your decision table instead of a library default."
- "Storybook renders stories. This renders the contract."
- "Start at any value in the system and walk back to the sentence that caused it."

---

## 10. 링크

- 저장소: `https://github.com/kwakseongjae/oh-my-design`
- CLI 안내: `https://oh-my-design.kr/cli`
- 설치: `npx oh-my-design-cli@latest`
- 라이선스: MIT · 핵심 워크플로에 API 키·데몬·MCP 서버 불필요
