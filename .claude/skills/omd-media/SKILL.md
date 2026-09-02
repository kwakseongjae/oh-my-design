---
name: omd:media
description: "Brand-consistent asset sets from DESIGN.md — hero, section illustrations, icon sets, OG image — generated through whichever channel the user actually has (grok build image_gen, Codex $imagegen, Gemini, xAI/Recraft/OpenAI keys) as recorded by omd:setup, with a provenance and cost ledger. No channel → prompt pack + manual queue, never stock. Trigger: '이미지 세트 만들어', '에셋 생성', 'generate assets', 'hero image', '아이콘 세트', 'OG 이미지'."
argument-hint: "<set: hero|sections|icons|og|all> [--brand <id>|--design DESIGN.md] [--budget 1.00] [--channel grok-build|codex-imagegen|…]"
user-invocable: true
---
<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->


# omd:media — 브랜드 자산 세트, 가진 채널로

입력은 `DESIGN.md`(토큰·서사·금지)와 `.omd/config.json`(`omd:setup`이 저장한 채널·예산)이다. config가 없으면
먼저 `omd:setup`을 돌린다 — 채널을 추측하거나 "키를 발급받으라"고 말하지 않는다.

## 1. 프롬프트 팩 (채널 무관, 항상 만든다)

`assets/generated/<set>/PROMPTS.md` — 항목마다:
- 역할(히어로 / 섹션 n / 아이콘 / OG) · 비율(히어로 16:9 · OG 1.91:1 · 아이콘 1:1) · 크기
- **프롬프트 원문**: 컨셉 한 문장 + 피사체 + 구도 + 빛·질감 + **팔레트 hex 잠금**(DESIGN.md 토큰 인용 경로) + 금지(얼굴·로고·텍스트·스톡 느낌)
- 스타일 참조: `assets/_reference/` 캡처가 있으면 경로(Recraft style_id 생성 입력)
- 랜딩이면 `storyboard.md`의 섹션별 에셋 계획을 그대로 읽는다(중복 작성 금지).

## 2. 채널 실행 (config `media.image` 순서대로, 실패 시 다음)

| 채널 | 호출 | 산출 |
|---|---|---|
| `grok-build` | `grok --prompt-file <p> -m grok-4.6 --always-approve --cwd <run>` — 프롬프트는 "image_gen으로 생성해 `<path>`로 cp" 지시 | jpg/png |
| `codex-imagegen` | `codex exec "<prompt>… save to <path>"` ($imagegen, ChatGPT 로그인) | png |
| `gemini-nanobanana` | `gemini -p` + nanobanana 확장(`/generate`) | png |
| `xai-api` | `POST /v1/images/generations` (grok-imagine-image-2.0) — env `XAI_API_KEY` | jpg |
| `recraft-api` | style 생성(참조 1–10장 → `style_id`, 레퍼런스별 1회) → `svg` 생성 | **svg** |
| 없음 | 프롬프트 팩 + `assets/generated/QUEUE.md`(사람이 돌릴 목록) + 팔레트 추상 SVG 플레이스홀더 | — |

아이콘 세트는 Recraft가 없으면 **인라인 SVG로 직접 그린다**(24px 그리드, 1.5px 스트로크, DESIGN.md 색) — 이모지·아이콘 폰트 금지.
얼굴 사진·로고 생성 금지(로고는 다운로드만). 스톡 CDN 금지.

## 3. 원장 (필수)

`assets/generated/LEDGER.md` 표: 파일 · 역할 · 채널 · 모델 · 프롬프트 sha256 · 비용(USD, 추정이면 표시) · 생성 시각 · 재시도 · 라이선스/출처.
`budgetUsdPerSet`(기본 $1)를 넘기면 멈추고 남은 항목을 QUEUE로 돌린다. 기존 `## Used Assets` 표(omd-asset-fetch)와 같은 파일에 합친다.

## 4. 검증

- 크기·비율이 프롬프트 팩과 맞는지(`sharp` 메타) · 팔레트 근접(상위 6빈 ΔE, `test-v2/tools/verify.mjs` 절차) — 어긋나면 1회 재생성.
- 랜딩이면 `landing-integrity.mjs` LI-18~20(비디오 속성·스톡 호스트)이 통과해야 한다.

## 하드 룰

발급·결제 지시 금지 · 키 값 기록 금지 · DESIGN.md에 없는 색을 프롬프트에 넣지 않는다 · 생성물은 항상 "unofficial generated"로 표시할 수 있게 원장에 남긴다.
