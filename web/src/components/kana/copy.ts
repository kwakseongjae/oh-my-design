/**
 * /ko/kana — the Korean chrome around the kana writing rules. The rules, quotes, examples, sources and font counts
 * come from data/kana-rules.generated.json (scripts/lang/build-kana-page-data.mjs); everything here is page copy in
 * Korean. The one-line readings restate each English rule and are not quotes. The only Japanese allowed in this file is
 * a word that also appears in the generated data (__tests__/kana-page.test.ts checks it): nothing Japanese of our own
 * ships. No native Japanese reader has read the rules; a model reviewed them on 2026-11-21.
 */

export const KANA_PATH = "/ko/kana";

/** The rules shown first, in this order (owner's still A, 2026-11-21). KW-62 took KW-17's place when KW-17 became a
 *  house choice (the second research pass). */
export const LEAD_RULES = ["KW-26", "KW-62", "KW-02", "KW-09", "KW-14", "KW-33"] as const;

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

/** One Korean line per rule: a plain restatement of the English rule above it in writing-rules.md. */
export const RULE_KO: Readonly<Record<string, string>> = {
  "KW-01": "본문과 설명은 정중체(ですます調)로 씁니다.",
  "KW-02": "화면 제목, 창 제목, 표제는 명사로 끝냅니다.",
  "KW-03": "메뉴 항목은 짧은 명사로 씁니다. OS에 굳은 표현이 있으면 그것을 따릅니다.",
  "KW-04": "체크박스 라벨은 원칙적으로 동사로 끝내고, 라디오 버튼 라벨은 끝을 가리지 않습니다. 라벨이 여러 문장이 아니면 둘 다 。를 찍지 않습니다.",
  "KW-05": "번역한 소프트웨어에서 목록 항목은 する로 끝나는 보통체로 씁니다.",
  "KW-06": "딱딱하지도 지나치게 친근하지도 않게 씁니다. 격식을 갖출 내용이 아니면 보통의 정중한 표현을 씁니다.",
  "KW-07": "Ubie는 버튼, 표제 같은 UI 요소에 원칙적으로 경어를 쓰지 않습니다.",
  "KW-08": "Ubie는 사용자가 하고 싶지 않은데 해야 하는 조작에는 경어를 씁니다.",
  "KW-09": "경어를 겹쳐 쓰지 않습니다. 정중한 요청은 한 번이면 됩니다.",
  "KW-10": "Microsoft는 일반적으로 정중체로 쓰고, 사용자에게 행동을 요청하는 문장은 してください로 끝냅니다.",
  "KW-12": "영어에 you, your가 있어도 일본어로 어색하면 あなた, あなたの를 넣지 않습니다.",
  "KW-13": "되도록 수동형보다 능동형 과거로 씁니다.",
  "KW-14": "することができる보다 짧은 가능형으로 씁니다.",
  "KW-15": "버튼 라벨은 누르면 무슨 일이 일어날지 짐작할 수 있게 씁니다. Ubie는 OK 하나로는 짐작할 수 없다고 덧붙입니다.",
  "KW-18": "버튼 라벨은 짧게 씁니다. Ubie는 모바일에서 줄이 바뀌지 않는 15자 안팎을 목표로 하고, Mozilla는 한 묶음의 라벨끼리 낱말 수를 되도록 맞춥니다.",
  "KW-19": "DADS는 데스크톱에서 원칙적으로 앞으로 가는 버튼을 오른쪽, 취소 성격의 버튼을 왼쪽에 둡니다. 취소 성격의 3순위 버튼은 원칙적으로 한 화면에 하나까지입니다.",
  "KW-20": "동작 버튼이 있는 모달 대화상자에는 닫기 버튼을 두지 않습니다.",
  "KW-21": "제출 버튼을 말없이 비활성화하지 말고 남은 일을 알려 줍니다. 꼭 비활성화해야 하면 바로 옆에 이유를 적습니다.",
  "KW-22": "삭제처럼 파괴적인 동작에는 확인 대화상자를 띄웁니다. 다만 대화상자만으로는 안전장치가 되지 않습니다.",
  "KW-23": "제품 전체에서 한 동작에는 한 낱말만 씁니다.",
  "KW-24": "안내 문구는 컨트롤을 화면 위치가 아니라 라벨이나 순서로 가리킵니다.",
  "KW-25": "DADS는 필수·선택 표시를 ※必須, ※任意처럼 ※로 시작하고, 플레이스홀더를 도움말 대신 쓰지 않습니다. SmartHR은 入力必須라고 씁니다.",
  "KW-26": "오류 문구는 무엇이 틀렸는지와 고치는 방법을 말합니다.",
  "KW-27": "DADS는 입력란 오류 문구를 ＊(전각 별표)로 시작합니다.",
  "KW-28": "SmartHR은 한 줄짜리 알림 막대에 원인, 또는 원인과 대처를 담고, 원인은 되도록 한 문장으로 짧게 씁니다.",
  "KW-29": "SmartHR은 백그라운드 작업을 받았다는 문구를 {処理名}を受け付けました 형식으로 씁니다.",
  "KW-31": "SmartHR은 상태 라벨에 정해 둔 접미사 묶음을 씁니다.",
  "KW-32": "Ubie는 긍정문으로 쓰고 느낌표를 쓰지 않습니다.",
  "KW-33": "ください, すべて, すでに, いる는 가나로 씁니다.",
  "KW-34": "Mozilla는 조건을 나타내는 とき를 가나로, 場合를 한자로 씁니다. SmartHR은 두 말의 뜻이 크게 다르지 않다고 봅니다.",
  "KW-35": "Ubie는 한자와 히라가나의 비율을 3:7 정도로 맞추고, Mozilla는 필요 이상으로 한자를 쓰지 않습니다.",
  "KW-38": "영어와 가타카나 낱말은 보통의 일본어 낱말이 있으면 그것으로 바꿉니다.",
  "KW-39": "로마자와 숫자는 반각으로 쓰고, 전각 공백(U+3000)과 반각 가타카나는 쓰지 않습니다.",
  "KW-46": "범위는 〜(U+301C)로 쓰고 ～(U+FF5E)는 쓰지 않습니다. Mozilla는 U+2013도 허용하고 U+2015는 쓰지 않습니다.",
  "KW-48": "Ubie는 분수에 반각 빗금을, 나란히 적은 낱말 사이에 전각 빗금을 씁니다.",
  "KW-49": "강조에 쓰는 괄호는 한 가지 방식으로 일관되게 씁니다.",
  "KW-52": "숫자는 세 자리마다 반각 쉼표로 끊습니다.",
  "KW-54": "숫자 자리표시자와 조수사 사이를 띄우지 않습니다(WordPress). SmartHR은 건수를 件으로 셉니다.",
  "KW-55": "Ubie는 가로쓰기에서 아라비아 숫자를 씁니다. 1つ도 마찬가지입니다.",
  "KW-56": "Ubie는 기관이 쓰는 말 대신 일상어를 쓰고, 어려운 한자에는 읽는 법을 붙입니다.",
  "KW-57": "SmartHR은 부정적이거나 누군가를 배제하는 느낌의 낱말을 피합니다.",
  "KW-60": "SmartHR은 모달 작업을 끝내는 버튼에 그 동작을 동사로 적고, 작업을 그만두는 버튼은 キャンセル로 씁니다. Ubie는 동작을 그만둘 때 キャンセル, 창만 닫을 때 閉じる로 나눠 씁니다.",
  "KW-61": "SmartHR은 삭제를 확정하는 버튼에 그 동작인 削除를 적고, Danger 버튼으로 표시합니다.",
  "KW-62": "Microsoft는 어떤 동작을 할지 묻는 질문을 しますか로 쓰고, てもよろしいですか 형태는 쓰지 않습니다.",
  "KW-63": "파괴적인 동작 앞에서는 질문으로 확인합니다. SmartHR은 대상을 밝히고 되돌릴 수 없다고 적으며, 되돌릴 수 있는 동작이면 확인이 필요 없다고 봅니다.",
  "KW-64": "SmartHR은 확인 대화상자에 동작이 미치는 건수와 실행하면 일어날 일을 보여 줍니다.",
  "KW-65": "Ubie는 대화상자 머리글에 사용자가 할 동작을 명사구나 질문으로 적고, 동작 명사와 대상을 の로 잇고, 상황에 맞는 구체적인 말을 씁니다. 모바일에서는 두 줄, 더 큰 화면에서는 한 줄에 담습니다.",
  "KW-66": "SmartHR은 항목이 하나도 없는 표는 그리지 않고, 대상을 밝힌 안내와 추가 버튼을 보여 줍니다. 검색 결과가 없으면 표 머리글을 남기고 다른 안내를 보여 줍니다.",
  "KW-67": "SmartHR은 데이터 표와 정의 목록에서 값이 없는 칸을 비워 둡니다. 사용자가 입력할 수 없는 항목에만 흐린 글자색으로 대시(-)를 씁니다.",
  "KW-68": "사업자가 소비자에게 미리 보여 주는 가격에는 소비세를 포함한 총액을 표시해야 합니다. 국세청이 설명하는 법적 의무입니다.",
  "KW-70": "Microsoft는 일반적으로 존경어와 겸양어를 쓰지 않고, 공급자와 고객의 관계를 고려해야 하는 자료에서는 씁니다.",
};

/** One Korean heading per house choice and one line per side, in the order writing-rules.md lists the sides. */
export const HOUSE_KO: Readonly<Record<string, { readonly title: string; readonly sides: readonly string[] }>> = {
  "UW-16": {
    title: "동작 라벨에 する를 붙일지",
    sides: [
      "SmartHR: 붙이지 않습니다.",
      "Ubie: 붙여도 되고 명사로 끝내도 됩니다.",
      "Spindle: 어간으로 정합니다. 한자어 명사가 어간이면 활용하고, 외래어가 어간이면 활용하지 않습니다. 널리 알려진 기능 이름은 활용하지 않아도 됩니다.",
      "Mozilla는 짧은 명사로 쓰고, WordPress는 します(する)를 뺀 형태로 씁니다.",
      "Microsoft: 명령 버튼을 기본적으로 명사구로 쓰고, 뜻을 분명히 하려면 동사도 씁니다. 버튼 끝의 する는 다루지 않습니다. 낱말 선택을 다룬 절에서는 버튼 이름에 예전부터 쓰던 する 형태를 유지한다고 하는데, 양쪽으로 읽힐 수 있는 표현입니다.",
    ],
  },
  "UW-17": {
    title: "버튼 라벨에서 대상을 を로 이을지 の로 이을지",
    sides: [
      "SmartHR: 버튼에서는 を로 잇습니다.",
      "WordPress: View XX라는 표현은 ～を表示 (する)로 통일합니다.",
      "Microsoft: の 형태를 기본 명사구로 삼고, 그 범위에 명령 버튼을 넣습니다. 変更箇所の表示를 권하고 変更箇所を表示를 피하는데, 피하는 쪽이 WordPress가 정한 형태입니다.",
      "제목은 갈리지 않습니다. SmartHR은 화면 제목과 항목 이름에 の를 쓰고, Ubie의 대화상자 머리글과 SmartHR의 대화상자 제목도 の를 씁니다.",
    ],
  },
  "UW-30": {
    title: "성공 문구",
    sides: [
      "Mozilla: 일반 규칙 없이 번역 예 하나만 듭니다.",
      "SmartHR: 일괄 작업의 결과 요약에 나오는 건수 문장에만 형식을 정합니다.",
      "어느 쪽도 성공 문구 전반의 규칙은 아닙니다.",
    ],
  },
  "UW-36": {
    title: "영어 -er, -or, -ar 낱말 끝의 장음 부호",
    sides: [
      "Ubie: 생략하지 않습니다.",
      "Mozilla: 낱말의 끝 철자로 정합니다.",
      "WordPress: 장음을 포함한 글자 수로 정합니다. 4자 이하면 붙이고 5자 이상이면 붙이지 않습니다.",
      "Microsoft: 먼저 끝 철자로, 그다음 글자 수로 정하고, 관례에 따른 예외 목록이 깁니다. Mozilla가 말한 Microsoft 같은 예외가 이 목록입니다.",
      "네 출처 모두 ユーザー로 쓰고, Mozilla와 WordPress는 サーバー로 씁니다. ユーザ로 쓴 가이드는 없습니다. 이 일치는 검사하지 않습니다.",
    ],
  },
  "UW-37": {
    title: "가타카나 복합어 안에 공백이나 中黒를 넣을지",
    sides: [
      "Mozilla: 아무것도 넣지 않습니다. 일반적인 고유명사는 예외입니다.",
      "WordPress: 원칙적으로 中点을 쓰지 않고, 경계가 헷갈리면 써도 됩니다. WordPress는 中点만 다룹니다.",
      "Microsoft: 영어 낱말 사이에 공백이 있으면 반각 공백을 넣고, 하이픈이면 넣지 않습니다. 자리가 모자라면 화면 안에서 일관되게 공백을 뺄 수 있고, 中黒는 이름에만 씁니다. 예시의 △는 반각 공백을 뜻하는 이 가이드의 표기여서 글자로 적은 진술로 봅니다. 공백을 다루는 다른 곳은 모두 웹 페이지 원문과 대조한 인용에 기대고, 이 쪽만 예외입니다. PDF에서 뽑은 텍스트에는 공백 없이 나온 곳도 있는데, PDF 자체에 공백이 있는지는 그 텍스트로 알 수 없습니다.",
      "세 출처 모두 보통의 복합어에는 中黒를 쓰지 않습니다(WordPress는 경계가 헷갈리면 허용합니다). JTF 스타일 가이드는 中黒, 공백, 붙여 쓰기 가운데 하나를 문서마다 골라 지키게 합니다.",
    ],
  },
  "UW-40": {
    title: "일본어와 로마자 사이에 공백을 칠지",
    sides: [
      "Mozilla: 로마자와 숫자 앞뒤를 모두 원칙적으로 띄웁니다.",
      "WordPress: 로마자 앞뒤는 띄우고 숫자 앞뒤는 띄우지 않습니다.",
      "띄우지 않음: JTF 스타일 가이드와 SmartHR, 그리고 OPTiM의 규칙 제목(세지 않음).",
      "손으로 친 공백과 CSS text-autospace를 함께 쓰면 간격이 두 배가 됩니다.",
    ],
  },
  "UW-41": {
    title: "한 문장짜리 UI 문구 끝의 。",
    sides: [
      "Ubie: 찍지 않습니다.",
      "Spindle: 문장 안에 、가 있을 때만 찍습니다.",
      "SmartHR(툴팁)과 Mozilla: 찍습니다.",
      "WordPress: 원문을 따릅니다.",
      "표제에는 찍지 않는다고 Spindle이 적었고, 문화청의 공문서 작성 지침과 JTF 스타일 가이드도 같습니다. 버튼을 다루는 출처는 없습니다.",
    ],
  },
  "UW-42": {
    title: "느낌표와 물음표의 폭",
    sides: [
      "Mozilla: 전각으로 씁니다. 연달아 쓸 때는 반각 !?입니다.",
      "WordPress: 반각으로 쓰고 앞을 한 칸 띄웁니다. 띄운다는 것은 틀린 예에 붙은 설명에 적혀 있고, 맞는 예의 공백은 페이지에서 줄바꿈 없는 공백(U+00A0)입니다.",
      "Ubie는 쓰지 않는다고 하지만 자기 예시는 ？와 ?로 끝납니다. 물음표는 페이지 안에서 어긋나고, 느낌표는 KW-32가 다룹니다.",
    ],
  },
  "UW-43": {
    title: "괄호의 폭",
    sides: [
      "WordPress와 Mozilla: 반각으로 쓰고 바깥쪽을 띄웁니다.",
      "전각: 문화청의 공문서 작성 지침, JTF 스타일 가이드, SmartHR. DADS의 예시 문장도 전각입니다(규칙이 아니라 예시).",
      "Ubie: 요일은 날짜 뒤에 띄우지 않고 반각 ()로 씁니다.",
    ],
  },
  "UW-44": {
    title: "본문 속 UI 요소 이름",
    sides: [
      "WordPress: 「」로 감쌉니다.",
      "Mozilla 위키: 반각 [ ]로 감싸고 앞뒤를 띄웁니다.",
      "Mozilla: 큰따옴표를 씁니다.",
      "SmartHR의 예: 전각 ［］로 감쌉니다.",
    ],
  },
  "UW-47": {
    title: "쌍점의 폭",
    sides: ["WordPress와 Mozilla 위키: 반각으로 쓰고 앞은 띄우지 않습니다.", "Ubie의 표 예시와 SmartHR: 전각입니다."],
  },
  "UW-50": {
    title: "날짜",
    sides: [
      "SmartHR: UI에서는 빗금으로 씁니다. 빗금이 어울리지 않는 곳에서는 年月日도 씁니다.",
      "Ubie, WordPress, Mozilla: 年月日로 씁니다. 띄어쓰기는 서로 다릅니다.",
    ],
  },
  "UW-51": {
    title: "시각",
    sides: [
      "SmartHR: 24시간제 hh:mm:ss로 쓰고, 상황에 따라 ss는 뺍니다.",
      "Ubie: HH:MM으로 씁니다. 24시간제인지는 밝히지 않습니다.",
      "WordPress: AM, PM을 붙입니다.",
    ],
  },
  "UW-53": {
    title: "숫자와 단위 사이의 공백",
    sides: ["Mozilla 위키: 띄웁니다.", "SmartHR과 WordPress: 띄우지 않습니다."],
  },
  "UW-58": {
    title: "영어에서 옮긴 오류 문구의 사과",
    sides: [
      "WordPress: Sorry로 시작하는 오류 문구를 すみません으로 옮기지 않고 그 부분을 뺍니다.",
      "Microsoft: 고객에게 심각한 문제를 일으키는 오류나 제품과 서비스가 멈췄을 때 쓰는 Sorry를 격식 있는 사과로, 따로 한 문장으로 옮깁니다.",
      "둘 다 すみません은 쓰지 않습니다. 다만 Microsoft는 말로 정하지 않고 피할 예시로만 보여 줍니다. 언제 사과할지는 두 가이드도, 읽은 회사 가이드와 정부 페이지도 말하지 않습니다.",
    ],
  },
  "UW-59": {
    title: "몇몇 요청 동사의 お, ご 정중 형태",
    sides: [
      "Microsoft: 목록에 든 동사 여덟 개에는 더 정중한 형태를 쓰도록 권하고, 다른 동사에는 해당하지 않는다고 합니다. 목록의 한 쌍은 같은 동사의 정중형이 아니라 다른 동사입니다.",
      "SmartHR: 경어를 많이 쓰지 말라는 규칙 아래 ◯◯を確認してください。를 맞는 예로 듭니다. 예시일 뿐 Microsoft가 권하는 형태를 반대한다고 적지는 않았고, 이 맞는 예가 Microsoft가 피하라는 형태입니다.",
      "Ubie: 목록에 든 동사 하나를 お 형태로 쓴 예가 있습니다.",
    ],
  },
};

/** The source organisations, by key prefix, with what kind of source each is. */
export const SOURCE_ORGS: readonly { readonly prefix: string; readonly name: string; readonly kind: string }[] = [
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

export const KANA_COPY = {
  meta: {
    title: "/kana — 일본어 UI 문구 규칙과 그 출처 (초안)",
    description: (rules: number, house: number) =>
      `일본 정부 디자인 시스템, 일본 회사들의 디자인 시스템 가이드, 번역 가이드, 일본 국세청의 설명에서 가져온 일본어 UI 문구 규칙 ${rules}개를 원문 인용과 함께 보여 줍니다. 출처가 갈리는 ${house}곳은 고르지 않고 양쪽을 다 싣습니다.`,
  },
  hero: {
    kicker: "일본어 UI 문구 규칙",
    h1: "출처가 있는 규칙만, 원문과 함께",
    lede: "일본어 화면의 문구를 쓰는 규칙입니다. 규칙마다 일본 정부 디자인 시스템, 일본 회사들의 디자인 시스템 가이드, 번역 가이드, 일본 국세청 페이지의 문장을 원문 그대로 붙였고, 출처가 갈리는 곳은 고르지 않고 양쪽을 다 보여 줍니다.",
    statusTag: "초안",
    status:
      "/kana 스킬은 초안이라 아직 배포하지 않았습니다. 이 페이지는 그 스킬의 바탕이 된 조사입니다. 인용문은 2026년 11월 21일에 스크립트로 원문 페이지의 글자와 대조했고, Microsoft 가이드의 인용문은 PDF에서 뽑은 텍스트와 대조했습니다. JTF 스타일 가이드에서 온 예시 세 쌍과 Microsoft 표 안의 한 문장은 대조하지 못했습니다. 일본어 원어민은 아직 이 규칙을 읽지 않았고, 모델이 검토했습니다.",
    cta: (n: number) => `규칙 ${n}개 보기`,
    ctaSources: "출처 목록 보기",
    stats: { rules: "규칙", house: "출처가 갈려 고르지 않은 곳", services: "글꼴을 잰 일본 서비스" },
  },
  rules: {
    h2: "규칙은 이렇게 생겼습니다",
    intro:
      "규칙마다 출처의 문장을 원문 그대로 붙였습니다. 세기는 같은 말을 하는 출처가 어디인지로 적었습니다. 법이 정한 의무인 KW-68 말고는 어느 출처도 규칙을 강제하지 않습니다. 출처가 붙인 단서(원칙적으로, 되도록, In general)는 규칙에도 남겼습니다. 일본어는 모두 인용이고, Microsoft는 규칙을 영어로 적어서 그 문장을 영어 그대로 붙였습니다. Microsoft 예시 앞의 +는 권하는 형태, −는 피하는 형태입니다. 그 위의 한국어 한 줄은 영어로 적은 규칙을 우리가 옮긴 것입니다.",
    allH2: "영역별 규칙",
    allIntro: (n: number, lead: number) => `규칙 ${n}개를 영역별로 모았습니다. 앞에서 본 ${lead}개는 각 영역 머리에 번호로만 적었습니다.`,
    seenAbove: "앞에서 본 규칙",
    english: "규칙 원문(영어)",
    examples: "출처의 예시",
    given: "출처에 나온 말",
    before: "바꾸기 전",
    after: "바꾼 뒤",
    noExample: "출처에 든 예시가 없습니다.",
    pairsInQuote: "인용문 안의 짝이 예시입니다.",
    noUrl: "주소 없음",
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
    h2: "출처가 갈리는 곳은 고르지 않습니다",
    intro:
      "출처마다 답이 다른 것은 규칙으로 만들지 않았습니다. 각 출처가 무엇이라고 적었는지 보여 주고, 고르는 일은 프로젝트의 DESIGN.md에 맡깁니다. DESIGN.md에 정한 것이 없으면 이미 있는 문구를 따르고, 그것도 없으면 하나를 골라 제품 전체에서 지킵니다.",
    notReal: "검증 결과 실제로 갈리지는 않음",
  },
  fonts: {
    h2: (n: number) => `일본 서비스 ${n}곳의 첫 일본어 글꼴`,
    intro:
      "각 서비스의 글꼴 목록에서 처음 나오는 일본어 글꼴을 셌습니다. 한 글꼴로 모이지 않습니다. Apple 기기에 들어 있는 Hiragino와 Noto Sans JP가 비슷하게 많고, Windows에 들어 있는 Yu Gothic과 Meiryo가 그 뒤입니다.",
    none: "알아본 일본어 글꼴 없음",
    unit: "곳",
    /** after the measurement date, which the page sets unbroken */
    caption: "에 각 서비스의 첫 화면을 잰 값입니다. 사이트는 바뀌므로 한 곳을 인용하려면 다시 재야 합니다.",
    label: "첫 일본어 글꼴별 서비스 수",
  },
  sources: {
    h2: "출처",
    intro: "규칙과 인용이 나온 페이지입니다.",
    /** around the date every page was opened, which the page sets unbroken */
    opened: ["모두 ", "에 열었습니다."],
    scope: "번역 가이드는 영어에서 옮긴 소프트웨어의 일본어를 위한 것으로, Mozilla와 WordPress는 오픈소스 소프트웨어를, Microsoft는 자사 제품을 다룹니다. 회사 가이드는 그 회사 제품을 위한 것입니다.",
    cited: (rules: number, house: number) =>
      [rules ? `규칙 ${rules}개` : "", house ? `갈리는 곳 ${house}곳` : ""].filter(Boolean).join(", ") + "에 인용",
    noUrl: "이번 조사의 출처 목록에는 주소가 없어 링크를 달지 않았습니다.",
  },
  use: {
    h2: "이 페이지를 쓰는 법",
    items: [
      "일본어 화면 문구를 쓰거나 검토할 때 해당 영역의 규칙과 인용을 함께 읽으세요. 규칙 위의 표시는 그 말을 하는 출처가 어디인지 알려 줍니다.",
      "출처가 갈리는 곳은 팀이 하나를 골라 프로젝트의 DESIGN.md에 적어 두세요.",
      "규칙이 문장을 대신 써 주지는 않습니다. 팀이 쓴 일본어는 일본어 원어민의 검토를 받으세요.",
      "/kana 스킬은 아직 배포하지 않았습니다. 지금은 이 페이지의 규칙과 출처를 직접 읽고 쓰는 단계입니다.",
    ],
  },
} as const;
