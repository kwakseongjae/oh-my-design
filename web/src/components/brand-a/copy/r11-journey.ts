/* Round-11 journey copy (docs/REDESIGN_R11_PLAN_2026-10-20.md W2, owner items 8–11). Written natively
 * per locale in the same shape; Korean is plain 해요체. Sample-screen copy follows the page locale; names,
 * merchants and employers are generic, never real businesses or people. Amounts stay in the company's own
 * currency (KRW for the Korean picks, JPY for freee, TWD for 104), written the way each language writes it;
 * English writes "KRW", not ₩, which the self-hosted Pretendard subset does not carry (KakaoBank and
 * Banksalad set their screens in it). {f} = the brand face's family, {s} = a measured substitute's family. */
import type { SiteLocale } from "@/lib/i18n/site-locales";

type Row3 = readonly [string, string, string];

export interface JourneyCopy {
  /** the section's one supporting sentence (replaces gen.intro: each company now draws its own screen) */
  readonly intro: string;
  /** ≤900px: the DESIGN.md pane and the screen pane become two tabs */
  readonly tabs: { readonly label: string; readonly code: string; readonly screen: string };
  readonly face: {
    /** proprietary face with no measured substitute, or no face claimed */
    readonly none: string;
    /** an open face the page language's script is not in */
    readonly uncovered: string;
    /** a measured substitute (spec/design-md-v3.md §6, owner policy F2/G3) */
    readonly sub: string;
  };
  /** consumed by the screen but absent from the reference, so the element is left out */
  readonly omitted: string;
  readonly sample: {
    /** toss: spending card with a send action */
    readonly transfer: { readonly label: string; readonly amount: string; readonly rows: readonly Row3[]; readonly cta: string };
    /** karrot: second-hand listings */
    readonly listing: { readonly title: string; readonly cta: string; readonly items: readonly Row3[] };
    /** kakaobank: account card */
    readonly account: { readonly name: string; readonly balance: string; readonly cta: string; readonly rows: readonly (readonly [string, string])[] };
    /** banksalad: asset summary */
    readonly assets: { readonly caption: string; readonly total: string; readonly rows: readonly (readonly [string, string])[]; readonly cta: string };
    /** freee: accounting entries (date, description, amount) */
    readonly ledger: { readonly title: string; readonly rows: readonly Row3[]; readonly cta: string };
    /** 104: job postings (title, employer, place and pay) */
    readonly job: { readonly title: string; readonly jobs: readonly Row3[]; readonly cta: string };
    /** LINE: chat list (name, last message, time, unread count) */
    readonly chats: { readonly title: string; readonly rows: readonly (readonly [string, string, string, number])[] };
  };
}

const EN: JourneyCopy = {
  intro: "Pick a company, and its main product screen is drawn again from its DESIGN.md alone.",
  tabs: { label: "View", code: "DESIGN.md", screen: "Screen" },
  face: {
    none: "Brand typeface not applied",
    uncovered: "Brand typeface not applied: {f} has no glyphs for this language",
    sub: "Substitute {s} — not the brand face",
  },
  omitted: "Not in the source, so left out of the screen:",
  sample: {
    transfer: {
      label: "Spent this month",
      amount: "KRW 684,200",
      rows: [
        ["Corner bakery", "Today 08:12", "-KRW 6,500"],
        ["Convenience store", "Yesterday", "-KRW 3,200"],
        ["Sent to a friend", "Oct 18", "-KRW 30,000"],
      ],
      cta: "Send money",
    },
    listing: {
      title: "Nearby",
      cta: "Sell",
      items: [
        ["Solid wood desk", "KRW 35,000", "1.2 km · 3 min ago"],
        ["Two camping chairs", "KRW 20,000", "2.4 km · 1 hr ago"],
        ["Rice cooker, barely used", "KRW 48,000", "0.8 km · yesterday"],
      ],
    },
    account: {
      name: "Checking account",
      balance: "KRW 1,280,000",
      cta: "Transfer",
      rows: [
        ["Savings", "KRW 3,400,000"],
        ["Group account", "KRW 250,000"],
      ],
    },
    assets: {
      caption: "Net worth",
      total: "KRW 32,480,000",
      rows: [
        ["Deposits", "KRW 12,300,000"],
        ["Investments", "KRW 8,900,000"],
        ["Card bills", "-KRW 1,240,000"],
      ],
      cta: "Connect accounts",
    },
    ledger: {
      title: "Entries",
      rows: [
        ["10/18", "Office supplies", "¥1,280"],
        ["10/17", "Train fare", "¥640"],
        ["10/15", "Sales deposit", "+¥52,000"],
      ],
      cta: "Add entry",
    },
    job: {
      title: "Jobs for you",
      jobs: [
        ["Frontend engineer", "A software company", "Taipei · NT$45,000–60,000/mo"],
        ["UI designer", "A design studio", "New Taipei · NT$40,000–52,000/mo"],
      ],
      cta: "Apply",
    },
    chats: {
      title: "Chats",
      rows: [
        ["Mina", "What time works tomorrow?", "2:14 PM", 2],
        ["Weekend hikers", "I posted the photos", "11:02 AM", 5],
        ["Family", "Dinner together on Sunday", "Yesterday", 0],
        ["Corner bookshop", "This week's new arrivals", "Monday", 0],
      ],
    },
  },
};

const KO: JourneyCopy = {
  intro: "회사를 고르면 그 회사의 대표 화면을 DESIGN.md에 적힌 값만으로 다시 그려요.",
  tabs: { label: "보기", code: "DESIGN.md", screen: "화면" },
  face: {
    none: "브랜드 글꼴 미적용",
    uncovered: "브랜드 글꼴 미적용: {f}에는 한글이 없어요",
    sub: "대체 글꼴 {s} · 브랜드 글꼴이 아니에요",
  },
  omitted: "출처에 없어 화면에서 뺀 값:",
  sample: {
    transfer: {
      label: "이번 달 쓴 돈",
      amount: "684,200원",
      rows: [
        ["동네 빵집", "오늘 08:12", "-6,500원"],
        ["편의점", "어제", "-3,200원"],
        ["친구에게 보냄", "10월 18일", "-30,000원"],
      ],
      cta: "송금하기",
    },
    listing: {
      title: "중고거래",
      cta: "판매하기",
      items: [
        ["원목 책상", "35,000원", "1.2km · 3분 전"],
        ["캠핑 의자 2개", "20,000원", "2.4km · 1시간 전"],
        ["거의 새 전기밥솥", "48,000원", "0.8km · 어제"],
      ],
    },
    account: {
      name: "입출금통장",
      balance: "1,280,000원",
      cta: "이체하기",
      rows: [
        ["저축 계좌", "3,400,000원"],
        ["모임 통장", "250,000원"],
      ],
    },
    assets: {
      caption: "순자산",
      total: "32,480,000원",
      rows: [
        ["예적금", "12,300,000원"],
        ["투자", "8,900,000원"],
        ["카드값", "-1,240,000원"],
      ],
      cta: "계좌 연결하기",
    },
    ledger: {
      title: "거래 내역",
      rows: [
        ["10/18", "사무용품", "¥1,280"],
        ["10/17", "교통비", "¥640"],
        ["10/15", "매출 입금", "+¥52,000"],
      ],
      cta: "거래 추가",
    },
    job: {
      title: "추천 공고",
      jobs: [
        ["프론트엔드 개발자", "소프트웨어 회사", "타이베이 · 월 NT$45,000~60,000"],
        ["UI 디자이너", "디자인 스튜디오", "신베이 · 월 NT$40,000~52,000"],
      ],
      cta: "지원하기",
    },
    chats: {
      title: "대화",
      rows: [
        ["하늘", "내일 몇 시에 볼까요?", "오후 2:14", 2],
        ["주말 등산 모임", "사진 올렸어요", "오전 11:02", 5],
        ["가족", "일요일에 같이 저녁 먹어요", "어제", 0],
        ["동네 책방", "이번 주 새로 들어온 책이에요", "월요일", 0],
      ],
    },
  },
};

const JA: JourneyCopy = {
  intro: "企業を選ぶと、その企業の代表的な画面を DESIGN.md の値だけで描き直します。",
  tabs: { label: "表示", code: "DESIGN.md", screen: "画面" },
  face: {
    none: "ブランド書体は未適用",
    uncovered: "ブランド書体は未適用（{f}に日本語の文字がありません）",
    sub: "代替書体 {s}（ブランド書体ではありません）",
  },
  omitted: "出典にないため画面に描いていない値:",
  sample: {
    transfer: {
      label: "今月の支出",
      amount: "684,200ウォン",
      rows: [
        ["街のパン屋", "今日 08:12", "-6,500ウォン"],
        ["コンビニ", "昨日", "-3,200ウォン"],
        ["友だちへ送金", "10月18日", "-30,000ウォン"],
      ],
      cta: "送金する",
    },
    listing: {
      title: "近所の出品",
      cta: "出品する",
      items: [
        ["無垢材のデスク", "35,000ウォン", "1.2km・3分前"],
        ["キャンプチェア 2脚", "20,000ウォン", "2.4km・1時間前"],
        ["ほぼ新品の炊飯器", "48,000ウォン", "0.8km・昨日"],
      ],
    },
    account: {
      name: "普通預金",
      balance: "1,280,000ウォン",
      cta: "振り込む",
      rows: [
        ["貯蓄口座", "3,400,000ウォン"],
        ["グループ口座", "250,000ウォン"],
      ],
    },
    assets: {
      caption: "純資産",
      total: "32,480,000ウォン",
      rows: [
        ["預金・積立", "12,300,000ウォン"],
        ["投資", "8,900,000ウォン"],
        ["カードの利用額", "-1,240,000ウォン"],
      ],
      cta: "口座を連携する",
    },
    ledger: {
      title: "取引一覧",
      rows: [
        ["10/18", "事務用品", "1,280円"],
        ["10/17", "交通費", "640円"],
        ["10/15", "売上の入金", "+52,000円"],
      ],
      cta: "取引を登録",
    },
    job: {
      title: "おすすめの求人",
      jobs: [
        ["フロントエンドエンジニア", "ソフトウェア企業", "台北市・月給 NT$45,000〜60,000"],
        ["UIデザイナー", "デザインスタジオ", "新北市・月給 NT$40,000〜52,000"],
      ],
      cta: "応募する",
    },
    chats: {
      title: "トーク",
      rows: [
        ["みな", "明日は何時にする？", "14:14", 2],
        ["週末ハイキング", "写真をアップしたよ", "11:02", 5],
        ["家族", "日曜日にみんなで夕飯", "昨日", 0],
        ["まちの本屋", "今週の新刊のお知らせです", "月曜日", 0],
      ],
    },
  },
};

const ZH_TW: JourneyCopy = {
  intro: "選一家企業，就只用它 DESIGN.md 裡的數值，重新畫出它的代表畫面。",
  tabs: { label: "檢視", code: "DESIGN.md", screen: "畫面" },
  face: {
    none: "未套用品牌字體",
    uncovered: "未套用品牌字體：{f} 沒有中文字",
    sub: "替代字體 {s}，並非品牌字體",
  },
  omitted: "來源中沒有，因此未畫進畫面的值：",
  sample: {
    transfer: {
      label: "本月支出",
      amount: "684,200 韓元",
      rows: [
        ["巷口麵包店", "今天 08:12", "-6,500 韓元"],
        ["便利商店", "昨天", "-3,200 韓元"],
        ["轉帳給朋友", "10月18日", "-30,000 韓元"],
      ],
      cta: "轉帳",
    },
    listing: {
      title: "附近二手",
      cta: "我要賣",
      items: [
        ["實木書桌", "35,000 韓元", "1.2 公里・3 分鐘前"],
        ["露營椅兩張", "20,000 韓元", "2.4 公里・1 小時前"],
        ["幾乎全新電子鍋", "48,000 韓元", "0.8 公里・昨天"],
      ],
    },
    account: {
      name: "活期帳戶",
      balance: "1,280,000 韓元",
      cta: "轉帳",
      rows: [
        ["儲蓄帳戶", "3,400,000 韓元"],
        ["共同帳戶", "250,000 韓元"],
      ],
    },
    assets: {
      caption: "淨資產",
      total: "32,480,000 韓元",
      rows: [
        ["存款", "12,300,000 韓元"],
        ["投資", "8,900,000 韓元"],
        ["信用卡帳款", "-1,240,000 韓元"],
      ],
      cta: "連結帳戶",
    },
    ledger: {
      title: "交易明細",
      rows: [
        ["10/18", "辦公用品", "1,280 日圓"],
        ["10/17", "交通費", "640 日圓"],
        ["10/15", "營收入帳", "+52,000 日圓"],
      ],
      cta: "新增交易",
    },
    job: {
      title: "為你推薦的職缺",
      jobs: [
        ["前端工程師", "軟體公司", "台北市・月薪 45,000~60,000 元"],
        ["UI 設計師", "設計工作室", "新北市・月薪 40,000~52,000 元"],
      ],
      cta: "立即應徵",
    },
    chats: {
      title: "聊天",
      rows: [
        ["小美", "明天幾點見？", "下午 2:14", 2],
        ["週末登山社", "照片上傳囉", "上午 11:02", 5],
        ["家人", "星期日一起吃晚餐", "昨天", 0],
        ["巷口書店", "本週新書介紹", "星期一", 0],
      ],
    },
  },
};

const BY: Record<SiteLocale, JourneyCopy> = { en: EN, ko: KO, ja: JA, "zh-tw": ZH_TW };

export function getJourneyCopy(locale: SiteLocale): JourneyCopy {
  return BY[locale];
}
