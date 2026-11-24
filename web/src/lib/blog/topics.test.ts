import { describe, expect, it } from "vitest";
import { TOPICS, topicsOf } from "./topics";
import { getAllPosts } from "./posts";
import { POST_LOCALES } from "./locales";

describe("blog topics", () => {
  it("maps tag slugs to topics in the tags' order, once each, and drops slugs with no topic", () => {
    expect(topicsOf(["data", "brand-color", "accessibility", "korea"]).map((t) => t.id)).toEqual(["data", "color"]);
    expect(topicsOf(["curation", "baemin", "typography", "DESIGN.md"]).map((t) => t.id)).toEqual(["typography", "design-systems"]);
    expect(topicsOf(["design-systems", "DESIGN.md"]).map((t) => t.id)).toEqual(["design-systems"]);
    expect(topicsOf(["korea"])).toEqual([]);
  });

  it("gives every published post at least one topic", () => {
    for (const post of getAllPosts()) expect(topicsOf(post.tags).length, post.slug).toBeGreaterThan(0);
  });

  it("labels every topic in every locale, with ids that are safe in markup", () => {
    for (const topic of TOPICS) {
      expect(topic.id).toMatch(/^[a-z-]+$/);
      for (const locale of POST_LOCALES) expect(topic.label[locale].length).toBeGreaterThan(0);
    }
  });
});
