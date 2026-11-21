/**
 * The Japanese app screen on /ko/kana (#app): hangul's moa home screen, shown twice in Japanese. A Korean team ships
 * its fintech app in Japan; "ai" is the screen as an agent tends to write it when it carries a Korean screen into
 * Japanese without the rules, "fix" is the same screen following docs/drafts/kana/references/writing-rules.md.
 *
 * COMPOSED COPY. Composed by a model (Claude Opus 5.5) on 2026-11-22 for the /ko/kana demo screen. These are not source
 * quotes, except the strings marked `source` below, which are copied character for character from a quote in
 * writing-rules.md. No native Japanese reader has read them. The page says so beside the screen every time it renders
 * (KANA_COPY.app.composed). Review: none yet (the main session adds the independent check here).
 *
 * This file is the only place on the page where Japanese of our own is allowed, and only the #app section renders it
 * (__tests__/kana-page.test.ts). The rule cards, quotes, #compare and the skill files stay source-only.
 *
 * How the "ai" strings were chosen: they are not eval output. Each one is a form the named rule's own sources give as
 * wrong (an NG/Don't/Bad/− example, or the form a rule's quote names), put into this screen. Two are a source's own
 * string, verbatim: "OK" (UB-btn Bad 「OK」, KW-15) and 「＊入力に誤りがあります。」 (DADS-in's bad example, KW-26).
 *
 * House choices (writing-rules.md "The project's DESIGN.md decides"), made once and the same on both sides, so that no
 * difference on the screen rests on one: 。 ends a sentence and nothing else (UW-41; headings, labels, buttons and the
 * link take none); full-width ？ (UW-42); button labels are nouns without する (UW-16, SmartHR's form); を joins an
 * object in an action label (UW-17); digits are grouped by three (KW-52) and take no space before 円 or 万円 (UW-53).
 * The field error starts with ＊ on both sides (KW-27, DADS's own convention), so the KW-26 stop differs only in what
 * the error says.
 *
 * kana-copy-check (scripts/lang/kana-copy-check.mjs, 2026-11-22), over a TSX fixture that sets the send button in a
 * <button> and every other string in a <p> (the page test writes it the same way):
 *   fix + shared: nothing (0 WARN, 0 FYI).
 *   ai: 2 WARN (KW-09 させていただきました, KW-26 ＊入力に誤りがあります。) and 7 FYI (KW-32 ！, KW-12 あなた, KW-33 全て,
 *     KW-62 てもよろしいですか, KW-14 することができ, KW-15 OK, and KW-35: "30% kanji of 102 kanji and hiragana", a
 *     ratio over the whole fixture that sits on its threshold; the screen does not mark it and the test does not hold it).
 *   It cannot see KW-38 (チェック for 確認): writing-rules.md lists KW-38 as judgment only. That stop needs a reader.
 */

export type AppSide = "ai" | "fix";

/** Where on the screen a pair sits; the tour stops in this order, top of the screen down. */
export type AppKey = "greeting" | "total" | "seeAll" | "toast" | "banner" | "sheetTitle" | "error" | "helper" | "send";

export interface AppPair {
  readonly key: AppKey;
  /** the writing-rules.md rule whose sources call the "ai" form wrong */
  readonly rule: string;
  readonly ai: string;
  readonly fix: string;
  /** a side that is a source's own string, verbatim: the source key and what it is */
  readonly source?: { readonly side: AppSide; readonly key: string; readonly what: string };
  /** what the pair rests on, for the reader of this file */
  readonly basis: string;
}

export const APP_PAIRS: readonly AppPair[] = [
  {
    key: "greeting",
    rule: "KW-32",
    ai: "こんにちは、ゆいさん！今日もお得に資産を増やしましょう！",
    fix: "こんにちは、ゆいさん",
    basis: "UB: 「煽り表現はNG。「!」「!?」などの感嘆符は使わない。」; Don't 「ありがとうございます！」 → Do 「ありがとうございます。」",
  },
  {
    key: "total",
    rule: "KW-12",
    ai: "あなたの総資産",
    fix: "総資産",
    basis: "WP 3-5: don't add 「あなたの」; 「…より自然な言い回しを使うか、省略する。」 The fix omits it.",
  },
  {
    key: "seeAll",
    rule: "KW-33",
    ai: "全て見る",
    fix: "すべて見る",
    basis: "WP 3-6: 「「全て」は「すべて」…に統一する」",
  },
  {
    key: "toast",
    rule: "KW-09",
    ai: "母に5,000円を送金させていただきました。",
    fix: "母に5,000円を送金しました。",
    basis: "SH-ws NG 「◯◯させていただきました。」 → OK 「◯◯しました。」, with ◯◯ = 母に5,000円を送金",
  },
  {
    key: "banner",
    rule: "KW-38",
    ai: "今月の特典をチェック",
    fix: "今月の特典を確認",
    basis: "MZ Bad 「…チェックして下さい。」 → Good 「…確認してください。」: the source's own word swap",
  },
  {
    key: "sheetTitle",
    rule: "KW-62",
    ai: "母に送金してもよろしいですか？",
    fix: "母に送金しますか？",
    basis: "MS − 「このまま続けてもよろしいですか?」 → + 「このまま続けますか?」 (the mark's width is UW-42, the same on both sides)",
  },
  {
    key: "error",
    rule: "KW-26",
    ai: "＊入力に誤りがあります。",
    fix: "＊500万円以下の金額を入力してください。",
    source: { side: "ai", key: "DADS-in", what: "DADS's bad example of field error text" },
    basis: "DADS-in: say what is wrong and how to correct it; the fix follows its good example's frame (「＊氏名をカタカナで入力してください。」)",
  },
  {
    key: "helper",
    rule: "KW-14",
    ai: "今日はあと500万円まで送金することができます。",
    fix: "今日はあと500万円まで送金できます。",
    basis: "SH-ws NG 「◯◯することができます。」 → OK 「◯◯できます。」; MZ 「「〜することができます」はなるべく「〜できます」と簡潔にする。」",
  },
  {
    key: "send",
    rule: "KW-15",
    ai: "OK",
    fix: "送金",
    source: { side: "ai", key: "UB-btn", what: "Ubie's Bad button label" },
    basis: "UB-btn Bad 「OK」 → Good 「この内容で更新する」; UB-am 「OK」 → 「保存」. The fix names the act, as a noun (UW-16).",
  },
];

/** Composed strings both sides share: the screen's furniture. `cancel` is a source's word (below). */
export const APP_SHARED = {
  /** the service's name, in Latin letters on both sides: ours, as on /ko/hangul */
  app: "moa",
  amount: "24,680,000円",
  deltaLead: "先月比",
  delta: "+1,250,000円",
  deposit: "入金",
  transfer: "送金",
  recentH: "最近の送金先",
  recent: ["母", "ゆうと", "さくら", "はると"],
  amountLabel: "金額",
  amountValue: "6,000,000円",
  tabs: ["ホーム", "特典", "送金", "メニュー"],
} as const;

/** The sheet's abandon button on both sides: the label SmartHR prescribes for it (SH-mu, KW-60), not composed. */
export const APP_CANCEL = { text: "キャンセル", key: "SH-mu" } as const;

/** Every composed string on the screen, both sides and the shared furniture: what the page test holds to #app. */
export function appStrings(): string[] {
  const s = APP_SHARED;
  return [
    ...APP_PAIRS.flatMap((p) => [p.ai, p.fix]),
    s.app,
    s.amount,
    s.deltaLead,
    s.delta,
    s.deposit,
    s.transfer,
    s.recentH,
    ...s.recent,
    s.amountLabel,
    s.amountValue,
    ...s.tabs,
    APP_CANCEL.text,
  ];
}

export const APP_PAIR = new Map(APP_PAIRS.map((p) => [p.key, p]));
