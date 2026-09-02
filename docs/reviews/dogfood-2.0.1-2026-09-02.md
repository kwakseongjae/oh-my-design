# 도그푸딩 — oh-my-design-cli 2.0.1 (설치본, Claude Code 경로)

- 일시: 2026-09-02 20:40 KST 시작
- 계획: `docs/OMD_DOGFOOD_2026-09-02.md`
- 프로젝트: `/tmp/omd-dogfood` (레포 밖, throwaway)
- 실행자: opus 서브에이전트(무인). 문답은 각 문항의 첫 선택지를 골라 `autoSelected`로 기록.
- 소스: `npm pack` 산출 `oh-my-design-cli-2.0.1.tgz` (634 files, 6.29 MB, shasum 6f2b574194c700abf142494dce42831bb47525c9)

## 0. 셋업

```bash
npm pack
# → oh-my-design-cli-2.0.1.tgz

mkdir -p /tmp/omd-dogfood && cd /tmp/omd-dogfood && npm init -y
npm i /…/oh-my-design-cli-2.0.1.tgz
# → added 7 packages, and audited 8 packages in 846ms / found 0 vulnerabilities

npx omd install-skills --all --dir .
# → Done. 27 skills · 20 sub-agents · 4 hooks · 440 catalog refs ready (169 changed · 0 already current).

cp <repo>/web/references/toss/DESIGN.md ./DESIGN.md   # 356 lines
```

셋업 자체는 무결점. `--all --dir .`은 `omd install-skills --help`에 실재하는 플래그였고
`.claude/skills/`(27개, 디렉터리명은 `omd-setup` 형태) + `.claude/agents/`(20개, `omd-art-director.md` 포함)가 생성됐다.

---

## 경로 1 — `/omd:setup`

설치본 스킬 파일: `.claude/skills/omd-setup/SKILL.md` (81줄). 문안대로 실행.

### 명령·출력

```bash
npx omd setup detect --json     # 0.7s
```
채널 감지 결과(요약): `grok-build` present (grok 1.0.13), `codex-imagegen` present (codex-cli 0.146.1),
`browser-playwright` present (chrome), `ffmpeg` present (8.1.2). 미보유: gemini-nanobanana, xai-api,
recraft-api, openai-api, video-veo. `browser-claude-in-chrome`은 `present: null` (세션 도구 목록으로 판단하라는 주석 포함 — 정확).
`existingConfig: null`.

### 문답(무인 → 첫 선택지)

| 문항 | 선택 | 근거 |
|---|---|---|
| 래스터 1순위 | grok-build | 감지된 것 중 첫 권장 |
| SVG·아이콘 | inline SVG | Recraft 미보유 |
| 영상 | grok-build `image_to_video` | 첫 선택지 |
| 브라우저 | playwright | 첫 선택지(결정론) |
| 세트 예산 | $1 | 기본값 |

### 산출

- `.omd/config.json` — 스킬 §4 스키마 그대로 (`media.image=["grok-build","codex-imagegen"]`, `svg:"inline"`,
  `video:"grok-build"`, `budgetUsdPerSet:1`, `browser:"playwright"`, `detected`, `autoSelected`, `notes`). JSON 파싱 OK.
- `.omd/preferences.md` — pending 1줄.
- 키 값 스캔: `grep -nEi 'sk-|xai_|api_key|token|/Users/' .omd/config.json` → 0건. **키 유출 없음.**

### 판정: PASS

### 발견된 문제

1. **(문서-CLI 불일치, minor)** `omd-setup/SKILL.md:75`
   > `- omd doctor` — 설정 요약을 한 줄로 보여 준다.

   실제 `npx omd doctor`는 `.omd/config.json`을 전혀 읽지 않는다. 출력에 채널·예산 요약 줄이 없다
   (skills/agents/references 카운트 · Chrome 경로 · DESIGN.md 유무만).
   최소 수정(택1): (a) `src/commands/doctor.ts`에 `.omd/config.json` 존재 시 `media.image[0]`·`budgetUsdPerSet` 한 줄 추가,
   또는 (b) `skills/omd-setup/SKILL.md:75` 문장을 삭제. 도그푸딩 관점에서는 (a)가 사용자 기대에 맞다.

2. **(문안 모호, minor)** `omd-setup/SKILL.md:22-25` — 두 명령을 나란히 두고
   "`scripts/omd-setup-detect.mjs`가 있으면 위 줄을, 없으면 아래 줄을 쓴다"라고 하는데, 설치본 사용자는
   레포 스크립트를 절대 갖지 않는다. 설치본이 기본 경로이므로 `omd setup detect --json`을 먼저 쓰고
   레포 경로를 각주로 내리는 편이 오독을 줄인다. 최소 수정: `skills/omd-setup/SKILL.md` §1 두 줄 순서 교체.

---

## 경로 2 — `/omd:media hero --brand toss`

설치본 스킬 파일: `.claude/skills/omd-media/SKILL.md` (49줄). 문안대로 실행.

### 명령·출력

1. 프롬프트 팩 작성 — `assets/generated/hero/PROMPTS.md` (32줄).
   역할/비율/크기 + 프롬프트 원문 + **팔레트 hex 잠금**(DESIGN.md §2 토큰 인용 경로 `tokens.color.primary` 등) + 금지(얼굴·로고·텍스트·스톡).
2. 채널 실행 — `.omd/config.json.media.image[0]` = `grok-build`:

```bash
grok --prompt-file /tmp/omd-dogfood/.grok-hero-prompt.txt -m grok-4.6 \
     --always-approve --cwd /tmp/omd-dogfood --output-format json
# exit=0 · 3분 03초 · num_turns 4
# "Generated one 16:9 hero image and saved it here:
#  /private/tmp/omd-dogfood/assets/generated/hero/hero.jpg"
# total_cost_usd: 0.02695588
```

3. 원장 — `assets/generated/LEDGER.md` (파일·역할·채널·모델·프롬프트 sha·비용·시각·재시도·라이선스 + 검증 절).

### 산출

- `assets/generated/hero/hero.jpg` — JPEG 1280×720, 105 KB,
  sha256 `188ab156ec8a880632d81af72de2bff9627ca427516e94d095a5ddb41f8a400b`
- 결과물 육안 검수: 좌측 1/3 네거티브 스페이스 확보, 흰 캔버스 + 뉴트럴 카드, 블루는 카드 엣지 액센트만.
  DESIGN.md 밖의 색 없음. 얼굴·로고·텍스트 없음. 히어로 배경으로 바로 쓸 수 있는 품질.
- 비용 **$0.0270** < 예산 $1.00. 폴백(codex-imagegen) 미발동.

### 판정: PASS (소요 ≈5분, 비용 $0.027)

### 발견된 문제

3. **(스킬 문안 부족 — 실사용 최대 마찰, major)** `omd-media/SKILL.md:27`
   > `| `grok-build` | `grok --prompt-file <p> -m grok-4.6 --always-approve --cwd <run>` — 프롬프트는 "image_gen으로 생성해 `<path>`로 cp" 지시 | jpg/png |`

   표의 한 칸이라 실행자가 **프롬프트 파일을 직접 조립해야** 하는데, 필수 요소가 명시돼 있지 않다.
   실제로 성공시키려면 (a) 저장 경로를 `--cwd` 기준 상대경로로 못박고, (b) "image_gen이 다른 곳에 쓰면 `cp`로 옮겨라"를
   명시하고, (c) 마지막에 절대경로를 출력시켜 확인해야 한다. 또 `--output-format json`이 표에 없어
   **비용을 원장에 적을 방법이 문안에 없다** — 원장은 §3에서 비용을 필수로 요구하는데 채널 호출 문안이 비용 출처를 안 준다.
   최소 수정: `skills/omd-media/SKILL.md` §2 표 아래에 grok-build 호출 스니펫 4줄 추가 —
   `--output-format json` 포함, 프롬프트 템플릿(경로 고정 + cp 폴백 + 경로 출력),
   비용은 응답 JSON의 `total_cost_usd`에서 읽는다는 한 줄.

4. **(검증 규칙이 채널 능력과 충돌, minor)** `omd-media/SKILL.md:44`
   > `- 크기·비율이 프롬프트 팩과 맞는지(`sharp` 메타) … 어긋나면 1회 재생성.`

   프롬프트 팩은 히어로 1920×1080을 적게 돼 있으나(§1 "비율 · 크기") grok image_gen은 **출력 해상도를 지정할 수 없고**
   1280×720을 준다. 규칙대로면 무한히 어긋난 채로 1회 재생성만 낭비한다. 또 `sharp`는 설치본 의존성에 없다
   (`npm i oh-my-design-cli` 후 `require('sharp')` 불가) — 검증 수단이 실재하지 않는다.
   최소 수정: `skills/omd-media/SKILL.md:44` 를 "비율만 검증하고(가로세로비), 픽셀 크기는 채널 상한을 기록한다.
   메타 확인은 `sharp` 대신 `file`/`sips`(macOS)/`identify`" 로 교체.

5. **(레포 전용 경로 노출, minor)** `omd-media/SKILL.md:44-45` 는 `test-v2/tools/verify.mjs`와
   `node test-v2/tools/landing-integrity.mjs`를 지시한다. 설치본 사용자에게는 `test-v2/`가 존재하지 않는다.
   45줄은 "(설치본: `omd check landing`)"을 괄호로 병기했지만 44줄은 "레포 전용"이라고만 하고 설치본 대안이 없다.
   최소 수정: 44줄에 "설치본에는 대응 명령 없음 — 육안 검수 + 원장 기록으로 갈음" 명시.

---

## 경로 3 — `/omd:landing toss — 앱 설치 전환`

설치본 스킬 파일: `.claude/skills/omd-landing/SKILL.md` (112줄).

### 3-0. 시작 전에 이미 막히는 지점 (blocker)

6. **(설치본에서 필수 입력이 없는 경로로 지시됨, BLOCKER)** `omd-landing/SKILL.md:15` 과
   `.claude/agents/omd-art-director.md:17` 둘 다:
   > `docs/design-excellence/landing-craft-codex.md`(실측으로 정한 것, 규칙 ID `LC-n`). **둘 다 읽지 않았으면 시작하지 않는다.**

   설치된 프로젝트에는 `docs/design-excellence/`가 없다. 실제 파일은 패키지 안에만 있다:
   `node_modules/oh-my-design-cli/docs/design-excellence/landing-craft-codex.md` (214줄, 패키징은 정상).
   문안대로면 스킬은 "시작하지 않는다"에서 멈춘다. 서브에이전트도 같은 상대경로를 받으므로 스스로 못 찾는다.
   최소 수정(택1):
   (a) `skills/omd-landing/SKILL.md:15` + `.claude/agents/omd-art-director.md:17` 의 경로를
       "레포: `docs/design-excellence/landing-craft-codex.md` · 설치본:
       `node_modules/oh-my-design-cli/docs/design-excellence/landing-craft-codex.md`
       (둘 다 없으면 `node -p \"require.resolve('oh-my-design-cli/package.json')\"`로 패키지 루트를 찾는다)" 로 교체. **권장**
   (b) `omd check`처럼 `omd codex landing`(코덱스 본문을 stdout으로) 서브커맨드를 추가.
   같은 문제가 `omd-media/SKILL.md`(§4 `test-v2/…`)에도 있음 — 발견 #5.

7. **(런 디렉터리 부트스트랩 부재, major)** `omd-landing/SKILL.md:26-37` 은 "산출 (run 디렉터리 안에만)"이라며
   트리를 보여주지만 **`<run>`이 무엇인지, 누가 만드는지 어디에도 없다.** `omd-harness`는 SKILL.md 안에
   `mkdir -p .omd/runs/<run-id>` 셸 블록을 갖고 있는데 `omd:landing`에는 그 블록이 없다.
   실행자는 매번 임의 경로를 발명하게 된다(이번 실행은 `.omd/runs/run-toss-landing/`을 임의 채택).
   최소 수정: `skills/omd-landing/SKILL.md` §산출 위에 harness와 동일한 4줄 셸 블록 추가
   (slug 파생 → `mkdir -p .omd/runs/landing-<slug>/assets` → `<run>` 정의).

### 3-1. 아트디렉터 스폰 — 1차 시도는 스톨

`Agent(subagent_type: "omd-art-director")`로 스폰(20:48). 지시: DESIGN.md + 코덱스(패키지 내부 경로) + 브리프 +
이미 생성된 `assets/hero.jpg`를 히어로 블리드 에셋으로 배치.

**1차 시도는 이미지 Read 직후 진행이 멎어 약 4분 시점에 강제 종료.** 서브에이전트 트랜스크립트의 마지막 이벤트가
`Read(file_path: ".../assets/hero.jpg")` — 105 KB JPEG을 base64 이미지 tool_result로 컨텍스트에 넣은 직후
새 이벤트가 하나도 발생하지 않았다. 종료 시 에이전트의 마지막 말:
> "I have the DESIGN.md and codex in full. One more input to inspect is the hero asset itself, so I can place type against its actual composition."

8. **(에이전트 스톨, major)** `.claude/agents/omd-art-director.md` 는 도구로 `Read, Glob, Grep, Write`를 갖고,
   역할 문안에 **에셋을 어떻게 참조하라는 규정이 없다.** 아트디렉터는 자연히 히어로 이미지를 열어보려 하고,
   대용량 이미지 tool_result 뒤에서 진행이 멎었다(1/1 관측, 4분 시점 종료 — "영구 스톨"로 단정할 만큼 오래
   기다리지는 않았다). 이미지 Read를 금지한 2차 스폰은 같은 역할·같은 입력으로 정상 진행했다. 기존 메모
   "designer-review agents stall without a tool-call cap"와 같은 계열로 보인다.
   최소 수정: `.claude/agents/omd-art-director.md` 에 한 줄 —
   "에셋은 **말로 받은 설명과 메타데이터(`file`/`sips`)로만** 다룬다. 이미지 파일을 `Read`로 열지 않는다
   (대용량 이미지 tool_result에서 세션이 멈춘다). 구도 판단에 원본이 필요하면 호출자에게 서술을 요구한다."
   같은 문장을 `skills/omd-landing/SKILL.md` §1(아트디렉터 호출부)에도 넣어 호출 프롬프트가 서술을 반드시 포함하게 한다.

2차 스폰은 "이미지를 Read하지 말 것 + 히어로 서술 문단 제공"만 추가해 동일 역할로 재시도.

### 3-2. 아트디렉터 산출 (2차 스폰, 정상)

`concept.md` 89줄 / `storyboard.md` 114줄, 둘 다 run 디렉터리 안. 스폰 → 산출까지 약 10분.
산출 품질은 **높다** — 실제로 이 두 파일만 보고 render.html을 구현할 수 있었다:

- 컨셉: "질문이 그대로 답이 되는 곳" — 형용사가 아니라 장면.
- 섹션 7개, 합계 10.1 vh(LC-8 10–16), 리듬 1.1 → 0.9 → **▲2.0(pinned)** → 1.5 → 1.7 → 1.5 → 1.4.
- 압도 지점 S3(핀 스테이지, LC-11 정확히 1뷰포트) + 직전 starve 섹션 S2(LC-34) 명시.
- 섹션별 인라인 SVG 사양이 좌표·hex·rx까지 확정돼 있어 추가 판단이 거의 필요 없었다.
- 스스로 LI-1~23 설계시점 자가 점검표를 붙였다(실측 결과와 3건만 어긋남 — 아래).

### 3-3. render.html 빌드와 자평 루프

`render.html` 408줄, 단독 파일(외부 요청 0), 히어로만 래스터·나머지 전부 인라인 SVG.

| 회차 | `omd check render` | `omd check landing` | `omd check contrast` |
|---|---|---|---|
| 1 | FAIL 6 (escape ×6 — 전부 S5 가로 스크롤러) | FAIL 3 — LI-4 display top 45.4 %vh · LI-10 measure p50 754px · LI-14 `background 300ms` | FAIL 2 — `a.small` 3.59 <4.5 · focus ring 2.39 <3 |
| 2 | FAIL 6 (동일) | **PASS 0** | **PASS 0** |

2회차 수정 5건: 히어로 블록 세로중앙 → 상단 26 %vh 앵커(LC-2) · `.small`/footer measure 640 캡 ·
`transition: background` → `background-color` · `:focus-visible`에 캔버스 halo · 헤더 알파 스크림(LC-36).
아트디렉터의 설계시점 자가 점검이 실측과 어긋난 3건이 정확히 이 FAIL들이었다(설계 표에는 LI-4 28 %vh·LI-10 ≤640·
LI-14 통과로 적혀 있었지만, 구현 기본값에서는 다르게 나온다) — **설계 자가 점검은 실측을 대체하지 못한다**는 증거.

`showcase`:
```bash
npx omd showcase .omd/runs/run-toss-landing/render.html --seconds 4 --dpr 1
# SHOWCASE_DONE …/showcase.mp4 frames=120 doc=9213px 10s
```
→ `showcase.mp4` h264 1440×900 **4.00초** 300 KB. 정상.

산출 전체: `concept.md` · `storyboard.md` · `render.html` · `assets/hero.jpg` · `system.md` · `trace.md` ·
`loop-trace.json` · `showcase.mp4` (스킬 §산출 트리와 일치, `assets/QUEUE.md`는 채널이 있으므로 불필요).

### 판정: PASS (조건부) — 세 검사 중 2종 PASS, render는 도구 오탐 6건 잔존, mp4 생성 확인

### 발견된 문제 (계속)

9. **(검사기 오탐, major — LC-15와 정면 충돌)** `test-v2/tools/render-integrity.mjs:84-95`
   ```js
   if (rect.right > cw + 4 && rect.width < cw * 2) {
     const fullyOff = rect.left >= cw - 2;
     const contained = clippedBy(el) || cs.position === "fixed";
     if (fullyOff && contained) { …offcanvas(정보)… }
     else if (!fullyOff …) { problems.push({ check: "escape", … }); }
   ```
   `contained`(= 스크롤 조상에 클리핑됨) 판정을 **`fullyOff`인 경우에만** 쓴다. 그래서 뷰포트 안에서 시작해
   우측 경계를 가로지르는 요소는 **정상적인 가로 스크롤러 안에 있어도 무조건 `escape` FAIL**이다.
   코덱스 LC-15는 가로 스크롤러를 "밀도 밸브"로 권장하고(페이지당 0–3, 실측 5사이트 중 3곳이 사용) 스킬은
   그 코덱스를 근거로 삼는데, 검사기가 그 패턴을 파손으로 판정한다.
   **10줄 최소 재현**(`/tmp/omd-dogfood/.probe-rail.html` — `ul.rail{overflow-x:auto}` + 400px 항목 5개):
   ```
   FAIL  .probe-rail.html
      ✗ escape: <li.item>  right=1672 (clientWidth 1440)
      · offcanvas: <li.item>  right=2096 (의도된 오프캔버스로 판정)
   ```
   최소 수정: `test-v2/tools/render-integrity.mjs:88-94` 에서 `contained`를 두 분기 모두에 적용 —
   `if (contained) { …정보성 offcanvas/scroller… } else if (!fullyOff) { …escape FAIL… }`.
   (`clippedBy`가 `overflow-x: auto|scroll` 조상을 이미 인식하는지 확인하고, 아니면 그 조건을 추가.)
   같은 수정이 패키지 사본(`node_modules/oh-my-design-cli/test-v2/tools/render-integrity.mjs`)에도 재빌드로 반영돼야 한다.

10. **(문서화 누락, minor)** `omd showcase --help`는 `--seconds`/`--dpr`/`--out`/`--gif`/`--compare`/`--labels`를
    **옵션으로 등록하지 않고** 인자 설명 한 줄로만 언급한다("`--compare, --labels, --out, --seconds, --gif`는
    통과된다"). `--dpr`는 그 줄에도 없는데 실제로는 동작한다. 사용자는 `--help`로 옵션을 알 수 없다.
    최소 수정: `src/commands/showcase.ts`에 `.option('--seconds <n>')`, `.option('--dpr <n>')` 등 6개를 정식 등록.
    또 `SHOWCASE_DONE … frames=120 doc=9213px 10s`의 `10s`는 실제 산출(4.00s)과 다른 값이라 오해를 부른다.

11. **(스킬 문안 — 자평 루프 ④가 실행 불가, minor)** `omd-landing/SKILL.md:83`은 자평 루프 ④로
    `omd-designer-review`를 돌리라고 하지만, ①②②′와 달리 **호출 방법이 없다**(설치본의 서브에이전트 이름인지,
    `omd` 명령인지, 어떤 입력을 주는지). 실제로 `.claude/agents/omd-designer-review.md`가 설치되므로
    Agent 스폰이 맞다.
    최소 수정: `skills/omd-landing/SKILL.md:83` 을
    "④ `omd-designer-review` 서브에이전트 스폰(입력: `render.html` 절대경로 + 프로젝트 DESIGN.md 경로;
    BLOCK만 집계)"로 구체화. GitHub #87이 같은 요구를 이미 담고 있다.

### 3-4. 아트디렉터가 스스로 보고한 문안 마찰 (설치본 기준)

에이전트 종료 보고에서 그대로 옮긴다 — 역할 파일을 고칠 때 근거로 쓸 것:

12. **(역할 문안 전제 오류, minor)** `omd-art-director.md`의 스토리보드 열 정의는 "지속·이징 = DESIGN.md Motion 토큰"을
    전제하는데, Toss DESIGN.md §15는 **어떤 모션 토큰도 promote하지 않는다**("No canonical motion duration or easing
    token is promoted in this revision"). 카탈로그 440개 중 상당수가 같은 상태일 것이다. 에이전트는 스스로
    "로컬 확장"으로 표시하고 넘어갔지만(A5), 문안이 그 경로를 명시해야 한다.
    최소 수정: `.claude/agents/omd-art-director.md` 스토리보드 (e) 열 정의에
    "Motion 토큰이 없으면 300/400ms 같은 값을 **「로컬 확장」으로 표시**해 쓴다(코덱스 LC-29/30)" 한 줄 추가.

13. **(역할 문안 ↔ 도구 권한 불일치, minor)** 역할 문안이 "`file`/`sips`로 치수 확인"을 요구할 수 있는데
    `omd-art-director`의 tools는 `Read, Glob, Grep, Write`뿐 — **Bash가 없다**. 에이전트가 직접 지적했다(A8).
    최소 수정: 역할 문안에서 셸 확인을 빼고 "치수는 호출자가 프롬프트로 준다"로 고정하거나, tools에 Bash 추가.
    (발견 #8의 "이미지 Read 금지" 규칙과 함께 고쳐야 정합적이다.)

14. **(코덱스 ↔ DESIGN.md 토큰 갭, 설계 이슈)** LC-21은 display:body 3.0–4.6×를 요구하는데 Toss DESIGN.md의
    h1은 36px, body 14px → **2.57**이 최대다. 토큰 발명 금지 규칙(스킬 하드룰)과 코덱스 수치가 충돌한다.
    기계 규칙 LI-7(2.5~7.5)은 통과하므로 실행은 막히지 않지만, 어느 쪽이 우선인지 문안에 없다.
    최소 수정: `skills/omd-landing/SKILL.md` 하드룰에 우선순위 한 줄 —
    "코덱스 수치와 DESIGN.md 토큰이 충돌하면 **DESIGN.md가 이긴다**. 코덱스 범위 미달은 `concept.md`에 「가정」으로 남긴다."
    (GitHub #81 "소비자 충돌 해결 우선순위 사다리"와 같은 계열.)

---

## 경로 4 — `/omd:issue process --dry-run`

설치본 스킬 파일: `.claude/skills/omd-issue/SKILL.md` (120줄). §Verb 판별에서 "이슈 처리해줘 / process feedback" → **process**.

### 명령·출력

```bash
gh issue list -R kwakseongjae/oh-my-design --label skill-feedback --state open \
  --json number,title,labels,createdAt --limit 50      # 스킬 §verb:list 그대로
gh auth status   # ✓ kwakseongjae (keyring) — gh 인증 있음 → 사전채움 URL 경로 불필요
npx omd --version # 2.0.1 · node v24.14.0 · macOS 26.5
```

열린 `skill-feedback` 이슈 **12건**(전체 open 21건). 전부 `dogfood` 라벨 — 외부 사용자 접수 0건.
오래된 순(스킬 §process 1번 "오래된 순"):

| # | 생성 | 라벨 | 제목 |
|---|---|---|---|
| 75 | 09-01 | bug | [migrate-reference] `--print-prompt`가 빈 브랜드 디렉터리를 부작용으로 생성 |
| 76 | 09-01 | enhancement | [t2-pipeline] 대형 원본(1,000줄+)에서 의미 검토가 수렴하지 않음 |
| 77 | 09-01 | enhancement | [t3-bench] 레인 B 네이티브 이미지 채널 자격증명 명세·사전 점검 부재 |
| 78 | 09-01 | bug | [harness] 생성 HTML의 UA 기본 스타일 미리셋 → 레이아웃 파손 |
| 79 | 09-01 | enhancement | [harness] 프로젝트 brand.css 분리 산출 |
| 80 | 09-01 | enhancement | [harness] slop rule 이름을 생성 프롬프트에 주입 |
| 81 | 09-01 | enhancement | [core-v2] 소비자 충돌 해결 우선순위 사다리 명문화 |
| 82 | 09-01 | enhancement | [autopilot] unattended 모드 — 질문 자동 선택 + autoSelected 추적 |
| 83 | 09-01 | enhancement | [orchestrator] 셀프 피드백 루프 배선을 정식 절로 |
| 84 | 09-01 | enhancement | [tooling] 멀티페이지 토큰 드리프트 검사 |
| 86 | 09-02 | enhancement | [landing-integrity] 사진 위 텍스트 대비 검사(LI-24) |
| 87 | 09-02 | enhancement | [omd-landing] 자평 루프에 designer-review 자동 호출 |

### 처리 계획 (dry-run — 실제 변경·코멘트·닫기 0건)

세션 상한 5건(스킬 §process 3). 오래된 순 상위 5건에 대해 재현 시도·분류만 수행:

| # | 재현 판정 | 분류 | 계획한 조치(미실행) | 교정의 "가장 좁은 자리" |
|---|---|---|---|---|
| 75 | **재현 불가(설치본)** — `test-v2/tools/migrate-reference.mjs`는 패키지에 동봉되지만 이 도그푸딩 프로젝트에는 `docs/design-md-weight/` 트리가 없어 부작용을 관찰할 조건이 안 됨. 레포에서만 재현 가능 | 유효(레포 내부 도구) | `mkdirSync`를 `--print-prompt` 분기 뒤로 이동 후 닫기 | 검사기/스크립트 — `migrate-reference.mjs:421` |
| 76 | 재현 불가(벤치 파이프라인, 무봉인 수치 접촉 금지) | 유효·대형 작업 | 규칙집에 §별 커버리지 분할 절 추가 → 별도 세션 | 파이프라인 규칙집 |
| 77 | 재현 불가(자격증명 부재가 곧 이슈) | 유효·차단 상태 유지 | run-config에 채널별 env 이름 명세 + `lanes.mjs` 사전 점검 | 게이트 스크립트 |
| 78 | **부분 재현 O** — 이번 런의 `render.html`은 명시적 리셋을 넣어 `omd check render`의 `ua-default` 0건. 리셋을 빼면 재현될 것 | 이미 예방층 존재(스킬 `omd-landing:65`가 #78을 직접 인용) + 기계 검사 존재(`omd check render`) | 남은 것은 **하네스/오토파일럿 쪽 문안**에도 같은 리셋 규칙이 있는지 확인 후 닫기 | 생성 규칙(SKILL.md) + `render-integrity.mjs` |
| 79 | 재현 O(개념) — 이번 런의 단독 `render.html`은 CSS 408줄 중 약 150줄이 인라인 스타일시트. 멀티턴이면 매 턴 재적재 | 유효 | 하네스 첫 산출에서 `brand.css` 분리 + 클래스 어휘 요약만 컨텍스트에 | 생성 규칙(SKILL.md) |

**변경 없음 확인**: 이 경로에서 실행한 명령은 `gh issue list` / `gh issue view` / `gh auth status` 뿐이다.
`gh issue comment`·`gh issue close`·`gh issue edit`·파일 수정·커밋 0건.

남은 7건(80·81·82·83·84·86·87)은 세션 상한 초과로 미처리 — 개수와 함께 보고(스킬 §process 3).
라벨 분포로 본 재발 신호: 12건 중 **7건이 `harness`/`orchestrator`/`landing` 계열 생성 규칙 문제**로,
교정이 아직 "가장 좁은 자리"(각 SKILL.md 생성 규칙)에 안 들어갔다는 뜻이다 — 이번 도그푸딩의 발견 #3·#6·#7·#11도
같은 자리를 가리킨다.

### 판정: PASS (계획 산출·변경 0)

### 발견된 문제

15. **(스킬이 슬래시로 호출되지 않는다, major)** `.claude/skills/omd-issue/SKILL.md` 프론트매터에
    **`user-invocable: true`가 없다.** 설치된 27개 스킬 중 `user-invocable: true`는 10개
    (`omd-codex-image`, `omd-designer-review`, `omd-feel`, `omd-final-qa`, `omd-kr-writer`, `omd-landing`,
    `omd-media`, `omd-setup`, `omd-showcase`, `omd-taste`)뿐이고 `omd-issue`는 빠져 있다.
    즉 계획서의 `/omd:issue process --dry-run` 호출 자체가 성립하지 않는다(자연어 트리거로는 동작).
    최소 수정: `skills/omd-issue/SKILL.md` 프론트매터에 `user-invocable: true` +
    `argument-hint: "[file|list|process] — 기본 file"` 추가.

16. **(`--dry-run`이 스킬에 없다, minor)** process verb는 재현→분류→**수정→닫기**까지 하는 파괴적 루프인데
    "계획만 보고 멈추는" 모드가 문안에 없다. 이번 실행은 `--dry-run`을 임의 해석해 3단계(재현·분류)까지만 했다.
    최소 수정: `skills/omd-issue/SKILL.md` §verb: process 첫 줄에
    "`--dry-run`이면 2번의 재현·분류까지만 하고 계획표를 낸다 — 코멘트·라벨·닫기·커밋 금지." 추가.

17. **(재현 불가 이슈의 출구가 좁다, minor)** `SKILL.md:102-104`는 "재현 안 되면 코멘트 + `question` 라벨"만 준다.
    실제로 상위 5건 중 3건은 **설치본에서 재현이 원리적으로 불가능한 레포 내부 도구/벤치 이슈**다.
    이 경우 `question`은 오분류다(제보자에게 물을 것이 없다).
    최소 수정: 같은 자리에 "재현 환경이 레포 전용이면 `needs-repo-env` 라벨로 분류하고 큐에 남긴다 —
    `question`은 제보 내용이 불충분할 때만" 한 줄 추가.

---

## 총평

| 경로 | 판정 | 소요 | 비용 |
|---|---|---|---|
| 1 `/omd:setup` | **PASS** | ~3분 | $0 |
| 2 `/omd:media hero --brand toss` | **PASS** | ~5분 | $0.027 |
| 3 `/omd:landing toss — 앱 설치 전환` | **PASS(조건부)** — landing·contrast 0 FAIL, showcase mp4 정상, render는 도구 오탐 6건 잔존, 아트디렉터 1차 스폰 실패 후 재시도 성공 | ~25분(아트디렉터 대기 포함) | $0 |
| 4 `/omd:issue process --dry-run` | **PASS** — 계획 산출, 변경 0 | ~3분 | $0 |

**총 4/4 통과**(3번은 조건부). 총 비용 **$0.027**. 전체 소요 약 40분.

핵심: **CLI(엔진)는 견고했다.** `install-skills` · `setup detect` · `check render|landing|contrast` · `showcase`가
설치본에서 모두 첫 시도에 돌았고, 검사기가 실제 결함 3종(LI-4·LI-10·LI-14)과 대비 결함 2종을 정확히 잡아 고치게 만들었다.
**깨진 것은 거의 전부 스킬 문안의 "레포 전제"였다** — 코덱스 경로(#6), `test-v2/` 경로(#5), run 디렉터리 부재(#7),
채널 호출 스니펫 부족(#3), `user-invocable` 누락(#15). 발행 전 이 다섯 개가 우선순위다.

## 수정 목록 (오케스트레이터가 적용 — 발견자는 적용하지 않았다)

| # | 심각도 | 파일 | 수정 |
|---|---|---|---|
| 6 | **BLOCKER** | `skills/omd-landing/SKILL.md:15`, `.claude/agents/omd-art-director.md:17` | 코덱스 경로에 설치본 대안(`node_modules/oh-my-design-cli/docs/…` 또는 `require.resolve`) 병기 |
| 15 | major | `skills/omd-issue/SKILL.md` frontmatter | `user-invocable: true` + `argument-hint` 추가 |
| 3 | major | `skills/omd-media/SKILL.md` §2 | grok-build 호출 스니펫(`--output-format json` 포함) + 프롬프트 템플릿 + 비용은 `total_cost_usd`에서 |
| 7 | major | `skills/omd-landing/SKILL.md` §산출 | run 디렉터리 부트스트랩 셸 블록 4줄(harness와 동형) |
| 8 | major | `.claude/agents/omd-art-director.md` | "이미지 파일을 Read하지 않는다 — 에셋은 서술·메타데이터로만" 한 줄 |
| 9 | major | `test-v2/tools/render-integrity.mjs:88-94` | `contained`를 crossing 분기에도 적용 — 가로 스크롤러(LC-15) 오탐 제거 |
| 5 | minor | `skills/omd-media/SKILL.md:44-45` | `test-v2/…` 레포 전용 경로에 설치본 대안·부재 명시 |
| 4 | minor | `skills/omd-media/SKILL.md:44` | 크기 검증을 비율 검증으로, `sharp` → `file`/`sips`/`identify` |
| 1 | minor | `src/commands/doctor.ts` 또는 `skills/omd-setup/SKILL.md:75` | doctor에 `.omd/config.json` 요약 1줄 추가(권장) 또는 문장 삭제 |
| 2 | minor | `skills/omd-setup/SKILL.md:22-25` | 설치본 명령을 먼저, 레포 명령을 각주로 |
| 10 | minor | `src/commands/showcase.ts` | `--seconds`/`--dpr`/`--out`/`--gif`/`--compare`/`--labels` 정식 등록, `SHOWCASE_DONE`의 `10s` 표기 정정 |
| 11 | minor | `skills/omd-landing/SKILL.md:83` | 자평 ④의 designer-review 호출 방법 구체화(서브에이전트 스폰 + 입력) — GitHub #87 |
| 12 | minor | `.claude/agents/omd-art-director.md` | Motion 토큰 부재 시 「로컬 확장」 표기 경로 명시 |
| 13 | minor | `.claude/agents/omd-art-director.md` | 셸 확인 문구 제거 또는 tools에 Bash 추가(현재 Bash 없음) |
| 14 | minor | `skills/omd-landing/SKILL.md` 하드룰 | 코덱스 수치 ↔ DESIGN.md 토큰 충돌 시 DESIGN.md 우선 — GitHub #81 |
| 16 | minor | `skills/omd-issue/SKILL.md` §process | `--dry-run` 모드 명문화 |
| 17 | minor | `skills/omd-issue/SKILL.md:102-104` | 재현 환경이 레포 전용일 때 `needs-repo-env` 분류 |

**발행 판단**: BLOCKER 1건(#6)은 `omd:landing`을 설치본에서 문안대로 실행할 수 없게 만든다 — 이건 고치고 발행해야 한다.
#15(`/omd:issue`가 슬래시로 안 열림), #3(media 채널 호출법), #7(run 디렉터리)까지 넣으면 4경로 모두 문안만 읽고 재현 가능해진다.
#9(검사기 오탐)는 코드 수정이라 tarball 재생성이 필요하다.

## 산출물 위치 (레포 밖, `/tmp/omd-dogfood`)

```
.omd/config.json · .omd/preferences.md
assets/generated/hero/PROMPTS.md · assets/generated/hero/hero.jpg · assets/generated/LEDGER.md
.omd/runs/run-toss-landing/{concept.md,storyboard.md,render.html,system.md,trace.md,loop-trace.json,showcase.mp4,assets/hero.jpg}
.probe-rail.html  ← 발견 #9의 10줄 최소 재현
```
