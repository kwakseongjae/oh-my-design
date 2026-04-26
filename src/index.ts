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

// Ecosystem v1 — Track A (shim sync)
export {
  parseBlock,
  writeBlock,
  hashContent,
  hasDrift,
  type ManagedBlock,
} from './core/sync-marker.js';
export {
  readLock,
  writeLock,
  createLock,
  updateTarget,
  updateDesignMdHash,
  SYNC_LOCK_PATH,
  SYNC_LOCK_VERSION,
  type SyncLock,
  type SyncTarget,
} from './core/sync-lock.js';
export {
  ALL_SHIMS,
  CLAUDE_SHIM,
  AGENTS_SHIM,
  CURSOR_SHIM,
  inspectShim,
  inspectAllShims,
  writeShim,
  writeAllShims,
  refreshDesignMdHash,
  MANAGED_BLOCK_VERSION,
  type Shim,
  type ShimId,
  type ShimMode,
  type InspectResult,
  type InspectStatus,
  type WriteShimResult,
} from './core/shims.js';

// Ecosystem v1 — Track B (preferences append-log + capture)
export {
  appendEntry,
  buildEntry,
  readFile as readPreferencesFile,
  writeFile as writePreferencesFile,
  parseFile as parsePreferencesFile,
  renderFile as renderPreferencesFile,
  updateEntryStatus,
  groupByScope,
  filterByStatus,
  inferScope,
  generateId as generatePreferenceId,
  slugify,
  PREFERENCES_PATH,
  PREFERENCES_SCHEMA,
  type PreferenceEntry,
  type PreferenceMeta,
  type PreferencesFile,
  type PreferenceScope,
  type PreferenceSignal,
  type PreferenceConfidence,
  type PreferenceStatus,
} from './core/preferences.js';
export {
  detectCallingAgent,
  detectInstalledAgents,
  type AgentId,
  type AgentPresence,
} from './core/agent-detect.js';

// Ecosystem v1 — omd:init (controlled vocabulary, recommendation, deterministic stub)
export {
  loadVocabulary,
  loadSynonyms,
  extractKeywords,
  resolveConflicts,
  buildDeltaSet,
  listKeywords,
  type Vocabulary,
  type DeltaSet,
  type ResolvedKeyword,
  type ConflictResolution,
  type KeywordSpec,
} from './core/vocabulary.js';
export {
  loadReferenceTags,
  recommend,
  type ReferenceTag,
  type RecommendHit,
  type RecommendOptions,
} from './core/recommend.js';
export {
  applyDeltaStub,
  type StubResult,
  type StubStats,
} from './core/apply-delta-stub.js';
export {
  deprecateDesignMd,
  type DeprecateOptions,
  type DeprecateResult,
} from './core/init-deprecate.js';
