# 채택이 레퍼런스 본문의 대부분을 서빙에서 없앤다 — toss 로스터 작업 중 발견

2026-09-20. toss에 43개 로스터를 넣으려고 재채택 체인을 돌리다 **더 큰 것을 발견해서 멈췄다.**

## 실측

`/design-systems/[id]`가 렌더하는 `detail.designMd`는 정본 마크다운이다. 채택된 레퍼런스의
정본은 Core v2이고, Core v2는 섹션마다 예산이 있다
(`experience 1600 · foundations 1600 · typography-assets 1400 · components-states 1600 ·
layout-platforms 1200 · content-locales 1200 · governance 1200` = 약 9,800자).

| 레퍼런스 | 서빙 바이트 | 로스터 | 포맷 |
|---|---|---|---|
| **krds** | **13,267** | **없음** | core-v2 |
| **toss** | **12,088** | **없음** | core-v2 |
| govuk | 35,058 | 있음 | legacy |
| wise | 19,204 | 있음 | legacy |

**krds의 레거시 본문은 72,602바이트다.** 채택 후 서빙되는 건 13,267바이트 —
**문서의 82%가 사용자에게 더 이상 보이지 않는다.**

## 두 채택 모두 이미 로스터를 잃었다

- **toss**: 2026-09-17에 적은 11항목 로스터가 9-18 채택 정본에 **없다.** 아무도 못 봤다.
- **krds**: 오늘 내가 적은 34개 이름이 오늘 내 채택 정본에 **없다.**

krds 커밋에 *"every field the legacy canonical serves survives adoption"* 이라고 썼다.
**투영 필드에 대해서는 참이고 산문에 대해서는 거짓이다.** 파리티 검사가 재는 건
`primary·background·foreground·fontFamily·radius` 다섯 개뿐이라 통과했다. 정정한다.

## 앞으로 어디까지 영향인가

오늘 기록한 로스터 41건 중 **19건이 채택 시 잘려나간다**:
alipay · skyscanner · smarthr · ibm · govuk · hashicorp · money-forward · microsoft · google ·
sanity · samsung · krds · clickhouse · digital-agency-jp · freee · line · miro · socar · ubie

나머지 22건은 예산 안에 들어 살아남는다. **즉 이 결함은 문서 길이에 따라 무작위로 발화한다.**

## 이것이 설계인가 결함인가

Core v2는 "7섹션 이식 가능 계약"이고 전체 문서를 담도록 만들어지지 않았다. 레거시는
`extensions["dev.oh-my-design.migration"].original_segments`에 보존되고 복원 가능하다
(`dropped_segments: 0`·`source_reconstruction_equal: true`가 그래서 참이다).

**그러나 서빙되는 것은 잘린 쪽이다.** AGENTS.md 하드 룰:

> Never enforce absence by deleting or replacing the canonical reference body, collapsing a
> useful reference into a status document…

채택은 정확히 그 일을 한다 — 의도가 아니라 예산의 부작용으로.

## 세 가지 선택지 (오너 판단)

1. **예산을 없애거나 크게 올린다.** Core v2가 전체 본문을 담는다. 이식성 계약의 크기 가정이
   바뀐다.
2. **잘린 부분을 별도 섹션/확장으로 서빙한다.** 계약은 작게 두고 리더가 원문도 함께 낸다.
3. **채택을 보류한다.** 이식 가능 계약이 필요한 소비자(MCP·에이전트)에게는 패키지를 주고,
   `/design-systems`는 계속 레거시 본문을 서빙한다.

**결정 전까지 추가 채택은 하지 않는다.** toss 재채택도 멈췄다 — 지금 돌리면 43개 로스터가
또 잘려서 아무 것도 나아지지 않는다.

## 확보한 것

- `/tmp/toss-legacy.md` — 43개 로스터가 들어간 toss 레거시 본문(미적용)
- 43개 실측: 라벨 5개가 오해를 부른다(`X 이해하기` 4건은 가이드가 아니라 컴포넌트 페이지,
  `V3`는 Agreement의 버전 탭). 라벨만 읽으면 5개를 틀리고 5개를 놓친다.
