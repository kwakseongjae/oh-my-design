/**
 * Copy for the /hangul launch pages: /ko/hangul (Korean, the default) and /hangul (English).
 *
 * Owner review 2026-10-24 (r16): the page is two concepts, 조판 and 문구, each shown on the same
 * screen with one thing changed. Hero B (two moa screens side by side on ink), mobile B (one screen
 * and a switch), no eval figures, no measured-67 card, no seal, no keycaps, no "demo" labels over the
 * screens (one line under the install box says the moa screens are examples). The screens' Korean is
 * in moa-copy.ts; this file holds the page around them.
 *
 * Every number here has one source, and the copy says only what that source supports:
 *  - the "without the skill" typesetting on the screens: the moa page Codex built without the skill
 *    in the 2026-09 typography eval (run p1-A-r3; docs/research/2026-09-29-growth/hangul-eval-results.md,
 *    measured in hangul-content/CONTENT-NOTES.md): an Arial-first stack, the heading at −0.064em,
 *    10px captions. The page does not say where they come from, so it claims nothing about the eval.
 *  - "only one measured service tracks headings tighter than −0.03em": skills/hangul/references/
 *    measured-67.md (23 of 65 headings track negative; 22 of those stay at −0.03em or looser).
 *  - the rule lists: skills/hangul/SKILL.md §3 and §3b, checked against it by test.
 *
 * Korean is 해요체 throughout. The page shows no source list (owner, v4 review): the skill files
 * carry the citations.
 */

export type HangulLocale = "ko" | "en";

export const HANGUL_PATH: Readonly<Record<HangulLocale, string>> = { ko: "/ko/hangul", en: "/hangul" };

export const INSTALL_CLI = "npx oh-my-design-cli@latest";
export const INSTALL_SKILL = "npx skills add kwakseongjae/oh-my-design --skill hangul";
/** The blog post that goes out with the launch; linked only while it exists in that locale. */
export const LAUNCH_POST_SLUG = "baemin-typography-decisions";

export interface HangulRule {
  readonly id: string;
  readonly text: string;
}

/** One change a chapter points out, beside the two screens. */
export interface ChapterNote {
  readonly id: string;
  readonly title: string;
  readonly body: string;
}

export interface Chapter {
  readonly eyebrow: string;
  readonly h2: string;
  readonly intro: string;
  readonly notes: readonly ChapterNote[];
}

export interface HangulCopy {
  readonly meta: { readonly title: string; readonly description: string; readonly ogAlt: string };
  readonly hero: {
    readonly kicker: string;
    readonly h1: string;
    readonly lede: string;
    readonly cta: string;
    readonly ctaRules: string;
    /** the rule tags between the two screens, lit one after another */
    readonly tagsLabel: string;
    readonly tags: readonly HangulRule[];
  };
  /** the before/after switch: labels, the group name, and the hint under it */
  readonly sides: {
    readonly before: string;
    readonly after: string;
    readonly group: string;
    readonly hintAuto: string;
    readonly hintPaused: string;
  };
  readonly type: Chapter;
  readonly copy: Chapter;
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
    /** where the moa screens come from, once, at the end of the page */
    readonly screensNote: string;
  };
}

const KO: HangulCopy = {
  meta: {
    title: "/hangul — 코딩 에이전트의 한국어 조판과 문구를 바로잡는 스킬",
    description:
      "같은 화면도 조판과 문구가 다르면 다르게 읽혀요. /hangul은 줄바꿈·자간·행간·글꼴 목록 같은 조판 규칙 14가지와 맞춤법·오류 문구·말투 같은 문구 규칙 14가지를 코딩 에이전트에게 알려 주는 스킬이에요.",
    ogAlt: "/hangul — 같은 moa 화면 두 대. 왼쪽은 스킬 없이, 오른쪽은 /hangul을 쓴 화면",
  },
  hero: {
    kicker: "한국어 조판·문구 스킬",
    h1: "같은 화면, 다른 한국어",
    lede: "왼쪽은 스킬 없이, 오른쪽은 /hangul로 만든 화면이에요. 조판과 문구 말고는 모두 같아요. /hangul은 코딩 에이전트에게 한국어 조판 규칙 14가지와 문구 규칙 14가지를 알려 주는 스킬이에요.",
    cta: "설치하기",
    ctaRules: "규칙 28가지 보기",
    tagsLabel: "두 화면에서 달라진 곳",
    tags: [
      { id: "HG-1", text: "한글 글꼴부터" },
      { id: "HW-12", text: "과장과 느낌표 빼기" },
      { id: "HW-8", text: "사용자가 한 일로" },
      { id: "HG-7", text: "제목 자간은 −0.03em까지" },
      { id: "HW-5", text: "버튼은 하는 일로" },
      { id: "HW-4", text: "오류는 원인과 다음 행동" },
      { id: "HW-2", text: "5만 원, 500만 원" },
      { id: "HG-3", text: "작은 글자도 11px 이상" },
    ],
  },
  sides: {
    before: "스킬 없이",
    after: "/hangul",
    group: "화면 고르기",
    hintAuto: "3초마다 저절로 바뀌어요. 누르면 멈춰요.",
    hintPaused: "눌러서 두 화면을 번갈아 보세요.",
  },
  type: {
    eyebrow: "조판",
    h2: "같은 문구, 다른 조판",
    intro: "두 화면의 문구는 똑같아요. 글꼴과 글자 크기, 자간, 행간, 줄바꿈만 바꿨어요.",
    notes: [
      { id: "HG-1", title: "한글 글꼴부터", body: "글꼴 목록이 Arial로 시작하면 숫자는 Arial로, 한글은 기기 글꼴로 따로 그려져요." },
      { id: "HG-7", title: "제목 자간", body: "−0.064em을 −0.02em으로. 측정한 한국 서비스에서 제목 자간이 −0.03em보다 좁은 곳은 한 곳뿐이었어요." },
      { id: "HG-6 · HG-4", title: "본문 자간과 행간", body: "자간 −0.02em을 0으로, 행간 1.25를 1.5로" },
      { id: "HG-10", title: "단어째 줄바꿈", body: "음절 사이에서 줄을 바꾸면 한 단어가 두 줄로 갈라져요. /hangul은 단어째 다음 줄로 넘겨요." },
      { id: "HG-3", title: "작은 글자", body: "안내 문구를 10px에서 13px로" },
    ],
  },
  copy: {
    eyebrow: "문구",
    h2: "같은 화면, 다른 문구",
    intro: "두 화면의 조판은 똑같아요. 문구만 바꿨어요.",
    notes: [
      { id: "HW-8", title: "사용자가 한 일로", body: "‘송금이 성공적으로 완료되었습니다!’ 대신 ‘엄마에게 5만 원을 보냈어요’" },
      { id: "HW-12 · HW-13", title: "과장과 느낌표 빼기", body: "놓칠까 봐 걱정시키지 않고, 받는 것을 말해요." },
      { id: "HW-5", title: "버튼은 하는 일로", body: "‘확인 · 취소’ 대신 ‘보내기 · 닫기’" },
      { id: "HW-4", title: "무슨 일인지와 다음 행동", body: "‘오류가 발생했습니다’ 대신 끊긴 이유와 할 일을 말해요." },
      { id: "HW-2 · HW-7", title: "띄어쓰기와 쉬운 말", body: "‘500만원’은 ‘500만 원’으로, ‘금일’은 ‘오늘’로" },
      { id: "HW-11", title: "말투 하나로", body: "합쇼체와 해요체가 섞인 화면을 해요체 하나로" },
    ],
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
      { id: "HG-9", text: "긴 URL과 ID에는 overflow-wrap: anywhere" },
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
    screensNote: "이 페이지의 moa 화면은 규칙을 보여 주려고 만든 예시예요.",
  },
};

const EN: HangulCopy = {
  meta: {
    title: "/hangul — Korean typography and UX writing for coding agents",
    description:
      "The same screen reads differently when its type and its words change. /hangul is a skill that gives coding agents 14 rules for Korean line breaking, letter-spacing, line height and font stacks, and 14 for the copy: spelling, error messages, speech level.",
    ogAlt: "/hangul — the same moa screen twice: without the skill on the left, with /hangul on the right",
  },
  hero: {
    kicker: "Korean typography and writing skill",
    h1: "Same screen, different Korean",
    lede: "Left: without the skill. Right: built with /hangul. Only the typesetting and the words differ. /hangul is a skill that gives coding agents 14 rules for Korean typography and 14 for Korean UI copy.",
    cta: "Install",
    ctaRules: "See the 28 rules",
    tagsLabel: "What differs between the two screens",
    tags: [
      { id: "HG-1", text: "A Korean font first" },
      { id: "HW-12", text: "No hype, no exclamation marks" },
      { id: "HW-8", text: "What the user did" },
      { id: "HG-7", text: "Headings no tighter than −0.03em" },
      { id: "HW-5", text: "Buttons say what happens" },
      { id: "HW-4", text: "Errors: what happened, what to do" },
      { id: "HW-2", text: "5만 원, 500만 원" },
      { id: "HG-3", text: "Nothing below 11px" },
    ],
  },
  sides: {
    before: "Without the skill",
    after: "/hangul",
    group: "Pick a screen",
    hintAuto: "Switches every 3 seconds. Tap to stop.",
    hintPaused: "Tap to switch between the two screens.",
  },
  type: {
    eyebrow: "Typography",
    h2: "Same words, different type",
    intro: "Both screens say exactly the same thing. Only the font, type sizes, letter-spacing, line height and line breaks changed.",
    notes: [
      { id: "HG-1", title: "A Korean font first", body: "With Arial first in the stack, digits draw in Arial and Hangul in whatever the device has." },
      { id: "HG-7", title: "Heading tracking", body: "−0.064em becomes −0.02em. Of the Korean services we measured, only one tracks headings tighter than −0.03em." },
      { id: "HG-6 · HG-4", title: "Body tracking and line height", body: "Tracking −0.02em becomes 0; line height 1.25 becomes 1.5." },
      { id: "HG-10", title: "Breaks between words", body: "Breaking between syllables splits a word across two lines. /hangul moves the whole word to the next line." },
      { id: "HG-3", title: "Small text", body: "Notes go from 10px to 13px." },
    ],
  },
  copy: {
    eyebrow: "Writing",
    h2: "Same screen, different words",
    intro: "Both screens are typeset the same way. Only the words changed.",
    notes: [
      { id: "HW-8", title: "What the user did", body: "Not “The transfer was successfully completed!” but “You sent ₩50,000 to Mom” (엄마에게 5만 원을 보냈어요)." },
      { id: "HW-12 · HW-13", title: "No hype, no exclamation marks", body: "Say what the user gets instead of warning them they’ll miss out." },
      { id: "HW-5", title: "Buttons say what happens", body: "Not 확인 · 취소 (OK · Cancel) but 보내기 · 닫기 (Send · Close)." },
      { id: "HW-4", title: "What happened, what to do", body: "Not “An error occurred” but why the connection dropped and what to try." },
      { id: "HW-2 · HW-7", title: "Spacing and plain words", body: "500만원 becomes 500만 원; 금일 (this day) becomes 오늘 (today)." },
      { id: "HW-11", title: "One speech level", body: "A screen that mixes 합쇼체 and 해요체 settles on 해요체." },
    ],
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
      { id: "HG-9", text: "overflow-wrap: anywhere for long URLs and IDs" },
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
    screensNote: "The moa screens on this page are examples made to show the rules.",
  },
};

export const HANGUL_COPY: Readonly<Record<HangulLocale, HangulCopy>> = { ko: KO, en: EN };

/** Fills {name} slots. */
export function fill(s: string, vars: Readonly<Record<string, string | number>>): string {
  return s.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
}
