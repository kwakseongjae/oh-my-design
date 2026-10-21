/**
 * Copy for the /hangul launch pages: /ko/hangul (Korean, the default) and /hangul (English).
 *
 * Every number here has one source, and the copy says only what that source supports:
 *  - the eval: docs/research/2026-09-29-growth/hangul-eval-results.md and its raw results
 *    (17/18 runs without the skill had a BLOCK or WARN; 0/18 with it; Codex 9/9 and Claude 8/9;
 *    every Codex run hit HG-7, tightening headings to about −0.06em; 6 of 9 Codex runs had no Korean face).
 *    The results doc lists caveats to state whenever the result is quoted; `evalCaveat` carries
 *    all four (checker ships with the skill, the skill arm named it, 3 runs per cell, source only).
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

export const INSTALL_CLI = "npx oh-my-design-cli@latest";
export const INSTALL_SKILL = "npx skills add kwakseongjae/oh-my-design --skill hangul";
/** The blog post that goes out with the launch; linked only while it exists in that locale. */
export const LAUNCH_POST_SLUG = "baemin-typography-decisions";

export interface HangulRule {
  readonly id: string;
  readonly text: string;
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
  };
  readonly why: {
    readonly h2: string;
    readonly intro: string;
    readonly toggle: { readonly label: string; readonly before: string; readonly after: string };
    readonly cards: readonly WhyCard[];
    readonly footnote: string;
  };
  readonly evals: {
    readonly h2: string;
    readonly unit: string;
    readonly before: { readonly label: string; readonly sub: string };
    readonly after: { readonly label: string; readonly sub: string };
    readonly method: string;
    readonly caveat: string;
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
    /** {services} */
    readonly measuredH2: string;
    /** {date} */
    readonly measuredSub: string;
    readonly bodyLineHeight: string;
    readonly bodyLetterSpacing: string;
    readonly headingLetterSpacing: string;
    readonly median: string;
    readonly range: string;
    readonly fonts: string;
    /** {count} */
    readonly fontCount: string;
  };
  readonly rules: { readonly h2: string; readonly intro: string; readonly list: readonly HangulRule[] };
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
    title: "/hangul — 코딩 에이전트의 한국어 조판을 바로잡는 스킬",
    description:
      "코딩 에이전트는 한국어를 영어처럼 조판해요. /hangul은 줄바꿈, 자간, 행간, 글꼴 목록 같은 한국어 조판 규칙 14가지를 에이전트에게 알려 주는 스킬이에요. 평가에서 스킬 없이 만든 18개 중 17개가 규칙을 어겼고, /hangul을 쓴 18개에는 BLOCK과 WARN이 하나도 없었어요.",
    ogAlt: "/hangul — ‘있어 / 요.’로 끊긴 제목과 ‘있어요.’로 바로잡은 제목",
  },
  hero: {
    kicker: "한국어 조판 스킬",
    h1: "AI가 만든 한국어 제목, 단어 중간에서 끊기지 않게",
    lede: "코딩 에이전트는 한국어를 영어처럼 조판해요. /hangul은 줄바꿈과 자간, 행간, 글꼴 목록까지 한국어 조판 규칙 14가지를 에이전트에게 알려 주는 스킬이에요.",
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
  evals: {
    h2: "스킬 없이 만든 18개 중 17개가 규칙을 어겼어요",
    unit: "BLOCK이나 WARN이 하나라도 나온 결과물",
    before: { label: "스킬 없이", sub: "Codex 9개 · Claude 8개" },
    after: { label: "/hangul 적용", sub: "BLOCK 0 · WARN 0" },
    method: "한국어 UI 과제 3개를 Codex CLI와 Claude(Sonnet)에 3번씩 맡겨, 스킬 없이 18개와 /hangul을 써서 18개를 만들었어요.",
    caveat: "채점은 스킬에 든 체커로 소스 코드만 읽었고, 스킬을 쓴 쪽은 프롬프트에서 스킬을 지정했어요. 그래서 스킬 쪽에 유리한 비교일 수 있어요.",
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
    measuredH2: "한국 서비스 {services}곳을 직접 쟀어요",
    measuredSub: "{date} 공개 웹 화면 기준이에요.",
    bodyLineHeight: "본문 행간",
    bodyLetterSpacing: "본문 자간",
    headingLetterSpacing: "제목 자간",
    median: "중앙값",
    range: "범위",
    fonts: "주 글꼴",
    fontCount: "{count}곳",
  },
  rules: {
    h2: "/hangul의 규칙 14가지",
    intro: "규칙은 W3C 명세, KRDS·SEED·TDS 공개 문서, 한국 서비스 67곳을 잰 값에서 가져왔어요. 프로젝트의 DESIGN.md에 타이포그래피 값이 있으면 그 값을 먼저 따라요.",
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
  },
  install: {
    h2: "설치하고, 평소처럼 요청하세요",
    boxLabel: "설치 명령",
    alt: "hangul 스킬만 받으려면 이렇게 설치해요.",
    usage: "“이 화면 한글 줄바꿈이 이상해”, “한국어 랜딩 만들어 줘”처럼 말하면 돼요. 새 화면을 만들 때는 규칙을 적용하고, 이미 있는 코드는 점검해서 고칠 곳을 표로 알려 줘요.",
    copy: { copy: "복사", copied: "복사했어요", failed: "복사하지 못했어요" },
    more: "더 읽어 보기",
    docs: "스킬 문서",
    docsDesc: "공개 스킬과 각 스킬이 하는 일",
    blog: "블로그",
  },
};

const EN: HangulCopy = {
  meta: {
    title: "/hangul — Korean typography for coding agents",
    description:
      "Coding agents typeset Korean as if it were English. /hangul is a skill that gives them 14 rules for Korean line breaking, letter-spacing, line height and font stacks. In our eval, 17 of 18 runs without the skill broke a rule; the 18 runs with /hangul had no BLOCK or WARN at all.",
    ogAlt: "/hangul — a Korean heading broken as ‘있어 / 요.’, and the same heading kept whole",
  },
  hero: {
    kicker: "Korean typography skill",
    h1: "Korean headings that don’t break mid-word",
    lede: "Coding agents typeset Korean like English. /hangul is a skill that gives them 14 rules for Korean type, from line breaks to font stacks.",
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
  evals: {
    h2: "17 of 18 runs without the skill broke a rule",
    unit: "Runs with at least one BLOCK or WARN",
    before: { label: "Without the skill", sub: "Codex 9 · Claude 8" },
    after: { label: "With /hangul", sub: "0 BLOCK · 0 WARN" },
    method: "We gave Codex CLI and Claude (Sonnet) three Korean UI tasks, three runs each: 18 runs without the skill and 18 with /hangul.",
    caveat: "The checker that scored the runs ships with the skill and reads source code only, and the runs with the skill named it in the prompt, so the comparison may favor the skill.",
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
    measuredH2: "We measured {services} Korean services",
    measuredSub: "Public web pages, as of {date}.",
    bodyLineHeight: "Body line height",
    bodyLetterSpacing: "Body letter-spacing",
    headingLetterSpacing: "Heading letter-spacing",
    median: "Median",
    range: "Range",
    fonts: "Primary font",
    fontCount: "{count} services",
  },
  rules: {
    h2: "The 14 rules in /hangul",
    intro: "They come from W3C specs, the public KRDS, SEED and TDS docs, and measurements of 67 Korean services. When your DESIGN.md sets a type value, that value wins.",
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
  },
  install: {
    h2: "Install it, then ask as usual",
    boxLabel: "Install command",
    alt: "To install only the hangul skill:",
    usage: "Say things like “the Korean line breaks look off” or “build a Korean landing page.” On new screens it applies the rules; on existing code it audits and lists what to change in a table.",
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
