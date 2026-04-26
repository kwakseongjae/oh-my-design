import * as p from '@clack/prompts';
import pc from 'picocolors';
import { relative } from 'node:path';
import {
  appendEntry,
  inferScope,
  type PreferenceScope,
} from '../core/preferences.js';
import { detectCallingAgent } from '../core/agent-detect.js';

export interface RememberOptions {
  dir?: string;
  scope?: PreferenceScope;
  agent?: string;
  context?: string;
}

const ALLOWED_SCOPE_PREFIXES = [
  'visualTheme',
  'color',
  'typography',
  'spacing',
  'voice',
  'motion',
  'layout',
  'components.',
] as const;

function validateScope(raw: string): PreferenceScope | null {
  for (const prefix of ALLOWED_SCOPE_PREFIXES) {
    if (prefix.endsWith('.')) {
      if (raw.startsWith(prefix) && raw.length > prefix.length) {
        return raw as PreferenceScope;
      }
    } else if (raw === prefix) {
      return raw as PreferenceScope;
    }
  }
  return null;
}

export async function runRemember(
  note: string,
  opts: RememberOptions = {}
): Promise<number> {
  const projectRoot = opts.dir ?? process.cwd();
  const trimmed = note.trim();

  if (!trimmed) {
    console.error(pc.red('omd remember: note is required'));
    return 1;
  }

  let scope: PreferenceScope;
  if (opts.scope) {
    const validated = validateScope(opts.scope);
    if (!validated) {
      console.error(
        pc.red(`omd remember: invalid scope "${opts.scope}"`)
      );
      return 1;
    }
    scope = validated;
  } else {
    scope = inferScope(trimmed);
  }

  const detectedAgent = detectCallingAgent();
  const sourceAgent =
    opts.agent ?? (detectedAgent !== 'unknown' ? detectedAgent : undefined);

  const entry = appendEntry(projectRoot, {
    note: trimmed,
    scope,
    signal: 'user-statement',
    confidence: 'explicit',
    source_agent: sourceAgent,
    source_context: opts.context,
  });

  const rel = relative(process.cwd(), projectRoot) || '.';
  p.log.success(
    `Logged ${pc.bold(entry.meta.id)} (${pc.cyan(entry.meta.scope)}) → ${rel}/.omd/preferences.md`
  );
  p.log.info(
    pc.dim('Run `omd learn --apply` to fold pending preferences into DESIGN.md.')
  );
  return 0;
}
