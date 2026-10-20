/* Round 11 hero + CLI copy (docs/REDESIGN_R11_PLAN_2026-10-20.md W1 #2 #3 #5 #6 #7 #8, W3 #12).
 * Written natively per locale, not converted; Korean in plain 해요체 like the rest of the site.
 *
 * Each locale's hero chat is about its own representative company (lib/landing-a/chat-data.server.ts:
 * ko Toss, ja pixiv, en Linear, zh-tw 104), so `chat` differs in subject per locale but keeps one shape.
 * Names, amounts and counts in the example cards are generic and made up; every colour, size, radius
 * and button value the cards render comes from the company's verified DESIGN.md tokens, never from here.
 * The CLI's apply step follows the CLI's own printed next step ("Using this DESIGN.md, design the home
 * screen.", data/cli-transcript.json) on a Toss-inspired project, so its screen is Toss in every locale.
 *
 * Placeholders: {s} seconds, {n} count, {face} a brand face name. */
import type { SiteLocale } from "@/lib/i18n/site-locales";

/** Text of one example card. A card kind uses the fields it needs (chat-data.server.ts). */
export interface CardText {
  title: string;
  sub: string;
  rows: [string, string][];
  tags: string[];
  cta: string;
}

export interface R11HeroCopy {
  /** accessible name of the hero's install-command box */
  install: string;
  chat: {
    /** accessible name of the chat (screen readers still hear that it's an example) */
    label: string;
    prompt: string;
    /** the component the Write step creates */
    file: string;
    /** the reasoning inside the collapsible Thinking block */
    think: string;
    card: CardText;
  };
  trace: {
    thinking: string;
    thought: string;
    sec: string;
    running: string;
    done: string;
    /** collapsed run (phone): every step finished */
    summary: string;
    /** accessible name of the button that opens the collapsed run */
    toggle: string;
    /** shown under the Write step when the card is not set in the brand face */
    face: string;
    agent: string;
  };
  cli: {
    context: string;
    steps: [{ t: string; p: string }, { t: string; p: string }];
    prompt: string;
    file: string;
    think: string;
    screen: CardText;
  };
}

const KO: R11HeroCopy = {
  install: "설치 명령어",
  chat: {
    label: "예시 대화: 에이전트가 토스 DESIGN.md로 송금 완료 카드를 만드는 과정",
    prompt: "토스 스타일로 송금 완료 카드 만들어줘",
    file: "TransferDone.tsx",
    think: "송금 완료 카드에는 확인 표시, 금액, 받는 분, 버튼이 들어가야 해요. 토스 DESIGN.md를 읽고 색과 글자 크기, 버튼 값은 거기 적힌 그대로 쓸게요.",
    card: {
      title: "50,000원을 보냈어요",
      sub: "지수님에게",
      rows: [["메모", "저녁 모임 회비"], ["보낸 시각", "오늘 오후 7:42"]],
      tags: [],
      cta: "확인",
    },
  },
  trace: {
    thinking: "생각하는 중",
    thought: "{s}초 동안 생각함",
    sec: "{s}초",
    running: "진행 중",
    done: "완료",
    summary: "작업 {n}개 · {s}초",
    toggle: "작업 과정",
    face: "{face}는 불러올 수 없어 페이지 글꼴로 그렸어요. 브랜드 글꼴이 아니에요.",
    agent: "에이전트",
  },
  cli: {
    context: "oh-my-design-cli는 레퍼런스와 디자인 스킬을 내 코딩 에이전트에 설치하는 도구예요.",
    steps: [
      { t: "설치", p: "프로젝트 루트에서 한 번 실행하세요. Claude Code·Codex·OpenCode에 함께 들어가요." },
      { t: "적용", p: "에이전트에게 한 문장으로 부탁하세요. omd-apply가 DESIGN.md를 읽고 그 값으로 화면을 만들어요." },
    ],
    prompt: "이 DESIGN.md로 홈 화면 만들어줘",
    file: "HomeScreen.tsx",
    think: "홈 화면에는 오늘의 식단과 식단을 추가하는 버튼이 필요해요. 프로젝트의 DESIGN.md를 읽고 거기 적힌 값만 쓸게요.",
    screen: {
      title: "오늘의 식단",
      sub: "가족 4명이 함께 기록해요",
      rows: [["아침", "현미밥과 된장국"], ["점심", "비빔국수"], ["저녁", "연어 샐러드"]],
      tags: [],
      cta: "식단 추가하기",
    },
  },
};

const EN: R11HeroCopy = {
  install: "Install command",
  chat: {
    label: "Example conversation: an agent builds an issue card from Linear's DESIGN.md",
    prompt: "Make an issue card in Linear's style",
    file: "IssueCard.tsx",
    think: "An issue card needs an ID, a status, a title, one line of context and an action. I'll read Linear's DESIGN.md and use its colours, type sizes and button values exactly as written.",
    card: {
      title: "Polish the onboarding checklist",
      sub: "Tighten the first-run checklist so new teams finish setup in one sitting.",
      rows: [],
      tags: ["ENG-142", "In Progress"],
      cta: "Assign to me",
    },
  },
  trace: {
    thinking: "Thinking",
    thought: "Thought for {s}s",
    sec: "{s}s",
    running: "Running",
    done: "Done",
    summary: "{n} steps · {s}s",
    toggle: "Steps",
    face: "{face} can't be loaded here, so I set it in the page font. It isn't the brand face.",
    agent: "Agent",
  },
  cli: {
    context: "oh-my-design-cli installs the references and design skills into your coding agent.",
    steps: [
      { t: "Install", p: "Run it once in your project root. It goes into Claude Code, Codex and OpenCode in one pass." },
      { t: "Apply", p: "Ask your agent in one sentence. omd-apply reads DESIGN.md and builds the screen from its values." },
    ],
    prompt: "Using this DESIGN.md, design the home screen.",
    file: "HomeScreen.tsx",
    think: "The home screen needs today's meals and a way to add one. I'll read the project's DESIGN.md and use only the values in it.",
    screen: {
      title: "Today's meals",
      sub: "Logged by a family of four",
      rows: [["Breakfast", "Oatmeal with berries"], ["Lunch", "Chicken noodle soup"], ["Dinner", "Salmon salad"]],
      tags: [],
      cta: "Add a meal",
    },
  },
};

const JA: R11HeroCopy = {
  install: "インストールコマンド",
  chat: {
    label: "会話の例：エージェントがpixivのDESIGN.mdから作品カードを作るまで",
    prompt: "pixiv風の作品カードを作って",
    file: "ArtworkCard.tsx",
    think: "作品カードには、タイトル、作者名、反応の数、フォローボタンが要ります。pixivのDESIGN.mdを読み、色・文字サイズ・ボタンの値は書かれているとおりに使います。",
    card: {
      title: "夕焼けの坂道",
      sub: "ゆずき",
      rows: [["いいね！", "1,204"], ["ブックマーク", "386"]],
      tags: ["#オリジナル", "#風景"],
      cta: "フォローする",
    },
  },
  trace: {
    thinking: "考え中",
    thought: "{s}秒考えました",
    sec: "{s}秒",
    running: "実行中",
    done: "完了",
    summary: "{n}ステップ・{s}秒",
    toggle: "作業の内容",
    face: "{face}はここでは読み込めないため、ページの書体で表示しています。ブランドの書体ではありません。",
    agent: "エージェント",
  },
  cli: {
    context: "oh-my-design-cliは、リファレンスとデザインスキルをお使いのコーディングエージェントに入れるツールです。",
    steps: [
      { t: "インストール", p: "プロジェクトのルートで一度実行します。Claude Code・Codex・OpenCodeにまとめて入ります。" },
      { t: "適用", p: "エージェントに一文で頼みます。omd-applyがDESIGN.mdを読み、その値で画面を作ります。" },
    ],
    prompt: "このDESIGN.mdでホーム画面を作って",
    file: "HomeScreen.tsx",
    think: "ホーム画面には今日の献立と、献立を追加するボタンが要ります。プロジェクトのDESIGN.mdを読み、そこにある値だけを使います。",
    screen: {
      title: "今日の献立",
      sub: "家族4人で記録しています",
      rows: [["朝", "鮭の塩焼きとみそ汁"], ["昼", "焼きうどん"], ["夜", "鶏の照り焼き"]],
      tags: [],
      cta: "献立を追加",
    },
  },
};

const ZH_TW: R11HeroCopy = {
  install: "安裝指令",
  chat: {
    label: "對話範例：AI 程式助理用 104 的 DESIGN.md 做出職缺卡片",
    prompt: "用 104 的風格做一張職缺卡片",
    file: "JobCard.tsx",
    think: "職缺卡片需要職稱、公司、待遇和應徵按鈕。我先讀 104 的 DESIGN.md，色彩、字級和按鈕數值都照檔案寫的用。",
    card: {
      title: "UI/UX 設計師",
      sub: "設計顧問公司・台北市",
      rows: [["待遇", "月薪 45,000～60,000 元"], ["經歷", "3 年以上"]],
      tags: [],
      cta: "應徵",
    },
  },
  trace: {
    thinking: "思考中",
    thought: "思考了 {s} 秒",
    sec: "{s} 秒",
    running: "進行中",
    done: "完成",
    summary: "{n} 個步驟・{s} 秒",
    toggle: "作業過程",
    face: "這裡無法載入 {face}，所以用頁面字型呈現，並非品牌字型。",
    agent: "AI 程式助理",
  },
  cli: {
    context: "oh-my-design-cli 是把參考資料和設計技能裝進你的 AI 程式助理的工具。",
    steps: [
      { t: "安裝", p: "在專案根目錄執行一次，Claude Code、Codex 與 OpenCode 就會一起裝好。" },
      { t: "套用", p: "用一句話請 AI 程式助理動手。omd-apply 會讀 DESIGN.md，用裡面的數值做出畫面。" },
    ],
    prompt: "用這份 DESIGN.md 做首頁",
    file: "HomeScreen.tsx",
    think: "首頁需要今天的餐點和新增按鈕。我先讀專案的 DESIGN.md，只用裡面的數值。",
    screen: {
      title: "今日菜單",
      sub: "全家 4 個人一起記錄",
      rows: [["早餐", "蛋餅和豆漿"], ["午餐", "滷肉飯"], ["晚餐", "鮭魚沙拉"]],
      tags: [],
      cta: "新增餐點",
    },
  },
};

const BY: Record<SiteLocale, R11HeroCopy> = { en: EN, ko: KO, ja: JA, "zh-tw": ZH_TW };

export function getR11Hero(locale: SiteLocale): R11HeroCopy {
  return BY[locale];
}
