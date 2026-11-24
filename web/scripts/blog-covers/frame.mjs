/**
 * The shared frame of every blog cover: one 1200x630 canvas, the cover title top left, the blog name
 * small at the bottom left, and a picture panel on the right. The frame makes the covers a set; what
 * goes inside the panel is each post's own picture (covers/<slug>.mjs).
 *
 * Tokens are web/public/design.md's (Asset: blog covers). Letters are Wanted Sans Variable, the site's
 * face, loaded from web/public/fonts through web/src/styles/wanted-sans-*.css.
 */

export const W = 1200;
export const H = 630;

export const BLOG_NAME = { ko: "oh-my-design 블로그", en: "oh-my-design Blog" };

export const TOKENS = {
  paper: "#ffffff",
  band: "#f9faff",
  cell: "#f3f3f8",
  guide2: "#e5e6eb",
  guide: "#d3d3db",
  icon: "#797981",
  ink2: "#5a5a63",
  ink: "#13131a",
  primary: "#6749e2",
  tint: "#f6f6fe",
  selection: "#d8d8ff",
};

export const esc = (s) =>
  String(s).replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[m]);

/** The whole page for one cover. picture is HTML that fills the panel (552x502). */
export function coverPage({ locale, title, picture, pictureCss = "", script = "" }) {
  const t = TOKENS;
  return `<!doctype html><html lang="${locale}"><head><meta charset="utf-8">
<link rel="stylesheet" href="/styles/wanted-sans-latin.css"><link rel="stylesheet" href="/styles/wanted-sans-cjk.css">
<style>
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:${W}px;height:${H}px;background:${t.paper};overflow:hidden}
body{font-family:"Wanted Sans Variable",sans-serif;font-feature-settings:"cv01","cv11";-webkit-font-smoothing:antialiased;color:${t.ink};word-break:keep-all;overflow-wrap:anywhere;font-synthesis:none}
.title{position:absolute;left:64px;top:64px;width:456px;font-size:52px;font-weight:760;line-height:1.22;letter-spacing:-0.025em;text-wrap:balance}
.nw{white-space:nowrap}
.name{position:absolute;left:64px;bottom:60px;display:flex;align-items:center;gap:10px;font-size:22px;font-weight:650;color:${t.ink2}}
.name::before{content:"";width:12px;height:12px;border-radius:2px;background:${t.primary}}
.panel{position:absolute;left:584px;top:64px;width:552px;height:502px;border-radius:28px;background:${t.band};overflow:hidden;isolation:isolate}
${pictureCss}
</style></head><body>
<h1 class="title">${esc(title).replace(/oh-my-design/g, '<span class="nw">oh-my-design</span>')}</h1>
<div class="panel">${picture}</div>
<p class="name">${esc(BLOG_NAME[locale])}</p>
${script}
<script>window.__coverReady = window.__coverReady || document.fonts.ready.then(() => true);</script>
</body></html>`;
}
