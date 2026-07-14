import { describe, expect, it } from "vitest";
import { GET } from "./route";

describe("reference evolution artifact", () => {
  it("exports a grounded markdown artifact for an editorially reviewed reference", async () => {
    const response = await GET(new Request("http://localhost/api/reference-evolution/toss"), {
      params: Promise.resolve({ id: "toss" }),
    });
    const body = await response.text();
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toContain("text/markdown");
    expect(body).toContain("# Toss Reference Evolution");
    expect(body).toContain("Previous snapshot");
    expect(body).toContain("Verified v2");
    expect(body).toContain("79/79 claims");
  });

  it("does not synthesize an artifact for an uncurated reference", async () => {
    const response = await GET(new Request("http://localhost/api/reference-evolution/11st"), {
      params: Promise.resolve({ id: "11st" }),
    });
    expect(response.status).toBe(404);
  });
});
