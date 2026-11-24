import type { Metadata } from "next";
import data from "@/data/kana-rules.generated.json";
import { SITE_LOCALE_META } from "@/lib/i18n/site-locales";
import { DEFAULT_OG_IMAGE } from "@/lib/site";
import type { KanaLocale } from "./copy";
import { KANA_KIT } from "./locale";

/**
 * The four kana pages (/ko/kana, /ko/kana/rules, /ja/kana, /ja/kana/rules) are unreleased: noindex until the owner
 * releases them, in no sitemap, and linked from no shared header or footer. Neither edition names the other as an
 * hreflang alternate: an unreleased page declares no twin, so each page's only alternate is itself. The header's
 * language switch still links the two editions to each other (showcase.tsx, rules-page.tsx).
 *
 * Release, when the owner says go (docs in the agent report of 2026-11-24): robots index; the four paths in
 * app/sitemap.ts; languages { ko, ja } on both editions of each page; a link from the /ja and /ko landings.
 */
export function kanaMetadata(locale: KanaLocale, page: "showcase" | "rules" = "showcase"): Metadata {
  const { t, path: showcase, rulesPath } = KANA_KIT[locale];
  const path = page === "showcase" ? showcase : rulesPath;
  const title = page === "showcase" ? t.meta.title : t.meta.rulesTitle;
  const description = page === "showcase" ? t.meta.description : t.meta.rulesDescription(data.rules.length, data.houseChoices.length);
  return {
    title,
    description,
    robots: { index: false, follow: true },
    alternates: { canonical: path, languages: { [SITE_LOCALE_META[locale].hreflang]: path } },
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
