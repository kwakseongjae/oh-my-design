#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { readReferenceSource } from "./lib/reference-source.mjs";
import { chromium, type Page, type Response as PlaywrightResponse } from "playwright-core";
import {
  aggregateReferenceEvidence,
  type FontFaceEvidence,
  type InteractionEvidence,
  type InteractionEvidenceKind,
  type RawElementEvidence,
  type ReferenceEvidenceBundle,
} from "../src/lib/references/evidence.ts";
import { dedupeRouteUrls, isUnsafeCaptureSurface } from "../src/lib/references/capture-policy.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = resolve(__dirname, "..");
const ROOT = resolve(WEB_ROOT, "..");

function option(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

function slugFromUrl(value: string): string {
  return new URL(value).hostname.replace(/^www\./, "").split(".")[0] || "reference";
}

const target = process.argv.slice(2).find((value) => !value.startsWith("--") && !process.argv[process.argv.indexOf(value) - 1]?.startsWith("--"));
if (!target) {
  console.error("Usage: capture-reference-evidence <reference-id|url> [--url <url>] [--max-routes 3] [--out <file>] [--json] [--no-interactions] [--baseline-only]");
  process.exit(1);
}

const isUrl = /^https?:\/\//.test(target);
const referenceId = option("--id") ?? (isUrl ? slugFromUrl(target) : target);
const designPath = join(WEB_ROOT, "references", referenceId, "DESIGN.md");
// Through the package-aware reader: an adopted reference keeps its frontmatter
// in `.omd/`, and reading the raw file would return a Core body this parses to nothing.
const markdown = existsSync(designPath)
  ? readReferenceSource(join(WEB_ROOT, "references", referenceId)).markdown
  : "";
const homepage = option("--url") ?? (isUrl ? target : markdown.match(/^homepage:\s*"?([^"\n]+)"?/m)?.[1]);
if (!homepage) throw new Error(`no homepage for ${referenceId}; pass --url`);

const output = resolve(option("--out") ?? join(ROOT, "artifacts", "reference-evidence", `${referenceId}.json`));
const explicitRoutes = option("--routes")?.split(",").map((value) => value.trim()).filter(Boolean) ?? [];
const routeConfigPath = join(ROOT, "config", "reference-capture-routes.json");
const routeConfig = existsSync(routeConfigPath)
  ? JSON.parse(readFileSync(routeConfigPath, "utf8")) as {
      schemaVersion?: number;
      references?: Record<string, string[] | { routes: string[]; maxRoutes?: number }>;
    }
  : undefined;
if (routeConfig && routeConfig.schemaVersion !== 1) throw new Error(`unsupported capture route config: ${routeConfig.schemaVersion}`);
const routeEntry = routeConfig?.references?.[referenceId];
const configuredRoutes = Array.isArray(routeEntry) ? routeEntry : routeEntry?.routes ?? [];
const maxRoutes = Number(option("--max-routes") ?? (!Array.isArray(routeEntry) ? routeEntry?.maxRoutes : undefined) ?? "3");
if (!Number.isInteger(maxRoutes) || maxRoutes < 1 || maxRoutes > 8) throw new Error(`invalid --max-routes: ${maxRoutes}`);
const captureExpandedInteractions = !process.argv.includes("--no-interactions");
const capturePseudoStates = !process.argv.includes("--baseline-only");
if (!Array.isArray(configuredRoutes) || configuredRoutes.some((value) => typeof value !== "string" || !/^https?:\/\//.test(value))) {
  throw new Error(`invalid capture routes for ${referenceId}`);
}

const chromeCandidates = [
  process.env.OMD_CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
].filter((value): value is string => Boolean(value));
const chromePath = chromeCandidates.find(existsSync);
if (!chromePath) throw new Error("Chrome executable not found; set OMD_CHROME_PATH");

function normalizeFamily(value: string): string {
  return value.replace(/["']/g, "").trim();
}

function fontSources(css: string, cssUrl: string): FontFaceEvidence[] {
  const results: FontFaceEvidence[] = [];
  for (const match of css.matchAll(/@font-face\s*{([\s\S]*?)}/gi)) {
    const body = match[1];
    const family = normalizeFamily(body.match(/font-family\s*:\s*([^;]+)/i)?.[1] ?? "");
    if (!family) continue;
    const sources = [...body.matchAll(/url\((['"]?)(.*?)\1\)/gi)].flatMap((item) => {
      try { return [new URL(item[2], cssUrl).href]; } catch { return []; }
    });
    results.push({
      family,
      status: "declared",
      weight: body.match(/font-weight\s*:\s*([^;]+)/i)?.[1]?.trim() ?? "normal",
      style: body.match(/font-style\s*:\s*([^;]+)/i)?.[1]?.trim() ?? "normal",
      sources,
    });
  }
  return results;
}

// Consent is refused, never granted (2026-09-30). The July version clicked "Accept", "동의",
// "모두 동의" and the first button inside any cookie container, which contradicts the probe
// brief's reject-only rule. It now presses only reject / necessary-only controls and close
// buttons, with the same vocabulary as probe-keyboard-states.mjs.
const CONSENT_REJECT_SELECTORS = [
  "#onetrust-reject-all-handler", "#reject-all", "#CybotCookiebotDialogBodyButtonDecline",
  "button[data-testid='uc-deny-all-button']", ".didomi-continue-without-agreeing", "#didomi-notice-disagree-button",
];
const CONSENT_REJECT_WORDS = /^(reject all|reject|decline all|decline|only necessary|necessary only|use necessary only|essential only|only essential|deny all|deny|refuse|모두 거부|거부|필수(만| 항목만| 쿠키만) (허용|동의)(하기)?|拒否する|すべて拒否)$/i;

async function dismissObstructions(page: Page): Promise<void> {
  await page.keyboard.press("Escape").catch(() => {});
  const selectors = [
    ...CONSENT_REJECT_SELECTORS,
    '[aria-label*="close" i]', '[aria-label*="dismiss" i]', '[aria-label*="닫기"]',
  ];
  for (const selector of selectors) {
    const locator = page.locator(selector).first();
    if (await locator.isVisible({ timeout: 150 }).catch(() => false)) {
      await locator.click({ timeout: 500 }).catch(() => {});
    }
  }
  const rejectByText = page.locator("button, a[role='button'], [role='button']").filter({ hasText: CONSENT_REJECT_WORDS }).first();
  if (await rejectByText.isVisible({ timeout: 150 }).catch(() => false)) {
    await rejectByText.click({ timeout: 500 }).catch(() => {});
  }
}

async function discoverRoutes(page: Page, baseUrl: string): Promise<{ routes: string[]; fontOrLicenseUrls: string[]; publicDesignSystemUrls: string[] }> {
  const links = await page.evaluate(() => [...document.querySelectorAll("a[href]")].map((anchor) => (anchor as HTMLAnchorElement).href));
  const base = new URL(baseUrl);
  const unique = [...new Set<string>(links)];
  const routeWeight = (url: string) => {
    const path = new URL(url).pathname.toLowerCase();
    if (/design-system|\/components?(?:\/|$)|storybook|styleguide/.test(path)) return 100;
    if (/\/styles?(?:\/|$)|typography|tokens?/.test(path)) return 90;
    if (/product|features|pricing|solutions/.test(path)) return 70;
    if (/docs|about|brand/.test(path)) return 30;
    return 0;
  };
  const routes = unique
    .filter((url) => { try { const parsed = new URL(url); return parsed.origin === base.origin && !isUnsafeCaptureSurface(url); } catch { return false; } })
    .filter((url) => routeWeight(url) > 0)
    .sort((a, b) => routeWeight(b) - routeWeight(a) || a.localeCompare(b));
  const fontOrLicenseUrls = unique.filter((url) => /font|typography|typeface|license/i.test(url)).slice(0, 20);
  const publicDesignSystemUrls = unique.filter((url) => /design-system|components|storybook|styleguide|\.design(?:\/|$)/i.test(url)).slice(0, 20);
  return { routes, fontOrLicenseUrls, publicDesignSystemUrls };
}

// Painted fill (2026-09-30). Framer and Webflow draw each button as a transparent <a> whose
// fill sits on a child div, and kakaopage's 첫 화 보기 is a transparent <button> whose yellow
// sits on its grandparent. The control's own backgroundColor reads transparent, so its
// component and state evidence came out empty. For an interactive element whose own
// background-color is transparent and whose background-image is none, the collector also
// records the fill it paints, next to backgroundColor and never over it:
//   1. the first descendant (breadth-first, open shadow roots pierced, <svg> skipped, nothing
//      under display:none or opacity:0) whose box covers >= 85% of the control's box and which
//      has a non-transparent background-color or a gradient background-image; else
//   2. the first of 3 ancestors whose box is within 15% of the control's on every side and
//      which has such a fill.
// A covering <img>/<video>/<canvas>/<iframe> or url() image means the control's face is media,
// not a fill, so nothing is recorded (an image-card link would otherwise report its
// placeholder colour). Fields: paintedBackgroundColor, paintedBackgroundImage (gradients only)
// and paintedBy ("descendant:div.framer-xyz" / "ancestor:2"). The pseudo-state pass reads the
// same painted element again under hover, pressed and focus. Same scope idea as
// probe-keyboard-states.mjs, which compares descendants and 3 ancestor levels.
type PaintedFill = { color?: string; image?: string; by: string };
type Inspection = { painted: PaintedFill | null; coveredByMedia: boolean };
type PaintApi = {
  inspect(element: Element, key?: string): Inspection;
  resolve(element: Element, key?: string): PaintedFill | null;
  read(element: Element, key: string | null): PaintedFill | null;
};

/** Installs the painted-fill resolver on the page once per document (idempotent). */
async function installPaintResolver(page: Page): Promise<void> {
  await page.evaluate(() => {
    const host = window as unknown as { __omdPaint?: PaintApi };
    if (host.__omdPaint) return;
    const COVER = 0.85; // share of the control's box a descendant must cover
    const SLACK = 0.15; // per-side tolerance for an ancestor, as a share of the control's width / height
    const UP = 3; // ancestor levels
    const MAX_NODES = 200; // descendants inspected per control, breadth-first
    const GRADIENT = /(?:repeating-)?(?:linear|radial|conic)-gradient\(/i;
    const MEDIA = /^(?:img|picture|video|canvas|iframe|object|embed)$/;
    const SKIP = /^(?:svg|script|style|template|noscript)$/;
    // Nested controls are captured with their own fill. A link wrapping a filled <button> (goorm)
    // would otherwise count that fill twice and turn the wrapper into a second copy of the button.
    const CONTROL = 'button,a,input,select,textarea,[role="button"],[role="tab"],[role="switch"],[tabindex]';
    const alpha = (value: string): number => {
      const raw = value.trim().toLowerCase();
      if (!raw || raw === "transparent") return 0;
      const rgba = raw.match(/^rgba?\(([^)]*)\)$/);
      const last = rgba ? rgba[1].split(/[\s,/]+/).filter(Boolean)[3] : raw.match(/\/\s*([\d.]+%?)\s*\)$/)?.[1];
      if (last === undefined) return 1;
      return last.endsWith("%") ? Number(last.slice(0, -1)) / 100 : Number(last);
    };
    const gradientOf = (style: CSSStyleDeclaration): string | undefined =>
      GRADIENT.test(style.backgroundImage) && !/url\(/i.test(style.backgroundImage) ? style.backgroundImage : undefined;
    const fillOf = (style: CSSStyleDeclaration): Omit<PaintedFill, "by"> | null => {
      const color = alpha(style.backgroundColor) > 0 ? style.backgroundColor : undefined;
      const image = gradientOf(style);
      return color || image ? { ...(color ? { color } : {}), ...(image ? { image } : {}) } : null;
    };
    const parentOf = (node: Element): Element | null => node.parentElement ?? ((node.getRootNode() as ShadowRoot).host ?? null);
    const childrenOf = (node: Element): Element[] => [...node.children, ...(node.shadowRoot ? [...node.shadowRoot.children] : [])];
    const label = (node: Element): string => {
      const className = (node as HTMLElement).className;
      const first = typeof className === "string" ? className.trim().split(/\s+/)[0] ?? "" : "";
      return `${node.tagName.toLowerCase()}${first ? `.${first.slice(0, 48)}` : ""}`;
    };
    const targets = new Map<string, { node: Element; by: string }>();
    // One walk per interactive control: whether media covers its face (recorded for every
    // interactive element, for the filled-anchor button rule) and, only when its own background
    // is transparent with no image, the fill it paints.
    const inspect = (element: Element, key?: string): Inspection => {
      const own = getComputedStyle(element);
      if (/url\(/i.test(own.backgroundImage)) return { painted: null, coveredByMedia: true }; // an image link
      const transparent = alpha(own.backgroundColor) === 0 && own.backgroundImage === "none";
      const box = element.getBoundingClientRect();
      const area = box.width * box.height;
      if (area <= 0) return { painted: null, coveredByMedia: false };
      let found: { node: Element; fill: Omit<PaintedFill, "by">; by: string } | null = null;
      const queue = childrenOf(element);
      for (let index = 0; index < queue.length && index < MAX_NODES; index++) {
        const node = queue[index];
        const tag = node.tagName.toLowerCase();
        if (SKIP.test(tag)) continue;
        const rect = node.getBoundingClientRect();
        const width = Math.min(rect.right, box.right) - Math.max(rect.left, box.left);
        const height = Math.min(rect.bottom, box.bottom) - Math.max(rect.top, box.top);
        if (width <= 0 || height <= 0 || (width * height) / area < COVER) {
          if (queue.length < MAX_NODES * 2) queue.push(...childrenOf(node));
          continue;
        }
        const style = getComputedStyle(node);
        if (style.display === "none" || Number(style.opacity) === 0) continue; // nothing under it paints
        if (node.matches(CONTROL)) continue; // a nested control: its fill and face are its own evidence
        if (queue.length < MAX_NODES * 2) queue.push(...childrenOf(node));
        if (style.visibility !== "visible") continue;
        if (MEDIA.test(tag) || /url\(/i.test(style.backgroundImage)) return { painted: null, coveredByMedia: true }; // the face is media, not a fill
        const fill: Omit<PaintedFill, "by"> | null = found || !transparent ? null : fillOf(style);
        if (fill) found = { node, fill, by: `descendant:${label(node)}` };
      }
      if (!transparent) return { painted: null, coveredByMedia: false };
      if (!found) {
        let node = parentOf(element);
        for (let level = 1; level <= UP && node && node !== document.body && node !== document.documentElement; level++, node = parentOf(node)) {
          if (node.matches(CONTROL)) break; // the enclosing control is captured with its own fill
          const rect = node.getBoundingClientRect();
          const dx = box.width * SLACK;
          const dy = box.height * SLACK;
          if (Math.abs(rect.left - box.left) > dx || Math.abs(rect.right - box.right) > dx
            || Math.abs(rect.top - box.top) > dy || Math.abs(rect.bottom - box.bottom) > dy) continue;
          const style = getComputedStyle(node);
          if (/url\(/i.test(style.backgroundImage)) return { painted: null, coveredByMedia: false }; // an image behind it, not a fill
          const fill = fillOf(style);
          if (fill) { found = { node, fill, by: `ancestor:${level}` }; break; }
        }
      }
      if (!found) return { painted: null, coveredByMedia: false };
      if (key !== undefined) targets.set(key, { node: found.node, by: found.by });
      return { painted: { ...found.fill, by: found.by }, coveredByMedia: false };
    };
    const resolve = (element: Element, key?: string): PaintedFill | null => inspect(element, key).painted;
    // Under hover / pressed / focus: the element found at rest, read as it is now (its fill may
    // turn transparent). A control with none at rest, or whose painted node was replaced since,
    // is resolved again, so a ghost button whose child fills only on hover is seen too.
    const read = (element: Element, key: string | null): PaintedFill | null => {
      const target = key === null ? undefined : targets.get(key);
      if (!target?.node.isConnected) return resolve(element);
      const style = getComputedStyle(target.node);
      const image = gradientOf(style);
      return { color: style.backgroundColor, ...(image ? { image } : {}), by: target.by };
    };
    host.__omdPaint = { inspect, resolve, read };
  });
}

/** Style fields for a painted fill; empty when the control paints its own background. */
function paintedStyle(painted: PaintedFill | null | undefined): Partial<RawElementEvidence["style"]> {
  if (!painted) return {};
  return {
    ...(painted.color ? { paintedBackgroundColor: painted.color } : {}),
    ...(painted.image ? { paintedBackgroundImage: painted.image } : {}),
    paintedBy: painted.by,
  };
}

async function captureElements(page: Page, surfaceId: string): Promise<RawElementEvidence[]> {
  await installPaintResolver(page);
  const raw = await page.evaluate(() => {
    const selectors = [
      "body", "h1", "h2", "h3", "h4", "p", "button", "a", "input", "select", "textarea", "article", "li",
      "[role]", '[class*="card" i]', '[class*="button" i]', '[class*="badge" i]', '[class*="chip" i]',
      '[class*="tab" i]', '[class*="dialog" i]', '[class*="modal" i]', '[class*="toast" i]', '[class*="avatar" i]',
    ].join(",");
    const seen = new Set<Element>();
    const candidates = [...document.querySelectorAll(selectors)].filter((element) => {
      if (seen.has(element)) return false;
      seen.add(element);
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      return rect.width >= 12 && rect.height >= 8 && rect.bottom >= 0 && rect.top <= document.documentElement.scrollHeight && style.display !== "none" && style.visibility !== "hidden" && Number(style.opacity) > 0;
    }).slice(0, 500);
    let interactiveIndex = 0;
    return candidates.map((element) => {
      const html = element as HTMLElement;
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      const interactive = element.matches('button,a,input,select,textarea,[role="button"],[role="tab"],[role="switch"],[tabindex]');
      const selector = interactive ? `[data-omd-capture="${interactiveIndex++}"]` : (() => {
        const id = html.id ? `#${CSS.escape(html.id)}` : "";
        const testId = html.getAttribute("data-testid");
        return id || (testId ? `[data-testid="${CSS.escape(testId)}"]` : element.tagName.toLowerCase());
      })();
      if (interactive) html.setAttribute("data-omd-capture", String(interactiveIndex - 1));
      const paint = (window as unknown as { __omdPaint?: PaintApi }).__omdPaint;
      const inspected = interactive ? paint?.inspect(element, String(interactiveIndex - 1)) : undefined;
      return {
        painted: inspected?.painted ?? null,
        selector,
        tagName: element.tagName.toLowerCase(),
        role: element.getAttribute("role"),
        inputType: element.getAttribute("type"),
        className: typeof html.className === "string" ? html.className.slice(0, 160) : "",
        ariaHasPopup: element.getAttribute("aria-haspopup"),
        ariaSelected: element.getAttribute("aria-selected"),
        ariaChecked: element.getAttribute("aria-checked"),
        disabled: (element as HTMLButtonElement).disabled === true || element.getAttribute("aria-disabled") === "true",
        textLength: (element.textContent ?? "").trim().length,
        coveredByMedia: inspected?.coveredByMedia,
        rect: { width: Math.round(rect.width), height: Math.round(rect.height), top: Math.round(rect.top + window.scrollY) },
        style: {
          color: style.color,
          backgroundColor: style.backgroundColor,
          borderColor: style.borderColor,
          borderWidth: style.borderWidth,
          borderRadius: style.borderRadius,
          boxShadow: style.boxShadow,
          padding: style.padding,
          margin: style.margin,
          gap: style.gap,
          fontFamily: style.fontFamily,
          fontSize: style.fontSize,
          fontWeight: style.fontWeight,
          lineHeight: style.lineHeight,
          letterSpacing: style.letterSpacing,
        },
      };
    });
  });
  return raw.map(({ painted, ...element }: Omit<RawElementEvidence, "surfaceId"> & { painted: PaintedFill | null }) => ({
    ...element,
    style: { ...element.style, ...paintedStyle(painted) },
    surfaceId,
    selector: `${surfaceId}::${element.selector}`,
  }));
}

// Each state read gives up after 2s (2026-09-30). The read had no timeout, so a locator whose
// stamped node had been replaced waited Playwright's 30s default on every read: four reads per
// control, 24 controls, far past the 90s step budget. A control whose rest read fails is skipped.
const STATE_READ_TIMEOUT_MS = 2_000;

async function captureStates(page: Page, surfaceId: string, elements: readonly RawElementEvidence[]): Promise<{
  states: Record<string, string[]>;
  elements: RawElementEvidence[];
}> {
  const result: Record<string, string[]> = {};
  const captured: RawElementEvidence[] = [];
  const interactive = elements.filter((element) => element.selector.includes("[data-omd-capture=")).slice(0, 24);
  await installPaintResolver(page).catch(() => {});
  for (const element of interactive) {
    const domSelector = element.selector.split("::")[1];
    const locator = page.locator(domSelector).first();
    const read = () => locator.evaluate((node: Element) => {
      const style = getComputedStyle(node);
      const paint = (window as unknown as { __omdPaint?: PaintApi }).__omdPaint;
      return {
        painted: paint?.read(node, node.getAttribute("data-omd-capture")) ?? null,
        color: style.color,
        backgroundColor: style.backgroundColor,
        borderColor: style.borderColor,
        borderWidth: style.borderWidth,
        borderRadius: style.borderRadius,
        boxShadow: style.boxShadow,
        padding: style.padding,
        margin: style.margin,
        gap: style.gap,
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        lineHeight: style.lineHeight,
        letterSpacing: style.letterSpacing,
        transform: style.transform,
      };
    }, undefined, { timeout: STATE_READ_TIMEOUT_MS }).catch(() => null);
    const base = await read();
    if (!base) continue; // the stamped node is gone; there is nothing to compare a state against
    const states: string[] = [];
    const capture = (state: string, value: Awaited<ReturnType<typeof read>>) => {
      if (!value || JSON.stringify(value) === JSON.stringify(base)) return;
      states.push(state);
      const { transform, painted, ...style } = value;
      void transform; // state detection uses transform; raw token evidence deliberately excludes it
      const selector = `${element.selector}::state-${state}`;
      captured.push({ ...element, selector, style: { ...style, ...paintedStyle(painted) } });
      result[selector] = [state];
    };
    await locator.hover({ timeout: 500 }).catch(() => {});
    capture("hover", await read());
    await page.mouse.down().catch(() => {});
    capture("pressed", await read());
    await page.mouse.move(0, 0).catch(() => {});
    await page.mouse.up().catch(() => {});
    await page.mouse.move(0, 0).catch(() => {});
    await locator.focus({ timeout: 500 }).catch(() => {});
    capture("focus", await read());
    if (states.length) result[`${surfaceId}::${domSelector}`] = states;
  }
  return { states: result, elements: captured };
}

async function captureInteractionTargets(
  page: Page,
  surfaceId: string,
  phase: string,
  targetSelector: string,
): Promise<RawElementEvidence[]> {
  await installPaintResolver(page).catch(() => {});
  const raw = await page.evaluate(({ phase, targetSelector }) => {
    const visible = (element: Element) => {
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      return rect.width >= 8 && rect.height >= 8 && style.display !== "none" && style.visibility !== "hidden" && Number(style.opacity) > 0;
    };
    const semantic = [
      "button", "a", "input", "select", "textarea", "li", "[role]",
      '[class*="button" i]', '[class*="menu" i]', '[class*="dialog" i]',
      '[class*="toast" i]', '[class*="alert" i]', '[class*="tab" i]',
    ].join(",");
    const seen = new Set<Element>();
    const candidates: Element[] = [];
    for (const root of document.querySelectorAll(targetSelector)) {
      for (const element of [root, ...root.querySelectorAll(semantic)]) {
        if (seen.has(element) || !visible(element)) continue;
        seen.add(element);
        candidates.push(element);
      }
    }
    const paint = (window as unknown as { __omdPaint?: PaintApi }).__omdPaint;
    const interactive = 'button,a,input,select,textarea,[role="button"],[role="tab"],[role="switch"],[tabindex]';
    return candidates.slice(0, 120).map((element, index) => {
      const html = element as HTMLElement;
      const value = `${phase}-${index}`;
      html.setAttribute("data-omd-interaction-capture", value);
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      const inspected = element.matches(interactive) ? paint?.inspect(element) : undefined;
      return {
        painted: inspected?.painted ?? null,
        selector: `[data-omd-interaction-capture="${value}"]`,
        tagName: element.tagName.toLowerCase(),
        role: element.getAttribute("role"),
        inputType: element.getAttribute("type"),
        className: typeof html.className === "string" ? html.className.slice(0, 160) : "",
        ariaHasPopup: element.getAttribute("aria-haspopup"),
        ariaSelected: element.getAttribute("aria-selected"),
        ariaChecked: element.getAttribute("aria-checked"),
        disabled: (element as HTMLButtonElement).disabled === true || element.getAttribute("aria-disabled") === "true",
        textLength: (element.textContent ?? "").trim().length,
        coveredByMedia: inspected?.coveredByMedia,
        rect: { width: Math.round(rect.width), height: Math.round(rect.height), top: Math.round(rect.top + window.scrollY) },
        style: {
          color: style.color,
          backgroundColor: style.backgroundColor,
          borderColor: style.borderColor,
          borderWidth: style.borderWidth,
          borderRadius: style.borderRadius,
          boxShadow: style.boxShadow,
          padding: style.padding,
          margin: style.margin,
          gap: style.gap,
          fontFamily: style.fontFamily,
          fontSize: style.fontSize,
          fontWeight: style.fontWeight,
          lineHeight: style.lineHeight,
          letterSpacing: style.letterSpacing,
        },
      };
    });
  }, { phase, targetSelector });
  return raw.map(({ painted, ...element }: Omit<RawElementEvidence, "surfaceId"> & { painted: PaintedFill | null }) => ({
    ...element,
    style: { ...element.style, ...paintedStyle(painted) },
    surfaceId,
    selector: `${surfaceId}::${element.selector}`,
  }));
}

async function captureInteractions(page: Page, surfaceId: string): Promise<{
  elements: RawElementEvidence[];
  states: Record<string, string[]>;
  interactions: InteractionEvidence[];
}> {
  const captured: RawElementEvidence[] = [];
  const states: Record<string, string[]> = {};
  const interactions: InteractionEvidence[] = [];
  let phaseIndex = 0;

  const mergeStates = (selector: string, values: readonly string[]) => {
    if (!selector) return;
    states[selector] = [...new Set([...(states[selector] ?? []), ...values])];
  };
  const triggerSelector = async (locator: ReturnType<Page["locator"]>): Promise<string> => {
    const value = await locator.getAttribute("data-omd-capture").catch(() => null);
    return value === null ? "" : `${surfaceId}::[data-omd-capture="${value}"]`;
  };
  const runClick = async (
    kind: InteractionEvidenceKind,
    locator: ReturnType<Page["locator"]>,
    targetSelector: string,
    interactionStates: readonly string[],
  ) => {
    if (!await locator.isVisible({ timeout: 150 }).catch(() => false)) return;
    const trigger = await triggerSelector(locator);
    const beforeUrl = page.url();
    if (!await locator.click({ timeout: 800 }).then(() => true).catch(() => false)) return;
    await page.waitForTimeout(180);
    const before = new URL(beforeUrl);
    const after = new URL(page.url());
    if (`${after.origin}${after.pathname}${after.search}` !== `${before.origin}${before.pathname}${before.search}`) {
      await page.goto(beforeUrl, { waitUntil: "domcontentloaded", timeout: 45_000 }).catch(() => null);
      await page.waitForTimeout(180);
      return;
    }
    const phase = `${kind}-${phaseIndex++}`;
    const targets = await captureInteractionTargets(page, surfaceId, phase, targetSelector);
    if (targets.length === 0) {
      await page.keyboard.press("Escape").catch(() => {});
      return;
    }
    mergeStates(trigger, interactionStates);
    for (const target of targets) mergeStates(target.selector, interactionStates);
    captured.push(...targets);
    interactions.push({
      kind,
      surfaceId,
      triggerSelector: trigger,
      targetSelectors: targets.map((target) => target.selector),
      states: [...interactionStates],
    });
    await page.keyboard.press("Escape").catch(() => {});
    await page.waitForTimeout(80);
  };

  const menuTriggers = await page.locator([
    'button[aria-haspopup="menu"]', 'button[aria-haspopup="listbox"]',
    '[role="button"][aria-haspopup="menu"]', '[role="button"][aria-haspopup="listbox"]',
    '[data-omd-action="menu"]',
  ].join(",")).all();
  for (const locator of menuTriggers.slice(0, 4)) {
    await runClick("menu", locator, [
      '[role="menu"]', '[role="listbox"]',
      '[class*="menu" i][data-state="open"]', '[class*="popover" i][data-state="open"]',
    ].join(","), ["expanded", "menu-open"]);
  }

  const dialogTriggers = await page.locator([
    'button[aria-haspopup="dialog"]', '[role="button"][aria-haspopup="dialog"]',
    'button[class*="open-modal" i]', '[role="button"][class*="open-modal" i]',
    '[data-omd-action="dialog"]',
  ].join(",")).all();
  for (const locator of dialogTriggers.slice(0, 3)) {
    await runClick("dialog", locator, '[role="dialog"],[aria-modal="true"],[class*="dialog" i]:not([hidden]),[class*="modal" i]:not([hidden])', ["dialog-open"]);
  }

  const tabTriggers = await page.locator('[role="tab"][aria-selected="false"],button[class*="btn-tab" i],[data-omd-action="tab"]').all();
  const seenTabTriggers = new Set<string>();
  for (const locator of tabTriggers.slice(0, 3)) {
    const marker = await locator.getAttribute("data-omd-capture").catch(() => null);
    if (marker !== null && seenTabTriggers.has(marker)) continue;
    if (marker !== null) seenTabTriggers.add(marker);
    const href = await locator.getAttribute("href").catch(() => null);
    if (href) {
      const before = new URL(page.url());
      const after = new URL(href, before);
      if (`${after.origin}${after.pathname}${after.search}` !== `${before.origin}${before.pathname}${before.search}`) continue;
    }
    await runClick("tab", locator, '[role="tab"][aria-selected="true"],[role="tabpanel"]:not([hidden])', ["selected", "tab-selected"]);
  }

  const formActions = await page.locator('[data-omd-action="form-error"]').all();
  for (const locator of formActions.slice(0, 2)) {
    await runClick("form-error", locator, '[aria-invalid="true"],input:invalid,select:invalid,textarea:invalid,[role="alert"]', ["error"]);
  }
  if (formActions.length === 0) {
    const required = page.locator('input[required]:not(:disabled),select[required]:not(:disabled),textarea[required]:not(:disabled)').first();
    if (await required.isVisible({ timeout: 150 }).catch(() => false)) {
      await required.evaluate((node) => {
        (node as HTMLInputElement).focus();
        (node as HTMLInputElement).reportValidity();
      }).catch(() => {});
      const phase = `form-error-${phaseIndex++}`;
      const targets = await captureInteractionTargets(page, surfaceId, phase, 'input:invalid,select:invalid,textarea:invalid,[aria-invalid="true"]');
      if (targets.length) {
        for (const target of targets) mergeStates(target.selector, ["error"]);
        captured.push(...targets);
        interactions.push({ kind: "form-error", surfaceId, triggerSelector: "", targetSelectors: targets.map((target) => target.selector), states: ["error"] });
      }
    }
  }

  const toastTriggers = await page.locator('[data-omd-action="toast"]').all();
  for (const locator of toastTriggers.slice(0, 2)) {
    await runClick("toast", locator, '[role="alert"],[role="status"],[class*="toast" i]:not([hidden]),[class*="snackbar" i]:not([hidden])', ["toast-visible"]);
  }

  return { elements: captured, states, interactions };
}

async function documentFonts(page: Page): Promise<FontFaceEvidence[]> {
  return page.evaluate(() => {
    const fonts: Array<{ family: string; status: string; weight: string; style: string; sources: string[] }> = [];
    document.fonts.forEach((font) => fonts.push({
      family: font.family.replace(/["']/g, "").trim(),
      status: font.status,
      weight: font.weight,
      style: font.style,
      sources: [],
    }));
    return fonts;
  });
}

// Time budgets (2026-09-30). Two sites (elice.io/ko/ax/lxp, greetinghr.com) held a
// capture at 0% CPU for 11–17 minutes: one awaited step never returned and nothing timed
// it out. Each route now has a budget. A route that overruns is skipped, logged on stderr,
// and the page is replaced so a stuck evaluate cannot block the next route. The whole run
// also has a budget, and the final browser.close cannot hold the process open.
// The step that stalled on greetinghr.com (a Framer site) was the pseudo-state pass, on
// every route. A stalled state or interaction pass now costs only that pass: the route
// keeps its rest values, the pass is logged as unmeasured, and the page is replaced.
const STEP_BUDGET_MS = Number(option("--step-budget-ms") ?? "90000");
const ROUTE_BUDGET_MS = Number(option("--route-budget-ms") ?? "300000");
const TOTAL_BUDGET_MS = Number(option("--total-budget-ms") ?? "900000");
class StepTimeout extends Error {}
function withTimeout<T>(work: Promise<T>, ms: number, label: string): Promise<T> {
  work.catch(() => {});
  let timer: ReturnType<typeof setTimeout> | undefined;
  const expiry = new Promise<never>((_, reject) => { timer = setTimeout(() => reject(new StepTimeout(label)), ms); });
  return Promise.race([work, expiry]).finally(() => clearTimeout(timer));
}

const browser = await chromium.launch({ executablePath: chromePath, headless: true, args: ["--disable-http2"] });
const context = await browser.newContext({
  userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/124 Safari/537.36",
  viewport: { width: 1440, height: 900 },
});
const cssByUrl = new Map<string, string>();
async function collectCss(response: PlaywrightResponse): Promise<void> {
  const contentType = response.headers()["content-type"] ?? "";
  if (!contentType.includes("css") && !/\.css(?:\?|$)/.test(response.url())) return;
  try { cssByUrl.set(response.url(), await response.text()); } catch {}
}
let page = await context.newPage();
page.on("response", collectCss);
const skippedRoutes: { url: string; reason: string }[] = [];

const capturedAt = new Date().toISOString();
const surfaces: ReferenceEvidenceBundle["surfaces"][number][] = [];
const allFaces: FontFaceEvidence[] = [];
const stateEvidence: Record<string, string[]> = {};
const interactionEvidence: InteractionEvidence[] = [];
let discovery = { routes: [] as string[], fontOrLicenseUrls: [] as string[], publicDesignSystemUrls: [] as string[] };

await page.goto(homepage, { waitUntil: "domcontentloaded", timeout: 45_000 });
await page.waitForTimeout(1_200);
await dismissObstructions(page);
discovery = await discoverRoutes(page, homepage);
// Routes are compared as `new URL(u).href` (2026-09-30). The homepage "https://lemonbase.com" and
// the route "https://lemonbase.com/" were two strings, so the homepage was captured twice and
// crowded out the last configured route (lemonbase, goorm and kakaopage all lost one). The one
// pass covers the homepage, --routes, configured and discovered routes alike.
const routeUrls = dedupeRouteUrls([homepage, ...explicitRoutes, ...configuredRoutes, ...discovery.routes])
  .slice(0, maxRoutes * 3);

const runStartedAt = Date.now();
let currentStep = "navigate";
async function captureRoute(index: number, url: string) {
  currentStep = "navigate";
  if (index > 0) {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45_000 }).catch(() => null);
    await page.waitForTimeout(900);
    await dismissObstructions(page);
  }
  const currentUrl = new URL(page.url());
  if (isUnsafeCaptureSurface(currentUrl.href)) return null;
  // A route that lands on a page already captured counts once as well: goorm's homepage
  // redirects to https://www.goorm.io/, which string dedupe cannot see before the load.
  if (surfaces.some((surface) => surface.url === currentUrl.href)) return null;
  const surfaceId = surfaces.length === 0 ? "home" : `surface-${surfaces.length + 1}`;
  currentStep = "elements";
  const baselineElements = await withTimeout(captureElements(page, surfaceId), STEP_BUDGET_MS, "elements");
  const unmeasured: string[] = [];
  let pseudoStates: Awaited<ReturnType<typeof captureStates>> = { elements: [], states: {} };
  if (capturePseudoStates) {
    currentStep = "pseudo-states";
    try {
      pseudoStates = await withTimeout(captureStates(page, surfaceId, baselineElements), STEP_BUDGET_MS, "pseudo-states");
    } catch (error) {
      if (!(error instanceof StepTimeout)) throw error;
      unmeasured.push("pseudo-states");
      await replacePage(currentUrl.href);
    }
  }
  let expanded: Awaited<ReturnType<typeof captureInteractions>> = { elements: [], states: {}, interactions: [] };
  if (captureExpandedInteractions && unmeasured.length === 0) {
    currentStep = "interactions";
    try {
      expanded = await withTimeout(captureInteractions(page, surfaceId), STEP_BUDGET_MS, "interactions");
    } catch (error) {
      if (!(error instanceof StepTimeout)) throw error;
      unmeasured.push("interactions");
      await replacePage(currentUrl.href);
    }
  } else if (captureExpandedInteractions) {
    unmeasured.push("interactions (skipped after the stalled pseudo-state pass)");
  }
  if (isUnsafeCaptureSurface(page.url())) return null;
  currentStep = "fonts";
  const faces = await withTimeout(documentFonts(page), 20_000, "fonts").catch(() => [] as FontFaceEvidence[]);
  for (const pass of unmeasured) {
    const why = pass.includes("skipped") ? "" : ` (no result within ${STEP_BUDGET_MS}ms)`;
    console.error(`[reference-evidence] ${currentUrl.href}: ${pass} unmeasured${why}; rest values kept`);
  }
  return { surfaceId, capturedSurfaceUrl: currentUrl.href, baselineElements, pseudoStates, expanded, faces };
}

/** Close a page that may be stuck mid-step and continue on a fresh one at the same URL. */
async function replacePage(url: string): Promise<void> {
  await withTimeout(page.close(), 10_000, "page.close").catch(() => {});
  page = await context.newPage();
  page.on("response", collectCss);
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45_000 }).catch(() => null);
  await page.waitForTimeout(900);
  await dismissObstructions(page);
}

for (const [index, url] of routeUrls.entries()) {
  if (surfaces.length >= maxRoutes) break;
  if (Date.now() - runStartedAt > TOTAL_BUDGET_MS) {
    skippedRoutes.push({ url, reason: `total budget ${TOTAL_BUDGET_MS}ms spent before this route` });
    continue;
  }
  let captured: Awaited<ReturnType<typeof captureRoute>>;
  try {
    captured = await withTimeout(captureRoute(index, url), ROUTE_BUDGET_MS, url);
  } catch (error) {
    if (!(error instanceof StepTimeout)) throw error;
    skippedRoutes.push({ url, reason: `no result within ${ROUTE_BUDGET_MS}ms (stuck at: ${currentStep})` });
    console.error(`[reference-evidence] skipped ${url}: stuck at ${currentStep} past ${ROUTE_BUDGET_MS}ms; replacing the page`);
    await withTimeout(page.close(), 10_000, "page.close").catch(() => {});
    page = await context.newPage();
    page.on("response", collectCss);
    continue;
  }
  if (!captured) continue;
  const { surfaceId, capturedSurfaceUrl, baselineElements, pseudoStates, expanded, faces } = captured;
  for (const [selector, values] of Object.entries(pseudoStates.states)) {
    stateEvidence[selector] = [...new Set([...(stateEvidence[selector] ?? []), ...values])];
  }
  for (const [selector, values] of Object.entries(expanded.states)) {
    stateEvidence[selector] = [...new Set([...(stateEvidence[selector] ?? []), ...values])];
  }
  interactionEvidence.push(...expanded.interactions);
  const elements = [...baselineElements, ...pseudoStates.elements, ...expanded.elements];
  surfaces.push({ id: surfaceId, url: capturedSurfaceUrl, viewport: "1440x900", elements });
  allFaces.push(...faces);
}
await withTimeout(browser.close(), 15_000, "browser.close").catch(() => {
  console.error("[reference-evidence] browser.close did not finish in 15s; exiting after the bundle is written");
});

for (const [cssUrl, css] of cssByUrl) allFaces.push(...fontSources(css, cssUrl));
const mergedFaces = new Map<string, FontFaceEvidence>();
for (const face of allFaces) {
  const key = face.family.toLowerCase().replace(/[^a-z0-9가-힣]/g, "");
  const previous = mergedFaces.get(key);
  mergedFaces.set(key, {
    family: face.family,
    status: previous?.status === "loaded" || face.status === "loaded" ? "loaded" : face.status,
    weight: previous?.weight ?? face.weight,
    style: previous?.style ?? face.style,
    sources: [...new Set([...(previous?.sources ?? []), ...face.sources])],
  });
}

const sources = surfaces.map((surface) => ({
  id: `surface-${surface.id}`,
  url: surface.url,
  kind: (/\/docs|\/brand|design-system|components|storybook|styleguide/i.test(new URL(surface.url).pathname)
    ? "official-doc"
    : "product-surface") as "official-doc" | "product-surface",
}));
const bundle = aggregateReferenceEvidence({
  referenceId,
  capturedAt,
  tool: "playwright_cli",
  sources,
  surfaces,
  faces: [...mergedFaces.values()],
  stateEvidence,
  interactions: interactionEvidence,
  discovery: {
    fontOrLicenseUrls: discovery.fontOrLicenseUrls,
    publicDesignSystemUrls: discovery.publicDesignSystemUrls,
  },
});

mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, `${JSON.stringify(bundle, null, 2)}\n`, "utf8");
if (process.argv.includes("--json")) console.log(JSON.stringify(bundle, null, 2));
else {
  console.log(`[reference-evidence] ${referenceId}: ${bundle.coverage.surfaceCount} surfaces · ${bundle.colors.length} colors · ${bundle.fonts.length} fonts · ${bundle.components.length} component variants · ${bundle.coverage.interactionCount} interactions · coverage ${bundle.coverage.score}/100`);
  console.log(`[reference-evidence] wrote ${output}`);
  for (const font of bundle.fonts.slice(0, 8)) {
    console.log(`  font ${font.family}: ${font.status}/${font.confidence} · usage ${font.usageCount} · ${font.roles.join(", ") || "not observed"}`);
  }
}
for (const skipped of skippedRoutes) console.error(`[reference-evidence] skipped route ${skipped.url}: ${skipped.reason}`);
// A stuck page or browser must not keep the process alive once the bundle is on disk.
process.exit(0);
