import pc from 'picocolors';
import { createServer } from 'node:http';
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * `omd book` — browse a project's adopted design system on a local port.
 *
 * Storybook shows rendered stories. This shows the *contract*: every token with
 * the decision that produced it, every component's state matrix including the
 * states that deliberately do not apply, measured contrast against the pairs the
 * system promised, and the preset lineage. Source of truth is the compiled
 * graph (`.omd/system/graph.json`); a project that only has `DESIGN.md` still
 * gets a readable book from the markdown.
 */

export interface BookToken {
  name: string;
  type: string;
  value: string;
  description: string;
  decisions: string[];
}

export interface BookState {
  name: string;
  applicability: string;
  reason?: string;
}

export interface BookComponent {
  id: string;
  anatomy: string[];
  states: BookState[];
  semantics?: string;
  presets: string[];
}

export interface BookContrastPair {
  foreground: string;
  background: string;
  minimum: number;
  actual?: number;
  status: 'pass' | 'fail' | 'unresolved';
}

export interface BookDecision {
  path: string;
  sourceClass: string;
  evidence: string[];
}

export interface BookPreset {
  id: string;
  title: string;
  group: string;
  cited: boolean;
}

export interface BookSystem {
  source: 'graph' | 'design-md';
  root: string;
  name: string;
  kind?: string;
  summary?: string;
  principles: string[];
  direction: string[];
  avoid: string[];
  tokens: BookToken[];
  contrastPairs: BookContrastPair[];
  components: BookComponent[];
  decisions: BookDecision[];
  presets: BookPreset[];
}

const DECISION_RE = /\bD-[A-Za-z0-9]+-\d+\b/g;
const PRESET_RE = /\bP-[A-Z]{2}-[A-Za-z0-9-]+\b/g;

function uniq(values: string[]): string[] {
  return [...new Set(values)];
}

export function resolvePackageRoot(from = dirname(fileURLToPath(import.meta.url))): string | undefined {
  let cur = from;
  for (let i = 0; i < 8; i += 1) {
    if (existsSync(join(cur, 'package.json')) && existsSync(join(cur, 'skills'))) return cur;
    const parent = dirname(cur);
    if (parent === cur) break;
    cur = parent;
  }
  return undefined;
}

// ── colour maths ────────────────────────────────────────────────────────────

function parseColor(raw: string): [number, number, number] | undefined {
  const value = raw.trim().toLowerCase();
  const hex = value.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/);
  if (hex) {
    const body = hex[1];
    const full = body.length === 3 ? body.split('').map((c) => c + c).join('') : body;
    return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16)) as [number, number, number];
  }
  const rgb = value.match(/^rgba?\(([^)]+)\)$/);
  if (rgb) {
    const parts = rgb[1].split(',').map((p) => Number.parseFloat(p.trim()));
    if (parts.length >= 3 && parts.slice(0, 3).every((n) => Number.isFinite(n))) {
      return [parts[0], parts[1], parts[2]] as [number, number, number];
    }
  }
  return undefined;
}

function relativeLuminance([r, g, b]: [number, number, number]): number {
  const channel = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

export function contrastRatio(a: string, b: string): number | undefined {
  const ca = parseColor(a);
  const cb = parseColor(b);
  if (!ca || !cb) return undefined;
  const la = relativeLuminance(ca);
  const lb = relativeLuminance(cb);
  const [hi, lo] = la >= lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
}

// ── loading ─────────────────────────────────────────────────────────────────

function findGraph(root: string): string | undefined {
  const direct = join(root, '.omd', 'system', 'graph.json');
  return existsSync(direct) ? direct : undefined;
}

function readPresetCatalog(cited: Set<string>): BookPreset[] {
  const pkgRoot = resolvePackageRoot();
  if (!pkgRoot) return [];
  const dir = join(pkgRoot, 'skills', 'omd-autopilot', 'references', 'presets');
  if (!existsSync(dir)) return [];
  const presets: BookPreset[] = [];
  const walk = (current: string, group: string) => {
    for (const entry of readdirSync(current)) {
      const full = join(current, entry);
      if (statSync(full).isDirectory()) {
        walk(full, entry);
        continue;
      }
      if (!entry.endsWith('.md') || entry === 'INDEX.md') continue;
      const text = readFileSync(full, 'utf8');
      for (const line of text.split('\n')) {
        const heading = line.match(/^##\s+(P-[A-Z]{2}-[A-Za-z0-9-]+)\s+(.+)$/);
        if (heading) {
          presets.push({
            id: heading[1],
            title: heading[2].trim(),
            group: group === 'presets' ? entry.replace(/\.md$/, '') : `${group}/${entry.replace(/\.md$/, '')}`,
            cited: cited.has(heading[1]),
          });
        }
      }
    }
  };
  walk(dir, 'presets');
  return presets;
}

function loadFromGraph(root: string, graphPath: string, designMd: string): BookSystem {
  const graph = JSON.parse(readFileSync(graphPath, 'utf8')) as Record<string, any>;
  const identity = graph.identity ?? {};
  const experience = graph.experience ?? {};
  const foundations = graph.foundations ?? {};
  const componentsStates = graph.components_states ?? {};
  const governance = graph.governance ?? {};

  const tokens: BookToken[] = Object.entries(foundations.tokens ?? {}).map(([name, raw]) => {
    const token = raw as Record<string, any>;
    const description = String(token.$description ?? '');
    return {
      name,
      type: String(token.$type ?? 'unknown'),
      value: typeof token.$value === 'object' ? JSON.stringify(token.$value) : String(token.$value ?? ''),
      description,
      decisions: uniq(description.match(DECISION_RE) ?? []),
    };
  });

  const byName = new Map(tokens.map((t) => [t.name, t.value]));
  const contrastPairs: BookContrastPair[] = (foundations.contrast_pairs ?? []).map((pair: any) => {
    const fgValue = byName.get(pair.foreground) ?? pair.foreground;
    const bgValue = byName.get(pair.background) ?? pair.background;
    const minimum = Number(pair.minimum_ratio ?? 4.5);
    const actual = contrastRatio(fgValue, bgValue);
    return {
      foreground: pair.foreground,
      background: pair.background,
      minimum,
      actual,
      status: actual === undefined ? 'unresolved' : actual + 1e-9 >= minimum ? 'pass' : 'fail',
    };
  });

  const components: BookComponent[] = (componentsStates.components ?? []).map((component: any) => {
    const applicability = component.interaction?.state_applicability ?? {};
    const semantics = String(component.semantics ?? component.description ?? '');
    return {
      id: String(component.id ?? 'component'),
      anatomy: (component.anatomy ?? []).map((a: unknown) => String(a)),
      semantics: semantics || undefined,
      presets: uniq(semantics.match(PRESET_RE) ?? []),
      states: Object.entries(applicability).map(([name, raw]) => {
        const state = raw as Record<string, any>;
        return {
          name,
          applicability: String(state.applicability ?? 'unknown'),
          reason: state.reason ? String(state.reason) : undefined,
        };
      }),
    };
  });

  const decisions: BookDecision[] = (governance.decisions ?? []).map((decision: any) => ({
    path: String(decision.path ?? ''),
    sourceClass: String(decision.source_class ?? ''),
    evidence: (decision.evidence ?? []).map((e: unknown) => String(e)),
  }));

  const citedPresets = new Set<string>([
    ...(designMd.match(PRESET_RE) ?? []),
    ...components.flatMap((c) => c.presets),
  ]);

  return {
    source: 'graph',
    root,
    name: String(identity.name ?? 'Design system'),
    kind: identity.kind ? String(identity.kind) : undefined,
    summary: experience.summary ? String(experience.summary) : undefined,
    principles: (experience.principles ?? []).map((p: unknown) => String(p)),
    direction: (experience.design_direction ?? []).map((p: unknown) => String(p)),
    avoid: (experience.avoid ?? []).map((p: unknown) => String(p)),
    tokens,
    contrastPairs,
    components,
    decisions,
    presets: readPresetCatalog(citedPresets),
  };
}

export function parseDesignMd(root: string, text: string): BookSystem {
  const lines = text.split('\n');
  const tokens: BookToken[] = [];
  const principles: string[] = [];
  const direction: string[] = [];
  const components: BookComponent[] = [];
  let section = '';
  let current: BookComponent | undefined;

  for (const line of lines) {
    const heading = line.match(/^#{2,4}\s+(.*)$/);
    if (heading) {
      const title = heading[1].trim();
      const component = title.match(/^Component:\s*(.+)$/i);
      if (component) {
        current = { id: component[1].trim(), anatomy: [], states: [], presets: [] };
        components.push(current);
        section = 'component';
        continue;
      }
      current = undefined;
      section = /principle/i.test(title) ? 'principles'
        : /design direction/i.test(title) ? 'direction'
        : /token/i.test(title) ? 'tokens'
        : '';
      continue;
    }

    const tokenLine = line.match(/^-\s+\*\*([\w.-]+)\*\*:\s*`([^`]+)`\s*(?:—|-)?\s*(.*)$/);
    if (tokenLine) {
      tokens.push({
        name: tokenLine[1],
        type: /color|#|rgb/i.test(tokenLine[2]) ? 'color' : 'unknown',
        value: tokenLine[2],
        description: tokenLine[3] ?? '',
        decisions: uniq((tokenLine[3] ?? '').match(DECISION_RE) ?? []),
      });
      continue;
    }

    const bullet = line.match(/^-\s+(.*)$/);
    if (bullet && bullet[1].trim()) {
      if (section === 'principles') principles.push(bullet[1].trim());
      else if (section === 'direction') direction.push(bullet[1].trim());
      continue;
    }

    if (current) {
      const semantics = line.match(/^\*\*Semantics:\*\*\s*(.+)$/);
      if (semantics) {
        current.semantics = semantics[1].trim();
        current.presets = uniq(semantics[1].match(PRESET_RE) ?? []);
      }
    }
  }

  const nameLine = lines.find((l) => /^#\s+/.test(l));
  const citedPresets = new Set<string>(text.match(PRESET_RE) ?? []);

  return {
    source: 'design-md',
    root,
    name: nameLine ? nameLine.replace(/^#\s+/, '').trim() : 'Design system',
    principles,
    direction,
    avoid: [],
    tokens,
    contrastPairs: [],
    components,
    decisions: [],
    presets: readPresetCatalog(citedPresets),
  };
}

export function loadSystem(root: string): BookSystem | { error: string } {
  const designMdPath = join(root, 'DESIGN.md');
  const designMd = existsSync(designMdPath) ? readFileSync(designMdPath, 'utf8') : '';
  const graphPath = findGraph(root);
  if (graphPath) return loadFromGraph(root, graphPath, designMd);
  if (designMd) return parseDesignMd(root, designMd);
  return {
    error: `No design system found in ${root}. Expected .omd/system/graph.json or DESIGN.md — run an OmD design workflow first.`,
  };
}

// ── rendering ───────────────────────────────────────────────────────────────

function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function decisionChips(decisions: string[]): string {
  if (!decisions.length) return '';
  return `<span class="chips">${decisions.map((d) => `<code class="chip">${esc(d)}</code>`).join('')}</span>`;
}

function swatch(token: BookToken): string {
  return `<div class="swatch" style="background:${esc(token.value)}"></div>`;
}

function tokenPreview(token: BookToken): string {
  const type = token.type.toLowerCase();
  if (type === 'color') return swatch(token);
  if (type === 'shadow') return `<div class="shadow-demo" style="box-shadow:${esc(token.value)}"></div>`;
  if (type === 'fontfamily') return `<div class="type-demo" style="font-family:${esc(token.value)}">가나다 Ag 123</div>`;
  if (type === 'fontsize') return `<div class="type-demo" style="font-size:${esc(token.value)}">가나다 Ag</div>`;
  if (type === 'spacing' || type === 'dimension') {
    const numeric = Number.parseFloat(token.value);
    const px = /rem$/.test(token.value) && Number.isFinite(numeric) ? numeric * 16 : numeric;
    const width = Number.isFinite(px) ? Math.min(Math.max(px, 2), 240) : 0;
    return width ? `<div class="bar" style="width:${width}px"></div>` : '';
  }
  if (type === 'duration') return `<div class="pulse" style="animation-duration:${esc(token.value)}"></div>`;
  return '';
}

function renderTokens(system: BookSystem): string {
  if (!system.tokens.length) return '<p class="empty">이 시스템에는 기록된 토큰이 없습니다.</p>';
  const groups = new Map<string, BookToken[]>();
  for (const token of system.tokens) {
    const list = groups.get(token.type) ?? [];
    list.push(token);
    groups.set(token.type, list);
  }
  return [...groups.entries()]
    .map(([type, tokens]) => `
      <h3 class="group">${esc(type)} <span class="count">${tokens.length}</span></h3>
      <table class="tokens">
        <thead><tr><th></th><th>토큰</th><th>값</th><th>근거</th></tr></thead>
        <tbody>
        ${tokens.map((token) => `
          <tr>
            <td class="preview">${tokenPreview(token)}</td>
            <td><code>${esc(token.name)}</code></td>
            <td><code class="value">${esc(token.value)}</code></td>
            <td class="why">${esc(token.description)} ${decisionChips(token.decisions)}</td>
          </tr>`).join('')}
        </tbody>
      </table>`)
    .join('');
}

function renderContrast(system: BookSystem): string {
  if (!system.contrastPairs.length) {
    return '<p class="empty">이 시스템은 대비 쌍을 선언하지 않았습니다. 선언된 쌍이 없으면 측정도 없습니다.</p>';
  }
  const failures = system.contrastPairs.filter((p) => p.status === 'fail').length;
  const banner = failures
    ? `<p class="fail-banner">${failures}개 쌍이 선언한 최소 대비에 미달합니다.</p>`
    : '<p class="pass-banner">선언된 모든 쌍이 최소 대비를 만족합니다.</p>';
  return `${banner}
    <table class="tokens">
      <thead><tr><th>전경</th><th>배경</th><th>요구</th><th>실측</th><th>판정</th></tr></thead>
      <tbody>
      ${system.contrastPairs.map((pair) => `
        <tr>
          <td><code>${esc(pair.foreground)}</code></td>
          <td><code>${esc(pair.background)}</code></td>
          <td>${pair.minimum.toFixed(1)}:1</td>
          <td>${pair.actual ? `${pair.actual.toFixed(2)}:1` : '—'}</td>
          <td><span class="badge ${pair.status}">${pair.status === 'pass' ? '통과' : pair.status === 'fail' ? '미달' : '측정 불가'}</span></td>
        </tr>`).join('')}
      </tbody>
    </table>`;
}

function renderComponents(system: BookSystem): string {
  if (!system.components.length) return '<p class="empty">기록된 컴포넌트가 없습니다.</p>';
  return system.components.map((component) => `
    <article class="component">
      <h3>${esc(component.id)}${component.presets.length ? `<span class="chips">${component.presets.map((p) => `<code class="chip preset">${esc(p)}</code>`).join('')}</span>` : ''}</h3>
      ${component.semantics ? `<p class="semantics">${esc(component.semantics)}</p>` : ''}
      ${component.anatomy.length ? `<p class="label">해부</p><ul class="anatomy">${component.anatomy.map((a) => `<li>${esc(a)}</li>`).join('')}</ul>` : ''}
      ${component.states.length ? `
        <p class="label">상태</p>
        <table class="tokens states">
          <tbody>
          ${component.states.map((state) => `
            <tr>
              <td><code>${esc(state.name)}</code></td>
              <td><span class="badge ${state.applicability === 'applicable' ? 'pass' : 'muted'}">${esc(state.applicability)}</span></td>
              <td class="why">${state.reason ? esc(state.reason) : ''}</td>
            </tr>`).join('')}
          </tbody>
        </table>` : ''}
    </article>`).join('');
}

function renderDecisions(system: BookSystem): string {
  if (!system.decisions.length) return '<p class="empty">기록된 결정 출처가 없습니다.</p>';
  return `<table class="tokens">
    <thead><tr><th>경로</th><th>출처 등급</th><th>근거</th></tr></thead>
    <tbody>
    ${system.decisions.map((decision) => `
      <tr>
        <td><code>${esc(decision.path)}</code></td>
        <td><span class="badge ${decision.sourceClass.includes('prompt') ? 'pass' : 'muted'}">${esc(decision.sourceClass)}</span></td>
        <td class="why">${decision.evidence.map((e) => `<code class="value">${esc(e)}</code>`).join(' ')}</td>
      </tr>`).join('')}
    </tbody>
  </table>`;
}

function renderPresets(system: BookSystem): string {
  if (!system.presets.length) {
    return '<p class="empty">설치된 프리셋 카탈로그를 찾지 못했습니다.</p>';
  }
  const cited = system.presets.filter((p) => p.cited);
  const groups = new Map<string, BookPreset[]>();
  for (const preset of system.presets) {
    const list = groups.get(preset.group) ?? [];
    list.push(preset);
    groups.set(preset.group, list);
  }
  return `
    <p class="lede">이 프로젝트가 인용한 프리셋 <strong>${cited.length}</strong>개 / 카탈로그 전체 ${system.presets.length}개.</p>
    ${[...groups.entries()].map(([group, presets]) => `
      <h3 class="group">${esc(group)} <span class="count">${presets.length}</span></h3>
      <ul class="presets">
        ${presets.map((preset) => `<li class="${preset.cited ? 'cited' : ''}"><code>${esc(preset.id)}</code> ${esc(preset.title)}${preset.cited ? '<span class="badge pass">사용</span>' : ''}</li>`).join('')}
      </ul>`).join('')}`;
}

export function renderBook(system: BookSystem): string {
  const sections: Array<[string, string, string]> = [
    ['overview', '개요', `
      ${system.summary ? `<p class="lede">${esc(system.summary)}</p>` : ''}
      ${system.principles.length ? `<p class="label">원칙</p><ul class="prose">${system.principles.map((p) => `<li>${esc(p)} ${decisionChips(uniq(p.match(DECISION_RE) ?? []))}</li>`).join('')}</ul>` : ''}
      ${system.direction.length ? `<p class="label">방향</p><ul class="prose">${system.direction.map((p) => `<li>${esc(p)} ${decisionChips(uniq(p.match(DECISION_RE) ?? []))}</li>`).join('')}</ul>` : ''}
      ${system.avoid.length ? `<p class="label">피하는 것</p><ul class="prose">${system.avoid.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>` : ''}`],
    ['tokens', `토큰 (${system.tokens.length})`, renderTokens(system)],
    ['contrast', `대비 (${system.contrastPairs.length})`, renderContrast(system)],
    ['components', `컴포넌트 (${system.components.length})`, renderComponents(system)],
    ['decisions', `결정 출처 (${system.decisions.length})`, renderDecisions(system)],
    ['presets', '프리셋', renderPresets(system)],
  ];

  return `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(system.name)} — omd book</title>
<style>
:root {
  --paper: #fbfaf8; --ink: #1d1b18; --muted: #6b6459; --rule: #e2ddd4;
  --inset: #f2efe9; --accent: #8b4529; --pass: #1f6f4a; --fail: #a32b18;
  --radius: 10px; --gap: 20px;
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --paper: #16151300; --paper: #161513; --ink: #f2efe9; --muted: #a49a8c;
    --rule: #302c27; --inset: #1f1d1a; --accent: #d98a63; --pass: #6ecf9f; --fail: #f08a75;
  }
}
* { box-sizing: border-box; }
body {
  margin: 0; background: var(--paper); color: var(--ink);
  font-family: "Pretendard Variable", Pretendard, -apple-system, "Apple SD Gothic Neo", "Noto Sans KR", system-ui, sans-serif;
  line-height: 1.65; word-break: keep-all;
}
.shell { display: grid; grid-template-columns: 232px minmax(0, 1fr); min-height: 100vh; }
nav {
  border-right: 1px solid var(--rule); padding: 28px 20px; position: sticky; top: 0;
  height: 100vh; overflow-y: auto;
}
nav .brand { font-weight: 800; font-size: 1.05rem; letter-spacing: -0.01em; }
nav .src { color: var(--muted); font-size: 0.75rem; margin-top: 4px; }
nav ul { list-style: none; padding: 0; margin: 22px 0 0; display: flex; flex-direction: column; gap: 2px; }
nav a {
  display: block; padding: 8px 10px; border-radius: 8px; color: var(--muted);
  text-decoration: none; font-size: 0.875rem; min-height: 40px;
}
nav a:hover { background: var(--inset); color: var(--ink); }
main { padding: 40px 44px 96px; max-width: 1120px; }
section { scroll-margin-top: 24px; padding-bottom: 56px; }
h2 { font-size: 1.5rem; letter-spacing: -0.01em; margin: 0 0 6px; }
h3.group { font-size: 0.95rem; margin: 32px 0 10px; text-transform: none; }
h3.group .count { color: var(--muted); font-weight: 500; margin-left: 6px; }
p.lede { color: var(--muted); max-width: 62ch; margin-top: 0; }
p.label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.04em; color: var(--muted); margin: 24px 0 8px; }
ul.prose { max-width: 74ch; padding-left: 18px; }
ul.prose li { margin-bottom: 8px; }
table.tokens { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
table.tokens th {
  text-align: left; font-size: 0.72rem; letter-spacing: 0.04em; color: var(--muted);
  font-weight: 600; padding: 0 12px 8px 0; border-bottom: 1px solid var(--rule);
}
table.tokens td { padding: 10px 12px 10px 0; border-bottom: 1px solid var(--rule); vertical-align: top; }
td.preview { width: 56px; }
td.why { color: var(--muted); }
code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.8rem; }
code.value { color: var(--muted); }
.chips { display: inline-flex; gap: 4px; flex-wrap: wrap; margin-left: 6px; }
.chip {
  background: var(--inset); border: 1px solid var(--rule); border-radius: 999px;
  padding: 1px 8px; font-size: 0.7rem; color: var(--ink);
}
.chip.preset { border-color: var(--accent); color: var(--accent); }
.swatch { width: 40px; height: 40px; border-radius: 8px; border: 1px solid var(--rule); }
.shadow-demo { width: 40px; height: 26px; border-radius: 6px; background: var(--paper); border: 1px solid var(--rule); }
.type-demo { white-space: nowrap; }
.bar { height: 10px; border-radius: 999px; background: var(--accent); opacity: 0.75; }
.pulse { width: 14px; height: 14px; border-radius: 50%; background: var(--accent); animation: pulse linear infinite alternate; }
@keyframes pulse { from { opacity: 0.25; } to { opacity: 1; } }
@media (prefers-reduced-motion: reduce) { .pulse { animation: none; opacity: 0.8; } }
.badge {
  display: inline-block; padding: 1px 8px; border-radius: 999px; font-size: 0.72rem;
  border: 1px solid var(--rule); color: var(--muted);
}
.badge.pass { color: var(--pass); border-color: currentColor; }
.badge.fail { color: var(--fail); border-color: currentColor; }
.pass-banner { color: var(--pass); }
.fail-banner { color: var(--fail); font-weight: 700; }
article.component { border-top: 1px solid var(--rule); padding: 22px 0; }
article.component h3 { margin: 0 0 6px; font-size: 1rem; }
.semantics { color: var(--muted); max-width: 70ch; margin: 0; }
ul.anatomy, ul.presets { list-style: none; padding: 0; margin: 0; }
ul.anatomy li { padding: 4px 0; color: var(--muted); font-size: 0.875rem; }
ul.presets li { padding: 7px 0; border-bottom: 1px solid var(--rule); display: flex; gap: 8px; align-items: baseline; }
ul.presets li.cited { color: var(--ink); }
ul.presets li:not(.cited) { color: var(--muted); }
.empty { color: var(--muted); }
@media (max-width: 860px) {
  .shell { grid-template-columns: 1fr; }
  nav { position: static; height: auto; border-right: 0; border-bottom: 1px solid var(--rule); }
  main { padding: 28px 20px 72px; }
}
</style>
</head>
<body>
<div class="shell">
  <nav>
    <div class="brand">${esc(system.name)}</div>
    <div class="src">omd book · ${system.source === 'graph' ? '컴파일된 그래프' : 'DESIGN.md 파싱'}</div>
    <ul>
      ${sections.map(([id, title]) => `<li><a href="#${id}">${esc(title)}</a></li>`).join('')}
    </ul>
  </nav>
  <main>
    ${sections.map(([id, title, body]) => `<section id="${id}"><h2>${esc(title)}</h2>${body}</section>`).join('')}
  </main>
</div>
</body>
</html>`;
}

// ── command ─────────────────────────────────────────────────────────────────

export interface BookOptions {
  dir?: string;
  port?: string | number;
  staticOut?: string;
  open?: boolean;
}

async function listen(html: () => string, port: number, attempts = 10): Promise<number> {
  for (let i = 0; i < attempts; i += 1) {
    const candidate = port + i;
    const ok = await new Promise<boolean>((res) => {
      const server = createServer((req, response) => {
        if (req.url && req.url.startsWith('/health')) {
          response.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
          response.end('{"ok":true}');
          return;
        }
        response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
        response.end(html());
      });
      server.on('error', (error: NodeJS.ErrnoException) => {
        if (error.code === 'EADDRINUSE') res(false);
        else {
          console.error(pc.red(`omd book: ${error.message}`));
          res(false);
        }
      });
      server.listen(candidate, () => res(true));
    });
    if (ok) return candidate;
  }
  return -1;
}

export async function runBook(options: BookOptions = {}): Promise<number> {
  const root = resolve(options.dir ?? process.cwd());
  const loaded = loadSystem(root);
  if ('error' in loaded) {
    console.error(pc.red(loaded.error));
    return 1;
  }

  if (options.staticOut) {
    const outDir = resolve(options.staticOut);
    mkdirSync(outDir, { recursive: true });
    const file = join(outDir, 'index.html');
    writeFileSync(file, renderBook(loaded), 'utf8');
    console.log(pc.green(`omd book → ${file}`));
    return 0;
  }

  const requested = Number(options.port ?? 6060);
  const port = await listen(() => {
    // Re-read on every request so the book tracks edits without a restart.
    const fresh = loadSystem(root);
    return 'error' in fresh ? renderBook(loaded) : renderBook(fresh);
  }, Number.isFinite(requested) ? requested : 6060);

  if (port < 0) {
    console.error(pc.red('omd book: no free port found in range.'));
    return 1;
  }

  const url = `http://localhost:${port}`;
  console.log(`${pc.bold(loaded.name)} — ${loaded.tokens.length} tokens · ${loaded.components.length} components · ${loaded.contrastPairs.length} contrast pairs`);
  console.log(pc.green(`omd book listening on ${url}`));
  console.log(pc.dim('Ctrl+C to stop. The page re-reads the system on every refresh.'));

  if (options.open) {
    const { spawn } = await import('node:child_process');
    const opener = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open';
    spawn(opener, [url], { stdio: 'ignore', detached: true }).unref();
  }

  return new Promise<number>(() => {
    /* keep the process alive until interrupted */
  });
}
