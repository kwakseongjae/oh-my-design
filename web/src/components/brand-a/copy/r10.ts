/* Round 10 landing copy (owner, 2026-10-16: direction B with Iris; docs/research/2026-10-17-direction/).
 * The hero's illustrative chat, the CLI section, the FAQ (categories + search) and the closing band.
 * Written natively per locale, not converted. Numbers are {placeholders} filled from generated data
 * ({total}, {skills}, {tossChk}, {tossNext}, {n}); the chat's "12" is the count of Toss values the
 * sample screen uses (chat-demo.tsx TOSS_VALUES), passed in as {n}.
 * Markup allowed in FAQ answers: <code>, &lt; &gt; (rich.tsx). */
import type { SiteLocale } from "@/lib/i18n/site-locales";

export type FaqCat = "basics" | "use" | "cost";

export interface R10Copy {
  hero: { install: string };
  chat: {
    label: string;
    prompt: string;
    steps: { skill: string; read: string; pick: string; drawing: string; wrote: string };
    status: { running: string; done: string };
    bar: string;
    barValues: string;
    pay: { title: string; amount: string; rows: [string, string][]; cta: string };
    note: string;
    tag: string;
    agent: string;
  };
  cli: {
    h2: string;
    p: string;
    steps: { t: string; p: string }[];
    say: string;
    caption: string;
    term: string;
    skillsLine: string;
  };
  faq: {
    h2: string;
    sub: string;
    search: string;
    searchLabel: string;
    cats: Record<"all" | FaqCat, string>;
    catsLabel: string;
    empty: string;
    issues: string;
    items: { cat: FaqCat; q: string; a: string }[];
  };
  band: { h2: string; p: string; cta: string };
}

const KO: R10Copy = {
  hero: { install: "설치하기" },
  chat: {
    label: "예시 대화: 에이전트가 토스 DESIGN.md를 읽고 결제 완료 화면을 그리는 과정",
    prompt: "토스 스타일로 결제 완료 화면 만들어줘",
    steps: {
      skill: "omd-apply 스킬 불러옴",
      read: "읽음",
      pick: "값 {n}개 고름 · 모두 출처 있음",
      drawing: "화면 그리는 중",
      wrote: "화면 작성",
    },
    status: { running: "진행 중", done: "완료" },
    bar: "미리보기",
    barValues: "토스 값 {n}개",
    pay: {
      title: "결제를 완료했어요",
      amount: "12,900원",
      rows: [["받는 곳", "동네 반찬가게"], ["결제 수단", "토스머니"]],
      cta: "확인",
    },
    note: "예시 대화예요. 실시간 AI가 아니고, 화면의 값은 토스 DESIGN.md에 있는 실제 값이에요. 금액과 가게 이름은 예시예요. Toss Product Sans는 여기서 불러오지 않아 페이지 글꼴로 보여 줘요(브랜드 글꼴이 아니에요).",
    tag: "예시 대화예요 · 실시간 AI가 아니에요",
    agent: "에이전트",
  },
  cli: {
    h2: "oh-my-design-cli 시작하기",
    p: "명령어 하나로 Claude Code·Codex·OpenCode에 스킬과 레퍼런스 카탈로그가 설치돼요.",
    steps: [
      { t: "설치", p: "프로젝트 루트에서 한 번 실행하면 돼요." },
      { t: "확인", p: "에이전트마다 잘 들어갔는지 살펴봐요." },
      { t: "적용", p: "에이전트에게 한 문장으로 부탁하세요. omd-init이 DESIGN.md를 잡고, 그 뒤 UI 작업마다 omd-apply가 그 파일을 읽어요." },
    ],
    say: "토스 스타일로 가족 식단 공유 앱 디자인 시스템 잡아줘",
    caption: "oh-my-design-cli {ver}을 {date}에 빈 프로젝트에서 실행한 실제 출력이에요. 설치 중 파일 목록 {n}줄과 안내 상자 일부(테두리, 브라우저 경로, 영어 예시, 재시작 안내)는 줄였어요.",
    term: "터미널 출력",
    skillsLine: "스킬 {skills}개 모두 보기 (GitHub)",
  },
  faq: {
    h2: "자주 묻는 질문",
    sub: "더 궁금한 건 GitHub 이슈로 남겨 주세요.",
    search: "질문 검색",
    searchLabel: "질문 검색",
    cats: { all: "전체", basics: "기본", use: "설치와 사용", cost: "비용과 데이터" },
    catsLabel: "질문 분류",
    empty: "찾는 질문이 없어요.",
    issues: "GitHub 이슈로 물어보기",
    items: [
      { cat: "basics", q: "DESIGN.md가 뭔가요?", a: "제품의 디자인 시스템(색, 글꼴, 모서리, 컴포넌트, 말투)을 적은 마크다운 파일이에요. 코딩 에이전트가 UI를 만들기 전에 읽어요." },
      { cat: "basics", q: "회사가 직접 만든 공식 파일인가요?", a: "아니에요. 공개된 제품 화면과 공식 문서를 근거로 OmD가 재구성한 파일이고, 각 파일의 Governance 섹션에도 그렇게 적혀 있어요. 디자인은 각 회사의 것이고, 파일은 참고용이에요." },
      { cat: "basics", q: "파일은 얼마나 최신인가요?", a: "검증된 파일마다 확인한 날짜와 다음 재확인 날짜가 적혀 있어요. 예를 들어 토스는 {tossChk}에 확인했고 {tossNext}에 다시 확인해요." },
      { cat: "use", q: "CLI가 꼭 있어야 하나요?", a: "아니요. 어떤 레퍼런스든 복사하거나 내려받을 수 있고, <code>oh-my-design.kr/&lt;id&gt;/design.md</code>에서 원문을 바로 받을 수도 있어요. CLI는 Claude Code, Codex, OpenCode, Cursor 안에서 이 파일을 적용하는 스킬을 더해 줘요." },
      { cat: "use", q: "이미 DESIGN.md가 있으면요?", a: "저장소 루트에 DESIGN.md가 있으면 omd-apply가 그 파일을 그대로 써요. 없으면 omd-init이 레퍼런스 가운데 가장 가까운 것으로 시작안을 만들어요." },
      { cat: "use", q: "새 버전이 나오면 어떻게 올리나요?", a: "프로젝트에서 <code>npx oh-my-design-cli@latest install-skills</code>를 다시 실행하세요. 관리 표시가 붙은 파일만 새로 고치고, 직접 고친 파일은 건드리지 않아요. 그다음 에이전트를 다시 시작하면 돼요." },
      { cat: "cost", q: "비용이 들거나 API 키가 필요한가요?", a: "CLI는 MIT 라이선스이고, 핵심 워크플로에는 API 키가 필요 없어요. 추론은 지금 쓰는 코딩 에이전트 안에서 이뤄져요." },
      { cat: "cost", q: "설치할 때 AI를 호출하나요?", a: "아니요. 설치는 마크다운 파일을 복사할 뿐이라 API 호출이 없고, 데이터가 기기 밖으로 나가지 않아요." },
      { cat: "cost", q: "어떤 코딩 에이전트에서 쓸 수 있나요?", a: "Claude Code, Codex, OpenCode, Cursor예요. Cursor에는 스킬과 레퍼런스 카탈로그가 들어가고 서브에이전트 정의는 들어가지 않아요. 훅은 Claude Code 전용이에요." },
    ],
  },
  band: {
    h2: "마음에 드는 회사의 DESIGN.md부터 열어 보세요",
    p: "회사마다 페이지에서 바로 복사하거나 내려받아 에이전트에게 건넬 수 있어요.",
    cta: "아카이브 열기",
  },
};

const EN: R10Copy = {
  hero: { install: "Install" },
  chat: {
    label: "Example conversation: an agent reads the Toss DESIGN.md and builds a payment-complete screen",
    prompt: "Build a payment-complete screen in Toss style",
    steps: {
      skill: "Loaded the omd-apply skill",
      read: "Read",
      pick: "Picked {n} values, all sourced",
      drawing: "Drawing the screen",
      wrote: "Wrote",
    },
    status: { running: "Running", done: "Done" },
    bar: "Preview",
    barValues: "{n} Toss values",
    pay: {
      title: "Payment complete",
      amount: "₩12,900",
      rows: [["Paid to", "Corner deli"], ["Paid with", "Toss Money"]],
      cta: "Done",
    },
    note: "An example conversation, not a live AI. The values on the screen are real ones from the Toss DESIGN.md; the amount and the shop are made up. Toss Product Sans isn't loaded here, so the screen is set in the page face (not the brand face).",
    tag: "Example conversation · not a live AI",
    agent: "Agent",
  },
  cli: {
    h2: "Get started with oh-my-design-cli",
    p: "One command installs the skills and the reference catalog into Claude Code, Codex and OpenCode.",
    steps: [
      { t: "Install", p: "Run it once in your project root." },
      { t: "Check", p: "See that every agent picked it up." },
      { t: "Apply", p: "Ask your agent in one sentence. omd-init sets up DESIGN.md, and from then on omd-apply reads it for every UI change." },
    ],
    say: "Set up our design system — Toss-style, for a family meal-tracking app.",
    caption: "Real output of oh-my-design-cli {ver}, run on {date} in an empty project. The {n}-line file list from the install and part of the help box (its border, a browser path, the Korean example and the restart notes) are left out.",
    term: "Terminal output",
    skillsLine: "See all {skills} skills (GitHub)",
  },
  faq: {
    h2: "Questions",
    sub: "Anything else? Ask in a GitHub issue.",
    search: "Search questions",
    searchLabel: "Search questions",
    cats: { all: "All", basics: "Basics", use: "Install and use", cost: "Cost and data" },
    catsLabel: "Question topics",
    empty: "No question matches that.",
    issues: "Ask in a GitHub issue",
    items: [
      { cat: "basics", q: "What is a DESIGN.md?", a: "A Markdown file that describes a product's design system (colors, type, radii, components, voice) for a coding agent to read before it builds UI." },
      { cat: "basics", q: "Are these official files from the companies?", a: "No. Each one is an evidence-backed reconstruction made from public product pages and official docs, and its Governance section says so. The designs belong to their companies; the files are for reference." },
      { cat: "basics", q: "How current are the files?", a: "Each verified file records when it was checked and when it's due again. Toss, for example, was checked on {tossChk} and is due for a recheck on {tossNext}." },
      { cat: "use", q: "Do I need the CLI?", a: "No. You can copy, download or fetch any reference raw from <code>oh-my-design.kr/&lt;id&gt;/design.md</code>. The CLI adds skills that apply the file inside Claude Code, Codex, OpenCode and Cursor." },
      { cat: "use", q: "What if I already have a DESIGN.md?", a: "If there's a DESIGN.md at the repo root, omd-apply uses it as it is. If not, omd-init drafts one from the closest reference." },
      { cat: "use", q: "How do I upgrade to a new release?", a: "Run <code>npx oh-my-design-cli@latest install-skills</code> again in your project. It refreshes only the files it manages and leaves the ones you edited alone. Then restart your agent." },
      { cat: "cost", q: "Does it cost anything or need an API key?", a: "The CLI is MIT-licensed, and its core workflows need no API key. Inference stays inside the coding agent you already use." },
      { cat: "cost", q: "Does the install call an AI?", a: "No. Installing only copies Markdown files: no API calls, and nothing leaves your machine." },
      { cat: "cost", q: "Which coding agents does it work with?", a: "Claude Code, Codex, OpenCode and Cursor. Cursor gets the skills and the reference catalog but not the sub-agent definitions, and the hooks are for Claude Code only." },
    ],
  },
  band: {
    h2: "Start with a company whose screens you like",
    p: "Every company's page lets you copy or download its file and hand it to your agent.",
    cta: "Open the archive",
  },
};

const JA: R10Copy = {
  hero: { install: "インストール" },
  chat: {
    label: "会話の例：エージェントがTossのDESIGN.mdを読み、決済完了画面を作るまで",
    prompt: "Toss風の決済完了画面を作って",
    steps: {
      skill: "omd-apply スキルを読み込み",
      read: "読み取り",
      pick: "値を{n}個選択・すべて出典あり",
      drawing: "画面を作成中",
      wrote: "作成",
    },
    status: { running: "実行中", done: "完了" },
    bar: "プレビュー",
    barValues: "Tossの値 {n}個",
    pay: {
      title: "決済が完了しました",
      amount: "₩12,900",
      rows: [["支払先", "近所のお惣菜屋"], ["支払い方法", "Toss Money"]],
      cta: "確認",
    },
    note: "会話の例で、リアルタイムのAIではありません。画面の値はTossのDESIGN.mdにある実際の値です。金額と店名は架空のものです。Toss Product Sansはここでは読み込まないため、ページの書体で表示しています（ブランドの書体ではありません）。",
    tag: "会話の例・リアルタイムのAIではありません",
    agent: "エージェント",
  },
  cli: {
    h2: "oh-my-design-cli をはじめる",
    p: "コマンドひとつで、Claude Code・Codex・OpenCodeにスキルとリファレンスカタログが入ります。",
    steps: [
      { t: "インストール", p: "プロジェクトのルートで一度実行するだけです。" },
      { t: "確認", p: "各エージェントに入ったかを確かめます。" },
      { t: "適用", p: "エージェントに一文で頼みます。omd-initがDESIGN.mdを用意し、以後のUI作業ではomd-applyがそのファイルを読みます。" },
    ],
    say: "Toss風で、家族の献立共有アプリのデザインシステムを整えて",
    caption: "oh-my-design-cli {ver} を {date} に空のプロジェクトで実行した実際の出力です。インストール中のファイル一覧{n}行と、案内ボックスの一部（枠線、ブラウザのパス、韓国語の例、再起動の案内）は省いています。",
    term: "ターミナル出力",
    skillsLine: "スキル{skills}個をすべて見る（GitHub）",
  },
  faq: {
    h2: "よくある質問",
    sub: "ほかに知りたいことは、GitHubのissueでどうぞ。",
    search: "質問を検索",
    searchLabel: "質問を検索",
    cats: { all: "すべて", basics: "基本", use: "導入と使い方", cost: "費用とデータ" },
    catsLabel: "質問のカテゴリ",
    empty: "該当する質問がありません。",
    issues: "GitHubのissueで質問する",
    items: [
      { cat: "basics", q: "DESIGN.mdとは？", a: "製品のデザインシステム（色、書体、角丸、コンポーネント、トーン）を記したMarkdownファイルです。コーディングエージェントがUIを作る前に読みます。" },
      { cat: "basics", q: "各社の公式ファイルですか？", a: "いいえ。公開されている製品画面と公式ドキュメントを根拠にOmDが再構成したもので、各ファイルのGovernanceセクションにもそう明記しています。デザインは各社のものであり、ファイルは参考用です。" },
      { cat: "basics", q: "ファイルはどのくらい新しいですか？", a: "検証済みのファイルには、確認日と次回の再確認日が記録されています。たとえばTossは{tossChk}に確認し、{tossNext}に再確認する予定です。" },
      { cat: "use", q: "CLIは必須ですか？", a: "いいえ。どのリファレンスもコピー・ダウンロードでき、<code>oh-my-design.kr/&lt;id&gt;/design.md</code> から原文を直接取得することもできます。CLIを入れると、Claude Code、Codex、OpenCode、Cursorでこのファイルを適用するスキルが加わります。" },
      { cat: "use", q: "すでにDESIGN.mdがある場合は？", a: "リポジトリのルートにDESIGN.mdがあれば、omd-applyはそれをそのまま使います。なければ、omd-initがリファレンスの中から最も近いものをもとに下書きを作ります。" },
      { cat: "use", q: "新しいバージョンにはどう更新しますか？", a: "プロジェクトで <code>npx oh-my-design-cli@latest install-skills</code> をもう一度実行してください。管理対象のファイルだけを更新し、ご自身で編集したファイルには触れません。そのあとエージェントを再起動します。" },
      { cat: "cost", q: "費用やAPIキーは必要ですか？", a: "CLIはMITライセンスで、主要なワークフローにAPIキーは不要です。推論はお使いのコーディングエージェントの中で行われます。" },
      { cat: "cost", q: "インストール時にAIを呼び出しますか？", a: "いいえ。インストールはMarkdownファイルをコピーするだけなので、API呼び出しはなく、データが端末の外に出ることもありません。" },
      { cat: "cost", q: "どのコーディングエージェントで使えますか？", a: "Claude Code、Codex、OpenCode、Cursorです。Cursorにはスキルとリファレンスカタログが入り、サブエージェントの定義は入りません。フックはClaude Code専用です。" },
    ],
  },
  band: {
    h2: "好きな会社のDESIGN.mdから開いてみましょう",
    p: "各社のページから、そのままコピーやダウンロードをしてエージェントに渡せます。",
    cta: "アーカイブを開く",
  },
};

const ZH_TW: R10Copy = {
  hero: { install: "安裝" },
  chat: {
    label: "對話範例：AI 程式助理讀取 Toss 的 DESIGN.md，做出付款完成畫面",
    prompt: "用 Toss 風格做付款完成畫面",
    steps: {
      skill: "載入 omd-apply 技能",
      read: "讀取",
      pick: "選用 {n} 個值・全部有出處",
      drawing: "正在繪製畫面",
      wrote: "寫入",
    },
    status: { running: "進行中", done: "完成" },
    bar: "預覽",
    barValues: "Toss 的值 {n} 個",
    pay: {
      title: "付款完成",
      amount: "₩12,900",
      rows: [["付款對象", "巷口小菜店"], ["付款方式", "Toss Money"]],
      cta: "確認",
    },
    note: "這是對話範例，不是即時 AI。畫面上的值都是 Toss DESIGN.md 裡的實際數值；金額與店名是虛構的。這裡沒有載入 Toss Product Sans，畫面以頁面字型顯示（並非品牌字型）。",
    tag: "對話範例・不是即時 AI",
    agent: "AI 助理",
  },
  cli: {
    h2: "開始使用 oh-my-design-cli",
    p: "一行指令，就把技能和參考目錄裝進 Claude Code、Codex 與 OpenCode。",
    steps: [
      { t: "安裝", p: "在專案根目錄執行一次就好。" },
      { t: "確認", p: "看看每個 AI 程式助理都裝好了沒。" },
      { t: "套用", p: "用一句話請 AI 程式助理動手。omd-init 會先建立 DESIGN.md，之後每次改 UI，omd-apply 都會讀這份檔案。" },
    ],
    say: "用 Toss 風格，幫家庭食譜分享 App 建立設計系統",
    caption: "這是 oh-my-design-cli {ver} 於 {date} 在空專案中執行的實際輸出。安裝時的 {n} 行檔案清單，以及說明框的一部分（外框、瀏覽器路徑、韓文範例、重新啟動提示）已省略。",
    term: "終端機輸出",
    skillsLine: "查看全部 {skills} 個技能（GitHub）",
  },
  faq: {
    h2: "常見問題",
    sub: "還有其他問題，歡迎到 GitHub 開 issue。",
    search: "搜尋問題",
    searchLabel: "搜尋問題",
    cats: { all: "全部", basics: "基本", use: "安裝與使用", cost: "費用與資料" },
    catsLabel: "問題分類",
    empty: "找不到符合的問題。",
    issues: "到 GitHub 開 issue 詢問",
    items: [
      { cat: "basics", q: "DESIGN.md 是什麼？", a: "描述產品設計系統（色彩、字型、圓角、元件、語氣）的 Markdown 檔案，讓 AI 程式助理在動手做 UI 之前先讀。" },
      { cat: "basics", q: "這些是企業官方提供的檔案嗎？", a: "不是。每份都是 OmD 根據公開的產品頁面與官方文件重建而成，檔案的 Governance 段落也這樣寫明。設計屬於各家企業，檔案僅供參考。" },
      { cat: "basics", q: "檔案有多新？", a: "每份已驗證檔案都記錄了檢查日期與下次複查日期。例如 Toss 在 {tossChk} 檢查過，預定 {tossNext} 複查。" },
      { cat: "use", q: "一定要用 CLI 嗎？", a: "不用。任何參考都可以複製、下載，或直接從 <code>oh-my-design.kr/&lt;id&gt;/design.md</code> 取得原始檔。CLI 則會加上在 Claude Code、Codex、OpenCode 與 Cursor 中套用這份檔案的技能。" },
      { cat: "use", q: "已經有 DESIGN.md 了怎麼辦？", a: "如果儲存庫根目錄有 DESIGN.md，omd-apply 會直接使用。沒有的話，omd-init 會從參考中挑最接近的一份，幫你起個草稿。" },
      { cat: "use", q: "新版本推出時要怎麼更新？", a: "在專案裡再執行一次 <code>npx oh-my-design-cli@latest install-skills</code>。它只會更新自己管理的檔案，你改過的檔案不會動。接著重新啟動 AI 程式助理即可。" },
      { cat: "cost", q: "需要付費或 API 金鑰嗎？", a: "CLI 採 MIT 授權，核心工作流程不需要 API 金鑰，推論都在你原本使用的 AI 程式助理裡進行。" },
      { cat: "cost", q: "安裝時會呼叫 AI 嗎？", a: "不會。安裝只是複製 Markdown 檔案，沒有任何 API 呼叫，資料也不會離開你的電腦。" },
      { cat: "cost", q: "可以搭配哪些 AI 程式助理？", a: "Claude Code、Codex、OpenCode 與 Cursor。Cursor 會裝入技能與參考目錄，但不包含子代理定義；hooks 只支援 Claude Code。" },
    ],
  },
  band: {
    h2: "從你喜歡的那家公司的 DESIGN.md 開始",
    p: "每家公司的頁面都能直接複製或下載檔案，交給你的 AI 程式助理。",
    cta: "打開典藏",
  },
};

const BY: Record<SiteLocale, R10Copy> = { en: EN, ko: KO, ja: JA, "zh-tw": ZH_TW };

export function getR10(locale: SiteLocale): R10Copy {
  return BY[locale];
}
