/**
 * The Korean page's summary, title and description: the Korean wording of the shared
 * item-page summary (lib/i18n/detail-summary.ts).
 */

import { detailDescription, detailSummary, detailTitle, type SummaryInput } from "@/lib/i18n/detail-summary";

export type KoSummaryInput = SummaryInput;

/** "{표시명} DESIGN.md — 색상·타이포그래피·컴포넌트" (owner decision 3, 2026-10-20). */
export function koDetailTitle(name: string): string {
  return detailTitle("ko", name);
}

export function koSummary(name: string, d: KoSummaryInput): string {
  return detailSummary("ko", name, d);
}

/** Meta description: the summary plus what the page lets you do. */
export function koDescription(name: string, summary: string): string {
  return detailDescription("ko", name, summary);
}
