# 리서치 R2 — 글로벌 디자인 시스템의 컴포넌트 디테일·레이아웃 문법

**상태:** Partial  
**일자:** 2026-08-18  
**목적:** “대충 AI가 만든 컴포넌트”와 “프로덕션 컴포넌트”를 가르는 미시 디테일의 전수 목록화.

대상 시스템: Apple HIG, Material 3(및 Expressive), Airbnb DLS, Shopify Polaris, Vercel Geist, Linear, Radix/shadcn, IBM Carbon. 교차 규범으로 W3C ARIA APG, WCAG 2.2, NN/g, WebAIM, Figma 공식 코너 문서를 열었다.

---

## 0. 방법·한계·검증

### 방법

- 검색 스니펫은 증거로 쓰지 않았다. 워커가 `open_page`로 연 1차 URL만 FACT로 올린다.
- 32개 핵심 수치·규칙을 독립 검증 워커가 같은 URL을 다시 열어 재확인했다. **REJECT 0건.** Airbnb 사이트 소멸은 **PARTIAL**(리다이렉트는 확인, HTTP 302 vs 301은 미확정).
- Material `m3.material.io` 컴포넌트 specs/guidelines 다수는 JS SPA라 본문 추출이 실패했다. 버튼·필드·칩·카드 수치는 Google 공식 Android 구현 문서(`material-components-android`)와 `material-web.dev`로 대체했다. 색 역할 페이지(`m3.material.io/styles/color/roles`)는 검증 단계에서 본문이 열렸다.

### Partial인 이유

1. `m3.material.io` 버튼/텍스트필드/칩/카드 **웹 스펙 표**(흔히 인용되는 버튼 높이 40dp 등)는 공식 페이지 본문을 확보하지 못했다. Android 구현 문서에도 버튼 높이 40dp는 없다.
2. Apple Collections / Motion / Scroll views / Typography 일부는 JS 벽.
3. Linear·Airbnb는 공개 컴포넌트 스펙이 없다.
4. M3 state-layer opacity(흔히 8/10/12%)는 공식 페이지를 열지 못해 **UNKNOWN**.
5. Apple label RGBA(secondary 60% 등)는 HIG에 숫자가 없다.
6. Polaris 현행 Web Components는 캡슐화되어 높이·radius·히트영역 숫자가 공개 페이지에 거의 없다.

### 시스템별 공개 깊이

| 시스템 | 공개 스펙 | 성격 |
|---|---|---|
| Apple HIG | 예 | 원칙·히트영역·역할. 웹 px/radius 수치는 거의 없음 |
| Material 3 / Expressive | 예 (일부 JS) | Android 구현 문서가 수치의 본체. Expressive = 크기 5단·shape morph·35 shape |
| IBM Carbon | 예 (가장 두꺼움) | 상태 세트·높이·패딩·그리드·테마 hex가 페이지에 있음 |
| Shopify Polaris | 예 (현행 WC) | React 라이브러리 2025-10-01 아카이브. 현행은 `s-*` 웹 컴포넌트 |
| Vercel Geist | 예 | 가이드·동작 규칙. 숫자 토큰은 라이브 데모 중심이라 빈약 |
| Radix + shadcn | 예 | 소스와 프리미티브 문서. 밀도는 size 스케일 |
| Linear | 아니오 | 브랜드 + 리디자인 에세이만 |
| Airbnb DLS | 아니오 | `airbnb.design`은 `airbnb.com`으로 교차 호스트 리다이렉트. 2016 에세이만 남음 |

---

## 1. 컴포넌트 디테일 체크리스트

AI 생성이 빠뜨리는 것은 “예쁜 기본 상태”가 아니라 **상태 전수, 광학, 히트영역, 네이티브 대체, 포커스 규율**이다. 아래는 시스템별로 확인된 요구만 적는다.

### 1.1 버튼 (Button)

#### 상태 세트

| 시스템 | 확인된 상태·역할 | 출처 |
|---|---|---|
| Apple | 역할: Normal / Primary / Cancel / Destructive. 커스텀은 **press state 필수**. iOS 로딩: 버튼 안 activity indicator, 라벨 변경 가능(“Checkout” → “Checking out…”). visionOS: Idle / Hover / Selected / Unavailable | [HIG Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons) |
| Carbon | Hover / Focus(`$focus` 외곽 + `$focus-inset` 인셋) / Active / Disabled + inline-loading 중 **disabled** | [Button style](https://carbondesignsystem.com/components/button/style/) · [usage](https://carbondesignsystem.com/components/button/usage/) |
| M3 (Android) | Elevated / Filled / Tonal / Outlined / Text. Default + Toggle. 색은 state list(enabled/hovered/focused/pressed/disabled). Expressive: pressed/selected 시 **shape morph** | [CommonButton.md](https://raw.githubusercontent.com/material-components/material-components-android/master/docs/components/CommonButton.md) |
| Polaris 현행 | `disabled`, `loading`(콘텐츠를 인디케이터로 교체 **하고 disable**). variant `auto\|primary\|secondary\|tertiary`, tone `critical\|auto\|neutral` | [s-button](https://shopify.dev/docs/api/app-home/polaris-web-components/actions/button) |
| Polaris 구 React (deprecated) | size micro/slim/medium/large, `pressed`, `loading`, `disabled`, Enter/Space 활성 | [archive Button](https://shopify.github.io/polaris-react-archive/components/actions/button) |
| Geist | Sizes, Types, Shapes, prefix/suffix, Loading, Disabled, Link, Custom(normal/hover/active 색). **loading 중 포커스 유지·busy 안내** | [Geist Button](https://vercel.com/geist/button) |
| Radix Themes | size 1–4, variant classic/solid/soft/surface/outline + ghost, radius, `loading`(스피너 교체, 크기 유지, disabled) | [Radix Button](https://www.radix-ui.com/themes/docs/components/button) |
| shadcn v4 | variant + size. `disabled:pointer-events-none disabled:opacity-50`. 내장 loading prop 없음(스피너 슬롯). `aria-invalid` 링 | [button.tsx](https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/v4/registry/new-york-v4/ui/button.tsx) |

**FACT — 로딩 철학 충돌:** Geist는 로딩 중 **포커스 유지**. Polaris web / Carbon / Radix Themes는 로딩 중 **disable**.

**FACT — Apple 역할:** Primary를 destructive에 쓰지 말 것. Primary는 액센트·Return.

#### 히트 타깃·크기·밀도

- Apple 커스텀 버튼 히트 영역 **최소 44×44 pt**, visionOS **60×60 pt**. [HIG Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons)
- Apple 접근성 기본/최소 컨트롤: iOS·iPadOS **44×44 / 28×28 pt**, macOS **28×28 / 20×20**, tvOS **66×66 / 56×56**, visionOS **60×60 / 28×28**, watchOS **44×44 / 28×28**. [HIG Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility)
- Apple 간격: 베젤 있는 요소 약 **12 pt**, 베젤 없는 요소 가시 가장자리 약 **24 pt**. 같은 페이지.
- visionOS 버튼 스케일: Mini 28 / Small 32 / Regular 44 / Large 52 / Extra large 64 pt. 중심 간격 **최소 60 pt**. 60pt 이상 버튼은 hover overlap 방지 **4 pt 패딩**. 아이콘만=circle, 텍스트만=roundedRect/capsule, 아이콘+텍스트=capsule.
- macOS 이미지 버튼: 이미지–가장자리 **약 10 px** 패딩.
- iOS: **풀폭 버튼 회피**. 필요하면 하드웨어 곡률·safe area와 맞출 것. [HIG Layout](https://developer.apple.com/design/human-interface-guidelines/layout)
- Carbon 높이: Extra small **24** / Small **32** / Medium **40** / Large productive·expressive **48** / Extra large **64** / 2XL **80** px. Small은 32px 인풋, Medium은 40px 인풋과 페어. [Button style](https://carbondesignsystem.com/components/button/style/)
- shadcn v4: default `h-9 px-4 py-2`, xs `h-6`, sm `h-8`, lg `h-10`, icon `size-9` (xs 6 / sm 8 / lg 10). SVG 기본 `size-4`.
- M3 Expressive 크기: Extra small / Small(기존 기본) / Medium / Large / Extra large. Small 수평 패딩 **16dp 권장, 24dp deprecated**.
- **UNKNOWN:** M3 웹 스펙의 “버튼 높이 40dp”. Android `CommonButton.md`와 `dimens.xml`에는 40dp가 없고, 패딩 top/bottom 6dp·inset 4dp, Expressive min touch **48dp**만 확인.

#### 광학 정렬·아이콘–텍스트

- Carbon: 라벨은 **항상 좌측 정렬**(센터 아님). 아이콘+라벨에서 아이콘은 **우측**. 아이콘온리는 센터. [Button usage](https://carbondesignsystem.com/components/button/usage/)
- Carbon 고정폭: 라벨 왼쪽 패딩 **16px**, 오른쪽 **64px**. 아이콘+라벨은 좌우 16px, 라벨–아이콘 간격 **≥16px**. 아이콘 16×16, expressive 20×20. Focus inset **1px**.
- M3: 아이콘은 라벨 **leading**, `iconPadding` 기본 **8dp**. 비대칭 코너에서 `setOpticalCenterEnabled(true)` — **기본 off**.
- Radix Themes Ghost: **네거티브 마진으로 형제와 광학 정렬**, hover/active에서만 패딩 크롬이 보임. 아이콘 중첩 시 자동 gap.
- shadcn: `gap-2` + `data-icon="inline-start|inline-end"`.
- Geist: 아이콘온리는 `svgOnly` + `aria-label` 없으면 validator throw. 라벨 Title Case.
- Apple: 라벨 title-style capitalization, 동사로 시작(“Add to Cart”). 아이콘–라벨 갭 수치 **없음**.
- Linear 2024 리디자인 에세이: 사이드바에서 라벨·아이콘·버튼을 수직·수평으로 광학 정렬했다고 서술. 토큰 테이블은 없음. [How we redesigned](https://linear.app/now/how-we-redesigned-the-linear-ui)

#### 코너·corner smoothing

- M3 버튼 기본 shape: `ShapeAppearance.M3.Sys.Shape.Corner.Full`(풀 라운드).
- Apple API: `RoundedCornerStyle.continuous` / `UICornerCurve.continuous` = “Continuous curvature rounded rect corners”. HIG에 수식·60%는 없음. [SwiftUI continuous](https://developer.apple.com/tutorials/data/documentation/swiftui/roundedcornerstyle/continuous.md)
- Figma 공식: corner smoothing = continuous curve / squircles. **iOS 프리셋 = 60%**. [Figma Help](https://help.figma.com/hc/en-us/articles/360050986854-Adjust-corner-radius-and-smoothing)
- Figma 엔지니어링(2018): iOS 아이콘은 순수 superellipse가 아니라 곡률 연속(clothoid/베지어), ξ≈0.6이 iOS에 가깝다. [Desperately seeking squircles](https://www.figma.com/blog/desperately-seeking-squircles/)
- **INFERENCE:** 60%는 Figma 매핑이지 Apple HIG 숫자가 아니다.
- shadcn: `rounded-md`. Radix: radius `none|small|medium|large|full`.
- Carbon: style 페이지에 radius 숫자 없음(전통적으로 직각에 가깝지만 미기재 → 수치 UNKNOWN).

#### focus-visible

- shadcn v4 / Input: `outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50`. 구 registry는 `ring-1` — **버전 불일치**.
- Radix: `:focus-visible`을 전 컴포넌트에 강제하지 않음. Slider에 `focusVisible` 지원을 추가해 programmatic focus와 `:focus-visible`을 같이 쓰게 함. [Releases](https://www.radix-ui.com/primitives/docs/overview/releases)
- Carbon/Apple: 포커스 링을 입력 방식과 분리하지 않는다(클릭도 focus).
- **INFERENCE:** shadcn 소스는 키보드/프로그래매틱 `:focus-visible`에만 링. 문장으로 “마우스 클릭 후 링 숨김”을 쓰진 않음.

#### 타이포

- Carbon: sentence case. productive **14px / $body-compact-01**, expressive **16px / $body-compact-02**.
- Geist Typography: 버튼 타이포는 버튼 컴포넌트 안에서만. Button 14 기본, Button 12는 인풋 안 작은 버튼. [Geist Typography](https://vercel.com/geist/typography)
- M3: `textAppearanceLabelLarge`.
- Apple: title-style capitalization.

---

### 1.2 텍스트 필드 / 인풋

#### 상태 세트

| 시스템 | 상태 | 출처 |
|---|---|---|
| Carbon | **enabled, active, focus, error, warning, disabled, skeleton, read-only**. Disabled=포커스 불가·SR 미낭독. Read-only=포커스 가능·대비 유지 | [Text input usage](https://carbondesignsystem.com/components/text-input/usage/) |
| M3 | Filled / Outlined. Anatomy: container, leading/trailing icon, empty/populated label, caret, input, supporting text, active indicator 또는 outline. Error stroke/icon=`colorError`. Dense 스타일 공식 | [TextField.md](https://raw.githubusercontent.com/material-components/material-components-android/master/docs/components/TextField.md) |
| Polaris | label, placeholder, error, details, prefix/suffix, icon, max/minLength, readOnly, required, disabled, accessory. 라벨 없는 필드는 Bad 예 | [s-text-field](https://shopify.dev/docs/api/app-home/web-components/forms/text-field) · [Using Polaris](https://shopify.dev/docs/api/polaris/using-polaris-web-components) |
| Geist | Default, prefix/suffix, Disabled, Search(Esc 클리어), ⌘K, Error, Label. 검증은 **blur 시**. 저장 중에도 포커스 가능. placeholder=예시값, 라벨=Title Case 명사 | [Geist Input](https://vercel.com/geist/input) |
| shadcn | Basic / Disabled(`data-disabled`) / Invalid(`aria-invalid`+`data-invalid`) / Required. 로딩·success 문서 없음. `h-9 … px-3 py-1 text-base md:text-sm` + 동일 3px focus-visible | [input.tsx](https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/v4/registry/new-york-v4/ui/input.tsx) · [docs](https://ui.shadcn.com/docs/components/base/input) |
| Apple | 소량 입력. placeholder+별도 라벨 권장. secure field. trailing Clear. leading=목적 / trailing=부가. 이메일은 이탈 시 검증, username/password는 이탈 전 | [HIG Text fields](https://developer.apple.com/design/human-interface-guidelines/text-fields) |
| Radix Themes | size 1–3, variant classic/surface/soft. **size 1에 인터랙티브 자식 금지**. 버튼과 사이즈 페어 | [Text Field](https://www.radix-ui.com/themes/docs/components/text-field) |

#### 수치

- Carbon Default 높이: sm **32** / md **40**(기본) / lg **48**. Fluid 필드 **64px**, 좌우 16, 상하 13. Default 텍스트 좌우 16, 라벨 아래 8, helper 위 4. 하단 보더 1px, focus/invalid **2px**. 필드 3:1 non-text contrast. Text area 기본 min-height **40px**. [style](https://carbondesignsystem.com/components/text-input/style/)
- M3: leading/trailing 아이콘 min **48dp**. Stroke 1dp / 포커스 2dp. 권장 width **245dp**, max **488dp**, 라벨 없으면 min **56dp**, 있으면 min **88dp**. 타이포: input `BodyLarge`, helper/error `BodySmall`, prefix/suffix `TitleMedium`. Shape `cornerExtraSmall`.
- **주의 (검증):** 56/88/245/488은 **너비**이지 높이가 아니다.
- Apple: 여러 필드는 세로 스택·균등 간격·일관된 폭·논리적 탭 순서. min-height 수치 **없음**.

---

### 1.3 셀렉트 / 콤보박스 / 리스트박스

#### 네이티브 vs 커스텀 — 대체 기준 (FACT)

1. **W3C First Rule of ARIA:** 네이티브 HTML이 의미·동작을 이미 갖고 있으면 ARIA로 재구현하지 말 것. 예외는 (a) HTML 기능 부재, (b) 구현/AT 지원 부재, (c) 시각 디자인이 네이티브 스타일링을 불가능하게 할 때. 문서는 2026-02-24 Discontinued Draft이나 Rule 1 문구는 유지. 위젯 패턴은 APG. [Using ARIA §rule1](https://www.w3.org/TR/using-aria/#rule1)
2. **Carbon:** 폼 제출·모바일 → native Select. 스타일링·필터·멀티셀렉트 → custom Dropdown. Select 리스트는 브라우저가 그리고, Dropdown 리스트는 DS로 스타일 가능. [Dropdown](https://carbondesignsystem.com/components/dropdown/usage/) · [Select](https://carbondesignsystem.com/components/select/usage/)
3. **shadcn:** NativeSelect = 네이티브 동작·성능·모바일. Select = 커스텀 스타일·애니메이션·복잡한 상호작용. [Native Select](https://ui.shadcn.com/docs/components/base/native-select)
4. **Geist:** ~10개 미만 고정 리스트 → Select. 필터가 필요하면 Combobox. [Geist Select](https://vercel.com/geist/select)
5. **Material Web Select:** native `<select>` 아날로그. filled/outlined, typeaheadDelay, required/error/disabled, opening/opened/closing/closed. [material-web select](https://material-web.dev/components/select/)
6. **Radix Select:** 커스텀 리스트 + 숨은 native `<select>`로 폼 제출. 기본 포지션 `item-aligned`(macOS 메뉴처럼 활성 아이템에 Content 정렬). [Radix Select](https://www.radix-ui.com/primitives/docs/components/select)
7. **APG:** `size="1"` native select가 일부 브라우저에서 AT에 combobox로 노출. select-only 예제는 **프로덕션용이 아니며** native와 Tab 동작이 다르다. [APG Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/) · [select-only](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/)

짧은 리스트 대체:

- Apple: 짧은 리스트는 pull-down, 중·장은 picker, 매우 긴 리스트는 list/table(+index). Pop-up = 상호배타 단일. 액션·멀티·서브메뉴는 pull-down. [Pickers](https://developer.apple.com/design/human-interface-guidelines/pickers) · [Pop-up buttons](https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons)
- Carbon: 선택지 2개면 radio.
- Polaris: 4개 이상 또는 공간 제약 시 select. 더 시각적이면 choice list. [s-select](https://shopify.dev/docs/api/app-home/web-components/forms/select)
- Geist: 2–3개는 Switch, 다중은 MultiSelect, 자유 문자열은 search Input. [Combobox](https://vercel.com/geist/combobox)

#### 키보드·상태 (커스텀을 쓸 때 필수)

**APG Combobox**

- 구조: input + popup(listbox/grid/tree/dialog). 기본 collapsed.
- Autocomplete 4종: none / list+manual / list+automatic / list+inline.
- Tab: combobox만 탭 시퀀스. popup·indicator는 제외.
- Down: popup으로. Escape: 닫기(옵션으로 값 클리어).
- Listbox popup: DOM 포커스는 combobox, `aria-activedescendant`로 시각 포커스. selection follows focus.
- Select-only 닫힘: Down/Alt+Down/Enter/Space는 **열고 선택은 안 바꿈**. Home/End는 열고 첫/마지막. 인쇄 문자 typeahead(같은 글자 순환).
- Select-only 열림: Enter/Space 확정+닫기. Tab 확정+다음 포커스. Escape **값 유지하고 닫기**. PageUp/PageDown 10개 점프.
- **탐색만으로 값을 바꾸지 않음** — SR 사용자가 현재 값을 잃지 않고 훑을 수 있다.
- 단일 선택 listbox는 탐색 즉시 값이 바뀌고 Escape undo가 없다(combobox/menu와 차이).

**APG Listbox**

- Typeahead: 모든 listbox 권장, **7개 초과에서 특히**. Home/End는 **5개 초과에서 강력 권장**.
- 멀티셀렉트: Space 토글(권장, modifier 불필요) 또는 Ctrl/Shift 모델.
- option 안에 링크/버튼/체크박스 금지 → Grid 패턴.

**Carbon Dropdown / Select / Combo box**

- 변형: Dropdown(단일) / Multiselect / Combo box(긴 리스트 또는 커스텀 값).
- 밀도: sm 32 / md 40 / lg 48. Fluid 필드 64, 메뉴 default 64 / condensed 40. 열린 옵션 높이 = 필드 높이.
- 상태: enabled, hover, focus, error, warning, disabled, skeleton, read-only. Select는 +selected, +open.
- 메뉴 shadow `0 2px 6px 0 rgba(0,0,0,.2)`. 스크롤은 **6번째 옵션부터**, 마지막 옵션의 **50%**를 보여 더 있음 힌트.
- Combo box: best-match highlight + autocomplete, x 클리어, 커스텀 값은 바깥 클릭/Tab/Enter로 저장.
- Select 키보드: Space/Enter/Down/Up 열기, Down/Up 하이라이트, Escape/Space/Enter 닫기.

**Radix Select 키보드**

- Space: 트리거에서 열고 **선택된 항목** 포커스 / 항목에서 선택.
- Enter: 트리거에서 열고 **첫 항목** 포커스.
- ArrowDown/Up: 열기 또는 이동. Esc: 닫고 트리거로.
- data-state: item `checked|unchecked`, `data-highlighted`, `data-disabled`. Trigger `open|closed`.
- 문서 키보드 표에 Home/End 세부는 없고 Features에 “Typeahead support”만 → **PARTIAL**.
- 패턴 이름 혼용: “Adheres to the ListBox WAI-ARIA design pattern. See the W3C Select-Only Combobox example.”
- Radix primitives에 Combobox는 없음.

**shadcn Select**

- 현재 Base UI Select를 가리킴(구 Radix 래퍼에서 이동).
- `alignItemWithTrigger` 기본 true = 선택 항목을 트리거 위에.
- Invalid: Field `data-invalid` + Trigger `aria-invalid`.

**Geist Combobox**

- 로딩 중 리스트를 접지 말 것.
- empty: `No {items} match "{query}"`.
- 리스트가 열린 동안 Enter로 바깥 폼 submit 금지.
- Modal 안 포커스 트랩. 모바일 Modal→Dialog 자동 전환.
- `clearable`, `ignoreDefaultHeight`로 멀티라인 옵션.

**M3 Menu**

- Dropdown menu / Exposed dropdown menu. Elevation 기본 3dp, 색 `colorSurfaceContainer`. Exposed selected = `colorSurfaceContainerHighest`.
- Exposed: Filled/Outlined + Dense, TextInputLayout에 부착. [Menu.md](https://github.com/material-components/material-components-android/blob/master/docs/components/Menu.md)

**Apple 메뉴**

- 사용 불가 항목 dim. 메뉴 자체는 열어볼 수 있어야 함. 추가 입력 필요 시 ellipsis. 서브메뉴 한 단계·약 5항목 이하.
- iOS 메뉴 레이아웃: Small(상단 4아이콘) / Medium(3아이콘+라벨) / Large(리스트, 기본). [Menus](https://developer.apple.com/design/human-interface-guidelines/menus)

---

### 1.4 카드 (Card) / 타일

| 시스템 | 규칙 | 출처 |
|---|---|---|
| M3 | Elevated / Filled / Outlined. “기능은 같고 스타일만 다름”. shape `cornerMedium`. elevation outlined/filled **0dp**, elevated **1dp**. stroke outlined 1dp(`colorOutline`). filled 배경 `colorSurfaceContainerHighest`, elevated `colorSurfaceContainerLow`, outlined `colorSurface`. 모바일 마진 **8dp**. 상태 Default / Checked / Dragged. 드래그 시 outlined/filled **8dp**, elevated **2dp**. Checkable 기본 false. 예제 미디어 높이 194dp, 본문 패딩 16dp | [Card.md](https://github.com/material-components/material-components-android/blob/master/docs/components/Card.md) |
| Carbon | **Card 패턴 없음**(PAL로 위임). Tile은 같은 평면의 유연 컨테이너. **그림자/elevation 금지**. 2차 정보 노출에 쓰지 말고 modal/popover/dialog. 변형: Base / Clickable(내부 CTA 금지) / Selectable / Expandable. 최소 높이 **종횡비 2:1**. Selectable 상태: enabled, hover, hover selected, selected, focus, disabled | [Tile](https://carbondesignsystem.com/components/tile/usage/) |
| Polaris | 현행 카탈로그에 Card 이름 없음. `s-section` 레벨1은 desktop에서 elevated+shadow. padding `base\|none`(풀블리드 미디어/테이블). 커스텀 컨테이너 `s-box` | [Section](https://shopify.dev/docs/api/app-home/web-components/layout-and-structure/section) |
| shadcn | Header(Title/Description/Action)+Content+Footer. size default\|sm. `rounded-xl`, `ring-1 ring-foreground/10`, `--card-spacing` default 4 / sm 3. 이미지 헤더 앞, edge-to-edge `-mx-(--card-spacing)`. **공식 hover-lift 없음** | [Card](https://ui.shadcn.com/docs/components/base/card) |
| Geist | 이 축에서 Card hover-lift/elevation 스펙을 열지 못함 | UNKNOWN |
| Apple | Collections 페이지 JS 벽. 웹 Chip/Card 수치 없음 | UNKNOWN |

**UNKNOWN:** M3 웹 스펙의 공식 미디어 aspect(16:9 등은 예제 추론일 뿐).

---

### 1.5 칩 / 태그 / 배지

| 시스템 | 분류 | 수치·상태 | 출처 |
|---|---|---|---|
| M3 | Assist / Filter / Input / Suggestion. 액션 vs 필터, 제품 생성(suggestion) vs 사용자(input) | min height **32dp**, min touch **48dp**(`ensureMinTouchTargetSize` 기본 true), corner **8dp**, stroke 1dp, icon/close 18dp, ChipGroup spacing 8dp, 패딩 start 4/end 6, 텍스트 패딩 start 8/end 6. Checkable 기본: input/suggestion/filter=true. Close icon은 input만 기본 visible. Checked icon은 input/filter 기본. Assist/Filter에 Elevated | [Chip.md](https://github.com/material-components/material-components-android/blob/master/docs/components/Chip.md) |
| Carbon Tag | Read-only / Dismissible / Selectable / Operational | sm/md/lg, 그룹 간격 **8px**, 제목 ≤20자, 줄바꿈 금지·ellipsis+tooltip. 5줄 넘게 감싸면 multi-select dropdown. Dismissible 포커스는 close 아이콘. Tab 후 Enter/Space | [Tag](https://carbondesignsystem.com/components/tag/usage/) |
| Polaris | 정적 `s-chip`(subdued/base/strong). 필터·제거·액션은 `s-clickable-chip`. 시스템 상태는 Badge. **칩을 액션 버튼으로 쓰지 말 것** | 라벨 1–3단어. removable일 때 remove hover/focus 분명. Badge tone×color×size | [Chip](https://shopify.dev/docs/api/app-home/web-components/typography-and-content/chip) · [Clickable chip](https://shopify.dev/docs/api/app-home/web-components/actions/clickable-chip) · [Badge](https://shopify.dev/docs/api/app-home/web-components/feedback-and-status-indicators/badge) |
| Geist | Badge는 **정적**. onClick 금지. 필터 칩은 pill 또는 small Button. **한 행에 배지 하나** | sizes S/M/L, variants color + `-subtle`, inverted, pill | [Geist Badge](https://vercel.com/geist/badge) |
| shadcn | Chip 전용 없음. Badge: default/secondary/destructive/outline/ghost/link | — | [Badge](https://ui.shadcn.com/docs/components/base/badge) |
| Apple | 웹 Chip/Tag 페이지 없음. Badge는 탭바 알림용 빨간 타원 | — | FACT (부재) |

---

### 1.6 공개되지 않은 시스템 (버튼~칩 공통)

**Linear**

- 공개물은 [Brand Guidelines](https://linear.app/brand)(이름·로고·Mercury White `#F4F5F8` / Nordic Gray `#222326` · desaturated blue)와 [UI 리디자인 에세이](https://linear.app/now/how-we-redesigned-the-linear-ui)(LCH 3변수 base/accent/contrast, 광학 정렬, Inter Display, 고밀도 chrome).
- [Method](https://linear.app/method/manage-design-projects)는 프로세스 핸드북. 컴포넌트 API/토큰 테이블 없음.
- 내부 Orbiter 등은 3자 블로그만 → 미인용.

**Airbnb DLS**

- 현재 `airbnb.design`은 `https://www.airbnb.com/`으로 교차 호스트 리다이렉트. Wayback은 2024-12-18에 HTTP 302를 기록. **검증: 리다이렉트 CONFIRM, 상태코드 302는 PARTIAL.**
- 남는 1차: 2016 [Building a Visual Language](https://medium.com/airbnb-design/building-a-visual-language-behind-the-scenes-of-our-airbnb-design-system-224748775e4e) — 원자 디자인 거부, required/optional 요소, 초기 범위 iOS/Android. [The Way We Build 아카이브](https://web.archive.org/web/20240516053655/https://airbnb.design/the-way-we-build/) — 원칙 Unified / Universal / Iconic / Conversational.
- 버튼 치수·토큰·상태 테이블은 공개되지 않음.

---

## 2. 레이아웃 문법 카탈로그

### 공통 기반: 컬럼·중단점·자폭

**Carbon 2x Grid** — [overview](https://carbondesignsystem.com/elements/2x-grid/overview/) · [usage](https://carbondesignsystem.com/elements/2x-grid/usage/)

- 기본 단위: **8px mini unit**.
- 패딩: 모든 표준 중단점에서 **16px**.
- 거터 있으면 박스 패딩+마진 = **32px**.
- 중단점:

| 이름 | 너비 | 열 | 마진 |
|---|---|---|---|
| Small | 320 / 20rem | 4 | 0 |
| Medium | 672 / 42rem | 8 | 16px |
| Large | 1056 / 66rem | 16 | 16px |
| X-Large | 1312 / 82rem | 16 | 16px |
| Max | 1584 / 99rem | 16 | 24px |

- Max 이상: 마진 확장 **또는** 컬럼을 **2개 단위로 추가**.
- 레거시 12열도 2x 패키지로 구현 가능. 권장은 16열을 2로 나눔.
- 4열 스캐폴딩이 IBM 제품의 골격. 타입은 2–3열 배치에서도 종종 4열에 앉음.
- 권장 종횡비: 1:1, 2:1, 2:3, 3:2, 4:3, 16:9.
- 안티패턴: 타입을 패딩 **위**에 올리지 말고 패딩 **가장자리**에 붙일 것.

**Android / Material 창 크기 클래스** — [Window size classes](https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes)

- compact 너비 **<600dp**, medium **600–<840**, expanded **840–<1200**, large **1200–<1600**, extra-large **≥1600**.
- 높이 compact(<480dp)에서는 2패인이 비실용적.

**자폭 (소스 충돌 — 승자 없음)**

| 소스 | 규칙 | 성격 |
|---|---|---|
| Material 코드랩 | 최대 줄 길이 **60자** | FACT · [codelab](https://developer.android.com/codelabs/adaptive-material-guidance) |
| WCAG 1.4.8 AAA | 너비 **80자/글리프**(CJK **40**) 이하로 맞출 **메커니즘**. 콘텐츠가 그 값을 쓸 의무는 없음 | FACT · [Understanding](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html) |
| WebAIM | 보편 최적은 없음. 대략 **50 미만 또는 120 초과**면 추적 부담 | FACT · [Text layout](https://webaim.org/techniques/textlayout/) |
| Apple HIG Layout | 레이아웃 가이드가 “텍스트 폭을 최적 가독성으로 제한” — **숫자는 공개 본문에 없음** | FACT (원칙만) |

WCAG 1.4.12 AA: 줄간격 ≥1.5em, 단락 뒤 ≥2em, 자간 ≥0.12em, 단어간격 ≥0.16em으로 바꿔도 잘리거나 겹치면 안 됨. [Text spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)

**M3 공식 4/8/12열·16/24dp 거터 표는 페이지를 열지 못해 숫자로 쓰지 않는다.**

---

### 2.1 12컬럼 격자

**언제:** 제품·어드민·문서·폼·카드 정렬. compact 4–6열, medium 8열, expanded 12–16열. (INFERENCE로 묶은 사용 시점. 숫자는 아래 FACT.)

**구성 수치**

- Shopify 고객계정 UX: **12컬럼**. 모바일 375dp·6열·콘텐츠 1열, 태블릿 750dp·6열·콘텐츠 1열, 소형 노트북 1000dp·6열·콘텐츠 2열. [Customer accounts UX](https://shopify.dev/docs/apps/build/customer-accounts/ux)
- Polaris Grid: `repeat(12, 1fr)`, span 12/6/4 = 전폭/반폭/1/3. 컨테이너 쿼리 `inline-size > 400px`이면 3열. [s-grid](https://shopify.dev/docs/api/app-home/web-components/layout-and-structure/grid)
- Shopify 앱 Layout: **4px** 간격 그리드. 리소스 인덱스는 전폭, 홈은 기본폭 단일. [App layout](https://shopify.dev/docs/apps/design/layout)
- Geist Grid: `columns={12}`, sm/md/lg 3중단점. 가이드가 디자인 일부일 때만. 2단 이상 중첩 금지. [Geist Grid](https://vercel.com/geist/grid)
- Carbon: 권장 16열 2분할. 12열은 레거시 인정.

**와이드 스크린 빈 공간** — Carbon 세 모델 ([usage](https://carbondesignsystem.com/elements/2x-grid/usage/)):

| 모델 | Max(1584) 이후 |
|---|---|
| Editorial | max 유지, 그리드 **중앙** |
| Product / docs | max 유지, 그리드 **좌정렬** |
| High-density | **전폭**, 2열씩 추가 |

**안티패턴**

- Carbon: 같은 스케일로 전부 깔아 위계 없음.
- Polaris: 데스크톱 고정 그리드를 모바일에 그대로, 셀 오버플로 미계획, 단순 선형에 Grid 남용.
- Material 코드랩: 12열에 맞춰 **버튼을 유체 전폭으로 늘림** — 고정 폭/컴포넌트 교체.
- Geist: 가이드 없는 일반 카드에 Geist Grid, 2단 중첩.

---

### 2.2 벤토 그리드

**언제:** 마케팅 기능 매트릭스, 동등 카드 피드, 비균일 강조 타일. 장문 본문 읽기에는 부적합(자폭 규칙).

**구성**

- Geist는 “bento”라는 이름을 쓰지 않지만, 셀 span(`column="1/3"`) + `solid`로 가이드를 가리는 2D 셀·가이드 레이아웃을 마케팅/문서 랜딩/기능 분해에 쓰라고 한다. sm/md/lg에서 columns/rows 모두 지정. 탭 순서=읽기 순서. 가이드 `aria-hidden`. 커스텀 보더 3:1. [Geist Grid](https://vercel.com/geist/grid)
- Material Feed(비균일 카드 그리드): 동등 콘텐츠를 그리드, 큰 카드로 강조, compact는 1열 스크롤. 샘플 `GridCells.Adaptive(minSize = 180.dp)`. [Canonical layouts](https://developer.android.com/develop/ui/compose/layouts/adaptive/canonical-layouts)
- Material 코드랩 Feed: 첫 카드 **11열**, 나머지 **5열**, 간격 **24dp**. [codelab](https://developer.android.com/codelabs/adaptive-material-guidance)

**와이드:** Adaptive min 180dp면 열이 계속 늘어남. 읽기 본문은 max-width/measure 필요 — **INFERENCE**(Carbon editorial 1584 + WCAG 80자).

**안티패턴:** Geist 2단 중첩, 가이드만 있는 빈 셀, 본문을 벤토 전폭에 흘림.

**UNKNOWN:** Linear 공식 벤토 문법 — 공개 페이지 없음.

---

### 2.3 캐러셀

**언제:** 동일 프라임 영역에 여러 프로모. NN/g는 정치적 이유라고 명시. 정적 히어로가 나을 수 있음.

**규칙** — [Designing Effective Carousels](https://www.nngroup.com/articles/designing-effective-carousels/)

- 큰·작은 뷰포트 모두에서 바로 스크롤되어 **첫 프레임 외를 놓치기 쉬움**.
- 프레임 **≤5**.
- 선명한 이미지/텍스트, 개수·위치 표시.
- 컨트롤은 **캐러셀 안**(접힘선 아래 금지).
- 점만은 모바일에서 약함. 버튼은 크고 구분 가능하게.
- **모바일에서 자동 넘김 금지**. 타이밍 가이드 초당 3단어.
- 다음 이미지가 잘려 보이는 bleed로 “더 있음” 힌트.

**자동재생** — [Auto-Forwarding](https://www.nngroup.com/articles/auto-forwarding/): 5초 로테이션은 읽기 전에 넘어가고 광고처럼 보이며 항목 노출 시간이 줄어든다. “사용자가 요청할 때만”.

**접근성** — WebAIM/WCAG 2.2.2: 5초 넘게 자동 이동하는 캐러셀은 일시정지·정지·숨김이 가능해야 함. [WebAIM checklist](https://webaim.org/standards/wcag/checklist)

**와이드:** 컨트롤이 접힘 아래로 떨어지지 않게 캐러셀 안에. 숫자 max-width는 NN/g에 없음.

**안티패턴:** 자동재생+광고 룩, 5장 초과, 점만, 잘린 컨트롤, 중요 정보를 캐러셀에만 둠.

---

### 2.4 마스터-디테일 (list-detail / split view)

**언제:** 메시지·연락처·미디어 브라우저처럼 “목록 항목이 추가 정보를 여는” 앱. Shopify 비주얼 에디터 2열, 설정은 얇은 주석 열+넓은 폼. Carbon 슬라이드인 사이드 패널은 페이지와 패널을 같이 봐야 할 때(그리드 인플루언서로 열 수 감소).

**Apple Split view** — [Split views](https://developer.apple.com/design/human-interface-guidelines/split-views)

- 인접 여러 패인으로 계층을 동시에. 1패인 선택 → 2·3패인 디테일.
- **compact(아이폰 세로)에서 스플릿 회피**. 좁아지면 인스펙터 같은 3차 열을 먼저 숨김. [Layout](https://developer.apple.com/design/human-interface-guidelines/layout)
- tvOS 기본 비율 **1/3 + 2/3**, 1/2+1/2도 가능. 구분선 **1pt** thin 선호.
- 패인 min/max를 두어 구분선이 사라지지 않게. 숫자 최대 패인 폭은 페이지에 없음.

**Material canonical** — [Canonical layouts](https://developer.android.com/develop/ui/compose/layouts/adaptive/canonical-layouts)

- List-detail: **expanded에서만** 목록+디테일 동시. medium/compact는 한 패인 + 뒤로 가기로 목록.
- Supporting pane: expanded **70% / 30%**, medium **50:50**, compact는 아래 스택 또는 시트.
- 보조 콘텐츠는 주 콘텐츠 없이는 의미 없음. list-detail 디테일은 목록 없이도 의미 있음(제품 설명 등).

**안티패턴:** compact에 다중 패인 강제, 선택 하이라이트 없음, 숨긴 패인 복구 수단 없음, list-detail와 supporting pane 혼동.

---

### 2.5 매거진 / 에디토리얼

**언제:** 장문·마케팅·이미지+카피 리듬. 작업형 제품은 Product/docs(좌정렬 max) 또는 고밀도 전폭.

**규칙**

- Carbon Editorial: IBM.com 마케팅 기본. 그리드 가운데, 표현적 레이아웃 허용. 유체 컬럼은 사설·대시보드·이미지·영상·시각화 — “보이는 개수보다 각 항목 크기를 키우는 게 목표일 때”.
- Apple Typography(검색 크롤, 전문 fetch는 JS 벽 → **confidence medium**): 넓은 칼럼·긴 본문에 loose leading. 큰 Dynamic Type에서는 다단을 줄이라.
- WebAIM: 양쪽 정렬(저스티파이)은 “흰 강”을 만들어 가독성 해침.

**와이드:** Editorial = 1584에서 중앙 고정. 본문은 60자 / 80자 메커니즘 / 50–120.

**안티패턴:** 저스티파이, 본문 전폭 유체, 같은 스케일 반복, 페이지 안 밀도 급변.

---

### 2.6 풀블리드 + 콘텐츠 웰

**언제:** 히어로·미디어·브랜드 풀블리드 + 본문 웰(max-width/measure). 컨트롤은 세이프에어리어·마진 안.

**규칙** — [HIG Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

- 배경·풀스크린 아트는 화면 끝까지. 스크롤 레이아웃도 하단·측면까지.
- 콘텐츠가 창 전폭이 아니면 background extension으로 사이드바/인스펙터 뒤에 콘텐츠가 이어지는 느낌.
- iOS **게임은 풀블리드** 선호하되 코너·Dynamic Island 수용. **일반 앱은 전폭 버튼 회피**, 시스템 마진에 인셋.
- Shopify: 본문 단락을 회색 앱 배경에 바로 두지 말고 카드/섹션 컨테이너에. [App layout](https://shopify.dev/docs/apps/design/layout)
- Polaris Section `padding="none"`은 풀블리드 미디어/테이블용.

**와이드:** 아트는 가장자리까지, 본문은 중앙/좌측 웰. Apple은 레터박스보다 종횡비 유지 스케일.

**안티패턴:** 본문 전폭, iOS 전폭 버튼, 세이프에어리어 무시, 배경 없이 단락만, 타입을 패딩 위에 올림(Carbon).

---

### 2.7 스크롤 내러티브 (스크롤 리빌, 스티키 섹션)

**언제:** 여가·브랜드 스토리. 의료·금융·B2B 과업에는 NN/g 비권장.

**규칙** — [NN/g Scroll Animations](https://www.nngroup.com/articles/scroll-animations/)

- 스크롤 후 본문이 페이드·슬라이드되면 **실제 로딩처럼** 느껴진다.
- 3규칙: (1) 고위험/과업 사이트는 피할 것 (2) 본문이 아닌 **보조 그래픽**에 (3) 내려갈 때 **한 번만** 재생.

**힌트 문법**

- Apple: 숨은 컬렉션은 잘린 아이템으로 스크롤 힌트. [Layout](https://developer.apple.com/design/human-interface-guidelines/layout)
- NN/g 캐러셀 bleed와 동일 문법.

**플랫폼:** MDN CSS scroll-driven animations는 시간 대신 스크롤 타임라인 — DS 규칙 아님. 지속시간 수치 없음.

**UNKNOWN:** Apple Motion / Scroll views 페이지 본문.

**안티패턴:** 본문 스크롤-리빌 반복, 매 페이지 재재생, 5초+ 자동 움직임에 일시정지 없음(WCAG 2.2.2).

---

### 2.8 초광폭 빈 공간 — 한 줄 총괄

| 소스 | 규칙 | 유형 |
|---|---|---|
| Carbon | 1584 이후 마진 확장 또는 2열 추가. Editorial 중앙 max / Product 좌측 max / High-density 전폭 | FACT |
| Android WSC | extra-large ≥1600dp | FACT |
| Material 코드랩 | 유체 전폭 금지, 60자 measure, 패인/그룹 | FACT |
| Apple | 가능한 한 compact로 늦게 접기; 배경 확장; 아트 종횡비 유지 | FACT |
| WCAG/WebAIM | 본문 80자 메커니즘 / 실무 50–120; 200% 확대 시 가로 스크롤로 한 줄을 읽게 하지 말 것 | FACT |
| Geist | 3중단점에서 열/행 재배치; 가이드 그리드는 의도된 미학일 때만 | FACT |
| Linear | 공개 규칙 없음 | UNKNOWN |

---

## 3. 다크 / 저대비 사각지대

핵심 FACT: **다크 팔레트는 라이트 hex의 단순 반전이 아니다.**

### 3.1 토큰 반전 규칙 (확인된 3분법)

| 자리 | 쓰는 토큰 | 쓰지 말 것 |
|---|---|---|
| 서피스 위 본문 | Apple `label` / M3 `on-surface` / Carbon `$text-primary` / shadcn `foreground` / Radix step 12 / Geist color 10 | 라이트 테마 회색 hex를 그대로 |
| 서피스 위 보조 | `secondaryLabel` / `on-surface-variant` / `$text-secondary` / `muted-foreground` / Radix 11 / Geist 9 | separator를 텍스트로 |
| 채움(primary/버튼) 위 | `on-primary` / `$text-on-color` / Polaris `--p-color-text-on-color` / `primary-foreground` / Radix `--accent-contrast` | `on-surface`를 버튼 글자로 |
| 주변과 반대 대비 섬 | M3 `inverseSurface`/`inverseOnSurface`/`inversePrimary` / Carbon `$text-inverse`/`$background-inverse`/`$link-inverse` / Polaris `--p-color-text-inverse` | 라이트용 흰 50% scrim |
| 테마 불변 악센트 | M3 **fixed / on-fixed** (라이트·다크 동일 톤) — 대비 필요 자리에 쓰면 실패 | fixed를 본문 텍스트로 |

출처: [Apple Dark Mode](https://developer.apple.com/design/human-interface-guidelines/dark-mode) · [Apple Color](https://developer.apple.com/design/human-interface-guidelines/color) · [M3 color roles](https://m3.material.io/styles/color/roles) · [M3 color system](https://m3.material.io/styles/color/system/overview) · [Carbon color](https://carbondesignsystem.com/elements/color/overview/) · [Carbon tokens](https://carbondesignsystem.com/elements/color/tokens/) · [Carbon themes](https://carbondesignsystem.com/elements/themes/overview/) · [Polaris v11 migrate](https://github.com/Shopify/polaris-react-archive/blob/main/documentation/guides/migrating-from-v10-to-v11.md) · [shadcn theming](https://ui.shadcn.com/docs/theming) · [Radix scale](https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale)

### 3.2 뒤집히지 않는 것

- Apple: “many colors are inverted, some are not.” 시맨틱 색을 쓰고 하드코딩 금지.
- Apple `darkText` / `lightText`는 **비적응** 고정 텍스트. [UI element colors](https://developer.apple.com/documentation/uikit/ui-element-colors)
- M3 `surfaceBright` / `surfaceDim`은 상대 밝기 유지(완전 반전 아님).
- M3 `surface-container-*` 역할 이름은 라이트/다크 동일, 톤만 램프.
- Carbon: **역할은 테마 간 불변**, 값만 바뀜. `$text-primary` White=Gray 100 / G100=Gray 10. `$border-strong` Gray 50 → Gray 60 (**단순 반전 아님**). `$link-primary` Blue 60 vs `$link-inverse` Blue 40 `#78a9ff`.
- Radix overlay(black/white alpha)는 테마 불변. 알파 스텝은 페이지 배경 위에서 솔리드와 시각적으로 같게 설계 — 솔리드 hex를 알파로 단순 변환하면 안 됨.
- Geist Color 역할 고정: 1–3 배경, 4–6 보더, 7–8 고대비 배경, 9–10 텍스트/아이콘. P3. [Geist Colors](https://vercel.com/geist/colors)

### 3.3 다크에서 elevation = 더 밝음

- Apple iOS 다크: base(더 어두움) vs elevated(더 밝음). 전경이 앞으로 나와 보이게.
- Carbon 다크: 레이어마다 **한 단계 더 밝아짐**. G100 → layer G90 → G80 → G70. 라이트는 White↔G10 교차. **배경보다 어두운 컴포넌트를 올리지 말 것**(하이컨트라스트 제외).
- M3: 옛 elevation +1…+5 / surfaceTint를 **톤 기반 surface-container**가 대체. lowest → low → container → high → highest.
- shadcn `.dark`: `card`/`popover` oklch 0.205 > `background` 0.145.

**INFERENCE:** 라이트의 “그림자=더 어두움”을 다크에 적용하면 레이어가 배경에 가라앉는다.

### 3.4 헤어라인·디바이더

- M3: `outline` = 중요 경계(필드). `outline variant` = 장식/디바이더. **디바이더에 outline 금지**.
- Carbon: `$border-subtle-*` vs `$border-strong`(3:1).
- Radix: step 6 = 비인터랙티브 헤어라인/세퍼레이터, 7 = 인터랙티브, 8 = 강한 보더/포커스.
- WCAG 1.4.11: 가는 선은 안티앨리어싱으로 **계산 대비는 통과해도 실대비가 더 낮을 수 있음**.
- Polaris v11: `--p-border-divider-on-dark` → `--p-color-border-inverse`.

**INFERENCE:** 라이트 1px `#e0e0e0`를 다크에 가져가면 거의 안 보인다.

### 3.5 상태 레이어 / hover / overlay

- Carbon hover: Black–Gray70이면 **더 밝게**, Gray60–White면 **더 어둡게**(하프스텝).
- Apple clear Liquid Glass: 밝은 콘텐츠 뒤에 **35% 어두운 dimming layer**. [Materials](https://developer.apple.com/design/human-interface-guidelines/materials)
- Carbon `$overlay` White 테마: Black @ 60%. G90/G100 raw 값은 문서가 White 기본만 보여 **UNKNOWN**.
- M3 state-layer opacity: 공식 페이지 본문 미확보 → **UNKNOWN**. 다크=라이트인지도 UNKNOWN.
- WCAG 1.4.11: hover 장식은 상태 식별에 필수가 아니면 3:1이 필수는 아님.

### 3.6 대비 기준 충돌 (승자 없음)

| 소스 | 본문 | UI/그래픽 | 비고 |
|---|---|---|---|
| WCAG 1.4.3 AA | 4.5:1 (large 3:1) | — | **inactive 텍스트는 대비 요구 없음** |
| WCAG 1.4.6 AAA | 7:1 (large 4.5:1) | — | 같은 incidental 예외 |
| WCAG 1.4.11 AA | — | 3:1 | inactive 제외 |
| Apple Dark Mode | 최소 4.5:1, 커스텀·작은 글자 **7:1 목표** | — | FACT |
| M3 color roles | 역할 페어 최소 **3:1** | — | WCAG 본문 4.5:1과 불일치. 둘 다 유지 |
| Carbon a11y | AA 4.5 / large 3 / UI 3 | 3:1 | APCA 언급 없음. [Color a11y](https://carbondesignsystem.com/guidelines/accessibility/color/) |

열어본 Apple / M3 / Carbon / Polaris / Radix / shadcn 공식 페이지 중 **APCA를 채택한다고 쓴 곳은 없음.**

### 3.7 공식 블라인드스팟

1. **Increase Contrast + Dark Mode가 대비를 줄일 수 있다.** Apple HIG가 직접 경고. dark text on dark background.
2. **역할 오용:** separator를 텍스트로, secondaryLabel을 배경으로(Apple). on-surface를 버튼 텍스트로, outline을 디바이더로(M3).
3. **vibrancy 단계:** default(최고 대비) → quaternary(최저). **quaternary를 thin/ultraThin 위에 쓰지 말 것.**
4. **Liquid Glass:** 뒤 콘텐츠가 밝으면 심볼/텍스트를 더 어둡게, 어두우면 더 밝게 단색 적응.
5. **Carbon midtones 회피.** M3 fixed는 테마 불변이라 대비 사고.
6. **disabled:** WCAG는 inactive를 면제. Carbon White는 Gray 100 @ 25%. 법적 통과 ≠ 다크에서 읽힘 — **INFERENCE**.
7. **Polaris:** 현행 공식 색 테이블·전역 다크 모드 1급 지원 여부는 페이지 부재로 **UNKNOWN**. v11 토큰 이름만 on-color / inverse / text 3분법을 확인.

---

## 4. 하네스 규범 + 검증 가능한 체크

각 항목 = **규범 한 문장** + **기계·리뷰가 실패를 재현할 수 있는 체크**.

### 4.1 버튼

1. **규범:** 모든 커스텀 버튼은 default / hover / pressed / focus / disabled / (비동기면) loading을 시각적으로 구분한다.  
   **체크:** 마우스 hover·mousedown·키보드 Tab·`disabled`·제출 중 각각 스크린샷이 서로 다르다. Apple press 없는 고스트 버튼은 실패.

2. **규범:** 히트 영역은 시각 크기와 별도로 최소 44×44 CSS px(pt)이며, 아이콘 버튼도 예외가 아니다.  
   **체크:** 히트박스(패딩 포함) 측정 ≥44. visionOS 타깃이면 ≥60. Carbon xs 24px 시각 높이를 히트 24로 쓰면 실패.

3. **규범:** Primary는 한 뷰에 한 개이고 destructive에 primary/accent를 쓰지 않는다.  
   **체크:** 같은 툴바에 primary 2개 또는 삭제 버튼이 accent fill이면 실패.

4. **규범:** 로딩 중 더블 서브밋이 불가능해야 하고, 포커스 유지 vs disable은 한 시스템 안에서 일관된다.  
   **체크:** 클릭 후 두 번째 클릭이 요청을 보내지 않음. Geist 패턴이면 busy 안내+포커스, Carbon/Polaris 패턴이면 disabled. 두 패턴 혼용은 실패.

5. **규범:** 라벨은 동사·sentence 또는 시스템이 정한 케이스이며 잘리지 않는다.  
   **체크:** “Submit” 대신 “OK”만 있는 파괴 액션, 또는 좁은 폭에서 라벨 ellipsis 없는 overflow는 실패. Carbon이면 라벨 좌정렬·아이콘 우정렬.

6. **규범:** 아이콘+텍스트 간격은 시스템이 정한 최소(M3 8dp, Carbon ≥16px, shadcn gap-2)를 지키고 광학 중심이 기울지 않는다.  
   **체크:** 아이콘 박스 중심과 캡 높이 중심의 오프셋, 갭 측정. 비대칭 코너에서 패딩 좌우가 같으면 M3 optical center 미적용 — 기록만, 기본 off가 스펙.

7. **규범:** iOS/웹에서 풀폭 pill을 화면 가장자리에 붙이지 않는다.  
   **체크:** 버튼 좌우가 safe-area/시스템 마진 안에 있다.

8. **규범:** 포커스 링은 `:focus-visible`(또는 동등)로 키보드에 보이고, 두께·대비가 3:1을 넘긴다.  
   **체크:** 마우스 클릭 후 링이 shadcn 패턴에서 없어야 하고, Tab 후 3px(또는 Carbon inset) 링이 보여야 한다. `outline: none`만 있고 대체 링이 없으면 실패.

9. **규범:** 밀도 변형은 인풋 높이와 페어된다(Carbon 32/40/48).  
   **체크:** sm 버튼+lg 필드처럼 베이스라인이 어긋나면 실패.

10. **규범:** 코너가 연속 곡률을 쓰는 플랫폼(iOS)에서 CSS `border-radius`만으로 하드 서클 조인을 흉내 내지 않는다.  
    **체크:** iOS 타깃이면 Figma smoothing 60% 또는 `continuous` 커브. 웹에서 squircle 미구현이면 과한 슈퍼타원 필터로 깨진 글리프가 없는지.

### 4.2 인풋

11. **규범:** 상태 세트는 최소 enabled / hover / focus / error / disabled / read-only를 구분하고, disabled와 read-only를 같은 회색으로 뭉개지 않는다.  
    **체크:** read-only는 포커스+복사 가능, disabled는 포커스 불가. Carbon 체크리스트와 대조.

12. **규범:** 라벨은 placeholder로 대체하지 않는다.  
    **체크:** 값 입력 후에도 보이는 `<label>`(또는 동등). Polaris “label 없는 text-field = Bad”.

13. **규범:** 검증은 키 입력마다가 아니라 blur(또는 필드 이탈)가 기본이다. 예외는 username/password처럼 이탈 전 피드백이 필요한 경우.  
    **체크:** 첫 글자에서 에러가 뜨면 실패(Geist/Apple).

14. **규범:** 포커스 보더는 기본보다 두껍다(Carbon/M3 1→2dp).  
    **체크:** focus 시 stroke width 증가 또는 링 추가.

15. **규범:** leading 아이콘은 목적, trailing은 클리어/부가 기능. 아이콘 히트는 48dp/44pt.  
    **체크:** 클리어가 leading에 있거나 아이콘 히트 <44면 실패.

16. **규범:** 에러는 색만으로 전달하지 않고 supporting text + `aria-invalid`를 같이 쓴다.  
    **체크:** 보더만 빨강이고 메시지/라이브리전이 없으면 실패.

### 4.3 셀렉트

17. **규범:** 네이티브 `<select>`로 충분한 폼·모바일·짧은 고정 리스트는 커스텀 리스트박스를 만들지 않는다.  
    **체크:** 옵션 <4(또는 Geist <~10)이고 리치 콘텐츠가 없는데 커스텀이면 실패 후보. W3C Rule 1.

18. **규범:** 커스텀 셀렉트는 select-only combobox 키보드를 구현한다 — 열기, typeahead, Home/End(5+), Escape는 값 유지, Enter/Space/Tab만 커밋, 탐색만으로 값 변경 금지.  
    **체크:** 키보드만으로 전 경로. 화살표만으로 onChange가 나며 Escape undo가 없으면 실패.

19. **규범:** DOM 포커스는 트리거/인풋에 남고 옵션은 `aria-activedescendant`(또는 동등 패턴)다. popup은 탭 시퀀스에 넣지 않는다.  
    **체크:** Tab이 옵션을 하나씩 밟으면 실패.

20. **규범:** 옵션에 링크/버튼을 넣지 않는다. 필요하면 Grid.  
    **체크:** listbox option 내부 interactive 존재 여부.

21. **규범:** 열린 메뉴는 “더 있음”을 보여 준다(Carbon: 6번째부터 스크롤, 마지막 옵션 50% 노출).  
    **체크:** 긴 리스트가 잘린 채 스크롤 힌트가 없으면 실패.

22. **규범:** 커스텀 셀렉트가 폼에 있으면 숨은 native 또는 동등 name/value로 제출된다.  
    **체크:** submit 페이로드에 값. Radix 기본 BubbleInput.

23. **규범:** Combobox는 열린 동안 Enter로 바깥 폼을 제출하지 않고, 로딩 중 리스트를 접지 않는다.  
    **체크:** Geist Combobox 규칙.

### 4.4 카드

24. **규범:** 카드 변형(elevated/filled/outlined 또는 ring)을 한 페이지에서 의미 없이 섞지 않고, hover-lift가 스펙에 없으면 넣지 않는다.  
    **체크:** shadcn Card에 무단 translateY, Carbon Tile에 drop-shadow면 실패.

25. **규범:** 클릭 가능 카드는 내부 CTA와 전체 클릭을 동시에 두지 않는다(Carbon Clickable tile).  
    **체크:** 타일 전체 onClick + 내부 버튼.

26. **규범:** 카드 미디어는 고정 종횡비와 본문 패딩을 갖고, 풀블리드 미디어는 패딩을 명시적으로 끈다.  
    **체크:** 이미지 찌그러짐, Polaris section padding none 미사용 풀블리드.

### 4.5 칩

27. **규범:** 칩의 역할(assist/filter/input/suggestion 또는 static/dismiss/select/operational)을 한 컴포넌트에 섞지 않는다. 정적 배지에 onClick을 달지 않는다.  
    **체크:** Geist Badge onClick, Polaris chip을 버튼으로 사용하면 실패.

28. **규범:** 칩 시각 높이 32dp여도 터치 타깃은 48dp다.  
    **체크:** M3 `ensureMinTouchTargetSize`.

29. **규범:** dismiss 포커스는 칩 전체가 아니라 close 아이콘에 갈 수 있어야 하고 hover/focus가 보인다.  
    **체크:** Carbon/Polaris removable.

30. **규범:** 칩이 여러 줄로 폭주하면(Carbon 5줄) 멀티셀렉트 드롭다운으로 접는다.  
    **체크:** 필터 칩 랩 라인 수.

### 4.6 레이아웃

31. **규범:** 본문 줄 길이는 60–80자(CJK 40) 메커니즘을 넘기지 않게 웰을 둔다.  
    **체크:** 1920·2560 뷰포트에서 본문 measure. 전폭 유체 문단은 실패.

32. **규범:** 초광폭에서는 그리드를 무한히 늘리지 않고, Editorial은 중앙 max, Product는 좌측 max, High-density만 2열 추가다.  
    **체크:** 1584/1600 이상에서 컬럼 동작이 세 모델 중 하나와 일치.

33. **규범:** 12(또는 16)열 그리드에 버튼을 전폭으로 늘리지 않는다.  
    **체크:** expanded에서 primary 버튼 max-width.

34. **규범:** 캐러셀은 5장 이하, 컨트롤은 캐러셀 내부, 모바일 자동재생 없음, 5초+ 움직임은 일시정지 가능.  
    **체크:** NN/g + WCAG 2.2.2.

35. **규범:** 마스터-디테일은 compact에서 한 패인만 보이고, expanded에서만 동시. supporting pane 70/30을 list-detail와 혼동하지 않는다.  
    **체크:** 375 / 700 / 1200 폭 세 스냅샷.

36. **규범:** 벤토/피드의 장식 가이드는 `aria-hidden`이고 보더 3:1이다. 읽기 순서가 DOM 순서다.  
    **체크:** Geist Grid.

37. **규범:** 풀블리드 아트와 콘텐츠 웰을 분리한다. 컨트롤·본문은 마진 안, 배경만 가장자리.  
    **체크:** 본문 패딩 0 + 전폭 문단, iOS 전폭 버튼.

38. **규범:** 스크롤 리빌을 본문에 반복하지 않고, 과업 화면에 쓰지 않으며, 한 번만 재생한다.  
    **체크:** 스크롤 업/다운 시 본문이 다시 페이드되면 실패.

### 4.7 다크 / 대비

39. **규범:** 라이트 팔레트 hex를 반전하거나 그대로 다크에 재사용하지 않고, on-surface / on-color / inverse 쌍으로만 칠한다.  
    **체크:** 다크 모드에서 라이트 `$gray-70` 텍스트, primary 버튼 위 `on-surface` 토큰.

40. **규범:** 다크 엘리베이션은 그림자가 아니라 **한 단계 밝은 서피스**다.  
    **체크:** 다크 카드가 배경보다 어둡거나 같은 톤이면 실패.

41. **규범:** 디바이더는 outline/strong이 아니라 subtle/outline-variant이며, 다크에서 1px 연회색이 사라지지 않는지 3:1을 잰다.  
    **체크:** 헤어라인 대 인접 서피스 대비율. 안티앨리어싱 실측.

42. **규범:** disabled는 WCAG 면제여도 다크에서 배경에 녹아 기능을 숨기지 않을 만큼의 대비를 제품이 정한다.  
    **체크:** 비활성 라벨이 배경과 구분되는지(법적 패스와 별도 제품 게이트).

43. **규범:** Increase Contrast / 고대비 모드를 다크에서 켠 뒤 재측정한다.  
    **체크:** Apple이 경고한 dark-on-dark 회귀.

44. **규범:** overlay/scrim은 다크에서 어두운 딤(Apple 35%, Carbon black 60% 참고)이지 흰 반투명가 아니다.  
    **체크:** 모달 뒤 패널이 뜨지 않으면 실패.

45. **규범:** 역할 페어 최소는 M3 3:1 / WCAG 본문 4.5:1 — 본문 텍스트는 4.5를 게이트로 쓴다.  
    **체크:** 본문 4.5, UI 3.0. M3 3:1만 맞추고 본문이 4.5 미만이면 실패.

---

## 5. Fact / Inference / Still-unknown

### Fact (검증 워커 CONFIRM, 또는 열린 1차 원문)

섹션 1–3의 수치·인용 문장. 32개 재검증 항목은 부록 A.

### Inference (출처는 있으나 한 단계 해석)

- shadcn `:focus-visible`만 스타일 ⇒ 마우스 클릭 후 링 숨김.
- Adaptive 180dp 벤토는 초광폭에서 열이 과다해지므로 본문은 max-width가 필요.
- 라이트 회색 `#6f6f6f`를 다크에 재사용하면 4.5:1 붕괴.
- disabled WCAG 면제 ≠ 다크 가독성.
- 라이트 1px `#e0e0e0` 디바이더는 다크에서 소실.
- 라이트 흰 50% scrim은 다크에서 패널을 띄우지 못함.
- Figma 60% smoothing은 Apple 공개 숫자가 아니라 Figma 매핑.
- M3 Expressive 폰/태블릿 버튼도 Wear와 같이 morph+size 확장을 쓸 가능성 — Wear 문서만 직접 확인.
- Airbnb 공개 스펙 부재는 사이트 리다이렉트+2016 에세이만으로 추론한 부재 결론(리다이렉트 자체는 Fact).

### Still-unknown / 죽은 주장

| 항목 | 시도 | 결과 |
|---|---|---|
| M3 웹 스펙 버튼 높이 40dp | m3.material.io specs + CommonButton.md + dimens.xml | 웹 페이지 JS 빈 본문. Android 문서에 40dp 없음. **숫자로 쓰지 않음** |
| M3 state-layer 8/10/12% | m3.material.io states | 본문 미추출 |
| M3 공식 4/8/12열·거터 표 | applying-layout / breakpoints | JS 빈 본문 |
| Apple readable-width pt | HIG Layout / Typography | 원칙만, 숫자 없음 |
| Apple label RGBA | HIG Dark Mode / Color | 단계 이름만 |
| Apple Collections 패딩·미디어 | HIG Collections | JS 벽 |
| Apple Motion / Scroll 수치 | HIG Motion, Scroll views | JS 벽 |
| Carbon 버튼 radius | Button style | 미기재 |
| Carbon g90/g100 overlay raw | themes 패키지 링크 | 404 |
| Polaris 현행 높이·히트·radius·전역 다크 | shopify.dev WC | 미기재 |
| Geist Card 패딩·hover-lift | geist catalog | 미오픈/부재 |
| Linear 컴포넌트 스펙 | linear.app / brand / method / now | 부재 |
| Airbnb 컴포넌트 수치 | airbnb.design | 홈으로 리다이렉트 |
| 대상 DS의 APCA 채택 | 각 색 가이드 | 언급 없음 |
| M3 Expressive 메뉴/카드/칩 델타 | m3 blog/components | JS 빈 본문. get-started에서 15 컴포넌트·35 shape·spring만 확인 |
| Radix Select Home/End 키 표 | Radix docs | Features에 typeahead만 |

**REJECT된 주장:** 없음.  
**PARTIAL:** `airbnb.design` 리다이렉트는 확인, 상태코드 302는 Wayback에만 있고 검증 워커가 헤더를 직접 읽지 못함.

---

## 부록 A — 독립 검증 32항

| # | 주장 | 판정 |
|---|---|---|
| 1 | Apple press state + 44×44 / visionOS 60×60 | CONFIRM |
| 2 | Apple 기본/최소 컨트롤 테이블 | CONFIRM |
| 3 | M3 iconPadding 8dp, optical center 기본 off, small padding 16/24 deprecated | CONFIRM |
| 4 | M3 필드 아이콘 48dp, stroke 1/2, width 245/488, min 56/88 | CONFIRM (너비) |
| 5 | Carbon 라벨 좌·아이콘 우, 높이 24–80, 고정폭 16/64 | CONFIRM |
| 6 | Carbon 인풋 8상태, 32/40/48, fluid 64 | CONFIRM |
| 7 | shadcn v4 h-9, focus-visible ring 3px | CONFIRM |
| 8 | Geist 로딩 포커스 유지 vs Carbon/Polaris disable | CONFIRM |
| 9 | Radix ghost negative margin | CONFIRM |
| 10 | W3C ARIA Rule 1 | CONFIRM (문서 Discontinued Draft) |
| 11 | Carbon native Select vs Dropdown | CONFIRM |
| 12 | shadcn NativeSelect vs Select | CONFIRM |
| 13 | Geist Select ~10 / Combobox 필터 | CONFIRM |
| 14 | M3 Chip 4종, 32/48, corner 8dp | CONFIRM |
| 15 | M3 Card 0/1dp, dragged 8/2dp | CONFIRM |
| 16 | Carbon Tile ≠ card, no elevation, 2:1 | CONFIRM (2:1은 종횡비) |
| 17 | APG select-only 커밋/Escape | CONFIRM |
| 18 | Carbon 2x 8px, pad 16, gutter 32, 중단점, +2열 | CONFIRM |
| 19 | Editorial 중앙 / Product 좌 / HD 전폭 | CONFIRM |
| 20 | Android WSC 600/840/1200/1600 | CONFIRM |
| 21 | Material 코드랩 60자 | CONFIRM |
| 22 | WCAG 1.4.8 80자 (CJK 40) | CONFIRM (AAA, 메커니즘) |
| 23 | NN/g 캐러셀 ≤5, 모바일 자동재생 금지, 컨트롤 내부 | CONFIRM |
| 24 | List-detail expanded only, supporting 70/30·50/50 | CONFIRM |
| 25 | Apple split regular not compact, tvOS 1/3+2/3 | CONFIRM |
| 26 | Apple 비반전, base/elevated, 4.5/7, Increase Contrast 역효과 | CONFIRM |
| 27 | M3 on-* / inverse / surfaceBright·Dim / outline vs variant | CONFIRM |
| 28 | Carbon 다크 레이어 +1 lighter, hover 방향 | CONFIRM |
| 29 | WCAG inactive 대비 면제 | CONFIRM |
| 30 | Figma iOS smoothing 60% | CONFIRM |
| 31 | airbnb.design → airbnb.com | PARTIAL |
| 32 | Linear 브랜드 페이지만, 컴포넌트 스펙 없음 | CONFIRM |

---

## 부록 B — 연 1차 URL

### Apple
- https://developer.apple.com/design/human-interface-guidelines/buttons
- https://developer.apple.com/design/human-interface-guidelines/text-fields
- https://developer.apple.com/design/human-interface-guidelines/accessibility
- https://developer.apple.com/design/human-interface-guidelines/layout
- https://developer.apple.com/design/human-interface-guidelines/pickers
- https://developer.apple.com/design/human-interface-guidelines/menus
- https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons
- https://developer.apple.com/design/human-interface-guidelines/split-views
- https://developer.apple.com/design/human-interface-guidelines/dark-mode
- https://developer.apple.com/design/human-interface-guidelines/color
- https://developer.apple.com/design/human-interface-guidelines/materials
- https://developer.apple.com/design/human-interface-guidelines/collections (JS, 본문 실패)
- https://developer.apple.com/design/human-interface-guidelines/motion (JS)
- https://developer.apple.com/design/human-interface-guidelines/scroll-views (JS)
- https://developer.apple.com/design/human-interface-guidelines/typography (부분)
- https://developer.apple.com/documentation/uikit/ui-element-colors
- https://developer.apple.com/tutorials/data/documentation/swiftui/roundedcornerstyle/continuous.md
- https://developer.apple.com/tutorials/data/documentation/uikit/uicornercurve.md

### Material / Android
- https://raw.githubusercontent.com/material-components/material-components-android/master/docs/components/CommonButton.md
- https://raw.githubusercontent.com/material-components/material-components-android/master/docs/components/TextField.md
- https://github.com/material-components/material-components-android/blob/master/docs/components/Menu.md
- https://github.com/material-components/material-components-android/blob/master/docs/components/Card.md
- https://github.com/material-components/material-components-android/blob/master/docs/components/Chip.md
- https://material-web.dev/components/select/
- https://m3.material.io/styles/color/roles
- https://m3.material.io/styles/color/system/overview
- https://m3.material.io/get-started
- https://m3.material.io/ (Expressive 소개)
- https://developer.android.com/develop/ui/compose/designsystems/material3
- https://developer.android.com/design/ui/wear/guides/get-started/apply
- https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes
- https://developer.android.com/develop/ui/compose/layouts/adaptive/canonical-layouts
- https://developer.android.com/codelabs/adaptive-material-guidance
- m3.material.io 컴포넌트 specs/guidelines 다수 — 본문 미추출

### Carbon
- https://carbondesignsystem.com/components/button/usage/
- https://carbondesignsystem.com/components/button/style/
- https://carbondesignsystem.com/components/text-input/usage/
- https://carbondesignsystem.com/components/text-input/style/
- https://carbondesignsystem.com/components/dropdown/usage/
- https://carbondesignsystem.com/components/select/usage/
- https://carbondesignsystem.com/components/tile/usage/
- https://carbondesignsystem.com/components/tag/usage/
- https://carbondesignsystem.com/elements/2x-grid/overview/
- https://carbondesignsystem.com/elements/2x-grid/usage/
- https://carbondesignsystem.com/elements/color/overview/
- https://carbondesignsystem.com/elements/color/tokens/
- https://carbondesignsystem.com/elements/themes/overview/
- https://carbondesignsystem.com/guidelines/accessibility/color/

### Polaris / Shopify
- https://shopify.dev/docs/api/app-home/polaris-web-components/actions/button
- https://shopify.dev/docs/api/app-home/web-components/forms/text-field
- https://shopify.dev/docs/api/app-home/web-components/forms/select
- https://shopify.dev/docs/api/app-home/web-components/typography-and-content/chip
- https://shopify.dev/docs/api/app-home/web-components/actions/clickable-chip
- https://shopify.dev/docs/api/app-home/web-components/feedback-and-status-indicators/badge
- https://shopify.dev/docs/api/app-home/web-components/layout-and-structure/section
- https://shopify.dev/docs/api/app-home/web-components/layout-and-structure/grid
- https://shopify.dev/docs/api/polaris/using-polaris-web-components
- https://shopify.dev/docs/apps/design/layout
- https://shopify.dev/docs/apps/build/customer-accounts/ux
- https://shopify.github.io/polaris-react-archive/components/actions/button
- https://github.com/Shopify/polaris-react-archive/blob/main/documentation/guides/migrating-from-v10-to-v11.md

### Geist / Vercel
- https://vercel.com/geist/introduction
- https://vercel.com/geist/button
- https://vercel.com/geist/input
- https://vercel.com/geist/select
- https://vercel.com/geist/combobox
- https://vercel.com/geist/badge
- https://vercel.com/geist/colors
- https://vercel.com/geist/typography
- https://vercel.com/geist/grid
- https://vercel.com/font
- https://github.com/vercel/geist-font/blob/main/readme.md

### Radix / shadcn
- https://www.radix-ui.com/themes/docs/components/button
- https://www.radix-ui.com/themes/docs/components/text-field
- https://www.radix-ui.com/primitives/docs/components/select
- https://www.radix-ui.com/primitives/docs/components/checkbox
- https://www.radix-ui.com/primitives/docs/components/form
- https://www.radix-ui.com/primitives/docs/guides/composition
- https://www.radix-ui.com/primitives/docs/guides/styling
- https://www.radix-ui.com/primitives/docs/overview/releases
- https://www.radix-ui.com/themes/docs/theme/color
- https://www.radix-ui.com/themes/docs/theme/dark-mode
- https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale
- https://ui.shadcn.com/docs/components/base/button
- https://ui.shadcn.com/docs/components/base/input
- https://ui.shadcn.com/docs/components/base/select
- https://ui.shadcn.com/docs/components/base/native-select
- https://ui.shadcn.com/docs/components/base/card
- https://ui.shadcn.com/docs/components/base/badge
- https://ui.shadcn.com/docs/theming
- https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/v4/registry/new-york-v4/ui/button.tsx
- https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/v4/registry/new-york-v4/ui/input.tsx

### W3C / a11y / NN/g / Figma
- https://www.w3.org/TR/using-aria/#rule1
- https://www.w3.org/WAI/ARIA/apg/patterns/combobox/
- https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
- https://www.w3.org/WAI/ARIA/apg/patterns/listbox/
- https://www.w3.org/TR/WCAG22/
- https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
- https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html
- https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html
- https://webaim.org/techniques/textlayout/
- https://webaim.org/standards/wcag/checklist
- https://www.nngroup.com/articles/designing-effective-carousels/
- https://www.nngroup.com/articles/auto-forwarding/
- https://www.nngroup.com/articles/scroll-animations/
- https://help.figma.com/hc/en-us/articles/360050986854-Adjust-corner-radius-and-smoothing
- https://www.figma.com/blog/desperately-seeking-squircles/
- https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations

### Linear / Airbnb
- https://linear.app/docs
- https://linear.app/brand
- https://linear.app/now/how-we-redesigned-the-linear-ui
- https://linear.app/method/manage-design-projects
- https://airbnb.design (→ airbnb.com)
- https://web.archive.org/web/2024/https://airbnb.design/
- https://web.archive.org/web/20240516053655/https://airbnb.design/the-way-we-build/
- https://medium.com/airbnb-design/building-a-visual-language-behind-the-scenes-of-our-airbnb-design-system-224748775e4e
- https://karrisaarinen.com/dls/

---

## 부록 C — 프로덕션 vs AI 생성, 한 장 요약

AI가 그리는 컴포넌트가 빠뜨리는 것은 스타일 토큰이 아니라 아래 미시다.

1. **상태 전수** — Carbon 인풋 8상태, Apple press, 로딩 중 disable vs focus 유지.
2. **히트 ≠ 시각** — 32dp 칩 / 24px 버튼 위에 44–48 타깃.
3. **광학** — Carbon 좌라벨·우아이콘, Radix ghost 네거티브 마진, M3 optical center, Linear가 에세이에서만 인정한 정렬.
4. **코너** — 연속 곡률 vs `border-radius`. 60%는 Figma, Apple API는 `continuous`.
5. **네이티브 먼저** — Rule 1, Carbon/shadcn/Geist의 select 분기.
6. **커스텀이면 APG 키보드 전부** — 탐색≠커밋, Escape undo, typeahead, activedescendant.
7. **focus-visible** — `outline: none` 뒤에 링이 있어야 하고, 버전마다 ring-1 vs 3px.
8. **밀도 페어** — 버튼·필드 높이를 같은 스케일로.
9. **초광폭 웰** — 본문 60–80자, 그리드 max, 버튼 비유체.
10. **다크는 역할 페어** — on-surface / on-color / inverse. elevation은 밝아짐. 헤어라인은 variant. hex 반전 금지.

이 10개가 하네스 게이트의 최소 집합이다. Linear·Airbnb·M3 웹 스펙 표는 공개 공백이므로 게이트 숫자로 승격하지 않는다.
