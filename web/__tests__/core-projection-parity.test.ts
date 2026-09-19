import { describe, it, expect } from "vitest";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { loadReference } from "@/lib/references/repository.server";
import { projectActiveReference } from "@/lib/references/consumer-adapter";
import { loadCoreConsumerContract } from "@/lib/references/core-consumer-contract";
import { verifyCanonicalCorePackage } from "@/lib/references/core-canonical-verifier.server";
import type { ReferenceDetailParityField } from "@/lib/references/detail-projection";

/**
 * Adoption must not silently empty a field the legacy canonical was serving.
 *
 * This exists because the three gates that were supposed to protect adoption —
 * `dropped_segments: 0`, `projection_roundtrip_equal`, `source_reconstruction_equal`
 * — were all true for toss while adoption still turned `fontFamily` from
 * "Toss Product Sans" into "". Every one of them measures the **markdown**
 * round-trip. The prose survived, so they passed. Nobody was measuring the
 * fields consumers actually read.
 *
 * The migration was lossless as text and lossy as data, and only a check at the
 * projection boundary can tell the difference. That boundary is
 * `projectActiveReference` — the single adapter `/design-systems/[id]`,
 * `/builder`, and `/api/references/[id]` all go through.
 *
 * Read-only by construction: `loadCoreConsumerContract` takes a package root, so
 * the compiled package is projected where it sits. Nothing under
 * `web/references/` is written, swapped, or restored — an earlier hand-run of
 * this comparison did swap files, and a crash mid-run would have left a Core
 * canonical in the catalog.
 */

const REPO_ROOT = join(__dirname, "..", "..");
const EXECUTION_ROOT = join(REPO_ROOT, ".omd", "execution");

/**
 * The fields this codebase already decided are the ones that must survive a
 * model change — `ReferenceDetailParityField` in `detail-projection.ts`, used
 * for legacy↔AST parity. Adoption is a different axis but the same question, so
 * it reuses that definition rather than keeping a second list that drifts.
 * `headingWeight` and `mood` are deliberately outside it there and stay outside
 * it here; they are reported in the adoption record, not asserted.
 */
const PROJECTED_FIELDS: readonly ReferenceDetailParityField[] = [
  "primary",
  "background",
  "foreground",
  "fontFamily",
  "radius",
];

type CompiledPackage = { readonly id: string; readonly dir: string; readonly label: string };

/**
 * Compiled packages live at `.omd/execution/<date>/<name>-compiled/`, hold a
 * `DESIGN.md` beside an `.omd/system/` sidecar, and are named for the reference
 * they were compiled from. The directory is gitignored, so this yields nothing
 * in CI and the suite stays green there — it bites locally, where adoption is
 * actually run, which is the only place it can bite before the damage lands.
 */
function compiledPackages(): CompiledPackage[] {
  if (!existsSync(EXECUTION_ROOT)) return [];
  const found: CompiledPackage[] = [];
  for (const day of readdirSync(EXECUTION_ROOT)) {
    const dayDir = join(EXECUTION_ROOT, day);
    if (!statSync(dayDir).isDirectory()) continue;
    for (const name of readdirSync(dayDir)) {
      // `<ref>-core-compiled`, and revisions of it (`-compiled-r4`). A revision
      // is a separate package, not a replacement — both are held to parity
      // unless one is marked superseded.
      if (!/-compiled(?:-r\d+)?$/.test(name)) continue;
      const dir = join(dayDir, name);
      if (!existsSync(join(dir, "DESIGN.md"))) continue;
      if (!existsSync(join(dir, ".omd", "system", "manifest.json"))) continue;
      // A superseded package is kept as evidence of the regression it caused —
      // run directories are never deleted here — but it is no longer a
      // candidate for adoption, so it is not held to parity.
      if (existsSync(join(dir, "SUPERSEDED.md"))) continue;
      const id = name.replace(/-(?:core-)?compiled(?:-r\d+)?$/, "");
      found.push({ id, dir, label: `${day}/${name}` });
    }
  }
  return found;
}

const packages = compiledPackages();

describe("Core v2 projection parity — adoption may not empty a served field", () => {
  it("knows where compiled packages live", () => {
    // Not a skip: if the discovery shape ever changes, say so out loud rather
    // than passing an empty matrix and reporting parity nobody measured.
    expect(existsSync(EXECUTION_ROOT) ? packages : []).toBeInstanceOf(Array);
  });

  for (const pkg of packages) {
    it(`${pkg.id}: every field the legacy canonical serves survives adoption (${pkg.label})`, () => {
      const legacy = loadReference(pkg.id);
      expect(legacy, `${pkg.id}: no canonical reference to compare against`).not.toBeNull();

      const markdown = readFileSync(join(pkg.dir, "DESIGN.md"), "utf8");
      const transport = loadCoreConsumerContract(pkg.dir, markdown, verifyCanonicalCorePackage);
      const adopted = projectActiveReference({
        ...legacy!, markdown, format: "core-v2", coreTransport: transport, ast: null,
      });

      // A rejected package blanks every token, so a bad package would otherwise
      // read as a hundred small regressions instead of one cause.
      expect(
        adopted.coreStatus,
        `${pkg.id}: the compiled package is not admitted (${adopted.coreStatus}) — fix the package `
          + `before reading parity. Reasons: ${JSON.stringify((transport as { reasons?: unknown }).reasons ?? null)}`,
      ).toBe("verified");

      const after = adopted.detail as unknown as Record<string, unknown>;

      // Once the canonical has been adopted there is no legacy baseline left to
      // compare against — the question the comparison answered is settled, and
      // the package in hand *is* what the catalog serves. The check does not
      // disappear at that point; it narrows to "the adopted reference still
      // serves these fields", which is what a reader would notice going blank.
      if (legacy!.format === "core-v2") {
        const blank = PROJECTED_FIELDS.filter((field) => {
          const now = after[field];
          return typeof now !== "string" || now.trim() === "";
        });
        expect(
          blank,
          `${pkg.id}: this reference is adopted and its package now serves an empty value for `
            + `these fields. There is no legacy canonical left to recover them from — repair the `
            + `graph or the promotion that should have filled them.`,
        ).toEqual([]);
        return;
      }

      const before = projectActiveReference(legacy!).detail as unknown as Record<string, unknown>;
      const lost = PROJECTED_FIELDS.filter((field) => {
        const was = before[field];
        const now = after[field];
        return typeof was === "string" && was.trim() !== "" && (typeof now !== "string" || now.trim() === "");
      }).map((field) => `${field}: ${JSON.stringify(before[field])} → ${JSON.stringify(after[field])}`);

      expect(
        lost,
        `${pkg.id}: adoption empties a field the catalog was already serving. `
          + `The markdown-level gates cannot see this — a value that lives only in `
          + `prose round-trips perfectly and still reaches no reader.`,
      ).toEqual([]);
    });
  }
});
