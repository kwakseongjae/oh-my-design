import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
const here = new URL('.', import.meta.url).pathname;
const skill = here + '../shadcn-src/ui-2d3f1cd436/skills/shadcn';
const arms = { B1: 'toss-B.md', B2: 'toss-B.md', D1: 'toss-D.md', D2: 'toss-D.md' };
for (const [arm, file] of Object.entries(arms)) {
  const dir = `${here}app-${arm}`;
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
  execFileSync('cp', ['-cR', `${here}base-app`, dir]);
  fs.mkdirSync(`${dir}/.claude/skills`, { recursive: true });
  execFileSync('cp', ['-R', skill, `${dir}/.claude/skills/shadcn`]);
  fs.copyFileSync(`${here}../samples/${file}`, `${dir}/DESIGN.md`);
  fs.copyFileSync(`${here}base-app/app/globals.css`, `${dir}/globals.before.css`);
  console.log('ready', dir);
}
