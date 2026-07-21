/**
 * Activation — the install hand-off, shared across every surface. `act_*`.
 * `act_install_copy` is the KEY EVENT (the north-star activation proxy).
 * See docs/funnel-analytics.md.
 */
import { event, trackRef } from "@/lib/gtag";

export type InstallSurface = "hero" | "ref_detail" | "collection" | "builder" | "docs" | "cli";
export type HandoffKind = "designmd_copy" | "designmd_download" | "prompt_copy" | "install_copy";

/** Canonical activation event. Legacy detail events dual-fire for continuity. */
export function trackHandoff(args: { kind: HandoffKind; surface: InstallSurface; reference?: string }) {
  event("act_handoff", {
    kind: args.kind,
    surface: args.surface,
    ...(args.reference ? { reference: args.reference } : {}),
  });
}

/** Copied the `npx oh-my-design-cli` install command. KEY EVENT. */
export function trackInstallCopy(args: { surface: InstallSurface; reference?: string }) {
  event("act_install_copy", {
    surface: args.surface,
    ...(args.reference ? { reference: args.reference } : {}),
  });
  trackHandoff({ kind: "install_copy", surface: args.surface, reference: args.reference });
  // Per-reference install-intent counter — kept OUT of the `copy` counter so
  // the install command (identical for every reference) never pollutes
  // content-copy popularity.
  if (args.reference) trackRef("install", args.reference);
}

/** Copied the per-brand first prompt. */
export function trackPromptCopy(args: { reference: string; surface: InstallSurface }) {
  event("act_prompt_copy", { reference: args.reference, surface: args.surface });
  trackHandoff({ kind: "prompt_copy", surface: args.surface, reference: args.reference });
  trackRef("copy", args.reference);
}
