import { existsSync, lstatSync } from 'node:fs';
import { isAbsolute, join, relative, resolve, sep } from 'node:path';

/**
 * Managed installer writes must never traverse a symlink below the user-selected
 * install root. Besides protecting project files, this prevents a repository
 * from redirecting `--force` or `--repair-hooks` writes outside its boundary.
 * The install root itself may be a symlink because users commonly open projects
 * through a symlinked workspace path.
 */
export function unsafeManagedPath(
  installRoot: string,
  destination: string,
): string | null {
  const root = resolve(installRoot);
  const target = resolve(destination);
  const rel = relative(root, target);
  if (rel === '..' || rel.startsWith(`..${sep}`) || isAbsolute(rel)) {
    return 'destination escapes the selected install root';
  }

  let current = root;
  for (const segment of rel.split(sep).filter(Boolean)) {
    current = join(current, segment);
    if (existsSync(current) && lstatSync(current).isSymbolicLink()) {
      return `symlinked managed path: ${relative(root, current)}`;
    }
  }
  return null;
}
