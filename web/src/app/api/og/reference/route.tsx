import { ImageResponse } from "next/og";
import { NextRequest, NextResponse } from "next/server";
import { loadReference } from "@/lib/references/repository.server";
import { getReferenceEnglishEditorial } from "@/lib/references/editorial";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id") ?? "";
  const loaded = loadReference(id);
  if (!loaded) return new NextResponse("Reference not found", { status: 404 });

  const editorial = getReferenceEnglishEditorial(id);
  const evolution = request.nextUrl.searchParams.get("artifact") === "evolution" && editorial
    ? editorial.evolution[0]
    : null;
  const colors = Object.values(loaded.ast.tokens.colors)
    .filter((value) => value.origin === "frontmatter" && value.confidence === "high")
    .map((value) => value.value)
    .filter((value, index, all) => all.indexOf(value) === index)
    .slice(0, 6);
  const primary = loaded.ast.tokens.colors.primary?.value
    ?? loaded.ast.identity.brandColor.value;
  const name = editorial?.name ?? loaded.ast.identity.displayName;
  const checked = loaded.ast.evidence?.checkedAt ?? loaded.quality.verifiedAt;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "#fdfcff",
          color: "#16161d",
          fontFamily: "Geist, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ display: "flex", width: 18, height: 18, borderRadius: 9999, background: primary }} />
            <div style={{ display: "flex", fontSize: 22, fontWeight: 600, letterSpacing: "0.06em", color: "#7c5cfc" }}>
              OH-MY-DESIGN / VERIFIED REFERENCE
            </div>
          </div>
          {checked ? (
            <div style={{ display: "flex", fontSize: 21, color: "#6f6d78" }}>CHECKED {checked}</div>
          ) : null}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1 }}>
            {name} DESIGN.md
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#6f6d78" }}>
            {evolution ? "Previous snapshot → Verified v2" : "Canonical colors, typography, components, and evidence"}
          </div>
          {evolution ? (
            <div style={{ display: "flex", gap: 14, alignItems: "stretch", marginTop: 8 }}>
              <div style={{ display: "flex", flex: 1, flexDirection: "column", gap: 9, padding: "18px 20px", borderRadius: 14, background: "#f3f1f7", border: "1px solid #e5e3ea" }}>
                <div style={{ display: "flex", fontSize: 15, color: "#6f6d78" }}>PREVIOUS SNAPSHOT</div>
                <div style={{ display: "flex", fontSize: 24, fontWeight: 600 }}>{evolution.before}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", fontSize: 28, color: "#7c5cfc" }}>→</div>
              <div style={{ display: "flex", flex: 1, flexDirection: "column", gap: 9, padding: "18px 20px", borderRadius: 14, background: "#f0ecff", border: "1px solid #cfc5ff" }}>
                <div style={{ display: "flex", fontSize: 15, color: "#7c5cfc" }}>VERIFIED V2</div>
                <div style={{ display: "flex", fontSize: 24, fontWeight: 600 }}>{evolution.after}</div>
              </div>
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32 }}>
          <div style={{ display: "flex", gap: 26, fontSize: 21, color: "#6f6d78" }}>
            <div style={{ display: "flex" }}>{loaded.quality.evidenceClaimCount}/{loaded.quality.claimCount} CLAIMS</div>
            {loaded.quality.sourceCount > 0 ? <div style={{ display: "flex" }}>{loaded.quality.sourceCount} SOURCES</div> : null}
            {loaded.quality.surfaceCount > 0 ? <div style={{ display: "flex" }}>{loaded.quality.surfaceCount} SURFACES</div> : null}
            <div style={{ display: "flex" }}>{loaded.quality.conflictCount} CONFLICTS</div>
          </div>
          {colors.length > 0 ? (
            <div style={{ display: "flex", gap: 7 }}>
              {colors.map((color) => (
                <div key={color} style={{ display: "flex", width: 48, height: 48, borderRadius: 10, background: color, border: "1px solid #e5e3ea" }} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
