import type { ReferenceQualityEntry } from "@/data/reference-quality.generated";

export const REFERENCE_AST_SCHEMA_VERSION = 1 as const;

export type ReferenceAstOrigin = "frontmatter" | "prose_fallback";
export type ReferenceAstConfidence = "high" | "low";
export type ReferenceAstScalar = string | number | boolean | null;

export interface ReferenceAstValue<T extends ReferenceAstScalar> {
  readonly value: T;
  readonly claimPath: string;
  readonly origin: ReferenceAstOrigin;
  readonly confidence: ReferenceAstConfidence;
}

export type ReferenceAstNode =
  | ReferenceAstValue<ReferenceAstScalar>
  | readonly ReferenceAstNode[]
  | { readonly [key: string]: ReferenceAstNode };

export interface ReferenceAstSection {
  readonly key: string;
  readonly index: number;
  readonly number: string | null;
  readonly heading: string;
  readonly title: string;
}

export interface ReferenceAstIdentity {
  readonly id: string;
  readonly name: string;
  readonly displayName: string;
  readonly country: string;
  readonly category: string;
  readonly homepage: string;
  /** Brand/asset color. This is intentionally not the UI primary token. */
  readonly brandColor: ReferenceAstValue<string>;
  readonly logo: {
    readonly type: "favicon" | "simpleicons" | "github";
    readonly slug: string;
  };
  readonly addedAt: string | null;
  readonly officialDesignSystem: {
    readonly name: string;
    readonly url: string;
    readonly type: "system" | "brand";
    readonly description: string;
    readonly ogImage: string | null;
  } | null;
}

export interface ReferenceAstTypography {
  readonly families: Readonly<Record<string, ReferenceAstValue<string>>>;
  readonly tiers: Readonly<Record<string, ReferenceAstNode>>;
}

export interface ReferenceAstTokens {
  readonly hasStructuredTokens: boolean;
  readonly source: "live-extract" | "design-system" | "manual" | "reconciled" | "prose-derived" | null;
  readonly extractedAt: string | null;
  readonly note: string | null;
  readonly componentsHarvested: boolean;
  readonly colors: Readonly<Record<string, ReferenceAstValue<string>>>;
  readonly typography: ReferenceAstTypography;
  readonly spacing: Readonly<Record<string, ReferenceAstValue<number>>>;
  /** Radius values are normalized at the AST boundary, e.g. `8` → `8px`. */
  readonly rounded: Readonly<Record<string, ReferenceAstValue<string>>>;
  readonly shadows: Readonly<Record<string, ReferenceAstValue<string>>>;
  readonly components: Readonly<Record<string, ReferenceAstNode>>;
  /** Exact canonical claim paths used by the quality evaluator. */
  readonly claimPaths: readonly string[];
}

export interface ReferenceAst {
  readonly schemaVersion: typeof REFERENCE_AST_SCHEMA_VERSION;
  readonly identity: ReferenceAstIdentity;
  readonly document: {
    readonly raw: string;
    readonly frontmatter: string;
    readonly body: string;
    readonly sections: readonly ReferenceAstSection[];
  };
  readonly quality: ReferenceQualityEntry;
  readonly tokens: ReferenceAstTokens;
  readonly evidence: ReferenceAstEvidenceGraph | null;
}

export interface ReferenceAstFoundations {
  readonly brandColor: ReferenceAstValue<string>;
  readonly primary: ReferenceAstValue<string> | null;
  readonly canvas: ReferenceAstValue<string> | null;
  readonly foreground: ReferenceAstValue<string> | null;
  readonly uiFont: ReferenceAstValue<string> | null;
  readonly monoFont: ReferenceAstValue<string> | null;
  readonly brandFont: ReferenceAstValue<string> | null;
  readonly radius: ReferenceAstValue<string> | null;
}

export interface ReferenceAstEvidenceClaim {
  readonly claimPath: string;
  readonly surfaceId: string;
  readonly sourceId: string;
  readonly method: string;
  readonly capturedAt: string;
  readonly confidence: ReferenceAstConfidence;
}

export interface ReferenceAstEvidenceGraph {
  readonly schemaVersion: number;
  readonly checkedAt: string;
  readonly surfaces: readonly {
    readonly id: string;
    readonly kind: string;
    readonly url: string;
    readonly inspectedAt: string;
  }[];
  readonly sources: readonly {
    readonly id: string;
    readonly kind: string;
    readonly url: string;
    readonly capturedAt: string;
  }[];
  readonly claims: readonly ReferenceAstEvidenceClaim[];
  readonly conflictCount: number;
}

export interface ReferenceVerificationV2Input {
  readonly schema: number;
  readonly checked: string;
  readonly surfaces: readonly { readonly id: string; readonly kind?: string; readonly url: string; readonly inspected: string }[];
  readonly sources: readonly { readonly id: string; readonly kind: string; readonly url: string; readonly captured: string }[];
  readonly claims: Readonly<Record<string, {
    readonly surface_id: string;
    readonly source_id: string;
    readonly method?: string;
    readonly selector?: string;
    readonly captured: string;
  }>>;
  readonly conflicts?: readonly unknown[];
}

/**
 * Transitional input for Community/Auto documents that do not yet have
 * structured tokens. Values stay visibly low-confidence and cannot be used by
 * a Verified v2 document. The 400 curated references do not need this path.
 */
export interface ReferenceProseFallback {
  readonly colors?: Readonly<Record<string, string>>;
  readonly fontFamilies?: Readonly<Record<string, string>>;
  readonly rounded?: Readonly<Record<string, number | string>>;
}
