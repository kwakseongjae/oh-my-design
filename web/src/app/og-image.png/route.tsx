import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { REGISTRY_BY_ID } from "@/data/registry.generated";
import { REFERENCE_QUALITY_COUNTS } from "@/data/reference-quality.generated";
import { REFERENCE_COUNT } from "@/lib/catalog-count";
import { BRAND_MARK_SVG } from "@/lib/brand-mark.generated";

/**
 * /og-image.png — the site-wide share card (root layout, and every page that
 * spreads DEFAULT_OG_IMAGE from lib/site.ts).
 *
 * Rendered from the catalog at build time, so the numbers on the card are the
 * numbers in the registry (a static PNG drifted: by 2026-10-01 it still said
 * "58 design systems"). It lives at this path rather than under /api/og/
 * because robots.txt disallows /api/ and share-card fetchers honour that.
 *
 * Round 10 brand (2026-10-16): white paper, violet-biased ink, the Iris keycap
 * mark (lib/brand-mark.generated.ts, the same file as the favicon), one Iris
 * accent. The swatches are real brand primaries from the registry — content,
 * the one multi-hue object, as the keycaps are on the site. Type is the site's
 * Wanted Sans (OFL 1.1): satori reads neither woff2 nor variable fonts, so
 * assets/og/ holds static 400 and 700 instances of the Basic Latin slice
 * (fontTools instancer over public/fonts/wanted-sans/…split.90.woff2).
 */
export const dynamic = "force-static";

const SWATCH_IDS = [
  "toss", "kakaobank", "karrot", "baemin", "kurly", "upbit",
  "line", "freee", "mercari", "104", "stripe", "linear.app",
];

const PAPER = "#ffffff";
const INK = "#13131a";
const INK2 = "#5a5a63";
const PRIMARY = "#6749e2";
const TINT = "#f6f6fe";

export async function GET() {
  const [regular, bold] = await Promise.all([400, 700].map((w) => readFile(join(process.cwd(), `assets/og/WantedSans-Latin-${w}.ttf`))));
  const swatches = SWATCH_IDS
    .map((id) => ({ id, hex: REGISTRY_BY_ID[id]?.primaryColor }))
    .filter((s): s is { id: string; hex: string } => typeof s.hex === "string" && /^#[0-9a-fA-F]{6}$/.test(s.hex));
  const mark = `data:image/svg+xml;base64,${Buffer.from(BRAND_MARK_SVG).toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px", background: PAPER, color: INK, fontFamily: "Wanted Sans" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={mark} width={64} height={64} alt="" />
            <div style={{ display: "flex", fontSize: 34, fontWeight: 700, letterSpacing: "-0.02em" }}>oh-my-design</div>
          </div>
          <div style={{ display: "flex", fontSize: 24, color: INK2 }}>oh-my-design.kr</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {/* Two explicit lines: satori's own wrap left a double-width gap. */}
          <div style={{ display: "flex", flexDirection: "column", fontSize: 72, fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.06 }}>
            <div style={{ display: "flex" }}>Real design systems</div>
            <div style={{ display: "flex" }}>for CJK screens</div>
          </div>
          <div style={{ display: "flex", fontSize: 30, color: INK2 }}>
            {`${REFERENCE_COUNT} DESIGN.md files from real companies, for Claude Code, Codex, Cursor and OpenCode.`}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", height: 56, padding: "0 28px", borderRadius: 999, background: TINT, color: PRIMARY, fontSize: 24, fontWeight: 700, whiteSpace: "nowrap" }}>
            {`${REFERENCE_QUALITY_COUNTS.verified_v2} verified, every value sourced`}
          </div>
          {swatches.length > 0 ? (
            <div style={{ display: "flex", gap: 8 }}>
              {swatches.map(({ id, hex }) => (
                <div key={id} style={{ display: "flex", width: 40, height: 40, borderRadius: 12, background: hex, border: "1px solid rgba(19,19,26,0.10)" }} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Wanted Sans", data: regular, style: "normal", weight: 400 },
        { name: "Wanted Sans", data: bold, style: "normal", weight: 700 },
      ],
    },
  );
}
