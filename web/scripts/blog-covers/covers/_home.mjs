/**
 * Cover of the blog home: the home's own field (Asset: the blog field in design.md), as a still.
 */
export const out = (locale) => "public/blog-assets/cover-home-" + locale + ".png";
export const titles = { ko: "oh-my-design 블로그", en: "oh-my-design Blog" };

export const pictureCss = `
.field{position:absolute;inset:0;background:#ffffff}
.field canvas{display:block}
`;

export function picture() {
  return '<div class="field" id="field"></div>';
}

/** The same shader, inks and shape as the home banner, frozen on one frame. */
export const script = `<script type="module">
import { ShaderMount } from "/vendor/paper-shaders/shader-mount.js";
import { ditheringFragmentShader, DitheringShapes, DitheringTypes } from "/vendor/paper-shaders/shaders/dithering.js";
const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255).concat(1);
window.__pictureReady = (async () => {
  new ShaderMount(document.getElementById("field"), ditheringFragmentShader, {
    u_colorBack: hex("#ffffff"), u_colorFront: hex("#6749e2"), u_shape: DitheringShapes.warp, u_type: DitheringTypes["4x4"], u_pxSize: 4,
    u_fit: 2, u_scale: 1, u_rotation: 0, u_offsetX: 0.18, u_offsetY: 0, u_originX: 0.5, u_originY: 0.5, u_worldWidth: 1280, u_worldHeight: 168 * 3,
  }, { preserveDrawingBuffer: true }, 0, 8000, 1, 1920 * 1080);
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  if (!document.querySelector("#field canvas")) throw new Error("field did not draw");
  return true;
})();
</script>`;
