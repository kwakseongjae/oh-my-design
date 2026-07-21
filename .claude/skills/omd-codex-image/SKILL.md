---
name: omd:codex-image
description: "이미지 placeholder를 동적으로 materialize. Codex 채널에서는 내장 image-generation primitive 호출, Claude Code 채널에서는 omd-asset-curator로 fall back, OpenCode에서는 spec dump. HTML/MD의 `<!-- omd:gen-image -->` 블록을 단일 source of truth로 사용. '이미지 생성해줘', '플레이스홀더 채워줘', '코덱스로 이미지 만들어' 류 트리거."
user-invocable: true
---
<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->


# omd:codex-image

채널-aware 이미지 materialization 스킬. **하나의 spec format** + **세 가지 downstream 처리**.

문제: oh-my-design이 emit하는 HTML/MD에는 늘 illustration 자리가 비어있다. 채널별 capability가 다르다 — Codex CLI는 내장 image generation을 갖고, Claude Code는 안 가졌고, OpenCode는 user에게 위임한다. 이 차이를 skill 1개로 통합한다.

## 0. 단일 spec format

artifact (HTML, Markdown, JSX, MDX) 안에 다음 주석 블록을 둔다.

```html
<!-- omd:gen-image
  filename: assets/karrot-hero.png
  prompt: "Karrot mobile home feed screenshot — white canvas, warm near-black headings, single Karrot Orange #FF6600 floating CTA. Mobile portrait, no chrome."
  aspect: "16:9"
  style: "product screenshot, minimal, mobile"
  references:
    - https://www.daangn.com/
    - https://seed-design.io/
  notes: "Single saturated element per viewport. Use brand orange only on the CTA."
-->
<img src="assets/karrot-hero.png" alt="당근 홈 피드의 단일 오렌지 CTA" />
```

규칙:

- `filename` — 결과물 저장 경로. 같은 디렉토리 기준 상대경로 권장.
- `prompt` — 한 문단, 구체적, 시각 디테일 + 톤 + 컬러 hex 포함.
- `aspect` — `16:9` `4:3` `1:1` `9:16` 중 하나.
- `style` — 1~3 단어 (`product screenshot` / `inline svg` / `editorial photo` / `dieline diagram`).
- `references` — 실제 브랜드 URL (선택, IP-safe 컨텍스트용).
- `notes` — generator나 검수자가 알아야 할 제약. 

이 spec은 channel과 무관하다. 채널별 처리는 §1.

## 1. 채널 분기

호출 envelope의 `channel` (또는 환경 detect — `process.env.OMD_CHANNEL`이나 host agent 식별)에 따라:

### 1.1 channel = `codex`

Codex CLI는 native image generation을 갖고 있다. 다음 순서:

1. artifact를 Read로 전체 로드
2. `<!-- omd:gen-image ... -->` 블록을 정규식으로 추출 (multiline)
3. 각 블록마다 Codex의 image generation primitive 호출 — 도구명은 host에 따라 다르다 (`generate_image`, `image.create`, `dall_e_image_generation`, `gpt_image_1` 등). Codex agent가 자기 환경에서 사용 가능한 것을 선택한다.
4. 출력 파일을 `filename` 경로에 저장 (mkdir -p)
5. **주석 블록은 그대로 두고** `<img src>`나 `![]()` 경로가 매칭되는지 확인. 안 맞으면 alt 텍스트 보존하면서 src만 교체.
6. 각 처리 항목에 `<!-- omd:gen-image:done at=<ISO timestamp> by=codex -->` 주석을 spec 블록 아래에 1줄 추가.

generation 실패 시: spec 블록은 그대로, `<!-- omd:gen-image:error reason="..." -->` 추가. 다음 호출이 재시도 가능하도록.

prompt 보강 (Codex가 좋은 결과를 내려면):

- `prompt` 원문 + 다음 prefix 자동 prepend: `"Render as <aspect> <style>. "`
- `notes`에 색 hex 있으면 prompt 끝에 `"Use only the following colors: <hex list>."` 추가
- `references` 있으면 `"Stylistic reference inspiration only — do not copy verbatim: <urls>"` 추가

### 1.2 channel = `claude-code`

Claude Code는 native image generation이 없다. 대신 `omd-asset-curator` 스킬로 라우팅:

1. spec 블록을 추출
2. 각 블록을 omd-asset-curator의 spec 형식으로 변환:
   - `prompt` → asset-curator의 `description`
   - `style` → asset-curator의 medium 힌트 (`product screenshot` → Picsum/Loremflickr, `inline svg` → 직접 SVG 생성, `icon` → Lucide)
3. asset-curator가 free-license 자원에서 매칭 (DiceBear avatars, Lucide icons, Picsum CC0 photos, unDraw SVG 등) 또는 인라인 SVG를 생성해 `filename`에 저장
4. spec 블록 그대로 두고 `<!-- omd:gen-image:done at=<ISO> by=asset-curator source=<url> -->` 추가
5. **사용자에게 1줄 알림**: "Claude Code에서는 free-license fallback을 적용했어요. 더 정확한 이미지는 Codex 채널에서 generate하면 돼요."

### 1.3 channel = `opencode`

OpenCode는 image generation도, asset-curator도 자동으로 못 돌린다. user-in-the-loop:

1. spec 블록을 추출
2. terminal에 `## Image generation queue` 섹션을 emit:
   ```
   3개 이미지를 수동으로 생성/소싱해서 다음 경로에 두세요:

   1. assets/karrot-hero.png  (16:9)
      prompt: "Karrot mobile home feed — single orange CTA..."
      refs: https://www.daangn.com/

   2. ...
   ```
3. spec 블록은 그대로 두고 done 주석은 user 확인 후에만 추가

## 2. fallback 그래프

artifact를 처리할 때 항상 우선순위:

```
Codex native gen  ──┐
                    ├─► success → done 주석 추가
asset-curator      ──┘
                    │
                    └─► fail → user-queue (OpenCode 식 prompt)
```

각 단계 실패는 다음 단계로 escalate. 마지막 단계도 실패하면 error 주석 + 사용자에게 명시.

## 3. idempotency

이 스킬은 같은 artifact에 여러 번 돌려도 안전해야 한다.

- 이미 `<!-- omd:gen-image:done -->` 주석이 붙은 spec 블록은 스킵
- `filename` 경로의 파일이 이미 존재하면 (size > 0) 스킵
- `--force` 명시되면 둘 다 무시하고 재생성

## 4. IP safe rails

- `references` URL은 inspiration만. 절대 verbatim 카피 X.
- 브랜드 로고는 generation이 아니라 reference에서 **다운로드**해서 가져오기. Codex/asset-curator 둘 다 로고는 generate 금지 (왜곡된 가짜 로고는 IP risk).
- 사람 얼굴이 들어가는 generation은 디폴트 거절 (DiceBear avatars 같은 캐리커처는 OK).

## 5. 출력 보고

처리 끝에 한 줄 요약:

```
✓ 4 images materialized (codex)  ·  0 skipped  ·  0 errors
  → experiments/2026-05-19/karrot/assets/{hero,one-color,grid,detail}.png
```

또는 fallback이 섞였을 때:

```
✓ 2 codex · 2 asset-curator fallback · 1 user-queue
```

## 6. 호출 envelope

```yaml
agent: omd-codex-image
inputs:
  artifact_path: experiments/2026-05-19/karrot/landing.html
  channel: codex          # 또는 claude-code | opencode | auto
  force: false            # done 주석 무시하고 재생성
  dry_run: false          # spec parse만 하고 generation 안 함
```

`channel: auto`면 env 또는 host detection으로 분기.

## 7. 금지

- spec 블록을 *제거*하지 말 것. done 주석만 *추가*. spec은 영구 기록.
- Codex가 사용 불가한 환경에서 channel=codex 강제 호출 X — auto 또는 명시적 fallback 사용.
- 같은 filename에 다른 prompt 두 번 처리 금지 (idempotency violation).
- generation prompt에 사람 신원이나 실명 절대 넣지 않기.

## 8. 다른 스킬과의 관계

- **omd-asset-curator**: 무료 라이선스 자산 카탈로그. codex-image의 claude-code fallback path.
- **omd-reference-capture**: 라이브 브랜드 사이트 캡쳐. `references:` URL 검증용으로 같이 쓰면 정확도 ↑.
- **omd-orchestrator**: HTML emit 후 codex-image를 마지막 단계에 끼워 넣을 수 있음. orchestrator의 worker 카탈로그에 추가됨.
- **omd-final-qa**: gen 결과 paste-in 후 자기 rubric에 "image quality" 항목 추가 (선택).
