import type { ReverifyQueue, ReverifyTask } from "./queue";

export interface ReverifyRunnerAdapter {
  readonly schemaVersion: 1;
  readonly name: string;
  readonly billingMode?: "usage" | "subscription";
  readonly command: {
    readonly executable: string;
    readonly args: readonly string[];
  };
  readonly passEnvironment?: readonly string[];
  readonly limits: {
    readonly maxTasksPerRun: number;
    readonly maxPullRequestsPerRun: number;
    readonly maxRetries: number;
    readonly timeoutMinutes: number;
    readonly maxBudgetUsd: number;
  };
}

export interface ReverifyRunnerContext {
  readonly packet: string;
  readonly referenceId: string;
  readonly modelProfile: string;
  readonly reasoningEffort: string;
  readonly budgetUsd: string;
  readonly workspace: string;
  readonly evidenceArtifact: string;
}

const PLACEHOLDER = /\{([a-zA-Z][a-zA-Z0-9]*)\}/g;

export function validateRunnerAdapter(value: unknown): ReverifyRunnerAdapter {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("adapter must be an object");
  const adapter = value as Partial<ReverifyRunnerAdapter>;
  if (adapter.schemaVersion !== 1) throw new Error("adapter.schemaVersion must be 1");
  if (!adapter.name || typeof adapter.name !== "string") throw new Error("adapter.name is required");
  if (adapter.billingMode !== undefined && adapter.billingMode !== "usage" && adapter.billingMode !== "subscription") {
    throw new Error("adapter.billingMode must be usage or subscription");
  }
  if (!adapter.command || typeof adapter.command.executable !== "string" || !adapter.command.executable.trim()) {
    throw new Error("adapter.command.executable is required");
  }
  if (!Array.isArray(adapter.command.args) || adapter.command.args.some((arg) => typeof arg !== "string")) {
    throw new Error("adapter.command.args must be a string array");
  }
  const limits = adapter.limits;
  if (!limits) throw new Error("adapter.limits is required");
  for (const [key, value] of Object.entries(limits)) {
    if (typeof value !== "number" || !Number.isFinite(value) || value < 0) throw new Error(`adapter.limits.${key} must be a non-negative number`);
  }
  if (!Number.isInteger(limits.maxTasksPerRun) || limits.maxTasksPerRun < 1) throw new Error("maxTasksPerRun must be a positive integer");
  if (!Number.isInteger(limits.maxPullRequestsPerRun) || limits.maxPullRequestsPerRun < 1) throw new Error("maxPullRequestsPerRun must be a positive integer");
  if (!Number.isInteger(limits.maxRetries)) throw new Error("maxRetries must be an integer");
  if (limits.timeoutMinutes <= 0) throw new Error("timeoutMinutes must be positive");
  if ((adapter.billingMode ?? "usage") === "usage" && limits.maxBudgetUsd <= 0) {
    throw new Error("maxBudgetUsd must be positive for usage billing");
  }
  if (adapter.passEnvironment && (!Array.isArray(adapter.passEnvironment) || adapter.passEnvironment.some((key) => typeof key !== "string"))) {
    throw new Error("adapter.passEnvironment must be a string array");
  }
  return adapter as ReverifyRunnerAdapter;
}

export function renderAdapterCommand(
  adapter: ReverifyRunnerAdapter,
  context: ReverifyRunnerContext,
): { executable: string; args: string[] } {
  const render = (value: string) => value.replace(PLACEHOLDER, (_match, key: keyof ReverifyRunnerContext) => {
    if (!(key in context)) throw new Error(`unknown adapter placeholder: {${key}}`);
    return context[key];
  });
  return {
    executable: render(adapter.command.executable),
    args: adapter.command.args.map(render),
  };
}

export function selectReverifyTask(queue: ReverifyQueue, id: string): ReverifyTask {
  const task = queue.tasks.find((candidate) => candidate.id === id);
  if (!task) throw new Error(`reference ${id} is not present in the queue`);
  return task;
}

export function buildReverifyPacket(queue: ReverifyQueue, task: ReverifyTask): string {
  return [
    `# Reverify task — ${task.name} (${task.id})`,
    "",
    `- Queue date: ${queue.asOf}`,
    `- Current public status: ${task.currentStatus}`,
    `- Priority: ${task.priority}`,
    `- Reasons: ${task.reasonCodes.join(", ") || "scheduled TTL refresh"}`,
    `- Model profile: ${queue.modelPolicy.profile}`,
    `- Reasoning effort: ${queue.modelPolicy.reasoningEffort}`,
    `- Authority: ${queue.modelPolicy.authority}`,
    "",
    "## Required workflow",
    "",
    "1. Read `.agents/skills/omd-add-reference/SKILL.md` completely and follow UPDATE mode.",
    `2. Treat \`${task.worker.evidenceArtifact}\` as raw evidence, not as canonical tokens.`,
    `3. Execute the semantic task: \`${task.worker.invocation}\`.`,
    "4. Inspect current first-party product surfaces plus official font/design/license sources.",
    "5. Keep product, marketing, docs chrome, and declared-only assets in separate source domains.",
    "6. Update only `web/references/<id>/DESIGN.md` and `.verification.md`; sync the derived mirror mechanically.",
    "7. Never assign public trust yourself. The deterministic evaluator decides Verified v2.",
    "8. Do not commit, push, or open more than one PR for this reference unless the runner explicitly authorizes it.",
    "",
    "## Acceptance",
    "",
    ...task.acceptance.map((command) => `- \`${command}\``),
    "",
  ].join("\n");
}
