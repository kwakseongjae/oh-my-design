# `/brand-look` 설계: 실측 레퍼런스로 테마를 뽑고, 4폭에서 재고, 같은 화면 × 5 브랜드로 보여 준다

2026-11-09 · 상태: **설계(출하 아님)** · 브랜치 `feat/brand-look`

근거
- `docs/research/2026-11-06-skill-trends.md` §R3: W2를 승자의 모양으로 다시 짠다. 명령 하나로 검증 레퍼런스에서 테마를 뽑고, 실제 브라우저에서 1440·1024·768·390으로 렌더하고, 규칙별 PASS/FAIL을 낸다.
- `docs/GROWTH_PLAN_2026-09-29.md` 315행 W2 "우리 앱을 토스·당근·배민·Linear·애플 룩으로, 실측한 값으로". 증거물은 같은 화면 × 5 브랜드 그리드다. 348행의 런칭 문구는 "기본 버튼의 높이와 라운드, 실측값으로"다.

프로토타입: `skills/omd-brand-look/scripts/tokens.mjs`. DESIGN.md 하나를 읽어 shadcn 토큰 블록을 출력한다. 렌더는 하지 않는다. 공개 스킬로 등록하지 않았으므로 `package.json`이나 count 표면은 바꾸지 않는다. §3의 출력은 모두 이 스크립트를 실제로 돌린 결과다.

---

## 0. 결정 요약

| # | 결정 | 이유 |
|---|---|---|
| D1 | 원천은 `verified_v2`만 쓴다(597곳 중 427곳). partial·legacy는 이유를 붙여 거부한다 | `query-references.mjs`의 `policyFor`에서 verified_v2만 `evidence-qualified-fields-only`다 |
| D2 | npm이 싣는 `DESIGN.md` frontmatter만 읽는다. 해석 순서는 omd-init §4.1을 그대로 따른다 | `reference.json`은 `package.json` "files"에 없다. 427곳의 frontmatter `colors`·`rounded` 7,018개가 모두 claim graph에 있음을 확인했다(§1) |
| D3 | 역할 배정은 홈 "같은 화면" 섹션의 리졸버(`web/src/lib/landing-a/resolve.ts`) 키 목록을 그대로 쓴다. 빈 슬롯은 **생략**해서 사용자 값을 남기고 목록에 적는다 | 웹과 스킬이 같은 브랜드를 같은 색으로 그린다. `journey/model.ts`의 `omitted` 방식과 같다 |
| D4 | 프리뷰는 사용자 소스를 건드리지 않는다. 브랜드마다 `:root:root { … }` 블록을 끼운 사본 HTML을 만든다 | 기존 검사기 4개가 파일 경로를 받으므로 **수정 없이** 재사용된다 |
| D5 | 검사기는 재사용 넷에 신규 둘을 더한다. 신규는 팔레트 충실도와 폰트 충실도다 | 특정 레퍼런스 토큰 집합에 속하는지, 그린 서체가 라벨과 맞는지를 재는 기존 규칙이 없다 |
| D6 | FAIL을 출처별로 나눈다: **inherited**(레퍼런스 자신의 쌍) / **mapping**(우리 배정이 만든 쌍) / **layout**(서체 교체로 생긴 줄바꿈·넘침). 고침은 선언된 값 사이의 역할 재배정 *제안*으로만 낸다 | 실측값을 고치면 지어낸 값이 된다. verified 257곳 중 90곳은 on-primary/primary 쌍부터 4.5:1에 못 미친다 |
| D7 | 그리드는 정적 HTML 하나에 PNG를 모아 한 번 찍는다. 로고와 브랜드 카피는 넣지 않는다 | 새 의존성 없이 `showcase.mjs --compare`와 같은 방식이다. 브랜드 마크 저작권을 피한다 |
| D8 | MVP는 출하 샘플 화면 × W2 다섯 × 4폭이다. 사용자 HTML, dev 서버 URL, 컴포넌트 기하(버튼 높이)는 나중에 붙인다 | 1–2일 안에 그리드와 PASS/FAIL 표가 실제로 나와야 한다 |

---

## 1. 약속, 그리고 아닌 것

**한 줄 약속.** `/omd-brand-look --sample toss,karrot,baemin,linear.app,apple`: 화면 하나를 실측 검증된 실제 회사 5곳의 토큰으로 다시 칠한다. 1440·1024·768·390에서 렌더해 규칙별 PASS/FAIL을 내고, 같은 화면 × 5 브랜드 그리드를 만든다.

**아닌 것**
- **테마 생성기가 아니다.** 팔레트, 중간 톤, hover 색을 지어내지 않는다. 출력하는 값은 모두 레퍼런스 frontmatter에 선언된 값이고, 줄마다 출처 경로를 주석으로 단다(`/* colors.canvas */`).
- **브랜드 복제가 아니다.** 로고, 워드마크, 일러스트, 브랜드 카피는 렌더하지 않는다. registry의 `logo` 필드는 읽지도 않는다. 바뀌는 것은 색, 라운드, 서체 패밀리(=룩)뿐이다. 간격과 컴포넌트 기하는 나중 단계다(§6 L3).
- **DESIGN.md 부트스트랩이 아니다.** 그 일은 omd-init이 맡는다. brand-look은 고르기 전에 비교해 보는 도구이고, 채택은 omd-init/omd-apply로 넘긴다(§7 Q6).
- **컴포넌트 라이브러리를 브랜드로 쓰지 않는다.** 원천은 catalog에 있는 verified_v2 레퍼런스뿐이다. 카탈로그 입장 규칙(AGENTS.md "A component library is not a brand reference")을 이미 통과한 것들이다.

**원천: verified_v2만.** `data/reference-quality.json` 기준 427 verified_v2, 89 partial, 81 legacy_snapshot이다. partial이나 legacy id가 들어오면 exit 3을 내고 `status partial; /brand-look draws only from verified_v2 references`라고 알린다. 프로토타입에서 확인했다. W2 다섯(toss, karrot, baemin, linear.app, apple)은 모두 verified_v2다.

**frontmatter만 읽어도 되는 근거.** verified_v2 427곳 전부에서 frontmatter `colors`·`rounded` 키 7,018개를 `reference.json` `verification_v2.claims`와 대조했다. claim이 없는 키는 0개였다. 그러니 npm이 싣는 `web/references/*/DESIGN.md`만 읽어도 claimed 값만 나온다. 이 불변식은 catalog-integrity 테스트가 지켜야 한다. 지금 그 테스트가 지키고 있는지는 확인하지 않았다(§6 위험).

**폰트(G3, owner decision 2026-10-13).** 경우는 넷이고, 넷 모두 라벨이 따라다닌다.

| 경우 | 판별(frontmatter) | brand-look이 하는 일 | W2 다섯 | verified 427곳 분포(프로토타입 실측) |
|---|---|---|---|---|
| A. 브랜드 서체가 공개 배포 | `fonts.faces.<F>.distribution: public` | 그 서체 자체를 로드한다. 라벨 "brand face" | linear.app(Inter, OFL-1.1) | 5 |
| B. 비공개 + 측정된 대체 | `fonts.faces.<F>.substitutes.<script>` | 브랜드 이름은 스택 맨 앞에 메타데이터로 남기고, 대체를 로드하고, "substitute — not the brand face" 라벨을 붙인다. 대체가 Google이 아니면 그 스크립트의 `safeDefaults`를 뒤에 붙인다 | toss(IBM Plex Sans / Pretendard Variable) | 1 (+linear.app 모노) |
| C. OS 시스템 패밀리 | `fonts.roles.*: System` | `system-ui, sans-serif`로 둔다. 라벨 "brand UI face: the OS system family (per reference)" | karrot | 2 |
| D. 비공개 + 대체 없음 | 위 어느 것도 아님(`Substitute: none chosen`) | 브랜드 이름을 맨 앞에 두고 per-script 안전 기본값(Noto Sans KR/JP/TC/SC, Noto Sans)을 로드한다. 라벨 "safe default (not the brand face)" | **baemin**(BAEMINWORK), **apple**(SF Pro Text) | 323 |
| — | `fonts.roles` 없음 | `--font-sans`를 생략한다(사용자 서체 유지) | — | 96 |

W2 다섯 중 둘(baemin, apple)은 그리드에서 **Noto Sans KR**로 그려진다. 캡션에 "safe default (not the brand face)"가 반드시 붙는다. D 323곳 중에는 Pretendard(20곳), Inter(18곳), Noto Sans JP(8곳)처럼 실제로는 공개 서체인데 `faces` 메타데이터가 없어서 D로 떨어진 곳이 섞여 있다. 정확한 이름으로 공개 서체 목록을 조회하는 일은 나중 단계로 둔다(§6 L6). 그 전까지는 보수적인 라벨이 맞다(unknown means absent).

---

## 2. 명령 모양

```
/omd-brand-look <target> [<id>,<id>,… | --pick 5 --task "<설명>"] [--widths 1440,1024,768,390]
                [--format auto|hex|hsl] [--lang ko|ja|zh-TW|zh-CN|en] [--out .omd/brand-look/<run-id>]
```

**입력**
- `target`
  - `--sample`(MVP): 출하 샘플 화면 `skills/omd-brand-look/examples/sample.html`. shadcn 변수 구조이고 한·영 카피가 섞였으며, 버튼(주·보조·위험), 입력, 카드, 배지, 목록, 포커스 상태가 들어 있다.
  - HTML 파일(MVP+1): 사용자가 렌더한 페이지 파일.
  - dev 서버 URL(나중): §6 L2.
- 브랜드
  - 명시 id 목록.
  - `--pick 5 --task "<설명>"`: `skills/omd-init/scripts/query-references.mjs --task … --limit 10`을 돌린 뒤 **`status === 'verified_v2'`로 하드 필터**한다. 이 스크립트는 verified를 앞에 세우지만 partial·legacy도 돌려준다. 필터 뒤 위에서 5개를 고르되, primary 색상(hue) 30° 구간이 겹치는 것은 건너뛴다. 남는 것이 5개 미만이면 그 수만큼만 낸다. 채워 넣지 않는다.
  - 기본값: W2 다섯.

**출력**(사용자 소스는 바꾸지 않는다)

```
.omd/brand-look/<run-id>/
  run.json                    # 입력, 브랜드, 폭, 브라우저 엔진, 레퍼런스 경로와 verified_at
  baseline/  shots/<w>.png    # 테마를 바꾸기 전 원본 (restraint FYI도 여기서 1회)
  <id>/
    tokens.css                # tokens.mjs 출력: :root:root 블록 + @import + 라벨·omitted·contrast 주석
    tokens.json               # 같은 내용의 기계용 (slots, radius, pillButton, font, omitted, contrast)
    index.html                # target 사본 + <style data-omd-brand-look> (</head> 직전, 마지막)
    shots/<w>.png             # 첫 뷰포트, 4폭
    checks.json               # C1–C6 원자료
  grid.html / grid.png        # 행 = 브랜드, 열 = 폭
  threads/01-390x5.png …      # 1080×1350 카드 (§5)
  report.md / report.json     # 브랜드 × 규칙 × 폭 PASS/FAIL 표, FAIL 출처(inherited/mapping/layout), 재배정 제안
```

**단계**
1. 레퍼런스를 해석한다. 순서는 omd-init §4.1 1→6을 그대로 쓴다(`test/unit/core/catalog-resolution-order.test.ts`가 지키는 순서이니 새 경로를 지어내지 않는다).
2. 품질 게이트(D1)를 통과시킨다.
3. `tokens.mjs`로 매핑한다(§3).
4. 브랜드별 사본을 만든다(D4).
5. 4폭에서 찍고 검사기를 돌린다(§4).
6. 그리드와 보고서를 만든다.

---

## 3. 토큰 매핑: reference DESIGN.md → 사용자 CSS

### 원칙
1. **값은 선언된 것만 쓴다.** 슬롯에 들어가는 값은 frontmatter `colors.*`·`rounded.*`·`components.*.*`·`typography.body.fontFamily`에 있는 문자열 그대로다. 형식 변환(hex → HSL 채널)은 값을 바꾸지 않는다.
2. **역할은 resolve.ts 키 목록으로 고른다.** `CANVAS_KEYS`, `FG_KEYS`, `PRIMARY_KEYS`, `SURFACE_COLOR_KEYS`, `META_KEYS`, `LINE_KEYS`를 순서대로 찾고, 처음 선언된 키가 이긴다. 프로토타입은 이 목록을 복사해 쓰므로 drift 테스트가 필요하다(§6 L7). brand-look 전용 목록은 `ON_PRIMARY_KEYS`, `DANGER_KEYS`, `RING_KEYS`, `RADIUS_KEYS`, `FACE_ROLE_KEYS`다.
3. **비면 생략한다.** 슬롯을 채울 선언 키가 없으면 그 변수를 쓰지 않는다. 그러면 사용자 테마의 값이 남는다. `/* omitted, your theme keeps: … */`와 그리드 캡션에 개수를 적는다.
4. **evidence domain을 섞지 않는다.** `corporate-*`처럼 다른 표면을 가리키는 접두사 키는 역할 목록에 없으므로 자연히 생략된다. toss의 `weak-background`/`weak-foreground`는 DESIGN.md가 "Marketing-web roles"로 분리해 둔 값이라 제품 `--secondary`에 쓰지 않는다.

### 주입 방식
`:root:root { --primary: … }`. 특이도가 (0,2,0)이라 사용자 `globals.css`의 `:root`(0,1,0)를 순서와 무관하게 이긴다. shadcn v4(`@theme inline { --color-primary: var(--primary) }`)와 v3(`hsl(var(--primary))`) 모두 이 변수 하나로 바뀐다. MVP는 dark 블록을 만들지 않는다. `:root:root`는 `.dark { --primary }`(0,1,0)도 이기므로, dark 모드인 페이지에도 light 토큰이 그대로 들어간다(§6 L5).

### 형식 감지(`--format auto`)
- `components.json`이 있고 `globals.css`의 `--primary` 값이 `222.2 47.4% 11.2%` 같은 맨 HSL 채널이면 → `hsl`(v3).
- `oklch(…)`이거나 hex이면 → `hex`(v4). 변수가 `var()`로 소비되므로 hex가 그대로 동작한다.
- Tailwind 설정이 `theme.extend.colors`에서 리터럴 hex를 쓰고 CSS 변수를 쓰지 않으면, 주입으로는 바뀌지 않는다. 이 경우를 보고하고 C5에서 누수로 잡는다.
- 참고: `scripts/ctx-prime.cjs`의 `has_shadcn`은 `@shadcn/ui` 의존성으로 판별하는데, shadcn은 의존성이 아니라 `components.json`으로 드러난다. 감지는 이 파일로 한다.

### 슬롯 표(shadcn)

| 슬롯 | 찾는 순서(처음 선언된 것) |
|---|---|
| `--background`, `--popover` | `colors.` CANVAS_KEYS |
| `--foreground`, `--card-/popover-/secondary-/accent-foreground` | `colors.` FG_KEYS |
| `--card` | `components.<type: card>.backgroundColor`(hex) → `colors.` SURFACE_COLOR_KEYS |
| `--primary` | `colors.` PRIMARY_KEYS → 첫 `brand-*` → 첫 `*-action`(resolve.ts와 같다) |
| `--primary-foreground` | `colors.` on-primary, primary-foreground, on-brand, on-accent, on-action → 주 버튼 `textColor` |
| `--secondary`, `--muted`, `--accent` | `colors.` SURFACE_COLOR_KEYS(shadcn accent는 hover 면이지 브랜드 액센트가 아니다) |
| `--muted-foreground` | `colors.` META_KEYS |
| `--destructive` | `colors.` danger, error, destructive, negative, critical |
| `--border`, `--input` | `colors.` LINE_KEYS |
| `--ring` | 주 버튼 `focus`의 첫 hex → `colors.` focus, focus-ring, ring |
| `--radius` | 아래 규칙 |
| `--radius-ref-<key>` | `rounded.*` 전부 그대로(참조용, shadcn은 읽지 않음) |
| `--font-sans` | 아래 규칙 |

"주 버튼"은 `type: button`이면서 `backgroundColor`가 `--primary`와 같은 컴포넌트다. 없으면 이름에 `primary`가 들어간 버튼을 쓴다.

**`--radius` 규칙.** shadcn은 v3·v4 모두 버튼·입력을 `rounded-md = calc(var(--radius) - 2px)`로 그린다. 그래서 `--radius: calc(<선언값> + 2px)`로 두면 `rounded-md`가 선언값 그대로 렌더되고, 선언값 숫자도 출력에 그대로 보인다. 선언값은 다음 순서로 고른다.
1. 주 버튼의 `rounded`. 높이가 48px 이하이고 pill이 아닐 때만 쓴다.
2. 그다음 `rounded.` button-medium, button, control, product-control, corporate-control, md.

`sm`·`lg`·`xl`은 shadcn 오프셋에서 나오는 값이므로 브랜드 값이 아니다. C5에서 "derived (shadcn offset)" WARN으로 표시한다.

**pill 가드.** 반경이 높이의 절반 이상이거나 999px 이상이면 `--radius`로 쓰지 않는다. 그러면 입력, 메뉴, 카드까지 pill이 되기 때문이다. `/* buttons · … is a pill */`로 보고하고, 버튼에 `rounded-full`을 주는 일은 컴포넌트 단계로 넘긴다. apple(980px)과 linear.app(9999px)이 여기에 걸린다. 가드를 넣기 전 프로토타입은 apple에서 `--radius: calc(980px + 2px)`를 냈고, 그 결과로 가드를 추가했다.

**`--font-sans` 규칙.** §1 표의 A–D에 따른다. 스택은 `typography.body.fontFamily`가 있으면 그것을 그대로 쓴다. B에서 대체 서체가 `provider: other`(설치를 보장하지 않음)이면 그 스크립트의 `fonts.safeDefaults`를 generic 앞에 넣고 Google Fonts로 로드한다. 이게 없으면 Hangul이 OS 서체로 라벨 없이 그려진다(G3 위반). Google Fonts URL은 `provider: google`인 패밀리와 Noto 안전 기본값에만 만든다.

### 실례 1: toss (B 경우)

읽은 위치는 `web/references/toss/DESIGN.md`다.
- `colors.primary` 5행, `canvas` 7행, `foreground` 8행, `body` 9행, `muted` 10행, `surface` 11행, `border` 12행, `on-primary` 13행, `danger` 16행
- `typography.body` 118–122행(fontFamily 122행)
- `rounded` 188–194행(`md` 190행, `button-medium` 192행)
- `components.tds-button` 203–214행(`focus` 212행)
- `fonts` 247–275행(`substitutes` 259행, `safeDefaults` 271–275행)
- 서체 대체의 측정 근거는 본문 §Typography "Brand face, substitute, safe default"(396–400행)다. 2026-10-20 측정값은 Latin x-height 0.739 대 0.731, Hangul 자면 0.846 대 0.852다.

`node skills/omd-brand-look/scripts/tokens.mjs toss` 출력(`--radius-ref-button-*` 4줄 생략):

```css
/* omd-brand-look · toss · web/references/toss/DESIGN.md · verified_v2 2026-07-11 */
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;600;700&display=swap");
:root:root {
  --background: #ffffff; /* colors.canvas */
  --foreground: #191f28; /* colors.foreground */
  --card: #f2f4f6; /* colors.surface */
  --card-foreground: #191f28; /* colors.foreground */
  --popover: #ffffff; /* colors.canvas */
  --popover-foreground: #191f28; /* colors.foreground */
  --primary: #3182f6; /* colors.primary */
  --primary-foreground: #ffffff; /* colors.on-primary */
  --secondary: #f2f4f6; /* colors.surface */
  --secondary-foreground: #191f28; /* colors.foreground */
  --muted: #f2f4f6; /* colors.surface */
  --muted-foreground: #8b95a1; /* colors.muted */
  --accent: #f2f4f6; /* colors.surface */
  --accent-foreground: #191f28; /* colors.foreground */
  --destructive: #e42939; /* colors.danger */
  --border: #e5e8eb; /* colors.border */
  --input: #e5e8eb; /* colors.border */
  --ring: #8ac0ff; /* components.tds-button.focus */
  --radius: calc(10px + 2px); /* rounded-md renders 10px = rounded.button-medium; sm/lg/xl are shadcn offsets */
  --radius-ref-sm: 4px; /* rounded.sm */
  --radius-ref-md: 6px; /* rounded.md */
  --font-sans: Toss Product Sans, IBM Plex Sans, Pretendard Variable, "Noto Sans KR", sans-serif; /* typography.body.fontFamily + fonts.safeDefaults.hangul */
}
/* font · brand face: Toss Product Sans, not installable (distribution: none-asserted); kept first in the stack as metadata */
/* font · latin: IBM Plex Sans, substitute — not the brand face */
/* font · hangul: Pretendard Variable, substitute — not the brand face */
/* font · Pretendard Variable: provider other, not auto-installed; if absent, hangul renders in Noto Sans KR: safe default (not the brand face) */
/* omitted, your theme keeps: none */
/* contrast (WCAG): foreground on background 16.56:1 body PASS · muted-foreground on background 3.04:1 body FAIL · muted-foreground on muted 2.76:1 body FAIL · primary-foreground on primary 3.71:1 body FAIL · card-foreground on card 15.02:1 body PASS · destructive on background 4.49:1 body FAIL */
```

이 출력에서 읽을 것
- **18슬롯이 모두 선언값으로 찼다.** 생략은 0이다.
- **`--radius`가 10px이다.** `rounded.md` 6px이 아니라 버튼 반경 `button-medium`을 골랐다. `tds-button`(16px)은 높이가 56px이라 웹 shadcn 버튼(36px)의 기준이 될 수 없다. toss frontmatter에는 small·medium·large의 높이가 없어서 "가장 가까운 높이의 반경"은 고를 수 없다. 그래서 button-medium은 순서로 고른 것이고, 이 점을 보고서에 적는다.
- **inherited FAIL.** `primary-foreground on primary` 3.71:1이다. TDS 버튼은 17px/600으로, WCAG 큰 글자(24px 이상, 또는 18.66px 이상 bold)에 들지 못한다. 이 쌍은 toss가 실제로 쓰는 쌍(`components.tds-button` bg·fg)이므로 brand-look이 고치지 않는다. `destructive on background` 4.49:1도 같은 처리다.
- **mapping FAIL.** `muted-foreground on muted` 2.76:1이다. 이 쌍은 우리가 `--muted`에 `surface`를 배정하면서 생겼다. 재배정 제안은 `--muted-foreground ← colors.body (#4e5968)`이고, 대비는 background 위 7.11:1, surface 위 6.45:1이다. 둘 다 선언값이다. 적용은 `--assign`을 줄 때만 한다(§7 Q3).

### 실례 2: karrot (C 경우), 요약
`web/references/karrot/DESIGN.md`: `primary` 4행, `surface` 10행, `muted` 12행, `on-primary` 13행, `hairline` 14행, `error` 16행, `rounded.md` 40행, `components.flag-menu` 119행, `fonts` 203행.

`--card: #ffffff`은 `components.flag-menu.backgroundColor`에서 왔다. flag-menu는 `type: card`인 팝오버다. 그 밖의 슬롯은 `--primary: #ff6f0f`, `--border: #eaebee`(hairline), `--radius: calc(8px + 2px)`(rounded.md), `--font-sans: system-ui, sans-serif`다. 생략은 `--ring` 하나다. 주 버튼 `box-button`에 focus가 없고, 마케팅 버튼의 focus ring(#e14d00)은 bg가 primary와 달라서 주 버튼이 아니다. 대비는 `primary-foreground on primary` 2.79:1로 inherited FAIL이다(SEED box-button의 실측 쌍).

### 커버리지(verified 427곳 전부에 프로토타입을 실행, 오류 0)

| 슬롯 | 채워진 수 |
|---|---|
| background | 398 |
| foreground | 407 |
| primary | 383 |
| primary-foreground | 262 |
| card | 257 |
| muted-foreground | 274 |
| border | 234 |
| radius | 248 |
| ring | 102 |
| destructive | 66 |

- 핵심 4슬롯(background·foreground·primary·primary-foreground)이 모두 찬 곳은 **235곳**이다.
- **baemin은 8/18이다.** 키가 `baemin-panel`, `corporate-surface`, `corporate-border`처럼 표면 접두사를 달고 있어서 역할 목록에 걸리지 않는다. 의도된 결과다: corporate는 다른 evidence domain이다. on-primary도 선언되지 않았다. 사용자의 기본 `--primary-foreground`(shadcn 기본값 ≈ #fafafa)가 민트 `#0cefd3` 위에 남으면 1.41:1이 되고, mapping FAIL이 난다. 선언값 중 제안은 `colors.foreground #222222`(10.84:1)다.

---

## 4. 검사기

**재사용 방식.** 브랜드마다 사본 `index.html`을 만들므로 기존 스크립트를 고치지 않고 파일 경로로 부른다. 폭은 도구마다 기본값이 달라서 brand-look이 정규화해서 넘긴다.

| | 원본(재사용) | 무엇을 재나 | 임계 · 판정 | 폭 전달 |
|---|---|---|---|---|
| C1 대비 | `test-v2/tools/text-contrast.mjs`(npm 출하본). 글리프 픽셀마다 요소의 명목 글자색과 그 자리 배경 픽셀을 비교한다 | 텍스트 요소별 WCAG 대비. 포커스 링 | 일반 4.5:1, 큰 글자(24px 이상, 또는 18.66px 이상 bold) 3:1. 임계 미만 글리프 픽셀이 5%를 넘으면 FAIL. 포커스 링 3:1(WCAG 1.4.11) | `--viewport 1440x900,1024x768,768x1024,390x844`(기본값은 1440·390 둘) |
| C2 어절 깨짐 | `skills/hangul/scripts/render-check.mjs`(`brokenWords` export) | 두 한글 음절 사이에서 공백 없이 줄이 갈린 곳 | 제목·버튼·라벨에서 1건이라도 나오면 FAIL. 본문 산문은 WARN(HG-10: 본문은 음절 사이 줄바꿈이 허용될 수 있다) | 위치 인자 `1440 1024 768 390`(기본값 360·390·1440) |
| C3 레이아웃 결함 | `skills/hangul/scripts/break.mjs`(`breakCheck`) | spill(scrollWidth > clientWidth), clip(말줄임 없이 잘림), sideways(페이지 가로 스크롤) | 하나라도 있으면 FAIL. 서체를 바꾸면 글자 폭이 달라지니 같은 화면도 브랜드마다 결과가 다를 수 있다 | 위와 같음 |
| C4 절제 일부 | `skills/omd-restraint/scripts/audit.mjs` | **R7 액센트 색상군 1개 이하**(교체 뒤 브랜드 primary가 유일한 액센트인가), **R3 서체 크기 수** | `THRESHOLDS`를 그대로 쓴다(R7 ≤ 1, R3 첫 화면 ≤ 4). 나머지 R은 앱 화면에서 "틀린 질문"이고(스킬 본문의 말) 브랜드가 바뀌어도 결과가 같으니 baseline에서 FYI로 한 번만 낸다 | `--widths 1440x900,1024x768,768x1024,390x844` |
| C5 팔레트 충실도 | **신규** | 칠해진 모든 요소의 computed `color`·`background-color`·`border-*-color`·`outline-color`·`border-radius`가 {이 브랜드의 매핑값} ∪ {생략 슬롯에 남은 사용자 값} 안에 드는가. 이미지·`<video>`·`--content` 선택자는 뺀다 | 집합 밖의 값은 **누수**다(예: 사용자 코드의 하드코딩 `bg-blue-500`). 주 버튼 bg ≠ `--primary`이면 FAIL, 그 밖의 누수는 WARN으로 목록을 낸다. shadcn 오프셋 반경은 "derived" WARN | 4폭 |
| C6 폰트 충실도 | **신규**. 방법은 `scripts/fonts/measure.mjs`에서 빌린다(이 파일은 npm에 실리지 않으니 20행쯤을 복사한다) | CDP `CSS.getPlatformFontsForNode`로 *실제로 글리프를 그린* 서체를 얻어 §1 라벨과 비교한다. Latin과 Hangul 노드를 따로 본다 | 그린 서체가 라벨의 서체(brand / substitute / safe default / system)와 다르면 FAIL. 예: 라벨은 Noto Sans KR인데 Apple SD Gothic Neo가 그렸다면 Google Fonts 로드가 실패한 것이다 | 1440 한 번(서체는 폭에 무관) |

**신규 둘이 기존 규칙을 쓸 수 없는 이유**
- C5: R7은 액센트 색상군의 *개수*를 센다. shader-hero의 "two inks"는 hero.html 계약에 묶여 있다. slop-audit COLOR-01은 판단 규칙이다. "이 화면의 색이 *이 레퍼런스의* 선언 집합에 드는가"를 재는 스크립트는 없다. 레퍼런스 토큰을 아는 것은 brand-look뿐이다.
- C6: `measure.mjs`는 대체 서체를 *고를* 때 쓰는 측정기다(브랜드 페이지 안에서 후보를 비교한다). 사용자 화면에서 라벨과 실제 렌더를 대조하는 검사는 없다. G3("Never render … a safe default as though it were the brand face")를 기계로 지키는 자리가 여기다.

**재사용하지 않는 것과 그 이유**
- `omd-shader-hero/scripts/verify.mjs`, `omd-3d-hero/scripts/verify.mjs`: 대비 수학은 같지만 `.hero h1`, `window.__hero`, `.hero-copy` 페이지 계약에 묶여 있어서 일반 화면에 쓸 수 없다. 같은 방법을 일반화해 출하된 것이 `text-contrast.mjs`이므로 C1은 그것을 쓴다(브리프의 "shader-hero 대비 측정"을 이것으로 바꾼다).
- `omd-slop-audit`: 스크립트가 없는 판단형 스킬이다. 규칙은 레이아웃 패턴의 수렴을 다루는데, 테마를 바꿔도 레이아웃은 그대로라서 브랜드마다 돌리면 같은 finding이 다섯 번 나온다. 보고서에 에이전트용 체크리스트 칸(COLOR-01·02, TYPE-01·03, VISUAL-03)만 두고 **게이트로 쓰지 않는다**.

**판정**
- 브랜드 × 폭 셀은 C1–C4(+C5 주 버튼, C6)에 FAIL이 하나도 없을 때 PASS다.
- FAIL에는 출처 하나를 붙인다(D6).
  - **inherited**: 그 쌍이 레퍼런스 안에 이미 있다. 같은 컴포넌트의 bg·fg이거나, 같은 역할 쌍이다. 예: toss on-primary/primary 3.71:1, karrot 2.79:1. verified 257곳 중 90곳이 이 경우다.
  - **mapping**: 우리 배정이 만든 쌍이다. 예: toss muted-foreground/muted.
  - **layout**: C2·C3 결과다.
- 고침은 *제안*만 낸다. 선언값 사이에서 역할을 다시 배정하는 제안이며, 값 자체를 밝히거나 어둡게 하는 일은 하지 않는다.

**브라우저 엔진 위험.** `render-check.mjs`는 로컬 Chrome을 먼저 찾고, `audit.mjs`·`text-contrast.mjs`는 Playwright 캐시의 Chromium만 쓴다(`test-v2/tools/lib/browser.mjs`). 그리드 픽셀과 판정이 다른 엔진에서 나올 수 있다는 뜻이다. MVP는 `run.json`에 검사별 엔진을 기록한다. 나중에 `CHROME_PATH`를 Playwright Chromium으로 고정해 하나로 맞춘다.

---

## 5. 그리드

**렌더**
- Playwright를 쓴다. 뷰포트는 1440×900, 1024×768, 768×1024, 390×844이고 `deviceScaleFactor: 2`, `reducedMotion: 'reduce'`, `locale` = `--lang`이다.
- 브랜드 × 폭마다 `document.fonts.ready`를 기다린 뒤 첫 뷰포트를 찍는다.
- `grid.html`이 PNG들을 `<img>`로 모으고 캡션을 붙인다. 이 페이지를 한 번 찍으면 `grid.png`가 된다. 이미지 합성 라이브러리는 쓰지 않는다. `test-v2/tools/showcase.mjs --compare`와 같은 방식이다.

**배치.** 행은 브랜드, 열은 폭(1440 · 1024 · 768 · 390)이다. 행 머리 캡션에는 다음만 텍스트로 넣는다. 로고와 마크는 넣지 않는다.
- 이름: registry `displayName`(KR은 한글: 토스, 당근, 배달의민족).
- 표면: 예 "TDS Mobile + toss.im". DESIGN.md `description`의 표면 문구를 쓴다.
- `verified 2026-07-11`.
- 서체 라벨: 예 "IBM Plex Sans · Pretendard Variable, substitute — not the brand face" / "Noto Sans KR, safe default (not the brand face)".
- `omitted n`.
- 판정 요약: `PASS` 또는 `FAIL 3 (inherited 2 · mapping 1)`. 공개 그리드에 이것을 넣을지는 §7 Q2.

맨 아래 한 줄: "Not affiliated with the companies shown. Tokens measured from public surfaces; see oh-my-design.kr/design-systems/<id>."

**Threads 소재**
- `threads/01-390x5.png`: 1080×1350(4:5). 390 열 다섯 장을 나란히 놓은 카드로, "같은 화면, 다섯 회사"를 한 장에 담는다.
- `threads/02…06-<id>.png`: 브랜드마다 4폭 한 장씩.
- 캡션 사실 줄은 tokens.json에서 기계로 뽑는다. 예: "토스 버튼 라운드 10px(button-medium) · 당근 8px · Linear pill".
- W2 런칭 문구(348행)의 "기본 버튼의 **높이**"는 컴포넌트 단계(§6 L3)가 있어야 사용자 화면에서 바뀐다. MVP에서는 **샘플 화면**에서만 `components.<주 버튼>.height`를 쓴다. 샘플 마크업은 우리 것이라 안전하다.
- 영상: `showcase.mjs --compare themed/toss/index.html … --labels "토스|당근|…"`.
- 게시문 문체는 owner의 Threads 흐름(@daon_k)이 맡는다. 스킬은 이미지와 사실 줄까지만 만든다.

---

## 6. MVP, 나중, 위험, count 표면

### MVP(1–2일)
- **1일차**
  - `tokens.mjs`: 프로토타입을 다듬는다. `--format auto`, `--assign`을 넣는다.
  - `examples/sample.html`: shadcn 변수, 한·영 카피, 버튼·입력·카드·배지·목록·포커스.
  - `scripts/look.mjs`: 사본 생성 → 4폭 촬영 → `grid.html`/`grid.png` → `threads/`.
- **2일차**
  - `scripts/check.mjs`: C1(`text-contrast.mjs` 호출), C2·C3(`brokenWords`·`breakCheck` import), C5(신규)를 돌리고 `report.md`/`report.json`을 쓴다. FAIL 출처를 분류한다.
  - `SKILL.md`를 쓴다(§7 Q1에 따라 처음에는 `metadata: internal: true`).
- **수용 기준**
  - `--sample` × W2 다섯 × 4폭에서 PNG 20장, `grid.png`, `report.md`가 나온다.
  - toss·karrot의 대비 수치가 §3과 같다.
  - baemin·apple 캡션에 "safe default (not the brand face)"가 있다.
  - 로고가 0개다.

### MVP 전 owner 작업(스킬 기능 아님)
- `node scripts/fonts/measure.mjs apple`: apple.com은 SF Pro를 로드하므로(`DESIGN.md` §Typography "loaded/high confidence") 측정할 수 있다. 측정하면 W2 다섯 중 셋(toss, linear.app, apple)이 측정된 대체나 브랜드 서체로 그려진다.
- baemin WORK는 측정이 어려울 것이다. DESIGN.md가 "its binary is not publicly loaded"라고 적고 있다. 그러면 safe default로 남는다.

### 나중
- L1 사용자 HTML 파일.
- L2 dev 서버 URL: `context.addInitScript`로 `<style>`을 넣거나 `page.route`로 HTML에 끼운다. 그때는 검사기 넷에 `--css` 같은 추가 플래그가 필요해지므로 같이 설계한다.
- L3 컴포넌트 기하: 주 버튼의 `height`·`padding`·`typography`, pill 버튼의 `rounded-full`. shadcn v4 `data-slot="button"` 선택자로 소스를 고치지 않고 덮어쓴다.
- L4 C4(restraint R3·R7), C6(폰트 충실도).
- L5 dark: dark 토큰이 선언된 레퍼런스만 `.dark` 블록을 만든다. linear.app은 canvas 자체가 `#08090a`라서 light 슬롯에 넣으면 화면이 어두워진다. 이것은 실측 그대로다.
- L6 공개 서체 정확-이름 조회: 고정된 Google Fonts 패밀리 목록 스냅샷을 쓴다. Pretendard는 Google에 없으니 별도로 둔다.
- L7 `resolve.ts` ↔ `tokens.mjs` 키 목록 drift 테스트.
- L8 로컬 카탈로그가 없을 때 MCP `get_tokens`(claim 경로와 측정 대체 라벨을 돌려준다)를 원천으로 쓴다.

### 위험
- **서체를 로드할 수 없다.** 경우 D가 323곳이다. Google Fonts 요청이 실패하면(오프라인) C6이 FAIL을 내고 캡션은 그대로 둔다. 거짓 라벨보다 FAIL이 낫다.
- **브랜드 마크와 저작권.**
  - 로고, 워드마크, 브랜드 일러스트, 브랜드 문구는 렌더하지 않는다.
  - 회사 이름은 캡션 텍스트로만 쓴다(지명 목적의 사용).
  - "공식", "토스 테마" 같은 제휴를 암시하는 표현을 쓰지 않는다.
  - 비공개 브랜드 서체는 로컬에 설치되어 있어도 번들하거나 임베드하지 않는다. CSS는 이름만 참조한다.
- **evidence domain.** baemin의 verified 토큰 상당수는 baemin.com과 Woowa 기업 표면의 것이다. 그리드의 "배민 룩"은 앱 화면이 아니라 그 표면의 룩이다. 캡션의 표면 문구가 이를 밝혀야 한다.
- **공개 그리드에 FAIL을 실으면 보기에 부담이 된다.** "토스 버튼 대비 FAIL"이 사실이어도 게시물에서는 공격으로 읽힐 수 있다(§7 Q2).
- **불변식.** "verified frontmatter = claimed"는 오늘 427곳 전부에서 성립했지만, 이를 지키는 테스트가 있는지는 확인하지 않았다. 없으면 catalog-integrity에 한 줄 추가해야 한다.

### 공개 스킬 하나가 건드리는 count·locale 표면
- 현재 `node scripts/check-counts.mjs`는 `skills=12 public / 33 bundled cursor-skills=32 sub-agents=20 consistent across 15 surfaces`이다. 공개로 넣으면 13 / 34가 된다. 빈 `x-omd-channels`는 cursor를 포함하므로 cursor도 33이 된다.
- 가장 최근 공개 스킬 등록 커밋 `723354d9`(omd-3d-hero, 2026-11-06)이 실제로 바꾼 표면:
  - `package.json` "files"
  - `web/public/llms.txt`, `llms.ko.txt`, `llms.ja.txt`, `llms.zh-cn.txt`, `llms.zh-tw.txt`(5개 locale)
  - `web/src/data/cli-docs.ts`, `web/src/data/faq.ts`, `web/src/data/catalog-meta.generated.ts`(build-registry 생성)
  - `web/src/components/brand-a/cli-section.tsx`
  - 그 커밋은 README 4종을 바꾸지 않았다. README에는 맨 숫자 skill count가 없다.
- 그 밖에 스킬 이름을 나열하는 곳: `src/cli/doctor.ts`, `src/cli/check.ts`, `web/src/data/cli-transcript.json`(omd-restraint grep 결과).
- drift는 `node web/scripts/sync-catalog.mjs`로 맞춘다.
- `internal: true`로 넣으면 public 수(12)는 그대로지만 bundled 수가 33 → 34로 바뀐다(llms.txt 3행 "33-skill bundle").
- `web/src` 아래 변경은 웹사이트 변경이다. 특히 `cli-section.tsx`는 랜딩 UI라서 visual release 규칙(owner preview 확인)을 따른다.

---

## 7. owner 결정 사항

1. **Q1. 새 스킬인가, omd-apply의 동사인가.** 권고는 새 스킬 `omd-brand-look`이고, 슬래시 명령은 `/omd-brand-look`이다(GROWTH 문구의 `/brand-look`과 이름이 다르다는 점도 같이 결정). 이유는 셋이다. omd-apply는 433행의 전달 라우터이고, R3의 논지가 "스크립트로 받친 동사·검사기 스킬이 자란다"이며, 스크립트 3개와 예제가 독립 폴더에 맞는다. MVP는 `internal: true`로 넣고 W2 런칭 때 public으로 바꾸기를 권한다. 그러면 count·웹 표면 변경(§6)을 런칭 커밋 하나로 모을 수 있다.
2. **Q2. 공개 그리드와 Threads 카드에 판정 배지를 넣는가.** 권고는 그리드에 값과 라벨만 싣고, PASS/FAIL은 `report.md`에만 두는 것이다. 넣는다면 inherited를 별도 표기한다.
3. **Q3. `--assign`(선언값 사이의 역할 재배정 자동 적용)의 기본값.** 권고는 끄기(제안만)다.
4. **Q4. MVP 전 apple SF Pro 대체 측정(§6).** 하지 않으면 W2 다섯 중 둘이 safe default로 그려진다.
5. **Q5. W2 브랜드 구성.** baemin은 18슬롯 중 8개만 차고, 키가 corporate 표면 중심이며, on-primary가 없다. 정직한 생략과 함께 그대로 둘지, 핵심 4슬롯이 찬 KR verified 레퍼런스(235곳 중)로 바꿀지 정해야 한다. 후보는 고르지 않았다.
6. **Q6. 채택 경로.** brand-look은 소스를 고치지 않는다. 고른 브랜드는 omd-init(DESIGN.md 부트스트랩)으로 넘기는 것을 권한다. 그 대신 `tokens.css`를 사용자의 `globals.css`에 바로 쓰는 `--adopt`를 둘지 정해야 한다.
7. **Q7. 컴포넌트 단계(버튼 높이·pill)를 사용자 화면에도 MVP에서 할지.** 권고는 MVP에서 샘플 화면만 하는 것이다.
8. **이름 충돌(범위 밖, 기록만).** R3가 지적한 `omd-taste`와 "taste" 범주(738K)의 충돌은 이 설계와 무관하다. 개명은 별도의 owner 판단이다.
