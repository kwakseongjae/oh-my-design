import { describe, expect, it } from "vitest";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { BlogIndexView } from "./index-view";
import { listPosts } from "@/lib/blog/posts";
import { topicsOf } from "@/lib/blog/topics";
import { POST_LOCALES } from "@/lib/blog/locales";

describe("blog home (direction B)", () => {
  it("names the blog plainly and shows no post count beside it", () => {
    const ko = renderToStaticMarkup(createElement(BlogIndexView, { locale: "ko" }));
    const en = renderToStaticMarkup(createElement(BlogIndexView, { locale: "en" }));
    expect(ko).toContain('<h1 class="bh-title">oh-my-design 블로그</h1>');
    expect(en).toContain('<h1 class="bh-title">oh-my-design Blog</h1>');
    expect(ko).not.toMatch(/블로그 · \d+편/);
    expect(en).not.toMatch(/Blog · \d+ posts?/);
    expect(ko).toContain('class="bh-banner" aria-hidden="true"');
  });

  it("puts one card per post with its cover, its topics and its own link", () => {
    for (const locale of POST_LOCALES) {
      const html = renderToStaticMarkup(createElement(BlogIndexView, { locale }));
      const posts = listPosts(locale);
      expect(html.match(/<li data-topics=/g)?.length).toBe(posts.length);
      for (const post of posts) {
        expect(html, post.slug).toContain(`src="/blog-assets/${post.slug}/cover-${post.locale}.png"`);
        expect(html, post.slug).toContain(`data-topics="${topicsOf(post.tags).map((t) => t.id).join(" ")}"`);
        for (const topic of topicsOf(post.tags)) expect(html, post.slug).toContain(`<span>${topic.label[locale]}</span>`);
      }
    }
  });

  it("offers a chip per topic that a post carries, with All first and pressed", () => {
    const html = renderToStaticMarkup(createElement(BlogIndexView, { locale: "ko" }));
    const chips = [...html.matchAll(/<button type="button" class="bh-chip" aria-pressed="(true|false)">([^<]+)<span class="bh-chip-n">(\d+)<\/span>/g)].map((m) => [m[2], m[3], m[1]]);
    expect(chips[0]).toEqual(["전체", String(listPosts("ko").length), "true"]);
    expect(chips.slice(1).every(([, n, pressed]) => Number(n) > 0 && pressed === "false")).toBe(true);
    expect(chips.map(([label]) => label)).not.toContain("curation");
  });
});
