import { lookupFont } from "@/lib/font-registry";

export const SYSTEM_FONT_STACK =
  "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

export type RuntimeFontMode = "real" | "system" | "unavailable";

export interface RuntimeFontResolution {
  readonly requestedFamily: string;
  readonly cssFamily: string;
  readonly mode: RuntimeFontMode;
  readonly stylesheetHref: string | null;
  readonly label: string;
}

function firstFamily(family: string): string {
  return family.split(",")[0]?.replace(/['"]/g, "").trim() || "System";
}

function quotedFamily(family: string): string {
  if (/^(?:var\(|ui-|system-ui|sans-serif|serif|monospace|-apple-system)/i.test(family)) return family;
  return `"${family.replace(/"/g, "")}"`;
}

/** Turn the semantic DESIGN.md family into valid browser CSS. */
export function cssFontFamily(family?: string): string | undefined {
  if (!family) return undefined;
  const normalized = family.trim();
  if (/^(?:system|system ui|system-ui)$/i.test(normalized)) return SYSTEM_FONT_STACK;
  if (normalized.includes(",")) return normalized;
  return `${quotedFamily(normalized)}, ${SYSTEM_FONT_STACK}`;
}

function stylesheetFor(name: string): string | null {
  if (/^Pretendard(?: Variable)?$/i.test(name)) {
    return "https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
  }

  const info = lookupFont(name);
  if (info.installable && info.source?.url.includes("fonts.google.com")) {
    return `https://fonts.googleapis.com/css2?family=${encodeURIComponent(info.name)}:wght@100..900&display=swap`;
  }
  return null;
}

/**
 * Resolve what the builder can honestly render. Proprietary/unhosted faces are
 * marked unavailable; the preview never substitutes a different typeface.
 */
export function resolveRuntimeFont(family: string): RuntimeFontResolution {
  const requestedFamily = firstFamily(family);
  const info = lookupFont(requestedFamily);
  if (/^(?:system|system ui(?: stack)?|system-ui)$/i.test(requestedFamily) || info.license === "System") {
    const isSemanticSystem = /^(?:system|system ui(?: stack)?|system-ui)$/i.test(requestedFamily);
    return {
      requestedFamily,
      cssFamily: isSemanticSystem ? SYSTEM_FONT_STACK : cssFontFamily(requestedFamily)!,
      mode: "system",
      stylesheetHref: null,
      label: "Rendered with the OS-native System UI stack",
    };
  }

  const stylesheetHref = stylesheetFor(requestedFamily);
  if (stylesheetHref) {
    return {
      requestedFamily,
      cssFamily: cssFontFamily(requestedFamily)!,
      mode: "real",
      stylesheetHref,
      label: "Live webfont loaded in preview",
    };
  }

  const reason = info.license === "Brand-proprietary"
    ? "brand font is not publicly distributed"
    : info.license === "Proprietary"
      ? "commercial font is not publicly licensed"
      : "a verified browser-loadable source is unavailable";
  return {
    requestedFamily,
    cssFamily: "inherit",
    mode: "unavailable",
    stylesheetHref: null,
    label: `Live preview unavailable (${reason})`,
  };
}
