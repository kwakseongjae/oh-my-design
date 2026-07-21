import { createHash } from 'node:crypto';

export const CLAUDE_HOOK_PATHS = [
  'skill-activation.cjs',
  'session-state-loader.cjs',
  'post-edit-watch.cjs',
  'session-end-foldin.cjs',
  'lib/preferences-parser.cjs',
  'lib/preferences-writer.cjs',
] as const;

const MARKER_RE = /^\/\/ omd:installed-hook sha256=([0-9a-f]{64})\r?$/m;

const LEGACY_HOOK_HASHES: Record<(typeof CLAUDE_HOOK_PATHS)[number], readonly string[]> = {
  'skill-activation.cjs': [
    '2231898cfa1f187abe96dea3f1c32b1be522eefe6f13fc5cd887e8745da2aff7',
    '3ac226a3cd7d9579d44c0d760fbb5a0b806208132e546c35c0d226dda3552338',
    '94521f10970b5fcf408fb3aa363a896d00328b045f687aa34d3fc93783f1bb9d',
    'e6e551bfdd46906bdd6b4ef955c3152f1b88b10010519d8d7886f39c052834a3',
  ],
  'session-state-loader.cjs': [
    '06f12167efb4fbd56dde586c0cc4a181f873b8e98da986aed2fe67b3eb14a9e6',
    '757860c1ab47e3a74465b51c53438b9a1f964b63ae904699e12a28f20b0db1e2',
    '8982eff72fc5bd4ab78ba152609560d96aaccde1add1506833ca0d47916369f6',
    'e5c62304db69247f7deb2237b9b4c559b65e56c0b9d2a9f095f41fa6598d4f4c',
  ],
  'post-edit-watch.cjs': [
    '6209bd47f9403ec158cfebd66d3e9a00ec19024d62cbac590cf3a977ddf099a1',
    '8f675e4e4b33ac648fca29a934fb2365608c8d8b738a8848e9fafa01ab99cbf5',
    'f471b2b322fbbedf5a1a311819827a55aedcc1cd660617df2b2d130153467974',
    'f9e2f5ba7287405505c8c9d871a10e8c15c37a403dcff4501f72e25b5c0213e2',
  ],
  'session-end-foldin.cjs': [
    '2bc5b9656c2e3891c68c9bb3213af770002727fd354273fbe4b3158c9dd92968',
    'c3055666d94fd6861f8324275ab89477af1c9edce32562a18ebd36e13600db15',
    'c53779b4806cd5d96851f28fc6db6951d3e34713f2439f38048a892c1fb182b5',
  ],
  'lib/preferences-parser.cjs': [
    '44ceaf346dc7238f92f127699d9b985940f77c68a461752d15f10b930ecea4ca',
    'd11bd77a840ff1173299ae573061c3519e9dc728a53ce20c07348717091c2bf1',
  ],
  'lib/preferences-writer.cjs': [
    'f539948ceb96797081ba2669c7820149a7b1784659b5f950d1b08f2a9945b30e',
  ],
};

function sha256(content: string): string {
  return createHash('sha256').update(content).digest('hex');
}

export function stripManagedHookMarker(content: string): string {
  return content.replace(/^\/\/ omd:installed-hook sha256=[0-9a-f]{64}\r?\n/m, '');
}

export function renderManagedHook(source: string): string {
  const raw = stripManagedHookMarker(source);
  const marker = `// omd:installed-hook sha256=${sha256(raw)}`;
  const shebangEnd = raw.startsWith('#!') ? raw.indexOf('\n') : -1;
  return shebangEnd >= 0
    ? `${raw.slice(0, shebangEnd + 1)}${marker}\n${raw.slice(shebangEnd + 1)}`
    : `${marker}\n${raw}`;
}

export function isCurrentManagedHook(content: string, source: string): boolean {
  return content === renderManagedHook(source);
}

export function isSelfConsistentManagedHook(content: string): boolean {
  const declared = MARKER_RE.exec(content)?.[1];
  return Boolean(declared && declared === sha256(stripManagedHookMarker(content)));
}

export function isKnownLegacyHook(
  path: (typeof CLAUDE_HOOK_PATHS)[number],
  content: string,
): boolean {
  return !MARKER_RE.test(content) && LEGACY_HOOK_HASHES[path].includes(sha256(content));
}
