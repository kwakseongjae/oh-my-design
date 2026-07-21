# Locale playbooks

공통 규칙은 `SKILL.md`가 정본이다. 이 문서는 대상 locale 섹션만 읽는다. 예시는 치환 사전이 아니라 **왜 어색한지 판단하는 최소 사례**다.

## KO · 한국어

### 자주 겹치는 신호

- 영어 수단·관계 구문을 그대로 옮긴 `~을 통해`, `~에 대해`, `~에 있어서`, `~와 관련하여`
- 행위자가 사라진 `~에 의해`, `~되어진다`, `~이 이루어집니다`
- 한 문단에서 `또한 / 따라서 / 이를 통해 / 결과적으로`가 문장마다 반복
- `~할 수 있습니다`, `~것입니다`, `~라는 점`이 행동을 흐림
- 기능명마다 영어를 괄호로 병기하거나 조사 없이 명사를 길게 나열
- 모든 문장을 같은 종결과 길이로 맞추거나, 반대로 짧은 선언문만 연속 사용

### 편집 방향

- 행위자와 행동을 앞으로 둔다: `AI에 의해 생성된` → `AI가 만든`
- 수단을 동사로 되돌린다: `레퍼런스를 통해 확인합니다` → `레퍼런스를 보고 확인합니다`
- 제품 문서에서는 인사·감탄·교훈형 결론보다 사용자가 다음에 할 일을 먼저 쓴다.
- 해요체·하십시오체·해라체를 섞지 않는다. 격식 자체를 AI 티로 보지 않는다.
- `실제`, `근거`, `검증` 같은 추상 명사는 반복하지 말고 확인한 화면·파일·행동을 쓴다.

## EN · English

### Cluster signals

- throat-clearing introductions before the user outcome
- repeated `not X, but Y`, negative lists, forced rhetorical questions, or three-part slogans
- vague praise such as seamless, powerful, transformative, next-generation without nearby evidence
- every paragraph ending as a punchline or aphorism
- identical sentence length and transition words, or excessive fragments used only for drama
- product-first copy that never names the reader's action or result

### Editing direction

- Lead with the action, constraint, or observable result.
- Keep active human subjects when they are known; do not invent a team voice.
- Replace abstract praise with an existing function, condition, or measured fact.
- Vary rhythm only where it improves reading; do not randomize punctuation to look human.
- Preserve the product's established US/UK spelling and terminology.

## JA · 日本語

### 重なったときに確認する表現

- 英語の主語を毎文残し、`私たちは`・`あなたは`が不自然に続く
- 名詞を重ねた長い見出し、`〜することができます`、`〜において`の連続
- UI 文言で `正本`、`実ルート`、`強いプロンプト`など原文の比喩を直訳
- です・ます調と常体が同じ説明で混在
- 英語の `not X, but Y` を `XではなくY`として見出しごとに反復

### 編集方針

- 画面文言は動作を短く示す。必要のない主語は省く。
- 説明文はです・ます調を基本にし、見出しは句点なしで短くする。
- `プロジェクト専用`, `唯一の基準`, `実際の製品画面`など意味が通る語に置き換える。
- 製品名の認知が前提でない場合、最初の一度だけ短い説明を添える。
- コマンド、ID、DESIGN.md、doctorなど識別子は翻訳しない。

## ZH-CN · 简体中文

### 常见的组合信号

- 把用户面对的 AI 工具一律写成容易与 proxy 混淆的 `代理`
- `赋能、无缝、全新升级、强大、颠覆、打造闭环`等抽象词替代具体功能
- `不是 X，而是 Y`、三段并列、结论式口号在同一页反复出现
- `进行…的实现 / 对…进行验证`等名词化结构过多
- 把英文信息顺序原样搬进中文，动作和结果放在句末

### 编辑方向

- 面向用户写 `AI 编程助手`；技术对象按产品语境使用 `智能体角色`。
- 先写用户动作和结果，再补条件。
- 使用 `项目唯一设计依据、实际产品页面、可重复执行的检查`等清楚表达。
- UI 状态用 `空状态`，避免照搬其他中文地区或英文术语。
- 不凭空增加案例、效果数据或“更懂中国用户”之类的主张。

## ZH-TW · 繁體中文（台灣）

### 常見的組合訊號

- 將簡體內容逐字轉成繁體，保留 `软件、信息、用户、视频、默认、通过`
- `程式代理、真源、接入、空白狀態、強交接提示詞`等不自然直譯
- 每段都用 `不是 X，而是 Y`或抽象的成效口號
- 把一般產品檢查都寫成偏正式的 `稽核`
- 句型和 zh-CN 完全一致，只替換字形

### 編輯方向

- 優先使用台灣產品語彙：`軟體、資訊、使用者、影片、預設、透過、介面、專案、儲存、設定、登入、資料`。
- 面向使用者寫 `AI 程式助理`；程式來源用 `程式碼儲存庫`或`專案儲存庫`。
- `整合進、唯一依據、空狀態、實際產品頁面、檢查`通常比直譯自然。
- `稽核`留給合規或正式 audit 語境；一般 UI QA 用 `檢查`。
- 重新安排句子，不從 zh-CN 做字形轉換。

## 共通 UI 檢查

- 번역문이 길어져 버튼·탭·카드 제목이 두 줄이 되면 의미를 보존한 더 짧은 locale 문구를 쓴다.
- placeholder와 label을 같은 문장으로 중복하지 않는다.
- CTA 동사와 목적지가 일치해야 한다. `열기/開く/打开/開啟`는 새 화면, `복사/コピー/复制/複製`는 clipboard 동작에만 쓴다.
- screen reader label은 눈에 보이는 label과 같은 행동을 설명한다.
