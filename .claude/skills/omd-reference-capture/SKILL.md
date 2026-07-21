---
name: omd:reference-capture
description: "선택된 reference brand의 라이브 사이트에서 디자인 컨텍스트(토큰·구조·visual reference)를 캡쳐. brand homepage 패칭, 컴퓨티드 스타일 inspect, 로고/스크린샷을 assets/_reference/<id>/ 로 가져와 attribution.md + LICENSE-NOTE.md와 함께 저장. '뱅크샐러드 에셋 가져와줘', 'X 사이트 패칭', 'X reference 캡쳐', 'X 라이브 스타일 추출', '브랜드 자료 받아와' 류 요청에 트리거. omd:init 직후 또는 omd:harness 중간에 호출 가능. DESIGN.md는 이 스킬이 만들지 않음 (omd:init 책임)."
---
<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->


# omd:reference-capture — Live Reference Capture

선택된 reference brand의 **라이브 사이트에서 디자인 컨텍스트를 가져온다**. 산출물은 `assets/_reference/<id>/` 디렉토리에 모이고, 사용자의 디자인 작업(omd:apply / omd:harness)에서 컨텍스트로 활용된다.

## 핵심 원칙 (위반 = regression)

이 스킬은 **dev/디자인 reference 캡쳐**용이다. brand IP를 사용자 product에 그대로 ship하는 도구가 **아니다**.

1. **Facts vs. Content 구분**
   - **Facts (캡쳐 OK)**: 컴퓨티드 색상 hex, 폰트 family/weight, spacing, radius, 컴포넌트 구조 — 디자인 시스템 분석은 fair use.
   - **Brand content (저장만, 사용자 product에 verbatim ship 금지)**: 로고, 히어로 사진, 마케팅 카피, 슬로건. 다운로드는 reference 확인용으로만.

2. **저작권 표시 의무**
   - 캡쳐 시작 전 `assets/_reference/<id>/LICENSE-NOTE.md`를 **가장 먼저** 작성.
   - 모든 다운로드 파일은 `attribution.md`에 source URL + 캡쳐 일자 + 추정 권리자 기록.

3. **사용자 product 생성 시 분리**
   - omd:apply/omd:harness가 UI를 만들 때, brand의 **voice/tone(facts)**은 참고하되 **literal copy**는 새로 작성.
   - brand 히어로 사진 / 마케팅 영상은 사용자 product에 직접 embed하지 말고 placeholder + "사용자 자체 자산으로 교체 필요" 주석.

4. **robots.txt / TOS 우선**
   - 다운로드 전 `curl -sI <site>/robots.txt`로 기본 정책 확인.
   - 사이트가 명시적으로 차단하는 경로면 skip하고 사용자에게 알림.

5. **scope 한정**
   - 기본 캡쳐 대상: homepage 1개 + favicon/logo + 컴퓨티드 토큰.
   - PDP / checkout / 인증 뒤 페이지는 **기본 skip** — 사용자가 명시적 요청해야만.
   - 비디오 / 대용량 미디어는 기본 skip (URL만 attribution.md에 기록).

## 트리거

- 명시: "X 에셋 가져와줘", "X 사이트 패칭해줘", "X 라이브 스타일 추출", "X reference 캡쳐"
- 묵시: omd:harness 안에서 reference 선정 후, 또는 사용자가 "X처럼 만들어줘" 요청 시 omd:init 후속 작업으로 자동 제안

## Phase 0 — (v1.3.3 폐기) Mode 선택

이전 버전(v1.3.2)은 `clone` vs `inspired` 두 mode를 제공했으나 v1.3.3에서 폐기. 시각적 동일성은 brand creative work을 사용자 product에 reproduce해야 가능하고 그건 IP 영역. 단일 mode 흐름으로 통일 — brand 토큰·구조·voice는 가져오되, brand 자체 자산(mascot·로고·마케팅 사진)은 reference로만 보존하고 사용자 product에는 자체 자산 자리(`[YOUR LOGO]` placeholder 등)를 둠. 결과물의 시각 polish는 무료 라이선스 자산 라이브러리(Open Peeps / Lucide / Heroicons 등 CC0/MIT/SIL OFL)로 채움 — 자세한 카탈로그는 `skills/omd-harness/SKILL.md` Step 4 master prompt rule 6 참조.

다음 모든 Phase는 단일 흐름. (구버전 Phase 0 - clone/inspired ask 제거됨.)

## (legacy reference) — 이전 mode 선택 텍스트 (참고용, 동작 안 함)

reference-capture가 어디까지 가져올지는 사용자 의도에 따라 두 갈래. 호출 진입 시점에 mode가 결정되지 않았다면 사용자에게 한 번에 묻기:

```
<id>를 어떻게 활용할까요?

1. clone — 거의 똑같이 시작. 실제 로고·일러스트·폰트 받아와서 dev scaffold 구성.
   landing이 라이브 사이트와 시각적으로 매우 비슷하게 시작됩니다.
   ⚠ 자동으로 CLONE-MODE.md 배너 + replace-checklist.md가 생성되고,
     "사용자 product에 ship 전에 brand 자산을 자체 자산으로 교체 필요"라고 표시됩니다.

2. inspired — 톤·체계만 가져옴. [YOUR LOGO] placeholder, 일러스트는 generic placeholder.
   브랜드의 voice·원칙·팔레트 철학만 적용. 바로 ship 가능한 상태로 산출.

답: clone / inspired (기본값: inspired)
```

이 선택은 `.omd/init-context.json`의 `mode` 필드에 저장되어 후속 omd:init / omd:harness / omd:apply가 일관되게 사용한다.

이미 omd:harness Step 3.7에서 mode를 묻고 진입했으면 Phase 0 skip.

### Mode별 동작 요약

| 단계 | clone | inspired |
|---|---|---|
| LICENSE-NOTE.md | 작성 ✓ | 작성 ✓ |
| tokens.json (atomic facts) | 캡쳐 ✓ | 캡쳐 ✓ |
| structure.json (composition facts) | 캡쳐 ✓ | 캡쳐 ✓ |
| logo.<ext> | 캡쳐 + product `<img>`로 사용 가능 (banner 의무) | 캡쳐만 (product에 미사용, placeholder 강제) |
| screenshots/ | 캡쳐 ✓ | 캡쳐 ✓ |
| fonts.json (CDN URLs) | 캡쳐 + 자동 `<link>` 로드 강제 | 캡쳐만 (수동 로드) |
| hero illustration assets | (있고 publicly accessible면) URL 기록 + 사용 가능 | URL만 기록 |
| attribution.md | 작성 + 사용 표시 | 작성 |
| **CLONE-MODE.md (project root)** | **mandatory 작성** | 미작성 |
| **replace-checklist.md (project root)** | **mandatory 작성** | 미작성 |

## 전체 플로우

```
Phase 1: 입력 검증 — brand id 확정
Phase 2: 라이브 URL 수집 (homepage, logo, docs)
Phase 3: 디렉토리 + LICENSE-NOTE 사전 작성 (CRITICAL — 다운로드보다 먼저)
Phase 4: 토큰 캡쳐 (facts) — playwright computed styles
Phase 5: 시각 reference 캡쳐 (screenshot + 로고)
Phase 6: attribution.md 작성
Phase 7: 사용자 요약 + 다음 단계 안내
```

## Phase 1 — 입력 검증

사용자 요청에서 brand id 추출:
- 명시 brand 이름 (한글/영문) → 아래 순서에서 찾은 첫 `reference-fingerprints.json`의 `items[].id` 매칭:
  1. `.codex/data/reference-fingerprints.json`
  2. `.claude/data/reference-fingerprints.json`
  3. `.opencode/data/reference-fingerprints.json`
  4. `node_modules/oh-my-design-cli/data/reference-fingerprints.json`
  5. `data/reference-fingerprints.json` (개발 레포)
- 없으면 사용자에게 묻기: "어느 reference brand 자료를 가져올까요? (예: banksalad, toss, socar)"

id가 카탈로그에 없으면 종료 + "X는 reference 카탈로그에 없어요. omd:init으로 추가 가능합니다."

## Phase 2 — 라이브 URL 수집

**reference 자료 경로 `<refdir>`** 는 reference DESIGN.md 위치 기준으로 resolve (먼저 존재하는 것 사용 — omd:init Phase 4.1과 동일한 카탈로그 resolution order):

<!-- omd:catalog-resolution-order — omd-init/omd-harness SKILL.md + agents/omd-master.md 와 동일 순서 강제. drift guard: test/unit/core/catalog-resolution-order.test.ts -->

1. `.codex/data/references/<id>/DESIGN.md` (Codex installer copy; 디렉토리에는 **DESIGN.md만** 보장)
2. `.claude/data/references/<id>/DESIGN.md` (Claude Code / Cursor installer copy; 디렉토리에는 **DESIGN.md만** 보장)
3. `.opencode/data/references/<id>/DESIGN.md` (OpenCode installer copy; 디렉토리에는 **DESIGN.md만** 보장)
4. `node_modules/oh-my-design-cli/web/references/<id>/DESIGN.md` (로컬 npm 설치 직접 경로 — 디렉토리에 _promo.json/_research.md 포함)
5. `web/references/<id>/DESIGN.md` (개발 레포)
6. `https://oh-my-design.kr/<id>/design.md` 를 fetch (WebFetch 또는 `curl -fsSL`) — 1~5 로컬 경로가 전부 없을 때. 200이면 본문이 곧 reference DESIGN.md. 가져온 내용은 **활성 채널의 첫 writable data dir** (`.codex/data`, `.claude/data`, `.opencode/data`) 아래 `references/<id>/DESIGN.md`에 저장한다. 채널을 판별할 수 없으면 1→3 중 먼저 존재하고 쓸 수 있는 dir을 사용하고, 모두 없으면 활성 host 채널 dir을 생성한다.

`<refdir>` = resolve된 DESIGN.md가 있는 디렉토리 (tier 6 fetch면 위 규칙으로 정한 활성 채널 cache dir). `_promo.json`/`_research.md`는 installer copy나 network cache에 없을 수 있으니, 없으면 (4)/(5)로 폴백하고 그래도 없으면 fingerprints 기반 추론으로 진행.

다음을 순서대로 시도:

1. **homepage URL**:
   - `<refdir>/_promo.json`의 `logo_url`이 brand site면 거기서 도메인 추출
   - 없으면 `<refdir>/_research.md`에서 Tier 1 source URL grep
   - 둘 다 없으면 Phase 1에서 channel-aware하게 resolve한 `reference-fingerprints.json`의 `items[].category_raw` 기반으로 추론 — 마지막 수단

2. **logo URL** (`_promo.json` 우선):
   - `_promo.json.logo_url` → 그대로 사용
   - 없으면 homepage HTML에서 `apple-touch-icon` / `og:image` / favicon-256 추출

3. **공식 DS docs URL** (있으면):
   - `<refdir>/DESIGN.md`의 footer 또는 §4 verified 섹션에서 grep

수집한 URL 후보를 사용자에게 보여주고 확인:

```
다음 자료를 가져오려고 합니다:
  - homepage: https://www.banksalad.com
  - logo: https://blog.banksalad.com/static/img/logo-banksalad.svg
  - 공식 DS: (없음)

저작권 안내: 이 자료는 디자인 reference 용도로만 사용됩니다. 사용자 product에 그대로 ship하지 마세요.

진행하시겠어요? (yes/no/edit-urls)
```

## Phase 3 — 디렉토리 + LICENSE-NOTE 사전 작성 (CRITICAL)

다운로드 시작 **전에** 다음을 먼저 작성:

```bash
mkdir -p "assets/_reference/<id>/screenshots"
```

`assets/_reference/<id>/LICENSE-NOTE.md`:

```markdown
# License Note — <id> Reference Capture

This directory contains design-reference materials captured from
**<id>**'s public website on **<ISO-date>** for the purpose of
informing UI design work in this project.

## What's here is for REFERENCE, not REDISTRIBUTION

- **Design tokens** (colors, fonts, spacing) — `tokens.json`. These
  are facts about the brand's design system and may be used to inform
  your own design.
- **Logo file** — captured for visual recognition during development.
  This is <brand>'s trademark. Do not use in your own product, your
  own marketing, or any redistribution. Replace with your own brand
  mark before shipping.
- **Screenshots** — captured for visual reference during development.
  Do not embed in your product, your blog, or social posts beyond
  fair-use commentary.

## What you should NOT do

- Embed `logo.*` or `screenshots/*.png` in your own product UI as if
  they belong to you.
- Copy `tokens.json`'s exact hex values into your own brand without
  shifting them via `delta_set` (see omd:init).
- Copy any marketing text from screenshots into your own product
  verbatim — voice/tone is fact, but specific phrasing is creative work.

## What you SHOULD do

- Use the **design language** (token relationships, component
  patterns, voice register) to inform your project's DESIGN.md.
- Reference the screenshots during design reviews to align with the
  visual target.
- Replace all brand-identifying assets with your own before any
  external sharing.

## Attribution

See `attribution.md` in this directory for source URLs and capture
timestamps.

---

This note is generated by `omd:reference-capture`. Do not edit by hand
— rerun the skill to refresh.
```

## Phase 3.5 — Font 캡쳐 (fonts.json, 라이브 폰트가 실제 로드되도록)

캡쳐된 brand가 web font(Pretendard / BM JUA / Inter / Noto Sans KR 등 시스템 기본이 아닌 폰트)를 쓰면, 토큰만 잡아도 생성기가 폰트를 **로드 안 하면** 결과가 시스템 fallback으로 바뀐다 (가장 흔한 증상: macOS 시스템 폰트가 둥글둥글하게 렌더되는 mismatch).

`assets/_reference/<id>/fonts.json`:

```json
{
  "captured_at": "<ISO-8601>",
  "fonts": [
    {
      "family": "Pretendard",
      "license": "SIL OFL 1.1 (open-source, free for commercial use)",
      "cdn_url": "https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css",
      "html_link": "<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css\" />",
      "live_observed": true,
      "role": "body + heading"
    },
    {
      "family": "Apple SD Gothic Neo",
      "license": "system (macOS/iOS)",
      "cdn_url": null,
      "html_link": null,
      "live_observed": false,
      "role": "system fallback"
    }
  ]
}
```

### 3.5.1 추출 절차

1. live homepage의 computed style에서 `body` / `h1-h3` / 주요 buttons의 `font-family` 첫 항목 추출 (fallback chain 무시, 첫 토큰만)
2. 추출된 family를 known-font registry에 매칭:

| 추출된 family | license | CDN URL |
|---|---|---|
| `Pretendard` | SIL OFL 1.1 | `https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css` |
| `Pretendard Variable` | SIL OFL 1.1 | `https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css` |
| `Noto Sans KR` | SIL OFL 1.1 | `https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap` |
| `Inter` | SIL OFL 1.1 | `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap` |
| `Wanted Sans` | SIL OFL 1.1 | `https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@latest/packages/wanted-sans/fonts/webfonts/static/complete/WantedSans.css` |
| `BM JUA` (배민 주아체) | 배달의민족 폰트 라이선스 (개인·기업 무료, **재배포·판매 금지**) | (CDN 미공식 — `html_link: null` 처리, 사용자에게 "BM JUA는 라이브에서 관측 안 됨; 로컬 fallback" 알림) |
| `Apple SD Gothic Neo`, `Malgun Gothic`, `system-ui`, `-apple-system` | system | `html_link: null` |

registry에 없는 family는 `html_link: null` + `notes`에 "CDN 미확인, 수동 로드 필요" 기록.

### 3.5.2 BM JUA 같은 misapplication 가드

canonical DESIGN.md가 "BM JUA를 landing/promo accent로"라고 적어뒀더라도, **라이브 inspect에서 실제 BM JUA 사용이 관측 안 되면** `live_observed: false`로 기록하고 후속 generator가 적용 안 하도록 신호. omd:init Phase 5B의 priority rule이 `live_overrides` 우선 처리.

### 3.5.3 Clone mode 강제 로드

mode=clone이면 omd:init/omd:harness가 생성 HTML `<head>`에 fonts.json의 `live_observed: true` 항목 `html_link`를 **반드시** 박는다. mode=inspired면 폰트 로드는 사용자 선택.

## Phase 3.9 — MCP-free evidence collector (v2)

라이브 캡쳐의 정본은 버전된 `ReferenceEvidenceBundle`이다. 에이전트가 매번 다른 evaluate 스니펫을 만들지 않는다.

### 기본 경로: packaged/local collector

개발 저장소 안에서는:

```bash
npm --prefix web run capture:reference -- <id-or-url> \
  --max-routes 3 \
  --out "$PWD/assets/_reference/<id>/evidence.json"
```

npm으로 설치된 스킬에서는:

```bash
# 현재 읽고 있는 SKILL.md와 같은 디렉토리의 bundled collector를 사용한다.
# 예: .agents/skills/omd-reference-capture/scripts/capture-reference-evidence.mjs
SKILL_DIR="<directory-containing-this-SKILL.md>"
COLLECTOR="$SKILL_DIR/scripts/capture-reference-evidence.mjs"
node "$COLLECTOR" "<homepage-url>" --id "<id>" \
  --max-routes 3 \
  --out "$PWD/assets/_reference/<id>/evidence.json"
```

설치된 collector는 Node 18에서 실행되는 단일 ESM 파일이며 `playwright-core`까지 내부에 포함한다. 따라서 프로젝트 `node_modules`, npm cache, TypeScript runtime에 의존하지 않고 system Chrome을 직접 사용한다. Chrome 경로가 표준 위치가 아니면 `OMD_CHROME_PATH`만 지정한다. MCP server, MCP SDK, 별도 API key는 필요 없다. 설치형 collector에는 항상 Phase 2에서 확정한 homepage URL과 `--id`를 함께 전달한다. 이 방식은 npm package가 일회성 `npx` cache에서 사라진 뒤에도 동작한다.

현재 SKILL.md의 위치를 직접 알 수 없는 shell 환경에서는 아래 순서에서 첫 실행 파일을 찾는다:

```bash
for candidate in \
  "$PWD/.claude/skills/omd-reference-capture/scripts/capture-reference-evidence.mjs" \
  "$PWD/.agents/skills/omd-reference-capture/scripts/capture-reference-evidence.mjs" \
  "$PWD/.opencode/skills/omd-reference-capture/scripts/capture-reference-evidence.mjs" \
  "$HOME/.claude/skills/omd-reference-capture/scripts/capture-reference-evidence.mjs" \
  "$HOME/.agents/skills/omd-reference-capture/scripts/capture-reference-evidence.mjs" \
  "$HOME/.config/opencode/skills/omd-reference-capture/scripts/capture-reference-evidence.mjs"
do
  if [ -f "$candidate" ]; then COLLECTOR="$candidate"; break; fi
done
test -n "${COLLECTOR:-}" || { echo "capture_blocked: bundled collector not found"; exit 1; }
```

필수 산출물은 `evidence.json` 하나이며 schema version, surface URL, selector, computed style, FontFaceSet, `@font-face` source, interaction state, component fingerprint와 coverage를 포함한다. hover/focus/pressed는 state-specific computed snapshot으로 남고, 안전하게 열 수 있는 menu/dialog/form-error/tab/toast는 `interactions[]`의 trigger/target/state로 남는다. `tokens.json`, `.live-inspect-proof.json`, `structure.json`은 이 bundle의 하위 projection으로만 만든다.

### Fast-path: browser-harness (있으면 우선)

`shutil.which("browser-harness")` 또는 `command -v browser-harness`로 detect. 있고 `browser-harness --doctor` 가 `[ok ] chrome running` 띄우면 fast-path:

- **용도**: 이미 로그인된 surface나 collector가 열지 못한 메뉴/모달을 보충한다. sub-agent의 "did live inspect" 보고 대신 실제 raw evidence를 남긴다.
- **prerequisite**: Python 3.11+, uv 또는 pip, Chrome with `--remote-debugging-port=9222` 또는 `chrome://inspect#remote-debugging` 활성.
- **호출 패턴**:
  ```bash
  BU_CDP_URL="http://localhost:9222" browser-harness <<'PY'
  new_tab("https://<brand-domain>")
  wait_for_load()
  import time; time.sleep(1.5)  # SPA hydration
  result = js("""
  (() => {
    const body = getComputedStyle(document.body);
    const ctas = [...document.querySelectorAll('button, a[role="button"], [class*="button"]')]
      .filter(el => {
        const r = el.getBoundingClientRect();
        return r.height >= 32 && r.height <= 80 && r.top < 1200;
      })
      .slice(0, 8).map(el => {
        const cs = getComputedStyle(el);
        return { bg: cs.backgroundColor, color: cs.color, radius: cs.borderRadius,
                 padding: cs.padding, fontWeight: cs.fontWeight, h: Math.round(el.getBoundingClientRect().height) };
      });
    return JSON.stringify({
      bodyFont: body.fontFamily.split(',')[0].replace(/['"]/g,'').trim(),
      ctas, scrollH: document.documentElement.scrollHeight
    });
  })()
  """)
  print(result)
  capture_screenshot(path="<assets_dir>/screenshots/hero-desktop.png", full=False)
  PY
  ```
- 결과를 임의 JSON으로 끝내지 말고 `evidence.json`의 surface/state evidence와 동일한 필드로 reconcile한다. screenshot은 보조 자료이며 토큰 근거를 대신하지 않는다.

### Fallback: browser-harness only

packaged collector가 없고 browser-harness만 있으면 위 fast-path를 사용한다. 둘 다 없으면 live 검증을 했다고 주장하지 말고 `capture_blocked`를 기록한다. Playwright MCP로 fallback하지 않는다.

### 자동 선택 logic

```bash
if [ -f "web/scripts/capture-reference-evidence.ts" ]; then
  echo "MODE=local-collector"
elif [ -n "${COLLECTOR:-}" ] && [ -f "$COLLECTOR" ]; then
  echo "MODE=packaged-collector"
elif command -v browser-harness >/dev/null && browser-harness --doctor 2>&1 | grep -q "ok.*chrome running"; then
  echo "MODE=harness-supplement"
else
  echo "MODE=capture-blocked"
fi
```

### 사용자 안내 (선택)

skill 진입 시 사용자에게 한 줄로 알림:
> "MCP 없이 evidence collector로 N개 surface를 캡쳐합니다." 또는 "collector가 없어 live capture가 막혔습니다."

이 안내는 informational only, 사용자 action 요구 X.

## Phase 4 — 토큰 캡쳐 (facts)

**Proof gate (위반 = regression)**: 이 Phase는 실제 navigation + computed style 추출이 일어났음을 `evidence.json`으로 증명해야 한다. 사람이 쓴 "라이브 inspect 했다" 문장은 증거가 아니다.

### 4.0 — `.live-inspect-proof.json` 작성 (REQUIRED, 이 파일 없으면 후속 generator는 live_overrides 무시)

collector의 `evidence.json`에서 raw computed style 5개 이상을 projection해 `assets/_reference/<id>/.live-inspect-proof.json`에 저장한다:

```json
{
  "navigated_at": "<ISO-8601 with seconds>",
  "source_url": "https://www.banksalad.com",
  "viewport": "1280x800",
  "tool_used": "reference_evidence_collector_v1",
  "raw_samples": [
    { "element_selector": "body", "font-family": "Pretendard, ...", "color": "rgb(0, 0, 0)", "background": "rgba(0, 0, 0, 0)" },
    { "element_selector": "header nav a:first-child", "font-size": "14px", "font-weight": "500" },
    { "element_selector": "button:contains('앱 다운로드')", "background-color": "rgb(19, 189, 126)", "border-radius": "41px" },
    { "element_selector": ".hero-section section", "background-color": "rgba(0, 0, 0, 0)" },
    { "element_selector": "footer", "background-color": "rgb(255, 255, 255)" }
  ],
  "evidence_schema_version": 1,
  "evidence_bundle": "./evidence.json"
}
```

후속 generator (omd:init / omd:harness)는 `evidence.json`의 `schemaVersion === 1`, `surfaces.length >= 1`, raw element ≥5를 먼저 확인한다. legacy proof 파일만 있고 bundle이 없으면 canonical만 사용한다.

### 4.1 — drift detection (proof와 tokens.json#live_overrides 일관성)

`tokens.json#live_overrides`의 각 값은 bundle의 `surfaceId + selector + style property`로 역추적 가능해야 한다. canonical과 값이 같다는 이유만으로 실패 처리하지는 않지만, provenance가 없으면 override를 삭제한다.

### 4.2 — token 캡쳐 본문

`evidence.json`의 aggregate와 representative raw element를 reconcile한다. 결과는 `assets/_reference/<id>/tokens.json`:

```json
{
  "captured_at": "<ISO-8601>",
  "source_url": "https://www.banksalad.com",
  "tokens": {
    "colors": {
      "background": "#ffffff",
      "text_primary": "#2b2b2b",
      "text_body": "#434444",
      "interaction_primary": "#04c584",
      "interaction_hover": "#10df99"
    },
    "typography": {
      "body_font_family": "Pretendard, ...",
      "body_font_weight": "400",
      "heading_font_weight": "700",
      "base_size_px": 16
    },
    "shape": {
      "default_radius_px": 2,
      "card_radius_px": 2,
      "pill_radius_px": 16
    },
    "shadow": {
      "default": "0 2px 5px rgba(0,0,0,0.12)"
    }
  },
  "samples": [
    { "element": "primary button (hero CTA)", "raw_computed_style": { /* getComputedStyle slice */ } },
    { "element": "card", "raw_computed_style": { /* ... */ } }
  ]
}
```

최소 샘플은 `body` / heading / hero CTA / card 또는 form / footer이며, 각 샘플은 bundle selector를 보존한다. 캡쳐하려는 brand가 카탈로그에 없으면 URL을 직접 collector에 전달한다. 카탈로그에 신규 brand를 추가하는 워크플로우(omd-add-reference)는 dev 레포에만 존재한다.

## Phase 4.5 — 구조 cue 캡쳐 (structure.json)

Tokens는 색·radius·font 같은 원자 값이고, **structure**는 페이지가 어떻게 짜였는지의 관측 가능한 facts다. 토큰만 보면 같은 brand도 surface마다 다른 결과물이 나오는 mismatch가 생긴다 (예: app surface의 2px-radius advisor 톤 vs marketing landing의 41px-pill 일러스트 톤). structure.json은 후속 생성기가 **실제 라이브 사이트의 composition idiom**을 따라가도록 한다.

### 4.5.1 추출 항목 (facts only — 저작권 영역 0)

`assets/_reference/<id>/structure.json`:

```json
{
  "captured_at": "<ISO-8601>",
  "source_url": "https://www.banksalad.com",
  "viewport": "1280x800",
  "hero": {
    "type": "illustration | photo | video | data-card | text-only | mixed",
    "has_carousel": false,
    "carousel_dot_count": 0,
    "primary_visual_position": "right | left | center | full-width | background",
    "background_ornament": "none | gradient-blob | geometric | radial-tint | photo-bleed",
    "approx_height_vh": 75
  },
  "cta": {
    "dominant_shape": "pill | rectangular | ghost-only | text-link",
    "primary_radius_px_observed": 41,
    "secondary_style": "ghost-outline | underline | none",
    "vertical_stack": true
  },
  "nav": {
    "structure": "horizontal-categories | mega-menu | hamburger-mobile | single-row-utility | top-tabs",
    "approx_item_count": 11,
    "has_search": false,
    "has_locale_switch": false
  },
  "page": {
    "viewport_heights": 3.9,
    "section_count_observed": 8,
    "predominant_alignment": "center | left | grid-asymmetric",
    "image_density": "high | medium | low | none"
  },
  "section_rhythm": [
    "hero",
    "social-proof",
    "feature-grid",
    "testimonial",
    "footer"
  ],
  "notes": [
    "라이브 hero는 carousel — 3-5 슬라이드로 product 카테고리 순환",
    "section_rhythm은 위에서 아래로 관측 순서"
  ]
}
```

### 4.5.2 추출 방법

playwright로 homepage navigate 후 다음 JS 실행 (facts derivation only):

```js
() => {
  // hero 탐색 — 보통 첫 800px 이내 viewport에서 가장 큰 visual element
  const heroCandidates = [...document.querySelectorAll('section, header + div, [class*="hero" i], [class*="Hero"]')]
    .filter(el => {
      const r = el.getBoundingClientRect();
      return r.top < 200 && r.height > 300 && r.width > 800;
    });
  const heroEl = heroCandidates[0];

  // type 판정
  const heroImgCount = heroEl ? heroEl.querySelectorAll('img, svg, picture').length : 0;
  const heroVideoCount = heroEl ? heroEl.querySelectorAll('video').length : 0;
  const heroHasCarouselDots = heroEl ? !!heroEl.querySelector('[class*="dot" i], [class*="pagination" i], [class*="indicator" i]') : false;

  // CTA 탐색 — viewport 위 절반의 button/cta
  const ctas = [...document.querySelectorAll('button, a[role="button"], [class*="button" i] a')]
    .filter(el => el.getBoundingClientRect().top < 800)
    .map(el => {
      const cs = getComputedStyle(el);
      return { radius: cs.borderRadius, bg: cs.backgroundColor };
    });
  const dominantRadii = ctas.map(c => parseInt(c.radius)).filter(n => !isNaN(n));
  const maxRadius = Math.max(...dominantRadii, 0);

  // nav
  const navEl = document.querySelector('header nav, [role="navigation"]');
  const navItemCount = navEl ? navEl.querySelectorAll('a, button').length : 0;

  return {
    hero_img_count: heroImgCount,
    hero_video_count: heroVideoCount,
    hero_has_carousel_dots: heroHasCarouselDots,
    cta_max_radius_observed: maxRadius,
    cta_sample_count: ctas.length,
    nav_item_count: navItemCount,
    total_scroll_height_px: document.documentElement.scrollHeight,
    viewport_height_px: window.innerHeight,
  };
}
```

위 raw 측정값을 structure.json schema의 enum 값으로 매핑 (예: `hero_img_count >= 1 && hero_video_count === 0` → `hero.type: "illustration"`, `cta_max_radius_observed >= 40` → `cta.dominant_shape: "pill"`).

### 4.5.3 IP 가드레일 재확인

structure.json에는 텍스트·이미지·copy·brand statement 일체 X. 오로지 **structural facts** (개수, radius, viewport-relative position). 저작권 영역 아님.

`notes` 필드의 자유 텍스트는 **본인 관찰**만 — 사이트의 마케팅 카피 인용 금지.

## Phase 5 — 시각 reference 캡쳐

### 5.1 로고 다운로드

`curl -sSL -o "assets/_reference/<id>/logo.<ext>" "<logo_url>"`

- 실패 시 sourceURL 명시하고 사용자에게 수동 다운로드 안내
- 확장자는 Content-Type 기준 (svg/png/ico) — 잘못된 확장자로 저장하지 말 것

### 5.2 Hero screenshot

evidence collector와 같은 로컬 Playwright context 또는 browser-harness로 homepage 위 fold만 캡쳐(MCP 불필요):

- viewport: 1280×800 (데스크탑 기본)
- fullPage: **false** — 위 fold만
- 저장 경로: `assets/_reference/<id>/screenshots/hero-desktop.png`

모바일 viewport (375×812)도 1장: `screenshots/hero-mobile.png`.

대용량 페이지 전체 screenshot은 default skip. 사용자가 명시적으로 요청 시만.

### 5.3 다운로드 금지 대상

- 비디오 (`.mp4`, `.webm`)
- 마케팅 PDF
- 인증 뒤 페이지의 자산
- robots.txt가 차단하는 경로

이런 자원은 attribution.md에 URL만 기록.

## Phase 6 — attribution.md

`assets/_reference/<id>/attribution.md`:

```markdown
# Attribution — <id> Reference Capture

Captured: **<ISO-8601>** via `omd:reference-capture`

## Sources

| File | Source URL | Captured | Notes |
|---|---|---|---|
| `tokens.json` | `<homepage_url>` | <date> | Computed styles via playwright, factual analysis |
| `structure.json` | `<homepage_url>` | <date> | Observable composition facts (hero type, CTA shape, nav structure, page rhythm) |
| `logo.<ext>` | `<logo_url>` | <date> | Brand trademark — do not redistribute |
| `screenshots/hero-desktop.png` | `<homepage_url>` (1280×800) | <date> | Reference for design alignment |
| `screenshots/hero-mobile.png` | `<homepage_url>` (375×812) | <date> | Reference for design alignment |

## Skipped (URL recorded for manual review)

- (none) OR <list of URLs skipped due to robots.txt / size / type>

## Rights

These materials are owned by <id> and its respective rights holders.
Captured under fair-use principles for the purpose of design analysis
and development reference. See `LICENSE-NOTE.md` for usage boundaries.

## Refresh

Rerun `omd:reference-capture <id>` to recapture (overwrites this
directory). Captured tokens reflect the live site at capture time and
may drift as the brand evolves.
```

## Phase 6.5 — Clone mode 전용 산출 (mode=clone일 때만)

### 6.5.1 `CLONE-MODE.md` (project root, mandatory)

clone mode 진입 시점에 프로젝트 루트(`./CLONE-MODE.md`)에 **다른 산출보다 먼저** 작성:

```markdown
# ⚠ CLONE MODE — Reference Scaffold

This project was scaffolded in **clone mode** from the **<id>** reference
on **<ISO-date>**. The scaffold deliberately resembles <id>'s live
public surface to help you start fast.

## What this means

- **Brand assets in this project are NOT yours.** The header logo, web
  fonts, illustration patterns, and visual rhythm currently match
  <id>'s public brand. They are placeholders/references, not part of
  your product's identity.
- **You MUST replace them before shipping.** See `replace-checklist.md`
  for the exact list of files and lines to swap.
- **Marketing copy** in this scaffold was generated fresh in the brand's
  voice register — it is not copied verbatim from the live site. Edit
  freely for your product's narrative.

## Why clone mode exists

Designers and engineers commonly evaluate "what would an X-styled UI
look like for my product" by starting from a close visual reference.
clone mode automates that scaffold step. It is **not** a license to
ship the reference brand's identity as your own.

## To switch back to inspired mode

Re-run with `mode=inspired` — all brand-identifying assets revert to
`[YOUR LOGO]` placeholders and generic illustration silhouettes, ready
to ship with your own brand.

---

Generated by `omd:reference-capture`. Do not delete this banner until
`replace-checklist.md` is fully resolved.
```

### 6.5.2 `replace-checklist.md` (project root, mandatory)

clone mode가 만든 모든 brand-identifying 자산의 정확한 swap 지점 enumeration:

```markdown
# Replace Checklist — pre-ship swap list

Before shipping, resolve every item below. Each item points to a
brand-cloned asset that must be replaced with your own product's
equivalent.

## Logo

- [ ] `assets/_reference/<id>/logo.<ext>` — replace `<img src="assets/_reference/<id>/logo.<ext>">` references
      in `landing.html` (line <N>), `app/layout.tsx` (line <N>), etc.
      Suggested replacement: `assets/brand/logo.<ext>` (your own).

## Web fonts

- [ ] `<link rel="stylesheet" href="<CDN URL>">` in `landing.html` head
      — keep if you use the same font (Pretendard is open-source);
      remove if you switch to a different typeface.

## Hero illustration / imagery

- [ ] `landing.html` lines <N-M> — placeholder illustration matching
      <id>'s visual idiom. Replace with your own illustration / photo.

## Marketing copy

- (none — all copy was written fresh in the brand voice register;
  edit for your product's specific narrative as needed)

## Color tokens

- [ ] Live brand colors (e.g. `#13bd7e` for banksalad) are used as
      `--brand-primary`. Adjust if your brand uses a different hue.

## Final pre-ship check

```bash
# Should return no matches before shipping:
grep -rn "_reference/<id>" .
```

## When this checklist is complete

Delete this file and `CLONE-MODE.md` from the project root. The
scaffold is now your product.
```

이 두 파일은 generator가 clone mode를 인지하는 마커이기도 함. 사용자가 의도적으로 삭제해야 inspired mode로 전환.

## Phase 7 — 사용자 요약

prose로:

```
✓ <id> reference captured into assets/_reference/<id>/
  - tokens.json — <N> design tokens extracted
  - logo.<ext> — <size>
  - screenshots/ — <N> images

⚠ 저작권 안내: 이 자료는 디자인 reference 용도. 사용자 product에 brand 로고/스크린샷을 직접 embed하지 마세요. 자세한 사용 경계는 LICENSE-NOTE.md 참고.

다음 단계:
  - omd:apply로 컴포넌트 작업 시작 (tokens.json 자동 활용)
  - omd:harness로 전체 surface 디자인 (이 자료를 reference로)
  - 토큰 시각 확인: open assets/_reference/<id>/screenshots/hero-desktop.png
```

## omd:harness / omd:apply 와의 인터페이스

이 스킬이 만든 `assets/_reference/<id>/tokens.json`은 후속 skill이 자동 활용:

- **omd:apply**가 컴포넌트 작업 시 `tokens.json`이 있으면 hex 값 동기화 우선
- **omd:harness**의 Component phase에서 시각 reference로 screenshots 활용

UI 생성 시 logo 사용 규칙 (omd:apply / omd:harness 둘 다 적용):
- 사용자 product의 **헤더/footer logo는 reference logo를 placeholder로 쓰지 말 것** — `[YOUR LOGO]` 자리만 잡고 사용자에게 자체 로고 요청
- favicon / og:image 등도 동일 — placeholder 위치만 표시

## 안티패턴 (절대 금지)

- ❌ 다운로드 시작 전에 LICENSE-NOTE.md 작성 skip
- ❌ Phase 4의 token 캡쳐 결과를 그대로 사용자 DESIGN.md에 hex값 verbatim 복사 (omd:init의 delta_set 시스템을 우회)
- ❌ 브랜드 마케팅 카피를 사용자 product에 그대로 인용
- ❌ 사용자 product의 로고 자리에 reference brand 로고 임시로라도 박기 (사용자가 잊고 ship 가능성)
- ❌ robots.txt 차단 경로 강행
- ❌ 인증 뒤 페이지 자동 탐색
- ❌ 비디오 / 대용량 자산 default 다운로드

## 산출 위치 (요약)

```
assets/_reference/<id>/
├── LICENSE-NOTE.md       (사전 작성)
├── attribution.md        (마지막 작성)
├── tokens.json           (facts — atomic values)
├── structure.json        (facts — composition cues for surface idiom)
├── logo.<svg|png|ico>    (brand mark — reference only)
└── screenshots/
    ├── hero-desktop.png  (1280×800, above fold)
    └── hero-mobile.png   (375×812, above fold)
```

## .gitignore 권장

`assets/_reference/` 디렉토리는 사용자 자체 자산이 아닌 reference 자료이므로, 사용자 git repo의 정책에 따라 .gitignore 권장:

```
# Reference capture (regeneratable via omd:reference-capture)
assets/_reference/
```

이 스킬은 .gitignore를 자동 수정하지 않음 — 사용자에게 알림만.
