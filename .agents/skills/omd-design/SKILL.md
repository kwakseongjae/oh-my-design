---
name: omd:design
description: "사용자와 대화하며 디자인 선호도를 파악하고, oh-my-design 서베이를 통해 DESIGN.md를 생성합니다. '디자인 시스템 만들어줘', 'DESIGN.md 생성', '디자인 잡아줘', 'UI 스타일 정해줘' 등 디자인 시스템 구성이 필요할 때 트리거됩니다."
---

# omd:design — Design System Builder via Survey

사용자의 프로젝트 맥락과 디자인 선호를 파악하여 oh-my-design.kr 서베이로 안내하고, 결과를 받아 DESIGN.md를 생성한다.

## 전체 플로우

```
Phase 1: 대화 분석 → 레퍼런스 후보 추림
Phase 2: oh-my-design.kr/survey 로 안내 → 사용자가 서베이 완료
Phase 3: OMD 결과 코드 수신 → DESIGN.md 생성
```

## Phase 1: 대화 분석 및 레퍼런스 추천

### Step 1: 프로젝트 맥락 파악

사용자에게 다음을 자연스럽게 물어본다 (이미 대화에서 언급된 내용은 스킵):

1. **프로젝트 유형**: "어떤 프로젝트인가요?" (SaaS, 랜딩, 대시보드, 이커머스 등)
2. **분위기 키워드**: "어떤 느낌을 원하세요?" (깔끔한, 따뜻한, 대담한, 미니멀 등)
3. **참고하는 서비스**: "좋아하는 서비스나 웹사이트 있으세요?" (선택적)
4. **타겟 사용자**: 개발자, 일반 사용자, B2B 등 (선택적)

**중요**: 질문은 1-2개로 줄이되, 핵심 정보를 얻어야 한다. 사용자가 이미 충분한 맥락을 줬다면 바로 추천으로 넘어간다.

### Step 2: 레퍼런스 후보 추천

REFERENCE_TAGS.md를 참고하여 3-6개의 레퍼런스를 추천한다.

출력 형식:

```
프로젝트 성격을 분석해보니, 이런 디자인 시스템들이 잘 맞을 것 같습니다:

1. **Vercel** — 미니멀하고 엔지니어링 감성, 깔끔한 다크/라이트
2. **Linear** — 정밀한 다크 모드, 개발 도구 느낌
3. **Stripe** — 프리미엄 핀테크, 정교한 그라데이션

서베이에서 이 중 하나를 고르고, 세부 취향을 조정하게 됩니다.
```

### Step 3: 서베이 URL 생성 및 안내

추천한 레퍼런스 ID 목록으로 서베이 URL을 생성한다:

```
https://oh-my-design.kr/survey?refs=vercel,linear.app,stripe
```

사용자에게 안내:

```
아래 링크에서 서베이를 진행해주세요:
https://oh-my-design.kr/survey?refs=vercel,linear.app,stripe

레퍼런스를 하나 고르고, 11가지 디자인 선호도를 선택하면 됩니다.
완료되면 결과 코드(OMD-...)가 나옵니다. 그걸 여기에 붙여넣어주세요.
```

## Phase 2: 서베이 대기

사용자가 서베이를 완료하고 `OMD-...` 코드를 붙여넣을 때까지 대기한다.

- `OMD-`로 시작하는 입력을 받으면 Phase 3로 진행
- 서베이 도중 질문이 오면 도움말 제공

## Phase 3: DESIGN.md 생성

### Step 1: 결과 디코딩

OMD 코드는 base64url 인코딩된 JSON이다:

```typescript
{
  refId: string,           // 선택한 레퍼런스 ID
  overrides: {
    primaryColor: string,  // 선택한 primary color
    fontFamily: string,
    headingWeight: string,
    borderRadius: string,
    darkMode: boolean
  },
  preferences: {
    typographyChar: string,   // "geometric" | "humanist" | "monospace"
    buttonStyle: string,      // "sharp" | "rounded"
    inputStyle: string,       // "bordered" | "underline"
    headerStyle: string,      // "glass" | "solid"
    cardStyle: string,        // "bordered" | "elevated"
    depthStyle: string,       // "flat" | "layered"
    density: string,          // "compact" | "spacious"
    saturation: string,       // "muted" | "vivid"
    mood: string              // 현재 미사용
  },
  components: string[]
}
```

디코딩 방법:
```bash
echo "OMD-코드" | sed 's/^OMD-//' | base64 -d
```

### Step 2: oh-my-design CLI로 DESIGN.md 생성

디코딩한 결과에서 refId와 overrides를 추출하여 CLI를 실행한다:

```bash
cd /Users/kwakseongjae/Desktop/projects/oh-my-design
npx tsx bin/oh-my-design.ts generate --config=<config-hash>
```

config-hash는 기존 format: `refId|primaryColor|fontFamily|headingWeight|borderRadius|darkMode|components`를 base64url 인코딩한 것이다.

또는 프로그래밍적으로:

```typescript
import { decodeConfig } from './src/lib/core/config-hash';
// OMD 코드를 디코딩하여 config-hash 형식으로 변환
```

### Step 3: Preferences 유기적 반영

생성된 DESIGN.md에 서베이 preferences를 반영한다. **레퍼런스 원문에서 preference와 다른 부분만 수정/추가한다.**

#### preference → DESIGN.md 섹션 매핑

| preference | 반영 대상 섹션 | 반영 방법 |
|---|---|---|
| typographyChar | §3 Typography Rules | Font Family의 성격 설명 조정 |
| buttonStyle | §4 Component Stylings > Buttons | radius 값 및 설명 조정 |
| inputStyle | §4 Component Stylings > Inputs | border 스타일 설명 조정 |
| headerStyle | §4 Component Stylings > Navigation | glass/solid 설명 추가 |
| cardStyle | §4 Component Stylings > Cards | border vs shadow 스타일 조정 |
| depthStyle | §6 Depth & Elevation | shadow 시스템 전체 조정 |
| density | §5 Layout Principles | spacing scale 조정 |
| saturation | §2 Color Palette | 채도 가이드라인 추가 |

#### 반영 규칙

1. **레퍼런스와 일치하는 preference는 건드리지 않는다** — 이미 맞으니까
2. **다른 preference만 해당 섹션에 커스터마이즈 노트를 추가한다**
3. **Do's and Don'ts (§7)에 preference 기반 가이드라인을 추가한다**

예시 — depthStyle이 "flat"인데 레퍼런스가 shadow를 많이 쓰는 경우:

§6 Depth & Elevation 끝에 추가:
```markdown
### Customization: Flat Design Preference
This project prefers **flat design**. Override the shadow system above:
- Use `box-shadow: none` as the default for all components
- Use borders (`1px solid var(--border)`) for element separation
- Reserve shadows only for modals and dropdowns (elevation level 3+)
```

§7 Do's and Don'ts에 추가:
```markdown
- DO: Use borders and background color shifts for visual hierarchy
- DON'T: Apply decorative shadows to cards and buttons
```

### Step 4: 파일 저장 및 안내

생성된 DESIGN.md를 프로젝트 루트에 저장한다:

```bash
# 프로젝트 루트에 저장
write DESIGN.md
```

사용자에게 결과 요약:

```
DESIGN.md를 생성했습니다.

기반 레퍼런스: Vercel
커스터마이즈:
- Primary Color: #533afd → #2563eb
- Depth: layered → flat (border 기반으로 변경)
- Buttons: rounded (pill shape)
- Dark Mode: 포함

파일: ./DESIGN.md
```

## 주의사항

- **Zero AI call**: DESIGN.md 생성은 모두 로컬에서 deterministic하게 처리
- **기존 /builder 와 독립**: /survey 라우트는 별도 파이프라인
- **서베이 URL 도메인**: 항상 `oh-my-design.kr` 사용
- **OMD 코드 접두사**: `OMD-`로 시작하는 입력만 결과 코드로 인식
- **레퍼런스 ID에 점(.) 포함 가능**: linear.app, mistral.ai, x.ai 등 — URL 인코딩 주의
