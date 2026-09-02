# 웨이브 36–50 착수표

잔여 브랜드 중 알파벳 순 75개(웨이브 36–50). 완주 시 원장 **253 / 440 (58%)**.
46–50은 2026-08-29 추가 — 사용자 지시로 웨이브 50까지 승인 없이 자율 진행한다.

**골든 샘플 3개(`29cm` · `karrot` · `musinsa`)는 대상이 아니다.** `migrated/`에 없어서
잔여 목록에 섞여 나오지만 `golden-samples/`에 있고 DONE.txt에 등재돼 있다. 웨이브 37을
처음 뽑았을 때 `karrot`이 들어갔던 자리다.

| 웨이브 | 대상 |
|---|---|
| 36 | jobkorea · jobplanet · jumpit · kakaobank · kakaogames |
| 37 | kakaopage · kakaopay · kakaot · kb-kookmin · kbank |
| 38 | kbpay · kcd · kdan · kia · kintone |
| 39 | kkbox · kkday · kmong · krafton · kraken |
| 40 | krds · kream · kurly · kyobobook · lablup |
| 41 | laftel · lamborghini · laundrygo · layerx · lemonbase |
| 42 | lezhin · lguplus · likelion · liner · loom |
| 43 | lotteon · lovable · lunit · maicoin · mailchimp |
| 44 | makinarocks · mastercard · maum-ai · medibloc · megabox |
| 45 | meituan · melon · mercari · mercury · meta |
| 46 | microsoft · mikan · mildang · millie · minimax |
| 47 | mintlify · miricanvas · miro · mistral.ai · mixi |
| 48 | modusign · moin · momoshop · money-forward · mongodb |
| 49 | monzo · moreh · moze · muji · mustit |
| 50 | mynavi · myrealtrip · naverpay · naverwebtoon · ncsoft |

## 착수 절차

브랜드마다 세 프롬프트를 조립한다 — 상세는 `prompts/README.md`.

```bash
B=<brand>; P=docs/design-md-weight/prompts
node test-v2/tools/migrate-reference.mjs --brand $B --print-prompt worker  > /tmp/w-$B.txt
cat $P/worker-addendum.md                                                >> /tmp/w-$B.txt
node test-v2/tools/migrate-reference.mjs --brand $B --print-prompt auditor > /tmp/f3-$B.txt
cat $P/f3-conditions.md                                                  >> /tmp/f3-$B.txt
{ cat $P/review-header.md; printf '\n대상: %s\n' $B; }                    > /tmp/rv-$B.txt
```

## 층 순서와 실행

이관 → `--gate-only` → F3 → 의미 검토 → (FAIL이면) 개정 → 재검증 → `wave-close` → 커밋.

- 모델: grok build CLI `grok --prompt-file … -m grok-4.6 [--always-approve] --output-format json` (2026-08-29 cursor-agent 대체)
- **검토만 `--always-approve` 없이** — 판정하고 고치지 않는 층이다
- **스테이지당 5기**로 유지한다(웨이브 27에서 중복 실행 사고가 났다)
- `nohup … &` 금지. 하네스의 `run_in_background`를 쓴다 — 로그가 0바이트여도 프로세스는
  살아 있을 수 있고, 그 오판이 웨이브 27의 중복 실행을 만들었다
- 프로세스 조회·종료는 이 프로젝트 경로(`web/references/` · `migrated/`)로 좁힌다.
  같은 머신에서 다른 프로젝트가 자체 `cursor-agent`를 돌린다

## 러너 (2026-09-02, 웨이브 46+)

위 층 순서를 **브랜드 단위 파이프라인**으로 자동 실행하는 러너가 있다. 층을 손으로 이어
붙이지 않는다 — 웨이브 45가 층 직렬로 4시간 25분 걸렸고, 손 조립이 프롬프트 드리프트(예방
조항 누락)와 동일 브랜드 동시 투입 사고를 냈다.

```bash
node scripts/wave-run.mjs --wave 47 --brands mintlify,miricanvas,miro,mistral.ai,mixi \
  --scratch <세션 scratchpad>/w47 --concurrency auto      # run_in_background로
node scripts/wave-run.mjs --wave 47 --brands … --dry-run   # 재개 지점만 본다
node scripts/wave-run.mjs --wave 47 --print miro:worker     # 조립된 프롬프트 확인
```

- 브랜드마다 워커 → gate1 → F3 → gate2(게이트·1:1·use·적합성; 불일치면 자동 정정 1회) →
  검토 → FAIL이면 개정 → gate3 → 재실측표(`remeasure-<brand>.md`).
- 종료 상태 `done` / `human:scoped`(FAIL ≤2 개정 후 오케스트레이터 판정) / `human:fix-cap`(개정
  2회 상한) / `blocked:grok`(402 등 — 같은 명령으로 재개).
- 호출별 초·USD·턴은 `docs/design-md-weight/metrics/wave-<N>.jsonl`에 쌓인다. 마감 판정문의
  소요·비용 수치는 여기서 뽑는다.
- 프롬프트 조립은 러너 한 곳(`prompts/{worker-addendum,f3-conditions,review-header,fix-template,mechfix-template,diet}.md`)이다.
  조항을 더할 때는 파일만 고친다.

## 오케스트레이터가 매 브랜드 확인하는 것

```bash
grep -oF 'derived editorial' <산출 DESIGN.md> | wc -l     # 본문 완전형 한정
# provenance의 derived 원장 데이터 행수와 같아야 한다(1:1)
node test-v2/tools/migrate-reference.mjs --brand $B --gate-only
node -e "const fs=require('fs');const{inspectDesignMd}=require('./scripts/design-md-core.cjs');
         console.log(inspectDesignMd(fs.readFileSync(p,'utf8')).conformance)"
```

**이 계수 대조는 숫자만 본다.** 양쪽이 함께 좁으면 통과한다(웨이브 34 inflearn: 21=21인데
한정 6곳 누락). 그 형태는 F3 조건절의 「좁은 쪽도 FAIL」만이 잡는다 — 계수가 맞았다고
정합한 것이 아니다.

## 마감

`node scripts/check-done-ledger.mjs --fix` 후 `node scripts/wave-close.mjs`(5단계 OK 확인).
판정문은 `docs/reviews/t2-1-wave<N>-<날짜>-grok.md`에 남긴다 — 실측 없는 판정은 근거가 없다.
