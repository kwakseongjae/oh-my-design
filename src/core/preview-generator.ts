import type { PreviewData } from './customizer.js';
import {
  generateColorScale,
  contrastForeground,
  hslString,
  hexToHsl,
  hslToHex,
  lighten,
  darken,
  generateChartColors,
} from '../utils/color.js';

export function generatePreviewHtml(data: PreviewData): string {
  const {
    name, basedOn, primary, background, foreground, font, headingWeight,
    radius, colors, darkMode, shadcnCss,
  } = data;

  const isLightBg = isLight(background);
  const scale = generateColorScale(primary);
  const radiusPx = radius === '9999px' ? '24px' : radius;
  const borderColor = colors.border;
  const accent = colors.accent;
  const muted = colors.muted;
  const chart = colors.chart;

  // Generate dark mode vars for CSS
  const darkBg = hslToHex(hexToHsl(primary)[0], 15, 7);
  const darkFg = '#fafafa';
  const darkBorder = hslToHex(hexToHsl(primary)[0], 10, 18);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(name)} — Design System Preview</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: ${background};
    --fg: ${foreground};
    --primary: ${primary};
    --primary-fg: ${contrastForeground(primary)};
    --accent: ${accent};
    --muted: ${muted};
    --muted-fg: ${lighten(foreground, 40)};
    --border: ${borderColor};
    --destructive: #ef4444;
    --card: ${isLightBg ? '#ffffff' : lighten(background, 3)};
    --radius: ${radiusPx};
  }

  .dark {
    --bg: ${darkBg};
    --fg: ${darkFg};
    --card: ${lighten(darkBg, 3)};
    --muted: ${hslToHex(hexToHsl(primary)[0], 10, 15)};
    --muted-fg: ${darken(darkFg, 35)};
    --border: ${darkBorder};
  }

  body {
    font-family: "${font}", "Inter", system-ui, sans-serif;
    background: var(--bg);
    color: var(--fg);
    line-height: 1.5;
    transition: background 0.25s, color 0.25s;
  }

  .shell { max-width: 1100px; margin: 0 auto; padding: 40px 24px 80px; }

  /* ── Header ─────── */
  .header {
    display: flex; justify-content: space-between; align-items: center;
    padding-bottom: 24px; margin-bottom: 40px;
    border-bottom: 1px solid var(--border);
  }
  .header h1 {
    font-size: 2rem; font-weight: ${headingWeight};
    letter-spacing: -0.02em;
  }
  .header .sub {
    font-size: 0.875rem; color: var(--muted-fg); margin-top: 4px;
  }
  .controls { display: flex; gap: 8px; }
  .ctrl-btn {
    padding: 8px 16px; border-radius: var(--radius);
    font-size: 0.8125rem; font-family: inherit; cursor: pointer;
    transition: all 0.15s; border: 1px solid var(--border);
    background: var(--card); color: var(--fg);
  }
  .ctrl-btn:hover { opacity: 0.85; }
  .ctrl-btn.primary { background: var(--primary); color: var(--primary-fg); border-color: transparent; }

  /* ── Sections ───── */
  .section { margin-bottom: 48px; }
  .section-title {
    font-size: 1.375rem; font-weight: ${headingWeight};
    letter-spacing: -0.01em; margin-bottom: 16px;
  }
  .section-sub { font-size: 0.8125rem; color: var(--muted-fg); margin-bottom: 16px; }

  /* ── Color Scale ── */
  .scale-row {
    display: flex; border-radius: var(--radius); overflow: hidden;
    border: 1px solid var(--border); margin-bottom: 24px;
  }
  .scale-stop {
    flex: 1; padding: 28px 4px 8px; text-align: center;
    font-size: 10px; font-family: monospace; cursor: pointer;
    transition: transform 0.1s; position: relative;
  }
  .scale-stop:hover { z-index: 1; transform: scaleY(1.12); }
  .scale-stop .lbl { display: block; opacity: 0.7; margin-bottom: 2px; }
  .scale-stop .hex {
    background: rgba(0,0,0,0.2); color: #fff;
    padding: 1px 4px; border-radius: 3px; font-size: 9px;
  }

  /* ── Color Chips ── */
  .chip-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 12px;
  }
  .chip {
    border-radius: var(--radius); overflow: hidden;
    border: 1px solid var(--border); cursor: pointer;
    transition: transform 0.15s, box-shadow 0.15s;
  }
  .chip:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
  .chip .sw { height: 64px; display: flex; align-items: end; padding: 6px; }
  .chip .sw span {
    font-size: 10px; font-family: monospace;
    background: rgba(0,0,0,0.25); color: #fff;
    padding: 1px 5px; border-radius: 3px;
  }
  .chip .inf { padding: 8px; background: var(--card); }
  .chip .inf .n { font-size: 0.75rem; font-weight: 500; }
  .chip .inf .v { font-size: 10px; color: var(--muted-fg); font-family: monospace; }

  /* ── Typography ── */
  .type-rows { display: flex; flex-direction: column; gap: 8px; }
  .type-row {
    display: flex; align-items: baseline; gap: 16px;
    padding: 12px 16px; border-radius: var(--radius);
    background: var(--card); border: 1px solid var(--border);
  }
  .type-row .lbl {
    min-width: 48px; font-size: 0.75rem; color: var(--muted-fg);
    font-family: monospace; flex-shrink: 0;
  }
  .type-row .sample { flex: 1; }

  /* ── Components ── */
  .comp-card {
    padding: 24px; border-radius: var(--radius);
    background: var(--card); border: 1px solid var(--border);
    margin-bottom: 16px;
  }
  .comp-card h3 { font-size: 1rem; font-weight: 600; margin-bottom: 16px; }
  .comp-row { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin-bottom: 12px; }

  .btn {
    display: inline-flex; align-items: center; justify-content: center;
    font-family: inherit; font-weight: 500; cursor: pointer;
    transition: all 0.15s; border: none; font-size: 0.8125rem;
    padding: 8px 16px; height: 36px; border-radius: var(--radius);
  }
  .btn-primary { background: var(--primary); color: var(--primary-fg); }
  .btn-secondary { background: var(--muted); color: var(--fg); }
  .btn-outline { background: transparent; color: var(--fg); border: 1px solid var(--border); }
  .btn-ghost { background: transparent; color: var(--fg); }
  .btn-destructive { background: var(--destructive); color: #fff; }
  .btn:hover { opacity: 0.9; }

  .badge {
    display: inline-flex; font-size: 0.6875rem; font-weight: 500;
    padding: 2px 10px; border-radius: 9999px;
  }
  .badge-primary { background: var(--primary); color: var(--primary-fg); }
  .badge-secondary { background: var(--muted); color: var(--fg); }
  .badge-outline { background: transparent; color: var(--fg); border: 1px solid var(--border); }

  .input-demo {
    width: 100%; max-width: 320px; font-family: inherit;
    background: var(--bg); color: var(--fg);
    border: 1px solid var(--border); border-radius: var(--radius);
    padding: 8px 12px; font-size: 0.8125rem; outline: none;
    transition: border-color 0.15s;
  }
  .input-demo:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--primary) 20%, transparent);
  }

  .demo-table {
    width: 100%; border-collapse: collapse; font-size: 0.8125rem;
  }
  .demo-table th, .demo-table td {
    padding: 10px 12px; text-align: left;
    border-bottom: 1px solid var(--border);
  }
  .demo-table th {
    font-weight: 500; color: var(--muted-fg);
    font-size: 0.75rem; text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .demo-table tr:hover td { background: var(--muted); }

  .demo-card {
    padding: 20px; border-radius: var(--radius);
    background: var(--card); border: 1px solid var(--border);
    max-width: 340px; box-shadow: 0 1px 3px rgba(0,0,0,0.06);
  }
  .demo-card h4 { font-weight: 600; margin-bottom: 6px; }
  .demo-card p { font-size: 0.8125rem; color: var(--muted-fg); margin-bottom: 14px; }

  .demo-dialog {
    padding: 24px; border-radius: var(--radius);
    background: var(--card); box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    max-width: 400px; border: 1px solid var(--border);
  }
  .demo-dialog h4 { font-weight: 600; margin-bottom: 8px; }
  .demo-dialog p { font-size: 0.8125rem; color: var(--muted-fg); margin-bottom: 16px; }
  .demo-dialog .acts { display: flex; justify-content: flex-end; gap: 8px; }

  .tabs {
    display: flex; background: var(--muted); border-radius: var(--radius); padding: 4px; gap: 2px;
  }
  .tab {
    padding: 6px 14px; border-radius: calc(var(--radius) - 2px);
    font-size: 0.8125rem; font-family: inherit; font-weight: 500;
    border: none; cursor: pointer; background: transparent;
    color: var(--muted-fg); transition: all 0.15s;
  }
  .tab.active {
    background: var(--bg); color: var(--fg);
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  }
  .tab:hover:not(.active) { color: var(--fg); }

  /* ── CSS Block ──── */
  .css-block {
    position: relative; background: var(--card);
    border: 1px solid var(--border); border-radius: var(--radius);
    overflow: hidden;
  }
  .css-block pre {
    padding: 20px; overflow-x: auto; font-family: monospace;
    font-size: 11px; line-height: 1.6; color: var(--fg);
  }
  .css-block .copy-css { position: absolute; top: 8px; right: 8px; }

  /* ── Spacing ────── */
  .spacing-vis {
    display: flex; align-items: end; gap: 8px; padding: 24px;
    background: var(--card); border: 1px solid var(--border);
    border-radius: var(--radius);
  }
  .sp-bar { display: flex; flex-direction: column; align-items: center; gap: 4px; }
  .sp-bar .bar { background: var(--primary); border-radius: 2px; width: 28px; }
  .sp-bar .val { font-size: 10px; font-family: monospace; color: var(--muted-fg); }

  /* ── Radius ─────── */
  .radius-grid { display: flex; gap: 16px; flex-wrap: wrap; }
  .radius-demo {
    width: 72px; height: 72px; background: var(--primary);
    display: flex; align-items: center; justify-content: center;
    color: var(--primary-fg); font-size: 0.6875rem; font-family: monospace;
  }

  /* ── Toast ──────── */
  .toast-popup {
    position: fixed; bottom: 24px; right: 24px;
    padding: 10px 20px; background: var(--fg); color: var(--bg);
    border-radius: var(--radius); font-size: 0.8125rem;
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    transform: translateY(100px); opacity: 0;
    transition: all 0.3s; z-index: 100;
  }
  .toast-popup.show { transform: translateY(0); opacity: 1; }

  @media (max-width: 768px) {
    .shell { padding: 16px 12px 48px; }
    .header { flex-direction: column; gap: 12px; align-items: flex-start; }
    .chip-grid { grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); }
  }
</style>
</head>
<body>
<div class="shell">

  <div class="header">
    <div>
      <h1>${esc(name)}</h1>
      <div class="sub">Based on ${esc(basedOn)} &middot; Generated by oh-my-design</div>
    </div>
    <div class="controls">
      ${darkMode ? '<button class="ctrl-btn" onclick="toggleTheme()" id="theme-btn">🌙 Dark</button>' : ''}
      <button class="ctrl-btn primary" onclick="copyCss()">Copy CSS</button>
    </div>
  </div>

  <!-- Primary Scale -->
  <div class="section">
    <h2 class="section-title">Primary Color Scale</h2>
    <div class="section-sub">Click to copy hex value</div>
    <div class="scale-row">
${Object.entries(scale).map(([stop, hex]) =>
  `      <div class="scale-stop" style="background:${hex};color:${isLight(hex) ? '#000' : '#fff'}" onclick="copy('${hex}')">
        <span class="lbl">${stop}</span><span class="hex">${hex}</span>
      </div>`).join('\n')}
    </div>
  </div>

  <!-- Semantic Colors -->
  <div class="section">
    <h2 class="section-title">Semantic Colors</h2>
    <div class="chip-grid">
${[
  { n: 'Primary', bg: primary, v: '--primary' },
  { n: 'Accent', bg: accent, v: '--accent' },
  { n: 'Muted', bg: muted, v: '--muted' },
  { n: 'Destructive', bg: '#ef4444', v: '--destructive' },
  { n: 'Background', bg: background, v: '--background' },
  { n: 'Foreground', bg: foreground, v: '--foreground' },
  { n: 'Border', bg: borderColor, v: '--border' },
  { n: 'Card', bg: isLightBg ? '#ffffff' : lighten(background, 3), v: '--card' },
].map((c) => `      <div class="chip" onclick="copy('${c.bg}')">
        <div class="sw" style="background:${c.bg}"><span>${c.bg}</span></div>
        <div class="inf"><div class="n">${c.n}</div><div class="v">${c.v}</div></div>
      </div>`).join('\n')}
    </div>
  </div>

  <!-- Chart Colors -->
  <div class="section">
    <h2 class="section-title">Chart Colors</h2>
    <div style="display:flex;gap:8px;">
${chart.map((c, i) => `      <div style="width:48px;height:48px;border-radius:var(--radius);background:${c};cursor:pointer;" onclick="copy('${c}')" title="Chart ${i + 1}: ${c}"></div>`).join('\n')}
    </div>
  </div>

  <!-- Typography -->
  <div class="section">
    <h2 class="section-title">Typography</h2>
    <div class="type-rows">
      <div class="type-row">
        <span class="lbl">H1</span>
        <span class="sample" style="font-size:2.25rem;font-weight:${headingWeight};letter-spacing:-0.02em;line-height:1.2">Page Title Heading</span>
      </div>
      <div class="type-row">
        <span class="lbl">H2</span>
        <span class="sample" style="font-size:1.875rem;font-weight:${headingWeight};letter-spacing:-0.01em;line-height:1.25">Section Heading</span>
      </div>
      <div class="type-row">
        <span class="lbl">H3</span>
        <span class="sample" style="font-size:1.5rem;font-weight:${headingWeight};line-height:1.3">Subsection</span>
      </div>
      <div class="type-row">
        <span class="lbl">body</span>
        <span class="sample" style="font-size:1rem;">The quick brown fox jumps over the lazy dog. 다람쥐 헌 쳇바퀴에 타고파.</span>
      </div>
      <div class="type-row">
        <span class="lbl">sm</span>
        <span class="sample" style="font-size:0.875rem;color:var(--muted-fg)">Secondary text, labels, and metadata</span>
      </div>
      <div class="type-row">
        <span class="lbl">mono</span>
        <span class="sample" style="font-family:monospace;font-size:0.875rem">const theme = generateDesignSystem();</span>
      </div>
    </div>
  </div>

  <!-- Radius -->
  <div class="section">
    <h2 class="section-title">Border Radius</h2>
    <div class="radius-grid">
      <div style="text-align:center"><div class="radius-demo" style="border-radius:0">0</div><div style="font-size:10px;margin-top:4px;color:var(--muted-fg)">none</div></div>
      <div style="text-align:center"><div class="radius-demo" style="border-radius:${radiusPx}">${radiusPx}</div><div style="font-size:10px;margin-top:4px;color:var(--muted-fg)">base</div></div>
      <div style="text-align:center"><div class="radius-demo" style="border-radius:${parseInt(radiusPx) * 2}px">${parseInt(radiusPx) * 2}px</div><div style="font-size:10px;margin-top:4px;color:var(--muted-fg)">lg</div></div>
      <div style="text-align:center"><div class="radius-demo" style="border-radius:9999px">pill</div><div style="font-size:10px;margin-top:4px;color:var(--muted-fg)">full</div></div>
    </div>
  </div>

  <!-- Components -->
  <div class="section">
    <h2 class="section-title">Components</h2>

    <!-- Buttons -->
    <div class="comp-card">
      <h3>Buttons</h3>
      <div class="comp-row">
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-secondary">Secondary</button>
        <button class="btn btn-outline">Outline</button>
        <button class="btn btn-ghost">Ghost</button>
        <button class="btn btn-destructive">Delete</button>
      </div>
    </div>

    <!-- Badges -->
    <div class="comp-card">
      <h3>Badges</h3>
      <div class="comp-row">
        <span class="badge badge-primary">Active</span>
        <span class="badge badge-secondary">Draft</span>
        <span class="badge badge-outline">Archived</span>
      </div>
    </div>

    <!-- Input -->
    <div class="comp-card">
      <h3>Input</h3>
      <div style="display:flex;flex-direction:column;gap:12px;max-width:400px;">
        <div>
          <label style="font-size:0.8125rem;font-weight:500;display:block;margin-bottom:4px;">Email</label>
          <input class="input-demo" type="email" placeholder="you@example.com">
        </div>
        <div>
          <label style="font-size:0.8125rem;font-weight:500;display:block;margin-bottom:4px;">Password</label>
          <input class="input-demo" type="password" placeholder="••••••••">
        </div>
      </div>
    </div>

    <!-- Card -->
    <div class="comp-card">
      <h3>Card</h3>
      <div class="comp-row" style="align-items:stretch;">
        <div class="demo-card">
          <h4>Project Overview</h4>
          <p>A summary card showing key metrics and status for your project.</p>
          <button class="btn btn-primary" style="height:32px;font-size:0.75rem;">View Details</button>
        </div>
      </div>
    </div>

    <!-- Table -->
    <div class="comp-card">
      <h3>Table</h3>
      <div style="overflow-x:auto;">
        <table class="demo-table">
          <thead><tr><th>Name</th><th>Status</th><th>Role</th><th>Email</th></tr></thead>
          <tbody>
            <tr><td>Kim Minjae</td><td><span class="badge badge-primary" style="font-size:10px;">Active</span></td><td>Developer</td><td>minjae@example.com</td></tr>
            <tr><td>Lee Soyeon</td><td><span class="badge badge-secondary" style="font-size:10px;">Pending</span></td><td>Designer</td><td>soyeon@example.com</td></tr>
            <tr><td>Park Jiwoo</td><td><span class="badge badge-outline" style="font-size:10px;">Inactive</span></td><td>PM</td><td>jiwoo@example.com</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Dialog -->
    <div class="comp-card">
      <h3>Dialog</h3>
      <div class="demo-dialog">
        <h4>Delete item?</h4>
        <p>This action cannot be undone.</p>
        <div class="acts">
          <button class="btn btn-outline" style="height:32px;">Cancel</button>
          <button class="btn btn-destructive" style="height:32px;">Delete</button>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="comp-card">
      <h3>Tabs</h3>
      <div class="tabs">
        <button class="tab active">Overview</button>
        <button class="tab">Analytics</button>
        <button class="tab">Settings</button>
      </div>
    </div>
  </div>

  <!-- shadcn CSS -->
  <div class="section">
    <h2 class="section-title">shadcn/ui CSS Variables</h2>
    <div class="section-sub">Ready to paste into globals.css</div>
    <div class="css-block">
      <button class="ctrl-btn copy-css" onclick="copyCss()" style="position:absolute;top:8px;right:8px;">Copy</button>
      <pre id="css-output">${escHtml(shadcnCss)}</pre>
    </div>
  </div>

</div>

<div class="toast-popup" id="toast">Copied!</div>

<script>
let isDark = false;
function toggleTheme() {
  isDark = !isDark;
  document.body.classList.toggle('dark', isDark);
  const btn = document.getElementById('theme-btn');
  if (btn) btn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
}
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 1800);
}
function copy(val) {
  navigator.clipboard.writeText(val).then(() => showToast('Copied: ' + val));
}
function copyCss() {
  const css = document.getElementById('css-output').textContent;
  navigator.clipboard.writeText(css).then(() => showToast('CSS variables copied!'));
}
document.querySelectorAll('.tab').forEach(t => {
  t.addEventListener('click', () => {
    t.parentElement.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
  });
});
</script>
</body>
</html>`;
}

function isLight(hex: string): boolean {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 140;
}

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function escHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
