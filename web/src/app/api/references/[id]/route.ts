import { NextResponse } from "next/server";
import {
  extractCoreV2ReferenceDetail,
  extractLegacyReferenceDetail,
  isCoreV2Document,
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

  // A migrated Core v2 document has neither frontmatter nor the legacy
  // section numbering, so both existing parsers would return an empty shell.
  // It gets its own extractor and skips the AST projection outright — that
  // projection only trusts frontmatter-origin values, which v2 does not have.
  if (isCoreV2Document(loaded.markdown)) {
    const detail = extractCoreV2ReferenceDetail(id, loaded.markdown, loaded.entry.primaryColor);
    return NextResponse.json(detail, {
      headers: {
        "x-omd-reference-model": "core-v2",
        "x-omd-reference-source": loaded.source,
      },
    });
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
