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
  /** e.g. "Blog · 3 posts" */
  postCount: (count: number) => string;
  read: string;
  allPosts: string;
  /** Label on a card whose body is not in the reader's locale. */
  otherLanguageBadge: string;
  /** Link that switches the current page to the other locale. */
  switchLocale: string;
  ctaTitle: string;
  ctaLink: string;
  feedLabel: string;
  /** Back link + footer link to the main oh-my-design site. */
  mainSite: string;
  /** aria-label on the theme toggle button. */
  themeToggle: string;
  /** Short locale code shown next to the language icon on narrow screens. */
  switchLocaleShort: string;
  footerTagline: string;
  footerProduct: string;
  footerResources: string;
  footerBuilder: string;
  footerReferences: string;
  footerBenchmarks: string;
  footerDocs: string;
}

export const BLOG_CHROME: Record<PostLocale, BlogChrome> = {
  ko: {
    dateLocale: "ko-KR",
    indexTitle: "하네스에서 나온 기록",
    indexIntro:
      "코딩 에이전트가 내놔도 부끄럽지 않은 UI를 만들게 하면서 알게 된 것들. 유도 사슬, 프리셋 바닥, 게이트, 그리고 실제로 버틴 수치와 버티지 못한 수치.",
    postCount: (count) => `블로그 · ${count}편`,
    read: "읽기",
    allPosts: "글 목록",
    otherLanguageBadge: "EN",
    switchLocale: "Read in English",
    ctaTitle: "직접 해보기",
    ctaLink: "CLI가 에이전트에게 무엇을 주는지 →",
    feedLabel: "RSS",
    mainSite: "oh-my-design 홈",
    themeToggle: "테마 전환",
    switchLocaleShort: "EN",
    footerTagline: "AI 코딩 에이전트를 위한 DESIGN.md 하네스.",
    footerProduct: "제품",
    footerResources: "리소스",
    footerBuilder: "빌더",
    footerReferences: "레퍼런스",
    footerBenchmarks: "벤치마크",
    footerDocs: "문서",
  },
  en: {
    dateLocale: "en-US",
    indexTitle: "Notes from the harness",
    indexIntro:
      "What we learned making a coding agent produce UI someone can defend — the derivation chain, the preset floor, the gates, and the measurements that did and did not hold up.",
    postCount: (count) => `Blog · ${count} ${count === 1 ? "post" : "posts"}`,
    read: "Read",
    allPosts: "All posts",
    otherLanguageBadge: "KO",
    switchLocale: "한국어로 읽기",
    ctaTitle: "Try it",
    ctaLink: "What the CLI gives your agent →",
    feedLabel: "RSS",
    mainSite: "oh-my-design home",
    themeToggle: "Toggle theme",
    switchLocaleShort: "KO",
    footerTagline: "The DESIGN.md harness for AI coding agents.",
    footerProduct: "Product",
    footerResources: "Resources",
    footerBuilder: "Builder",
    footerReferences: "References",
    footerBenchmarks: "Benchmarks",
    footerDocs: "Docs",
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
