---
name: omd:release-hygiene
description: "오픈소스 릴리스 위생 루틴. 새 기능/스킬/에이전트를 추가했을 때 (1) 부산물(v1/v2 .bak, _source, 로그, scratch dir)이 changeset에 없는지, (2) 문서(README/docs/home)가 동기화됐는지, (3) npm 배포 대상인지(skills/ + files vs .claude local-preview) 판단했는지 체크리스트로 강제. '릴리스 준비', '커밋 전 점검', 'push 전에 정리', '배포 위생', 'release hygiene' 류 트리거. husky pre-commit이 부산물 게이트를 자동 실행."
user-invocable: true
---

# omd:release-hygiene

오픈소스 레포가 "최적의 결과물만 push"하도록 강제하는 루틴. 실험 과정에서 생긴 부산물이 public repo로 새는 것을 막고, 새 deliverable이 문서/패키징과 어긋나지 않게 한다.

자동 게이트는 [`scripts/check-release-hygiene.sh`](../../../scripts/check-release-hygiene.sh)가 husky `pre-commit`에서 돌린다. 이 스킬은 그 게이트가 잡지 못하는 *판단*(문서 동기화, npm 배포 여부)을 사람/에이전트가 책임지게 한다.

## 0. 언제 트리거하나

- 새 스킬 / 에이전트 / CLI 플래그 / 큰 기능을 추가한 직후
- 커밋 또는 push 직전 ("정리하고 올리자")
- 실험(`experiments/`, `.promo/`)을 돌린 세션의 마무리

## 1. 4-항목 체크리스트 (전부 통과해야 push)

### [1] 부산물 0건 (자동 + 수동)

자동: `bash scripts/check-release-hygiene.sh staged` — pre-commit이 이미 실행.
수동 확인 대상 (게이트 정규식 밖일 수 있는 것):

- 반복 드래프트: `*.v1.html`, `*-draft`, `*-old`, `*-copy`
- 빌드 스크립트가 산출물 옆에 남은 경우: `build.mjs`, `crop-*.mjs` (experiments 안이면 gitignore로 OK)
- 에이전트 로그 / 리뷰 덤프: `.orchestrator.log`, `.reviews/`
- 소스 크롭 / 컨택트 시트: `_source-*`, `*-contact-sheet*`

판단 기준: **"이 파일이 6개월 뒤 처음 보는 기여자에게 의미가 있나?"** No면 부산물.

### [2] scratch 디렉토리는 gitignore (절대 추적 X)

`.gitignore`에 다음이 있어야 한다 (이미 설정됨):

```
experiments/      # 갤러리 + 브랜드 목업 + 저니 (로컬 전용)
.promo/           # hyperframes 프로모 영상
.experiments/     # /omd-lab-* 런
.codex/           # codex 채널 self-install 산출물
.agents/skills/omd*/   # generic-agent 채널 self-install
web/.husky/       # root .husky의 중복본
```

새 채널/툴이 self-install 산출물을 만들면 같은 패턴으로 추가.

### [3] 문서 동기화 (deliverable 추가 시)

새 스킬/에이전트를 추가했으면 다음을 **전부** 갱신:

| 위치 | 무엇을 |
|---|---|
| `README.md` | 스킬 표 / 카운트. shipped vs local-preview 구분 명시 |
| `web/src/app/docs/page.tsx` | `SKILLS` 또는 `V2_SKILLS` 배열 + 섹션 eyebrow 카운트 + 상단 nav anchor |
| `web/src/components/landing-v2/sections.tsx` | "N skills + M sub-agents" 하드코딩 카운트 — **번들(npm) 기준**으로만. local-preview는 카운트에서 제외 |

홈 화면 카운트는 **npm 번들 기준**이다. local-preview 스킬을 더해도 홈 카운트는 안 올린다 (그게 일관성 신호).

### [4] npm 배포 판단 (shipped vs local-preview)

새 스킬/에이전트가 npm 패키지로 나갈지 결정한다. 두 갈래:

**Shipped (번들)** — 다음을 *모두* 해야 함:
1. `skills/<name>/SKILL.md`로 복사 (package source). `.claude/skills/`는 dogfood 미러.
2. 에이전트는 `agents/<name>.md`로 복사 (`agents/`는 통째로 ship).
3. `package.json`의 `files` 배열에 `skills/<name>` 추가 (files가 npm tarball을 gate).
4. 스킬이 의존하는 스크립트/데이터도 `files`에 포함 (예: `data/research/*.md`). 외부 스크립트 의존이 실효성 없으면 ship 전에 제거 (precedent: kr-spellcheck heuristic은 recall 낮아 폐기).
5. README/docs에서 "preview" 딱지 제거, 홈 카운트 +1.
6. 버전 bump: 기능 추가 = minor. **단, 버전 bump와 `npm publish`는 사용자 명시 요청 시에만.**

**Local-preview (dogfood만)** — 기본값:
- `.claude/skills/` + `.claude/agents/`에만 존재. `skills/`·`files`에는 넣지 않음.
- README/docs에 "local preview, not bundled" 명시 + 수동 채택 방법(디렉토리 복사) 안내.
- 기존 local-only 선례: `omd-add-reference`, `omd-batch-launch`, `omd-migrate`, `omd-lab-*`.
- 기존 shipped 선례: v0.2 agent layer (orchestrator / kr-writer / locale-adapter / designer-review / final-qa / codex-image) — 6 skills + 6 agents.

**판단 휴리스틱**: 미완성 의존성(없는 스크립트 참조 등)·preview 성숙도·매 설치마다 footprint 증가가 걸리면 → local-preview. 안정적이고 자급자족이며 모든 채널에서 작동하면 → shipped 후보.

## 2. 실행 순서 (에이전트용)

```
1. bash scripts/check-release-hygiene.sh all      # 부산물 전수 스캔
2. git status --porcelain | grep -iE '_old|_source|\.bak|v[0-9]\.|contact-sheet'  # 이중 확인
3. .gitignore에 scratch dir 누락 없는지 확인
4. 이번 changeset에 새 스킬/에이전트가 있나? → [3] 문서 동기화
5. 새 스킬을 ship할까? → [4] 판단. 기본 local-preview
6. 사용자에게 요약 보고. 커밋/푸시는 명시 요청 시에만.
```

## 3. 출력 형식

```
release-hygiene
  [1] byproducts:   ✓ 0 in changeset
  [2] scratch dirs: ✓ experiments/ .promo/ .codex/ ignored
  [3] docs sync:    ✓ README + /docs updated  (or: N/A — no new deliverable)
  [4] npm decision: local-preview (joins omd-migrate et al.)  (or: shipped → files updated)
```

## 4. 금지

- ❌ `experiments/` / `.promo/` 를 `git add -f`로 강제 추적
- ❌ 부산물 게이트를 `--no-verify`로 우회 (긴급시 외)
- ❌ 사용자 요청 없이 버전 bump 또는 `npm publish`
- ❌ local-preview 스킬을 홈 화면 번들 카운트에 합산
- ❌ shipped로 승격하면서 의존 스크립트를 `files`에 빠뜨림 (= 깨진 설치)

## 5. 관련

- `scripts/check-release-hygiene.sh` — 자동 부산물 게이트 (pre-commit)
- `.husky/pre-commit` — 게이트 + catalog-integrity 실행
- `package.json#files` — npm tarball allowlist (shipped 판단의 ground truth)
