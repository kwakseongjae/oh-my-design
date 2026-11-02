import type { DocsLocale } from "@/lib/docs/locales";

/**
 * /docs/<locale>/connector — how to add the MCP connector (Phase 1b of
 * docs/MCP_V2_SPEC_2026-10-29.md). The endpoint is stateless Streamable HTTP,
 * read-only, no auth; the six tool names are the ones web/src/lib/mcp/server.ts
 * registers (docs-connector.test.ts holds them to it). Nothing here claims a
 * Connectors Directory listing, an npm package, authentication, write tools or a
 * rate limit beyond "fair use".
 */

export type ConnectorAdd = { name: string; body: string; command?: string };
export type ConnectorTool = { name: string; body: string; prompt: string };

export interface ConnectorCopy {
  navLabel: string;
  title: string;
  lead: string;
  whatTitle: string;
  whatBody: string;
  endpointTitle: string;
  endpointBody: string;
  addTitle: string;
  addLead: string;
  adds: ConnectorAdd[];
  toolsTitle: string;
  toolsLead: string;
  tools: ConnectorTool[];
  trustTitle: string;
  trustBody: string;
  privacyTitle: string;
  privacyBody: string;
  privacyLink: string;
}

export const CONNECTOR_URL = "https://oh-my-design.kr/api/mcp";
export const CONNECTOR_CLAUDE_CODE_COMMAND = `claude mcp add --transport http oh-my-design ${CONNECTOR_URL}`;
export const CONNECTOR_CURSOR_JSON = `{ "mcpServers": { "oh-my-design": { "url": "${CONNECTOR_URL}" } } }`;
export const CONNECTOR_TOOL_NAMES = [
  "search_references",
  "get_reference",
  "get_design_md",
  "get_tokens",
  "get_component_states",
  "compare_references",
] as const;

/** The privacy page each docs locale reads: Korean has its own, the others read the English one. */
export function connectorPrivacyHref(locale: DocsLocale): string {
  return locale === "ko" ? "/ko/privacy" : "/privacy";
}

const en: ConnectorCopy = {
  navLabel: "MCP connector",
  title: "Add oh-my-design to your AI agent.",
  lead: "A read-only MCP connector that lets an agent search the archive and read DESIGN.md files, tokens, component states and side-by-side comparisons, each value with its source and verification status.",
  whatTitle: "What it is",
  whatBody: "Your agent asks the connector instead of guessing a brand's design. Every value comes back with where it was measured and whether the reference is verified. A value nobody measured comes back as `absent`; the connector never fills it in.",
  endpointTitle: "Endpoint",
  endpointBody: `\`${CONNECTOR_URL}\` — Streamable HTTP, stateless, read-only. No account and no key.`,
  addTitle: "Add it",
  addLead: "Pick the client you use.",
  adds: [
    { name: "Claude Code", body: "Run this once in your terminal.", command: CONNECTOR_CLAUDE_CODE_COMMAND },
    { name: "Claude (web and desktop)", body: `Open Settings → Connectors → Add custom connector, then paste \`${CONNECTOR_URL}\`.` },
    { name: "Cursor", body: "Add this to `.cursor/mcp.json`.", command: CONNECTOR_CURSOR_JSON },
  ],
  toolsTitle: "The six tools",
  toolsLead: "Your agent picks the tool; you only describe what you want. An example of each:",
  tools: [
    { name: "search_references", body: "Search the catalog by name, country, category or keyword. Verified references rank first.", prompt: "Find a calm blue fintech design system" },
    { name: "get_reference", body: "A reference's identity, verification status, table of contents, token counts and evidence sources.", prompt: "Is Toss verified, and what evidence is behind it?" },
    { name: "get_design_md", body: "The canonical DESIGN.md, whole or by section.", prompt: "Read the typography section of Linear's DESIGN.md" },
    { name: "get_tokens", body: "Declared token values with their claim paths and evidence.", prompt: "Get Toss's colour tokens with sources" },
    { name: "get_component_states", body: "Component resting values and the hover, pressed and focus states that were measured.", prompt: "What are Stripe's button hover and focus states?" },
    { name: "compare_references", body: "Two to four references side by side, by claim path. Missing cells stay `absent`.", prompt: "Compare Toss and Stripe colour tokens" },
  ],
  trustTitle: "Trust",
  trustBody: "Verified references come first. Any other reference carries `trust: \"unverified\"` with reason codes that say why, so your agent can tell a measured value from a stated one.",
  privacyTitle: "Privacy",
  privacyBody: "The connector counts calls per tool and per reference and nothing else.",
  privacyLink: "Privacy policy",
};

const ko: ConnectorCopy = {
  navLabel: "MCP 커넥터",
  title: "AI 에이전트에 oh-my-design을 연결해요",
  lead: "에이전트가 아카이브를 검색하고 DESIGN.md, 토큰, 컴포넌트 상태, 비교표를 읽게 해 주는 읽기 전용 MCP 커넥터예요. 값마다 출처와 검증 상태가 함께 와요.",
  whatTitle: "무엇인가요",
  whatBody: "에이전트가 브랜드의 디자인을 짐작하는 대신 커넥터에 물어봐요. 모든 값에는 어디서 측정했는지, 그 레퍼런스가 검증됐는지가 붙어요. 아무도 측정하지 않은 값은 `absent`로 돌아오고, 커넥터가 채워 넣지 않아요.",
  endpointTitle: "엔드포인트",
  endpointBody: `\`${CONNECTOR_URL}\` — Streamable HTTP, 상태 없음, 읽기 전용이에요. 계정도 키도 필요 없어요.`,
  addTitle: "추가하는 법",
  addLead: "쓰는 클라이언트를 골라요.",
  adds: [
    { name: "Claude Code", body: "터미널에서 한 번만 실행해요.", command: CONNECTOR_CLAUDE_CODE_COMMAND },
    { name: "Claude (웹·데스크톱)", body: `설정 → 커넥터 → 커스텀 커넥터 추가를 열고 \`${CONNECTOR_URL}\`을 붙여 넣어요.` },
    { name: "Cursor", body: "`.cursor/mcp.json`에 아래 내용을 추가해요.", command: CONNECTOR_CURSOR_JSON },
  ],
  toolsTitle: "도구 여섯 가지",
  toolsLead: "도구는 에이전트가 고르고, 사용자는 원하는 것만 말하면 돼요. 도구마다 예시를 하나씩 적었어요.",
  tools: [
    { name: "search_references", body: "이름, 국가, 분류, 키워드로 카탈로그를 검색해요. 검증된 레퍼런스가 먼저 나와요.", prompt: "차분한 파란색 핀테크 디자인 시스템 찾아줘" },
    { name: "get_reference", body: "레퍼런스의 정체, 검증 상태, 목차, 토큰 개수, 근거 출처를 보여 줘요.", prompt: "토스는 검증됐어? 근거가 뭐야?" },
    { name: "get_design_md", body: "정본 DESIGN.md를 통째로, 또는 섹션별로 읽어요.", prompt: "Linear DESIGN.md의 타이포그래피 섹션 읽어줘" },
    { name: "get_tokens", body: "선언된 토큰 값을 클레임 경로와 근거와 함께 가져와요.", prompt: "토스의 색상 토큰을 출처와 함께 가져와줘" },
    { name: "get_component_states", body: "컴포넌트의 기본 값과, 측정된 hover·pressed·focus 상태를 읽어요.", prompt: "Stripe 버튼의 hover와 focus 상태는 어때?" },
    { name: "compare_references", body: "레퍼런스 2~4개를 클레임 경로 기준으로 나란히 놓아요. 비어 있는 칸은 `absent`로 남아요.", prompt: "토스와 Stripe의 색상 토큰을 비교해줘" },
  ],
  trustTitle: "신뢰",
  trustBody: "검증된 레퍼런스가 먼저 나와요. 나머지 레퍼런스에는 `trust: \"unverified\"`와 이유 코드가 붙어서, 에이전트가 측정된 값과 적어 둔 값을 구분할 수 있어요.",
  privacyTitle: "개인정보",
  privacyBody: "커넥터는 도구별·레퍼런스별 호출 횟수만 세요.",
  privacyLink: "개인정보처리방침",
};

const ja: ConnectorCopy = {
  navLabel: "MCP コネクタ",
  title: "AI エージェントに oh-my-design をつなぐ。",
  lead: "エージェントがアーカイブを検索し、DESIGN.md、トークン、コンポーネントの状態、並べた比較を読めるようにする、読み取り専用の MCP コネクタです。値にはそれぞれ出典と検証状況が付きます。",
  whatTitle: "これは何か",
  whatBody: "エージェントはブランドのデザインを推測せず、コネクタに問い合わせます。返る値には、どこで計測したか、そのリファレンスが検証済みかが付いています。誰も計測していない値は `absent` で返り、コネクタが補うことはありません。",
  endpointTitle: "エンドポイント",
  endpointBody: `\`${CONNECTOR_URL}\` — Streamable HTTP、ステートレス、読み取り専用。アカウントもキーも不要です。`,
  addTitle: "追加する",
  addLead: "お使いのクライアントを選んでください。",
  adds: [
    { name: "Claude Code", body: "ターミナルで一度だけ実行します。", command: CONNECTOR_CLAUDE_CODE_COMMAND },
    { name: "Claude（Web・デスクトップ）", body: `設定 → コネクタ → カスタムコネクタを追加 を開き、\`${CONNECTOR_URL}\` を貼り付けます。` },
    { name: "Cursor", body: "`.cursor/mcp.json` に次を追加します。", command: CONNECTOR_CURSOR_JSON },
  ],
  toolsTitle: "6 つのツール",
  toolsLead: "ツールはエージェントが選ぶので、欲しいものを伝えるだけです。それぞれの例です。",
  tools: [
    { name: "search_references", body: "名前、国、カテゴリ、キーワードでカタログを検索します。検証済みのリファレンスが先に並びます。", prompt: "落ち着いた青のフィンテック向けデザインシステムを探して" },
    { name: "get_reference", body: "リファレンスの素性、検証状況、目次、トークン数、根拠の出典を返します。", prompt: "Toss は検証済み？ 根拠は何？" },
    { name: "get_design_md", body: "正本の DESIGN.md を全文、またはセクション単位で読みます。", prompt: "Linear の DESIGN.md のタイポグラフィの節を読んで" },
    { name: "get_tokens", body: "宣言されたトークン値を、クレームパスと根拠つきで取得します。", prompt: "Toss の色トークンを出典つきで取得して" },
    { name: "get_component_states", body: "コンポーネントの通常時の値と、計測された hover・pressed・focus の状態を読みます。", prompt: "Stripe のボタンの hover と focus の状態は？" },
    { name: "compare_references", body: "2〜4 件のリファレンスをクレームパスで並べます。空欄は `absent` のままです。", prompt: "Toss と Stripe の色トークンを比較して" },
  ],
  trustTitle: "信頼性",
  trustBody: "検証済みのリファレンスが先に来ます。それ以外には `trust: \"unverified\"` と理由コードが付くので、エージェントは計測された値と記載された値を区別できます。",
  privacyTitle: "プライバシー",
  privacyBody: "コネクタが数えるのは、ツールごと・リファレンスごとの呼び出し回数だけです。",
  privacyLink: "プライバシーポリシー",
};

const zhCn: ConnectorCopy = {
  navLabel: "MCP 连接器",
  title: "把 oh-my-design 接入你的 AI 智能体。",
  lead: "一个只读的 MCP 连接器，让智能体检索档案库，读取 DESIGN.md、令牌、组件状态和并列对比。每个值都附带来源和验证状态。",
  whatTitle: "它是什么",
  whatBody: "智能体不必再猜品牌的设计，而是直接问连接器。返回的每个值都标明在哪里测得，以及该参考是否已验证。没人测过的值会返回 `absent`，连接器不会替你补上。",
  endpointTitle: "端点",
  endpointBody: `\`${CONNECTOR_URL}\` — Streamable HTTP，无状态，只读。无需账号，也无需密钥。`,
  addTitle: "添加方法",
  addLead: "选择你使用的客户端。",
  adds: [
    { name: "Claude Code", body: "在终端里运行一次即可。", command: CONNECTOR_CLAUDE_CODE_COMMAND },
    { name: "Claude（网页版和桌面版）", body: `打开 设置 → 连接器 → 添加自定义连接器，然后粘贴 \`${CONNECTOR_URL}\`。` },
    { name: "Cursor", body: "把下面的内容加入 `.cursor/mcp.json`。", command: CONNECTOR_CURSOR_JSON },
  ],
  toolsTitle: "六个工具",
  toolsLead: "工具由智能体来选，你只需说出想要什么。每个工具各举一例：",
  tools: [
    { name: "search_references", body: "按名称、国家、类别或关键词检索目录，已验证的参考排在前面。", prompt: "找一个沉稳蓝色调的金融科技设计系统" },
    { name: "get_reference", body: "返回参考的身份、验证状态、目录、令牌数量和证据来源。", prompt: "Toss 验证过吗？依据是什么？" },
    { name: "get_design_md", body: "读取权威的 DESIGN.md，可读全文，也可按章节读。", prompt: "读一下 Linear 的 DESIGN.md 里的字体排印部分" },
    { name: "get_tokens", body: "取回已声明的令牌值，并附声明路径和证据。", prompt: "取 Toss 的颜色令牌，并附上来源" },
    { name: "get_component_states", body: "读取组件的常态值，以及实测过的 hover、pressed、focus 状态。", prompt: "Stripe 按钮的 hover 和 focus 状态是什么？" },
    { name: "compare_references", body: "按声明路径并列 2 到 4 个参考。缺失的单元格保持 `absent`。", prompt: "对比 Toss 和 Stripe 的颜色令牌" },
  ],
  trustTitle: "可信度",
  trustBody: "已验证的参考排在最前。其余参考带有 `trust: \"unverified\"` 和说明原因的原因码，智能体因此能分清哪些是实测值，哪些只是文字记载。",
  privacyTitle: "隐私",
  privacyBody: "连接器只统计每个工具和每个参考的调用次数，不记录其他内容。",
  privacyLink: "隐私政策",
};

const zhTw: ConnectorCopy = {
  navLabel: "MCP 連接器",
  title: "把 oh-my-design 接上你的 AI 代理。",
  lead: "一個唯讀的 MCP 連接器，讓代理搜尋資料庫，並讀取 DESIGN.md、設計代幣、元件狀態與並排比較。每個值都附有來源與驗證狀態。",
  whatTitle: "這是什麼",
  whatBody: "代理不必再猜品牌的設計，而是直接詢問連接器。回傳的每個值都註明在哪裡量測，以及該參考是否已驗證。沒有人量測過的值會回傳 `absent`，連接器不會替你補上。",
  endpointTitle: "端點",
  endpointBody: `\`${CONNECTOR_URL}\` — Streamable HTTP、無狀態、唯讀。不需要帳號，也不需要金鑰。`,
  addTitle: "加入方式",
  addLead: "選擇你使用的用戶端。",
  adds: [
    { name: "Claude Code", body: "在終端機執行一次即可。", command: CONNECTOR_CLAUDE_CODE_COMMAND },
    { name: "Claude（網頁版與桌面版）", body: `開啟 設定 → 連接器 → 新增自訂連接器，然後貼上 \`${CONNECTOR_URL}\`。` },
    { name: "Cursor", body: "把下列內容加進 `.cursor/mcp.json`。", command: CONNECTOR_CURSOR_JSON },
  ],
  toolsTitle: "六個工具",
  toolsLead: "工具由代理來選，你只要說出想要什麼。每個工具各舉一例：",
  tools: [
    { name: "search_references", body: "依名稱、國家、類別或關鍵字搜尋目錄，已驗證的參考排在前面。", prompt: "找一個沉穩藍色調的金融科技設計系統" },
    { name: "get_reference", body: "回傳參考的身分、驗證狀態、目錄、代幣數量與證據來源。", prompt: "Toss 驗證過了嗎？依據是什麼？" },
    { name: "get_design_md", body: "讀取權威的 DESIGN.md，可讀全文，也可依章節讀取。", prompt: "讀一下 Linear 的 DESIGN.md 裡的字體排印章節" },
    { name: "get_tokens", body: "取回已宣告的代幣值，並附上宣告路徑與證據。", prompt: "取得 Toss 的顏色代幣，並附上來源" },
    { name: "get_component_states", body: "讀取元件的常態值，以及實測過的 hover、pressed、focus 狀態。", prompt: "Stripe 按鈕的 hover 和 focus 狀態是什麼？" },
    { name: "compare_references", body: "依宣告路徑並排 2 到 4 個參考。缺漏的欄位維持 `absent`。", prompt: "比較 Toss 和 Stripe 的顏色代幣" },
  ],
  trustTitle: "可信度",
  trustBody: "已驗證的參考排在最前。其餘參考帶有 `trust: \"unverified\"` 與說明原因的原因碼，代理因此能分辨哪些是實測值，哪些只是文字記載。",
  privacyTitle: "隱私",
  privacyBody: "連接器只統計每個工具與每個參考的呼叫次數，不記錄其他內容。",
  privacyLink: "隱私權政策",
};

export const CONNECTOR_COPY: Record<DocsLocale, ConnectorCopy> = {
  en,
  ko,
  ja,
  "zh-cn": zhCn,
  "zh-tw": zhTw,
};
