/* Round 11 hero + CLI copy (docs/REDESIGN_R11_PLAN_2026-10-20.md W1 #2 #3 #5 #6 #7 #8, W3 #12).
 * Written natively per locale, not converted; Korean in plain 해요체 like the rest of the site.
 *
 * Round 12 (owner 2026-10-21): a keycap picks which company the hero chat shows, so the chat copy is
 * per card kind — what the company's product is (lib/landing-a/chat-data.server.ts KIND) — and names
 * the company through {name}, the name its keycap shows (Hangul only on /ko). Each locale still opens
 * on its own representative company (ko Toss, ja pixiv, en Linear, zh-tw 104), whose prompt reads
 * exactly as it did in round 11.
 * Names, amounts, dates and counts in the example cards are generic and made up; every colour, size,
 * radius and button value the cards render comes from the company's verified DESIGN.md tokens, never
 * from here.
 * The CLI's apply step follows the CLI's own printed next step ("Using this DESIGN.md, design the home
 * screen.", data/cli-transcript.json) on a Toss-inspired project, so its screen is Toss in every locale.
 *
 * Placeholders: {name} a company, {s} seconds, {n} count ({face} / {sub} only in the retired face notes). */
import type { SiteLocale } from "@/lib/i18n/site-locales";

/** Text of one example card. A card kind uses the fields it needs (chat-data.server.ts). */
export interface CardText {
  title: string;
  sub: string;
  rows: [string, string][];
  tags: string[];
  cta: string;
}

/** What a company's product is decides its card (chat-data.server.ts KIND). */
export const HERO_KINDS = ["transfer", "artwork", "issue", "job", "product", "booking", "article", "task"] as const;
export type HeroKind = (typeof HERO_KINDS)[number];

/** One card kind's chat: the request, the reasoning and the card. {name} is the company. */
export interface KindCopy {
  /** the user's request */
  prompt: string;
  /** accessible name of the chat (screen readers still hear that it's an example) */
  label: string;
  /** the component the Write step creates */
  file: string;
  /** the reasoning inside the collapsible Thinking block */
  think: string;
  card: CardText;
}

export interface R11HeroCopy {
  /** accessible name of the hero's install-command box */
  install: string;
  /** accessible name of the keyboard's hidden button list (round 12: a key picks the chat's company) */
  keys: string;
  chat: {
    /** the quiet link under the chat to the shown company's item page */
    link: string;
    kinds: Record<HeroKind, KindCopy>;
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
    /**
     * @deprecated Round 13 (owner 2026-10-21): no font notes in the chat; the hero renders neither
     * line and AgentTrace ignores its note. Kept only while cli-steps.tsx (the CLI stream's file)
     * still reads both; delete them with that read.
     */
    face: string;
    /** @deprecated see `face` */
    faceSub: string;
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
  keys: "키보드에 새긴 회사들. 키를 누르면 예시 대화가 그 회사 것으로 바뀌어요.",
  chat: {
    link: "{name} DESIGN.md",
    kinds: {
      transfer: {
        prompt: "{name} 스타일로 송금 완료 카드 만들어줘",
        label: "예시 대화: 에이전트가 {name} DESIGN.md로 송금 완료 카드를 만드는 과정",
        file: "TransferDone.tsx",
        think: "송금 완료 카드에는 확인 표시, 금액, 받는 분, 버튼이 들어가야 해요. {name} DESIGN.md를 읽고 색과 글자 크기, 버튼 값은 거기 적힌 그대로 쓸게요.",
        card: {
          title: "50,000원을 보냈어요",
          sub: "지수님에게",
          rows: [["메모", "저녁 모임 회비"], ["보낸 시각", "오늘 오후 7:42"]],
          tags: [],
          cta: "확인",
        },
      },
      artwork: {
        prompt: "{name} 스타일로 작품 카드 만들어줘",
        label: "예시 대화: 에이전트가 {name} DESIGN.md로 작품 카드를 만드는 과정",
        file: "ArtworkCard.tsx",
        think: "작품 카드에는 제목, 작가 이름, 반응 수, 팔로우 버튼이 들어가야 해요. {name} DESIGN.md를 읽고 색과 글자 크기, 버튼 값은 거기 적힌 그대로 쓸게요.",
        card: {
          title: "노을 지는 언덕길",
          sub: "유즈키",
          rows: [["좋아요", "1,204"], ["북마크", "386"]],
          tags: ["#오리지널", "#풍경"],
          cta: "팔로우",
        },
      },
      issue: {
        prompt: "{name} 스타일로 이슈 카드 만들어줘",
        label: "예시 대화: 에이전트가 {name} DESIGN.md로 이슈 카드를 만드는 과정",
        file: "IssueCard.tsx",
        think: "이슈 카드에는 번호, 상태, 제목, 한 줄 설명, 버튼이 들어가야 해요. {name} DESIGN.md를 읽고 색과 글자 크기, 버튼 값은 거기 적힌 그대로 쓸게요.",
        card: {
          title: "온보딩 체크리스트 다듬기",
          sub: "새 팀이 한 번에 설정을 마칠 수 있게 첫 실행 체크리스트를 줄여요.",
          rows: [],
          tags: ["ENG-142", "진행 중"],
          cta: "내게 배정",
        },
      },
      job: {
        prompt: "{name} 스타일로 채용 공고 카드 만들어줘",
        label: "예시 대화: 에이전트가 {name} DESIGN.md로 채용 공고 카드를 만드는 과정",
        file: "JobCard.tsx",
        think: "채용 공고 카드에는 직무, 회사, 급여, 지원 버튼이 들어가야 해요. {name} DESIGN.md를 읽고 색과 글자 크기, 버튼 값은 거기 적힌 그대로 쓸게요.",
        card: {
          title: "UI/UX 디자이너",
          sub: "디자인 컨설팅 회사 · 서울",
          rows: [["급여", "연봉 4,500만~6,000만 원"], ["경력", "3년 이상"]],
          tags: [],
          cta: "지원하기",
        },
      },
      product: {
        prompt: "{name} 스타일로 상품 카드 만들어줘",
        label: "예시 대화: 에이전트가 {name} DESIGN.md로 상품 카드를 만드는 과정",
        file: "ProductCard.tsx",
        think: "상품 카드에는 상품 이름, 한 줄 설명, 가격, 구매 버튼이 들어가야 해요. {name} DESIGN.md를 읽고 색과 글자 크기, 버튼 값은 거기 적힌 그대로 쓸게요.",
        card: {
          title: "캔버스 토트백",
          sub: "두꺼운 면 소재 · 데일리 사이즈",
          rows: [["판매가", "29,000원"], ["배송", "내일 도착 예정"]],
          tags: [],
          cta: "구매하기",
        },
      },
      booking: {
        prompt: "{name} 스타일로 예약 확정 카드 만들어줘",
        label: "예시 대화: 에이전트가 {name} DESIGN.md로 예약 확정 카드를 만드는 과정",
        file: "BookingCard.tsx",
        think: "예약 확정 카드에는 확정 안내, 예약 번호, 일정, 예약 내역 버튼이 들어가야 해요. {name} DESIGN.md를 읽고 색과 글자 크기, 버튼 값은 거기 적힌 그대로 쓸게요.",
        card: {
          title: "예약이 확정됐어요",
          sub: "이용 하루 전에 알림을 보내 드릴게요.",
          rows: [["예약 번호", "B24-1023"], ["일정", "10월 23일 오전 10:00"]],
          tags: [],
          cta: "예약 내역 보기",
        },
      },
      article: {
        prompt: "{name} 스타일로 기사 카드 만들어줘",
        label: "예시 대화: 에이전트가 {name} DESIGN.md로 기사 카드를 만드는 과정",
        file: "ArticleCard.tsx",
        think: "기사 카드에는 분야, 시각, 제목, 요약, 읽기 버튼이 들어가야 해요. {name} DESIGN.md를 읽고 색과 글자 크기, 버튼 값은 거기 적힌 그대로 쓸게요.",
        card: {
          title: "주말 전국 맑음, 아침저녁은 쌀쌀",
          sub: "주말 내내 맑겠지만 아침과 저녁에는 기온이 크게 떨어지겠습니다. 외출할 때 겉옷을 챙기는 것이 좋겠습니다.",
          rows: [],
          tags: ["생활", "2시간 전"],
          cta: "기사 읽기",
        },
      },
      task: {
        prompt: "{name} 스타일로 업무 카드 만들어줘",
        label: "예시 대화: 에이전트가 {name} DESIGN.md로 업무 카드를 만드는 과정",
        file: "TaskCard.tsx",
        think: "업무 카드에는 번호, 상태, 제목, 한 줄 설명, 담당 버튼이 들어가야 해요. {name} DESIGN.md를 읽고 색과 글자 크기, 버튼 값은 거기 적힌 그대로 쓸게요.",
        card: {
          title: "견적 요청 검토하기",
          sub: "금액과 납기를 확인하고 오늘 안에 회신해 주세요.",
          rows: [],
          tags: ["#128", "진행 중"],
          cta: "내게 배정",
        },
      },
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
    faceSub: "{face} 대신 실측으로 고른 대체 글꼴 {sub}로 그렸어요. 브랜드 글꼴이 아니에요.",
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
  keys: "Companies engraved on the keyboard. Press a key to show that company in the example chat.",
  chat: {
    link: "{name} DESIGN.md",
    kinds: {
      transfer: {
        prompt: "Make a transfer receipt in {name}'s style",
        label: "Example conversation: an agent builds a transfer receipt from {name}'s DESIGN.md",
        file: "TransferDone.tsx",
        think: "A transfer receipt needs a confirmation mark, the amount, the recipient and a button. I'll read {name}'s DESIGN.md and use its colours, type sizes and button values exactly as written.",
        card: {
          title: "You sent $50.00",
          sub: "To Jamie",
          rows: [["Note", "Dinner split"], ["Sent", "Today, 7:42 PM"]],
          tags: [],
          cta: "Done",
        },
      },
      artwork: {
        prompt: "Make an artwork card in {name}'s style",
        label: "Example conversation: an agent builds an artwork card from {name}'s DESIGN.md",
        file: "ArtworkCard.tsx",
        think: "An artwork card needs a title, the artist's name, the reaction counts and a follow button. I'll read {name}'s DESIGN.md and use its colours, type sizes and button values exactly as written.",
        card: {
          title: "Sunset on the hill road",
          sub: "Yuzuki",
          rows: [["Likes", "1,204"], ["Bookmarks", "386"]],
          tags: ["#original", "#landscape"],
          cta: "Follow",
        },
      },
      issue: {
        prompt: "Make an issue card in {name}'s style",
        label: "Example conversation: an agent builds an issue card from {name}'s DESIGN.md",
        file: "IssueCard.tsx",
        think: "An issue card needs an ID, a status, a title, one line of context and an action. I'll read {name}'s DESIGN.md and use its colours, type sizes and button values exactly as written.",
        card: {
          title: "Polish the onboarding checklist",
          sub: "Tighten the first-run checklist so new teams finish setup in one sitting.",
          rows: [],
          tags: ["ENG-142", "In Progress"],
          cta: "Assign to me",
        },
      },
      job: {
        prompt: "Make a job card in {name}'s style",
        label: "Example conversation: an agent builds a job card from {name}'s DESIGN.md",
        file: "JobCard.tsx",
        think: "A job card needs the role, the company, the pay and an apply button. I'll read {name}'s DESIGN.md and use its colours, type sizes and button values exactly as written.",
        card: {
          title: "UI/UX Designer",
          sub: "Design consultancy · Remote",
          rows: [["Salary", "$85k–$110k"], ["Experience", "3+ years"]],
          tags: [],
          cta: "Apply",
        },
      },
      product: {
        prompt: "Make a product card in {name}'s style",
        label: "Example conversation: an agent builds a product card from {name}'s DESIGN.md",
        file: "ProductCard.tsx",
        think: "A product card needs the item's name, one line about it, the price and a buy button. I'll read {name}'s DESIGN.md and use its colours, type sizes and button values exactly as written.",
        card: {
          title: "Canvas tote bag",
          sub: "Heavy cotton · everyday size",
          rows: [["Price", "$24.00"], ["Delivery", "Arrives tomorrow"]],
          tags: [],
          cta: "Buy now",
        },
      },
      booking: {
        prompt: "Make a booking confirmation in {name}'s style",
        label: "Example conversation: an agent builds a booking confirmation from {name}'s DESIGN.md",
        file: "BookingCard.tsx",
        think: "A booking confirmation needs the confirmation itself, a booking number, the date and a button to see the booking. I'll read {name}'s DESIGN.md and use its colours, type sizes and button values exactly as written.",
        card: {
          title: "Your booking is confirmed",
          sub: "We'll send a reminder the day before.",
          rows: [["Booking no.", "B24-1023"], ["When", "Oct 23, 10:00 AM"]],
          tags: [],
          cta: "View booking",
        },
      },
      article: {
        prompt: "Make a news card in {name}'s style",
        label: "Example conversation: an agent builds a news card from {name}'s DESIGN.md",
        file: "ArticleCard.tsx",
        think: "A news card needs a section, a time, the headline, a summary and a read button. I'll read {name}'s DESIGN.md and use its colours, type sizes and button values exactly as written.",
        card: {
          title: "Clear skies this weekend, with chilly mornings",
          sub: "Expect sunshine across the region, but temperatures drop sharply at both ends of the day, so bring a jacket.",
          rows: [],
          tags: ["Life", "2 hours ago"],
          cta: "Read more",
        },
      },
      task: {
        prompt: "Make a task card in {name}'s style",
        label: "Example conversation: an agent builds a task card from {name}'s DESIGN.md",
        file: "TaskCard.tsx",
        think: "A task card needs a number, a status, a title, one line of context and an assign button. I'll read {name}'s DESIGN.md and use its colours, type sizes and button values exactly as written.",
        card: {
          title: "Review the quote request",
          sub: "Check the price and the delivery date, then reply by the end of the day.",
          rows: [],
          tags: ["#128", "In progress"],
          cta: "Assign to me",
        },
      },
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
    faceSub: "{face} can't be loaded here, so I set it in {sub}, a substitute chosen by measurement. It isn't the brand face.",
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
  keys: "キーボードに刻んだ企業。キーを押すと、会話の例がその企業のものに変わります。",
  chat: {
    link: "{name} DESIGN.md",
    kinds: {
      transfer: {
        prompt: "{name}風の送金完了カードを作って",
        label: "会話の例：エージェントが{name}のDESIGN.mdから送金完了カードを作るまで",
        file: "TransferDone.tsx",
        think: "送金完了カードには、完了マーク、金額、送り先、ボタンが要ります。{name}のDESIGN.mdを読み、色・文字サイズ・ボタンの値は書かれているとおりに使います。",
        card: {
          title: "5,000円を送りました",
          sub: "はるかさんへ",
          rows: [["メモ", "飲み会の会費"], ["送金日時", "今日 19:42"]],
          tags: [],
          cta: "完了",
        },
      },
      artwork: {
        prompt: "{name}風の作品カードを作って",
        label: "会話の例：エージェントが{name}のDESIGN.mdから作品カードを作るまで",
        file: "ArtworkCard.tsx",
        think: "作品カードには、タイトル、作者名、反応の数、フォローボタンが要ります。{name}のDESIGN.mdを読み、色・文字サイズ・ボタンの値は書かれているとおりに使います。",
        card: {
          title: "夕焼けの坂道",
          sub: "ゆずき",
          rows: [["いいね！", "1,204"], ["ブックマーク", "386"]],
          tags: ["#オリジナル", "#風景"],
          cta: "フォローする",
        },
      },
      issue: {
        prompt: "{name}風のイシューカードを作って",
        label: "会話の例：エージェントが{name}のDESIGN.mdからイシューカードを作るまで",
        file: "IssueCard.tsx",
        think: "イシューカードには、番号、ステータス、タイトル、一行の説明、ボタンが要ります。{name}のDESIGN.mdを読み、色・文字サイズ・ボタンの値は書かれているとおりに使います。",
        card: {
          title: "オンボーディングのチェックリストを整える",
          sub: "新しいチームが一度で設定を終えられるよう、初回のチェックリストを絞ります。",
          rows: [],
          tags: ["ENG-142", "進行中"],
          cta: "自分に割り当て",
        },
      },
      job: {
        prompt: "{name}風の求人カードを作って",
        label: "会話の例：エージェントが{name}のDESIGN.mdから求人カードを作るまで",
        file: "JobCard.tsx",
        think: "求人カードには、職種、会社、給与、応募ボタンが要ります。{name}のDESIGN.mdを読み、色・文字サイズ・ボタンの値は書かれているとおりに使います。",
        card: {
          title: "UI/UXデザイナー",
          sub: "デザインコンサルティング会社・東京都",
          rows: [["給与", "年収 450万〜600万円"], ["経験", "3年以上"]],
          tags: [],
          cta: "応募する",
        },
      },
      product: {
        prompt: "{name}風の商品カードを作って",
        label: "会話の例：エージェントが{name}のDESIGN.mdから商品カードを作るまで",
        file: "ProductCard.tsx",
        think: "商品カードには、商品名、ひとことの説明、価格、購入ボタンが要ります。{name}のDESIGN.mdを読み、色・文字サイズ・ボタンの値は書かれているとおりに使います。",
        card: {
          title: "キャンバストートバッグ",
          sub: "厚手のコットン・普段使いのサイズ",
          rows: [["価格", "2,980円"], ["配送", "明日お届け予定"]],
          tags: [],
          cta: "購入する",
        },
      },
      booking: {
        prompt: "{name}風の予約確定カードを作って",
        label: "会話の例：エージェントが{name}のDESIGN.mdから予約確定カードを作るまで",
        file: "BookingCard.tsx",
        think: "予約確定カードには、確定のお知らせ、予約番号、日時、予約内容のボタンが要ります。{name}のDESIGN.mdを読み、色・文字サイズ・ボタンの値は書かれているとおりに使います。",
        card: {
          title: "ご予約が確定しました",
          sub: "前日にお知らせをお送りします。",
          rows: [["予約番号", "B24-1023"], ["日時", "10月23日 10:00"]],
          tags: [],
          cta: "予約内容を見る",
        },
      },
      article: {
        prompt: "{name}風のニュースカードを作って",
        label: "会話の例：エージェントが{name}のDESIGN.mdからニュースカードを作るまで",
        file: "ArticleCard.tsx",
        think: "ニュースカードには、ジャンル、時刻、見出し、要約、続きを読むボタンが要ります。{name}のDESIGN.mdを読み、色・文字サイズ・ボタンの値は書かれているとおりに使います。",
        card: {
          title: "週末は全国的に晴れ　朝晩は冷え込み",
          sub: "週末は各地で晴れる見込みですが、朝晩は気温が大きく下がります。外出には上着があると安心です。",
          rows: [],
          tags: ["くらし", "2時間前"],
          cta: "記事を読む",
        },
      },
      task: {
        prompt: "{name}風のタスクカードを作って",
        label: "会話の例：エージェントが{name}のDESIGN.mdからタスクカードを作るまで",
        file: "TaskCard.tsx",
        think: "タスクカードには、番号、ステータス、タイトル、一行の説明、担当ボタンが要ります。{name}のDESIGN.mdを読み、色・文字サイズ・ボタンの値は書かれているとおりに使います。",
        card: {
          title: "見積もり依頼を確認する",
          sub: "金額と納期を確認して、今日中に返信してください。",
          rows: [],
          tags: ["#128", "対応中"],
          cta: "自分に割り当て",
        },
      },
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
    faceSub: "{face}の代わりに、計測で選んだ代替書体{sub}で表示しています。ブランドの書体ではありません。",
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
  keys: "刻在鍵盤上的企業。按下按鍵，對話範例就會換成那家企業。",
  chat: {
    link: "{name} DESIGN.md",
    kinds: {
      transfer: {
        prompt: "用{name}的風格做一張轉帳完成卡片",
        label: "對話範例：AI 程式助理用{name}的 DESIGN.md 做出轉帳完成卡片",
        file: "TransferDone.tsx",
        think: "轉帳完成卡片需要完成標示、金額、收款人和按鈕。我先讀{name}的 DESIGN.md，色彩、字級和按鈕數值都照檔案寫的用。",
        card: {
          title: "已轉帳 1,500 元",
          sub: "收款人 王小明",
          rows: [["備註", "聚餐分攤"], ["轉帳時間", "今天 晚上 7:42"]],
          tags: [],
          cta: "完成",
        },
      },
      artwork: {
        prompt: "用{name}的風格做一張作品卡片",
        label: "對話範例：AI 程式助理用{name}的 DESIGN.md 做出作品卡片",
        file: "ArtworkCard.tsx",
        think: "作品卡片需要標題、作者名稱、互動數和追蹤按鈕。我先讀{name}的 DESIGN.md，色彩、字級和按鈕數值都照檔案寫的用。",
        card: {
          title: "夕陽下的坡道",
          sub: "柚希",
          rows: [["喜歡", "1,204"], ["收藏", "386"]],
          tags: ["#原創", "#風景"],
          cta: "追蹤",
        },
      },
      issue: {
        prompt: "用{name}的風格做一張議題卡片",
        label: "對話範例：AI 程式助理用{name}的 DESIGN.md 做出議題卡片",
        file: "IssueCard.tsx",
        think: "議題卡片需要編號、狀態、標題、一行說明和按鈕。我先讀{name}的 DESIGN.md，色彩、字級和按鈕數值都照檔案寫的用。",
        card: {
          title: "調整新手引導清單",
          sub: "精簡首次使用的清單，讓新團隊一次就能完成設定。",
          rows: [],
          tags: ["ENG-142", "進行中"],
          cta: "指派給我",
        },
      },
      job: {
        prompt: "用{name}的風格做一張職缺卡片",
        label: "對話範例：AI 程式助理用{name}的 DESIGN.md 做出職缺卡片",
        file: "JobCard.tsx",
        think: "職缺卡片需要職稱、公司、待遇和應徵按鈕。我先讀{name}的 DESIGN.md，色彩、字級和按鈕數值都照檔案寫的用。",
        card: {
          title: "UI/UX 設計師",
          sub: "設計顧問公司・台北市",
          rows: [["待遇", "月薪 45,000～60,000 元"], ["經歷", "3 年以上"]],
          tags: [],
          cta: "應徵",
        },
      },
      product: {
        prompt: "用{name}的風格做一張商品卡片",
        label: "對話範例：AI 程式助理用{name}的 DESIGN.md 做出商品卡片",
        file: "ProductCard.tsx",
        think: "商品卡片需要商品名稱、一句介紹、價格和購買按鈕。我先讀{name}的 DESIGN.md，色彩、字級和按鈕數值都照檔案寫的用。",
        card: {
          title: "帆布托特包",
          sub: "厚磅棉布・日常尺寸",
          rows: [["售價", "NT$590"], ["配送", "明天送達"]],
          tags: [],
          cta: "立即購買",
        },
      },
      booking: {
        prompt: "用{name}的風格做一張預訂確認卡片",
        label: "對話範例：AI 程式助理用{name}的 DESIGN.md 做出預訂確認卡片",
        file: "BookingCard.tsx",
        think: "預訂確認卡片需要確認訊息、訂單編號、日期和查看訂單的按鈕。我先讀{name}的 DESIGN.md，色彩、字級和按鈕數值都照檔案寫的用。",
        card: {
          title: "預訂已確認",
          sub: "我們會在前一天提醒你。",
          rows: [["訂單編號", "B24-1023"], ["日期", "10月23日 上午 10:00"]],
          tags: [],
          cta: "查看訂單",
        },
      },
      article: {
        prompt: "用{name}的風格做一張新聞卡片",
        label: "對話範例：AI 程式助理用{name}的 DESIGN.md 做出新聞卡片",
        file: "ArticleCard.tsx",
        think: "新聞卡片需要分類、時間、標題、摘要和閱讀按鈕。我先讀{name}的 DESIGN.md，色彩、字級和按鈕數值都照檔案寫的用。",
        card: {
          title: "週末各地晴朗　早晚溫差大",
          sub: "週末各地大多是晴天，但清晨和夜間氣溫明顯下降，外出記得多帶一件外套。",
          rows: [],
          tags: ["生活", "2 小時前"],
          cta: "閱讀全文",
        },
      },
      task: {
        prompt: "用{name}的風格做一張待辦卡片",
        label: "對話範例：AI 程式助理用{name}的 DESIGN.md 做出待辦卡片",
        file: "TaskCard.tsx",
        think: "待辦卡片需要編號、狀態、標題、一行說明和指派按鈕。我先讀{name}的 DESIGN.md，色彩、字級和按鈕數值都照檔案寫的用。",
        card: {
          title: "確認報價需求",
          sub: "請確認金額和交期，今天之內回覆。",
          rows: [],
          tags: ["#128", "處理中"],
          cta: "指派給我",
        },
      },
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
    faceSub: "這裡無法載入 {face}，所以改用實測選出的替代字型 {sub}，並非品牌字型。",
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

/* kana, hanzi and full-width forms: in Traditional Chinese copy a Latin or digit edge of a name is
   set off from them by a space ("用 KakaoBank 的風格", "我先讀 104人力銀行的 DESIGN.md"), as the
   round-11 copy wrote "用 104 的風格"; Japanese runs them together ("pixiv風の…") and Korean and
   English templates already carry their spaces. */
const CJK_CHAR = /[぀-ヿ㐀-鿿豈-﫿＀-￯]/;
const LATIN_EDGE = /[A-Za-z0-9]/;

/** Fill {name} in a chat template the way the locale writes a brand name into running text. */
export function withName(template: string, name: string, locale: SiteLocale): string {
  return template.replace(/\{name\}/g, (m, at: number) => {
    if (locale !== "zh-tw" || !name) return name;
    const before = template[at - 1] ?? "", after = template[at + m.length] ?? "";
    const lead = CJK_CHAR.test(before) && LATIN_EDGE.test(name[0]) ? " " : "";
    const tail = CJK_CHAR.test(after) && LATIN_EDGE.test(name[name.length - 1]) ? " " : "";
    return lead + name + tail;
  });
}
