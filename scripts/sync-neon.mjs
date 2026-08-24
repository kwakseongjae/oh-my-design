/**
 * Mirrors the reference catalog into Neon Postgres — the site's future serving
 * canon, while GitHub markdown stays the open data channel.
 *
 * Direction of trust, phase P0: git is the source, Neon is the mirror. The
 * sync is idempotent and SHA-diffed — a row updates only when the document's
 * bytes changed, so running it on every main merge costs one SELECT per ref.
 * Both trees ship: the canonical legacy document and, where one exists, the
 * migrated Core v2 body with its provenance sidecar. The site can then flip
 * per-reference between specs without another deploy — which is exactly the
 * adoption rehearsal Neon's branching was chosen for.
 *
 * Fails close without credentials: DATABASE_URL unset → prints provisioning
 * steps and exits 2. Nothing here guesses at a connection.
 *
 *   DATABASE_URL=postgres://... node scripts/sync-neon.mjs --schema   # once
 *   DATABASE_URL=postgres://... node scripts/sync-neon.mjs            # sync
 *   DATABASE_URL=postgres://... node scripts/sync-neon.mjs --dry-run
 */

import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const CANONICAL = join(ROOT, "web", "references");
const MIGRATED = [
  join(ROOT, "docs", "design-md-weight", "migrated"),
  join(ROOT, "docs", "design-md-weight", "golden-samples"),
];

const flag = (n) => process.argv.includes(`--${n}`);
const sha256 = (s) => createHash("sha256").update(s).digest("hex");

const SCHEMA = `
create table if not exists "references" (
  id             text primary key,
  name           text,
  category       text,
  country        text,
  primary_color  text,
  homepage       text,
  frontmatter    jsonb,
  body_md        text not null,
  spec           text not null default 'legacy',   -- 'legacy' | 'core-v2'
  core_v2_md     text,                             -- migrated body, when one exists
  provenance_md  text,                             -- Core v2 sidecar
  source_sha     text not null,                    -- sha256(body_md + core_v2_md + provenance_md)
  updated_at     timestamptz not null default now()
);
create index if not exists references_category_idx on "references" (category);
`;

/** Minimal frontmatter reader — enough for identity columns; jsonb keeps the rest raw. */
function frontmatterOf(markdown) {
  if (!markdown.startsWith("---\n")) return {};
  const close = markdown.indexOf("\n---\n", 4);
  if (close < 0) return {};
  const out = {};
  for (const line of markdown.slice(4, close).split("\n")) {
    const m = /^(\w[\w-]*):\s*"?([^"\n]*)"?\s*$/.exec(line);
    if (m) out[m[1]] = m[2];
  }
  return out;
}

function collectRows() {
  const rows = [];
  for (const id of readdirSync(CANONICAL).sort()) {
    const canonicalPath = join(CANONICAL, id, "DESIGN.md");
    if (!existsSync(canonicalPath)) continue;
    const body = readFileSync(canonicalPath, "utf8");
    const fm = frontmatterOf(body);

    let coreV2 = null, provenance = null;
    for (const root of MIGRATED) {
      const p = join(root, id, "DESIGN.md");
      if (existsSync(p)) {
        coreV2 = readFileSync(p, "utf8");
        const prov = join(root, id, "provenance.md");
        provenance = existsSync(prov) ? readFileSync(prov, "utf8") : null;
        break;
      }
    }

    rows.push({
      id,
      name: fm.name ?? id,
      category: fm.category ?? null,
      country: fm.country ?? null,
      primary_color: fm.primary_color ?? null,
      homepage: fm.homepage ?? null,
      frontmatter: fm,
      body_md: body,
      spec: coreV2 ? "core-v2" : "legacy",
      core_v2_md: coreV2,
      provenance_md: provenance,
      source_sha: sha256(body + (coreV2 ?? "") + (provenance ?? "")),
    });
  }
  return rows;
}

const rows = collectRows();
if (flag("dry-run")) {
  console.log(JSON.stringify({
    total: rows.length,
    coreV2: rows.filter((r) => r.spec === "core-v2").length,
    legacy: rows.filter((r) => r.spec === "legacy").length,
    sample: rows.slice(0, 3).map((r) => ({ id: r.id, spec: r.spec, sha: r.source_sha.slice(0, 12) })),
  }, null, 1));
  process.exit(0);
}

if (!process.env.DATABASE_URL) {
  console.error([
    "DATABASE_URL이 없다 — 아무것도 실행하지 않았다.",
    "  1) https://neon.tech 무료 프로젝트 생성 (0.5GB면 충분 — 카탈로그 전체가 수 MB다)",
    "  2) 연결 문자열 복사 → export DATABASE_URL='postgres://...'",
    "  3) npm i -D @neondatabase/serverless   # HTTP 드라이버, 순수 JS",
    "  4) node scripts/sync-neon.mjs --schema && node scripts/sync-neon.mjs",
  ].join("\n"));
  process.exit(2);
}

let neon;
try {
  ({ neon } = await import("@neondatabase/serverless"));
} catch {
  console.error("드라이버가 없다: npm i -D @neondatabase/serverless 후 재실행.");
  process.exit(2);
}
const sql = neon(process.env.DATABASE_URL);

if (flag("schema")) {
  for (const stmt of SCHEMA.split(";").map((s) => s.trim()).filter(Boolean)) {
    await sql.query(stmt);
  }
  console.log(JSON.stringify({ schema: "applied" }));
  process.exit(0);
}

const existing = new Map(
  (await sql`select id, source_sha from "references"`).map((r) => [r.id, r.source_sha]),
);
let inserted = 0, updated = 0, unchanged = 0;
for (const r of rows) {
  const prior = existing.get(r.id);
  if (prior === r.source_sha) { unchanged++; continue; }
  await sql`
    insert into "references" (id, name, category, country, primary_color, homepage, frontmatter,
                              body_md, spec, core_v2_md, provenance_md, source_sha, updated_at)
    values (${r.id}, ${r.name}, ${r.category}, ${r.country}, ${r.primary_color}, ${r.homepage},
            ${JSON.stringify(r.frontmatter)}::jsonb, ${r.body_md}, ${r.spec}, ${r.core_v2_md},
            ${r.provenance_md}, ${r.source_sha}, now())
    on conflict (id) do update set
      name = excluded.name, category = excluded.category, country = excluded.country,
      primary_color = excluded.primary_color, homepage = excluded.homepage,
      frontmatter = excluded.frontmatter, body_md = excluded.body_md, spec = excluded.spec,
      core_v2_md = excluded.core_v2_md, provenance_md = excluded.provenance_md,
      source_sha = excluded.source_sha, updated_at = now()`;
  if (prior === undefined) inserted++; else updated++;
}
console.log(JSON.stringify({ total: rows.length, inserted, updated, unchanged }, null, 1));
