// Minimal reader for uncompressed sfnt files (TTF / OTF), used on open-licence candidate files only:
// it reads the declared axis ranges (fvar), the OS/2 x-height and cap height, unitsPerEm and the
// family names, so a candidate's weight range comes from the file itself and the canvas measurement
// can be cross-checked against the font's own vertical metrics. Brand faces are never parsed here:
// they are measured in their own page with canvas/DOM APIs only.

function tag(buf, off) {
  return buf.toString("latin1", off, off + 4);
}

function fixed(buf, off) {
  return buf.readInt32BE(off) / 65536;
}

export function readTables(buf) {
  const sig = tag(buf, 0);
  if (!["\0\x01\0\0", "OTTO", "true"].includes(sig)) throw new Error(`not an uncompressed sfnt (signature ${JSON.stringify(sig)})`);
  const num = buf.readUInt16BE(4);
  const tables = {};
  for (let i = 0; i < num; i++) {
    const rec = 12 + i * 16;
    tables[tag(buf, rec)] = { offset: buf.readUInt32BE(rec + 8), length: buf.readUInt32BE(rec + 12) };
  }
  return tables;
}

function names(buf, t) {
  if (!t) return {};
  const base = t.offset;
  const count = buf.readUInt16BE(base + 2);
  const strOff = base + buf.readUInt16BE(base + 4);
  const out = {};
  for (let i = 0; i < count; i++) {
    const r = base + 6 + i * 12;
    const platform = buf.readUInt16BE(r);
    const language = buf.readUInt16BE(r + 4);
    const nameId = buf.readUInt16BE(r + 6);
    const len = buf.readUInt16BE(r + 8);
    const off = buf.readUInt16BE(r + 10);
    if (platform !== 3 || language !== 0x409 || ![1, 2, 4, 6, 16, 17].includes(nameId)) continue;
    const raw = buf.subarray(strOff + off, strOff + off + len);
    let s = "";
    for (let j = 0; j + 1 < raw.length; j += 2) s += String.fromCharCode(raw.readUInt16BE(j));
    out[nameId] = s;
  }
  return out;
}

/** { unitsPerEm, xHeight, capHeight, xHeightRatio, axes: [{tag,min,default,max}], family, subfamily, postScript } */
export function readFontInfo(buf) {
  const tables = readTables(buf);
  const head = tables.head;
  const unitsPerEm = head ? buf.readUInt16BE(head.offset + 18) : null;
  let xHeight = null;
  let capHeight = null;
  const os2 = tables["OS/2"];
  if (os2 && buf.readUInt16BE(os2.offset) >= 2) {
    xHeight = buf.readInt16BE(os2.offset + 86);
    capHeight = buf.readInt16BE(os2.offset + 88);
  }
  const axes = [];
  const fvar = tables.fvar;
  if (fvar) {
    const b = fvar.offset;
    const axesOff = buf.readUInt16BE(b + 4);
    const count = buf.readUInt16BE(b + 8);
    const size = buf.readUInt16BE(b + 10);
    for (let i = 0; i < count; i++) {
      const a = b + axesOff + i * size;
      axes.push({ tag: tag(buf, a), min: fixed(buf, a + 4), default: fixed(buf, a + 8), max: fixed(buf, a + 12) });
    }
  }
  const n = names(buf, tables.name);
  return {
    unitsPerEm,
    xHeight,
    capHeight,
    xHeightRatio: xHeight && capHeight ? xHeight / capHeight : null,
    axes,
    family: n[16] ?? n[1] ?? null,
    subfamily: n[17] ?? n[2] ?? null,
    postScript: n[6] ?? null,
  };
}
