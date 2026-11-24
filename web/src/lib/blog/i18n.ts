/**
 * Blog chrome copy, per locale.
 *
 * Post bodies come from src/content/blog; this is everything around them —
 * headings, labels, the CTA. Written per locale rather than translated, so the
 * Korean reads like Korean instead of like an English sentence in Korean words.
 */

import type { PostLocale } from "./locales";

export interface BlogChrome {
  /** <html lang> equivalent for the article, and the date formatting locale. */
  dateLocale: string;
  indexTitle: string;
  indexIntro: string;
  /** aria-label of the home's topic chips, and their first chip. */
  topicsLabel: string;
  allTopics: string;
  allPosts: string;
  /** Label on a card whose body is not in the reader's locale. */
  otherLanguageBadge: string;
  /** Link that switches the current page to the other locale. */
  switchLocale: string;
  ctaTitle: string;
  ctaLink: string;
  feedLabel: string;
  /** Short locale code shown next to the language icon on narrow screens. */
  switchLocaleShort: string;
}

export const BLOG_CHROME: Record<PostLocale, BlogChrome> = {
  ko: {
    dateLocale: "ko-KR",
    indexTitle: "oh-my-design 블로그",
    indexIntro:
      "실제 서비스의 컬러, 타이포그래피, 디자인 시스템을 살펴보고, AI로 화면을 만드는 이야기를 씁니다.",
    topicsLabel: "주제",
    allTopics: "전체",
    allPosts: "글 목록",
    otherLanguageBadge: "EN",
    switchLocale: "Read in English",
    ctaTitle: "직접 해보기",
    ctaLink: "CLI가 에이전트에게 무엇을 주는지 →",
    feedLabel: "RSS",
    switchLocaleShort: "EN",
  },
  en: {
    dateLocale: "en-US",
    indexTitle: "oh-my-design Blog",
    indexIntro:
      "We look at the color, typography and design systems of real products, and write about building interfaces with AI.",
    topicsLabel: "Topics",
    allTopics: "All",
    allPosts: "All posts",
    otherLanguageBadge: "KO",
    switchLocale: "한국어로 읽기",
    ctaTitle: "Try it",
    ctaLink: "What the CLI gives your agent →",
    feedLabel: "RSS",
    switchLocaleShort: "KO",
  },
};

/** Publication date, formatted for the reader's locale. Always UTC. */
export function formatPostDate(iso: string, locale: PostLocale): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(BLOG_CHROME[locale].dateLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
