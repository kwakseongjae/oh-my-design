/**
 * No "use client" module may (transitively) import the generated catalog data.
 *
 * Each client entry that reaches registry.generated.ts gets its own copy of it
 * in the client bundle (~530 KB gz). On 2026-10-01 the builder, the catalog
 * index and the catalog detail each carried one, so a visitor browsing
 * directory → detail → builder downloaded the registry three times. Turbopack
 * has no switch to force a shared chunk; the fix is structural — server
 * components and API routes read the registry and pass clients only the slice
 * they render (see lib/logo-urls.ts, design-systems/page.tsx,
 * api/references/[id]/catalog.ts). This test keeps it that way.
 */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { describe, expect, it } from "vitest";

const SRC = resolve(__dirname, "..");

const FORBIDDEN = [
  "data/registry.generated.ts",
  "data/reference-quality.generated.ts",
  "data/reference-verification.generated.ts",
  "data/reference-ast.generated.json",
];

function walk(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(ts|tsx)$/.test(name) && !/\.test\.tsx?$/.test(name)) out.push(p);
  }
  return out;
}

function resolveImport(from: string, spec: string): string | null {
  let base: string;
  if (spec.startsWith("@/")) base = join(SRC, spec.slice(2));
  else if (spec.startsWith(".")) base = resolve(dirname(from), spec);
  else return null; // package import
  for (const candidate of [base, `${base}.ts`, `${base}.tsx`, join(base, "index.ts"), join(base, "index.tsx")]) {
    if (existsSync(candidate) && statSync(candidate).isFile()) return candidate;
  }
  return null;
}

/** Value imports/re-exports only — `import type` / `export type` are erased. */
function valueImports(file: string): string[] {
  const text = readFileSync(file, "utf8");
  const specs: string[] = [];
  const re = /^\s*(import|export)\s+(type\s+)?(?:[^'"]*?\s+from\s+)?["']([^"']+)["']/gm;
  for (const m of text.matchAll(re)) {
    if (m[2]) continue;
    specs.push(m[3]);
  }
  return specs;
}

describe("client bundle boundary", () => {
  it("no client component reaches the generated registry / quality data", () => {
    const files = walk(SRC);
    const clientEntries = files.filter((f) => /^\s*["']use client["']/.test(readFileSync(f, "utf8")));
    expect(clientEntries.length).toBeGreaterThan(10);

    const violations: string[] = [];
    for (const entry of clientEntries) {
      const seen = new Map<string, string | null>([[entry, null]]);
      const queue = [entry];
      while (queue.length) {
        const cur = queue.shift()!;
        for (const spec of valueImports(cur)) {
          const target = resolveImport(cur, spec);
          if (!target || seen.has(target)) continue;
          seen.set(target, cur);
          const rel = relative(SRC, target);
          if (FORBIDDEN.includes(rel)) {
            const chain = [rel];
            for (let p: string | null | undefined = cur; p; p = seen.get(p)) chain.unshift(relative(SRC, p));
            violations.push(chain.join(" → "));
            continue;
          }
          queue.push(target);
        }
      }
    }
    expect(violations).toEqual([]);
  });
});
