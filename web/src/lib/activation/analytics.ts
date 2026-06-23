/**
 * Activation — the install hand-off, shared across every surface. `act_*`.
 * `act_install_copy` is the KEY EVENT (the north-star activation proxy).
 * See docs/funnel-analytics.md.
 */
import { event, trackRef } from "@/lib/gtag";

export type InstallSurface = "hero" | "ref_detail" | "collection" | "builder";

/** Copied the `npx oh-my-design-cli` install command. KEY EVENT. */
export function trackInstallCopy(args: { surface: InstallSurface; reference?: string }) {
  event("act_install_copy", {
    surface: args.surface,
    ...(args.reference ? { reference: args.reference } : {}),
  });
  // Per-reference install-intent counter — kept OUT of the `copy` counter so
  // the install command (identical for every reference) never pollutes
  // content-copy popularity.
  if (args.reference) trackRef("install", args.reference);
}

/** Copied the per-brand first prompt. */
export function trackPromptCopy(reference: string) {
  event("act_prompt_copy", { reference });
  trackRef("copy", reference);
}
