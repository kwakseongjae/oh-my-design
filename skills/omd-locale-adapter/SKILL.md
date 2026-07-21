---
name: omd:locale-adapter
description: "한국어 canonical 문서·UX copy를 EN/JA/ZH-CN/ZH-TW로 번역이 아니라 locale adaptation한다. thesis·사실·명령어는 보존하되 문장 순서, 주어, register, 제품 용어와 호흡은 각 언어에서 다시 쓴다. '다국어 적용', '영문/일문/간체/대만어 버전', 'locale 문서 만들어줘' 요청에 사용한다."
---

# omd:locale-adapter

한국어 canonical의 뜻과 사실을 다른 언어에서 **같이 이해되게** 만든다. 문장 단위 대응표를 만들지 않는다. EN, JA, ZH-CN, ZH-TW는 서로 독립된 원고다.

## 0. Source contract

- KO가 canonical이다. 다른 locale은 `source_revision` 또는 canonical content hash를 가진다.
- KO가 바뀌면 파생 locale을 stale로 표시하고 변경된 의미 단위를 다시 adapt한다.
- 공유하는 것은 thesis, 사실, 정보 계층, 명령, URL, 제품 동작이다.
- 공유하지 않는 것은 문장 순서, 비유, 인사, 주어, 문장 길이, 문장부호, 설명용 용어다.
- canonical에 없는 사실은 어떤 locale에도 추가하지 않는다.

## 1. Target locale

### EN (`en`)

- 행동과 관찰 가능한 결과를 먼저 쓴다.
- repeated `not X, but Y`, 3단 슬로건, 추상 찬사를 원문의 구조 그대로 옮기지 않는다.
- 제품이 이미 쓰는 US/UK spelling을 유지한다.
- 한국 서비스는 첫 등장에만 독자에게 필요한 짧은 설명을 붙인다.

### JA (`ja`)

- 설명문은 です・ます調를 기본으로 하고 같은 섹션에서 register를 섞지 않는다.
- 필요 없는 `私たちは / あなたは`는 생략한다.
- 제목은 짧게 쓰고 마침표를 붙이지 않는다.
- `正本 / 実ルート / 強いプロンプト` 같은 직역 대신 `唯一の基準 / 実際の製品画面 / 作業依頼`처럼 뜻이 통하는 제품 용어를 쓴다.

### ZH-CN (`zh-CN`)

- 사용자-facing AI는 `AI 编程助手`, 기술 역할은 문맥에 따라 `智能体角色`로 구분한다.
- `赋能 / 无缝 / 全新升级 / 打造闭环` 같은 찬사를 기능 설명 대신 쓰지 않는다.
- `项目唯一设计依据 / 实际产品页面 / 可重复执行的检查 / 空状态`처럼 간결한 제품 용어를 쓴다.
- 행동과 결과를 먼저 쓰고 영어 정보 순서를 복제하지 않는다.

### ZH-TW (`zh-TW`)

- ZH-CN의 글자를 번체로 바꾸지 않고 대만 제품 문체로 다시 쓴다.
- `軟體 / 資訊 / 使用者 / 影片 / 預設 / 介面 / 專案 / 儲存 / 設定 / 登入 / 資料`를 우선한다.
- 사용자-facing AI는 `AI 程式助理`, 저장소는 `程式碼儲存庫` 또는 `專案儲存庫`로 쓴다.
- 일반 UI QA는 `檢查`, 규정·공식 audit만 `稽核`을 쓴다.

세부 후편집 규칙은 설치된 `omd-humanize/references/locale-playbooks.md`에서 대상 locale만 읽는다.

## 2. Adaptation workflow

1. KO canonical, frontmatter, DESIGN.md §10, 승인된 제품 용어를 읽는다.
2. 문서의 thesis 1–3개와 보호 구간(수치·명령·URL·ID·인용·제품 동작)을 적는다.
3. 문서 구조를 의미 단위로 나눈다. H2 개수는 정보 parity를 확인하는 보조 지표일 뿐 강제로 맞추지 않는다.
4. target locale에서 사용자가 읽을 순서로 문단을 새로 구성한다.
5. 문화 맥락이 없으면 첫 등장에만 짧게 설명한다. 등가 비유가 없으면 억지로 새 비유를 만들지 않는다.
6. code, command, URL, path, slug, skill/agent ID를 원문과 대조한다.
7. `omd:humanize`의 target-locale audit으로 번역투, locale 혼입, 기계적 구조를 검증한다.
8. UI copy면 실제 locale route에서 줄바꿈, overflow, CTA 동작, aria label을 확인한다.

## 3. Output metadata

문서 파일에는 가능한 경우 아래를 기록한다.

```yaml
locale: ja
source_locale: ko
source_revision: <ko content hash or git sha>
adapted_at: <ISO date>
```

코드 dictionary처럼 frontmatter가 없으면 locale manifest 또는 테스트 fixture에 같은 revision을 기록한다.

## 4. Quality gate

- 보호 구간 변경 0
- 다른 locale의 사용자-facing 용어 혼입 0
- 제거된 기능·섹션을 소개하는 stale copy 0
- target locale에서 반복되는 기계적 대조·추상 찬사 cluster 0
- UI route의 horizontal overflow와 잘린 label 0
- canonical이 바뀌었는데 revision이 그대로인 파생 원고 0

미달 locale만 다시 작업한다. 영어 원고나 ZH-CN 원고를 fallback으로 노출하지 않는다.

## 금지

- 영어 문장을 모든 locale object의 prose fallback으로 사용
- ZH-TW가 ZH-CN prose를 상속
- 단락별 1:1 직역, 문장 순서 강제, 길이 비율을 품질 점수로 사용
- 고유명사를 알리기 위해 원문에 없는 시장 지위·성과를 추가
- `fallback`, `shim`, `truth source`, `strong prompt` 같은 설명용 영어를 그대로 노출
