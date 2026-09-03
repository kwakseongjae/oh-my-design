---
name: omd-media
description: "Brand-consistent asset sets from DESIGN.md — hero, section illustrations, icon sets, OG image — generated through whichever channel the user actually has (grok build image_gen, Codex $imagegen, Gemini, xAI/Recraft/OpenAI keys) as recorded by omd:setup, with a provenance and cost ledger. No channel → prompt pack + manual queue, never stock. Trigger: '이미지 세트 만들어', '에셋 생성', 'generate assets', 'hero image', '아이콘 세트', 'OG 이미지'."
argument-hint: "<set: hero|sections|icons|og|all> [--brand <id>|--design DESIGN.md] [--budget 1.00] [--channel grok-build|codex-imagegen|…]"
user-invocable: true
---

# omd:media — 브랜드 자산 세트, 가진 채널로

입력은 `DESIGN.md`(토큰·서사·금지)와 `.omd/config.json`(`omd:setup`이 저장한 채널·예산)이다. config가 없으면
먼저 `omd:setup`을 돌린다 — 채널을 추측하거나 "키를 발급받으라"고 말하지 않는다.

## 1. 프롬프트 팩 (채널 무관, 항상 만든다)

`assets/generated/<set>/PROMPTS.md` — 항목마다:
- 역할(히어로 / 섹션 n / 아이콘 / OG) · 비율 · 크기
  - **비율은 기본값에서 고르지 말고 「그 이미지가 들어갈 자리」에서 가져온다.** 레이아웃 슬롯의 실제 종횡비를
    재고(렌더가 있으면 그 박스, 없으면 설계 폭÷높이), 브랜드 증거가 있으면 그 브랜드 이미지의 관행 비율과
    맞춘다. 히어로 16:9·OG 1.91:1·아이콘 1:1은 자리를 못 잰 경우의 최후 기본값이지 출발점이 아니다.
  - 근거: T3-3 레인 A 108칸에서 **생성 이미지의 비율이 브랜드 이미지 관행에서 10% 넘게 벗어난 칸이 60%**였고,
    근거 추종 축의 기계 수치는 세 도구 모두 40 이하였다(omd 33.8 · hallmark 34.6 · uiuxpromax 35.9).
    페이지 안에서 잘려 나가는 비율은 p90 0.37로 오히려 완만했다 — 문제는 배치가 아니라 **생성 시점에 고른 비율**이다.
- **프롬프트 원문**: 컨셉 한 문장 + 피사체 + 구도 + 빛·질감 + **팔레트 hex 잠금**(DESIGN.md 토큰 인용 경로) + 금지(얼굴·로고·텍스트·스톡 느낌)
- 스타일 참조: `assets/_reference/` 캡처가 있으면 경로(Recraft style_id 생성 입력)
- 랜딩이면 `storyboard.md`의 섹션별 에셋 계획을 그대로 읽는다(중복 작성 금지).

## 2. 채널 실행 (config `media.image` 순서대로, 실패 시 다음)

### 2.0 세트는 배치로 — `openai-batch` (OPENAI_API_KEY 가 있을 때 기본)

12~40장 세트는 낱장 호출이 아니라 **OpenAI Batch API** 로 한 번에 넣는다(출력 토큰 50% 할인, 공식 확인).
도구: `node test-v2/tools/image-batch.mjs run --spec <set.json> --out <dir>` — `plan` 은 오프라인이라 키 없이도
JSONL 과 비용 구조를 미리 볼 수 있다. 스펙의 `styleSuffix` 는 **모든 프롬프트 끝에 토씨 그대로 붙는다**
(우리 채널에는 시드가 없어 세트 일관성은 이것과 참조 이미지뿐이다). 참조 이미지가 있는 슬롯은 `/v1/images/edits`
배치로 자동 분리된다(최대 16장). 결과는 `images/<id>.png` + `results.json`(sha256·usage) + `ledger.json`(비용).
size 는 슬롯 실측 비율에서 고른다 — 허용 목록·제약은 도구가 검증한다.

| 채널 | 호출 | 산출 |
|---|---|---|
| `grok-build` | `grok --prompt-file <p> -m grok-4.6 --always-approve --cwd <run>` — 프롬프트는 "image_gen으로 생성해 `<path>`로 cp" 지시 | jpg/png |
| `codex-imagegen` | `codex exec "<prompt>… save to <path>"` ($imagegen, ChatGPT 로그인) | png |
| `gemini-nanobanana` | `gemini -p` + nanobanana 확장(`/generate`) | png |
| `xai-api` | `POST /v1/images/generations` (grok-imagine-image-2.0) — env `XAI_API_KEY` | jpg |
| `recraft-api` | style 생성(참조 1–10장 → `style_id`, 레퍼런스별 1회) → `svg` 생성 | **svg** |
| 없음 | 프롬프트 팩 + `assets/generated/QUEUE.md`(사람이 돌릴 목록) + 팔레트 추상 SVG 플레이스홀더 | — |

grok-build 호출은 이 형태다(도그푸딩 2026-09-02에서 실패한 자유 조립 대신):

```bash
cat > "$RUN/media-hero.prompt" <<'EOF'
image_gen 도구로 아래 프롬프트의 이미지를 1장 만들고, 결과 파일을 현재 디렉터리 기준 `assets/generated/hero/hero.jpg`에 저장(다른 곳에 저장됐으면 `cp`로 옮긴다).
마지막 줄에 저장한 파일의 절대 경로를 출력해라.
프롬프트: <PROMPTS.md의 원문>
EOF
grok --prompt-file "$RUN/media-hero.prompt" -m grok-4.6 --always-approve --cwd "$RUN" --output-format json > "$RUN/media-hero.out.json"
# 비용은 응답 JSON의 total_cost_usd, 세션은 sessionId — 원장에 그대로 적는다
```

아이콘 세트는 Recraft가 없으면 **인라인 SVG로 직접 그린다**(24px 그리드, 1.5px 스트로크, DESIGN.md 색) — 이모지·아이콘 폰트 금지.
얼굴 사진·로고 생성 금지(로고는 다운로드만). 스톡 CDN 금지.

## 3. 원장 (필수)

`assets/generated/LEDGER.md` 표: 파일 · 역할 · 채널 · 모델 · 프롬프트 sha256 · 비용(USD, 추정이면 표시) · 생성 시각 · 재시도 · 라이선스/출처.
`budgetUsdPerSet`(기본 $1)를 넘기면 멈추고 남은 항목을 QUEUE로 돌린다. 기존 `## Used Assets` 표(omd-asset-fetch)와 같은 파일에 합친다.

## 4. 검증

- **가로세로비**가 프롬프트 팩과 맞는지(`sips -g pixelWidth -g pixelHeight`(macOS) / `file` / `identify`; `sharp`는 설치본에 없다) — 픽셀 크기는 채널이 정한다(grok image_gen은 1280×720 고정)이므로 원장에 채널 상한을 적을 뿐 재생성 사유가 아니다. 비율이 어긋나면 1회 재생성.
- 팔레트 근접(상위 6빈 ΔE)은 레포에서만 `test-v2/tools/verify.mjs`로 잰다 — 설치본에는 대응 명령이 없으므로 육안 검수 + 원장 기록으로 갈음.
- **브랜드 이미지 성격 대조(브랜드 증거가 있을 때).** `verify.mjs`가 쓰는 허용 오차를 그대로 목표로 삼는다:
  비율 상대오차 ≤ 0.10 · 평균 휘도 차 ≤ 0.20 · 다이내믹 레인지 차 ≤ 0.20 (둘 다 0–1 척도) · 팔레트 거리 ≤ 25.
  벗어나면 프롬프트의 빛·대비·팔레트 문구를 고쳐 **한 번 다시 생성**하고, 두 번째도 벗어나면 그 사실을 원장에
  적는다 — 통과한 척하지 않는다. 브랜드 증거가 없으면 이 항목은 「측정 불가」로 원장에 남긴다(생략이 아니라 기록).
- 랜딩이면 `node test-v2/tools/landing-integrity.mjs`(설치본: `omd check landing`) LI-18~20(비디오 속성·스톡 호스트)이 통과해야 한다.

## 하드 룰

발급·결제 지시 금지 · 키 값 기록 금지 · DESIGN.md에 없는 색을 프롬프트에 넣지 않는다 · 생성물은 항상 "unofficial generated"로 표시할 수 있게 원장에 남긴다.
