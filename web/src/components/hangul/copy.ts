/**
 * Copy for the /hangul launch pages: /ko/hangul (Korean, the default) and /hangul (English).
 *
 * Every number here has one source, and the copy says only what that source supports:
 *  - the eval: docs/research/2026-09-29-growth/hangul-eval-results.md and its raw results
 *    (every Codex run without the skill hit HG-7, tightening headings to about −0.06em; 6 of 9 Codex
 *    runs had no Korean face). The page quotes no eval totals (owner review 2026-10-24); those and
 *    their caveats live in skills/hangul/references/eval-2026-09.md and eval-2026-10-writing.md.
 *  - the eval page itself (Codex p1-A-r3, no skill), as measured for the launch content
 *    (hangul-content/CONTENT-NOTES.md): the 44px heading at −2.8px, the 8px/10px captions,
 *    and the Arial-first stack that drew "320" in Arial and "만 명" in Apple SD Gothic Neo.
 *    The eval's italic (HG-11), break-all (HG-8) and tight-leading hits do not render visibly
 *    on any eval page, so none of them is shown as a failure here.
 *  - the skill (skills/hangul/SKILL.md §3 and references/measured-67.md) for the rule list
 *    and the measured services.
 *
 * Korean is 해요체 throughout. The page shows no source list (owner, v4 review): the skill
 * files carry the citations.
 */

export type HangulLocale = "ko" | "en";

export const HANGUL_PATH: Readonly<Record<HangulLocale, string>> = { ko: "/ko/hangul", en: "/hangul" };

/** The heading the live demo sets, from the eval page (Codex p1-A-r3, the metrics card's h2).
 *  The original read "사람들이<br>모아와" and hid the <br> on phones, which also dropped the space;
 *  the authored line break is restored as a space here. */
export const DEMO_HEADING = "이미 많은 사람들이 모아와 함께하고 있어요.";

/** The eval page's hero heading (the HG-7 specimen), with its authored line break. */
export const H7_LINES = ["내 돈의 모든 순간,", "더 가볍게."] as const;

/** The eval page's metric columns (the HG-3 specimen). */
export const H3_METRICS = [
  { label: "함께하는 사용자", value: "320", unit: "만 명+", note: "모아를 선택한 사람들" },
  { label: "누적 송금액", value: "12", unit: "조 원+", note: "일상 속 연결된 마음" },
  { label: "앱 스토어 평점", value: "4.9", unit: "", note: "사용자가 전하는 만족" },
] as const;

/** The eval page's font stack and the one /hangul APPLY wrote (CONTENT-NOTES.md, run record). */
export const H1_STACK = {
  before: 'font-family: Arial, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;',
  after: 'font-family: "Pretendard Variable", Pretendard, Arial, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;',
} as const;

/** The 판심제 set vertically in the fold of the hero's woodblock leaf (decoration, aria-hidden;
 *  the same on both pages, because the subject is the Korean script). */
export const PANSIM_TITLE = "한글 조판";

export const INSTALL_CLI = "npx oh-my-design-cli@latest";
export const INSTALL_SKILL = "npx skills add kwakseongjae/oh-my-design --skill hangul";
/** The blog post that goes out with the launch; linked only while it exists in that locale. */
export const LAUNCH_POST_SLUG = "baemin-typography-decisions";

export interface HangulRule {
  readonly id: string;
  readonly text: string;
}

/** One string from the writing eval, as an agent wrote it without the skill, and the same string
 *  rewritten to the rule it broke. `mark` is the part a proofreader would mark (a substring of before). */
export interface CopyFix {
  readonly id: string;
  readonly where: string;
  readonly before: string;
  readonly mark: string;
  readonly after: string;
  readonly why: string;
}

export interface WhyCard {
  readonly id: "HG-7" | "HG-3" | "HG-1";
  readonly title: string;
  readonly body: string;
  /** What the stage shows under the specimen, per state. */
  readonly spec: { readonly before: string; readonly after: string };
}

export interface HangulCopy {
  readonly meta: { readonly title: string; readonly description: string; readonly ogAlt: string };
  readonly hero: {
    readonly kicker: string;
    readonly h1: string;
    readonly lede: string;
    readonly cta: string;
  };
  readonly demo: {
    readonly label: string;
    readonly before: string;
    readonly after: string;
    /** {word} {p} {head} {tail} {ro}: ‘있어요’가 ‘있어 / 요.’로 */
    readonly broken: string;
    readonly whole: string;
    readonly wholeAfter: string;
    readonly codeBefore: string;
    readonly codeAfter: string;
    readonly width: string;
    readonly rowBefore: string;
    readonly rowAfter: string;
    readonly of: string;
    /** {off} {on}; "–" until the map is measured */
    readonly summary: string;
    readonly note: string;
    /** {pct}: how the frames are shown */
    readonly scaled: string;
    readonly actual: string;
    /** the chip beside the slider's thumb, until the reader first touches the control */
    readonly hint: string;
    /** the slider's aria-valuetext: {w} the width, {word} {p} the word the "before" frame breaks */
    readonly valueBroken: string;
    readonly valueWhole: string;
  };
  readonly why: {
    readonly h2: string;
    readonly intro: string;
    readonly toggle: { readonly label: string; readonly before: string; readonly after: string };
    readonly cards: readonly WhyCard[];
    readonly footnote: string;
  };
  readonly assets: {
    readonly shotsH2: string;
    /** {source} */
    readonly shotsCaption: string;
    readonly before: string;
    readonly after: string;
    readonly desktop: string;
    readonly phone: string;
    readonly videoH2: string;
    /** {seconds} */
    readonly videoCaption: string;
    readonly gif: string;
  };
  readonly writing: {
    readonly h2: string;
    readonly intro: string;
    readonly before: string;
    readonly after: string;
    readonly fixes: readonly CopyFix[];
    /** where the examples come from and who rewrote them */
    readonly fixesNote: string;
  };
  readonly rules: {
    readonly h2: string;
    readonly intro: string;
    /** the typography rules (HG-n, skills/hangul/SKILL.md §3) */
    readonly typeH3: string;
    readonly list: readonly HangulRule[];
    /** the writing rules (HW-n, skills/hangul/SKILL.md §3b) */
    readonly writingH3: string;
    readonly writing: readonly HangulRule[];
  };
  readonly install: {
    readonly h2: string;
    readonly boxLabel: string;
    readonly alt: string;
    readonly usage: string;
    readonly copy: { readonly copy: string; readonly copied: string; readonly failed: string };
    readonly more: string;
    readonly docs: string;
    /** what the docs skills page holds (its own one-line summary in cli-docs) */
    readonly docsDesc: string;
    readonly blog: string;
  };
}

const KO: HangulCopy = {
  meta: {
    title: "/hangul — 코딩 에이전트의 한국어 조판과 문구를 바로잡는 스킬",
    description:
      "코딩 에이전트는 한국어를 영어처럼 조판해요. /hangul은 줄바꿈·자간·행간·글꼴 목록 같은 조판 규칙 14가지와 맞춤법·오류 문구·말투 같은 문구 규칙 14가지를 에이전트에게 알려 주는 스킬이에요.",
    ogAlt: "/hangul — ‘있어 / 요.’로 끊긴 제목과 ‘있어요.’로 바로잡은 제목",
  },
  hero: {
    kicker: "한국어 조판·문구 스킬",
    h1: "AI가 만든 한국어 제목, 단어 중간에서 끊기지 않게",
    lede: "코딩 에이전트는 한국어를 영어처럼 조판해요. /hangul은 줄바꿈과 자간부터 맞춤법과 오류 문구까지, 조판 규칙 14가지와 문구 규칙 14가지를 에이전트에게 알려 주는 스킬이에요.",
    cta: "설치하기",
  },
  demo: {
    label: "줄바꿈 비교",
    before: "스킬 없이",
    after: "/hangul 적용",
    broken: "‘{word}’{p} ‘{head} / {tail}’{ro} 끊겼어요",
    whole: "이 폭에서는 끊긴 단어가 없어요",
    wholeAfter: "끊긴 단어가 없어요",
    codeBefore: "word-break: normal;",
    codeAfter: "word-break: keep-all;\noverflow-wrap: anywhere;",
    width: "화면 폭",
    rowBefore: "스킬 없이",
    rowAfter: "/hangul",
    of: "111개 폭 중",
    summary: "320px부터 430px까지 1px씩, 111개 폭에서 그려 봤어요. 스킬 없이는 {off}개 폭에서 단어가 끊기고, /hangul을 적용하면 {on}개예요.",
    note: "Codex가 스킬 없이 만든 평가 페이지의 제목과 CSS를 옮기고, 글꼴만 이 페이지의 Pretendard로 바꿨어요. 이미지가 아니라 지금 브라우저가 그린 실제 텍스트예요.",
    scaled: "{pct}% 크기",
    actual: "실제 크기",
    hint: "직접 밀어 보세요",
    valueBroken: "{w}px, 스킬 없이는 ‘{word}’{p} 끊겨요",
    valueWhole: "{w}px, 끊긴 단어가 없어요",
  },
  why: {
    h2: "에이전트는 한국어를 영어처럼 조판해요",
    intro: "영어 화면에서 익힌 습관이 한국어에서는 결함이 돼요. 평가에서 Codex가 스킬 없이 만든 페이지에 실제로 나온 사례예요.",
    toggle: { label: "적용 전후 바꾸기", before: "스킬 없이", after: "/hangul" },
    cards: [
      {
        id: "HG-7",
        title: "제목 자간을 영어처럼 좁혀요",
        body: "스킬 없이 만든 Codex 결과물 9개가 모두 제목 자간 규칙에 걸렸어요. 제목 자간을 −0.06em 안팎까지 좁혔거든요. 한국 서비스 67곳을 재 보니, 제목에 음수 자간을 쓴 23곳 중 22곳은 −0.03em보다 좁지 않았어요.",
        spec: { before: "letter-spacing: −0.064em (원본 44px에 −2.8px)", after: "letter-spacing: −0.03em" },
      },
      {
        id: "HG-3",
        title: "모바일 캡션을 8px까지 줄여요",
        body: "평가 페이지 하나는 680px 이하 화면에서 지표 설명을 8px, 지표 이름을 10px로 줄였어요. /hangul은 11px 아래로 내리지 않아요. SEED에서 가장 작은 글자 토큰도 11px이에요.",
        spec: { before: "지표 설명 8px · 지표 이름 10px", after: "모두 11px · 단어 단위 줄바꿈" },
      },
      {
        id: "HG-1",
        title: "숫자와 한글이 다른 글꼴로 나와요",
        body: "글꼴 목록이 Arial로 시작하면 숫자는 Arial로, 한글은 기기의 글꼴로 따로 그려져요. 평가 페이지의 ‘320만 명+’도 macOS에서 ‘320’은 Arial로, ‘만 명’은 Apple SD Gothic Neo로 그려졌어요. Codex 결과물 9개 중 6개는 글꼴 목록에 한글 글꼴이 아예 없었고요.",
        spec: { before: "macOS: ‘320’ Arial · ‘만 명’ Apple SD Gothic Neo", after: "숫자와 한글 모두 Pretendard" },
      },
    ],
    footnote: "Claude(Sonnet)가 스킬 없이 만든 결과물은 주로 본문 자간을 −0.01~−0.02em 좁혔어요. 보통 글자 크기에서는 눈으로 구분하기 어려워서 여기에는 싣지 않았어요.",
  },
  assets: {
    shotsH2: "같은 화면, /hangul 적용 전과 후",
    shotsCaption: "스킬 없이 만든 평가 페이지({source})에 /hangul 규칙을 적용했어요. 조판만 바꾸고 레이아웃과 색, 문구는 그대로 뒀어요.",
    before: "적용 전",
    after: "적용 후",
    desktop: "데스크톱",
    phone: "폰",
    videoH2: "나란히 스크롤해 보면",
    videoCaption: "적용 전과 후 화면을 나란히 스크롤한 {seconds}초 영상이에요.",
    gif: "GIF로 보기",
  },
  writing: {
    h2: "문구도 한국어답게",
    intro:
      "조판 다음은 문구예요. /hangul은 화면 문구 규칙 14가지도 함께 알려 줘요. 「한글 맞춤법」과 국립국어원 자료, KRDS·앱인토스·SEED 공개 문서, 한국어 UX 라이팅 연구에서 가져온 규칙이에요. 국립국어원이 2025년 12월에 3,000명에게 어려운 어휘와 잘못된 표현 30가지를 물었어요. 바꿔야 한다는 답이 가장 많았던 것(93.3%)은 ‘커피 나오셨습니다’ 같은 지나친 높임이었어요.",
    before: "스킬 없이",
    after: "규칙대로",
    fixes: [
      {
        id: "HW-8",
        where: "독서 모임 가입 완료 화면",
        before: "사이책 가입이 완료됐어요.",
        mark: "가입이 완료됐어요",
        after: "사이책에 가입했어요.",
        why: "‘가입이 완료됐어요’는 시스템이 처리한 상태를 말해요. 사용자가 한 일로 쓰면 더 짧고 분명해요.",
      },
      {
        id: "HW-12",
        where: "중고거래 앱 새 글 알림 시트",
        before: "놓치지 마세요",
        mark: "놓치지 마세요",
        after: "새 글 알림",
        why: "놓칠까 봐 걱정하게 만드는 대신 무엇을 받는지 말해요. 바로 아래 제목이 이미 알림을 받을지 묻고 있어요.",
      },
      {
        id: "HW-11",
        where: "독서 모임 약관 창",
        before: "화면 구현을 위한 예시 약관입니다.",
        mark: "약관입니다",
        after: "화면을 보여 주려고 넣은 예시 약관이에요.",
        why: "이 화면의 문구는 대부분 해요체인데 이 문장은 합쇼체예요. 한 화면에서는 말투를 하나로 맞춰요.",
      },
      {
        id: "HW-2",
        where: "중고거래 앱 가격 필터",
        before: "4만원 이하",
        mark: "4만원",
        after: "4만 원 이하",
        why: "‘만’처럼 한글로 쓴 수 뒤에 오는 단위 ‘원’은 띄어 써요. 국립국어원의 「쉬운 공문서 쓰기 길잡이」도 ‘1천만원’을 ‘1천만 원’으로 고쳐요.",
      },
    ],
    fixesNote: "예시는 스킬 없이 만든 결과물에서 문구 검사기가 짚은 문구 가운데 규칙마다 하나씩 골랐어요. 고친 문구는 규칙에 맞춰 다시 쓴 거예요.",
  },
  rules: {
    h2: "/hangul의 규칙 28가지",
    intro: "조판 규칙은 W3C 명세, KRDS·SEED·TDS 공개 문서, 한국 서비스 67곳을 잰 값에서, 문구 규칙은 「한글 맞춤법」과 국립국어원 자료, KRDS·앱인토스·SEED 공개 문서, 한국어 연구에서 가져왔어요. 프로젝트의 DESIGN.md에 타이포그래피 값이나 말투가 있으면 그것을 먼저 따라요.",
    typeH3: "조판 14가지",
    list: [
      { id: "HG-1", text: "글꼴 목록 맨 앞에 한글 글꼴" },
      { id: "HG-2", text: '<html lang="ko">로 문서 언어 밝히기' },
      { id: "HG-3", text: "본문은 16px, 11px 아래로는 쓰지 않기" },
      { id: "HG-4", text: "본문 행간은 1.5" },
      { id: "HG-5", text: "제목과 UI 행간은 1.3–1.45" },
      { id: "HG-6", text: "한글 본문 자간은 0" },
      { id: "HG-7", text: "제목 자간은 −0.03em까지만" },
      { id: "HG-8", text: "한글에 break-all 쓰지 않기" },
      { id: "HG-9", text: "긴 URL과 ID에는 overflow-wrap:\u00a0anywhere" },
      { id: "HG-10", text: "keep-all은 컴포넌트마다 정하기" },
      { id: "HG-11", text: "한글에 기울임꼴 쓰지 않기" },
      { id: "HG-12", text: "글꼴에 있는 굵기만 쓰기" },
      { id: "HG-13", text: "숫자는 1,000원처럼, 한 화면에 한 방식으로" },
      { id: "HG-14", text: "말줄임은 CSS로, 말줄임표 안에서 줄 바꾸지 않기" },
    ],
    writingH3: "문구 14가지",
    writing: [
      { id: "HW-1", text: "맞춤법대로: 돼요, 됐어요, 할게요, 며칠" },
      { id: "HW-2", text: "띄어쓰기: 할 수 있어요, 할 때, 준비 중이에요" },
      { id: "HW-3", text: "문장 부호: 2026. 10. 24., 10:20, 버튼에는 마침표 없이" },
      { id: "HW-4", text: "오류 문구는 무슨 일인지와 지금 할 일을 함께" },
      { id: "HW-5", text: "버튼은 누르면 일어나는 일로: 송금하기, 닫기" },
      { id: "HW-6", text: "한 문장에는 한 가지만" },
      { id: "HW-7", text: "쉬운 말로: 금일 대신 오늘" },
      { id: "HW-8", text: "데이터가 아니라 사용자가 한 일로: 저장했어요" },
      { id: "HW-9", text: "같은 내용이면 할 수 있는 쪽으로" },
      { id: "HW-10", text: "사물은 높이지 않기: 커피가 나왔어요" },
      { id: "HW-11", text: "한 화면에는 한 가지 말투, 브랜드가 정한 대로" },
      { id: "HW-12", text: "겁주거나 죄책감을 주지 않기" },
      { id: "HW-13", text: "느낌표는 드물게, 오류 문구에는 쓰지 않기" },
      { id: "HW-14", text: "대체 텍스트에 ‘이미지·사진’ 쓰지 않기" },
    ],
  },
  install: {
    h2: "설치하고, 평소처럼 요청하세요",
    boxLabel: "설치 명령",
    alt: "hangul 스킬만 받으려면 이렇게 설치해요.",
    usage: "“이 화면 한글 줄바꿈이 이상해”, “오류 문구 다듬어 줘”, “한국어 랜딩 만들어 줘”처럼 말하면 돼요. 새 화면을 만들 때는 규칙을 적용하고, 이미 있는 코드는 점검해서 고칠 곳을 표로 알려 줘요. 이미 쓴 문구는 바꾸기 전에 먼저 물어봐요.",
    copy: { copy: "복사", copied: "복사했어요", failed: "복사하지 못했어요" },
    more: "더 읽어 보기",
    docs: "스킬 문서",
    docsDesc: "공개 스킬과 각 스킬이 하는 일",
    blog: "블로그",
  },
};

const EN: HangulCopy = {
  meta: {
    title: "/hangul — Korean typography and UX writing for coding agents",
    description:
      "Coding agents typeset Korean as if it were English. /hangul is a skill that gives them 14 rules for Korean line breaking, letter-spacing, line height and font stacks, and 14 for the copy: spelling, error messages, speech level.",
    ogAlt: "/hangul — a Korean heading broken as ‘있어 / 요.’, and the same heading kept whole",
  },
  hero: {
    kicker: "Korean typography and writing skill",
    h1: "Korean headings that don’t break mid-word",
    lede: "Coding agents typeset Korean like English. /hangul is a skill that gives them 14 rules for Korean type and 14 for Korean UI copy, from line breaks to error messages.",
    cta: "Install",
  },
  demo: {
    label: "Line-break comparison",
    before: "Without the skill",
    after: "With /hangul",
    broken: "‘{word}’ broke into ‘{head} / {tail}’",
    whole: "No broken words at this width",
    wholeAfter: "No broken words",
    codeBefore: "word-break: normal;",
    codeAfter: "word-break: keep-all;\noverflow-wrap: anywhere;",
    width: "Screen width",
    rowBefore: "Without",
    rowAfter: "/hangul",
    of: "of 111 widths",
    summary: "We drew the heading at every width from 320 to 430px, 1px apart. Without the skill, a word breaks at {off} of the 111 widths; with /hangul, at {on}.",
    note: "The heading and its CSS come from a page Codex built without the skill in our eval. Only the font changed, to the Pretendard this page loads. It’s live text drawn by your browser, not an image.",
    scaled: "shown at {pct}%",
    actual: "actual size",
    hint: "Drag to try",
    valueBroken: "{w}px: without the skill, ‘{word}’ breaks",
    valueWhole: "{w}px: no broken words",
  },
  why: {
    h2: "Agents typeset Korean like English",
    intro: "Habits that work for English turn into defects in Korean. These come from pages Codex built without the skill in our eval.",
    toggle: { label: "Switch before and after", before: "Without", after: "/hangul" },
    cards: [
      {
        id: "HG-7",
        title: "Headings tracked as tight as English display type",
        body: "All 9 Codex runs without the skill tripped the heading-tracking rule, tightening headings to about −0.06em. Of the 23 Korean services we measured that track headings negative, 22 stay at −0.03em or looser.",
        spec: { before: "letter-spacing: −0.064em (−2.8px at 44px)", after: "letter-spacing: −0.03em" },
      },
      {
        id: "HG-3",
        title: "Mobile captions shrunk to 8px",
        body: "Below 680px, one eval page set its metric notes at 8px and the labels at 10px. /hangul keeps text at 11px or larger; 11px is the smallest text token in SEED.",
        spec: { before: "notes 8px · labels 10px", after: "all 11px · breaks between words" },
      },
      {
        id: "HG-1",
        title: "Digits and Hangul in two different fonts",
        body: "When the font stack starts with Arial, digits come out in Arial and Hangul in whatever Korean font the device has. On macOS, the eval page’s ‘320만 명+’ rendered ‘320’ in Arial and ‘만 명’ in Apple SD Gothic Neo. And 6 of the 9 Codex runs had no Korean font in the stack at all.",
        spec: { before: "macOS: ‘320’ Arial · ‘만 명’ Apple SD Gothic Neo", after: "Digits and Hangul both in Pretendard" },
      },
    ],
    footnote: "Without the skill, Claude (Sonnet) mostly tightened body text by −0.01 to −0.02em. That’s hard to see at normal sizes, so it isn’t shown here.",
  },
  assets: {
    shotsH2: "The same page, before and after /hangul",
    shotsCaption: "A page from the eval ({source}), built without the skill, with the /hangul rules applied. Only the typography changed; layout, color and copy stayed as they were.",
    before: "Before",
    after: "After",
    desktop: "Desktop",
    phone: "Phone",
    videoH2: "Scrolled side by side",
    videoCaption: "The before and after pages, scrolled side by side ({seconds} seconds).",
    gif: "View as GIF",
  },
  writing: {
    h2: "The words, too",
    intro:
      "Then come the words. /hangul also gives agents 14 rules for the strings on a Korean screen, drawn from Korean orthography and 국립국어원 (the National Institute of Korean Language), the public KRDS, Apps in Toss and SEED docs, and Korean UX-writing studies. In December 2025, 국립국어원 asked 3,000 people about 30 hard words and wrong expressions. The one most said should change (93.3%) was excessive honorifics, like ‘커피 나오셨습니다’ (“the coffee has honorably come out”).",
    before: "Without",
    after: "Rewritten",
    fixes: [
      {
        id: "HW-8",
        where: "Book club sign-up, done screen",
        before: "사이책 가입이 완료됐어요.",
        mark: "가입이 완료됐어요",
        after: "사이책에 가입했어요.",
        why: "“Sign-up has been completed” reports what the system processed. Saying what the user did (“You’ve joined”) is shorter and clearer.",
      },
      {
        id: "HW-12",
        where: "Secondhand market, new-post alert sheet",
        before: "놓치지 마세요",
        mark: "놓치지 마세요",
        after: "새 글 알림",
        why: "“Don’t miss out” leans on worry. Name what the user gets instead (“New-post alerts”); the heading below already asks the question.",
      },
      {
        id: "HW-11",
        where: "Book club, terms dialog",
        before: "화면 구현을 위한 예시 약관입니다.",
        mark: "약관입니다",
        after: "화면을 보여 주려고 넣은 예시 약관이에요.",
        why: "Most strings on this screen are in 해요체; this sentence is in 합쇼체. One screen keeps one speech level.",
      },
      {
        id: "HW-2",
        where: "Secondhand market, price filter",
        before: "4만원 이하",
        mark: "4만원",
        after: "4만 원 이하",
        why: "After a number written in Hangul, such as 만 (ten thousand), the unit 원 takes a space. 국립국어원’s plain-document guide corrects ‘1천만원’ to ‘1천만 원’.",
      },
    ],
    fixesNote: "We picked one example per rule from the strings the copy checker flagged in runs without the skill. The rewrites are ours, not agent output.",
  },
  rules: {
    h2: "The 28 rules in /hangul",
    intro: "The typography rules come from W3C specs, the public KRDS, SEED and TDS docs, and measurements of 67 Korean services; the writing rules from Korean orthography and 국립국어원, the public KRDS, Apps in Toss and SEED docs, and Korean studies. When your DESIGN.md sets a type value or a voice, that wins.",
    typeH3: "Typography",
    list: [
      { id: "HG-1", text: "A Korean font first in the stack" },
      { id: "HG-2", text: 'Declare the language: <html lang="ko">' },
      { id: "HG-3", text: "Body text at 16px, nothing below 11px" },
      { id: "HG-4", text: "Body line height 1.5" },
      { id: "HG-5", text: "Headings and UI at 1.3–1.45" },
      { id: "HG-6", text: "Letter-spacing 0 on Hangul body text" },
      { id: "HG-7", text: "Heading tracking no tighter than −0.03em" },
      { id: "HG-8", text: "No break-all on Korean text" },
      { id: "HG-9", text: "overflow-wrap:\u00a0anywhere for long URLs and IDs" },
      { id: "HG-10", text: "keep-all decided per component" },
      { id: "HG-11", text: "No italics on Hangul" },
      { id: "HG-12", text: "Only the weights the font ships" },
      { id: "HG-13", text: "Numbers as 1,000원, one style per screen" },
      { id: "HG-14", text: "Truncate with CSS, never inside an ellipsis" },
    ],
    writingH3: "Writing",
    writing: [
      { id: "HW-1", text: "Spelling: 돼요, 됐어요, 할게요, 며칠" },
      { id: "HW-2", text: "Spacing: 할 수 있어요, 할 때, 준비 중이에요" },
      { id: "HW-3", text: "Punctuation: 2026. 10. 24., 10:20, no period on buttons" },
      { id: "HW-4", text: "Errors say what happened and what to do now" },
      { id: "HW-5", text: "Buttons say what happens: 송금하기, 닫기" },
      { id: "HW-6", text: "One message per sentence" },
      { id: "HW-7", text: "Plain words: 오늘, not 금일" },
      { id: "HW-8", text: "What the user did, not the data state" },
      { id: "HW-9", text: "Say what’s possible when the content is the same" },
      { id: "HW-10", text: "Honor people, never things: 커피가 나왔어요" },
      { id: "HW-11", text: "One speech level per screen, as the brand sets it" },
      { id: "HW-12", text: "No pressure, no guilt" },
      { id: "HW-13", text: "Exclamation marks rarely, none in errors" },
      { id: "HW-14", text: "Alt text without 이미지 or 사진" },
    ],
  },
  install: {
    h2: "Install it, then ask as usual",
    boxLabel: "Install command",
    alt: "To install only the hangul skill:",
    usage: "Say things like “the Korean line breaks look off”, “fix the Korean error messages” or “build a Korean landing page.” On new screens it applies the rules; on existing code it audits and lists what to change in a table, and asks before it rewrites copy someone already wrote.",
    copy: { copy: "Copy", copied: "Copied", failed: "Copy failed" },
    more: "Read more",
    docs: "Skills docs",
    docsDesc: "The public skills and what each one does",
    blog: "Blog",
  },
};

export const HANGUL_COPY: Readonly<Record<HangulLocale, HangulCopy>> = { ko: KO, en: EN };

/** Fills {name} slots. */
export function fill(s: string, vars: Readonly<Record<string, string | number>>): string {
  return s.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
}

/** 이/가 after a word, by the last syllable's final consonant. */
export function subjectParticle(word: string): "이" | "가" {
  const c = word.charCodeAt(word.length - 1) - 0xac00;
  return c >= 0 && c < 11172 && c % 28 !== 0 ? "이" : "가";
}

/** 로/으로 after a quoted fragment, by its last syllable: 로 after a vowel or ㄹ, 으로 otherwise. */
export function objectParticle(text: string): "로" | "으로" {
  const last = [...text].reverse().find((ch) => ch >= "가" && ch <= "힣");
  if (!last) return "로";
  const jong = (last.charCodeAt(0) - 0xac00) % 28;
  return jong === 0 || jong === 8 ? "로" : "으로";
}
