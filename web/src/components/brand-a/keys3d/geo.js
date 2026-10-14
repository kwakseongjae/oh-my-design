/* Puffy keycap geometry + legend/shadow textures (prototype round 4; see main.js). */
import * as THREE from "three";
import { mergeVertices } from "three/addons/utils/BufferGeometryUtils.js";

export const W = 1, D = 1, H = 0.6;

/* Inflated rounded box. t in [0,1] = company softness from the claimed rounded token
 * (0 = firm, squarer; 1 = puffy, near-pill). Origin at the cap bottom. */
export function capGeometry(t, scale = 1, seg = 28, wide = 1) {
  const w = W * scale * wide, d = D * scale, h = H * scale;
  const r = (h / 2) * (0.62 + 0.36 * t);            // very large bevel at both ends
  const dome = h * (0.13 + 0.15 * t);                // top inflation
  const side = d * (0.035 + 0.05 * t);               // side inflation
  const taper = 0.1 - 0.03 * t;                      // keycap: top narrower than base
  let g = new THREE.BoxGeometry(w, h, d, seg, Math.max(10, seg >> 1), seg);
  g.deleteAttribute("normal"); g.deleteAttribute("uv");
  g = mergeVertices(g);
  const p = g.attributes.position, v = new THREE.Vector3(), c = new THREE.Vector3();
  const e = new THREE.Vector3(w / 2 - r, h / 2 - r, d / 2 - r);
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    c.set(THREE.MathUtils.clamp(v.x, -e.x, e.x), THREE.MathUtils.clamp(v.y, -e.y, e.y), THREE.MathUtils.clamp(v.z, -e.z, e.z));
    const n = v.clone().sub(c).normalize();
    v.copy(c).addScaledVector(n, r);
    const qx = (wide > 1 ? Math.sign(v.x) * Math.max(0, Math.abs(v.x) - (w - d) / 2) / (d / 2) : v.x / (w / 2)), qy = v.y / (h / 2), qz = v.z / (d / 2);
    const fx = Math.max(0, 1 - qx * qx), fz = Math.max(0, 1 - qz * qz), fy = Math.max(0, 1 - qy * qy);
    const up = Math.max(0, n.y);
    v.y += dome * up * up * fx * fz;                                  // domed top
    v.x += side * n.x * Math.abs(n.x) * fy * fz;                      // puffy sides
    v.z += side * n.z * Math.abs(n.z) * fy * fx;
    const k = 1 - taper * (qy * 0.5 + 0.5);                           // taper toward the top
    v.x *= k; v.z *= k;
    v.y += h / 2;                                                     // sit on y = 0
    p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  g.computeBoundingBox();
  return g;
}

/* Legend decal that hugs the domed top: a plane whose vertices are dropped onto the cap. */
export function decalGeometry(capGeo, size, wide = 1) {
  const g = new THREE.PlaneGeometry(size * wide, size, 18 * wide, 18);
  g.rotateX(-Math.PI / 2);
  const mesh = new THREE.Mesh(capGeo, new THREE.MeshBasicMaterial({ side: THREE.DoubleSide }));
  const ray = new THREE.Raycaster(), dir = new THREE.Vector3(0, -1, 0), o = new THREE.Vector3();
  const p = g.attributes.position;
  const top = capGeo.boundingBox.max.y + 1;
  for (let i = 0; i < p.count; i++) {
    o.set(p.getX(i), top, p.getZ(i));
    ray.set(o, dir);
    const hit = ray.intersectObject(mesh, false)[0];
    p.setY(i, (hit ? hit.point.y : capGeo.boundingBox.max.y) + 0.004);
  }
  g.computeVertexNormals();
  return g;
}

/* Glyph texture, drawn with the page's own loaded faces in the claimed weight. */
export function legendTexture(glyph, family, weight, color, maxAniso, wide = 1) {
  const S = 1024, SW = Math.round(S * wide), cv = document.createElement("canvas");
  cv.width = SW; cv.height = S;
  const x = cv.getContext("2d");
  const latin = !/[ᄀ-ᇿ぀-ヿ㄀-ㄯ㐀-鿿가-힯]/.test(glyph);
  let fs = (wide > 1 ? 200 : latin ? 350 : 330) * 2;
  x.font = weight + " " + fs + "px " + family;
  const m = x.measureText(glyph);
  const gw = m.actualBoundingBoxLeft + m.actualBoundingBoxRight;
  if (gw > SW * 0.74) { fs *= (SW * 0.74) / gw; x.font = weight + " " + fs + "px " + family; }
  const mm = x.measureText(glyph);
  const asc = mm.actualBoundingBoxAscent, des = mm.actualBoundingBoxDescent;
  const lx = SW / 2 - (mm.actualBoundingBoxRight - mm.actualBoundingBoxLeft) / 2;
  const ly = S / 2 + (asc - des) / 2;
  const light = color.toLowerCase() === "#ffffff";
  x.shadowColor = light ? "rgba(0,0,0,.28)" : "rgba(255,255,255,.35)";   // faint inset edge
  x.shadowBlur = 6; x.shadowOffsetY = light ? 4 : -3;
  x.fillStyle = color;
  x.fillText(glyph, lx, ly);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = maxAniso;
  return tex;
}

/* Logo texture (round 4): the genuine SVG, rasterised at high resolution, trimmed of
 * transparent margin only, and centred in the decal. Colours are the file's own; the
 * only addition is the same faint inset edge the glyph legends carry. Box fractions are
 * of the decal (70% of the cap top): a symbol ≤ 80% square, a wordmark ≤ 86% × 50%, which
 * keeps the colour-calibration probes (main.js probe()) on bare cap. */
export function logoTexture(img, dark, maxAniso, wide = 1, symbol = true) {
  const S = 1024, SW = Math.round(S * wide);
  const R = 2048, iw = img.naturalWidth || img.width, ih = img.naturalHeight || img.height;
  const k = R / Math.max(iw, ih), tw = Math.max(1, Math.round(iw * k)), th = Math.max(1, Math.round(ih * k));
  const tmp = document.createElement("canvas");
  tmp.width = tw; tmp.height = th;
  const t = tmp.getContext("2d", { willReadFrequently: true });
  t.drawImage(img, 0, 0, tw, th);
  const a = t.getImageData(0, 0, tw, th).data;
  let x0 = tw, y0 = th, x1 = -1, y1 = -1;
  for (let y = 0; y < th; y++) for (let x = 0; x < tw; x++) {
    if (a[(y * tw + x) * 4 + 3] > 8) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  }
  if (x1 < 0) { x0 = 0; y0 = 0; x1 = tw - 1; y1 = th - 1; }
  const cw = x1 - x0 + 1, ch = y1 - y0 + 1;
  const bw = symbol ? S * 0.8 : SW * 0.86, bh = symbol ? S * 0.8 : S * 0.5;
  const f = Math.min(bw / cw, bh / ch), dw = cw * f, dh = ch * f;
  const cv = document.createElement("canvas");
  cv.width = SW; cv.height = S;
  const x = cv.getContext("2d");
  x.shadowColor = dark ? "rgba(255,255,255,.22)" : "rgba(0,0,0,.22)";   // faint inset edge
  x.shadowBlur = 6; x.shadowOffsetY = dark ? -3 : 4;
  x.drawImage(tmp, x0, y0, cw, ch, (SW - dw) / 2, (S - dh) / 2, dw, dh);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = maxAniso;
  return tex;
}

/* Soft radial blob for contact shadows and tinted light pools. */
export function blobTexture() {
  const S = 128, cv = document.createElement("canvas");
  cv.width = cv.height = S;
  const x = cv.getContext("2d"), gr = x.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  gr.addColorStop(0, "rgba(255,255,255,1)");
  gr.addColorStop(0.35, "rgba(255,255,255,.55)");
  gr.addColorStop(0.7, "rgba(255,255,255,.14)");
  gr.addColorStop(1, "rgba(255,255,255,0)");
  x.fillStyle = gr; x.fillRect(0, 0, S, S);
  const t = new THREE.CanvasTexture(cv);
  return t;
}
