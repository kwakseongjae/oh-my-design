import { docsPageMarkdown } from "@/lib/docs/page-markdown";
import { isDocsLocale, isDocsPage } from "@/lib/docs/locales";

export const dynamic = "force-static";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string; page: string }> },
) {
  const { locale, page: rawPage } = await params;
  const page = rawPage.endsWith(".md") ? rawPage.slice(0, -3) : rawPage;

  if (!isDocsLocale(locale) || !isDocsPage(page)) {
    return new Response("Not found\n", { status: 404 });
  }

  return new Response(docsPageMarkdown(locale, page), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": `inline; filename="oh-my-design-${locale}-${page}.md"`,
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
