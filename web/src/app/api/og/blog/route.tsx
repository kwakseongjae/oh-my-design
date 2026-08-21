import { ImageResponse } from "next/og";
import { NextRequest, NextResponse } from "next/server";
import { getPost } from "@/lib/blog/posts";
import { isPostLocale } from "@/lib/blog/locales";

/**
 * OG card for a blog post.
 *
 * The canonical locale is Korean and none of the site's fonts carry Hangul, so
 * the title font is fetched per-render as a Google Fonts subset containing only
 * the characters in this title — a few KB, and the result is cached by the
 * crawlers that fetch OG images. Satori cannot parse woff2, hence the ancient
 * User-Agent: it makes Google serve a plain woff.
 *
 * If that fetch fails the card still renders, minus the title. A silent tofu
 * row of missing glyphs would look worse than a card that says less.
 */

const FONT_FAMILY = "Noto Sans KR";

async function loadTitleFont(text: string): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&text=${encodeURIComponent(text)}`,
      { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1)" } },
    ).then((res) => (res.ok ? res.text() : null));
    if (!css) return null;

    const src = /src:\s*url\(([^)]+)\)/.exec(css)?.[1];
    if (!src) return null;

    const font = await fetch(src);
    return font.ok ? await font.arrayBuffer() : null;
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");
  const localeParam = req.nextUrl.searchParams.get("locale") ?? "";
  const locale = isPostLocale(localeParam) ? localeParam : undefined;

  const post = slug ? getPost(slug, locale) ?? getPost(slug) : undefined;
  if (!post) return new NextResponse("Unknown post", { status: 404 });

  const font = await loadTitleFont(post.title);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px",
          background: "#0a0a0f",
          color: "#fafafa",
          fontFamily: font ? FONT_FAMILY : "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 24, letterSpacing: "0.08em", color: "#a89cff" }}>
            OH-MY-DESIGN / BLOG
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#a89cff" }}>{post.date}</div>
        </div>

        {font ? (
          <div style={{ display: "flex", fontSize: 64, lineHeight: 1.25, fontWeight: 700 }}>
            {post.title}
          </div>
        ) : (
          <div style={{ display: "flex", fontSize: 64, lineHeight: 1.25, fontWeight: 700 }}>
            oh-my-design
          </div>
        )}

        <div style={{ display: "flex", gap: 14 }}>
          {post.tags.slice(0, 4).map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "8px 18px",
                borderRadius: 999,
                border: "1px solid rgba(168,156,255,0.35)",
                fontSize: 22,
                color: "#a89cff",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: font
        ? [{ name: FONT_FAMILY, data: font, weight: 700 as const, style: "normal" as const }]
        : undefined,
    },
  );
}
