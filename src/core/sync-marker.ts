import { createHash } from 'node:crypto';

export interface ManagedBlock {
  version: number;
  hash: string;
  content: string;
  rawStart: number;
  rawEnd: number;
}

export interface WriteBlockResult {
  updated: string;
  hash: string;
}

const BLOCK_RE =
  /<!-- omd:start v=(\d+) hash=([a-f0-9]+) -->\n?([\s\S]*?)\n?<!-- omd:end -->/;

export function hashContent(content: string): string {
  return createHash('sha256').update(content, 'utf8').digest('hex').slice(0, 12);
}

export function parseBlock(fileContent: string): ManagedBlock | null {
  const m = BLOCK_RE.exec(fileContent);
  if (!m) return null;
  return {
    version: Number(m[1]),
    hash: m[2],
    content: m[3],
    rawStart: m.index,
    rawEnd: m.index + m[0].length,
  };
}

export function hasDrift(block: ManagedBlock): boolean {
  return hashContent(block.content) !== block.hash;
}

export function writeBlock(
  fileContent: string,
  managedContent: string,
  version: number
): WriteBlockResult {
  const hash = hashContent(managedContent);
  const block = `<!-- omd:start v=${version} hash=${hash} -->\n${managedContent}\n<!-- omd:end -->`;

  const existing = parseBlock(fileContent);
  if (existing) {
    const updated =
      fileContent.slice(0, existing.rawStart) +
      block +
      fileContent.slice(existing.rawEnd);
    return { updated, hash };
  }

  if (fileContent === '') {
    return { updated: block + '\n', hash };
  }

  const sep = fileContent.endsWith('\n\n')
    ? ''
    : fileContent.endsWith('\n')
      ? '\n'
      : '\n\n';
  return { updated: fileContent + sep + block + '\n', hash };
}
