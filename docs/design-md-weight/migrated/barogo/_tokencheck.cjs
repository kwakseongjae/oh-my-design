const fs = require("fs");
const legacy = fs.readFileSync("web/references/barogo/DESIGN.md", "utf8");
const doc = fs.readFileSync("docs/design-md-weight/migrated/barogo/DESIGN.md", "utf8");
const provenance = fs.readFileSync("docs/design-md-weight/migrated/barogo/provenance.md", "utf8");
const all = doc + provenance;
const TOKEN_PATTERNS = [
  ["hex", /#[0-9a-fA-F]{6}\b/g],
  ["px", /\b\d+(?:\.\d+)?px\b/g],
  ["rem", /\b\d+(?:\.\d+)?rem\b/g],
  ["ms", /\b\d+ms\b/g],
  ["pct", /\b\d+(?:\.\d+)?%/g],
];
function tokenBag(text) {
  const out = new Map();
  for (const [kind, re] of TOKEN_PATTERNS) {
    for (const m of text.matchAll(re)) {
      const k = `${kind}:${m[0].toLowerCase()}`;
      out.set(k, (out.get(k) ?? 0) + 1);
    }
  }
  return out;
}
const lt = tokenBag(legacy), nt = tokenBag(all);
console.log("LOST", [...lt.keys()].filter((k) => !nt.has(k)));
console.log("INVENTED", [...nt.keys()].filter((k) => !lt.has(k)));
for (const r of ["1.33", "1.43", "1.0"]) console.log("ratio", r, all.includes(r));
for (const t of ["button", "card", "tab", "listItem"]) {
  console.log("type", t, (all.match(new RegExp("\\b" + t + "\\b", "gi")) || []).length);
}
console.log("cubic", [...all.matchAll(/cubic-bezier\([^)]+\)/g)].map((m) => m[0]));
console.log("FILL", /\[FILL IN/.test(doc));
for (const c of ["scope", "primary-tasks", "foundations", "authority", "application-priority", "unknowns", "changes"]) {
  console.log("claim", c, (doc.match(new RegExp("design-md:claim " + c + "\\b", "g")) || []).length);
}
console.log("words", doc.split(/\s+/).length);
console.log("na", doc.match(/not-applicable[^\n]*(?:[Nn]ot (?:captured|named)|미관측|미기록)/g));
const alien = [];
const legacyLower = legacy.toLowerCase();
for (const sentence of doc.match(/[^\n.]*(?:not captured|were not|없었|않았다|미기록)[^\n.]*/g) ?? []) {
  const a = (sentence.match(/[A-Za-z]{5,}/g) ?? [])
    .map((w) => w.toLowerCase())
    .filter((w) => !["captured", "capture", "resolved", "recorded", "verified", "observed", "current", "rules", "state", "states", "support", "because", "during", "cannot", "their", "these", "those", "which", "where"].includes(w))
    .filter((w) => !legacyLower.includes(w));
  if (a.length) alien.push({ a, sentence: sentence.trim().slice(0, 120) });
}
console.log("alien", alien);
console.log("focus-vis hex", doc.match(/focus-visible[^\n]*#[0-9a-fA-F]{6}/gi));
console.log("omd-apply", /omd-apply|\bnpx omd\b|프롬프트를 복사/i.test(doc));
console.log("persona names omitted (D2)");
console.log("favicon url in doc", doc.includes("google.com/s2/favicons"));
console.log("favicon url in prov", provenance.includes("google.com/s2/favicons"));
EOF
