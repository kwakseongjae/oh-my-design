# T3-3 레인 B 차단 기록 — 팩 네이티브 이미지 채널 미조달 (2026-08-29)

## 무엇이 막혔나

레인 B는 **각 팩의 고정 SHA가 정한 네이티브 이미지 경로**를 쓴다(`run-config.json.laneB`).
RUBRIC §3.2 표가 arm별 채널을 확정해뒀다:

| arm | 레인 B 이미지 채널 | 이 환경에서 |
|---|---|---|
| omd | Grok Imagine → `xai` | **가능** (grok build CLI, 2026-08-29 한도 초기화) |
| hallmark | nanobanana · recraft · flux → `google` / `recraft` / `bfl` | **불가** |
| uiuxpromax | gemini-3-pro-image · imagen · flux → `google` / `bfl` | **불가** |

팩 문서가 그 채널을 실제로 지정한다 —
`hallmark/.agents/skills/hallmark/references/assets.md:142-145`가 Nanobanana 2 /
Recraft V4 / Flux 2를 enrichment hierarchy로 적고, SKILL.md:401은 그 위계를
"non-negotiable"이라고 못 박는다.

## 실측

- `.env.local`, `web/.env.local`: recraft / replicate / fal / bfl / flux / gemini / google
  관련 키 **0건**
- 프로세스 환경변수: **0건**

## 왜 대체하지 않았나

세 arm에 Grok Imagine을 공통으로 물리면 레인 B가 재려는 대상 자체가 사라진다. 생성 채널을
통일한 레인은 정의상 **레인 A**다(RUBRIC §1). hallmark·uiuxpromax의 산출물을 omd와 같은
채널로 만들어 놓고 "팩 본래 워크플로가 무엇을 완성하는지" 비교했다고 적으면 그것이 곧
결과 조작이다.

이미지를 뺀 채 레인 B를 돌리는 것도 안 된다. 공통 필수 산출물 3종 중 2번이 빠지면 두 arm이
**환경 한계 때문에** 감점되고, 그 감점은 팩 품질 차이로 읽힌다.

## 현재 처리

- **레인 A는 정상 진행한다.** 세 arm 공통 Grok Imagine이고 차단 없음. apple 12/12 완주,
  toss 착수.
- 레인 B는 **자격증명이 조달될 때까지 열지 않는다.** 부분 실행도 하지 않는다 — 일부만 채운
  레인은 나중에 "이 칸은 왜 비었나"를 설명할 수 없게 만든다.
- 이 문서가 그 사유의 정본이다. 리포트 첫 절에 레인 B 부재 사유로 인용한다.

## 열기 위해 필요한 것

hallmark·uiuxpromax 네이티브 채널 중 **각 팩이 1순위로 지정한 것**의 API 키. 대체 채널로
바꾸려면 그것은 팩의 고정 SHA를 벗어나는 변경이므로 재봉인 절차(내용 커밋 → 판정 → 핀 커밋)를
거쳐야 한다.
