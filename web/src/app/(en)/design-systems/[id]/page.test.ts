import { describe, expect, it } from "vitest";
import { generateMetadata } from "./page";

describe("English canonical reference metadata", () => {
  it("publishes the reviewed Toss summary, hreflang, and verified OG card", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ id: "toss" }) });
    expect(metadata.description).toContain("Toss Product Sans");
    expect(metadata.alternates?.canonical).toBe("/design-systems/toss");
    expect(metadata.alternates?.languages).toEqual({
      en: "/design-systems/toss",
      "x-default": "/design-systems/toss",
    });
    expect(metadata.openGraph && "images" in metadata.openGraph ? metadata.openGraph.images : []).toBeTruthy();
  });
});
