---
name: omd-restraint
description: "절제미를 측정 가능한 규칙으로 — 덜어내기(subtraction)·여백·위계를 AUDIT(렌더된 페이지를 데스크톱·모바일에서 재서 규칙별 PASS/FAIL+수치)하거나 APPLY(인벤토리 → 필요 없는 것 삭제 → 중복 병합 → 비운 자리를 초점 요소에 준다 → 재측정)한다. 초점 1개(1등 ≥ 2× 2등), 첫 화면 조각 ≤ 5, 서체 크기 ≤ 4, 헤드라인 ≤ 2줄, 첫 화면 단어 예산, 히어로 CTA ≤ 2, 액센트 1개, 장식 선·그리드·eyebrow 금지, 첫 화면 빈 면적 ≥ 65%, 얇은 화면 금지, 페이지 길이 예산. 규칙마다 출처 등급(실측/관례/휴리스틱). '덜어내 줘', '절제미', '너무 복잡해', '여백 살려줘', '심플하게', 'too busy', 'simplify the page', 'declutter', 'more whitespace', 「余白を活かして」, 「引き算のデザイン」, 「留白」, 「太擁擠了」 류에 트리거. 브랜드 토큰은 DESIGN.md가 이기고, 이 스킬은 양과 위계만 다룬다."
user-invocable: true
---

# omd-restraint — 덜어내기, 측정해서

절제는 취향이 아니라 **양(quantity)과 위계(hierarchy)의 예산**이다. 이 스킬은 "덜어내 줘"를 숫자로 바꾼다:
한 화면에 무엇이 몇 개 있는지, 무엇이 지배하는지, 빈 곳이 덩어리인지 부스러기인지를 렌더에서 재고,
넘친 것을 잘라 그 자리를 남은 하나에 준다.

그리고 반대편 실패도 같은 무게로 잰다. **잘라서 얇아진 페이지도 실패다.** 장식만 빠지고 아무것도 커지지
않은 화면은 블라인드 심사에서 장식 많은 페이지에 진다(tasteskill의 시험 결과). 그래서 모든 삭제는
"그 자리에 무엇이 커지는가"를 함께 적는다. 적을 수 없으면 자르지 않는다.

근거: `docs/research/2026-10-14-restraint/RESTRAINT.md`(측정·규칙 R1–R15·cut/keep/enlarge 표),
`docs/design-excellence/scale-and-simplicity.md`(LC-52/54/55/59, LI-36/37/40), tasteskill v2(MIT, `Leonxlnx/taste-skill`)의
공개 원칙을 의역해 배웠다. 문장을 옮기지 않았다.

## 언제 쓰나 / 쓰지 않나

**쓴다**
- AUDIT — "이 페이지 너무 복잡해", "절제미 점검", "is this too busy?" → 렌더를 재서 규칙표 리포트.
- APPLY — "덜어내 줘", "여백 살려서 다시", "simplify the hero" → 아래 덜어내기 절차로 고치고 재측정.
- 랜딩·제품 소개·카탈로그·문서 첫 화면처럼 **방문자가 처음 보는 화면**의 양과 위계.

**쓰지 않는다**
- 브랜드 값(색·서체·radius·간격 토큰) 결정 → `omd-apply` / `omd-init`. 이 스킬은 토큰을 바꾸지 않는다.
- 모션 타이밍·타깃 크기·대비 같은 미시 물리 → `omd-feel`.
- "AI가 만든 것 같다"는 패턴 진단 → `omd-slop-audit`.
- 밀도를 일부러 올리는 쇼케이스 랜딩(LC-59 밀도 다이얼 ≥ 6) → `omd-landing` / `omd-aphrodite`가 주인. 그때도 R1·R2·R10은 유지한다.
- 대시보드·데이터 테이블·폼처럼 **밀도 자체가 기능**인 앱 화면. 여기서 R2·R4·R8 상한은 틀린 질문이다(표의 선·입력 필드 테두리는 R8에서 이미 제외).
- 정본 레퍼런스 본문을 줄이는 일. 아래 "자르지 않는 것" 참조.

## 우선순위

1. **DESIGN.md가 이긴다.** 브랜드 토큰·컴포넌트 계약·카피 voice는 그대로. 절제는 *몇 개를, 얼마나 크게* 쓸지만 정한다.
   액센트 1개(R7)는 "DESIGN.md의 액센트를 한 곳에만"이지, 다른 액센트를 고르라는 뜻이 아니다.
2. `.omd/preferences.md`의 pending 교정이 DESIGN.md보다 먼저다(omd-apply와 같은 규칙).
3. `omd-landing`과의 경계 — **LC-59 밀도 다이얼 ≤ 5**(제품·카탈로그·문서·OmD 사이트)면 이 스킬의 상한이 랜딩의
   밀도 바닥(LI-24~26)을 이긴다. **다이얼 ≥ 6**(쇼케이스)이면 랜딩 바닥이 적용되고, 여기서는 R1·R2·R10만 유지한다.
4. **자르지 않는 것(AGENTS.md).** 정본 레퍼런스 본문, provenance, "폰트 사용 불가" 표기, JSON-LD, answer-first 요약,
   item page의 `#use` 블록(Copy·Download·raw DESIGN.md·설치 명령·첫 프롬프트). 이것들은 *keep* 또는 *demote*(작게·뒤로)만
   가능하다. 잘리는 것은 크롬(장식·반복·중복)뿐이다.

## 출처 등급 — 숫자가 얼마나 단단한가

omd-feel처럼 모든 임계값에 등급을 단다. 등급이 강제 강도를 정한다.

| 등급 | 뜻 | APPLY | AUDIT |
|---|---|---|---|
| 🟢 **M** measured | 레퍼런스 ≥ 5곳에서 잰 분포에서 나온 숫자(누가 쟀는지 표기) | 강제 | FAIL |
| 🟡 **C** convention | 공개된 연구·규칙, 또는 독립된 출처 ≥ 2곳이 같은 방향. 정확한 숫자는 우리가 재지 않음 | 기본값 | FAIL |
| ⚪ **H** heuristic | 사이트 한두 곳, 검사기 하나, 오너 브리프에서 온 숫자 | 제안 + 등급 명시 | FAIL로 표시하되 리포트에 H라고 쓴다 |

**정직하게:** 15개 규칙 중 레퍼런스 실측(M)은 R1과 R3 데스크톱 비율 둘뿐이다. 나머지는 관례(C)이거나
한 쌍의 사이트(tasteskill.dev vs OmD r3)에서 뽑은 휴리스틱(H)이다. H 임계값은 레퍼런스 프로브가 커지면
움직일 숫자다 — 특히 R4 단어 60, R11 빈 면적 65%, R13 길이 6/9화면. H FAIL은 "고쳐라"가 아니라
"이 숫자를 넘긴 이유를 한 줄로 말할 수 있어야 한다"로 읽는다.

## 규칙 R1–R15

측정 조건: 1440×900과 390×844, scrollY = 0(R11-band·R12·R13은 전 페이지), 쿠키·동의 UI 제외, `prefers-reduced-motion: reduce`.
"조각(piece)"은 LC-54의 폴드 의미 단위다 — 텍스트 블록·CTA·미디어. 단, 붙어 있는 H1+서브헤드+본문은 한 조각(copy stack),
한 줄에 나란한 버튼은 한 조각(actions)으로 센다.

| # | 규칙 | 임계값 | 등급 | 근거 |
|---|---|---|---|---|
| R1 | **초점 하나.** 1등 요소 면적 ≥ 2× 2등 | ≥ 2.0 | 🟢 M | OmD 레인 A 11곳, 지배도 중앙값 2.1(IQR 1.0–3.5). *중앙값 근처라 레퍼런스 절반 가까이가 경계선이다* — 2.0은 "강한 쪽 절반"의 선이다 |
| R2 | **첫 화면 조각 ≤ 5** | ≤ 5 | 🟡 C | Nielsen 2011·LC-54, tasteskill 히어로 스택 ≤ 4. copy stack·actions 병합 규칙은 우리 정의(RESTRAINT.md R2) |
| R3a | **첫 화면 서체 크기 ≤ 4** | ≤ 4 | 🟡 C | tasteskill v2: 크기 2–3개가 일하고 5가 천장 |
| R3b | 페이지 전체 서체 크기 ≤ 6 | ≤ 6 | ⚪ H | RESTRAINT.md. tasteskill.dev 자신은 16개 — 히어로 규율이지 페이지 규율이 아니었다 |
| R3c | **헤드라인 : 본문** | ≥ 4 데스크톱 / ≥ 2.5 폰 | 🟢 M / ⚪ H | 데스크톱: tasteskill 247개 갤러리 사이트 중앙값 ~4.3(그쪽 측정, 우리가 재검증하지 않음). 폰: 한 쌍(taste 3.5, OmD 2.3) |
| R4a | **헤드라인 ≤ 2줄**(모든 폭) | ≤ 2 | 🟡 C | tasteskill v2 카피 예산·심사 상한 |
| R4b | 리드 ≤ 25단어 · ≤ 2줄 | 25w / 2l | 🟡 C / ⚪ H | 단어: tasteskill statement ~25단어. 줄: 우리 |
| R4c | **첫 화면 단어 ≤ 60** | ≤ 60 | ⚪ H | tasteskill.dev 첫 화면 55단어(사이트 하나) |
| R5 | **히어로 CTA ≤ 2**(주 1 + 조용한 1), nav 밖에서 누를 수 있는 것 전부 | ≤ 2 | 🟡 C | tasteskill: 강한 히어로 대부분은 버튼 1개 또는 0개 |
| R6 | **숫자는 그 숫자가 약속일 때만.** 첫 화면 숫자 ≤ 3, 스탯 타일 ≤ 1 | 3 / 1 | ⚪ H | tasteskill.dev 2 vs OmD r3 17 |
| R7 | **액센트 색상군 ≤ 1**, 주 액션과 상태 하나에만 | ≤ 1 | 🟡 C | tasteskill "바탕 하나·잉크 하나·액센트 하나". 브랜드·레퍼런스 색은 콘텐츠 — 한 개체 안에 두고 `--content`로 제외 |
| R8 | **선과 그리드는 일을 할 때만.** 테두리 요소 ≤ 3(표·입력·코드 제외), 장식 그리드 배경 0 | 3 / 0 | ⚪ H / 🟡 C | 테두리 3: RESTRAINT.md 예산. 그리드 0: tasteskill "선 대신 톤과 간격" |
| R9 | **eyebrow·반복 배지·mono 캡션 금지.** eyebrow 0, 작은 대문자/mono 라벨 ≤ 2, 3회 이상 반복되는 배지 0 | 0 / 2 / 0 | 🟡 C | tasteskill은 eyebrow 하나로 총점 6.5 상한, 작은 tracked 대문자 ≥ 3이면 FAIL |
| R10 | **사실은 한 번만.** 같은 숫자·CTA 문구 반복(nav·footer 제외) | 0 (권고) | ⚪ H | RESTRAINT.md. WARN만 낸다 |
| R11a | **첫 화면 빈 면적 ≥ 65%**(데스크톱, 16px 타일 σ < 6) | ≥ 65% | ⚪ H | tasteskill.dev 76~77%, OmD r3 62%. 폰은 기록만 — tasteskill.dev도 50% |
| R11b | 페이지에 연속 빈 띠 ≥ 0.25vh 하나 | ≥ 0.25vh | 🟡 C | LC-55 / LI-40(NN/g minimalism) |
| R12 | **얇은 화면 금지.** 채움 < 20%인 데스크톱 화면 ≤ 1 | ≤ 1 | 🟡 C | tasteskill 검사기: 2화면 이상이면 FAIL, 의도한 쉼은 페이지당 하나 |
| R13 | **길이 예산.** 랜딩 ≤ 6화면 데스크톱 / ≤ 9 폰, 목록은 ≤ 4 / 6 후 페이지네이션 | 6/9 · 4/6 | ⚪ H | 오너 브리프·RESTRAINT.md |
| R14 | **모든 요소에 "사용자가 여기서 무엇이 필요한가" 한 줄.** 빈칸이면 삭제 후보 | 빈칸 0 | 절차 | 검사기가 재지 않는다 — APPLY 표로 확인 |
| R15 | **스타일보다 삭제가 먼저.** 한 라운드에서 (삭제 + 확대) > 추가, 모든 삭제 행에 "커지는 것" | −n ↑n > +n | 절차 | tasteskill 반대 규칙(R12)의 짝 |

R11a와 R12는 일부러 다른 자로 잰다. 빈 면적은 픽셀(무늬 없는 색면은 *빈* 것), 채움은 히트테스트(색면은 *찬* 것).
그래서 "넓은 색면 + 큰 글자 하나"는 둘 다 통과하고, "회색 바탕에 작은 글줄 하나"는 R11a는 통과해도 R12에서 걸린다.
이것이 이 스킬의 반대 규칙을 기계로 지키는 방법이다.

## AUDIT — 렌더에서 잰다

판정은 코드가 아니라 렌더에서 한다. 읽은 코드에는 의도가 섞인다.

```bash
# 설치본(npm 패키지): 어느 프로젝트에서든
npx oh-my-design-cli check restraint <url|page.html> [--out .omd/restraint] [--json]
# 스킬 폴더에서 직접
node <skill>/scripts/audit.mjs <url|page.html> [--kind landing|list|doc] [--exclude "<selector>"] [--content "<selector>"]
```

- 기본 폭 `1440x900,390x844`(`--widths`로 변경). 헤드리스 Playwright Chromium만 쓴다 — 사용자의 Chrome 프로필은 열지 않는다.
  브라우저가 없으면 exit 3과 설치 한 줄(`npx playwright-core install chromium`)을 낸다.
- `--kind`: `landing`(기본, R13 6/9화면) · `list`(목록, 4/6화면) · `doc`(문서, 길이는 기록만).
- `--exclude`: 측정에서 숨길 요소(쿠키 배너 외의 고정 UI). 이름에 cookie/consent/gdpr가 든 fixed/sticky 요소는 자동으로 숨긴다.
- `--content`: R7에서 색을 *콘텐츠*로 볼 개체(브랜드 스와치, 제품 사진 프레임). 레퍼런스 카탈로그라면 스와치 목록이 여기에 해당한다.
- 측정은 `reducedMotion: reduce`, dpr 1, 로드 + 1.2s, 페이지를 한 번 훑어 스크롤 리빌을 깨운 뒤 맨 위에서 잰다.
  smooth-scroll 라이브러리가 있어도 즉시 이동을 강제하고 위치를 확인한다.
- exit 0 = FAIL 없음, 1 = FAIL 있음. `--out`이면 `report.json`과 폭별 첫 화면 PNG를 남긴다.
- 자기 시험: `node <skill>/scripts/selftest.mjs` — `fixtures/busy.html`은 FAIL, `fixtures/restrained.html`은 PASS여야 한다.

리포트를 받으면:
1. **첫 화면 PNG를 직접 본다.** 숫자는 바닥이지 점수가 아니다. "1초 안에 무엇을 봤나"에 답이 하나여야 한다.
2. FAIL을 등급 순(M → C → H)으로 읽는다. H FAIL은 넘긴 이유를 한 줄로 쓸 수 있으면 남겨도 된다.
3. 아래 형식으로 쓴다. 측정 없는 판정은 쓰지 않는다.

```
RESTRAINT AUDIT — <route> (<date>, <kind>)
1440: R1 4.8 PASS · R2 6 FAIL(nav, pill, command, actions×2, deck, copy×3) · R3a 7 FAIL · …
 390: …
Cut list (ranked by how much it frees for the focal element):
  1. <element> — rule <Rn>, measured <value> — cut | merge | demote — grows: <what takes the space>
  2. …
Keep (AGENTS.md / user need): <element> — <one-line need>
```

## APPLY — 덜어내기 절차

토큰은 건드리지 않는다. 한 라운드는 다섯 걸음이고, 라운드는 최대 3번이다.

1. **인벤토리(R14).** 첫 화면과 각 섹션의 요소를 표로 적고, 행마다 "사용자가 여기서 무엇이 필요한가"를 한 줄로 쓴다.
   한 줄을 못 쓰면 그 행이 삭제 후보다. AGENTS.md의 "자르지 않는 것"은 여기서 `keep`으로 고정한다.
2. **자른다.** 필요 한 줄이 없는 것, 장식 선·그리드·eyebrow·반복 배지·mono 캡션(R8·R9), 약속이 아닌 숫자 타일(R6),
   세 번째 이후 CTA(R5), 두 번째 액센트(R7). 자르는 것은 크롬이지 내용이 아니다 — 정보가 담긴 것은 `demote`(작게·아래로·다른 페이지로).
3. **합친다(R10).** 같은 사실·같은 CTA·같은 숫자가 두 번 나오면 가장 좋은 자리 하나만 남긴다. 붙어 있는 문장 셋은 한 copy stack으로.
4. **키운다(R1·R15).** 비운 자리를 초점 요소에 준다 — 헤드라인을 키우거나(R3c 비율), 대표 이미지·제품 화면을 키우거나,
   하나의 색면을 깐다. **삭제 행마다 "커지는 것" 칸을 채운다.** 비운 자리를 다른 장식으로 메우지 않는다.
5. **다시 잰다.** `audit.mjs`를 같은 폭으로 다시 돌리고 전/후 표를 남긴다. R12(얇은 화면)가 새로 FAIL이면 너무 잘랐다 —
   그 섹션은 내용을 온전히 크게 놓거나, 색면 위에 올리거나, 섹션째 없앤다.

라운드 기록 형식:

```
ROUND n — tally: −5 cut · ↑3 enlarged · +0 added   (R15: cuts + enlargements > additions)
| element | need (R14) | verdict | grows into the space |
| eyebrow "New · v2" | none | cut | H1 moves up 40px, 88 → 104px |
| stat tiles ×4 | trust detail, not the promise | demote → /about | lede gets one line with the single number |
before → after: R2 9 → 4 · R3a 7 → 3 · R4c 140 → 48 · R11a 58% → 71% · R12 0 → 0
```

멈춤: R1–R13이 통과하거나(H는 이유 한 줄로 통과 처리 가능) 3라운드. 3라운드 뒤에도 FAIL이 남으면 남은 목록을 그대로 보고한다.

## 반대 규칙 — 얇은 것도 실패다

- 섹션이 비어 보이면 **더하지 말고** 주 요소를 키우거나 섹션을 없앤다.
- 장식을 뺀 자리를 다른 장식으로 메우지 않는다. 크기, 온전한 내용, 진짜 사진, 무늬 없는 색면으로 채운다.
- 의도한 쉼(한 문장만 있는 화면)은 페이지당 하나(R12).
- 모든 섹션은 내용을 끝까지 싣는다. 메뉴 전체, 가격과 포함 내용, 레퍼런스 본문 — 절제는 *양을 줄이는 것*이 아니라 *경쟁을 줄이는 것*이다.

## 다른 스킬과의 관계

- **omd-feel** — 미시 물리(타이밍·radius·타깃). omd-restraint는 *몇 개, 무엇이 지배하나*. 겹치지 않는다.
- **omd-slop-audit** — "생성된 것처럼 보이는" 패턴. eyebrow·아이콘 카드 줄은 양쪽에 걸리지만 slop-audit은 *왜 생겼나*,
  이 스킬은 *몇 개이고 무엇이 커져야 하나*를 묻는다. 같은 finding을 두 번 보고하지 않는다.
- **omd-landing / omd-aphrodite** — 밀도 다이얼로 경계(위 "우선순위" 3). 쇼케이스 랜딩의 바닥 규칙이 이 스킬의 상한과 부딪히면 다이얼이 정한다.
- **omd-designer-review** — 브랜드 일관성. 색 budget은 그쪽이 DESIGN.md 대비로, R7은 첫 화면 *개수*로 본다.

출처와 실측: [`references/benchmarks.md`](./references/benchmarks.md) — tasteskill.dev와 oh-my-design.kr에 이 검사기를 돌린 결과와 측정 조건.
