import { ImageResponse } from "next/og";
import { NextRequest, NextResponse } from "next/server";
import { REGISTRY } from "@/data/registry.generated";
import {
  COLOR_FAMILY_LABELS,
  colorFamilyForHex,
  isColorFamily,
} from "@/lib/builder/color-family";

export async function GET(req: NextRequest) {
  const familyParam = req.nextUrl.searchParams.get("color");
  if (!isColorFamily(familyParam)) {
    return new NextResponse("Unknown color family", { status: 404 });
  }

  const entries = REGISTRY.filter((entry) => colorFamilyForHex(entry.primaryColor) === familyParam);
  const samples = [...new Set(entries.map((entry) => entry.primaryColor))].slice(0, 8);
  const label = COLOR_FAMILY_LABELS[familyParam];

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
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 24, letterSpacing: "0.08em", color: "#a89cff" }}>OH-MY-DESIGN / COLOR COLLECTION</div>
          <div style={{ display: "flex", fontSize: 24, color: "#a89cff" }}>
            {entries.length} REFERENCES
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            {label} Design Systems
          </div>
          <div style={{ fontSize: 30, color: "#a89cff" }}>
            Canonical primary colors from real-company DESIGN.md references
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, width: "100%" }}>
          {samples.map((sample) => (
            <div
              key={sample}
              style={{
                display: "flex",
                flex: 1,
                height: 108,
                borderRadius: 14,
                background: sample,
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
