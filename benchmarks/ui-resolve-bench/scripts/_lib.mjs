import { createHash } from "node:crypto";
import {
  copyFileSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

export const benchRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
export const repoRoot = resolve(benchRoot, "../..");

export function parseArgs(argv = process.argv.slice(2)) {
  const values = new Map();
  for (let index = 0; index < argv.length; index += 1) {
    const item = argv[index];
    if (!item.startsWith("--")) continue;
    const next = argv[index + 1];
    if (!next || next.startsWith("--")) {
      values.set(item.slice(2), true);
      continue;
    }
    values.set(item.slice(2), next);
    index += 1;
  }
  return values;
}

export function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

export function writeJson(path, value) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

export function sha256(input) {
  return createHash("sha256").update(input).digest("hex");
}

function walkFiles(root, current = root, ignored = new Set()) {
  const output = [];
  for (const name of readdirSync(current).sort()) {
    const absolute = join(current, name);
    const rel = relative(root, absolute).split(sep).join("/");
    if ([...ignored].some((prefix) => rel === prefix || rel.startsWith(`${prefix}/`))) continue;
    const info = lstatSync(absolute);
    if (info.isSymbolicLink()) {
      throw new Error(`symlink is not allowed in a benchmark source: ${absolute}`);
    }
    if (info.isDirectory()) output.push(...walkFiles(root, absolute, ignored));
    else if (info.isFile()) output.push({ absolute, rel, mode: info.mode & 0o777 });
    else throw new Error(`unsupported benchmark source entry: ${absolute}`);
  }
  return output;
}

export function treeManifest(root, { ignore = [] } = {}) {
  if (!existsSync(root) || !statSync(root).isDirectory()) {
    throw new Error(`directory not found: ${root}`);
  }
  const files = walkFiles(root, root, new Set(ignore)).map(({ absolute, rel, mode }) => ({
    path: rel,
    mode,
    bytes: statSync(absolute).size,
    sha256: sha256(readFileSync(absolute)),
  }));
  return {
    files,
    sha256: sha256(files.map((file) => `${file.path}\0${file.mode}\0${file.sha256}`).join("\n")),
  };
}

export function copyReviewedTree(source, destination) {
  if (existsSync(destination)) throw new Error(`destination already exists: ${destination}`);
  mkdirSync(destination, { recursive: true });
  for (const { absolute, rel } of walkFiles(source)) {
    const target = join(destination, rel);
    mkdirSync(dirname(target), { recursive: true });
    copyFileSync(absolute, target);
  }
}

export function assertInside(parent, child) {
  const parentPath = resolve(parent);
  const childPath = resolve(child);
  if (childPath !== parentPath && !childPath.startsWith(`${parentPath}${sep}`)) {
    throw new Error(`path escapes root: ${childPath}`);
  }
  return childPath;
}

export function resetDirectory(path) {
  if (existsSync(path)) rmSync(path, { recursive: true, force: true });
  mkdirSync(path, { recursive: true });
}
