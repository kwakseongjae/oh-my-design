import type { KanaChrome, SourceOrg } from "./copy";

/**
 * /ja/kana — the Japanese chrome around the kana writing rules: the page title, headings, labels, the status line, the
 * notice and the table and list labels. The rules, quotes, examples and sources come from
 * data/kana-rules.generated.json, as on /ko/kana; the #app screen's Japanese is app-copy.ts, unchanged.
 *
 * COMPOSED COPY. Composed by a model (Claude Opus 5.5) on 2026-11-23 for the Japanese edition of the page. These are
 * not source quotes. No native Japanese reader has read them, and the page says so at the top, in the notice below
 * (KANA_COPY_JA.hero.notice). Only short functional strings live here: the Korean page's prose (section intros,
 * #use, the readings of each rule and house choice) has no Japanese twin, because we would be writing Japanese
 * explanations nobody can vouch for. Where the Korean page has a reading, the Japanese page leads with the source's
 * own sentence (rule-lead.ts) or shows our English rule, labelled as not a quote.
 *
 * This file is the only place where the Japanese page's composed Japanese is allowed (app-copy.ts keeps the #app
 * screen's); __tests__/kana-page-ja.test.ts fails on a composed string inside a quote, an example, #compare's pairs or
 * the phones, and on Japanese in another component file.
 *
 * House choices, the same as app-copy.ts's (writing-rules.md "The project's DESIGN.md decides"): 。 ends a sentence and
 * nothing else (UW-41; headings, labels, buttons and links take none); button and link labels are nouns without する
 * (UW-16, SmartHR's form); full-width brackets and colon (UW-43, UW-47, SmartHR); no space between Japanese and Latin
 * letters or digits (UW-40, SmartHR and JTF); digits as numerals (KW-55).
 *
 * kana-copy-check (scripts/lang/kana-copy-check.mjs, 2026-11-23), over a TSX fixture that sets each string in the element
 * it is on the page (buttons and links in <button>, headings in <h2>, the rest in <p>; the page test builds the same):
 *   0 WARN, 1 FYI: KW-35, "52% kanji of 891 kanji and hiragana", a ratio over the whole fixture. Most strings here are
 *   headings and labels, which the rules want as nouns (KW-02), so the ratio runs high; the test does not hold it.
 *
 * Organisation names: in Latin letters as each source writes itself, except the two government bodies, whose names
 * are their own pages' titles (design.digital.go.jp: 「デジタル庁デザインシステムβ版」; nta.go.jp: 「…｜国税庁」, read
 * 2026-11-23).
 */

export const KANA_PATH_JA = "/ja/kana";

/** The repository's issue form, where the notice sends a reader who finds a mistake (the FAQ page links the same form). */
export const KANA_ISSUE_URL = "https://github.com/kwakseongjae/oh-my-design/issues/new";

export const KANA_COPY_JA = {
  sep: "",
  list: "、",
  colon: "：",
  paren: ["（", "）"],
  meta: {
    title: "/kana — 日本語UIテキストの規則と出典（下書き）",
    description: () => "日本語UIテキストの規則を、出典の原文の引用とともに載せた下書きのページです。",
  },
  hero: {
    kicker: "日本語UIテキストの規則",
    h1: "出典のある規則と、その原文",
    lede: "規則ごとに出典の原文を引用しています。出典によって答えが分かれる点は、どちらも載せています。",
    statusTag: "下書き",
    status: "/kanaスキルは下書きで、まだ公開していません。",
    notice: {
      text: "このページの見出しやボタンなどの文言はAIモデルが書いたもので、日本語ネイティブの確認を受けていません。規則の日本語の文は、すべて各出典からの引用です。",
      report: "誤りの報告（GitHub）",
      href: KANA_ISSUE_URL,
    },
    cta: () => "規則の一覧",
    ctaSources: "出典の一覧",
    stats: { rules: "規則", house: "出典で分かれる点", services: "フォントを測った日本のサービス" },
  },
  app: {
    h2: "日本語にしたアプリの画面",
    composed: "この画面の日本語は両方ともAIモデルが書いた文で、出典からの引用ではありません。日本語ネイティブの確認は受けていません。",
    sides: {
      before: "規則を使わない訳",
      after: "規則に沿った訳",
      group: "表示する画面",
      hintAuto: "違う箇所を順に示します。押すと止まります。",
      hintPaused: "止まりました。押すと画面を切り替えます。",
    },
    tagsLabel: "2つの画面で違う箇所",
    toCard: "規則のカードへ",
  },
  compare: {
    h2: "画面に置いた出典の例",
    real: "日本語は出典の例を1文字も変えずに載せています。灰色の棒とコンポーネントの形は、当サイトが描いたものです。",
    wrong: "出典が避ける文言",
    right: "出典が勧める文言",
    switchGroup: "表示する文言",
    stopsLabel: "比べる規則",
    hintAuto: "規則が順に切り替わります。矢印か規則の番号を押すと止まります。",
    hintPaused: "止まりました。矢印か規則の番号で切り替えます。",
    play: "自動切り替えを開始",
    pause: "自動切り替えを停止",
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
    toCard: "規則のカードへ",
  },
  rules: {
    h2: "主な規則",
    intro: "日本語の文と、引用符と出典の付いた英文は、出典からの引用です。引用符のない英文は当サイトが書いた規則の要約です。",
    allH2: "分野別の規則",
    seenAbove: "上で紹介した規則",
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
    h2: (n: number) => `日本の${n}サービスで最初に来る日本語フォント`,
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

/** Every composed string in this file, functions called with sample numbers: what the page test and the checker read. */
export function composedJa(): string[] {
  const out: string[] = [];
  const walk = (v: unknown): void => {
    if (typeof v === "string") out.push(v);
    else if (typeof v === "function") for (const a of [[3, 1], [3, 0], [0, 1]]) walk((v as (...a: number[]) => unknown)(...a));
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
