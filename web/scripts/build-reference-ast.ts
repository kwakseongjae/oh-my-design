#!/usr/bin/env node
import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { REGISTRY } from "../src/data/registry.generated.ts";
import { REFERENCE_QUALITY_BY_ID } from "../src/data/reference-quality.generated.ts";
import { REFERENCE_VERIFICATION_BY_ID } from "../src/data/reference-verification.generated.ts";
import {
  normalizeReference,
  selectReferenceFoundations,
} from "../src/lib/references/normalize.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = resolve(__dirname, "..");
const REFS_DIR = join(WEB_ROOT, "references");
const OUT_FILE = join(WEB_ROOT, "src", "data", "reference-ast.generated.json");
const CHECK = process.argv.includes("--check");

function sha256(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

const references = REGISTRY.map((entry) => {
  const quality = REFERENCE_QUALITY_BY_ID[entry.id];
  if (!quality) throw new Error(`quality manifest is missing ${entry.id}`);
  const designPath = join(REFS_DIR, entry.id, "DESIGN.md");
  if (!existsSync(designPath)) throw new Error(`canonical DESIGN.md is missing: ${entry.id}`);
  const markdown = readFileSync(designPath, "utf8");
  const ast = normalizeReference({
    entry,
    quality,
    markdown,
    verificationV2: REFERENCE_VERIFICATION_BY_ID[entry.id],
  });
  return {
    schemaVersion: ast.schemaVersion,
    contentHash: sha256(markdown),
    identity: ast.identity,
    quality: ast.quality,
    // Keep the portable bundle lean: raw DTCG-lite tokens are already typed by
    // the registry, while provenance is carried by canonical foundations. The
    // full recursive AST and exhaustive claim index stay server-side.
    tokens: entry.tokens ?? null,
    sections: ast.document.sections,
    foundations: selectReferenceFoundations(ast),
  };
});

const corpusHash = sha256(
  references.map((reference) => `${reference.identity.id}\0${reference.contentHash}`).join("\n"),
);
const manifest = {
  schemaVersion: 1,
  generatedFrom: "web/references",
  count: references.length,
  corpusHash,
  references,
};
const output = `${JSON.stringify(manifest)}\n`;

if (CHECK) {
  if (!existsSync(OUT_FILE) || readFileSync(OUT_FILE, "utf8") !== output) {
    console.error("[reference-ast] generated manifest is stale. Run `npm run build-reference-ast` in web/.");
    process.exit(1);
  }
} else {
  writeFileSync(OUT_FILE, output, "utf8");
  console.log(`[reference-ast] wrote ${references.length} references (${corpusHash.slice(0, 12)})`);
}
