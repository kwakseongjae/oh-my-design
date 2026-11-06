#!/usr/bin/env node
// Blender branch driver: spec.json -> poster.png (Cycles) [+ loop.webm / loop.mp4 (EEVEE frames -> ffmpeg)].
//
//   node blender.mjs <spec.json> <outDir> [--loop] [--fps 24] [--loop-width 1280] [--blender /path/to/blender]
//
// Detection order for the binary: --blender, $BLENDER, `blender` on PATH, /Applications/Blender.app (macOS).
// No Blender -> exit 4 with a message; the three.js branch needs nothing installed, so the skill falls back to it.
// Then encode the poster: node verify.mjs --encode <outDir>/poster.png <outDir>/poster.webp
import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
const flag = (n, d) => { const i = args.indexOf(`--${n}`); return i >= 0 ? args[i + 1] : d; };
const [spec, out] = args.filter((a, i) => !a.startsWith('--') && !['--fps', '--loop-width', '--blender'].includes(args[i - 1]));
if (!spec || !out) { console.error('usage: node blender.mjs <spec.json> <outDir> [--loop] [--fps 24] [--loop-width 1280]'); process.exit(2); }
const here = path.dirname(fileURLToPath(import.meta.url));
const script = path.join(here, '..', 'engines', 'blender', 'scene.py');

const which = (b) => spawnSync('sh', ['-c', `command -v ${b}`], { encoding: 'utf8' }).stdout.trim();
const bin = [flag('blender'), process.env.BLENDER, which('blender'), '/Applications/Blender.app/Contents/MacOS/Blender'].find((p) => p && existsSync(p));
if (!bin) { console.error('Blender not found. Use the three.js branch (no install), or install Blender 4.2+ and pass --blender.'); process.exit(4); }
const ver = execFileSync(bin, ['-b', '--version'], { encoding: 'utf8' }).split('\n')[0];

const loop = args.includes('--loop');
const bl = spawnSync(bin, ['-b', '--factory-startup', '-P', script, '--', '--spec', path.resolve(spec), '--out', path.resolve(out), '--poster',
  ...(loop ? ['--loop', '--fps', flag('fps', '24'), '--loop-width', flag('loop-width', '1280')] : [])], { encoding: 'utf8', maxBuffer: 64 << 20 });
const line = bl.stdout.split('\n').find((l) => l.startsWith('OMD3D '));
if (bl.status !== 0 || !line) { console.error(bl.stdout.slice(-3000), bl.stderr.slice(-3000)); process.exit(1); }
const report = { blender: ver, ...JSON.parse(line.slice(6)) };

if (loop) {
  const fps = flag('fps', '24');
  const frames = path.join(out, 'frames', '%04d.png');
  const ff = (a) => { const r = spawnSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', fps, '-i', frames, ...a], { encoding: 'utf8' }); if (r.status) throw new Error(r.stderr); };
  // Both encodes loop seamlessly: the motion is sin-based with one full period in the frame range.
  ff(['-c:v', 'libvpx-vp9', '-b:v', '0', '-crf', '36', '-row-mt', '1', '-pix_fmt', 'yuv420p', path.join(out, 'loop.webm')]);
  ff(['-c:v', 'libx264', '-crf', '24', '-preset', 'slow', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', path.join(out, 'loop.mp4')]);
  const kb = (f) => Math.round(readFileSync(path.join(out, f)).length / 1024);
  report.video = { webmKiB: kb('loop.webm'), mp4KiB: kb('loop.mp4') };
}
console.log(JSON.stringify(report));
