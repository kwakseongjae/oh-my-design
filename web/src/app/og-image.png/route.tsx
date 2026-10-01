import { ImageResponse } from "next/og";
import { REGISTRY_BY_ID } from "@/data/registry.generated";
import { REFERENCE_QUALITY_COUNTS } from "@/data/reference-quality.generated";
import { REFERENCE_COUNT } from "@/lib/catalog-count";

/**
 * /og-image.png — the site-wide share card (root layout, and every page that
 * spreads DEFAULT_OG_IMAGE from lib/site.ts).
 *
 * It used to be a static PNG, and a static PNG drifts: by 2026-10-01 it still
 * advertised "58 design systems / A/B wizard". Rendering it from the catalog
 * at build time means the numbers on the card are the numbers in the registry.
 *
 * It lives at this path rather than under /api/og/ because robots.txt
 * disallows /api/ for every crawler, and share-card fetchers such as
 * Twitterbot honour that. Same URL as the old file, so no reference breaks.
 */
export const dynamic = "force-static";

// Real brand primaries from the registry — a swatch row, not decoration
// invented for the card. Ids missing from the registry simply drop out.
const SWATCH_IDS = [
  "toss", "stripe", "linear.app", "karrot", "baemin", "kakao",
  "airbnb", "spotify", "notion", "naver", "figma", "coupang",
];

const BG = "#0a0a0f";
const FG = "#fafafa";
const MUTED = "rgba(250,250,250,0.62)";
const ACCENT = "#a89cff";

export function GET() {
  const swatches = SWATCH_IDS
    .map((id) => ({ id, hex: REGISTRY_BY_ID[id]?.primaryColor }))
    .filter((s): s is { id: string; hex: string } => typeof s.hex === "string" && /^#[0-9a-fA-F]{6}$/.test(s.hex));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: BG,
          color: FG,
          fontFamily: "Geist, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em" }}>
            oh-my-design
          </div>
          <div style={{ display: "flex", fontSize: 24, color: MUTED }}>oh-my-design.kr</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          {/* Two explicit lines: satori's own wrap left a double-width gap. */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 68,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            <div style={{ display: "flex" }}>Real design systems from</div>
            <div style={{ display: "flex" }}>{`${REFERENCE_COUNT} companies, as DESIGN.md`}</div>
          </div>
          <div style={{ display: "flex", fontSize: 30, color: MUTED }}>
            For Claude Code, Codex, Cursor, and OpenCode. Free and open source.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 28, fontSize: 24, color: ACCENT }}>
            <div style={{ display: "flex" }}>{`${REFERENCE_COUNT} references`}</div>
            <div style={{ display: "flex" }}>{`${REFERENCE_QUALITY_COUNTS.verified_v2} verified`}</div>
          </div>
          {swatches.length > 0 ? (
            <div style={{ display: "flex", gap: 8 }}>
              {swatches.map(({ id, hex }) => (
                <div
                  key={id}
                  style={{
                    display: "flex",
                    width: 40,
                    height: 40,
                    borderRadius: 9,
                    background: hex,
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
