export const REFERENCE_EVIDENCE_SCHEMA_VERSION = 1 as const;

export type EvidenceConfidence = "high" | "medium" | "low";
export type FontEvidenceStatus = "loaded" | "declared" | "system" | "unresolved";
export type CapturedComponentType =
  | "button"
  | "input"
  | "card"
  | "badge"
  | "tab"
  | "toggle"
  | "toast"
  | "dialog"
  | "menu"
  | "listItem"
  | "avatar"
  | "unknown";

export interface RawElementEvidence {
  readonly surfaceId: string;
  readonly selector: string;
  readonly tagName: string;
  readonly role: string | null;
  readonly inputType: string | null;
  readonly className: string;
  readonly ariaHasPopup: string | null;
  readonly ariaSelected: string | null;
  readonly ariaChecked: string | null;
  readonly disabled: boolean;
  readonly textLength: number;
  readonly rect: { readonly width: number; readonly height: number; readonly top: number };
  readonly style: {
    readonly color: string;
    readonly backgroundColor: string;
    readonly borderColor: string;
    readonly borderWidth: string;
    readonly borderRadius: string;
    readonly boxShadow: string;
    readonly padding: string;
    readonly margin: string;
    readonly gap: string;
    readonly fontFamily: string;
    readonly fontSize: string;
    readonly fontWeight: string;
    readonly lineHeight: string;
    readonly letterSpacing: string;
  };
}

export interface FontFaceEvidence {
  readonly family: string;
  readonly status: string;
  readonly weight: string;
  readonly style: string;
  readonly sources: readonly string[];
}

export interface FontCandidateEvidence {
  readonly family: string;
  readonly status: FontEvidenceStatus;
  readonly confidence: EvidenceConfidence;
  readonly usageCount: number;
  readonly roles: readonly string[];
  readonly sourceUrls: readonly string[];
  readonly sourceUrlCount: number;
  readonly reason: string;
}

export interface ComponentEvidence {
  readonly type: CapturedComponentType;
  readonly fingerprint: string;
  readonly occurrences: number;
  readonly surfaces: readonly string[];
  readonly states: readonly string[];
  readonly confidence: EvidenceConfidence;
  readonly representative: RawElementEvidence;
}

export type InteractionEvidenceKind = "menu" | "dialog" | "form-error" | "tab" | "toast";

export interface InteractionEvidence {
  readonly kind: InteractionEvidenceKind;
  readonly surfaceId: string;
  readonly triggerSelector: string;
  readonly targetSelectors: readonly string[];
  readonly states: readonly string[];
}

export interface ReferenceEvidenceBundle {
  readonly schemaVersion: typeof REFERENCE_EVIDENCE_SCHEMA_VERSION;
  readonly referenceId: string;
  readonly capturedAt: string;
  readonly tool: "playwright_cli" | "browser_harness";
  readonly sources: readonly {
    readonly id: string;
    readonly url: string;
    readonly kind: "product-surface" | "official-doc" | "brand-asset" | "license";
  }[];
  readonly surfaces: readonly {
    readonly id: string;
    readonly url: string;
    readonly viewport: string;
    readonly elements: readonly RawElementEvidence[];
  }[];
  readonly colors: readonly {
    readonly value: string;
    readonly property: "background" | "text" | "border";
    readonly occurrences: number;
    readonly surfaces: readonly string[];
    readonly confidence: EvidenceConfidence;
  }[];
  readonly typography: readonly {
    readonly role: string;
    readonly family: string;
    readonly size: string;
    readonly weight: string;
    readonly lineHeight: string;
    readonly letterSpacing: string;
    readonly occurrences: number;
  }[];
  readonly fonts: readonly FontCandidateEvidence[];
  readonly spacing: readonly { readonly value: number; readonly occurrences: number }[];
  readonly radii: readonly { readonly value: number; readonly occurrences: number }[];
  readonly components: readonly ComponentEvidence[];
  readonly interactions: readonly InteractionEvidence[];
  readonly coverage: {
    readonly componentTypes: number;
    readonly componentVariants: number;
    readonly observedStates: number;
    readonly interactionKinds: number;
    readonly interactionCount: number;
    readonly surfaceCount: number;
    readonly score: number;
  };
  readonly discovery: {
    readonly fontOrLicenseUrls: readonly string[];
    readonly publicDesignSystemUrls: readonly string[];
  };
}

const SYSTEM_FONT_RE = /^(?:system|-apple-system|blinkmacsystemfont|system-ui|ui-sans-serif|sans-serif|serif|monospace|apple sd gothic neo|malgun gothic|segoe ui|roboto|arial|helvetica)$/i;

function fontKey(family: string): string {
  return family.toLowerCase().replace(/[^a-z0-9가-힣]/g, "");
}

export function firstFontFamily(stack: string): string {
  return stack.split(",")[0]?.replace(/["']/g, "").trim() ?? "";
}

export function isSystemFontFamily(family: string): boolean {
  return SYSTEM_FONT_RE.test(family.trim());
}

export function normalizeCapturedColor(value: string): string | null {
  const raw = value.trim().toLowerCase();
  if (raw === "transparent") return null;
  const rgba = raw.match(/^rgba?\(([^)]+)\)$/);
  if (rgba) {
    const parts = rgba[1].split(/[,/ ]+/).filter(Boolean).map(Number);
    if (parts.length < 3 || parts.slice(0, 3).some(Number.isNaN)) return null;
    if (parts.length >= 4 && parts[3] < 0.5) return null;
    return `#${parts.slice(0, 3).map((part) => Math.round(part).toString(16).padStart(2, "0")).join("")}`;
  }
  if (/^#[0-9a-f]{3}$/.test(raw)) {
    return `#${raw.slice(1).split("").map((char) => char.repeat(2)).join("")}`;
  }
  return /^#[0-9a-f]{6}$/.test(raw) ? raw : null;
}

export function classifyCapturedElement(element: Pick<RawElementEvidence,
  "tagName" | "role" | "inputType" | "className" | "ariaHasPopup" | "ariaSelected" | "ariaChecked"
>): CapturedComponentType {
  const tag = element.tagName.toLowerCase();
  const role = element.role?.toLowerCase() ?? "";
  const cls = element.className.toLowerCase();
  const inputType = element.inputType?.toLowerCase() ?? "";
  const booleanToggleClass = /(?:^|[-_ ])(?:switch|toggle)(?:[-_ ]|$)/.test(cls)
    && !/(?:dropdown|menu)[-_ ]toggle/.test(cls);
  if (role === "dialog") return "dialog";
  if (role === "menu" || role === "listbox" || /(?:^|[-_ ])(?:menu|popover)[-_ ](?:content|panel|list)(?:[-_ ]|$)/.test(cls)) return "menu";
  if (role === "switch" || inputType === "checkbox" || element.ariaChecked !== null || (booleanToggleClass && tag !== "button")) return "toggle";
  if (role === "tab" || element.ariaSelected !== null || (["button", "a"].includes(tag) && /(?:^|[-_ ])(?:btn[-_ ])?tab(?:[-_ ]|$)/.test(cls))) return "tab";
  if (role === "button" || tag === "button" || element.ariaHasPopup || (tag === "a" && /(?:button|\bbtn\b|cta)/.test(cls))) return "button";
  if (["input", "select", "textarea"].includes(tag) || role === "textbox" || role === "combobox") return "input";
  if (/(?:modal|dialog|sheet|drawer)/.test(cls)) return "dialog";
  if (role === "alert" || /(?:toast|snackbar|alert)/.test(cls)) return "toast";
  if (/badge|chip|pill|tag|label/.test(cls)) return "badge";
  if (/avatar|profile-image/.test(cls)) return "avatar";
  if (tag === "li" || (["menuitem", "option", "listitem"].includes(role) && (role !== "listitem" || /(?:menu|nav|option|result|item|row)/.test(cls)))) return "listItem";
  if (/card|panel|tile|surface/.test(cls) || tag === "article") return "card";
  return "unknown";
}

function roleForElement(element: RawElementEvidence): string {
  const tag = element.tagName.toLowerCase();
  if (/^h[1-6]$/.test(tag)) return tag;
  const component = classifyCapturedElement(element);
  if (component !== "unknown") return component;
  return tag === "p" ? "body" : "text";
}

function stableStyleFingerprint(element: RawElementEvidence): string {
  const style = element.style;
  return [
    normalizeCapturedColor(style.backgroundColor) ?? "transparent",
    normalizeCapturedColor(style.color) ?? "unknown",
    normalizeCapturedColor(style.borderColor) ?? "none",
    style.borderRadius,
    style.padding,
    Math.round(element.rect.height),
    style.fontSize,
    style.fontWeight,
  ].join("|");
}

function confidence(occurrences: number, surfaces: number, hasStates = false): EvidenceConfidence {
  if (surfaces >= 2 || (occurrences >= 3 && hasStates)) return "high";
  if (occurrences >= 2 || hasStates) return "medium";
  return "low";
}

export function clusterPixelValues(values: readonly string[], options: { includeZero?: boolean } = {}): { value: number; occurrences: number }[] {
  const counts = new Map<number, number>();
  for (const value of values) {
    for (const match of value.matchAll(/(-?\d+(?:\.\d+)?)px/g)) {
      const number = Math.round(Number(match[1]));
      if (number < 0 || number > 256 || (number === 0 && !options.includeZero)) continue;
      counts.set(number, (counts.get(number) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([value, occurrences]) => ({ value, occurrences }))
    .sort((a, b) => b.occurrences - a.occurrences || a.value - b.value);
}

export function resolveFontEvidence(
  elements: readonly RawElementEvidence[],
  faces: readonly FontFaceEvidence[],
): FontCandidateEvidence[] {
  const usage = new Map<string, { family: string; count: number; roles: Set<string> }>();
  const faceMap = new Map(faces.map((face) => [fontKey(face.family), face]));
  for (const element of elements) {
    const family = firstFontFamily(element.style.fontFamily);
    if (!family) continue;
    const key = fontKey(family);
    const item = usage.get(key) ?? {
      family: faceMap.get(key)?.family ?? family,
      count: 0,
      roles: new Set<string>(),
    };
    item.count += 1;
    item.roles.add(roleForElement(element));
    usage.set(key, item);
  }
  const families = new Set([...usage.keys(), ...faces.map((face) => fontKey(face.family))]);
  return [...families].map((key) => {
    const face = faceMap.get(key);
    const used = usage.get(key) ?? {
      family: face?.family ?? key,
      count: 0,
      roles: new Set<string>(),
    };
    const family = face?.family ?? used.family;
    const system = isSystemFontFamily(family);
    const loaded = Boolean(face && face.status === "loaded" && used.count > 0);
    const status: FontEvidenceStatus = system ? "system" : loaded ? "loaded" : face ? "declared" : "unresolved";
    const allSourceUrls = face?.sources ?? [];
    const sourceUrls = allSourceUrls.slice(0, 20);
    const candidateConfidence: EvidenceConfidence = status === "loaded" || status === "system"
      ? used.count >= 2 ? "high" : "medium"
      : status === "declared" ? "medium" : "low";
    const reason = status === "loaded" ? "computed family is backed by a loaded FontFace"
      : status === "system" ? "computed family is an operating-system stack"
        : status === "declared" ? "@font-face exists but visible usage was not observed"
          : "computed family has no matching loaded FontFace or known system mapping";
    return {
      family,
      status,
      confidence: candidateConfidence,
      usageCount: used.count,
      roles: [...used.roles].sort(),
      sourceUrls,
      sourceUrlCount: allSourceUrls.length,
      reason,
    };
  }).sort((a, b) => b.usageCount - a.usageCount || a.family.localeCompare(b.family));
}

export function aggregateReferenceEvidence(input: {
  referenceId: string;
  capturedAt: string;
  tool: ReferenceEvidenceBundle["tool"];
  sources: ReferenceEvidenceBundle["sources"];
  surfaces: ReferenceEvidenceBundle["surfaces"];
  faces: readonly FontFaceEvidence[];
  stateEvidence?: Readonly<Record<string, readonly string[]>>;
  interactions?: readonly InteractionEvidence[];
  discovery?: ReferenceEvidenceBundle["discovery"];
}): ReferenceEvidenceBundle {
  const elements = input.surfaces.flatMap((surface) => surface.elements);
  const colorMap = new Map<string, { value: string; property: "background" | "text" | "border"; count: number; surfaces: Set<string> }>();
  for (const element of elements) {
    const values = [
      ["background", element.style.backgroundColor],
      ["text", element.style.color],
      ["border", element.style.borderColor],
    ] as const;
    for (const [property, raw] of values) {
      const value = normalizeCapturedColor(raw);
      if (!value) continue;
      const key = `${property}:${value}`;
      const item = colorMap.get(key) ?? { value, property, count: 0, surfaces: new Set<string>() };
      item.count += 1;
      item.surfaces.add(element.surfaceId);
      colorMap.set(key, item);
    }
  }
  const colors = [...colorMap.values()].map((item) => ({
    value: item.value,
    property: item.property,
    occurrences: item.count,
    surfaces: [...item.surfaces].sort(),
    confidence: confidence(item.count, item.surfaces.size),
  })).sort((a, b) => b.occurrences - a.occurrences);

  const typeMap = new Map<string, { role: string; family: string; size: string; weight: string; lineHeight: string; letterSpacing: string; count: number }>();
  for (const element of elements.filter((item) => item.textLength > 0)) {
    const role = roleForElement(element);
    const family = firstFontFamily(element.style.fontFamily);
    const key = [role, family, element.style.fontSize, element.style.fontWeight, element.style.lineHeight, element.style.letterSpacing].join("|");
    const item = typeMap.get(key) ?? { role, family, size: element.style.fontSize, weight: element.style.fontWeight, lineHeight: element.style.lineHeight, letterSpacing: element.style.letterSpacing, count: 0 };
    item.count += 1;
    typeMap.set(key, item);
  }
  const typography = [...typeMap.values()].map(({ count, ...item }) => ({ ...item, occurrences: count }))
    .sort((a, b) => b.occurrences - a.occurrences);

  const componentMap = new Map<string, { type: CapturedComponentType; fingerprint: string; elements: RawElementEvidence[]; surfaces: Set<string>; states: Set<string> }>();
  for (const element of elements) {
    const type = classifyCapturedElement(element);
    if (type === "unknown") continue;
    const fingerprint = stableStyleFingerprint(element);
    const key = `${type}:${fingerprint}`;
    const item = componentMap.get(key) ?? { type, fingerprint, elements: [], surfaces: new Set<string>(), states: new Set<string>() };
    item.elements.push(element);
    item.surfaces.add(element.surfaceId);
    if (element.disabled) item.states.add("disabled");
    if (element.ariaSelected === "true") item.states.add("selected");
    if (element.ariaChecked !== null) item.states.add(element.ariaChecked === "true" ? "checked" : "unchecked");
    for (const state of input.stateEvidence?.[element.selector] ?? []) item.states.add(state);
    componentMap.set(key, item);
  }
  const components = [...componentMap.values()].map((item) => ({
    type: item.type,
    fingerprint: item.fingerprint,
    occurrences: item.elements.length,
    surfaces: [...item.surfaces].sort(),
    states: [...item.states].sort(),
    confidence: confidence(item.elements.length, item.surfaces.size, item.states.size > 0),
    representative: item.elements[0],
  })).sort((a, b) => b.occurrences - a.occurrences);
  const spacing = clusterPixelValues(elements.flatMap((element) => [element.style.padding, element.style.margin, element.style.gap]));
  const radii = clusterPixelValues(elements.map((element) => element.style.borderRadius), { includeZero: true });
  const observedStates = new Set(components.flatMap((component) => component.states)).size;
  const interactions = input.interactions ?? [];
  const interactionKinds = new Set(interactions.map((interaction) => interaction.kind)).size;
  const componentTypes = new Set(components.map((component) => component.type)).size;
  const surfaceCount = input.surfaces.length;
  const score = Math.min(100, Math.round(
    componentTypes * 5
    + Math.min(components.length, 20) * 1.5
    + observedStates * 4
    + interactionKinds * 3
    + Math.min(surfaceCount, 3) * 7,
  ));

  return {
    schemaVersion: REFERENCE_EVIDENCE_SCHEMA_VERSION,
    referenceId: input.referenceId,
    capturedAt: input.capturedAt,
    tool: input.tool,
    sources: input.sources,
    surfaces: input.surfaces,
    colors,
    typography,
    fonts: resolveFontEvidence(elements, input.faces),
    spacing,
    radii,
    components,
    interactions,
    coverage: {
      componentTypes,
      componentVariants: components.length,
      observedStates,
      interactionKinds,
      interactionCount: interactions.length,
      surfaceCount,
      score,
    },
    discovery: input.discovery ?? { fontOrLicenseUrls: [], publicDesignSystemUrls: [] },
  };
}
