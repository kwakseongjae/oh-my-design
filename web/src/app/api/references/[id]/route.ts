import { NextResponse } from "next/server";
import {
  extractLegacyReferenceDetail,
  projectAstReferenceDetail,
} from "@/lib/references/detail-projection";
import { loadReference } from "@/lib/references/repository.server";

export function referenceAstV2Enabled(value = process.env.REFERENCE_AST_V2): boolean {
  if (value === undefined || value.trim() === "") return true;
  return !["0", "false", "off"].includes(value.trim().toLowerCase());
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const loaded = loadReference(id);
  if (!loaded) {
    return NextResponse.json({ error: "Reference not found" }, { status: 404 });
  }

  const legacy = extractLegacyReferenceDetail(id, loaded.markdown);
  if (!referenceAstV2Enabled()) {
    return NextResponse.json(legacy, {
      headers: { "x-omd-reference-model": "legacy" },
    });
  }

  const projection = projectAstReferenceDetail(loaded.ast, legacy);
  return NextResponse.json(
    { ...projection.detail, referenceAst: projection.contract },
    {
      headers: {
        "x-omd-reference-model": `ast-v${projection.contract.schemaVersion}`,
        "x-omd-reference-parity": projection.contract.parity.matches
          ? "match"
          : `diff:${projection.contract.parity.differences.length}`,
      },
    },
  );
}
