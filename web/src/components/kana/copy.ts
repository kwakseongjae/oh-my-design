/**
 * The Korean edition of the kana pages: /ko/kana (the showcase, "같은 화면, 다른 일본어", owner's pick of direction A on
 * 2026-11-24) and /ko/kana/rules (every rule with its quotes, the house choices, the font census, the sources).
 *
 * The rules, quotes, examples, sources and font counts come from data/kana-rules.generated.json; the moa screens'
 * Japanese is app-copy.ts; the three typography quotes are type-quotes.ts. Everything here is our Korean, in 해요체 as
 * on /hangul (the rule readings and house-choice lines were 합니다체 until 2026-11-24). The only Japanese allowed in this
 * file is a word that also appears in the generated data (__tests__/kana-page.test.ts checks it). The Japanese
 * edition's chrome is copy-ja.ts; the two fill the KanaChrome shape below.
 */

export const KANA_PATH = "/ko/kana";
export const KANA_RULES_PATH = "/ko/kana/rules";

/** The pages have a Korean edition (this file) and a Japanese one (copy-ja.ts); the components take the locale as a prop. */
export type KanaLocale = "ko" | "ja";

/** An organisation on the sources list, by key prefix, with what kind of source it is. */
export interface SourceOrg {
  readonly prefix: string;
  readonly name: string;
  readonly kind: string;
}

/** The counts and dates the pages state, read from the generated data where they render. */
export interface KanaCounts {
  readonly rules: number;
  readonly house: number;
  readonly sources: number;
  readonly services: number;
  /** the date every source page was opened, YYYY-MM-DD */
  readonly opened: string;
  /** the date the 77 services were measured, YYYY-MM-DD */
  readonly measured: string;
}

/** 2026-11-21 as 2026년 11월 21일 */
const koDate = (d: string) => d.replace(/^(\d{4})-(\d{2})-(\d{2})$/, (_, y, m, day) => `${y}년 ${Number(m)}월 ${Number(day)}일`);

/** A link in a list of links: its label, a line on what it holds, and where it goes. */
export interface KanaLink {
  readonly k: string;
  readonly t: string;
  readonly href: string;
}

/**
 * The chrome both editions fill. Keyed texts (rows, notes) are keyed by rule id. Where the Korean edition explains a
 * rule in its own words, the Japanese one leads with the source's own sentence instead (rule-lead.ts), so the
 * Japanese members it leaves out are optional here. The punctuation members are the glue the pages put between their
 * own strings, so each edition spaces and brackets in its own script.
 */
export interface KanaChrome {
  readonly meta: {
    readonly title: string;
    readonly description: string;
    readonly rulesTitle: string;
    readonly rulesDescription: (rules: number, house: number) => string;
  };
  readonly sep: string;
  readonly list: string;
  readonly colon: string;
  readonly paren: readonly [string, string];
  readonly hero: {
    readonly kicker: string;
    readonly statusTag: string;
    readonly h1: string;
    readonly lede: string;
    readonly cta: (n: number) => string;
    readonly ctaSecond: string;
    /** Japanese only: who wrote the page's Japanese, and where to report a mistake */
    readonly notice?: { readonly text: string; readonly report: string };
  };
  /** the moa pair: the Korean hero, the Japanese edition's second section */
  readonly app: {
    readonly eyebrow?: string;
    readonly h2?: string;
    readonly intro?: string;
    /** the line that says the screens' Japanese is ours; it renders with the phones every time */
    readonly composed: string;
    readonly sides: {
      readonly before: string;
      readonly after: string;
      readonly group: string;
      readonly hintAuto: string;
      readonly hintPaused: string;
    };
    readonly tagsLabel: string;
    /** one short line per tag, by rule id */
    readonly tags: Readonly<Record<string, string>>;
    readonly srcHead: string;
  };
  /** Japanese only: the first screen's walk through the sources' own pairs (compare.tsx) */
  readonly compare?: {
    readonly real: string;
    readonly wrong: string;
    readonly right: string;
    readonly switchGroup: string;
    readonly stopsLabel: string;
    readonly hintAuto: string;
    readonly hintPaused: string;
    readonly play: string;
    readonly pause: string;
    readonly kind: Readonly<Record<CompareKind, string>>;
    readonly toCard: string;
  };
  readonly register: {
    readonly eyebrow: string;
    readonly h2: string;
    readonly intro: string;
    readonly srcHead: string;
    readonly rows: Readonly<Record<string, { readonly h: string; readonly body?: string }>>;
  };
  readonly sheet: {
    readonly eyebrow: string;
    readonly h2: string;
    readonly intro: string;
    readonly notesLabel: string;
    readonly notes: Readonly<Record<string, { readonly t: string; readonly mine?: string }>>;
  };
  readonly type: {
    readonly eyebrow: string;
    readonly h2: string;
    readonly intro: string;
    readonly before: string;
    readonly after: string;
    readonly notesLabel: string;
    readonly keepAll: { readonly t: string; readonly mine: (services: number, keepAll: number) => string };
    readonly tracking: { readonly t: string; readonly mine: (ja: number, jaNeg: number, ko: number, koNeg: number) => string };
    readonly leading: { readonly t: string; readonly mine: (services: number, median: number) => string };
    readonly fonts: { readonly t: (n: number) => string; readonly caption: (date: string) => string };
  };
  readonly index: {
    readonly h2: (n: number) => string;
    readonly intro: string;
    readonly open: string;
    readonly moreH: string;
    readonly more: (n: KanaCounts) => readonly { readonly k: string; readonly t: string; readonly hash: string }[];
  };
  readonly status: {
    readonly h2: string;
    readonly items: readonly { readonly k: string; readonly t: string }[];
    readonly moreH: string;
    readonly links: readonly KanaLink[];
  };
  /** /kana/rules */
  readonly rulesPage: {
    readonly h1: (n: number) => string;
    readonly lede: string;
    readonly back: string;
    readonly toc: string;
  };
  readonly rules: {
    readonly h2: string;
    readonly intro: string;
    readonly english: string;
    readonly examples: string;
    readonly given: string;
    readonly before: string;
    readonly after: string;
    readonly noExample: string;
    readonly pairsInQuote: string;
    readonly newTab: string;
  };
  readonly tiers: {
    readonly label: string;
    readonly government: string;
    readonly company: (n: number) => string;
    readonly translation: string;
    readonly optim: string;
    readonly law: string;
  };
  readonly house: { readonly h2: string; readonly intro: string; readonly notReal: string };
  readonly fonts: {
    readonly h2: (n: number) => string;
    readonly intro?: string;
    readonly none: string;
    readonly unit: string;
    readonly caption: string;
    readonly label: string;
  };
  readonly sources: {
    readonly h2: string;
    readonly intro: string;
    readonly opened: readonly [string, string];
    readonly scope?: string;
    readonly cited: (rules: number, house: number) => string;
    readonly noUrl: string;
  };
  readonly use?: { readonly h2: string; readonly items: readonly string[] };
}

/** The component a comparison stop sets its pair in (compare.tsx draws each one). */
export type CompareKind =
  | "button"
  | "dialog-button"
  | "instruction"
  | "field-error"
  | "notification-bar"
  | "count-line"
  | "dialog-title"
  | "dialog-question";

/**
 * The Japanese edition's first screen (compare.tsx): a rule, one of its examples, and the component the rule is about. The Japanese is
 * read from the generated data at render; nothing here is a string. Only examples the source gives as a wrong/right
 * pair, set in the component the source page describes. Left out: KW-39 and KW-10 (not checked against the source's
 * bytes), KW-25 and KW-55 (house choices), KW-06 and KW-09's Ubie pairs (the source's ※ note on the wrong side),
 * KW-09's SmartHR request pair (its right side is UW-59's contested form), placeholder templates (KW-06's Microsoft pair, KW-09's
 * SmartHR pairs, KW-13, KW-14, KW-70), word lists (KW-56, KW-57), two examples in one string (KW-46, KW-54's WordPress pair), KW-29 (its page names no
 * component) and pairs whose component the source does not say (KW-32, KW-38, KW-13, KW-70).
 */
export const COMPARE_STOPS: readonly { readonly rule: string; readonly example: number; readonly kind: CompareKind }[] = [
  { rule: "KW-15", example: 0, kind: "button" },
  { rule: "KW-24", example: 0, kind: "instruction" },
  { rule: "KW-26", example: 0, kind: "field-error" },
  { rule: "KW-28", example: 0, kind: "notification-bar" },
  { rule: "KW-54", example: 1, kind: "count-line" },
  { rule: "KW-65", example: 0, kind: "dialog-title" },
  { rule: "KW-15", example: 1, kind: "dialog-button" },
  { rule: "KW-62", example: 0, kind: "dialog-question" },
];

/** writing-rules.md's area headings, in Korean */
export const AREA_KO: Readonly<Record<string, string>> = {
  Register: "문체",
  Keigo: "경어",
  "Buttons, labels and links": "버튼, 라벨, 링크",
  "Errors, results and status": "오류, 결과, 상태",
  "Dialogs and empty states": "대화상자와 빈 상태",
  Notation: "표기",
  "Numbers and counters": "숫자와 조수사",
  "Plain and fair wording": "쉽고 공정한 말",
};

/** One Korean line per rule: a plain restatement of the English rule in writing-rules.md, in 해요체. */
export const RULE_KO: Readonly<Record<string, string>> = {
  "KW-01": "본문과 설명은 정중체(ですます調)로 써요.",
  "KW-02": "화면 제목, 창 제목, 표제는 명사로 끝내요.",
  "KW-03": "메뉴 항목은 짧은 명사로 써요. OS에 굳은 표현이 있으면 그것을 따라요.",
  "KW-04": "체크박스 라벨은 원칙적으로 동사로 끝내고, 라디오 버튼 라벨은 끝을 가리지 않아요. 라벨이 여러 문장이 아니면 둘 다 。를 찍지 않아요.",
  "KW-05": "번역한 소프트웨어에서 목록 항목은 する로 끝나는 보통체로 써요.",
  "KW-06": "딱딱하지도 지나치게 친근하지도 않게 써요. 격식을 갖출 내용이 아니면 보통의 정중한 표현을 써요.",
  "KW-07": "Ubie는 버튼, 표제 같은 UI 요소에 원칙적으로 경어를 쓰지 않아요.",
  "KW-08": "Ubie는 사용자가 하고 싶지 않은데 해야 하는 조작에는 경어를 써요.",
  "KW-09": "경어를 겹쳐 쓰지 않아요. 정중한 요청은 한 번이면 돼요.",
  "KW-10": "Microsoft는 일반적으로 정중체로 쓰고, 사용자에게 행동을 요청하는 문장은 してください로 끝내요.",
  "KW-12": "영어에 you, your가 있어도 일본어로 어색하면 あなた, あなたの를 넣지 않아요.",
  "KW-13": "되도록 수동형보다 능동형 과거로 써요.",
  "KW-14": "することができる보다 짧은 가능형으로 써요.",
  "KW-15": "버튼 라벨은 누르면 무슨 일이 일어날지 짐작할 수 있게 써요. Ubie는 OK 하나로는 짐작할 수 없다고 덧붙여요.",
  "KW-18": "버튼 라벨은 짧게 써요. Ubie는 모바일에서 줄이 바뀌지 않는 15자 안팎을 목표로 하고, Mozilla는 한 묶음의 라벨끼리 낱말 수를 되도록 맞춰요.",
  "KW-19": "DADS는 데스크톱에서 원칙적으로 앞으로 가는 버튼을 오른쪽, 취소 성격의 버튼을 왼쪽에 둬요. 취소 성격의 3순위 버튼은 원칙적으로 한 화면에 하나까지예요.",
  "KW-20": "동작 버튼이 있는 모달 대화상자에는 닫기 버튼을 두지 않아요.",
  "KW-21": "제출 버튼을 말없이 비활성화하지 말고 남은 일을 알려 줘요. 꼭 비활성화해야 하면 바로 옆에 이유를 적어요.",
  "KW-22": "삭제처럼 파괴적인 동작에는 확인 대화상자를 띄워요. 다만 대화상자만으로는 안전장치가 되지 않아요.",
  "KW-23": "제품 전체에서 한 동작에는 한 낱말만 써요.",
  "KW-24": "안내 문구는 컨트롤을 화면 위치가 아니라 라벨이나 순서로 가리켜요.",
  "KW-25": "DADS는 필수·선택 표시를 ※必須, ※任意처럼 ※로 시작하고, 플레이스홀더를 도움말 대신 쓰지 않아요. SmartHR은 入力必須라고 써요.",
  "KW-26": "오류 문구는 무엇이 틀렸는지와 고치는 방법을 말해요.",
  "KW-27": "DADS는 입력란 오류 문구를 ＊(전각 별표)로 시작해요.",
  "KW-28": "SmartHR은 한 줄짜리 알림 막대에 원인, 또는 원인과 대처를 담고, 원인은 되도록 한 문장으로 짧게 써요.",
  "KW-29": "SmartHR은 백그라운드 작업을 받았다는 문구를 {処理名}を受け付けました 형식으로 써요.",
  "KW-31": "SmartHR은 상태 라벨에 정해 둔 접미사 묶음을 써요.",
  "KW-32": "Ubie는 긍정문으로 쓰고 느낌표를 쓰지 않아요.",
  "KW-33": "ください, すべて, すでに, いる는 가나로 써요.",
  "KW-34": "Mozilla는 조건을 나타내는 とき를 가나로, 場合를 한자로 써요. SmartHR은 두 말의 뜻이 크게 다르지 않다고 봐요.",
  "KW-35": "Ubie는 한자와 히라가나의 비율을 3:7 정도로 맞추고, Mozilla는 필요 이상으로 한자를 쓰지 않아요.",
  "KW-38": "영어와 가타카나 낱말은 보통의 일본어 낱말이 있으면 그것으로 바꿔요.",
  "KW-39": "로마자와 숫자는 반각으로 쓰고, 전각 공백(U+3000)과 반각 가타카나는 쓰지 않아요.",
  "KW-46": "범위는 〜(U+301C)로 쓰고 ～(U+FF5E)는 쓰지 않아요. Mozilla는 U+2013도 허용하고 U+2015는 쓰지 않아요.",
  "KW-48": "Ubie는 분수에 반각 빗금을, 나란히 적은 낱말 사이에 전각 빗금을 써요.",
  "KW-49": "강조에 쓰는 괄호는 한 가지 방식으로 일관되게 써요.",
  "KW-52": "숫자는 세 자리마다 반각 쉼표로 끊어요.",
  "KW-54": "숫자 자리표시자와 조수사 사이를 띄우지 않아요(WordPress). SmartHR은 건수를 件으로 세어요.",
  "KW-55": "Ubie는 가로쓰기에서 아라비아 숫자를 써요. 1つ도 마찬가지예요.",
  "KW-56": "Ubie는 기관이 쓰는 말 대신 일상어를 쓰고, 어려운 한자에는 읽는 법을 붙여요.",
  "KW-57": "SmartHR은 부정적이거나 누군가를 배제하는 느낌의 낱말을 피해요.",
  "KW-60": "SmartHR은 모달 작업을 끝내는 버튼에 그 동작을 동사로 적고, 작업을 그만두는 버튼은 キャンセル로 써요. Ubie는 동작을 그만둘 때 キャンセル, 창만 닫을 때 閉じる로 나눠 써요.",
  "KW-61": "SmartHR은 삭제를 확정하는 버튼에 그 동작인 削除를 적고, Danger 버튼으로 표시해요.",
  "KW-62": "Microsoft는 어떤 동작을 할지 묻는 질문을 しますか로 쓰고, てもよろしいですか 형태는 쓰지 않아요.",
  "KW-63": "파괴적인 동작 앞에서는 질문으로 확인해요. SmartHR은 대상을 밝히고 되돌릴 수 없다고 적으며, 되돌릴 수 있는 동작이면 확인이 필요 없다고 봐요.",
  "KW-64": "SmartHR은 확인 대화상자에 동작이 미치는 건수와 실행하면 일어날 일을 보여 줘요.",
  "KW-65": "Ubie는 대화상자 머리글에 사용자가 할 동작을 명사구나 질문으로 적고, 동작 명사와 대상을 の로 잇고, 상황에 맞는 구체적인 말을 써요. 모바일에서는 두 줄, 더 큰 화면에서는 한 줄에 담아요.",
  "KW-66": "SmartHR은 항목이 하나도 없는 표는 그리지 않고, 대상을 밝힌 안내와 추가 버튼을 보여 줘요. 검색 결과가 없으면 표 머리글을 남기고 다른 안내를 보여 줘요.",
  "KW-67": "SmartHR은 데이터 표와 정의 목록에서 값이 없는 칸을 비워 둬요. 사용자가 입력할 수 없는 항목에만 흐린 글자색으로 대시(-)를 써요.",
  "KW-68": "사업자가 소비자에게 미리 보여 주는 가격에는 소비세를 포함한 총액을 표시해야 해요. 국세청이 설명하는 법적 의무예요.",
  "KW-70": "Microsoft는 일반적으로 존경어와 겸양어를 쓰지 않고, 공급자와 고객의 관계를 고려해야 하는 자료에서는 써요.",
};

/** One Korean heading per house choice and one line per side, in the order writing-rules.md lists the sides. */
export const HOUSE_KO: Readonly<Record<string, { readonly title: string; readonly sides: readonly string[] }>> = {
  "UW-16": {
    title: "동작 라벨에 する를 붙일지",
    sides: [
      "SmartHR: 붙이지 않아요.",
      "Ubie: 붙여도 되고 명사로 끝내도 돼요.",
      "Spindle: 어간으로 정해요. 한자어 명사가 어간이면 활용하고, 외래어가 어간이면 활용하지 않아요. 널리 알려진 기능 이름은 활용하지 않아도 돼요.",
      "Mozilla는 짧은 명사로 쓰고, WordPress는 します(する)를 뺀 형태로 써요.",
      "Microsoft: 명령 버튼을 기본적으로 명사구로 쓰고, 뜻을 분명히 하려면 동사도 써요. 버튼 끝의 する는 다루지 않아요. 낱말 선택을 다룬 절에서는 버튼 이름에 예전부터 쓰던 する 형태를 유지한다고 하는데, 양쪽으로 읽힐 수 있는 표현이에요.",
    ],
  },
  "UW-17": {
    title: "버튼 라벨에서 대상을 を로 이을지 の로 이을지",
    sides: [
      "SmartHR: 버튼에서는 を로 이어요.",
      "WordPress: View XX라는 표현은 ～を表示 (する)로 통일해요.",
      "Microsoft: の 형태를 기본 명사구로 삼고, 그 범위에 명령 버튼을 넣어요. 変更箇所の表示를 권하고 変更箇所を表示를 피하는데, 피하는 쪽이 WordPress가 정한 형태예요.",
      "제목은 갈리지 않아요. SmartHR은 화면 제목과 항목 이름에 の를 쓰고, Ubie의 대화상자 머리글과 SmartHR의 대화상자 제목도 の를 써요.",
    ],
  },
  "UW-30": {
    title: "성공 문구",
    sides: [
      "Mozilla: 일반 규칙 없이 번역 예 하나만 들어요.",
      "SmartHR: 일괄 작업의 결과 요약에 나오는 건수 문장에만 형식을 정해요.",
      "어느 쪽도 성공 문구 전반의 규칙은 아니에요.",
    ],
  },
  "UW-36": {
    title: "영어 -er, -or, -ar 낱말 끝의 장음 부호",
    sides: [
      "Ubie: 생략하지 않아요.",
      "Mozilla: 낱말의 끝 철자로 정해요.",
      "WordPress: 장음을 포함한 글자 수로 정해요. 4자 이하면 붙이고 5자 이상이면 붙이지 않아요.",
      "Microsoft: 먼저 끝 철자로, 그다음 글자 수로 정하고, 관례에 따른 예외 목록이 길어요. Mozilla가 말한 Microsoft 같은 예외가 이 목록이에요.",
      "네 출처 모두 ユーザー로 쓰고, Mozilla와 WordPress는 サーバー로 써요. ユーザ로 쓴 가이드는 없어요. 이 일치는 검사하지 않아요.",
    ],
  },
  "UW-37": {
    title: "가타카나 복합어 안에 공백이나 中黒를 넣을지",
    sides: [
      "Mozilla: 아무것도 넣지 않아요. 일반적인 고유명사는 예외예요.",
      "WordPress: 원칙적으로 中点을 쓰지 않고, 경계가 헷갈리면 써도 돼요. WordPress는 中点만 다뤄요.",
      "Microsoft: 영어 낱말 사이에 공백이 있으면 반각 공백을 넣고, 하이픈이면 넣지 않아요. 자리가 모자라면 화면 안에서 일관되게 공백을 뺄 수 있고, 中黒는 이름에만 써요. 예시의 △는 반각 공백을 뜻하는 이 가이드의 표기여서 글자로 적은 진술로 봐요. 공백을 다루는 다른 곳은 모두 웹 페이지 원문과 대조한 인용에 기대고, 이 쪽만 예외예요. PDF에서 뽑은 텍스트에는 공백 없이 나온 곳도 있는데, PDF 자체에 공백이 있는지는 그 텍스트로 알 수 없어요.",
      "세 출처 모두 보통의 복합어에는 中黒를 쓰지 않아요(WordPress는 경계가 헷갈리면 허용해요). JTF 스타일 가이드는 中黒, 공백, 붙여 쓰기 가운데 하나를 문서마다 골라 지키게 해요.",
    ],
  },
  "UW-40": {
    title: "일본어와 로마자 사이에 공백을 칠지",
    sides: [
      "Mozilla: 로마자와 숫자 앞뒤를 모두 원칙적으로 띄워요.",
      "WordPress: 로마자 앞뒤는 띄우고 숫자 앞뒤는 띄우지 않아요.",
      "띄우지 않음: JTF 스타일 가이드와 SmartHR, 그리고 OPTiM의 규칙 제목(세지 않음).",
      "손으로 친 공백과 CSS text-autospace를 함께 쓰면 간격이 두 배가 돼요.",
    ],
  },
  "UW-41": {
    title: "한 문장짜리 UI 문구 끝의 。",
    sides: [
      "Ubie: 찍지 않아요.",
      "Spindle: 문장 안에 、가 있을 때만 찍어요.",
      "SmartHR(툴팁)과 Mozilla: 찍어요.",
      "WordPress: 원문을 따라요.",
      "표제에는 찍지 않는다고 Spindle이 적었고, 문화청의 공문서 작성 지침과 JTF 스타일 가이드도 같아요. 버튼을 다루는 출처는 없어요.",
    ],
  },
  "UW-42": {
    title: "느낌표와 물음표의 폭",
    sides: [
      "Mozilla: 전각으로 써요. 연달아 쓸 때는 반각 !?이에요.",
      "WordPress: 반각으로 쓰고 앞을 한 칸 띄워요. 띄운다는 것은 틀린 예에 붙은 설명에 적혀 있고, 맞는 예의 공백은 페이지에서 줄바꿈 없는 공백(U+00A0)이에요.",
      "Ubie는 쓰지 않는다고 하지만 자기 예시는 ？와 ?로 끝나요. 물음표는 페이지 안에서 어긋나고, 느낌표는 KW-32가 다뤄요.",
    ],
  },
  "UW-43": {
    title: "괄호의 폭",
    sides: [
      "WordPress와 Mozilla: 반각으로 쓰고 바깥쪽을 띄워요.",
      "전각: 문화청의 공문서 작성 지침, JTF 스타일 가이드, SmartHR. DADS의 예시 문장도 전각이에요(규칙이 아니라 예시).",
      "Ubie: 요일은 날짜 뒤에 띄우지 않고 반각 ()로 써요.",
    ],
  },
  "UW-44": {
    title: "본문 속 UI 요소 이름",
    sides: [
      "WordPress: 「」로 감싸요.",
      "Mozilla 위키: 반각 [ ]로 감싸고 앞뒤를 띄워요.",
      "Mozilla: 큰따옴표를 써요.",
      "SmartHR의 예: 전각 ［］로 감싸요.",
    ],
  },
  "UW-47": {
    title: "쌍점의 폭",
    sides: ["WordPress와 Mozilla 위키: 반각으로 쓰고 앞은 띄우지 않아요.", "Ubie의 표 예시와 SmartHR: 전각이에요."],
  },
  "UW-50": {
    title: "날짜",
    sides: [
      "SmartHR: UI에서는 빗금으로 써요. 빗금이 어울리지 않는 곳에서는 年月日도 써요.",
      "Ubie, WordPress, Mozilla: 年月日로 써요. 띄어쓰기는 서로 달라요.",
    ],
  },
  "UW-51": {
    title: "시각",
    sides: [
      "SmartHR: 24시간제 hh:mm:ss로 쓰고, 상황에 따라 ss는 빼요.",
      "Ubie: HH:MM으로 써요. 24시간제인지는 밝히지 않아요.",
      "WordPress: AM, PM을 붙여요.",
    ],
  },
  "UW-53": {
    title: "숫자와 단위 사이의 공백",
    sides: ["Mozilla 위키: 띄워요.", "SmartHR과 WordPress: 띄우지 않아요."],
  },
  "UW-58": {
    title: "영어에서 옮긴 오류 문구의 사과",
    sides: [
      "WordPress: Sorry로 시작하는 오류 문구를 すみません으로 옮기지 않고 그 부분을 빼요.",
      "Microsoft: 고객에게 심각한 문제를 일으키는 오류나 제품과 서비스가 멈췄을 때 쓰는 Sorry를 격식 있는 사과로, 따로 한 문장으로 옮겨요.",
      "둘 다 すみません은 쓰지 않아요. 다만 Microsoft는 말로 정하지 않고 피할 예시로만 보여 줘요. 언제 사과할지는 두 가이드도, 읽은 회사 가이드와 정부 페이지도 말하지 않아요.",
    ],
  },
  "UW-59": {
    title: "몇몇 요청 동사의 お, ご 정중 형태",
    sides: [
      "Microsoft: 목록에 든 동사 여덟 개에는 더 정중한 형태를 쓰도록 권하고, 다른 동사에는 해당하지 않는다고 해요. 목록의 한 쌍은 같은 동사의 정중형이 아니라 다른 동사예요.",
      "SmartHR: 경어를 많이 쓰지 말라는 규칙 아래 ◯◯を確認してください。를 맞는 예로 들어요. 예시일 뿐 Microsoft가 권하는 형태를 반대한다고 적지는 않았고, 이 맞는 예가 Microsoft가 피하라는 형태예요.",
      "Ubie: 목록에 든 동사 하나를 お 형태로 쓴 예가 있어요.",
    ],
  },
};

/** The source organisations, by key prefix, with what kind of source each is. */
export const SOURCE_ORGS: readonly SourceOrg[] = [
  { prefix: "DADS", name: "DADS (일본 디지털청 디자인 시스템)", kind: "정부 디자인 시스템" },
  { prefix: "NTA", name: "일본 국세청", kind: "법을 집행하는 기관의 설명" },
  { prefix: "SH", name: "SmartHR Design System", kind: "회사 디자인 시스템" },
  { prefix: "UB", name: "Ubie Vitals", kind: "회사 디자인 시스템" },
  { prefix: "SP", name: "Ameba Spindle", kind: "회사 디자인 시스템" },
  { prefix: "PB", name: "GMO Pepabo Inhouse", kind: "회사 디자인 시스템" },
  { prefix: "MZ", name: "Mozilla Japan", kind: "번역 가이드" },
  { prefix: "WP", name: "WordPress 일본어 팀", kind: "번역 가이드" },
  { prefix: "MS", name: "Microsoft 일본어 현지화 스타일 가이드", kind: "번역 가이드" },
  { prefix: "OPT", name: "OPTiM TECH BLOG", kind: "규칙 제목만 있는 글, 세지 않음" },
  { prefix: "JTF", name: "JTF 스타일 가이드", kind: "번역 업계 스타일 가이드" },
];


/** One short Korean line per rule, the rule index's row (our wording, read against RULE_KO and the English rule). */
export const RULE_LABEL_KO: Readonly<Record<string, string>> = {
  "KW-01": "본문과 설명은 정중체(ですます)",
  "KW-02": "화면 제목과 표제는 명사로",
  "KW-03": "메뉴 항목은 짧은 명사로",
  "KW-04": "체크박스는 동사로 끝내고 。 없이",
  "KW-05": "번역 소프트웨어의 목록 항목은 する형",
  "KW-06": "딱딱하지도 지나치게 친근하지도 않게",
  "KW-07": "Ubie: 버튼과 표제에는 경어 없이",
  "KW-08": "Ubie: 내키지 않는 조작을 부탁할 때만 경어",
  "KW-09": "경어는 겹치지 않고 한 번만",
  "KW-10": "Microsoft: 요청은 してください로",
  "KW-12": "あなた, あなたの를 넣지 않기",
  "KW-13": "수동형보다 능동형 과거",
  "KW-14": "することができる 대신 できる",
  "KW-70": "Microsoft: 존경어와 겸양어는 고객 관계 자료에만",
  "KW-15": "버튼은 누르면 일어날 일로",
  "KW-18": "버튼 라벨은 짧게",
  "KW-19": "DADS: 앞으로 가는 버튼은 오른쪽",
  "KW-20": "동작 버튼이 있는 모달에는 닫기 버튼 없이",
  "KW-21": "제출 버튼을 말없이 막지 않기",
  "KW-22": "파괴적인 동작에는 확인 대화상자, 그것만으로는 부족",
  "KW-23": "한 동작에는 한 낱말",
  "KW-24": "컨트롤은 위치가 아니라 라벨로 가리키기",
  "KW-25": "DADS: 필수 표시는 ※必須",
  "KW-60": "SmartHR: 끝내는 버튼은 동사, 그만두는 버튼은 キャンセル",
  "KW-61": "SmartHR: 삭제 확정 버튼은 削除",
  "KW-26": "오류는 무엇이 틀렸는지와 고치는 방법",
  "KW-27": "DADS: 입력란 오류는 ＊로 시작",
  "KW-28": "SmartHR: 알림 막대에는 원인과 대처",
  "KW-29": "SmartHR: 백그라운드 작업은 受け付けました",
  "KW-31": "SmartHR: 상태 라벨의 접미사 묶음",
  "KW-32": "Ubie: 긍정문으로, 느낌표 없이",
  "KW-62": "Microsoft: てもよろしいですか 대신 しますか",
  "KW-63": "파괴적인 동작 앞에서는 질문으로 확인",
  "KW-64": "SmartHR: 확인 대화상자에 건수와 결과",
  "KW-65": "Ubie: 대화상자 머리글은 동작 명사구",
  "KW-66": "SmartHR: 빈 표 대신 안내와 추가 버튼",
  "KW-67": "SmartHR: 값이 없는 칸은 비워 두기",
  "KW-33": "ください, すべて, すでに, いる는 가나로",
  "KW-34": "Mozilla: とき는 가나, 場合는 한자",
  "KW-35": "Ubie: 한자와 히라가나는 3:7 정도",
  "KW-38": "영어와 가타카나 대신 보통의 일본어",
  "KW-39": "로마자와 숫자는 반각, 반각 가타카나 없이",
  "KW-46": "범위는 〜(U+301C)",
  "KW-48": "Ubie: 분수는 반각 빗금, 나열은 전각 빗금",
  "KW-49": "강조 괄호는 한 가지로",
  "KW-52": "숫자는 세 자리마다 반각 쉼표",
  "KW-54": "숫자와 조수사는 붙여 쓰기, 건수는 件",
  "KW-55": "Ubie: 가로쓰기는 아라비아 숫자, 1つ도",
  "KW-68": "가격은 소비세를 포함한 총액으로(법적 의무)",
  "KW-56": "Ubie: 기관 말 대신 일상어",
  "KW-57": "SmartHR: 배제하는 느낌의 낱말 피하기",
};

const KO_TAGS: Readonly<Record<string, string>> = {
  "KW-32": "느낌표 빼기",
  "KW-12": "あなたの 빼기",
  "KW-33": "すべて는 가나로",
  "KW-09": "경어는 한 번만",
  "KW-38": "チェック 대신 確認",
  "KW-62": "しますか로 묻기",
  "KW-26": "오류는 고칠 방법까지",
  "KW-14": "できます로 짧게",
  "KW-15": "버튼은 하는 일로",
};

export const KANA_COPY = {
  sep: " ",
  list: ", ",
  colon: ": ",
  paren: [" (", ")"],
  meta: {
    title: "/kana — 같은 화면, 다른 일본어 (초안)",
    description:
      "같은 앱 화면을 일본어 가이드가 피하라는 형태로 한 번, 그 가이드대로 고쳐 한 번 썼어요. /kana는 코딩 에이전트에게 일본어 UI 문구 규칙을 알려 주는 스킬 초안이고, 규칙마다 출처의 원문이 붙어 있어요.",
    rulesTitle: "/kana — 일본어 UI 문구 규칙과 그 출처 (초안)",
    rulesDescription: (rules: number, house: number) =>
      `일본 정부 디자인 시스템, 일본 회사들의 디자인 시스템 가이드, 번역 가이드, 일본 국세청의 설명에서 가져온 일본어 UI 문구 규칙 ${rules}가지를 원문 인용과 함께 보여 줘요. 출처가 갈리는 ${house}곳은 고르지 않고 양쪽을 다 실었어요.`,
  },
  hero: {
    kicker: "일본어 UI 문구 스킬",
    statusTag: "초안",
    h1: "같은 화면, 다른 일본어",
    lede: "같은 앱 화면을 일본어 가이드들이 피하라고 든 형태로 한 번, 그 가이드대로 고쳐 한 번 썼어요. 고친 곳마다 일본 정부와 회사의 디자인 시스템, 번역 가이드의 원문이 붙어 있어요.",
    cta: (n: number) => `규칙 ${n}가지 보기`,
    ctaSecond: "지금 상태 보기",
  },
  app: {
    composed: "두 화면의 일본어는 규칙을 보여 주려고 우리가 지은 예문이에요. 일본어 원어민은 아직 읽지 않았어요. 고친 근거는 태그마다 붙은 출처의 원문이에요.",
    sides: {
      before: "가이드가 피하는 형태",
      after: "가이드대로 고친 형태",
      group: "화면 고르기",
      hintAuto: "다른 곳을 하나씩 짚어 가며 비교해요. 누르면 멈춰요.",
      hintPaused: "눌러서 두 화면을 번갈아 보세요.",
    },
    tagsLabel: "두 화면에서 다른 곳",
    tags: KO_TAGS,
    srcHead: "출처의 예시",
  },
  register: {
    eyebrow: "말투",
    h2: "정중함은 한 번이면 돼요",
    intro:
      "SmartHR 가이드는 경어를 많이 쓰면 정보가 잘 전해지지 않는다고 해요. 같은 화면에서 세 곳을 골라 크게 놓았어요. 화면 속 일본어는 우리가 지은 예문이고, 그 아래만 출처의 예시와 문장 그대로예요.",
    srcHead: "출처의 예시와 문장",
    rows: {
      "KW-09": { h: "경어는 겹치지 않고 한 번만", body: "한 일을 알릴 때는 정중한 형태 하나로 끝내요. 아래 SmartHR의 예시가 바로 이 형태예요." },
      "KW-32": { h: "부추기지 않고, 느낌표 없이", body: "Ubie는 부추기는 표현을 피하고 느낌표를 쓰지 않아요. 고친 쪽은 부추기는 둘째 문장도 뺐어요." },
      "KW-12": {
        h: "あなたの를 넣지 않기",
        body: "WordPress 번역 가이드는 영어에 your가 있어도 일본어로 어색하면 あなたの를 넣지 말고, 더 자연스러운 말을 쓰거나 빼라고 해요. 고친 쪽은 뺐어요.",
      },
    },
  },
  sheet: {
    eyebrow: "버튼과 오류",
    h2: "누르면 무슨 일이 일어나는지 써요",
    intro:
      "송금을 확인하는 시트 하나에 네 곳이 달라요. 묻는 말, 오류 문구, 안내 문구, 보내는 버튼이에요. 시트의 일본어는 우리가 지은 예문이고, 가운데 노트의 예시는 출처의 것 그대로예요.",
    notesLabel: "두 시트에서 다른 곳",
    notes: {
      "KW-62": { t: "묻는 말은 しますか로", mine: "Microsoft는 てもよろしいですか로 옮기면 행동하는 사람이 고객이 아니게 된다고 봐요." },
      "KW-26": { t: "오류는 고칠 방법까지", mine: "피하는 쪽의 오류 문구는 DADS가 든 나쁜 예 그대로예요." },
      "KW-14": { t: "することができます 대신 できます" },
      "KW-15": {
        t: "버튼은 누르면 일어날 일로",
        mine: "피하는 쪽의 OK는 Ubie가 든 나쁜 예 그대로예요. 버튼 끝에 する를 붙일지는 출처마다 달라서, 이 화면은 SmartHR처럼 명사로 끝냈어요.",
      },
    },
  },
  type: {
    eyebrow: "조판",
    h2: "한국어 조판을 그대로 쓰면",
    intro:
      "/hangul이 한국어 화면에 쓰는 설정을 일본어에 그대로 쓰면 맞지 않는 곳이 생겨요. 본문은 DADS의 행간 규칙 문장이고, 제목은 우리가 지은 예문이에요. 두 쪽 모두 Noto Sans JP로 짰어요.",
    before: "/hangul의 한국어 설정",
    after: "일본어 설정",
    notesLabel: "두 설정에서 다른 곳",
    keepAll: {
      t: "keep-all 대신 normal, 제목은 auto-phrase",
      mine: (services: number, keepAll: number) =>
        `띄어쓰기가 없는 일본어는 keep-all에서 문장 부호에서만 줄이 바뀌고, 넘치면 아무 글자에서나 끊겨요. 이 규칙은 CSS 명세의 정의에서 우리가 끌어낸 것이에요. auto-phrase는 Chrome과 Edge에서만 동작하고, 다른 브라우저는 normal로 줄을 바꿔요. 일본 서비스 ${services}곳 가운데 keep-all을 글의 10% 이상에 쓴 곳은 ${keepAll}곳이었어요.`,
    },
    tracking: {
      t: "자간은 DADS 토큰대로 0에서 0.02em",
      mine: (ja: number, jaNeg: number, ko: number, koNeg: number) =>
        `DADS에는 음수 자간 토큰이 없어요. 쓰지 말라고 적지는 않았어요. 제목 자간이 음수인 곳은 일본 서비스 ${ja}곳 중 ${jaNeg}곳, 한국 서비스 ${ko}곳 중 ${koNeg}곳이었어요.`,
    },
    leading: {
      t: "본문 행간은 DADS 토큰대로 1.7",
      mine: (services: number, median: number) =>
        `DADS는 적어도 1.5배를 권하니 한국어 설정의 1.5도 그 안이에요. 다만 DADS의 본문 토큰은 16px이 170%와 175%, 17px이 170%예요. 문단이 있는 일본 서비스 ${services}곳의 문단 행간 중앙값도 ${median}이었어요.`,
    },
    fonts: {
      t: (n: number) => `일본 서비스 ${n}곳의 첫 일본어 글꼴`,
      caption: (date: string) => `${date}에 첫 화면을 잰 값이에요. 이 페이지의 일본어는 DADS가 예로 든 Noto Sans JP로 썼어요.`,
    },
  },
  index: {
    h2: (n: number) => `/kana의 규칙 ${n}가지`,
    intro:
      "일본 디지털청 디자인 시스템(DADS), SmartHR·Ubie·Ameba·GMO 페파보의 디자인 시스템, Mozilla·WordPress·Microsoft의 번역 가이드, 일본 국세청의 설명에서 가져왔어요. 규칙을 누르면 출처의 원문이 그 자리에서 열려요. 프로젝트의 DESIGN.md에 말투나 표기가 정해져 있으면 그것을 먼저 따라요.",
    open: "규칙 페이지에서 원문 전부 보기",
    moreH: "규칙 페이지에서 더 보기",
    more: (n: KanaCounts) => [
      { k: `규칙 ${n.rules}가지의 원문`, t: "규칙마다 출처의 문장, 예시, 같은 말을 하는 출처", hash: "#rules" },
      { k: `출처가 갈려 고르지 않은 ${n.house}곳`, t: "고르지 않고 양쪽을 다 실었어요", hash: "#house" },
      { k: `출처 페이지 ${n.sources}곳`, t: `모두 ${koDate(n.opened)}에 열어 본 페이지`, hash: "#sources" },
      { k: `일본 서비스 ${n.services}곳의 첫 일본어 글꼴`, t: `${koDate(n.measured)}에 잰 값`, hash: "#fonts" },
    ],
  },
  status: {
    h2: "지금은 초안이에요",
    items: [
      { k: "설치", t: "/kana 스킬은 아직 배포하지 않았어요. 일본어 원어민도 아직 규칙과 예문을 읽지 않았어요." },
      {
        k: "인용",
        t: "규칙의 인용문은 2026년 11월 21일에 스크립트로 원문 페이지의 글자와 대조했어요. 조판 규칙의 인용문 세 개는 11월 24일에 대조했어요. JTF 스타일 가이드의 예시 세 쌍과 Microsoft 표 안의 한 문장은 대조하지 못했어요.",
      },
      { k: "예문", t: "moa 화면의 일본어는 우리가 지은 문장이에요. 출처의 말 그대로인 것은 DADS의 오류 문구, Ubie의 OK, SmartHR의 キャンセル 세 가지예요." },
    ],
    moreH: "지금 쓸 수 있는 것",
    links: [
      { k: "한국어 화면", t: "지금 설치할 수 있는 /hangul", href: "/ko/hangul" },
      { k: "일본어 화면", t: "규칙과 원문을 직접 읽고 쓰기", href: KANA_RULES_PATH },
    ],
  },
  rulesPage: {
    h1: (n: number) => `일본어 UI 문구 규칙 ${n}가지와 출처`,
    lede: "/kana 스킬의 바탕이 된 조사예요. 규칙마다 출처의 문장을 원문 그대로 붙였고, 출처가 갈리는 곳은 고르지 않고 양쪽을 다 실었어요.",
    back: "같은 화면, 다른 일본어",
    toc: "이 페이지에서",
  },
  rules: {
    h2: "영역별 규칙",
    intro:
      "규칙마다 출처의 문장을 원문 그대로 붙였어요. 세기는 같은 말을 하는 출처가 어디인지로 적었어요. 법이 정한 의무인 KW-68 말고는 어느 출처도 규칙을 강제하지 않아요. 출처가 붙인 단서(원칙적으로, 되도록, In general)는 규칙에도 남겼어요. 규칙 카드의 일본어는 모두 인용이고, Microsoft는 규칙을 영어로 적어서 그 문장을 영어 그대로 붙였어요. Microsoft 예시 앞의 +는 권하는 형태, −는 피하는 형태예요. 그 위의 한국어 한 줄은 영어로 적은 규칙을 우리가 옮긴 것이에요.",
    english: "규칙 원문(영어)",
    examples: "출처의 예시",
    given: "출처에 나온 말",
    before: "바꾸기 전",
    after: "바꾼 뒤",
    noExample: "출처에 든 예시가 없어요.",
    pairsInQuote: "인용문 안의 짝이 예시예요.",
    newTab: "새 탭에서 열림",
  },
  tiers: {
    label: "같은 말을 하는 출처",
    government: "정부 디자인 시스템",
    company: (n: number) => `회사 가이드 4곳 중 ${n}곳`,
    translation: "번역 가이드",
    optim: "OPTiM 제목만, 세지 않음",
    law: "법적 의무(국세청 설명)",
  },
  house: {
    h2: "출처가 갈리는 곳은 고르지 않아요",
    intro:
      "출처마다 답이 다른 것은 규칙으로 만들지 않았어요. 각 출처가 무엇이라고 적었는지 보여 주고, 고르는 일은 프로젝트의 DESIGN.md에 맡겨요. DESIGN.md에 정한 것이 없으면 이미 있는 문구를 따르고, 그것도 없으면 하나를 골라 제품 전체에서 지켜요.",
    notReal: "검증 결과 실제로 갈리지는 않음",
  },
  fonts: {
    h2: (n: number) => `일본 서비스 ${n}곳의 첫 일본어 글꼴`,
    intro:
      "각 서비스의 글꼴 목록에서 처음 나오는 일본어 글꼴을 셌어요. 한 글꼴로 모이지 않아요. Apple 기기에 들어 있는 Hiragino와 Noto Sans JP가 비슷하게 많고, Windows에 들어 있는 Yu Gothic과 Meiryo가 그 뒤예요.",
    none: "알아본 일본어 글꼴 없음",
    unit: "곳",
    /** after the measurement date, which the page sets unbroken */
    caption: "에 각 서비스의 첫 화면을 잰 값이에요. 사이트는 바뀌므로 한 곳을 인용하려면 다시 재야 해요.",
    label: "첫 일본어 글꼴별 서비스 수",
  },
  sources: {
    h2: "출처",
    intro: "규칙과 인용이 나온 페이지예요.",
    /** around the date every page was opened, which the page sets unbroken */
    opened: ["모두 ", "에 열었어요."],
    scope:
      "번역 가이드는 영어에서 옮긴 소프트웨어의 일본어를 위한 것으로, Mozilla와 WordPress는 오픈소스 소프트웨어를, Microsoft는 자사 제품을 다뤄요. 회사 가이드는 그 회사 제품을 위한 것이에요.",
    cited: (rules: number, house: number) =>
      [rules ? `규칙 ${rules}개` : "", house ? `갈리는 곳 ${house}곳` : ""].filter(Boolean).join(", ") + "에 인용",
    noUrl: "이번 조사의 출처 목록에는 주소가 없어 링크를 달지 않았어요.",
  },
  use: {
    h2: "이 페이지를 쓰는 법",
    items: [
      "일본어 화면 문구를 쓰거나 검토할 때 해당 영역의 규칙과 인용을 함께 읽으세요. 규칙 위의 표시는 그 말을 하는 출처가 어디인지 알려 줘요.",
      "출처가 갈리는 곳은 팀이 하나를 골라 프로젝트의 DESIGN.md에 적어 두세요.",
      "규칙이 문장을 대신 써 주지는 않아요. 팀이 쓴 일본어는 일본어 원어민의 검토를 받으세요.",
      "/kana 스킬은 아직 배포하지 않았어요. 지금은 이 페이지의 규칙과 출처를 직접 읽고 쓰는 단계예요.",
    ],
  },
} as const satisfies KanaChrome;
