import type { Metadata } from "next";
import data from "@/data/kana-rules.generated.json";
import { SITE_LOCALE_META } from "@/lib/i18n/site-locales";
import { DEFAULT_OG_IMAGE } from "@/lib/site";
import type { KanaLocale } from "./copy";
import { KANA_KIT, KANA_PATHS, KANA_RULES_PATHS } from "./locale";

export type KanaPage = "showcase" | "rules";

/** hreflang → path for one kana page. There is no English edition, so no x-default is declared. */
export function kanaLanguages(page: KanaPage): Readonly<Record<KanaLocale, string>> {
  return page === "showcase" ? KANA_PATHS : KANA_RULES_PATHS;
}

/**
 * The four kana pages (/ko/kana, /ko/kana/rules, /ja/kana, /ja/kana/rules), released together (2026-11-27 sprint):
 * indexable, each edition naming the other as its hreflang twin, the four paths in app/sitemap.ts, both editions'
 * language switch pointing at each other (showcase.tsx, rules-page.tsx) and a /kana link in the Korean and Japanese
 * footers (site-footer.tsx). The skill itself is still a draft and is not installable; the pages say so.
 */
export function kanaMetadata(locale: KanaLocale, page: KanaPage = "showcase"): Metadata {
  const { t, path: showcase, rulesPath } = KANA_KIT[locale];
  const path = page === "showcase" ? showcase : rulesPath;
  const title = page === "showcase" ? t.meta.title : t.meta.rulesTitle;
  const description = page === "showcase" ? t.meta.description : t.meta.rulesDescription(data.rules.length, data.houseChoices.length);
  return {
    title,
    description,
    alternates: { canonical: path, languages: { ...kanaLanguages(page) } },
    openGraph: {
      type: "website",
      locale: SITE_LOCALE_META[locale].ogLocale,
      title,
      description,
      url: path,
      siteName: "oh-my-design",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description, images: [DEFAULT_OG_IMAGE.url] },
  };
}
