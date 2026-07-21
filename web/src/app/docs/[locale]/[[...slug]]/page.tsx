import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CliDocsRoute } from "@/components/cli-docs/docs-route";
import { CLI_DOCS } from "@/data/cli-docs";
import {
  DOC_OG_LOCALE,
  DOC_HTML_LANG,
  DOC_LOCALES,
  DOC_PAGES,
  docsAlternates,
  docsHref,
  isDocsLocale,
  isDocsPage,
  type DocsLocale,
  type DocsPage,
} from "@/lib/docs/locales";

type RouteParams = { locale: string; slug?: string[] };

function resolvePage(slug?: string[]): DocsPage | null {
  if (!slug || slug.length === 0) return "overview";
  if (slug.length !== 1 || slug[0] === "overview" || !isDocsPage(slug[0])) return null;
  return slug[0];
}

export const dynamicParams = false;

function pageDescription(locale: DocsLocale, page: DocsPage): string {
  const dictionary = CLI_DOCS[locale];
  switch (page) {
    case "overview": return dictionary.overview.lead;
    case "getting-started": return dictionary.gettingStarted.lead;
    case "workflows": return dictionary.workflows.lead;
    case "demo": return dictionary.demo.lead;
    case "skills": return dictionary.skills.lead;
    case "anti-slop": return dictionary.antiSlop.lead;
    case "showcase": return dictionary.showcase.lead;
    case "troubleshooting": return dictionary.troubleshooting.lead;
    case "ai": return dictionary.ai.lead;
  }
}

export function generateStaticParams(): RouteParams[] {
  return DOC_LOCALES.flatMap((locale) => [
    { locale, slug: [] },
    ...DOC_PAGES.filter((page) => page !== "overview").map((page) => ({
      locale,
      slug: [page],
    })),
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!isDocsLocale(rawLocale)) return {};
  const page = resolvePage(slug);
  if (!page) return {};
  const dictionary = CLI_DOCS[rawLocale];
  const title = `${dictionary.nav[page]} — oh-my-design CLI`;
  const description = pageDescription(rawLocale, page);
  const languages = {
    ...docsAlternates(page),
    "x-default": docsHref("en", page),
  };

  return {
    title,
    description,
    alternates: {
      canonical: docsHref(rawLocale, page),
      languages,
    },
    // A child App Router segment cannot safely replace the root <html> without
    // splitting the whole application into route-group root layouts. Keep the
    // 40 static routes and scope their complete server-rendered document body
    // with `lang` in DocsShell; this server-rendered metadata mirrors that
    // locale for clients and crawlers that inspect route metadata.
    other: {
      "content-language": DOC_HTML_LANG[rawLocale],
    },
    openGraph: {
      title,
      description,
      type: "article",
      locale: DOC_OG_LOCALE[rawLocale],
      url: docsHref(rawLocale, page),
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "oh-my-design CLI" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/twitter-image.png"],
    },
  };
}

export default async function LocalizedDocsPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!isDocsLocale(rawLocale)) notFound();
  const page = resolvePage(slug);
  if (!page) notFound();

  return <CliDocsRoute locale={rawLocale as DocsLocale} page={page} />;
}
