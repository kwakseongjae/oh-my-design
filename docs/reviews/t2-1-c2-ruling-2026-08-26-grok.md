# C2 조문 vs 승인 샘플 충돌 — 최종 승인권자 판정

- 일자: 2026-08-26 · 판정 주체: **grok-4.6** (cursor-agent 경유, 거버넌스상 최종 승인권자)
- 제기: opus5 오케스트레이터 · 발단: 웨이브 23 farfetch 검토가 이 형태를 C2 위반으로 판정

## 충돌

C2 조문이 금지 형태로 **정확히 두 문자열**을 지목했다:

> primitive 종류(`"Interactive control"`, `"Button control"`)만으로 loading/error/success를
> 일괄 `applicable`로 만들지 않는다.

그런데 실측하면 **승인된 골든 샘플이 그 형태를 쓴다**:

| 대상 | 출현 |
|---|---:|
| golden-samples/musinsa | 18 |
| golden-samples/29cm | 11 |
| golden-samples/karrot | 5 |
| 이관본 96건 | **546** |

조문과 승인 기준이 정면으로 충돌하는 상태였고, 546회를 어떻게 볼지가 걸려 있었다.

## 판정

**1. 금지 대상은 문구도 판정도 아니고 행위다.** C2가 막는 것은 *역할 판단 없이 primitive
종류만으로 일괄 여는 행위*다. `applicable`이라는 판정 자체도, "Button control"이라는 문자열도
그 자체로는 위반이 아니다.

**2. 골든 샘플은 미보수 상태다.** 샘플은 C1 시정본(v1)으로 승인됐고 C2는 그 뒤 notion
FAIL에서 v2로 생겼다. 샘플이 형태를 정당화하는 것도, 조문 표현이 과했던 것도 아니다 —
샘플이 C2를 아직 받지 않았을 뿐이다.

**3. 546회는 현행 유지.** 형태가 같다고 한 결함이 아니다. 전량 개정은 **C2가 금지한 일괄
처리를 반대 방향으로 반복하는 것**이고, 사유 문구만 일괄 교체하면 역할상 닫혀야 할 자리가
열린 채 남는다. **라이브 검토에서 역할이 실제로 실패한 자리만 고친다.**

**4. 조문은 개정한다.** 대체 문안이 v10으로 반영됐다 — 금지 대상을 문자열에서 행위로
옮기고, 두 문자열은 "일괄 행위의 **진단 표지**"로 재규정했다.

## 근거 (실측 확인됨)

- C2 출처 `docs/reviews/t1-4-notion-2026-08-23-sol-spotcheck.md` §3은 Bento tab · carousel
  arrow · language trigger · Help toggle의 **일괄 개방**을 문제 삼았다(판정문 실재 확인).
- 그 시정본 `migrated/notion/DESIGN.md`는 Hero CTA의 loading/error/success를
  `Button control; visual treatment omitted` + `applicable`로 **남긴 채** 지목된 네 자리만
  역할 사유로 닫았다. 오케스트레이터 실측: **primitive 형태 21회와 역할 사유 12행이 공존**
  (예: "A marketing feature tab selects a panel; the tab itself does not enter a loading state").
- 이번 웨이브 farfetch 개정이 같은 형태다 — Top nav 탭·Footer link는 목적지 선택 역할이라
  `not-applicable`로 닫고, Outline 버튼은 원본이 `use: "Secondary actions, ghost variant"`로
  행위를 기록하므로 `applicable`을 유지하되 사유만 역할 의미로 교체했다.

## 이 판정이 바꾸는 것

- **검토 층**: 이 형태를 보는 것만으로 FAIL을 매기지 않는다. 그 컴포넌트의 **역할**에
  그 상태가 의미 있는지를 묻고, 아니면 FAIL이다.
- **R2/이후 웨이브**: 546회 일괄 개정 계획은 서지 않는다. 골든 샘플 34회도 마찬가지 —
  샘플을 손볼 때는 역할 판정을 근거로 건별로 한다.
