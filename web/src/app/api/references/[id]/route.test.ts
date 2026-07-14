import { afterEach, describe, expect, it } from "vitest";
import { GET } from "./route";
import {
  extractLegacyReferenceDetail,
  type ReferenceDetail,
  type ReferenceDetailAstContract,
} from "@/lib/references/detail-projection";
import { loadReference } from "@/lib/references/repository.server";

interface ReferenceDetailResponse extends ReferenceDetail {
  readonly referenceAst?: ReferenceDetailAstContract;
  readonly error?: string;
}

const ORIGINAL_FLAG = process.env.REFERENCE_AST_V2;

afterEach(() => {
  if (ORIGINAL_FLAG === undefined) delete process.env.REFERENCE_AST_V2;
  else process.env.REFERENCE_AST_V2 = ORIGINAL_FLAG;
});

async function requestReference(id: string, flag?: string) {
  if (flag === undefined) delete process.env.REFERENCE_AST_V2;
  else process.env.REFERENCE_AST_V2 = flag;

  const response = await GET(
    new Request(`http://localhost/api/references/${id}`),
    { params: Promise.resolve({ id }) },
  );
  const body = await response.json() as ReferenceDetailResponse;
  return { response, body };
}

describe.sequential("GET /api/references/[id] AST contract", () => {
  it("uses the AST model by default and separates Toss brand/UI color", async () => {
    const { response, body } = await requestReference("toss");
    const contract = body.referenceAst;

    expect(response.status).toBe(200);
    expect(response.headers.get("x-omd-reference-model")).toBe("ast-v1");
    expect(contract).toBeDefined();
    expect(contract?.schemaVersion).toBe(1);
    expect(contract?.quality.status).toBe("verified_v2");
    expect(contract?.foundations.brandColor).toMatchObject({
      value: "#0064ff",
      claimPath: "primary_color",
    });
    expect(contract?.foundations.primary).toMatchObject({
      value: "#3182f6",
      claimPath: "tokens.colors.primary",
      origin: "frontmatter",
      confidence: "high",
    });
    expect(contract?.tokens.colors.primary).toMatchObject({
      value: "#3182f6",
      claimPath: "tokens.colors.primary",
    });
    expect(contract?.compatibilityFallbacks).toEqual([]);
    expect(contract?.evidence).toMatchObject({
      schemaVersion: 2,
      checkedAt: "2026-07-11",
      conflictCount: 0,
    });
    expect(contract?.evidence?.sources).toHaveLength(5);
    expect(contract?.evidence?.claims.find((claim) => claim.claimPath === "tokens.colors.primary")).toMatchObject({
      surfaceId: "tds-button",
      sourceId: "tds-button-live",
      method: "computed-style-and-official-doc",
      capturedAt: "2026-07-11",
      confidence: "high",
    });

    expect(body.primary).toBe("#3182f6");
    expect(body.background).toBe("#ffffff");
    expect(body.foreground).toBe("#191f28");
    expect(body.fontFamily).toBe("Toss Product Sans");
    expect(body.radius).toBe("6px");

    const differences = contract?.parity.differences ?? [];
    expect(response.headers.get("x-omd-reference-parity")).toBe(
      differences.length === 0 ? "match" : `diff:${differences.length}`,
    );
  });

  it("projects Baemin's official WORK family while preserving verified groups", async () => {
    const { body } = await requestReference("baemin", "1");

    expect(body.primary).toBe("#0cefd3");
    expect(body.background).toBe("#ffffff");
    expect(body.foreground).toBe("#222222");
    expect(body.fontFamily).toBe("BAEMINWORK");
    expect(body.radius).toBe("8px");
    expect(body.referenceAst?.quality.status).toBe("verified_v2");
    expect(body.referenceAst?.foundations.uiFont?.value).toBe("BAEMINWORK");
    expect(body.referenceAst?.foundations.monoFont).toBeNull();
    expect(body.referenceAst?.foundations.brandFont).toBeNull();
    expect(body.referenceAst?.tokens.typography.families.ui?.value).toBe("BAEMINWORK");
    expect(Object.keys(body.referenceAst?.tokens.typography.tiers ?? {})).toHaveLength(8);
    expect(Object.keys(body.referenceAst?.tokens.components ?? {})).toHaveLength(7);
  });

  it("does not promote Dcard's low-confidence radius into the detail projection", async () => {
    const { body } = await requestReference("dcard", "true");

    expect(body.radius).toBe("");
    expect(body.referenceAst?.foundations.radius).toMatchObject({
      value: "8px",
      claimPath: "tokens.rounded.md",
    });
  });

  it.each(["0", "false", "off"])("restores the exact legacy payload when REFERENCE_AST_V2=%s", async (flag) => {
    const loaded = loadReference("toss");
    if (!loaded) throw new Error("toss fixture is missing");
    const expected = JSON.parse(JSON.stringify(extractLegacyReferenceDetail("toss", loaded.markdown))) as ReferenceDetail;

    const { response, body } = await requestReference("toss", flag);

    expect(response.headers.get("x-omd-reference-model")).toBe("legacy");
    expect(response.headers.get("x-omd-reference-parity")).toBeNull();
    expect(body).toEqual(expected);
    expect(body.referenceAst).toBeUndefined();
  });

  it("returns 404 for an unregistered reference without resolving a filesystem path", async () => {
    const { response, body } = await requestReference("../../package.json");

    expect(response.status).toBe(404);
    expect(body.error).toBe("Reference not found");
  });
});
