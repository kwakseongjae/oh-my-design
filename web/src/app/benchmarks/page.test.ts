import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import BenchmarksPage from "./page";

describe("/benchmarks", () => {
  const html = renderToStaticMarkup(BenchmarksPage());

  it("renders the claim boundary before the comparison", () => {
    expect(html).toContain("Internal evidence");
    expect(html).toContain("Not a leaderboard");
    expect(html).toContain("Three tracks. No blended winner.");
  });

  it("renders the denominator, uncertainty, and known loss", () => {
    expect(html).toContain("Portable workflow");
    expect(html).toContain("Bounded repair harness");
    expect(html).toContain("95% interval; includes zero");
    expect(html).toContain("operations-t3-harness");
    expect(html).toContain("1 candidate loss");
  });

  it("renders failure recovery and publication gates", () => {
    expect(html).toContain("A real failure stayed visible");
    expect(html).toContain("A fresh run proved the recovery");
    expect(html).toContain("Internal is a stage, not a softer word for verified.");
    expect(html).toContain("24+ tasks");
  });

  it("keeps activation after method and source inspection", () => {
    const methodIndex = html.indexOf('id="method"');
    const sourcesIndex = html.indexOf("Inspect the source, not just the chart.");
    const activationIndex = html.indexOf("Inspect first. Then continue in your own project.");

    expect(methodIndex).toBeGreaterThan(-1);
    expect(sourcesIndex).toBeGreaterThan(methodIndex);
    expect(activationIndex).toBeGreaterThan(sourcesIndex);
    expect(html).toContain('href="/docs/en/demo#runbook"');
    expect(html).toContain('href="/builder"');
    expect(html).toContain("This result remains Internal.");
    expect(html).toContain("$ npx oh-my-design-cli@latest");
    expect(html).toContain("Copy Terminal command");
  });
});
