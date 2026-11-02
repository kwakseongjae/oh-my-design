import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { REGISTRY } from "../../data/registry.generated.ts";
import { readReferenceSource } from "../../../scripts/lib/reference-source.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "../../..");
const sha256 = (text: string) => createHash("sha256").update(text).digest("hex");
// Exactly build-reference-ast's corpus algorithm, including its legacy projection.
// Registry iteration also works in a fresh checkout before the ignored AST exists.
const corpusHash = sha256(REGISTRY.map(({ id }) => {
  const { markdown } = readReferenceSource(join(root, "references", id));
  return `${id}\0${sha256(markdown)}`;
}).join("\n"));
const versionSource = readFileSync(join(root, "src/data/version.generated.ts"), "utf8");
const version = versionSource.match(/PKG_VERSION = "([^"]+)"/)?.[1];
if (!version) throw new Error("Missing catalog version");
// The newest verification date in the catalog, not the wall clock: the same catalog must give the same
// answer (spec §4.1), and the commit hook regenerates this file on every commit.
const generated = REGISTRY.map((r) => String(r.verified ?? "")).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)).sort().at(-1);
if (!generated) throw new Error("No verification dates in the registry");
writeFileSync(join(root, "src/lib/mcp/catalog.generated.json"), `${JSON.stringify({
  version,
  reference_ast: corpusHash.slice(0, 12),
  generated,
}, null, 2)}\n`);
console.log(`[mcp-catalog] ${version} (${corpusHash.slice(0, 12)})`);
