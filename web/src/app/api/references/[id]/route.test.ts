import { afterEach, describe, expect, it } from "vitest";
import { GET } from "./route";
import {
  extractLegacyReferenceDetail,
  type ReferenceDetail,
  type ReferenceDetailAstContract,
} from "@/lib/references/detail-projection";
import { loadReference } from "@/lib/references/repository.server";
import { LEGACY_DISTINCT_BRAND_FIXTURE, LEGACY_PAYLOAD_FIXTURE } from "@/lib/references/legacy-fixtures";

interface ReferenceDetailResponse extends ReferenceDetail {
  readonly referenceAst?: ReferenceDetailAstContract;
  readonly error?: string;
}

const ORIGINAL_FLAG = process.env.REFERENCE_AST_V2;
const ORIGINAL_SOURCE = process.env.OMD_REFS_SOURCE;

afterEach(() => {
  if (ORIGINAL_FLAG === undefined) delete process.env.REFERENCE_AST_V2;
  else process.env.REFERENCE_AST_V2 = ORIGINAL_FLAG;
  if (ORIGINAL_SOURCE === undefined) delete process.env.OMD_REFS_SOURCE;
  else process.env.OMD_REFS_SOURCE = ORIGINAL_SOURCE;
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
  it("uses the AST model by default and keeps brand colour separate from UI primary", async () => {
    const { response, body } = await requestReference(LEGACY_DISTINCT_BRAND_FIXTURE);
    const contract = body.referenceAst;

    expect(response.status).toBe(200);
    expect(response.headers.get("x-omd-reference-model")).toBe("ast-v1");
    expect(contract).toBeDefined();
    expect(contract?.schemaVersion).toBe(1);
    expect(contract?.quality.status).toBe("verified_v2");
    expect(contract?.foundations.brandColor).toMatchObject({
      value: "#000000",
      claimPath: "primary_color",
    });
    expect(contract?.foundations.primary).toMatchObject({
      value: "#0071e3",
      claimPath: "tokens.colors.primary",
      origin: "frontmatter",
      confidence: "high",
    });
    expect(contract?.tokens.colors.primary).toMatchObject({
      value: "#0071e3",
      claimPath: "tokens.colors.primary",
    });
    expect(contract?.compatibilityFallbacks).toEqual([]);
    expect(contract?.evidence).toMatchObject({
      schemaVersion: 2,
      // Moves whenever the fixture reference is re-checked — it tracked 09-17
      // until a component-index source captured on 09-19 was added. The
      // assertion is that the evidence block reaches the API at all; if this
      // date fails again, read the fixture's `verification_v2.checked` and
      // match it rather than assuming a regression.
      checkedAt: "2026-09-19",
      conflictCount: 0,
    });
    // Six: the July marketing capture, its 2026-09-17 state re-verification kept
    // as its own source rather than folded in, the store product page, two Human
    // Interface Guidelines pages, and the 2026-09-19 HIG component index behind
    // the §4 roster. A count that grows when the reference gains a source is
    // working as intended — read the fixture before treating a change here as a
    // regression.
    expect(contract?.evidence?.sources).toHaveLength(6);
    expect(contract?.evidence?.claims.find((claim) => claim.claimPath === "tokens.colors.primary")).toMatchObject({
      surfaceId: "apple-home",
      sourceId: "apple-live",
      method: "computed-style",
      capturedAt: "2026-07-11",
      confidence: "high",
    });

    expect(body.primary).toBe("#0071e3");
    expect(body.background).toBe("#f5f5f7");
    expect(body.foreground).toBe("#1d1d1f");
    expect(body.fontFamily).toBe("SF Pro Text");
    // The AST model serves the declared control radius (`rounded.control`);
    // the prose-derived legacy path used to reach for the 980px marketing pill.
    expect(body.radius).toBe("8px");

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

  it("serves Baemin's active Core preview bytes without legacy-AST mixing", async () => {
    process.env.OMD_REFS_SOURCE = "v2";
    const loaded = loadReference("baemin");
    if (!loaded) throw new Error("baemin fixture is missing");
    const { response, body } = await requestReference("baemin", "1");

    expect(response.headers.get("x-omd-reference-model")).toBe("core-v2");
    expect(response.headers.get("x-omd-reference-source")).toBe("migrated-preview");
    expect(response.headers.get("x-omd-reference-parity")).toBe("core-v2-active");
    expect(body.designMd).toBe(loaded.markdown);
    expect(body.referenceAst).toBeUndefined();
    expect(body).toMatchObject({
      primary: "",
      background: "#ffffff",
      foreground: "#222222",
      fontFamily: "BAEMINWORK",
      radius: "",
    });
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
    const loaded = loadReference(LEGACY_PAYLOAD_FIXTURE);
    if (!loaded) throw new Error(`${LEGACY_PAYLOAD_FIXTURE} fixture is missing`);
    const expected = JSON.parse(
      JSON.stringify(extractLegacyReferenceDetail(LEGACY_PAYLOAD_FIXTURE, loaded.markdown)),
    ) as ReferenceDetail;

    const { response, body } = await requestReference(LEGACY_PAYLOAD_FIXTURE, flag);

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
