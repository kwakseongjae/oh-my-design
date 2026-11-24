import type { KanaChrome, SourceOrg } from "./copy";

/**
 * /ja/kana and /ja/kana/rules: the Japanese edition's chrome. The rules, quotes, examples and sources come from
 * data/kana-rules.generated.json, as on the Korean pages; the moa screens' Japanese is app-copy.ts; the typography
 * quotes are type-quotes.ts.
 *
 * COMPOSED COPY. Written by a model (Claude Opus 5.5) on 2026-11-24 for the Japanese edition, porting the short
 * functional strings of PR #160 (2026-11-23) and adding the showcase's headings, notes and status. These are not source
 * quotes, and no native Japanese reader has read them: the page says so on its first screen (hero.notice) and beside
 * the moa screens (app.composed). The Korean pages' explanations are not translated here. Where the Korean page
 * explains a rule in its own words, this edition leads with the source's own sentence (rule-lead.ts) or with
 * writing-rules.md's English rule, labelled as ours.
 *
 * This file is the only place where the Japanese pages' composed Japanese is allowed (app-copy.ts keeps the screens');
 * __tests__/kana-page.test.ts fails on composed Japanese anywhere else, and runs kana-copy-check over composedJa().
 *
 * House choices, the same as app-copy.ts's (writing-rules.md "The project's DESIGN.md decides"): 。 ends a sentence and
 * nothing else (UW-41; headings, labels, buttons and links take none); button and link labels are nouns without する
 * (UW-16, SmartHR's form); full-width brackets and colon (UW-43, UW-47, SmartHR); no space between Japanese and Latin
 * letters or digits (UW-40, SmartHR and JTF); digits as numerals (KW-55); か所 with numerals.
 *
 * Organisation names: in Latin letters as each source writes itself, except the two government bodies, whose names
 * are their own pages' titles (design.digital.go.jp: 「デジタル庁デザインシステムβ版」; nta.go.jp: 「…｜国税庁」).
 */

export const KANA_PATH_JA = "/ja/kana";
export const KANA_RULES_PATH_JA = "/ja/kana/rules";

/** The repository's issue form, where the notice sends a reader who finds a mistake. */
export const KANA_ISSUE_URL = "https://github.com/kwakseongjae/oh-my-design/issues/new";

export const KANA_COPY_JA = {
  sep: "",
  list: "、",
  colon: "：",
  paren: ["（", "）"],
  meta: {
    title: "/kana — 出典のある日本語UIの規則（下書き）",
    description:
      "コーディングエージェント向けに、日本語のUIテキストの規則をまとめたスキルの下書きです。規則ごとに、デジタル庁デザインシステム、企業のデザインシステム、翻訳ガイドの原文を引用しています。",
    rulesTitle: "/kana — 日本語UIテキストの規則と出典（下書き）",
    rulesDescription: (rules: number, house: number) =>
      `日本語UIテキストの規則${rules}件を、出典の原文の引用とともに載せています。出典によって分かれる${house}点は、どちらも載せています。`,
  },
  hero: {
    kicker: "日本語UIテキストのスキル",
    statusTag: "下書き",
    h1: "規則はすべて、出典の原文とともに",
    lede: "/kanaは、コーディングエージェントが日本語のUIテキストを書くときの規則をまとめたスキルの下書きです。規則ごとに、デジタル庁デザインシステム、企業のデザインシステム、翻訳ガイドの原文を引用しています。",
    cta: () => "規則の一覧",
    ctaSecond: "現在の状況",
    notice: {
      text: "このページの見出しや説明の日本語はAIモデルが書いたもので、日本語ネイティブの確認を受けていません。規則の文は、すべて出典からの引用です。",
      report: "誤りの報告（GitHub）",
    },
  },
  app: {
    eyebrow: "アプリの画面",
    h2: "同じ画面を、ガイドに沿って直すと",
    intro: "ガイドが避ける表現で書いた画面と、同じ画面をガイドに沿って直した画面です。違う箇所を順に示し、その規則の出典の例を添えています。",
    composed: "この2つの画面の日本語は、規則を示すために当サイトが書いた例文です。日本語ネイティブの確認は受けていません。",
    sides: {
      before: "ガイドが避ける表現",
      after: "ガイドに沿った表現",
      group: "表示する画面",
      hintAuto: "違う箇所を順に示します。押すと止まります。",
      hintPaused: "押すと画面を切り替えます。",
    },
    tagsLabel: "2つの画面で違う箇所",
    tags: {
      "KW-32": "感嘆符を使わない",
      "KW-12": "「あなたの」を入れない",
      "KW-33": "「すべて」はひらがな",
      "KW-09": "敬語を重ねない",
      "KW-38": "カタカナ語より日本語",
      "KW-62": "「しますか」で尋ねる",
      "KW-26": "エラーは直し方まで",
      "KW-14": "「できます」と短く",
      "KW-15": "ボタンは操作の内容で",
    },
    srcHead: "出典の例",
  },
  compare: {
    real: "日本語は出典の例を1文字も変えずに載せています。灰色の棒とコンポーネントの形は、当サイトが描いたものです。",
    wrong: "出典が避ける文言",
    right: "出典が勧める文言",
    switchGroup: "表示する文言",
    stopsLabel: "比べる規則",
    hintAuto: "規則が順に切り替わります。矢印か規則の番号を押すと止まります。",
    hintPaused: "矢印か規則の番号で切り替えます。",
    play: "自動切り替えの開始",
    pause: "自動切り替えの停止",
    kind: {
      button: "ボタン",
      "dialog-button": "ダイアログのボタン",
      instruction: "操作の説明",
      "field-error": "入力欄のエラー",
      "notification-bar": "通知バー",
      "count-line": "件数の表示",
      "dialog-title": "ダイアログの見出し",
      "dialog-question": "確認ダイアログの質問",
    },
    toCard: "規則の一覧へ",
  },
  register: {
    eyebrow: "敬語と言い回し",
    h2: "丁寧さは一度で",
    intro: "画面の日本語は当サイトの例文です。その下の例と文は、出典からの引用です。",
    srcHead: "出典の例と文",
    rows: {
      "KW-09": { h: "敬語を重ねない" },
      "KW-32": { h: "感嘆符を使わない" },
      "KW-12": { h: "「あなたの」を入れない" },
    },
  },
  sheet: {
    eyebrow: "ボタンとエラー",
    h2: "押すと何が起こるかを書く",
    intro: "送金を確かめるシートで、4か所が違います。シートの日本語は当サイトの例文で、中央の例は出典からの引用です。",
    notesLabel: "2つのシートで違う箇所",
    notes: {
      "KW-62": { t: "「しますか」で尋ねる" },
      "KW-26": { t: "エラーは直し方まで", mine: "避ける側のエラー文は、DADSの悪い例そのままです。" },
      "KW-14": { t: "「できます」と短く" },
      "KW-15": {
        t: "ボタンは操作の内容で",
        mine: "避ける側の「OK」は、UbieのBadの例そのままです。ボタンに「する」を付けるかは出典によって分かれるため、この画面はSmartHRに合わせて名詞で終えています。",
      },
    },
  },
  type: {
    eyebrow: "組版",
    h2: "韓国語向けの組版のままだと",
    intro: "/hangul（韓国語のスキル）の設定と日本語向けの設定で、同じ文を組みました。本文はDADSの行高の規則の文、見出しは当サイトの例文です。どちらもNoto Sans JPです。",
    before: "/hangulの韓国語向けの設定",
    after: "日本語向けの設定",
    notesLabel: "2つの設定で違う箇所",
    keepAll: {
      t: "keep-allではなくnormal、見出しはauto-phrase",
      mine: (services: number, keepAll: number) =>
        `この規則は、CSSの仕様の定義から当サイトが導いたものです。auto-phraseはChromeとEdgeだけで動き、ほかのブラウザーではnormalで改行します。日本の${services}サービスのうち、テキストの10%以上にkeep-allを使っていたのは${keepAll}サービスでした。`,
    },
    tracking: {
      t: "字間はDADSのトークンどおり0〜0.02em",
      mine: (ja: number, jaNeg: number, ko: number, koNeg: number) =>
        `DADSには負の字間のトークンがありません。禁止とは書かれていません。見出しの字間が負の値だったのは、日本の${ja}サービス中${jaNeg}、韓国の${ko}サービス中${koNeg}でした。`,
    },
    leading: {
      t: "本文の行高はDADSのトークンどおり1.7",
      mine: (services: number, median: number) =>
        `DADSは少なくとも1.5倍を勧めているので、韓国語向けの1.5もその範囲内です。DADSの本文のトークンは、16pxが170%と175%、17pxが170%です。段落のある日本の${services}サービスでは、段落の行高の中央値が${median}でした。`,
    },
    fonts: {
      t: (n: number) => `日本の${n}サービスで最初に指定された日本語フォント`,
      caption: (date: string) => `${date}に各サービスの最初の画面で測った値です。このページの日本語は、DADSが例に挙げたNoto Sans JPで表示しています。`,
    },
  },
  index: {
    h2: (n: number) => `/kanaの規則${n}件`,
    intro: "引用符の中の日本語と英文は、出典からの引用です。規則を押すと、出典の文と例がその場で開きます。プロジェクトのDESIGN.mdに文体や表記の決まりがあれば、そちらを優先します。",
    open: "規則のページで原文をすべて見る",
    moreH: "規則のページ",
    more: [
      { k: "規則51件の原文", t: "規則ごとの出典の文、例、同じことを述べる出典", hash: "#rules" },
      { k: "出典で分かれる16点", t: "どちらかを選ばず、両方を載せています", hash: "#house" },
      { k: "出典ページ29件", t: "すべて2026年11月21日に閲覧", hash: "#sources" },
      { k: "日本の77サービスの日本語フォント", t: "2026年11月12日に測定", hash: "#fonts" },
    ],
  },
  status: {
    h2: "現在は下書きです",
    items: [
      { k: "公開", t: "/kanaスキルはまだ公開していません。規則と例文は、まだ日本語ネイティブの確認を受けていません。" },
      {
        k: "引用",
        t: "規則の引用は2026年11月21日に、組版の規則の引用3件は11月24日に、スクリプトで出典ページの文字と照合しました。JTFスタイルガイドの例3組とMicrosoftの表の中の1文は、照合できていません。",
      },
      { k: "例文", t: "moaの画面の日本語は当サイトが書いた文です。出典の言葉そのままなのは、DADSのエラー文、Ubieの「OK」、SmartHRの「キャンセル」の3つです。" },
    ],
    moreH: "ご確認のお願い",
    links: [
      { k: "誤りの報告", t: "GitHubのIssueで受け付けています", href: KANA_ISSUE_URL },
      { k: "規則の一覧", t: "規則と出典の原文", href: KANA_RULES_PATH_JA },
    ],
  },
  rulesPage: {
    h1: (n: number) => `日本語UIテキストの規則${n}件と出典`,
    lede: "/kanaスキルのもとになった調査です。規則ごとに出典の原文を引用し、出典によって分かれる点はどちらも載せています。",
    back: "/kanaのトップ",
    toc: "このページの内容",
  },
  rules: {
    h2: "分野別の規則",
    intro: "日本語の文と、引用符と出典の付いた英文は、出典からの引用です。引用符のない英文は、当サイトが書いた規則の要約です。",
    english: "英文（引用ではありません）",
    examples: "出典の例",
    given: "出典の語",
    before: "変更前",
    after: "変更後",
    noExample: "出典に例はありません。",
    pairsInQuote: "引用の中の組が例です。",
    newTab: "新しいタブで開く",
  },
  tiers: {
    label: "同じことを述べる出典",
    government: "政府のデザインシステム",
    company: (n: number) => `企業ガイド4社中${n}社`,
    translation: "翻訳ガイド",
    optim: "OPTiMは見出しのみ（数えない）",
    law: "法的義務（国税庁の説明）",
  },
  house: {
    h2: "出典で分かれる点",
    intro: "見出しと、引用符のない英文は当サイトが書いたものです。",
    notReal: "確認の結果、実際には分かれていない",
  },
  fonts: {
    h2: (n: number) => `日本の${n}サービスで最初に指定された日本語フォント`,
    none: "日本語フォントを特定できず",
    unit: "",
    caption: "に各サービスの最初の画面で測った値です。",
    label: "最初の日本語フォント別のサービス数",
  },
  sources: {
    h2: "出典",
    intro: "規則と引用の出典ページです。",
    opened: ["すべて", "に閲覧しました。"],
    cited: (rules: number, house: number) =>
      "引用：" + [rules ? `規則${rules}件` : "", house ? `分かれる点${house}件` : ""].filter(Boolean).join("、"),
    noUrl: "今回の調査の出典一覧にURLがないため、リンクはありません。",
  },
} as const satisfies KanaChrome;

/** writing-rules.md's area headings, in Japanese */
export const AREA_JA: Readonly<Record<string, string>> = {
  Register: "文体",
  Keigo: "敬語",
  "Buttons, labels and links": "ボタン、ラベル、リンク",
  "Errors, results and status": "エラー、結果、状態",
  "Dialogs and empty states": "ダイアログと空の状態",
  Notation: "表記",
  "Numbers and counters": "数字と助数詞",
  "Plain and fair wording": "わかりやすく公平な言葉",
};

/** The sources list's organisations (the same prefixes as copy.ts's SOURCE_ORGS), named and described in Japanese. */
export const SOURCE_ORGS_JA: readonly SourceOrg[] = [
  { prefix: "DADS", name: "デジタル庁デザインシステム（DADS）", kind: "政府のデザインシステム" },
  { prefix: "NTA", name: "国税庁", kind: "法律を執行する行政機関の説明" },
  { prefix: "SH", name: "SmartHR Design System", kind: "企業のデザインシステム" },
  { prefix: "UB", name: "Ubie Vitals", kind: "企業のデザインシステム" },
  { prefix: "SP", name: "Ameba Spindle", kind: "企業のデザインシステム" },
  { prefix: "PB", name: "GMO Pepabo Inhouse", kind: "企業のデザインシステム" },
  { prefix: "MZ", name: "Mozilla Japan", kind: "翻訳ガイド" },
  { prefix: "WP", name: "WordPress Japanese Team", kind: "翻訳ガイド" },
  { prefix: "MS", name: "Microsoft Japanese Localization Style Guide", kind: "翻訳ガイド" },
  { prefix: "OPT", name: "OPTiM TECH BLOG", kind: "規則の見出しだけの記事（数えない）" },
  { prefix: "JTF", name: "JTF Style Guide", kind: "翻訳業界のスタイルガイド" },
];

/** Every composed string in this file, functions called with sample arguments: what the page test and the checker read. */
export function composedJa(): string[] {
  const out: string[] = [];
  const walk = (v: unknown): void => {
    if (typeof v === "string") out.push(v);
    else if (typeof v === "function") walk((v as (...a: unknown[]) => unknown)(3, 1, 65, 23));
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === "object") Object.values(v).forEach(walk);
  };
  const { sep, list, colon, paren, ...chrome } = KANA_COPY_JA;
  void sep;
  void list;
  void colon;
  void paren;
  walk(chrome);
  walk(AREA_JA);
  walk(SOURCE_ORGS_JA.map((o) => [o.name, o.kind]));
  return [...new Set(out.filter((s) => /[\u3000-\u30ff\u3400-\u9fff\uff00-\uffef]/.test(s)))];
}
