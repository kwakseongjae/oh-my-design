import type {
  ReferenceQualityEntry,
  ReferenceQualityStatus,
} from "@/data/reference-quality.generated";

export interface ReverifyCandidate extends ReferenceQualityEntry {
  readonly name: string;
  readonly category: string;
  readonly demandScore?: number;
}

export interface ReverifyCommand {
  readonly executable: string;
  readonly args: readonly string[];
}

export interface ReverifyTask {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly currentStatus: ReferenceQualityStatus;
  readonly priority: number;
  readonly reasonCodes: readonly string[];
  readonly nextReverifyAt: string | null;
  readonly evidenceCoverage: number;
  readonly worker: {
    readonly skill: "omd:add-reference";
    readonly captureInvocation: string;
    readonly captureCommand: ReverifyCommand;
    readonly evidenceArtifact: string;
    readonly invocation: string;
  };
  readonly acceptance: readonly string[];
  readonly acceptanceCommands: readonly ReverifyCommand[];
}

export interface ReverifyQueue {
  readonly schemaVersion: 1;
  readonly asOf: string;
  readonly horizonDays: number;
  readonly modelPolicy: {
    readonly profile: string;
    readonly reasoningEffort: string;
    readonly authority: "evidence_worker_only";
  };
  readonly totalCandidates: number;
  readonly tasks: readonly ReverifyTask[];
}

const DAY_MS = 86_400_000;
const REASON_WEIGHT: Readonly<Record<string, number>> = {
  conflict_unresolved: 600,
  source_expired: 560,
  freshness_conflict: 520,
  verification_checked_stale: 500,
  tokens_missing: 460,
  proof_incomplete: 420,
  tier1_source_missing: 400,
  token_source_unverified: 360,
  claim_evidence_missing: 340,
  verification_v2_missing: 300,
  interactive_state_missing: 280,
};

function daysBetween(left: string, right: string): number {
  return Math.floor(
    (Date.parse(`${left}T00:00:00Z`) - Date.parse(`${right}T00:00:00Z`)) / DAY_MS,
  );
}

function priority(candidate: ReverifyCandidate, asOf: string): number {
  const statusWeight = candidate.status === "legacy_snapshot" ? 300
    : candidate.status === "partial" ? 180
      : 0;
  const reasonWeight = candidate.reasonCodes.reduce(
    (total, reason) => total + (REASON_WEIGHT[reason] ?? 120),
    0,
  );
  const dueWeight = candidate.nextReverifyAt
    ? Math.max(0, 180 - Math.max(-30, daysBetween(candidate.nextReverifyAt, asOf)) * 3)
    : 0;
  const evidenceGap = Math.round((1 - candidate.evidenceCoverage) * 120);
  const demandWeight = Math.round(Math.max(0, candidate.demandScore ?? 0) * 2);
  return statusWeight + reasonWeight + dueWeight + evidenceGap + demandWeight;
}

function isEligible(candidate: ReverifyCandidate, asOf: string, horizonDays: number): boolean {
  if (candidate.status !== "verified_v2" || candidate.reasonCodes.length > 0) return true;
  if (!candidate.nextReverifyAt) return false;
  return daysBetween(candidate.nextReverifyAt, asOf) <= horizonDays;
}

export function buildReverifyQueue(
  candidates: readonly ReverifyCandidate[],
  options: {
    readonly asOf: string;
    readonly horizonDays?: number;
    readonly limit?: number;
    readonly ids?: ReadonlySet<string>;
    readonly modelProfile?: string;
    readonly reasoningEffort?: string;
    readonly captureMaxRoutesById?: Readonly<Record<string, number>>;
  },
): ReverifyQueue {
  const horizonDays = options.horizonDays ?? 30;
  const selected = candidates
    .filter((candidate) => !options.ids || options.ids.has(candidate.id))
    .filter((candidate) => isEligible(candidate, options.asOf, horizonDays))
    .map((candidate) => ({ candidate, priority: priority(candidate, options.asOf) }))
    .sort((a, b) => b.priority - a.priority || a.candidate.id.localeCompare(b.candidate.id));
  const tasks = selected.slice(0, options.limit ?? selected.length).map(({ candidate, priority: score }) => {
    const captureMaxRoutes = options.captureMaxRoutesById?.[candidate.id] ?? 3;
    if (!Number.isInteger(captureMaxRoutes) || captureMaxRoutes < 1 || captureMaxRoutes > 8) {
      throw new Error(`invalid capture max routes for ${candidate.id}: ${captureMaxRoutes}`);
    }
    return {
    id: candidate.id,
    name: candidate.name,
    category: candidate.category,
    currentStatus: candidate.status,
    priority: score,
    reasonCodes: candidate.reasonCodes,
    nextReverifyAt: candidate.nextReverifyAt,
    evidenceCoverage: candidate.evidenceCoverage,
    worker: {
      skill: "omd:add-reference" as const,
      captureInvocation: `npm --prefix web run capture:reference -- ${candidate.id} --max-routes ${captureMaxRoutes}`,
      captureCommand: {
        executable: "npm",
        args: ["--prefix", "web", "run", "capture:reference", "--", candidate.id, "--max-routes", String(captureMaxRoutes)],
      },
      evidenceArtifact: `artifacts/reference-evidence/${candidate.id}.json`,
      invocation: `/omd:add-reference ${candidate.id} --mode update`,
    },
    acceptance: [
      `node web/scripts/verify-reference.mjs ${candidate.id}`,
      "npm --prefix web run check:reference-pipeline:reverify",
      "npm --prefix web test",
      "npm --prefix web run typecheck",
    ],
    acceptanceCommands: [
      { executable: "node", args: ["web/scripts/verify-reference.mjs", candidate.id] },
      { executable: "npm", args: ["--prefix", "web", "run", "check:reference-pipeline:reverify"] },
      { executable: "npm", args: ["--prefix", "web", "test"] },
      { executable: "npm", args: ["--prefix", "web", "run", "typecheck"] },
    ],
    };
  });

  return {
    schemaVersion: 1,
    asOf: options.asOf,
    horizonDays,
    modelPolicy: {
      profile: options.modelProfile ?? "frontier-high-reasoning",
      reasoningEffort: options.reasoningEffort ?? "high",
      authority: "evidence_worker_only",
    },
    totalCandidates: selected.length,
    tasks,
  };
}
