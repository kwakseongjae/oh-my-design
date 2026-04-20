/**
 * Dynamic OG image for Playground share URLs.
 *
 * GET /api/og/playground?c=<compact-state> → 1200×630 PNG
 *
 * Renders a simple, Playground-branded card showing the user's brand name,
 * primary color block, and mood. If the `c` param is missing or malformed,
 * falls back to a generic Playground card so the route never 500s on a
 * shared link.
 */

import { ImageResponse } from "next/og";
import { NextRequest, NextResponse } from "next/server";
import { decodeState } from "@/lib/playground/codec";
import { MOOD_DEFAULTS } from "@/lib/playground/rules/mood";

export const runtime = "edge";

// Dev-only gate — matches /playground route. Returns 404 in preview/prod.
const IS_DEV = process.env.NODE_ENV !== "production";

function contrastForeground(hex: string): string {
  const m = hex.replace("#", "").match(/.{2}/g);
  if (!m) return "#ffffff";
  const [r, g, b] = m.map((x) => parseInt(x, 16));
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.6 ? "#0a0a0a" : "#ffffff";
}

export async function GET(req: NextRequest) {
  if (!IS_DEV) {
    return new NextResponse("Not Found", { status: 404 });
  }
  const { searchParams } = new URL(req.url);
  const compact = searchParams.get("c");
  const state = compact ? decodeState(compact) : null;

  const name = state?.name.trim() || "Your Design System";
  const mood = state?.mood ?? "sharp";
  const primary = state?.primary ?? MOOD_DEFAULTS.sharp.primary;
  const tagline = state?.tagline || "Designed in oh-my-design Playground";
  const fg = contrastForeground(primary);

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
          background: "#fafafa",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top: brand chip + primary color swatch */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: 24,
              background: primary,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: fg,
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            {(name[0] || "?").toUpperCase()}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div
              style={{
                fontSize: 28,
                fontWeight: 500,
                color: "#71717a",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {mood}
            </div>
            <div
              style={{
                fontSize: 22,
                fontFamily: "monospace",
                color: "#52525b",
              }}
            >
              {primary}
            </div>
          </div>
        </div>

        {/* Middle: name + tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "#09090b",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              maxWidth: "100%",
            }}
          >
            {name.length > 40 ? name.slice(0, 37) + "…" : name}
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#52525b",
              lineHeight: 1.3,
              maxWidth: "90%",
            }}
          >
            {tagline.length > 80 ? tagline.slice(0, 77) + "…" : tagline}
          </div>
        </div>

        {/* Bottom: OMD watermark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "#18181b",
              letterSpacing: "-0.01em",
            }}
          >
            oh-my-design / playground
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#a1a1aa",
            }}
          >
            DESIGN.md · OmD v0.1
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
