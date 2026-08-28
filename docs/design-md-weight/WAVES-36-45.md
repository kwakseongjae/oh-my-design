# 웨이브 36–45 착수표

잔여 261브랜드 중 알파벳 순 50개. 완주 시 원장 **228 / 440 (51%)**.

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

- 모델: `cursor-agent -p [-f] --model cursor-grok-4.6-high-fast`
- **검토만 `-f` 없이** — 판정하고 고치지 않는 층이다
- **스테이지당 5기**로 유지한다(웨이브 27에서 중복 실행 사고가 났다)
- `nohup … &` 금지. 하네스의 `run_in_background`를 쓴다 — 로그가 0바이트여도 프로세스는
  살아 있을 수 있고, 그 오판이 웨이브 27의 중복 실행을 만들었다
- 프로세스 조회·종료는 이 프로젝트 경로(`web/references/` · `migrated/`)로 좁힌다.
  같은 머신에서 다른 프로젝트가 자체 `cursor-agent`를 돌린다

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
