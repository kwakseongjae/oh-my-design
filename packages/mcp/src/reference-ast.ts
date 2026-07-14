export type ReferenceQualityStatus = 'verified_v2' | 'partial' | 'legacy_snapshot';

export interface AstValue<T> {
  value: T;
  claimPath: string;
  origin: 'frontmatter' | 'prose_fallback';
  confidence: 'high' | 'low';
}

export interface PortableReferenceAst {
  schemaVersion: 1;
  contentHash: string;
  identity: {
    id: string;
    name: string;
    displayName: string;
    country: string;
    category: string;
    homepage: string;
    brandColor: AstValue<string>;
    logo: { type: 'favicon' | 'simpleicons' | 'github'; slug: string };
    addedAt: string | null;
    officialDesignSystem: {
      name: string;
      url: string;
      type: 'system' | 'brand';
      description: string;
      ogImage: string | null;
    } | null;
  };
  quality: {
    id: string;
    status: ReferenceQualityStatus;
    verifiedAt: string | null;
    tokensExtractedAt: string | null;
    tokenSource: string | null;
    claimCount: number;
    evidenceClaimCount: number;
    evidenceCoverage: number;
    surfaceCount: number;
    sourceCount: number;
    conflictCount: number;
    tier1SourceCount: number;
    reasonCodes: string[];
  };
  tokens: Record<string, unknown> | null;
  sections: Array<{ key: string; index: number; number: string | null; heading: string; title: string }>;
  foundations: {
    brandColor: AstValue<string>;
    primary: AstValue<string> | null;
    canvas: AstValue<string> | null;
    foreground: AstValue<string> | null;
    uiFont: AstValue<string> | null;
    monoFont: AstValue<string> | null;
    brandFont: AstValue<string> | null;
    radius: AstValue<string> | null;
  };
}

export interface PortableReferenceAstManifest {
  schemaVersion: 1;
  generatedFrom: string;
  count: number;
  corpusHash: string;
  references: PortableReferenceAst[];
}
