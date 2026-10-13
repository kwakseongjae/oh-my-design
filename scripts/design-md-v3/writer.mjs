// The single write path for catalog references (spec/design-md-v3.md §12.3: writers emit v3 only).
//
// Reference tools keep working on the legacy-shaped source readReferenceSource returns — the same
// frontmatter shape they always edited — and hand the edited text here. It is converted to v3
// against the current file (keeping the v3-only facts the projection does not carry), checked for
// spec §10 conformance with 0 Google lint errors, and written as DESIGN.md + reference.json, with the
// design-md/ mirror alongside. Nothing is written when a check fails.
//
//   import { renderReference, writeReference } from '../../scripts/design-md-v3/writer.mjs';
//   const md = readReferenceSource(dir).markdown;  // edit md …
//   writeReference(dir, editedMd);
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { convertText, runLint } from './convert-legacy.mjs';
import { parseV3, splitFrontmatter } from '../../web/scripts/lib/design-md-v3.mjs';
import { checkV3 } from '../../web/scripts/lib/design-md-v3-check.mjs';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const yaml = createRequire(path.join(root, 'web/package.json'))('js-yaml');

/** Render without writing. Returns { designMd, sidecarJson, problems }. */
export function renderReference(referenceDir, legacyMarkdown) {
  const designPath = path.join(referenceDir, 'DESIGN.md');
  const sidecarPath = path.join(referenceDir, 'reference.json');
  let previous = null;
  if (fs.existsSync(designPath)) {
    const current = parseV3(fs.readFileSync(designPath, 'utf8'));
    if (current && fs.existsSync(sidecarPath)) previous = { frontmatter: current.frontmatter, sidecar: JSON.parse(fs.readFileSync(sidecarPath, 'utf8')) };
  }
  const fm = yaml.load(splitFrontmatter(legacyMarkdown)?.fmText ?? '', { schema: yaml.JSON_SCHEMA });
  if (!fm?.id || fm.id !== path.basename(referenceDir)) throw new Error(`${referenceDir}: frontmatter id '${fm?.id}' does not match the directory`);
  const { designMd, sidecar } = convertText(legacyMarkdown, { previous });
  const problems = checkV3({ text: designMd, sidecar, lint: runLint(designMd) });
  return { designMd, sidecarJson: `${JSON.stringify(sidecar, null, 2)}\n`, problems };
}

export function writeReference(referenceDir, legacyMarkdown, { mirror = true } = {}) {
  const { designMd, sidecarJson, problems } = renderReference(referenceDir, legacyMarkdown);
  if (problems.length) throw new Error(`${path.basename(referenceDir)}: not written — ${problems.join('; ')}`);
  const targets = [referenceDir];
  if (mirror) targets.push(path.join(root, 'design-md', path.basename(referenceDir)));
  for (const dir of targets) {
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'DESIGN.md'), designMd);
    fs.writeFileSync(path.join(dir, 'reference.json'), sidecarJson);
  }
  return { designMd, sidecarJson };
}
