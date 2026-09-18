import { NextResponse } from "next/server";
import { extractLegacyReferenceDetail } from "@/lib/references/detail-projection";
import { loadReference } from "@/lib/references/repository.server";
import { projectActiveReference } from "@/lib/references/consumer-adapter";
import { referenceResponseBody } from "./response";

function referenceAstV2Enabled(value = process.env.REFERENCE_AST_V2): boolean {
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

  if (!referenceAstV2Enabled() && loaded.format === "legacy") {
    const legacy = extractLegacyReferenceDetail(id, loaded.markdown);
    return NextResponse.json(legacy, {
      headers: { "x-omd-reference-model": "legacy" },
    });
  }

  const projection = projectActiveReference(loaded);
  return NextResponse.json(
    referenceResponseBody(projection),
    {
      headers: {
        "x-omd-reference-model": projection.model,
        "x-omd-reference-source": loaded.source,
        "x-omd-reference-parity": projection.parity,
      },
    },
  );
}
