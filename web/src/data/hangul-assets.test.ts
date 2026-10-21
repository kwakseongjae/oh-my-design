import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";
import { describe, expect, it } from "vitest";
import { getHangulAssets } from "@/lib/hangul/assets";

// The /hangul launch page renders a section only when its entry in hangul-assets.json is filled, so
// a filled entry must point at real files of the declared size. Sections left null are skipped here.
const assets = getHangulAssets();
const PUBLIC = join(__dirname, "../../public");
const REPO = join(__dirname, "../../..");

/** Byte budgets per file (the launch plan: MP4 about 2.5 MB at most, GIF 3 MB at most). */
const BUDGET = {
  shotDesktop: 300_000,
  shotPhone: 120_000,
  poster: 200_000,
  mp4: 2_500_000,
  gif: 3_000_000,
};

function file(publicPath: string): string {
  expect(publicPath, publicPath).toMatch(/^\/hangul\/[a-z0-9-]+\.(webp|mp4|gif)$/);
  const path = join(PUBLIC, publicPath);
  expect(existsSync(path), `${publicPath} exists`).toBe(true);
  return path;
}

async function expectWebp(publicPath: string, width: number, height: number, budget: number) {
  const path = file(publicPath);
  const meta = await sharp(path).metadata();
  expect(meta.format, publicPath).toBe("webp");
  expect([meta.width, meta.height], publicPath).toEqual([width, height]);
  expect(statSync(path).size, `${publicPath} bytes`).toBeLessThanOrEqual(budget);
}

/** Duration (mvhd) and the first video track's size (tkhd) of an MP4, without ffprobe. */
function mp4Info(path: string): { seconds: number; width: number; height: number; brand: string } {
  const buf = readFileSync(path);
  const boxes = (start: number, end: number) => {
    const out: { type: string; body: number; end: number }[] = [];
    for (let at = start; at + 8 <= end; ) {
      let size = buf.readUInt32BE(at);
      const type = buf.toString("latin1", at + 4, at + 8);
      let body = at + 8;
      if (size === 1) {
        size = Number(buf.readBigUInt64BE(at + 8));
        body = at + 16;
      } else if (size === 0) size = end - at;
      out.push({ type, body, end: at + size });
      at += size;
    }
    return out;
  };
  const top = boxes(0, buf.length);
  const ftyp = top.find((b) => b.type === "ftyp");
  const moov = top.find((b) => b.type === "moov");
  if (!ftyp || !moov) throw new Error(`${path}: no ftyp/moov box`);
  const inMoov = boxes(moov.body, moov.end);
  const mvhd = inMoov.find((b) => b.type === "mvhd");
  if (!mvhd) throw new Error(`${path}: no mvhd box`);
  const v1 = buf[mvhd.body] === 1;
  const timescale = buf.readUInt32BE(mvhd.body + (v1 ? 20 : 12));
  const duration = v1 ? Number(buf.readBigUInt64BE(mvhd.body + 24)) : buf.readUInt32BE(mvhd.body + 16);
  let width = 0;
  let height = 0;
  for (const trak of inMoov.filter((b) => b.type === "trak")) {
    const tkhd = boxes(trak.body, trak.end).find((b) => b.type === "tkhd");
    if (!tkhd) continue;
    const w = buf.readUInt32BE(tkhd.end - 8) / 65536;
    const h = buf.readUInt32BE(tkhd.end - 4) / 65536;
    if (w > 0 && h > 0) {
      width = w;
      height = h;
      break;
    }
  }
  return { seconds: duration / timescale, width, height, brand: buf.toString("latin1", ftyp.body, ftyp.body + 4) };
}

describe("hangul-assets.json", () => {
  it("keeps the contract header", () => {
    const raw = JSON.parse(readFileSync(join(__dirname, "hangul-assets.json"), "utf8"));
    expect(raw.schema).toBe(1);
    expect(typeof raw.note).toBe("string");
    expect(Object.keys(raw).sort()).toEqual(["beforeAfter", "measured", "note", "schema", "video"]);
  });

  it.runIf(assets.beforeAfter !== null)("before/after shots exist, decode at the declared size and fit the budget", async () => {
    const ba = assets.beforeAfter!;
    expect(ba.source).toMatch(/p1-A-r3/);
    for (const [shot, budget] of [
      [ba.desktop, BUDGET.shotDesktop],
      [ba.phone, BUDGET.shotPhone],
    ] as const) {
      expect(shot.before).not.toBe(shot.after);
      await expectWebp(shot.before, shot.width, shot.height, budget);
      await expectWebp(shot.after, shot.width, shot.height, budget);
    }
    // the desktop shot is landscape and the phone shot portrait
    expect(ba.desktop.width).toBeGreaterThan(ba.desktop.height);
    expect(ba.phone.width).toBeLessThan(ba.phone.height);
  });

  it.runIf(assets.video !== null)("video, poster and gif exist, match the declared size and length, and fit the budget", async () => {
    const video = assets.video!;
    const mp4 = file(video.mp4);
    expect(statSync(mp4).size, "mp4 bytes").toBeLessThanOrEqual(BUDGET.mp4);
    const info = mp4Info(mp4);
    expect([info.width, info.height]).toEqual([video.width, video.height]);
    expect(Math.abs(info.seconds - video.seconds)).toBeLessThan(0.1);
    expect(video.seconds).toBeGreaterThanOrEqual(10);
    expect(video.seconds).toBeLessThanOrEqual(15);
    await expectWebp(video.poster, video.width, video.height, BUDGET.poster);
    if (video.gif) {
      const gif = file(video.gif);
      expect(readFileSync(gif).toString("latin1", 0, 6)).toBe("GIF89a");
      expect(statSync(gif).size, "gif bytes").toBeLessThanOrEqual(BUDGET.gif);
    }
  });

  it.runIf(assets.measured !== null)("measured equals what scripts/hangul/build-measured.mjs computes from measured-67.md", () => {
    // Fails rather than skips when skills/hangul/references/measured-67.md is not on disk.
    const out = execFileSync("node", [join(REPO, "scripts/hangul/build-measured.mjs")], { cwd: REPO, encoding: "utf8" });
    expect(assets.measured).toEqual(JSON.parse(out).measured);
  });

  it.runIf(assets.measured !== null)("each spread carries n, and an IQR only where measured-67.md states one", () => {
    const m = assets.measured!;
    for (const [name, s] of Object.entries({
      bodyLineHeight: m.bodyLineHeight,
      bodyLetterSpacingEm: m.bodyLetterSpacingEm,
      headingLetterSpacingEm: m.headingLetterSpacingEm,
    })) {
      expect(Number.isInteger(s.n), name).toBe(true);
      expect(s.n!, name).toBeGreaterThan(0);
      expect(s.n!, name).toBeLessThanOrEqual(m.services);
      expect(s.min, name).toBeLessThanOrEqual(s.median);
      expect(s.median, name).toBeLessThanOrEqual(s.max);
      if (s.iqr) {
        expect(s.iqr[0], name).toBeGreaterThanOrEqual(s.min);
        expect(s.iqr[0], name).toBeLessThanOrEqual(s.median);
        expect(s.iqr[1], name).toBeGreaterThanOrEqual(s.median);
        expect(s.iqr[1], name).toBeLessThanOrEqual(s.max);
      }
    }
    // measured-67.md: "median 1.5, p25 1.429, p75 1.538 (53 numeric …)", read as stated
    expect(m.bodyLineHeight.n).toBe(53);
    expect(m.bodyLineHeight.iqr).toEqual([1.429, 1.538]);
    // the file states no quartiles for body letter-spacing and only p25 for headings: never computed here
    expect(m.bodyLetterSpacingEm.iqr).toBeUndefined();
    expect(m.headingLetterSpacingEm.iqr).toBeUndefined();
  });
});
