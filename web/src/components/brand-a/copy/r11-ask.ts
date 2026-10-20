/* Round 11 FAQ + question box copy (owner review 2026-10-20, item 13; docs/REDESIGN_R11_PLAN_2026-10-20.md W4).
 * The FAQ keeps the seven questions a visitor needs before installing; the categories and the
 * question search are gone. Answers reuse the owner-reviewed round 10 text where it survives.
 * Written natively per locale, not converted; Korean is plain 해요체.
 * Placeholders are filled from generated data by the landing (`f` in landing.tsx) and by the ask
 * index builder (lib/ask/build-index.ts): {total}, {tossChk}, {tossNext}. No other numbers are
 * written into the copy, so nothing here goes stale when the catalog grows.
 * Markup allowed in FAQ answers: <code>, &lt; &gt; (rich.tsx).
 * Client-safe: no generated data is imported here. */
import { SITE_LOCALES, type SiteLocale } from "@/lib/i18n/site-locales";
import { getR10, type R10Copy } from "./r10";

export interface R11FaqItem {
  q: string;
  a: string;
  /** Adds the "open a GitHub issue" link under the answer. */
  issueLink?: true;
}

export interface R11AskCopy {
  title: string;
  desc: string;
  label: string;
  placeholder: string;
  submit: string;
  stop: string;
  examplesLabel: string;
  examples: string[];
  /** Screen-reader prefix for the echoed question. */
  question: string;
  loading: string;
  streaming: string;
  sources: string;
  newTab: string;
  disclaimer: string;
  truncated: string;
  stopped: string;
  notFound: string;
  refused: string;
  rateIp: string;
  rateDaily: string;
  busy: string;
  failed: string;
  tooLong: string;
  unavailable: string;
  retry: string;
  docs: string;
  archive: string;
  /** aria-label for a citation link; {n} is the source number. */
  cite: string;
}

export interface R11Copy {
  faq: { items: R11FaqItem[]; issueLink: string };
  ask: R11AskCopy;
}

const KO: R11Copy = {
  faq: {
    issueLink: "GitHub 이슈 열기",
    items: [
      {
        q: "DESIGN.md와 oh-my-design은 뭔가요?",
        a: "DESIGN.md는 제품의 디자인 시스템(색, 글꼴, 모서리, 컴포넌트, 말투)을 적은 마크다운 파일이에요. 코딩 에이전트가 UI를 만들기 전에 읽어요. oh-my-design은 실제 회사의 DESIGN.md {total}개를 모은 아카이브이고, 이 파일을 코딩 에이전트가 바로 쓰게 해 주는 스킬도 함께 배포해요.",
      },
      {
        q: "내 코딩 에이전트에서는 어떻게 쓰나요?",
        a: "프로젝트 루트에서 <code>npx oh-my-design-cli@latest</code>를 한 번 실행하고 에이전트를 다시 시작하세요. 그다음 “토스 스타일로 가족 식단 공유 앱 디자인 시스템 잡아줘”처럼 한 문장으로 부탁하면 돼요. omd-init이 DESIGN.md를 잡고, 그 뒤 UI 작업마다 omd-apply가 그 파일을 읽어요. CLI 없이도 레퍼런스 페이지에서 복사하거나 내려받을 수 있고, <code>oh-my-design.kr/&lt;id&gt;/design.md</code>에서 원문을 바로 받을 수도 있어요.",
      },
      {
        q: "어떤 코딩 에이전트에서 쓸 수 있나요?",
        a: "Claude Code, Codex, OpenCode, Cursor예요. Cursor에는 스킬과 레퍼런스 카탈로그가 들어가고 서브에이전트 정의는 들어가지 않아요. 훅은 Claude Code 전용이에요.",
      },
      {
        q: "비용이 들거나 API 키가 필요한가요?",
        a: "아니요. CLI는 MIT 라이선스이고, 핵심 워크플로에는 API 키가 필요 없어요. 설치는 마크다운 파일을 복사할 뿐이라 API 호출이 없고, 데이터가 기기 밖으로 나가지 않아요. 추론은 지금 쓰는 코딩 에이전트 안에서 이뤄져요.",
      },
      {
        q: "값은 어디서 오고, 어떻게 검증하나요?",
        a: "공개된 제품 화면과 공식 문서를 근거로 OmD가 재구성한 파일이에요. 회사의 공식 파일은 아니고(각 파일의 Governance 섹션에도 적혀 있어요), 디자인은 각 회사의 것이에요. 확인하지 못한 값은 지어내지 않고 비워 둬요. 검증된 파일에는 확인한 날짜와 다음 재확인 날짜가 있어요. 예를 들어 토스는 {tossChk}에 확인했고 {tossNext}에 다시 확인해요.",
      },
      {
        q: "원하는 회사를 추가해 달라고 할 수 있나요?",
        a: "네. GitHub 이슈에 회사 이름과 공식 사이트 주소를 남겨 주세요. 공개된 제품 화면과 공식 문서로 값을 확인할 수 있는 회사부터 추가해요.",
        issueLink: true,
      },
      {
        q: "한국어·일본어·중국어 제품에도 맞나요?",
        a: "네. 아카이브에는 한국·일본·대만·중국 회사의 레퍼런스가 특히 많아요. 사이트는 한국어·영어·일본어·번체 중국어로 볼 수 있고, 함께 설치되는 omd-humanize와 omd-locale-adapter 스킬은 한국어·일본어·중국어 문장을 그 언어답게 다듬어요.",
      },
    ],
  },
  ask: {
    title: "직접 물어보기",
    desc: "문서와 레퍼런스에서 찾아 AI가 답해요. 답마다 출처를 달아요.",
    label: "질문",
    placeholder: "oh-my-design에 대해 궁금한 것을 물어보세요",
    submit: "묻기",
    stop: "멈추기",
    examplesLabel: "예시 질문",
    examples: ["Codex에서도 쓸 수 있나요?", "DESIGN.md에는 무엇이 들어가나요?", "일본 회사 레퍼런스도 있나요?"],
    question: "질문",
    loading: "근거를 찾고 있어요",
    streaming: "답을 쓰고 있어요",
    sources: "출처",
    newTab: "새 탭에서 열려요",
    disclaimer: "AI가 쓴 답이라 틀릴 수 있어요. 출처에서 확인해 주세요.",
    truncated: "답이 길어 여기서 멈췄어요. 나머지는 출처에서 확인해 주세요.",
    stopped: "답을 멈췄어요.",
    notFound: "문서에서 이 질문의 답을 찾지 못했어요. 문서나 아카이브를 둘러보세요.",
    refused: "이 질문에는 답할 수 없어요. 아래 문서가 도움이 될 수 있어요.",
    rateIp: "질문이 조금 빨라요. 1분 뒤에 다시 물어봐 주세요.",
    rateDaily: "오늘 준비한 답변을 모두 썼어요. 내일 다시 물어봐 주세요.",
    busy: "지금 질문이 몰려 있어요. 잠시 뒤 다시 물어봐 주세요.",
    failed: "답을 가져오지 못했어요. 잠시 뒤 다시 물어봐 주세요.",
    tooLong: "질문은 500자까지 쓸 수 있어요.",
    unavailable: "질문하기는 준비 중이에요. 그동안 위의 질문과 문서를 참고해 주세요.",
    retry: "다시 묻기",
    docs: "문서 보기",
    archive: "아카이브 열기",
    cite: "출처 {n}",
  },
};

const EN: R11Copy = {
  faq: {
    issueLink: "Open a GitHub issue",
    items: [
      {
        q: "What are DESIGN.md and oh-my-design?",
        a: "A DESIGN.md is a Markdown file that describes a product's design system (colors, type, radii, components, voice) for a coding agent to read before it builds UI. oh-my-design is an archive of {total} DESIGN.md files from real companies, and it ships skills that put those files to work inside your coding agent.",
      },
      {
        q: "How do I use it with my coding agent?",
        a: "Run <code>npx oh-my-design-cli@latest</code> once in your project root, then restart your agent. After that, ask in one sentence, such as “Set up our design system — Toss-style, for a family meal-tracking app.” omd-init sets up DESIGN.md, and from then on omd-apply reads it for every UI change. Without the CLI, you can copy or download any reference from its page, or fetch it raw from <code>oh-my-design.kr/&lt;id&gt;/design.md</code>.",
      },
      {
        q: "Which coding agents does it work with?",
        a: "Claude Code, Codex, OpenCode and Cursor. Cursor gets the skills and the reference catalog but not the sub-agent definitions, and the hooks are for Claude Code only.",
      },
      {
        q: "Does it cost anything or need an API key?",
        a: "No. The CLI is MIT-licensed, and its core workflows need no API key. Installing only copies Markdown files: no API calls, and nothing leaves your machine. Inference stays inside the coding agent you already use.",
      },
      {
        q: "Where do the values come from, and how are they checked?",
        a: "Each file is an evidence-backed reconstruction made from public product pages and official docs. It isn't an official file from the company (its Governance section says so), and the designs belong to their companies. A value that couldn't be confirmed is left out, not guessed. Each verified file records when it was checked and when it's due again: Toss, for example, was checked on {tossChk} and is due for a recheck on {tossNext}.",
      },
      {
        q: "Can I request a company?",
        a: "Yes. Open a GitHub issue with the company's name and its official site. Companies whose values can be confirmed from public product pages and official docs are added first.",
        issueLink: true,
      },
      {
        q: "Does it work for Korean, Japanese and Chinese products?",
        a: "Yes. Korean, Japanese, Taiwanese and Chinese companies make up a large share of the archive. The site reads in English, Korean, Japanese and Traditional Chinese, and the bundled omd-humanize and omd-locale-adapter skills edit Korean, Japanese and Chinese copy so it reads like it was written in that language.",
      },
    ],
  },
  ask: {
    title: "Ask a question",
    desc: "An AI answers from the docs and the archive, and every answer links its sources.",
    label: "Your question",
    placeholder: "Ask anything about oh-my-design",
    submit: "Ask",
    stop: "Stop",
    examplesLabel: "Example questions",
    examples: ["Does it work with Codex?", "What goes into a DESIGN.md?", "Are there Japanese companies?"],
    question: "Question",
    loading: "Finding sources",
    streaming: "Writing the answer",
    sources: "Sources",
    newTab: "opens in a new tab",
    disclaimer: "Written by an AI, so it can be wrong. Check the sources.",
    truncated: "The answer was cut off here. The sources have the rest.",
    stopped: "Stopped.",
    notFound: "The docs don't answer that one. Try the docs or the archive.",
    refused: "This question can't be answered here. These pages may help.",
    rateIp: "That's a lot of questions at once. Try again in a minute.",
    rateDaily: "Today's answers have run out. Please come back tomorrow.",
    busy: "Lots of people are asking right now. Please try again shortly.",
    failed: "Couldn't get an answer. Please try again shortly.",
    tooLong: "Questions can be up to 500 characters.",
    unavailable: "Asking isn't available yet. Until it is, the questions above and the docs cover the basics.",
    retry: "Ask again",
    docs: "Read the docs",
    archive: "Open the archive",
    cite: "Source {n}",
  },
};

const JA: R11Copy = {
  faq: {
    issueLink: "GitHubでissueを作成",
    items: [
      {
        q: "DESIGN.mdとoh-my-designとは？",
        a: "DESIGN.mdは、製品のデザインシステム（色、書体、角丸、コンポーネント、トーン）を記したMarkdownファイルです。コーディングエージェントがUIを作る前に読みます。oh-my-designは実在する企業のDESIGN.mdを{total}件集めたアーカイブで、そのファイルをコーディングエージェントですぐに使うためのスキルも配布しています。",
      },
      {
        q: "自分のコーディングエージェントではどう使いますか？",
        a: "プロジェクトのルートで <code>npx oh-my-design-cli@latest</code> を一度実行し、エージェントを再起動してください。あとは「Toss風で、家族の献立共有アプリのデザインシステムを整えて」のように一文で頼むだけです。omd-initがDESIGN.mdを用意し、以後のUI作業ではomd-applyがそのファイルを読みます。CLIがなくても、各リファレンスのページからコピー・ダウンロードでき、<code>oh-my-design.kr/&lt;id&gt;/design.md</code> から原文を直接取得することもできます。",
      },
      {
        q: "どのコーディングエージェントで使えますか？",
        a: "Claude Code、Codex、OpenCode、Cursorです。Cursorにはスキルとリファレンスカタログが入り、サブエージェントの定義は入りません。フックはClaude Code専用です。",
      },
      {
        q: "費用やAPIキーは必要ですか？",
        a: "いいえ。CLIはMITライセンスで、主要なワークフローにAPIキーは不要です。インストールはMarkdownファイルをコピーするだけなので、API呼び出しはなく、データが端末の外に出ることもありません。推論はお使いのコーディングエージェントの中で行われます。",
      },
      {
        q: "値はどこから来て、どう検証していますか？",
        a: "公開されている製品画面と公式ドキュメントを根拠に、OmDが再構成したファイルです。各社の公式ファイルではなく（各ファイルのGovernanceセクションにも明記しています）、デザインは各社のものです。確認できなかった値は推測で埋めず、空けておきます。検証済みのファイルには確認日と次回の再確認日が記録されています。たとえばTossは{tossChk}に確認し、{tossNext}に再確認する予定です。",
      },
      {
        q: "掲載してほしい企業をリクエストできますか？",
        a: "はい。GitHubのissueに企業名と公式サイトのURLを書いてください。公開されている製品画面と公式ドキュメントで値を確認できる企業から追加しています。",
        issueLink: true,
      },
      {
        q: "日本語・韓国語・中国語の製品にも合いますか？",
        a: "はい。アーカイブには日本・韓国・台湾・中国の企業のリファレンスが特に多くあります。サイトは日本語・英語・韓国語・繁体字中国語で読めます。一緒にインストールされるomd-humanizeとomd-locale-adapterのスキルは、日本語・韓国語・中国語の文章をその言語らしく整えます。",
      },
    ],
  },
  ask: {
    title: "質問する",
    desc: "ドキュメントとアーカイブをもとにAIが答え、回答ごとに出典を示します。",
    label: "質問",
    placeholder: "oh-my-designについて知りたいことを入力",
    submit: "送信",
    stop: "停止",
    examplesLabel: "質問の例",
    examples: ["Codexでも使えますか？", "DESIGN.mdには何が書かれていますか？", "日本企業のリファレンスはありますか？"],
    question: "質問",
    loading: "出典を探しています",
    streaming: "回答を書いています",
    sources: "出典",
    newTab: "新しいタブで開きます",
    disclaimer: "AIによる回答のため、誤りを含むことがあります。出典で確認してください。",
    truncated: "回答が長いため、ここで止まりました。続きは出典で確認してください。",
    stopped: "回答を止めました。",
    notFound: "ドキュメントにはこの質問の答えが見つかりませんでした。ドキュメントやアーカイブをご覧ください。",
    refused: "この質問にはお答えできません。次のページが参考になるかもしれません。",
    rateIp: "質問の間隔が短すぎます。1分ほどしてから、もう一度お試しください。",
    rateDaily: "本日の回答数の上限に達しました。また明日お試しください。",
    busy: "ただいま質問が集中しています。少し時間をおいてお試しください。",
    failed: "回答を取得できませんでした。少し時間をおいてお試しください。",
    tooLong: "質問は500文字まで入力できます。",
    unavailable: "質問機能は準備中です。それまでは、上の質問とドキュメントをご覧ください。",
    retry: "もう一度質問する",
    docs: "ドキュメントを見る",
    archive: "アーカイブを開く",
    cite: "出典 {n}",
  },
};

const ZH_TW: R11Copy = {
  faq: {
    issueLink: "到 GitHub 開 issue",
    items: [
      {
        q: "DESIGN.md 和 oh-my-design 是什麼？",
        a: "DESIGN.md 是描述產品設計系統（色彩、字型、圓角、元件、語氣）的 Markdown 檔案，讓 AI 程式助理在動手做 UI 之前先讀。oh-my-design 收錄了 {total} 份真實企業的 DESIGN.md，也提供讓 AI 程式助理直接套用這些檔案的技能。",
      },
      {
        q: "要怎麼在我的 AI 程式助理裡使用？",
        a: "在專案根目錄執行一次 <code>npx oh-my-design-cli@latest</code>，再重新啟動 AI 程式助理。接著用一句話請它動手，例如「用 Toss 風格，幫家庭食譜分享 App 建立設計系統」。omd-init 會先建立 DESIGN.md，之後每次改 UI，omd-apply 都會讀這份檔案。不用 CLI 也可以：在各參考頁面複製或下載，或直接從 <code>oh-my-design.kr/&lt;id&gt;/design.md</code> 取得原始檔。",
      },
      {
        q: "可以搭配哪些 AI 程式助理？",
        a: "Claude Code、Codex、OpenCode 與 Cursor。Cursor 會裝入技能與參考目錄，但不包含子代理定義；hooks 只支援 Claude Code。",
      },
      {
        q: "需要付費或 API 金鑰嗎？",
        a: "不需要。CLI 採 MIT 授權，核心工作流程不需要 API 金鑰。安裝只是複製 Markdown 檔案，沒有任何 API 呼叫，資料也不會離開你的電腦。推論都在你原本使用的 AI 程式助理裡進行。",
      },
      {
        q: "數值從哪裡來？怎麼驗證？",
        a: "每份檔案都是 OmD 根據公開的產品頁面與官方文件重建而成，並非企業官方提供的檔案（檔案的 Governance 段落也寫明了），設計屬於各家企業。無法確認的數值不會用猜的，而是留白。已驗證的檔案都記錄了檢查日期與下次複查日期，例如 Toss 在 {tossChk} 檢查過，預定 {tossNext} 複查。",
      },
      {
        q: "可以請你們收錄想要的企業嗎？",
        a: "可以。請到 GitHub 開 issue，寫下企業名稱與官方網站網址。能用公開的產品頁面與官方文件確認數值的企業，會優先收錄。",
        issueLink: true,
      },
      {
        q: "也適合中文、日文、韓文的產品嗎？",
        a: "適合。典藏裡台灣、中國、日本、韓國企業的參考特別多。網站提供繁體中文、英文、日文與韓文版本，一起安裝的 omd-humanize 與 omd-locale-adapter 技能，能把中文、日文、韓文的文字調整得更道地。",
      },
    ],
  },
  ask: {
    title: "直接提問",
    desc: "AI 會從文件與典藏中找出答案，每個回答都附上出處。",
    label: "你的問題",
    placeholder: "想知道 oh-my-design 的什麼？",
    submit: "提問",
    stop: "停止",
    examplesLabel: "問題範例",
    examples: ["Codex 也能用嗎？", "DESIGN.md 裡寫了什麼？", "有台灣企業的參考嗎？"],
    question: "問題",
    loading: "正在尋找出處",
    streaming: "正在撰寫回答",
    sources: "出處",
    newTab: "在新分頁開啟",
    disclaimer: "這是 AI 寫的回答，可能有誤，請以出處為準。",
    truncated: "回答太長，到這裡就停了。其餘內容請看出處。",
    stopped: "已停止回答。",
    notFound: "文件裡找不到這個問題的答案。可以看看文件或典藏。",
    refused: "這個問題無法回答。下面的頁面或許有幫助。",
    rateIp: "提問有點太頻繁了，請一分鐘後再試。",
    rateDaily: "今天的回答次數已經用完，請明天再來。",
    busy: "目前提問的人很多，請稍後再試。",
    failed: "沒能取得回答，請稍後再試。",
    tooLong: "問題最多 500 個字。",
    unavailable: "提問功能還在準備中。在那之前，可以先看上面的問題與文件。",
    retry: "再問一次",
    docs: "看文件",
    archive: "打開典藏",
    cite: "出處 {n}",
  },
};

const BY: Record<SiteLocale, R11Copy> = { en: EN, ko: KO, ja: JA, "zh-tw": ZH_TW };

export function getR11Ask(locale: SiteLocale): R11Copy {
  return BY[locale];
}

/**
 * The page locale behind a round 10 copy object. FaqSection's props are fixed (`r, f, issuesHref`)
 * and landing.tsx is frozen, so the section reads the locale back from `r`: getR10() hands out
 * one object per locale, and the FAQ heading is a per-locale string as a fallback.
 */
export function localeOfR10(r: R10Copy): SiteLocale {
  return (
    SITE_LOCALES.find((l) => getR10(l) === r) ??
    SITE_LOCALES.find((l) => getR10(l).faq.h2 === r.faq.h2) ??
    "en"
  );
}
