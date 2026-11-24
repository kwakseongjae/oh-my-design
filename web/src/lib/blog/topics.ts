/**
 * Topics: the plain field nouns the blog shows for a post (on its card, on the home's topic chips and
 * at the top of the post), mapped from the tag slugs in its frontmatter. The words are the ones
 * product-company blogs use for their categories (Design, Data, AI …); a slug with no topic here
 * (curation, baemin, korea, accessibility …) stays metadata only: keywords and the feed's categories.
 * Order here is the order of the home's chips. web/public/design.md, Component: topic chips.
 */

import type { PostLocale } from "./locales";

export interface Topic {
  /** Stable id, used in the page's markup (data-topics) and the chip state. */
  id: string;
  label: Record<PostLocale, string>;
  /** Frontmatter tag slugs that mean this topic. */
  tags: readonly string[];
}

export const TOPICS: readonly Topic[] = [
  { id: "design-systems", label: { ko: "디자인 시스템", en: "Design systems" }, tags: ["design-systems", "DESIGN.md"] },
  { id: "color", label: { ko: "컬러", en: "Color" }, tags: ["brand-color", "color"] },
  { id: "typography", label: { ko: "타이포그래피", en: "Typography" }, tags: ["typography"] },
  { id: "data", label: { ko: "데이터", en: "Data" }, tags: ["data"] },
  { id: "ai", label: { ko: "AI", en: "AI" }, tags: ["ai"] },
  { id: "release", label: { ko: "릴리스", en: "Releases" }, tags: ["release"] },
];

/** A post's topics, in the order its tags list them, each once. */
export function topicsOf(tags: readonly string[]): Topic[] {
  const out: Topic[] = [];
  for (const tag of tags) {
    const topic = TOPICS.find((t) => t.tags.includes(tag));
    if (topic && !out.includes(topic)) out.push(topic);
  }
  return out;
}
