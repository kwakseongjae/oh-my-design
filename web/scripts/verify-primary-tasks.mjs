#!/usr/bin/env node
/**
 * verify-primary-tasks.mjs — drafted primary tasks, checked before they touch a reference.
 *
 * Two defects are already on record from the first pass and this exists to stop
 * both from reaching disk again:
 *
 *  1. **Surface conflation.** Two baemin tasks cited real components and then
 *     described errands on woowahan.com — a font download, an app-install card —
 *     rather than anything a person does in the product. A quote check alone
 *     passes that: the quote was real. So a citation drawn from a marketing
 *     surface is rejected, and the reference's own `verification_v2.surfaces`
 *     says which surfaces those are.
 *  2. **Cited but not a task.** An earlier attempt to lift tasks mechanically
 *     out of `Personas` produced "Jobseekers." — a real line naming a *who*,
 *     not a *doing*. So a task must begin with a verb.
 *
 * Every check is mechanical and refuses rather than repairs. A draft that fails
 * is reported with its reference and reason; nothing is silently dropped, and
 * nothing is rewritten to fit.
 *
 * usage:
 *   node scripts/verify-primary-tasks.mjs --from <tasks.json> [--json]
 *
 *   tasks.json: { "<id>": { "tasks": [{ "text": "...", "quote": "...", "section": "..." }] } }
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const WEB = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const REFS = join(WEB, "references");

/** A quote short enough to hit by accident proves nothing. */
const MIN_QUOTE_WORDS = 8;

/**
 * Openers that describe a state or a category rather than an action. A task is
 * something a person does, so it starts with a bare verb; these are the shapes
 * that slip past "starts with a word" and mean nothing as an outcome.
 */
const NON_VERB_OPENERS = new Set([
  "a", "an", "the", "this", "that", "these", "those", "it", "they", "there",
  "users", "user", "people", "person", "customers", "customer", "someone",
  "is", "are", "was", "were", "has", "have", "had", "can", "will", "should",
  "and", "or", "but", "for", "with", "without", "in", "on", "at", "by", "of",
]);

/**
 * The observed defect is a gerund standing in for an action — "Downloading the
 * brand font" — so `-ing` is the pattern worth catching.
 *
 * The suffixes that were here with it are not: `-ment`, `-ion`, `-ness` and
 * `-ance` all front perfectly good verbs (Implement, Document, Question,
 * Mention, Witness, Refinance), and "Refinance a high-rate loan into a
 * lower-rate one" — a correct task — was rejected by them. A check that throws
 * away real work to catch a hypothetical is worse than no check; the opener
 * list and the five-word floor already carry most of this weight.
 */
const GERUND_OPENER = /ing$/i;

/** Verbs that happen to end in `-ing`. Short list because the set is short. */
const ING_VERBS = new Set(["bring", "sing", "ring", "cling", "fling", "sting", "string", "swing", "wring"]);

/**
 * Agents hand back JSON with HTML entities in it — "1. Visual Theme &amp;
 * Atmosphere" — because that is how the heading looked wherever they read it.
 * Decoding here rather than rejecting keeps a real quote from failing on an
 * ampersand, while everything that actually matters still has to match.
 */
function normalise(text) {
  return String(text)
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/\s+/g, " ")
    .trim();
}

/** Which surfaces of a reference are marketing rather than product. */
function marketingSurfaceIds(markdown) {
  const ids = new Set();
  for (const line of markdown.split("\n")) {
    const match = /^\s*-\s*\{\s*id:\s*([A-Za-z0-9._-]+),\s*kind:\s*([a-z-]+)/.exec(line);
    if (match && match[2] === "marketing") ids.add(match[1]);
  }
  return ids;
}

/**
 * The body of a section, by heading. Used to locate a quote's claimed home and
 * to tell a product section from a marketing one.
 */
function sectionsOf(markdown) {
  const fenceEnd = markdown.indexOf("\n---\n", 4);
  const body = fenceEnd >= 0 ? markdown.slice(fenceEnd + 5) : markdown;
  const out = new Map();
  for (const chunk of body.split(/\n(?=## )/)) {
    const heading = normalise((chunk.split("\n")[0] ?? "").replace(/^##\s*/, ""));
    if (heading) out.set(heading, chunk);
  }
  return out;
}

export const notes = [];

export function verifyReference(id, draft) {
  const designPath = join(REFS, id, "DESIGN.md");
  const problems = [];
  if (!existsSync(designPath)) return [{ id, check: "reference", detail: "no DESIGN.md" }];

  const markdown = readFileSync(designPath, "utf8");
  const flat = normalise(markdown);
  const marketing = marketingSurfaceIds(markdown);
  const sections = sectionsOf(markdown);

  const tasks = Array.isArray(draft?.tasks) ? draft.tasks : null;
  if (!tasks) return [{ id, check: "shape", detail: "no tasks array" }];
  // The floor was three until `hyundaicard` came back with two and said why:
  // that reference scopes itself to a product home and two corporate-information
  // routes — its own §1 states that the cultural and marketing surfaces "were
  // not used to fill product tokens in this reference" — so it supports exactly
  // two journeys. A third would have been one journey split in half, or the
  // "sign in" task the drafter wrote and then dropped because its only support
  // was a sentence about a password field's typeface.
  //
  // A floor that forces a third task manufactures one. Two is the real floor;
  // anything below it is a draft that gave up rather than a document that is
  // thin. Low counts are printed rather than swallowed, so "this reference only
  // supports two" stays a visible claim someone can disagree with.
  if (tasks.length < 2 || tasks.length > 6) {
    problems.push({ id, check: "count", detail: `${tasks.length} tasks (want 2-6)` });
  } else if (tasks.length === 2) {
    notes.push({ id, note: `only 2 tasks${draft?.note ? ` — ${draft.note}` : ""}` });
  }

  const seen = new Set();
  for (const task of tasks) {
    const text = normalise(task?.text ?? "");
    const quote = normalise(task?.quote ?? "");
    const label = text.slice(0, 48);

    // 1 — the quote is really in the document, verbatim, and long enough to mean it.
    if (quote.split(" ").length < MIN_QUOTE_WORDS) {
      problems.push({ id, check: "quote-short", detail: `"${quote}" (<${MIN_QUOTE_WORDS} words) for "${label}"` });
    } else if (!flat.includes(quote)) {
      problems.push({ id, check: "quote-absent", detail: `not in DESIGN.md: "${quote.slice(0, 70)}…" for "${label}"` });
    }

    // 2 — it did not come from a marketing surface.
    const home = task?.section ? sections.get(normalise(task.section)) : null;
    if (home && /kind:\s*marketing/.test(home) && !/kind:\s*(?:product-surface|design-system|official-doc)/.test(home)) {
      problems.push({ id, check: "surface", detail: `section "${task.section}" is marketing-only for "${label}"` });
    }
    // There was a second surface check here that looked for a marketing
    // surface's id inside the quote. Surface ids are words — `home`, `web`,
    // `app` — so it rejected "Move between the home, partner solutions, and
    // pricing" because the word "home" appears in it. A substring of a common
    // noun is not a citation, and the check threw away correct tasks to catch
    // nothing. What actually stopped the baemin defect was telling the drafter
    // which surface to write about; the section check above is the mechanical
    // half, and it works on the structure rather than on a word.

    // 3 — it is a doing, not a who or a what. "Jobseekers." clears a verb test
    // by accident (it is neither a listed opener nor a gerund) and is stopped
    // here instead: an outcome someone can complete takes more than two words.
    if (text.split(/\s+/).filter(Boolean).length < 5) {
      problems.push({ id, check: "too-short", detail: `"${label}" is not a sentence` });
    }
    const first = (text.split(/\s+/)[0] ?? "").toLowerCase().replace(/[^a-z]/g, "");
    if (!first) {
      problems.push({ id, check: "verb", detail: `empty task text` });
    } else if (NON_VERB_OPENERS.has(first) || (GERUND_OPENER.test(first) && !ING_VERBS.has(first))) {
      problems.push({ id, check: "verb", detail: `"${label}" does not start with a verb` });
    }

    // 4 — no two tasks saying the same thing.
    const key = text.toLowerCase();
    if (seen.has(key)) problems.push({ id, check: "duplicate", detail: `"${label}"` });
    seen.add(key);
  }
  return problems;
}

const argv = process.argv.slice(2);
const fromIdx = argv.indexOf("--from");
if (fromIdx < 0) {
  console.error("usage: verify-primary-tasks.mjs --from <tasks.json> [--json]");
  process.exit(2);
}
const drafts = JSON.parse(readFileSync(argv[fromIdx + 1], "utf8"));
const all = [];
for (const [id, draft] of Object.entries(drafts)) all.push(...verifyReference(id, draft));

// `apply-primary-tasks.mjs` takes bare strings, and the drafts carry the quote
// that justifies each one. Emitting the apply shape from here — and only for
// references with no problems — means an unverified sentence has no path to a
// reference file. The draft file stays the record of what was written from what.
const emitIdx = argv.indexOf("--emit");
if (emitIdx >= 0) {
  const bad = new Set(all.map((problem) => problem.id));
  const clean = {};
  for (const [id, draft] of Object.entries(drafts)) {
    if (bad.has(id)) continue;
    clean[id] = draft.tasks.map((task) => normalise(task.text));
  }
  writeFileSync(argv[emitIdx + 1], `${JSON.stringify(clean, null, 2)}\n`);
  console.log(`[verify-primary-tasks] emitted ${Object.keys(clean).length} clean reference(s) → ${argv[emitIdx + 1]}`);
}

const byCheck = new Map();
for (const problem of all) byCheck.set(problem.check, (byCheck.get(problem.check) ?? 0) + 1);
const rejected = new Set(all.map((problem) => problem.id));

if (argv.includes("--json")) {
  console.log(JSON.stringify({ problems: all, rejectedIds: [...rejected] }, null, 2));
} else {
  const total = Object.keys(drafts).length;
  console.log(`[verify-primary-tasks] ${total} drafted · ${total - rejected.size} clean · ${rejected.size} rejected`);
  for (const entry of notes) console.log(`   ! ${entry.id}: ${entry.note}`);
  for (const [check, count] of [...byCheck].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${String(count).padStart(4)}  ${check}`);
  }
  for (const problem of all.slice(0, 25)) console.log(`   - ${problem.id} [${problem.check}] ${problem.detail}`);
  if (all.length > 25) console.log(`   … ${all.length - 25} more`);
}
process.exit(all.length ? 1 : 0);
