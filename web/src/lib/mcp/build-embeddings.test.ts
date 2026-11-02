import { afterEach, expect, it, vi } from "vitest";
import { REGISTRY } from "@/data/registry.generated";
import { embedCatalog, embedTextFor } from "../../../scripts/build-embeddings.mjs";
import { CATALOG } from "./contracts";

afterEach(() => vi.restoreAllMocks());

it("embeds registry identity and only the first Overview paragraph, matching v2 keyword fields", () => {
  const entry = REGISTRY.find(({ id }) => id === "toss")!;
  const markdown = "---\nname: Wrong frontmatter name\n---\n# Title\n\n## Overview\n\n### Brand\n\nFirst paragraph\ncontinues here.\n\nSecond paragraph excluded.\n\n## Colors\n\nColor prose excluded.\n";
  expect(embedTextFor(entry, markdown)).toBe("toss\nToss\n토스\nKR\nfintech\nFirst paragraph\ncontinues here.");
  expect(embedTextFor({ ...entry, displayName: "Latin name" }, "## Colors\n\nNo Overview.\n"))
    .toBe("toss\nToss\nKR\nfintech");
});

it("records the model, dimension and catalog hash and maps out-of-order vectors to every id across batches", async () => {
  vi.spyOn(console, "log").mockImplementation(() => {});
  const items = Array.from({ length: 51 }, (_, i) => ({ id: `ref-${i}`, text: `Reference ${i}` }));
  const request = vi.fn(async (_url: string | URL | Request, init?: RequestInit) => {
    const body = JSON.parse(init!.body as string);
    return Response.json({ data: body.input.map((_: string, index: number) => ({ index, embedding: [index + 1, 1] })).reverse() });
  });
  const result = await embedCatalog(items, { model: "baai/bge-m3", reference_ast: CATALOG.reference_ast, key: "test-only", request });
  expect(result).toMatchObject({ model: "baai/bge-m3", dim: 2, reference_ast: CATALOG.reference_ast, generated: expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/) });
  expect(Object.keys(result.vectors)).toEqual(items.map(({ id }) => id));
  expect(result.vectors).toMatchObject({ "ref-0": [1, 1], "ref-49": [50, 1], "ref-50": [1, 1] });
  expect(request).toHaveBeenCalledTimes(2);
  expect(request.mock.calls.map(([, init]) => JSON.parse(init!.body as string).input.length)).toEqual([50, 1]);
  for (const [, init] of request.mock.calls) expect(JSON.parse(init!.body as string).model).toBe("baai/bge-m3");
});

it.each([
  { data: [] }, { data: [{ index: 1, embedding: [1, 0] }] },
  { data: [{ index: 0, embedding: [0, 0] }] }, { data: [{ index: 0, embedding: [null, 1] }] },
])("rejects incomplete or invalid vectors before any file can be replaced: %j", async ({ data }) => {
  const request = vi.fn(async () => Response.json({ data }));
  await expect(embedCatalog([{ id: "toss", text: "Toss" }], { model: "baai/bge-m3", reference_ast: CATALOG.reference_ast, key: "test-only", request }))
    .rejects.toThrow();
});

it("rejects dimension drift between batches", async () => {
  vi.spyOn(console, "log").mockImplementation(() => {});
  const items = Array.from({ length: 51 }, (_, i) => ({ id: `ref-${i}`, text: "text" }));
  const request = vi.fn(async (_url: string | URL | Request, init?: RequestInit) => {
    const { input } = JSON.parse(init!.body as string);
    return Response.json({ data: input.map((_: string, index: number) => ({ index, embedding: input.length === 50 ? [1, 0] : [1, 0, 0] })) });
  });
  await expect(embedCatalog(items, { model: "baai/bge-m3", reference_ast: CATALOG.reference_ast, key: "test-only", request }))
    .rejects.toThrow("Invalid embedding vectors");
});
