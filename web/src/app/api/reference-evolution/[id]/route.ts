import { NextResponse } from "next/server";
import { loadReference } from "@/lib/references/repository.server";
import { getReferenceEnglishEditorial } from "@/lib/references/editorial";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const editorial = getReferenceEnglishEditorial(id);
  const loaded = loadReference(id);
  if (!editorial || !loaded || loaded.quality.status !== "verified_v2") {
    return new NextResponse("Evolution artifact not available", { status: 404 });
  }

  const checked = loaded.ast.evidence?.checkedAt ?? loaded.quality.verifiedAt ?? "not recorded";
  const sections = editorial.evolution.map((change) => [
    `## ${change.claim}`,
    "",
    `- Previous snapshot: \`${change.before}\``,
    `- Verified v2: \`${change.after}\``,
    `- Why: ${change.reason}`,
  ].join("\n"));
  const markdown = [
    `# ${editorial.name} Reference Evolution`,
    "",
    editorial.canonicalSummary,
    "",
    `- Checked: ${checked}`,
    `- Evidence: ${loaded.quality.evidenceClaimCount}/${loaded.quality.claimCount} claims`,
    `- Sources: ${loaded.quality.sourceCount}`,
    `- Surfaces: ${loaded.quality.surfaceCount}`,
    `- Conflicts: ${loaded.quality.conflictCount}`,
    "",
    "> Only changes recorded between the repository's previous snapshot and the current Verified v2 reference are included. Unknown history is omitted.",
    "",
    ...sections,
    "",
    `Canonical reference: https://oh-my-design.kr/design-systems/${id}`,
    "",
  ].join("\n");

  return new NextResponse(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": `attachment; filename="${id}-reference-evolution.md"`,
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
