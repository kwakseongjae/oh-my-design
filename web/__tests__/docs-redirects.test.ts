import { describe, expect, it } from "vitest";
import config from "../next.config";
import sitemap from "../src/app/sitemap";
import { DELETED_DOCS_PAGES, DOC_LOCALES, DOC_PAGES, docsHref } from "../src/lib/docs/locales";

/**
 * Round 11 removed three docs pages (showcase, troubleshooting, ai) in all five
 * locales. Their URLs were indexed and linked from llms.txt, so each one must 308
 * to a live docs page in a single hop, and nothing may still point at them.
 * next.config.ts mirrors the docs locales as a literal (it cannot import TS path
 * aliases); these tests hold that copy to DOC_LOCALES.
 */

type Rule = { source: string; destination: string; permanent?: boolean };

/** Enough of path-to-regexp for this config: literal segments, `:name` and `:name(a|b)`. */
function compile(source: string) {
  const names: string[] = [];
  const pattern = source
    .split(/(:[a-zA-Z]+(?:\([^)]*\))?)/)
    .map((part) => {
      const param = /^:([a-zA-Z]+)(?:\(([^)]*)\))?$/.exec(part);
      if (!param) return part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      names.push(param[1]);
      return `(${param[2] ?? "[^/]+"})`;
    })
    .join("");
  return { re: new RegExp(`^${pattern}$`), names };
}

function resolve(rules: Rule[], pathname: string) {
  for (const rule of rules) {
    const { re, names } = compile(rule.source);
    const match = re.exec(pathname);
    if (!match) continue;
    const destination = names.reduce((dest, name, index) => dest.replace(`:${name}`, match[index + 1]), rule.destination);
    return { destination, permanent: rule.permanent === true };
  }
  return null;
}

const livePaths = new Set(DOC_LOCALES.flatMap((locale) => DOC_PAGES.map((page) => docsHref(locale, page))));

async function rules(): Promise<Rule[]> {
  return (await config.redirects!()) as Rule[];
}

describe("removed docs pages", () => {
  it("308 every locale's showcase, troubleshooting and ai page to the page that replaced it", async () => {
    const all = await rules();
    for (const locale of DOC_LOCALES) {
      for (const [removed, target] of Object.entries(DELETED_DOCS_PAGES)) {
        const hit = resolve(all, `/docs/${locale}/${removed}`);
        const hash = "hash" in target ? `#${target.hash}` : "";
        expect(hit, `/docs/${locale}/${removed}`).toEqual({
          destination: `${docsHref(locale, target.page)}${hash}`,
          permanent: true,
        });
      }
    }
  });

  it("land on a live docs page in one hop", async () => {
    const all = await rules();
    const sources = [
      ...DOC_LOCALES.flatMap((locale) => Object.keys(DELETED_DOCS_PAGES).map((removed) => `/docs/${locale}/${removed}`)),
      "/docs/connector",
      "/benchmarks",
    ];
    for (const source of sources) {
      const hit = resolve(all, source);
      expect(hit, source).not.toBeNull();
      const [path] = hit!.destination.split("#");
      expect(livePaths.has(path), `${source} → ${hit!.destination}`).toBe(true);
      expect(resolve(all, path), `${source} → ${path} redirects again`).toBeNull();
    }
  });

  it("leaves live docs pages and other locales alone", async () => {
    const all = await rules();
    for (const path of livePaths) expect(resolve(all, path), path).toBeNull();
    expect(resolve(all, "/docs/fr/showcase")).toBeNull();
    expect(resolve(all, "/docs/en/showcase/extra")).toBeNull();
  });

  it("no rule points at a removed page", async () => {
    const removed = new RegExp(`^/docs/[^/]+/(${Object.keys(DELETED_DOCS_PAGES).join("|")})(?:[#?/]|$)`);
    for (const rule of await rules()) {
      expect(rule.destination, rule.source).not.toMatch(removed);
    }
  });

  it("are not in the sitemap", () => {
    const urls = sitemap().map((route) => route.url);
    for (const locale of DOC_LOCALES) {
      for (const removed of Object.keys(DELETED_DOCS_PAGES)) {
        expect(urls).not.toContain(`https://oh-my-design.kr/docs/${locale}/${removed}`);
      }
    }
  });
});
