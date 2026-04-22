/**
 * Preview context templates — "how does this font look applied in a real
 * UI context." Not the font tile with a single string; full mini-layouts
 * (hero section, product card, article body, button row) rendered with
 * the user's selection.
 *
 * Data-only — the components that render these live in
 * `components/font-playground/preview-templates.tsx`. Keeping content
 * here lets localization / authoring happen without touching React.
 */

export type PreviewContextId = "hero" | "card" | "article" | "ui";

export interface HeroTemplate {
  kicker: string;
  title: string;
  body: string;
  cta: string;
}

export interface CardTemplate {
  title: string;
  body: string;
  actionLabel: string;
  metaLabel: string;
  metaValue: string;
}

export interface ArticleTemplate {
  kicker: string;
  title: string;
  dateline: string;
  paragraphs: string[];
  subheading: string;
  tailParagraph: string;
}

export interface UiTemplate {
  primaryLabel: string;
  secondaryLabel: string;
  ghostLabel: string;
  badges: string[];
  menuItems: string[];
  price: { label: string; value: string };
}

export const PREVIEW_LATIN = {
  hero: {
    kicker: "Launching Spring 2026",
    title: "Build the thing you wanted",
    body: "A lightweight tool for designers and vibe-coders who need a typeface that matches the vibe, not a decision tree to find one.",
    cta: "Try it free",
  } satisfies HeroTemplate,
  card: {
    title: "Playful interface kit",
    body: "Twelve components, radius-tunable, built for weekend projects. Ships with sensible defaults.",
    actionLabel: "See the kit →",
    metaLabel: "Category",
    metaValue: "Starter",
  } satisfies CardTemplate,
  article: {
    kicker: "Essay",
    title: "Type is the interface",
    dateline: "Apr 20 · 6 min read",
    paragraphs: [
      "A product's font is the first sentence it says out loud. Before the layout, before the copy, before the color — the letters sit on the canvas and tell the reader who's talking.",
      "The best product teams treat that sentence as intentional. They don't default to Inter because everyone else did. They pick a face that matches the voice of the product, and then they let every other decision — weight, spacing, size — cohere behind it.",
    ],
    subheading: "What changes when you choose on purpose",
    tailParagraph:
      "Nothing obvious. The marketing copy reads the same. The buttons still work. But the product feels considered, and considered products are trusted — which is, in the end, the only thing a typeface can earn for you.",
  } satisfies ArticleTemplate,
  ui: {
    primaryLabel: "Save changes",
    secondaryLabel: "Cancel",
    ghostLabel: "More options",
    badges: ["New", "Beta", "Free tier"],
    menuItems: ["Home", "Docs", "Pricing", "Changelog"],
    price: { label: "Pro plan", value: "$12 / month" },
  } satisfies UiTemplate,
} as const;

export const PREVIEW_HANGUL = {
  hero: {
    kicker: "2026년 봄 출시",
    title: "만들고 싶었던 걸 만들어요",
    body: "디자이너와 바이브 코더를 위한 타입 도구. 검색하지 말고 묘사하세요. 나머지는 알아서 찾아드립니다.",
    cta: "무료로 시작하기",
  } satisfies HeroTemplate,
  card: {
    title: "놀기 좋은 인터페이스 키트",
    body: "12개 컴포넌트, radius 조절 가능, 주말 프로젝트용. 합리적인 기본값과 함께 제공돼요.",
    actionLabel: "키트 보러 가기 →",
    metaLabel: "카테고리",
    metaValue: "스타터",
  } satisfies CardTemplate,
  article: {
    kicker: "에세이",
    title: "타이포그래피는 인터페이스다",
    dateline: "2026년 4월 20일 · 읽기 6분",
    paragraphs: [
      "제품이 처음 건네는 말은 글자다. 레이아웃보다, 카피보다, 색보다 먼저 — 캔버스 위에 놓인 글자가 말하는 사람의 인격을 전한다.",
      "좋은 제품 팀은 그 인격을 의도적으로 고른다. 남들이 Inter를 쓰니까 Inter를 쓰는 게 아니라, 제품의 목소리에 맞는 얼굴을 고르고 두께, 자간, 크기 모든 결정을 그 뒤에 일관되게 둔다.",
    ],
    subheading: "의도적으로 고르면 무엇이 달라지는가",
    tailParagraph:
      "눈에 띄게 달라지는 건 없다. 카피는 같고 버튼은 작동한다. 다만 제품이 사려 깊어 보이고, 사려 깊은 제품은 신뢰받는다 — 그게 결국 폰트가 해줄 수 있는 유일한 일이다.",
  } satisfies ArticleTemplate,
  ui: {
    primaryLabel: "저장하기",
    secondaryLabel: "취소",
    ghostLabel: "더 보기",
    badges: ["새로움", "베타", "무료"],
    menuItems: ["홈", "문서", "가격", "업데이트"],
    price: { label: "프로 플랜", value: "월 $12" },
  } satisfies UiTemplate,
} as const;

export type PreviewLocale = "latin" | "hangul";

/** Return the full template bundle for a locale. */
export function getPreviewBundle(locale: PreviewLocale) {
  return locale === "hangul" ? PREVIEW_HANGUL : PREVIEW_LATIN;
}
