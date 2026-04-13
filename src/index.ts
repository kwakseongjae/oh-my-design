// oh-my-design — programmatic API
export { resolveTokens } from './core/token-resolver.js';
export { renderDesignMd } from './core/renderer.js';
export { generateComponentTokens } from './core/components.js';
export { mapToShadcn, shadcnToCss } from './core/shadcn-mapper.js';
export { generatePreviewHtml } from './core/preview-generator.js';
export { loadReference, listReferences } from './core/reference-parser.js';
export { applyOverrides } from './core/customizer.js';
export { getAllPresets, getPreset, mergeWithBase } from './presets/index.js';
export type {
  UserPreferences,
  DesignTokens,
  Preset,
  ComponentName,
  ComponentTokens,
  TemplateContext,
  Mood,
  Roundness,
  Density,
  TypographyStyle,
  DepthStyle,
} from './core/types.js';
export type { ShadcnTheme } from './core/shadcn-mapper.js';
export type { ReferenceEntry } from './core/reference-parser.js';
export type { PreviewData } from './core/customizer.js';
