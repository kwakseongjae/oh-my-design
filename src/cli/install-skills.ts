import * as p from '@clack/prompts';
import pc from 'picocolors';
import {
  readFileSync,
  readdirSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  cpSync,
  rmSync,
  rmdirSync,
  statSync,
  renameSync,
} from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { homedir } from 'node:os';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { detectInstalledAgents } from '../core/agent-detect.js';
import {
  CLAUDE_HOOK_PATHS,
  isKnownLegacyHook,
  isSelfConsistentManagedHook,
  renderManagedHook,
} from './hook-contract.js';
import { unsafeManagedPath } from './install-path.js';
import {
  installProofPolicy,
  removeProofPolicy,
  type ProofPolicyTarget,
} from './proof-policy.js';
import type { WorkflowLanguage } from './workflows.js';

export type SkillTarget = 'claude-code' | 'codex' | 'opencode' | 'cursor';

const VALID_SKILL_TARGETS = ['claude-code', 'codex', 'opencode', 'cursor'] as const;
const DEVELOPMENT_ONLY_SKILLS = new Set(['omd-lab-02-design-harness']);

export function targetsAvailableForScope(
  targets: SkillTarget[],
  scope: 'project' | 'global',
): SkillTarget[] {
  return scope === 'global' ? targets.filter((target) => target !== 'cursor') : targets;
}

export function skillInvocationName(
  skill: string,
  target: SkillTarget,
): string {
  return target === 'opencode' || target === 'cursor' || skill === 'claude-design'
    ? skill
    : skill.replace(/^omd-/, 'omd:');
}

/** Channels that host Agent Skills-compatible SKILL.md trees. */
type SkillChannel = SkillTarget;

export interface InstallSkillsOptions {
  dir?: string;
  agents?: SkillTarget[];
  force?: boolean;
  /** Refresh the project-scoped Claude hook bundle without granting permission
   *  to overwrite any other unmarked user files. Intended for `omd doctor`
   *  repairs when a hook is stale or locally modified. */
  repairHooks?: boolean;
  /** Non-interactive: install all skills + all agents without TUI prompt.
   *  Default false → interactive multiselect when TTY available. */
  all?: boolean;
  /** Pre-select specific skill names from CLI flag (`--skills omd-init,omd-apply`).
   *  Overrides interactive prompt when set. */
  skillsFilter?: string[];
  /** Pre-select specific agent names. Overrides interactive prompt when set. */
  agentsFilter?: string[];
  /** Minimal install: only the named skill files — skip sub-agents, data files,
   *  hooks, and settings.json. Ideal for shipping a single standalone skill. */
  skillsOnly?: boolean;
  /** Compatibility mode for Cursor clients without Agent Skills support.
   *  Installs only the legacy project rule + shared catalog for Cursor. */
  cursorRuleOnly?: boolean;
  /** Opt in to the project-local Claude Code/Codex proof-execution blocker. */
  proofPolicy?: boolean;
  /** Remove only the managed proof-policy hooks and files, preserving user hooks. */
  removeProofPolicy?: boolean;
  /** Install to each channel's user-level directory instead of this project
   *  (`~/.claude`, `~/.agents` + `~/.codex`, or `~/.config/opencode`).
   *  Writes skills + sub-agents (+ data); never touches global hooks/settings.
   *  When unset and interactive, the TUI asks project-vs-global. */
  global?: boolean;
  /** Language used for the post-install activation guidance. */
  lang?: WorkflowLanguage;
}

interface PostInstallCopy {
  title: string;
  restartAgent: string;
  restartCursor: string;
  designSystemPrompt: string;
  homePrompt: string;
  routeExplanation: string;
  walkthrough: string;
  powerUser: string;
  sessionWarning: string;
  cursorSessionWarning: string;
  cursorNative: string;
  cursorCompatibility: string;
  builder: string;
  cursorApplyLabel: string;
  cursorFullInstall: string;
}

const POST_INSTALL_COPY: Record<WorkflowLanguage, PostInstallCopy> = {
  en: {
    title: 'Next',
    restartAgent: 'Restart your coding agent, then send this prompt:',
    restartCursor: 'Restart Cursor, then continue with DESIGN.md:',
    designSystemPrompt: 'Set up a Toss-inspired design system for a family meal-tracking app. Ask before writing DESIGN.md.',
    homePrompt: 'Using this DESIGN.md, design the home screen.',
    routeExplanation: 'OmD routes the request through omd:init, prepares an exact preview, and adopts the approved package atomically. Then continue with:',
    walkthrough: 'Full walkthrough: “Your first 60 seconds” in the README. Routing is automatic; no slash command is required.',
    powerUser: 'Power user: /omd-harness <task> opens the full checkpointed pipeline.',
    sessionWarning: 'Already running? Restart the coding agent. Codex must also trust the project before loading project-local roles.',
    cursorSessionWarning: 'Already running? Restart Cursor so it reloads the project rule.',
    cursorNative: 'Cursor loads OmD Agent Skills from .cursor/skills and keeps DESIGN.md precedence in a small bootstrap rule.',
    cursorCompatibility: 'Rule-only compatibility can apply an existing root DESIGN.md, but it cannot create one. The local catalog is read-only; do not copy or adapt it into the project.',
    builder: 'If DESIGN.md is missing, download a standalone Core v2 file from Builder and validate it before building.',
    cursorApplyLabel: 'After a valid root DESIGN.md exists, send:',
    cursorFullInstall: 'For Agent Skills and Autopilot creation, reinstall Cursor without --cursor-rule-only.',
  },
  ko: {
    title: '다음 단계',
    restartAgent: '코딩 에이전트를 다시 시작한 뒤, 대화창에 이 요청을 입력하세요:',
    restartCursor: 'Cursor를 다시 시작한 뒤 DESIGN.md 작업을 이어가세요:',
    designSystemPrompt: '토스 스타일로 가족 식단 공유 앱의 디자인 시스템을 제안하고, DESIGN.md를 쓰기 전에 확인해줘.',
    homePrompt: '이 DESIGN.md를 기준으로 홈 화면을 디자인해줘.',
    routeExplanation: 'OmD가 요청을 omd:init으로 연결해 정확한 미리보기를 준비하고, 승인된 패키지만 원자적으로 채택합니다. 이어서 이렇게 요청하세요:',
    walkthrough: '전체 사용법은 README의 “첫 60초”에서 볼 수 있습니다. 라우팅은 자동이라 슬래시 명령을 외울 필요가 없습니다.',
    powerUser: '고급 사용: /omd-harness <task>로 체크포인트가 있는 전체 파이프라인을 시작합니다.',
    sessionWarning: '이미 실행 중이었다면 코딩 에이전트를 다시 시작하세요. Codex는 프로젝트를 신뢰해야 로컬 역할을 불러옵니다.',
    cursorSessionWarning: '이미 실행 중이었다면 Cursor를 다시 시작해 프로젝트 규칙을 새로 불러오세요.',
    cursorNative: 'Cursor는 .cursor/skills의 OmD Agent Skills를 읽고, 작은 부트스트랩 규칙으로 DESIGN.md 우선순위를 지킵니다.',
    cursorCompatibility: 'rule-only 호환 모드는 기존 루트 DESIGN.md를 적용할 수 있지만 새로 만들 수는 없습니다. 로컬 카탈로그는 읽기 전용이며 프로젝트로 복사하거나 각색하면 안 됩니다.',
    builder: 'DESIGN.md가 없다면 Builder에서 독립 실행 가능한 Core v2 파일을 내려받고 검증한 뒤 구현하세요.',
    cursorApplyLabel: '유효한 루트 DESIGN.md가 준비된 뒤 이렇게 요청하세요:',
    cursorFullInstall: 'Agent Skills와 Autopilot 생성 기능이 필요하면 --cursor-rule-only 없이 Cursor를 다시 설치하세요.',
  },
  ja: {
    title: '次の手順',
    restartAgent: 'コーディングエージェントを再起動し、チャットに次の依頼を入力してください:',
    restartCursor: 'Cursorを再起動し、DESIGN.mdの作業を続けてください:',
    designSystemPrompt: 'Tossを参考に、家族向け食事記録アプリのデザインシステムを提案してください。DESIGN.mdを書く前に確認を取ってください。',
    homePrompt: 'このDESIGN.mdを基準にホーム画面をデザインしてください。',
    routeExplanation: 'OmDは依頼をomd:initに振り分け、正確なプレビューを準備し、承認されたパッケージだけをアトミックに採用します。続けて次のように依頼してください:',
    walkthrough: '詳しい手順はREADMEの「最初の60秒」を参照してください。振り分けは自動なので、スラッシュコマンドを覚える必要はありません。',
    powerUser: '上級者向け: /omd-harness <task> でチェックポイント付きの全工程を開始できます。',
    sessionWarning: 'すでに起動中の場合はエージェントを再起動してください。Codexでは、プロジェクトを信頼するとローカルの役割が読み込まれます。',
    cursorSessionWarning: 'すでに起動中の場合は、Cursorを再起動してプロジェクトルールを読み直してください。',
    cursorNative: 'Cursorは.cursor/skillsのOmD Agent Skillsを読み込み、小さな起動ルールでDESIGN.mdの優先順位を保ちます。',
    cursorCompatibility: 'rule-only互換モードは既存のルートDESIGN.mdを適用できますが、新規作成はできません。ローカルカタログは読み取り専用であり、プロジェクトへコピーまたは改変しないでください。',
    builder: 'DESIGN.mdがない場合は、Builderから単独で使えるCore v2ファイルをダウンロードし、検証してから実装してください。',
    cursorApplyLabel: '有効なルートDESIGN.mdを用意した後、次を送信してください:',
    cursorFullInstall: 'Agent SkillsとAutopilotによる作成が必要な場合は、--cursor-rule-onlyを付けずにCursorを再インストールしてください。',
  },
  'zh-CN': {
    title: '下一步',
    restartAgent: '重启编程助手，然后在对话框中发送下面的任务:',
    restartCursor: '重启 Cursor，然后继续处理 DESIGN.md:',
    designSystemPrompt: '参考 Toss，为家庭饮食记录应用设计一套设计系统。写入 DESIGN.md 前先向我确认。',
    homePrompt: '以这份 DESIGN.md 为依据，设计首页。',
    routeExplanation: 'OmD 会把任务交给 omd:init，生成精确预览，并以原子方式采用已批准的包。接着发送:',
    walkthrough: '完整步骤见 README 的“最初 60 秒”。任务会自动分流，不需要记忆斜杠命令。',
    powerUser: '进阶用法: /omd-harness <task> 可启动带检查点的完整流程。',
    sessionWarning: '如果助手已经在运行，请重启。Codex 还需要信任项目，才能加载项目内的角色。',
    cursorSessionWarning: '如果 Cursor 已经在运行，请重启以重新加载项目规则。',
    cursorNative: 'Cursor 从 .cursor/skills 加载 OmD Agent Skills，并用一条精简的启动规则确保 DESIGN.md 优先。',
    cursorCompatibility: 'rule-only 兼容模式可以应用现有的根目录 DESIGN.md，但不能新建。 本地参考库为只读，不得复制或改写为项目文件。',
    builder: '如果缺少 DESIGN.md，请从 Builder 下载可独立使用的 Core v2 文件，验证后再开始实现。',
    cursorApplyLabel: '有效的根目录 DESIGN.md 就绪后，发送:',
    cursorFullInstall: '如需 Agent Skills 和 Autopilot 创建功能，请不要使用 --cursor-rule-only，重新安装 Cursor。',
  },
  'zh-TW': {
    title: '下一步',
    restartAgent: '重新啟動程式助理，接著在對話框傳送以下工作:',
    restartCursor: '重新啟動 Cursor，接著繼續處理 DESIGN.md:',
    designSystemPrompt: '參考 Toss，為家庭飲食記錄應用設計一套設計系統。寫入 DESIGN.md 前先向我確認。',
    homePrompt: '以這份 DESIGN.md 為依據，設計首頁。',
    routeExplanation: 'OmD 會把工作交給 omd:init，產生精確預覽，並以原子方式採用已核准的套件。接著傳送:',
    walkthrough: '完整步驟請見 README 的「最初 60 秒」。工作會自動分流，不需要記住斜線指令。',
    powerUser: '進階用法: /omd-harness <task> 可啟動含檢查點的完整流程。',
    sessionWarning: '若助理已在執行，請重新啟動。Codex 還需要信任專案，才能載入專案內的角色。',
    cursorSessionWarning: '若 Cursor 已在執行，請重新啟動以重新載入專案規則。',
    cursorNative: 'Cursor 會從 .cursor/skills 載入 OmD Agent Skills，並以精簡的啟動規則確保 DESIGN.md 優先。',
    cursorCompatibility: 'rule-only 相容模式可以套用既有的根目錄 DESIGN.md，但不能新建。 本機參考庫為唯讀，不得複製或改寫成專案檔案。',
    builder: '如果缺少 DESIGN.md，請從 Builder 下載可獨立使用的 Core v2 檔案，驗證後再開始實作。',
    cursorApplyLabel: '有效的根目錄 DESIGN.md 就緒後，傳送:',
    cursorFullInstall: '若需要 Agent Skills 與 Autopilot 建立功能，請不要使用 --cursor-rule-only，重新安裝 Cursor。',
  },
};

export function postInstallGuidance(
  lang: WorkflowLanguage,
  options: { cursorOnly: boolean; cursorRuleOnly?: boolean },
): { title: string; body: string } {
  const copy = POST_INSTALL_COPY[lang];
  if (options.cursorOnly) {
    if (options.cursorRuleOnly) {
      return {
        title: copy.title,
        body: [
          copy.restartCursor,
          '',
          copy.cursorCompatibility,
          copy.builder,
          copy.cursorFullInstall,
          '',
          copy.cursorApplyLabel,
          `  ${copy.homePrompt}`,
          '',
          `⚠ ${copy.cursorSessionWarning}`,
        ].join('\n'),
      };
    }
    return {
      title: copy.title,
      body: [
        copy.restartCursor,
        '',
        `  ${copy.designSystemPrompt}`,
        '',
        copy.cursorNative,
        copy.builder,
        '',
        `⚠ ${copy.cursorSessionWarning}`,
      ].join('\n'),
    };
  }
  return {
    title: copy.title,
    body: [
      copy.restartAgent,
      '',
      `  ${copy.designSystemPrompt}`,
      '',
      copy.routeExplanation,
      `  ${copy.homePrompt}`,
      '',
      copy.walkthrough,
      copy.powerUser,
      '',
      `⚠ ${copy.sessionWarning}`,
    ].join('\n'),
  };
}

interface InstallPlan {
  target: SkillChannel;
  destDir: string;
  layout: 'folder' | 'flat';
}

function findPackageRoot(): string | null {
  let cur = dirname(fileURLToPath(import.meta.url));
  for (let i = 0; i < 8; i++) {
    if (existsSync(join(cur, 'skills'))) return cur;
    const parent = dirname(cur);
    if (parent === cur) break;
    cur = parent;
  }
  return null;
}

function listShippedSkills(packageRoot: string): string[] {
  const skillsDir = join(packageRoot, 'skills');
  if (!existsSync(skillsDir)) return [];
  return readdirSync(skillsDir)
    .filter(
      (name) =>
        !DEVELOPMENT_ONLY_SKILLS.has(name) &&
        existsSync(join(skillsDir, name, 'SKILL.md')),
    )
    .sort();
}

/**
 * Canonical agent definitions live at `agents/<name>.md` (markdown with YAML
 * frontmatter). Channel-specific files (.claude/agents/*.md, .codex/agents/*.toml)
 * are generated artifacts — never the source of truth.
 *
 * The package ships only `agents/` and the generator emits per-channel files
 * into the user's project on `omd install-skills`.
 */
function listCanonicalAgents(packageRoot: string): string[] {
  const dir = join(packageRoot, 'agents');
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((name) => name.startsWith('omd-') && name.endsWith('.md'))
    .sort();
}

interface ParsedAgent {
  name: string;
  description: string;
  tools: string[];
  model: string;
  body: string;
}

/** Parse `agents/<name>.md` YAML frontmatter + body into structured form. */
function parseCanonicalAgent(packageRoot: string, filename: string): ParsedAgent {
  const src = readFileSync(join(packageRoot, 'agents', filename), 'utf8');
  const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(src);
  if (!match) {
    throw new Error(`agents/${filename}: missing YAML frontmatter`);
  }
  const fm = match[1];
  const body = match[2];
  const grab = (key: string): string => {
    const re = new RegExp(`^${key}:\\s*(.+)$`, 'm');
    const m = re.exec(fm);
    if (!m) return '';
    const value = m[1].trim();
    if (value.startsWith('"') && value.endsWith('"')) {
      try {
        const decoded: unknown = JSON.parse(value);
        if (typeof decoded === 'string') return decoded;
      } catch {
        // Fall through to the conservative scalar handling below. The generated
        // channel file will still be valid even if a hand-edited description has
        // malformed escaping in the canonical YAML.
      }
    }
    if (value.startsWith("'") && value.endsWith("'")) {
      return value.slice(1, -1).replace(/''/g, "'");
    }
    return value;
  };
  return {
    name: grab('name') || filename.replace(/\.md$/, ''),
    description: grab('description'),
    tools: grab('tools')
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean),
    model: grab('model') || 'sonnet',
    body,
  };
}

/** Render a canonical agent as a Claude Code subagent file.
 *  IMPORTANT: Claude Code's subagent parser requires YAML frontmatter (`---`)
 *  as the FIRST line of the file. Any preceding content (HTML comments, blank
 *  lines) breaks discovery. So we encode the managed-by-omd marker as a
 *  custom frontmatter field (`omd_managed: true`) instead of an HTML comment.
 */
function rewriteAgentSkillPaths(body: string, skillRoot: string): string {
  return body.replace(
    /(?:~\/)?\.(?:claude|agents|opencode)\/skills\//g,
    `${skillRoot}/`,
  );
}

function renderClaudeAgent(
  a: ParsedAgent,
  scope: 'project' | 'global',
): string {
  const fm = [
    '---',
    `name: ${JSON.stringify(a.name)}`,
    `description: ${JSON.stringify(a.description)}`,
    `tools: ${JSON.stringify(a.tools)}`,
    `model: ${JSON.stringify(a.model)}`,
    `omd_managed: true`,
    '---',
    '',
  ].join('\n');
  const skillRoot = scope === 'global' ? '~/.claude/skills' : '.claude/skills';
  return fm + rewriteAgentSkillPaths(a.body, skillRoot);
}

type NativeAgentChannel = 'codex' | 'opencode';

/**
 * Canonical roles are authored once and historically used Claude Code paths and
 * tool names.  A generated non-Claude role must be executable using only the
 * channel it was installed for: otherwise a perfectly healthy Codex/OpenCode
 * install tells the agent to read a sibling `.claude/skills` tree that does not
 * exist in a single-channel project.
 */
function nativeAgentBody(
  body: string,
  channel: NativeAgentChannel,
  scope: 'project' | 'global',
): string {
  const skillRoot = channel === 'codex'
    ? scope === 'global' ? '~/.agents/skills' : '.agents/skills'
    : scope === 'global' ? '~/.config/opencode/skills' : '.opencode/skills';

  const nativeBody = rewriteAgentSkillPaths(body, skillRoot)
    .replace(/You are spawned as a Claude Code subagent/g, 'You run as a host-managed subagent')
    .replace(/Claude Code subagent/g, 'host-managed subagent')
    .replace(/the Agent tool/g, "the host's native sub-agent mechanism")
    .replace(/Agent tool/g, 'host-native sub-agent mechanism')
    .replace(/AskUserQuestion-compatible/g, 'host question-interface compatible')
    .replace(
      /launcher calls AskUserQuestion\(questions_file\)/g,
      'launcher presents questions from `questions_file` to the user',
    )
    .replace(/launcher calls AskUserQuestion/g, 'launcher presents the questions to the user')
    .replace(/no AskUserQuestion/g, 'without direct user-question tools');
  return channel === 'opencode'
    ? nativeBody.replace(/\bomd:([a-z0-9-]+)/g, 'omd-$1')
    : nativeBody;
}

function nativeSkillRoot(
  channel: NativeAgentChannel,
  scope: 'project' | 'global',
): string {
  if (channel === 'codex') {
    return scope === 'global' ? '~/.agents/skills' : '.agents/skills';
  }
  return scope === 'global' ? '~/.config/opencode/skills' : '.opencode/skills';
}

/** OpenCode uses Markdown agents whose id is the filename. */
function renderOpenCodeAgent(
  a: ParsedAgent,
  scope: 'project' | 'global',
  dataRoot: string,
): string {
  const skillRoot = nativeSkillRoot('opencode', scope);
  return [
    '---',
    `description: ${JSON.stringify(a.description)}`,
    'mode: subagent',
    '---',
    '',
    '## Installed role runtime contract',
    '',
    `- Resolve referenced OmD skills from \`${skillRoot}/<skill>/SKILL.md\`.`,
    `- Resolve the installed offline catalog from \`${dataRoot}\`.`,
    "- Use OpenCode's native sub-agent mechanism for specialist handoffs.",
    '',
    nativeAgentBody(a.body, 'opencode', scope).trimEnd(),
    '',
    '<!-- omd:installed-agent — generated from the canonical OmD role. -->',
    '',
  ].join('\n');
}

/**
 * Canonical agents predate the skill-only CLI and a few bodies still describe
 * retired shell helpers. Codex receives the full role body, but those obsolete
 * invocations must not be executable instructions in the generated agent.
 */
function codexSafeAgentBody(body: string): string {
  return body
    .replace(/`omd init prepare`/g, '`omd:init` skill flow')
    .replace(/^omd remember .*$/gm, 'Use the `omd:remember` skill directly with the same finding and context.')
    .replace(/`omd remember [^`]+`/g, 'the `omd:remember` skill with the same correction details')
    .replace(/\bomd remember\b/g, 'omd:remember skill');
}

/** Render a canonical agent as a self-contained Codex TOML definition. */
function renderCodexAgent(
  a: ParsedAgent,
  scope: 'project' | 'global',
  dataRoot: string,
): string {
  const name = a.name.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  const desc = a.description.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  const skillRoot = nativeSkillRoot('codex', scope);
  const instructions = [
    '## Codex runtime contract',
    '',
    '- Execute the OmD behavior directly from these instructions and the installed skills.',
    `- Resolve referenced OmD skills from \`${skillRoot}/<skill>/SKILL.md\`.`,
    `- Resolve the installed offline catalog from \`${dataRoot}\`.`,
    "- Use Codex's native sub-agent mechanism for specialist handoffs.",
    '- The OmD CLI exposes installation and diagnostics only. Do not invent or invoke removed helper subcommands.',
    '',
    codexSafeAgentBody(nativeAgentBody(a.body, 'codex', scope)).trimEnd(),
  ].join('\n');
  if (instructions.includes("'''")) {
    throw new Error(`agents/${a.name}.md: cannot encode triple single quote in Codex TOML`);
  }
  return [
    `name = "${name}"`,
    `description = "${desc}"`,
    '',
    `developer_instructions = '''`,
    instructions,
    `'''`,
    '',
  ].join('\n');
}

function planForTarget(
  projectRoot: string,
  target: SkillChannel,
  scope: 'project' | 'global',
): InstallPlan {
  switch (target) {
    case 'claude-code':
      return {
        target,
        destDir: join(projectRoot, '.claude', 'skills'),
        layout: 'folder',
      };
    case 'codex':
      // Official Codex skill discovery path is `.agents/skills/<name>/SKILL.md`
      // (developers.openai.com/codex/skills) — NOT `.codex/skills`. Folder layout
      // so multi-file skills (scripts/, references/) install + run.
      return {
        target,
        destDir: join(projectRoot, '.agents', 'skills'),
        layout: 'folder',
      };
    case 'opencode':
      // OpenCode loads project skills from `.opencode/skills/<name>/SKILL.md`
      // and global skills from `~/.config/opencode/skills/<name>/SKILL.md`.
      return {
        target,
        destDir: scope === 'global'
          ? join(projectRoot, '.config', 'opencode', 'skills')
          : join(projectRoot, '.opencode', 'skills'),
        layout: 'folder',
      };
    case 'cursor':
      // Cursor 2.4+ discovers project Agent Skills from
      // `.cursor/skills/<name>/SKILL.md`. Keep the native path instead of
      // relying on cross-runtime `.agents/skills` discovery.
      return {
        target,
        destDir: join(projectRoot, '.cursor', 'skills'),
        layout: 'folder',
      };
  }
}

/**
 * Channel → shared data dir (`<dir>/data/…`) for read-only data assets
 * (catalog JSONs, reference DESIGN.md catalog, ctx-prime helper scripts).
 * Single lookup table replacing the repeated if-else/ternary chains (issue #28).
 * `null` = the channel hosts no data dir of its own:
 *   - Cursor skills read the SHARED `.claude/data` path (issue #20) — resolved by
 *     `dataDirFor()` below, which also applies the claude-code dedup guard.
 *     Modern Cursor installs receive the shared helper scripts there too.
 */
type DataChannelDir = '.claude' | '.codex' | '.opencode' | '.config/opencode';

const CHANNEL_DATA_DIRS: Record<SkillTarget, DataChannelDir | null> = {
  'claude-code': '.claude',
  codex: '.codex',
  opencode: '.opencode',
  cursor: null,
};

/**
 * Where a target's data assets (data JSONs + reference catalog) land. Cursor
 * reuses `.claude/data` so the catalog location stays single (issue #20) —
 * but ONLY when claude-code isn't also selected: the claude-code pass already
 * writes there, and a second pass would double-copy the catalog.
 */
export function dataDirFor(
  target: SkillTarget,
  targets: SkillTarget[]
): DataChannelDir | null {
  if (target === 'cursor') {
    return targets.includes('claude-code') ? null : '.claude';
  }
  return CHANNEL_DATA_DIRS[target];
}

function dataDirForScope(
  target: SkillTarget,
  targets: SkillTarget[],
  scope: 'project' | 'global',
): DataChannelDir | null {
  if (scope === 'global' && target === 'opencode') return '.config/opencode';
  return dataDirFor(target, targets);
}

const MANAGED_HEADER =
  '<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->';

// Substring shared by old (line 1) and new (after-frontmatter) marker formats.
// Used for detection so upgrades from pre-v1.7.2 installs still refresh.
const MANAGED_MARKER_SUBSTR = 'omd:installed-skill';

/**
 * Write the managed marker AFTER the YAML frontmatter block so the very first
 * line of the installed file is `---`. Claude Code's skill loader reads the
 * frontmatter `name`/`description` only when `---` is line 1 — a leading HTML
 * comment makes it register the comment as the description (issue #17).
 *
 * If the source has no frontmatter (shouldn't happen for SKILL.md, but be
 * defensive), fall back to prepending the marker.
 */
function withManagedMarker(src: string): string {
  // \r?\n: a CRLF checkout (Windows core.autocrlf) must not miss the
  // frontmatter and fall back to a line-1 marker — that reintroduces #17.
  const fm = /^(---\r?\n[\s\S]*?\r?\n---\r?\n)([\s\S]*)$/.exec(src);
  if (!fm) {
    return MANAGED_HEADER + '\n\n' + src;
  }
  return fm[1] + MANAGED_HEADER + '\n\n' + fm[2];
}

/**
 * Detect an omd-managed installed-skill file. Matches both the new format
 * (marker after frontmatter) and the legacy format (marker on line 1) by
 * scanning the first ~30 lines for the marker substring. This keeps upgrades
 * working: a pre-v1.7.2 file with the marker at line 1 is still recognized as
 * managed and gets refreshed rather than skipped as user-edited drift.
 */
function isManagedSkillFile(content: string): boolean {
  if (!content) return false;
  const head = content.split('\n', 30).join('\n');
  return head.includes(MANAGED_MARKER_SUBSTR);
}

function withGlobalDataHint(src: string, globalDataRoot: string | null): string {
  if (!globalDataRoot) return src;
  const hint = [
    `> **Installed global data root (highest priority):** \`${globalDataRoot}\`.`,
    '> Resolve catalog JSON, references, and helper scripts there before project-relative fallbacks.',
    '',
  ].join('\n');
  const fm = /^(---\r?\n[\s\S]*?\r?\n---\r?\n)([\s\S]*)$/.exec(src);
  return fm ? fm[1] + hint + fm[2] : hint + src;
}

function renderSkillForChannel(
  src: string,
  folderName: string,
  target: SkillChannel,
): string {
  // Canonical skill sources may use either the repository's historical
  // namespaced form (`omd:apply`) or portable Agent Skills hyphen-case
  // (`omd-apply`). Always derive the installed name from the folder so every
  // channel gets the contract it actually accepts.
  const usesPortableSkillNames = target === 'opencode' || target === 'cursor';
  const installedName = usesPortableSkillNames
    ? folderName
    : folderName.replace(/^omd-/, 'omd:');
  const rendered = src.replace(
    /^name:\s*[^\r\n]+$/m,
    `name: ${installedName}`,
  );
  return usesPortableSkillNames
    ? rendered.replace(/\bomd:([a-z0-9][a-z0-9-]*)\b/g, 'omd-$1')
    : rendered;
}

interface InstallResult {
  target: SkillTarget;
  skill: string;
  destPath: string;
  status: 'created' | 'updated' | 'removed' | 'unchanged' | 'skipped-drift' | 'skipped-incompat';
  reason?: 'unsafe-path';
}

/**
 * Codex used `.codex/skills` before the official cross-agent skill path settled
 * on `.agents/skills`. Current Codex still scans the legacy tree, so an old
 * marker-first SKILL.md can produce loader errors even after the new copy is
 * healthy. Remove only OmD-owned legacy entrypoints; preserve user files and
 * every sidecar in the directory.
 */
function removeManagedLegacyCodexSkills(root: string): InstallResult[] {
  const legacyRoot = join(root, '.codex', 'skills');
  if (!existsSync(legacyRoot)) return [];
  const results: InstallResult[] = [];
  for (const entry of readdirSync(legacyRoot, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const skillPath = join(legacyRoot, entry.name, 'SKILL.md');
    if (!existsSync(skillPath)) continue;
    const content = readFileSync(skillPath, 'utf8');
    if (!isManagedSkillFile(content)) continue;
    rmSync(skillPath, { force: true });
    const dir = dirname(skillPath);
    if (readdirSync(dir).length === 0) rmdirSync(dir);
    results.push({
      target: 'codex',
      skill: `legacy-skill:${entry.name}`,
      destPath: skillPath,
      status: 'removed',
    });
  }
  return results;
}

// Skill-tree entries that must never be installed (runtime state, caches, OS cruft).
const IGNORED_SKILL_ENTRIES = new Set(['.runtime', '__pycache__', '.DS_Store']);

function isIgnoredSkillTreeEntry(name: string): boolean {
  return IGNORED_SKILL_ENTRIES.has(name) || name.endsWith('.pyc');
}

/** Compare only package-owned entries. Destination-only sidecars are user
 * content and deliberately do not make an otherwise current install dirty. */
function shippedSkillTreeMatches(sourceDir: string, destinationDir: string): boolean {
  if (!existsSync(destinationDir)) return false;
  for (const entry of readdirSync(sourceDir, { withFileTypes: true })) {
    if (entry.name === 'SKILL.md' || isIgnoredSkillTreeEntry(entry.name)) continue;
    const source = join(sourceDir, entry.name);
    const destination = join(destinationDir, entry.name);
    if (!existsSync(destination)) return false;
    try {
      const destinationStat = statSync(destination);
      if (entry.isDirectory()) {
        if (!destinationStat.isDirectory() || !shippedSkillTreeMatches(source, destination)) {
          return false;
        }
      } else if (
        !destinationStat.isFile() ||
        !readFileSync(source).equals(readFileSync(destination))
      ) {
        return false;
      }
    } catch {
      return false;
    }
  }
  return true;
}

/**
 * A skill may restrict itself to specific agent channels via a frontmatter line
 * `x-omd-channels: claude-code` (comma/space separated). Returns the allowed
 * channels, or null when channel-agnostic (installs anywhere). Used by skills that
 * depend on a particular agent runtime — e.g. claude-design needs Claude Code's
 * claude-in-chrome MCP + Bash/python/node and is therefore claude-code only.
 */
function parseSkillChannels(skillMd: string): SkillChannel[] | null {
  const fm = /^---\n([\s\S]*?)\n---/.exec(skillMd);
  if (!fm) return null;
  const m = /^x-omd-channels:\s*(.+)$/m.exec(fm[1]);
  if (!m) return null;
  const valid: SkillChannel[] = ['claude-code', 'codex', 'opencode', 'cursor'];
  const list = m[1]
    .split(/[,\s]+/)
    .map((s) => s.trim())
    .filter((s): s is SkillChannel => (valid as string[]).includes(s));
  return list.length > 0 ? list : null;
}

/**
 * The agent channels a skill can install into: its declared `x-omd-channels`
 * (if any), else all channels. All three channels now use folder layout
 * (.claude/skills, .agents/skills, .opencode/skills) so multi-file skills with
 * scripts/references install everywhere — the only restriction is what the skill
 * itself declares (e.g. claude-design needs a browser-driving runtime).
 */
function skillSupportedChannels(packageRoot: string, skill: string): SkillChannel[] {
  return (
    parseSkillChannels(readFileSync(join(packageRoot, 'skills', skill, 'SKILL.md'), 'utf8')) ??
    (['claude-code', 'codex', 'opencode', 'cursor'] as SkillChannel[])
  );
}

function installOne(
  packageRoot: string,
  installRoot: string,
  plan: InstallPlan,
  skill: string,
  force: boolean,
  globalDataRoot: string | null,
): InstallResult {
  const skillDir = join(packageRoot, 'skills', skill);
  const src = readFileSync(join(skillDir, 'SKILL.md'), 'utf8');
  // Project installs keep the canonical cross-channel fallback order intact.
  // Global installs need one absolute, machine-local root because their skills
  // execute from arbitrary project working directories.
  const channelSrc = withGlobalDataHint(
    renderSkillForChannel(src, skill, plan.target),
    globalDataRoot,
  );
  // Marker goes AFTER frontmatter so `---` stays line 1 (issue #17).
  const managed = withManagedMarker(channelSrc);

  // Respect a skill's declared channel restriction (frontmatter `x-omd-channels:`).
  const channels = parseSkillChannels(src);
  if (channels && !channels.includes(plan.target)) {
    return {
      target: plan.target,
      skill,
      destPath: join(plan.destDir, skill + '.md'),
      status: 'skipped-incompat',
    };
  }

  // A skill is "multi-file" when it ships more than SKILL.md (scripts/, references/, …).
  const extras = readdirSync(skillDir).filter(
    (n) => n !== 'SKILL.md' && !IGNORED_SKILL_ENTRIES.has(n)
  );
  const isMultiFile = extras.length > 0;

  // Retained for compatibility with any future flat-layout channel. All current
  // skill channels use folder layout and therefore keep scripts/references.
  if (plan.layout !== 'folder' && isMultiFile) {
    return {
      target: plan.target,
      skill,
      destPath: join(plan.destDir, skill + '.md'),
      status: 'skipped-incompat',
    };
  }

  const destPath =
    plan.layout === 'folder'
      ? join(plan.destDir, skill, 'SKILL.md')
      : join(plan.destDir, skill + '.md');

  if (unsafeManagedPath(installRoot, destPath)) {
    return { target: plan.target, skill, destPath, status: 'skipped-drift', reason: 'unsafe-path' };
  }

  const exists = existsSync(destPath);
  const existing = exists ? readFileSync(destPath, 'utf8') : '';

  // Drift protection guards the user-editable SKILL.md. Multi-file skills also
  // compare every shipped sidecar, while ignoring destination-only user files.
  // This keeps a second install genuinely idempotent without hiding stale tools.
  if (exists && existing === managed) {
    const extrasCurrent = !isMultiFile || shippedSkillTreeMatches(
      skillDir,
      join(plan.destDir, skill),
    );
    if (extrasCurrent) {
      return { target: plan.target, skill, destPath, status: 'unchanged' };
    }
  }
  // Drift = a file we didn't write. Detect the marker anywhere in the head
  // (new after-frontmatter position OR legacy line-1 position) so pre-v1.7.2
  // installs are recognized as managed and refreshed, not skipped.
  if (exists && !isManagedSkillFile(existing) && !force) {
    return { target: plan.target, skill, destPath, status: 'skipped-drift' };
  }

  mkdirSync(dirname(destPath), { recursive: true });
  writeFileSync(destPath, managed, 'utf8');

  // Copy the rest of the skill tree (scripts/, references/, …) for folder layout.
  if (plan.layout === 'folder' && isMultiFile) {
    const destSkillDir = join(plan.destDir, skill);
    for (const entry of extras) {
      cpSync(join(skillDir, entry), join(destSkillDir, entry), {
        recursive: true,
        filter: (s) => !/(\/__pycache__|\/\.runtime|\.pyc$|\.DS_Store$)/.test(s),
      });
    }
  }

  return {
    target: plan.target,
    skill,
    destPath,
    status: exists ? 'updated' : 'created',
  };
}

/** Install a hook script from package's .claude/hooks/ to project. */
function installHookFile(
  packageRoot: string,
  projectRoot: string,
  filename: (typeof CLAUDE_HOOK_PATHS)[number],
  force: boolean
): InstallResult {
  const target: SkillTarget = 'claude-code';
  const skillLabel = `hook:${filename}`;
  const srcPath = join(packageRoot, '.claude', 'hooks', filename);
  const destPath = join(projectRoot, '.claude', 'hooks', filename);

  if (!existsSync(srcPath)) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift' };
  }
  if (unsafeManagedPath(projectRoot, destPath)) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift', reason: 'unsafe-path' };
  }
  const src = readFileSync(srcPath, 'utf8');
  const managed = renderManagedHook(src);
  const exists = existsSync(destPath);
  const existing = exists ? readFileSync(destPath, 'utf8') : '';
  if (exists && existing === managed) {
    return { target, skill: skillLabel, destPath, status: 'unchanged' };
  }
  if (
    exists &&
    !force &&
    !isSelfConsistentManagedHook(existing) &&
    !isKnownLegacyHook(filename, existing)
  ) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift' };
  }
  mkdirSync(dirname(destPath), { recursive: true });
  const tempPath = `${destPath}.omd-${process.pid}-${Date.now()}.tmp`;
  try {
    writeFileSync(tempPath, managed, { encoding: 'utf8', flag: 'wx' });
    renameSync(tempPath, destPath);
  } catch (error) {
    rmSync(tempPath, { force: true });
    throw error;
  }
  return { target, skill: skillLabel, destPath, status: exists ? 'updated' : 'created' };
}

type JsonObject = Record<string, unknown>;

function isJsonObject(value: unknown): value is JsonObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function parseJsonObject(value: string): JsonObject | null {
  try {
    const parsed: unknown = JSON.parse(value);
    return isJsonObject(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function isOmdHook(value: unknown): boolean {
  if (!isJsonObject(value) || typeof value.command !== 'string') return false;
  const command = value.command;
  const ownedHookPaths = [
    '${CLAUDE_PROJECT_DIR}/.claude/hooks/skill-activation.cjs',
    '${CLAUDE_PROJECT_DIR}/.claude/hooks/session-state-loader.cjs',
    '${CLAUDE_PROJECT_DIR}/.claude/hooks/post-edit-watch.cjs',
    '${CLAUDE_PROJECT_DIR}/.claude/hooks/session-end-foldin.cjs',
    // Pre-v1.8 installs briefly registered this repository-only helper.
    '${CLAUDE_PROJECT_DIR}/scripts/context_restore.sh',
  ];
  return ownedHookPaths.some((path) => command.includes(path));
}

const REPOSITORY_ONLY_CONTEXT_RESTORE_COMMAND =
  'bash ${CLAUDE_PROJECT_DIR}/scripts/context_restore.sh';

/**
 * This hook belongs to the oh-my-design repository continuity protocol. The
 * npm package does not ship scripts/context_restore.sh, so it must never be
 * copied into a consumer project from the repository's source settings.
 */
function isRepositoryOnlySourceHook(value: unknown): boolean {
  return isJsonObject(value) &&
    typeof value.command === 'string' &&
    value.command === REPOSITORY_ONLY_CONTEXT_RESTORE_COMMAND;
}

function stripHookEntries(
  groups: unknown[],
  shouldStrip: (hook: unknown) => boolean,
): unknown[] {
  const retained: unknown[] = [];
  for (const group of groups) {
    if (!isJsonObject(group) || !Array.isArray(group.hooks)) {
      retained.push(group);
      continue;
    }
    const hooks = group.hooks.filter((hook) => !shouldStrip(hook));
    if (hooks.length > 0) retained.push({ ...group, hooks });
  }
  return retained;
}

/** Remove only OmD command entries while preserving user hooks in the same group. */
function stripInstalledOmdHooks(groups: unknown[]): unknown[] {
  return stripHookEntries(groups, isOmdHook);
}

/** Remove repository-only hooks from the package settings template. */
function stripRepositoryOnlySourceHooks(source: JsonObject): JsonObject {
  if (!isJsonObject(source.hooks)) return source;
  const hooks: JsonObject = {};
  for (const [event, groups] of Object.entries(source.hooks)) {
    hooks[event] = Array.isArray(groups)
      ? stripHookEntries(groups, isRepositoryOnlySourceHook)
      : groups;
  }
  return { ...source, hooks };
}

/** Merge OmD hook groups into a user's settings without replacing other keys/hooks. */
function mergeClaudeSettings(existing: JsonObject, source: JsonObject): JsonObject {
  const installableSource = stripRepositoryOnlySourceHooks(source);
  const existingHooks = isJsonObject(existing.hooks) ? existing.hooks : {};
  const sourceHooks = isJsonObject(installableSource.hooks) ? installableSource.hooks : {};
  const mergedHooks: JsonObject = { ...existingHooks };

  for (const event of new Set([...Object.keys(existingHooks), ...Object.keys(sourceHooks)])) {
    const userGroups = Array.isArray(existingHooks[event]) ? existingHooks[event] : [];
    const omdGroups = Array.isArray(sourceHooks[event]) ? sourceHooks[event] : [];
    mergedHooks[event] = [...stripInstalledOmdHooks(userGroups), ...omdGroups];
  }

  // Existing user settings win for every non-hook key. The source supplies
  // schema/metadata only when the user did not already define them.
  return { ...installableSource, ...existing, hooks: mergedHooks };
}

/** Install .claude/settings.json via a structural, user-preserving hook merge. */
function installSettingsJson(
  packageRoot: string,
  projectRoot: string,
  force: boolean
): InstallResult {
  const target: SkillTarget = 'claude-code';
  const skillLabel = 'settings:.claude/settings.json';
  const srcPath = join(packageRoot, '.claude', 'settings.json');
  const destPath = join(projectRoot, '.claude', 'settings.json');
  if (!existsSync(srcPath)) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift' };
  }
  if (unsafeManagedPath(projectRoot, destPath)) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift', reason: 'unsafe-path' };
  }
  const src = readFileSync(srcPath, 'utf8');
  const sourceSettings = parseJsonObject(src);
  if (!sourceSettings) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift' };
  }
  const exists = existsSync(destPath);
  const existing = exists ? readFileSync(destPath, 'utf8') : '';
  const existingSettings = exists ? parseJsonObject(existing) : {};
  if (exists && !existingSettings && !force) {
    // Invalid JSON cannot be merged safely. --force remains the explicit escape hatch.
    return { target, skill: skillLabel, destPath, status: 'skipped-drift' };
  }
  const merged = existingSettings
    ? mergeClaudeSettings(existingSettings, sourceSettings)
    : stripRepositoryOnlySourceHooks(sourceSettings);
  if (exists && existingSettings && JSON.stringify(existingSettings) === JSON.stringify(merged)) {
    return { target, skill: skillLabel, destPath, status: 'unchanged' };
  }
  mkdirSync(dirname(destPath), { recursive: true });
  writeFileSync(destPath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  return { target, skill: skillLabel, destPath, status: exists ? 'updated' : 'created' };
}

/**
 * Copy a read-only data asset (reference-fingerprints.json, vocabulary.json, …)
 * from the package's `data/` into the project's `.claude/data/` or `.codex/data/`.
 * The skill reads these at runtime — they replace the deprecated `omd init recommend` CLI.
 */
function installDataFile(
  packageRoot: string,
  projectRoot: string,
  channelDir: string,
  dataFilename: string,
  _force: boolean,
  // Cursor reuses the `.claude` data dir (single catalog path) — callers pass
  // an explicit target so the results table reports the real channel.
  target: SkillTarget
): InstallResult {
  const skillLabel = `data:${dataFilename}`;

  const srcPath = join(packageRoot, 'data', dataFilename);
  const destPath = join(projectRoot, channelDir, 'data', dataFilename);

  if (!existsSync(srcPath)) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift' };
  }
  if (unsafeManagedPath(projectRoot, destPath)) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift', reason: 'unsafe-path' };
  }

  const src = readFileSync(srcPath, 'utf8');
  const exists = existsSync(destPath);
  const existing = exists ? readFileSync(destPath, 'utf8') : '';

  // Data files are pure copies — no managed header (would corrupt JSON).
  if (exists && existing === src) {
    return { target, skill: skillLabel, destPath, status: 'unchanged' };
  }
  // This directory is a package-managed read-only cache, not a customization
  // surface. Refresh stale catalog metadata on every upgrade; otherwise the
  // skill and copied reference set can silently disagree until --force is used.
  mkdirSync(dirname(destPath), { recursive: true });
  writeFileSync(destPath, src, 'utf8');
  return {
    target,
    skill: skillLabel,
    destPath,
    status: exists ? 'updated' : 'created',
  };
}

/**
 * Generate a per-channel agent file from the canonical `agents/<name>.md`.
 *
 * Channel = 'claude' → emits `.claude/agents/<name>.md` (markdown w/ frontmatter)
 * Channel = 'codex'  → emits `.codex/agents/<name>.toml` (TOML pointer)
 */
function installAgentFile(
  packageRoot: string,
  projectRoot: string,
  channel: 'claude' | 'codex' | 'opencode',
  filename: string,
  force: boolean,
  scope: 'project' | 'global',
): InstallResult {
  const target: SkillTarget = channel === 'claude'
    ? 'claude-code'
    : channel === 'codex'
      ? 'codex'
      : 'opencode';
  const skillLabel = `agent:${filename}`;

  const parsed = parseCanonicalAgent(packageRoot, filename);
  const nativeDataRoot = scope === 'global'
    ? channel === 'codex'
      ? join(projectRoot, '.codex', 'data')
      : join(projectRoot, '.config', 'opencode', 'data')
    : channel === 'codex'
      ? '.codex/data'
      : '.opencode/data';
  const rendered = channel === 'claude'
    ? renderClaudeAgent(parsed, scope)
    : channel === 'codex'
      ? renderCodexAgent(parsed, scope, nativeDataRoot)
      : renderOpenCodeAgent(parsed, scope, nativeDataRoot);

  const destFilename = channel === 'codex'
    ? filename.replace(/\.md$/, '.toml')
    : filename;
  const channelRoot = channel === 'claude'
    ? '.claude'
    : channel === 'codex'
      ? '.codex'
      : scope === 'global'
        ? join('.config', 'opencode')
        : '.opencode';
  const destPath = join(
    projectRoot,
    channelRoot,
    'agents',
    destFilename
  );

  // For Claude Code: managed marker is encoded as `omd_managed: true` INSIDE the
  // frontmatter (rendered above) — no HTML comment can precede `---` or the
  // subagent loader rejects the file.
  // For Codex: TOML allows leading comments, so `# omd:installed-agent ...` is fine.
  const managed = channel === 'claude' || channel === 'opencode'
      ? rendered
      : '# omd:installed-agent — generated from agents/' +
        filename +
        ' by `omd install-skills`. Do not edit; rerun the command to refresh.\n\n' +
        rendered;

  if (unsafeManagedPath(projectRoot, destPath)) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift', reason: 'unsafe-path' };
  }

  const exists = existsSync(destPath);
  const existing = exists ? readFileSync(destPath, 'utf8') : '';

  if (exists && existing === managed) {
    return { target, skill: skillLabel, destPath, status: 'unchanged' };
  }

  // Drift detection sentinels:
  //   Claude — look for `omd_managed: true` line inside frontmatter
  //   Codex  — look for `# omd:installed-agent` comment
  const isManaged = channel === 'claude'
    ? /\nomd_managed:\s*true\b/.test(existing)
    : channel === 'codex'
      ? existing.startsWith('# omd:installed-agent')
      : existing.includes('<!-- omd:installed-agent');

  if (exists && !isManaged && !force) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift' };
  }

  mkdirSync(dirname(destPath), { recursive: true });
  writeFileSync(destPath, managed, 'utf8');
  return {
    target,
    skill: skillLabel,
    destPath,
    status: exists ? 'updated' : 'created',
  };
}

/**
 * Copy the reference catalog (`web/references/<id>/DESIGN.md`) into the project's
 * `.claude/data/references/<id>/DESIGN.md` so it's reachable on clean npx installs
 * — where there is no `node_modules` and no dev `web/references` (issue #16).
 *
 * Only DESIGN.md per id is copied (not _promo.json/_research.md/screenshots) to
 * keep the install lean. Idempotent: skips ids whose DESIGN.md already matches.
 * Returns the number of catalog entries available at the destination after
 * the sync (including already-current files), so an idempotent upgrade never
 * reports the misleading "0 catalog refs installed".
 */
function installReferenceCatalog(
  packageRoot: string,
  installRoot: string,
  channelDir: string,
  force: boolean
): number {
  const srcRoot = join(packageRoot, 'web', 'references');
  if (!existsSync(srcRoot)) return 0;
  const destRoot = join(installRoot, channelDir, 'data', 'references');
  if (unsafeManagedPath(installRoot, destRoot)) return 0;
  const manifestPath = join(destRoot, '.omd-managed.json');

  let previouslyManaged = new Set<string>();
  let previousHashes = new Map<string, string>();
  if (existsSync(manifestPath)) {
    try {
      const parsed: unknown = JSON.parse(readFileSync(manifestPath, 'utf8'));
      if (
        isJsonObject(parsed) &&
        Array.isArray(parsed.managedIds) &&
        parsed.managedIds.every((id) => typeof id === 'string')
      ) {
        previouslyManaged = new Set(parsed.managedIds as string[]);
        if (isJsonObject(parsed.managedDesignHashes)) {
          previousHashes = new Map(
            Object.entries(parsed.managedDesignHashes)
              .filter((entry): entry is [string, string] => typeof entry[1] === 'string'),
          );
        }
      }
    } catch {
      // A corrupt/missing manifest must fail safe: refresh known canonical IDs,
      // but never infer ownership of unknown destination directories.
    }
  }

  let available = 0;
  const sourceIds = new Set<string>();
  const managedDesignHashes: Record<string, string> = {};
  for (const id of readdirSync(srcRoot)) {
    const srcDesign = join(srcRoot, id, 'DESIGN.md');
    if (!existsSync(srcDesign)) continue;
    sourceIds.add(id);
    available++;
    const destDesign = join(destRoot, id, 'DESIGN.md');
    const src = readFileSync(srcDesign, 'utf8');
    const srcHash = createHash('sha256').update(src).digest('hex');
    if (existsSync(destDesign)) {
      const existing = readFileSync(destDesign, 'utf8');
      if (existing === src) {
        managedDesignHashes[id] = srcHash;
        continue;
      }
      const previousHash = previousHashes.get(id);
      const unchangedSinceLastInstall = previousHash !== undefined &&
        createHash('sha256').update(existing).digest('hex') === previousHash;
      if (!force && !unchangedSinceLastInstall) {
        // Same-id files can be user-curated references. Without a matching
        // installer hash, preserve them and stop claiming ownership.
        continue;
      }
    }
    mkdirSync(dirname(destDesign), { recursive: true });
    writeFileSync(destDesign, src, 'utf8');
    managedDesignHashes[id] = srcHash;
  }
  // Prune only IDs that a prior OmD manifest explicitly claimed. Unknown IDs
  // can be local/private references and must survive an installer upgrade.
  if (existsSync(destRoot)) {
    for (const id of readdirSync(destRoot)) {
      if (previouslyManaged.has(id) && !sourceIds.has(id)) {
        const retiredRoot = join(destRoot, id);
        const retiredDesign = join(retiredRoot, 'DESIGN.md');
        const previousHash = previousHashes.get(id);
        const safeToRemove = existsSync(retiredDesign) && (
          force || (
            previousHash !== undefined &&
            createHash('sha256').update(readFileSync(retiredDesign, 'utf8')).digest('hex') === previousHash
          )
        );
        if (safeToRemove) rmSync(retiredDesign, { force: true });
        if (existsSync(retiredRoot) && readdirSync(retiredRoot).length === 0) {
          rmdirSync(retiredRoot);
        }
      }
    }
  }
  mkdirSync(destRoot, { recursive: true });
  writeFileSync(
    manifestPath,
    JSON.stringify({
      schemaVersion: 2,
      managedIds: Object.keys(managedDesignHashes).sort(),
      managedDesignHashes,
    }, null, 2) + '\n',
    'utf8',
  );
  return available;
}

/**
 * Cursor Agent Skills need only a small always-on bootstrap. The procedural
 * workflow lives under `.cursor/skills`; this rule establishes DESIGN.md
 * precedence and the fail-closed unknown boundary before dynamic discovery.
 */
const CURSOR_SKILL_BOOTSTRAP_BODY = [
  '<!-- omd:cursor-channel=skills -->',
  'Read the standalone design contract at `@DESIGN.md` before generating/modifying UI. With an exact valid adopted `profile: portable-core` manifest, its hash-bound System Graph is machine authority and DESIGN.md is the projection. A migration candidate is non-authoritative.',
  '',
  'Pending preference corrections: `@.omd/preferences.md`.',
  '',
  'Precedence: pending explicit preference corrections > adopted Bound System graph/standalone DESIGN.md > framework defaults. Fold pending corrections into the graph and regenerate DESIGN.md before clearing them.',
  '',
  'OmD Agent Skills live under `.cursor/skills/`. Use the smallest relevant `omd-*` skill automatically, or invoke it from Cursor with `/omd-<name>`.',
  '',
  'Unknown fields stay absent. Never substitute a system font, generic component, guessed token, or adjacent surface as a product fact.',
].join('\n');

/**
 * Explicit compatibility mode for Cursor clients that cannot load Agent
 * Skills. Applying an existing DESIGN.md remains supported, but authoring is
 * fail-closed because this channel has no Core v2 workflow or adoption gate.
 */
const CURSOR_RULE_ONLY_BODY = [
  '<!-- omd:cursor-channel=rule-only -->',
  'The standalone portable design contract lives at `@DESIGN.md` (repo root). Open and read it before generating/modifying UI; without an adopted Bound System package it is also the project design source of truth.',
  '',
  'Pending preference corrections: `@.omd/preferences.md`.',
  '',
  'Precedence: pending explicit preference corrections > adopted Bound System graph/standalone DESIGN.md > framework defaults. Fold pending corrections into the graph and regenerate DESIGN.md before clearing them.',
  '',
  'If DESIGN.md is missing, fail closed: rule-only mode MUST NOT create it by copying, paraphrasing, or adapting `.claude/data/references/<id>/DESIGN.md`. The installed catalog is read-only import context, not a project writer.',
  'Obtain a standalone DESIGN.md Core v2 from the Builder download, or use a skill-enabled channel to complete the staged `design-md migrate` review and explicit portable-core adoption workflow.',
  'Before accepting a newly supplied root file, run the bundled provider-free validator: `node .claude/data/scripts/migrate-design-md-core.cjs --input ./DESIGN.md --check --require-source-valid --require-portable-core`. It must start with `# <Product or project name> Design System`, never YAML frontmatter, and contain these exact anchors in order:',
  '`<!-- design-md:section experience -->`, `<!-- design-md:section foundations -->`, `<!-- design-md:section typography-assets -->`, `<!-- design-md:section components-states -->`, `<!-- design-md:section layout-platforms -->`, `<!-- design-md:section content-locales -->`, `<!-- design-md:section governance -->`.',
  'The standalone file must establish product scope and a primary task, actionable foundations or constraints, and Governance rules for authority, conflict priority, unknown absence, and changes without requiring OmD or sidecars.',
  'Unknown fields stay absent; never substitute a system font, generic component, guessed token, or adjacent surface as a product fact.',
  'A `migration-candidate` is non-authoritative and keeps the source DESIGN.md canonical. Only an explicitly adopted, valid manifest with `profile: portable-core` makes its hash-bound System Graph the machine authority; DESIGN.md remains the standalone portable contract.',
  '',
  'When applying DESIGN.md, preserve existing behavior and user copy unless asked, then verify the actual product route and accessibility before reporting completion.',
  'Compatibility mode provides the rule, read-only catalog, and validation helpers only; OmD named skills and sub-agents are not installed.',
].join('\n');

function renderCursorRule(ruleOnly: boolean): string {
  const body = ruleOnly ? CURSOR_RULE_ONLY_BODY : CURSOR_SKILL_BOOTSTRAP_BODY;
  const hash = createHash('sha256').update(body).digest('hex').slice(0, 12);
  return [
    '---',
    'description: Authoritative brand & UI design system. Read DESIGN.md before UI work.',
    'globs:',
    '  - "**/*.tsx"',
    '  - "**/*.jsx"',
    '  - "**/*.vue"',
    '  - "**/*.svelte"',
    '  - "**/*.css"',
    '  - "**/*.scss"',
    '  - "**/tailwind.config.*"',
    '  - "**/components/**"',
    '  - "**/app/**/page.*"',
    `alwaysApply: ${ruleOnly ? 'false' : 'true'}`,
    '---',
    '',
    `<!-- omd:start v=1 hash=${hash} -->`,
    body,
    '<!-- omd:end -->',
    '',
  ].join('\n');
}

function installCursorRule(
  installRoot: string,
  force: boolean,
  ruleOnly: boolean,
): InstallResult {
  const target: SkillTarget = 'cursor';
  const skillLabel = 'rule:omd-design.mdc';
  const destPath = join(installRoot, '.cursor', 'rules', 'omd-design.mdc');
  const rendered = renderCursorRule(ruleOnly);

  if (unsafeManagedPath(installRoot, destPath)) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift', reason: 'unsafe-path' };
  }

  const exists = existsSync(destPath);
  const existing = exists ? readFileSync(destPath, 'utf8') : '';
  if (exists && existing === rendered) {
    return { target, skill: skillLabel, destPath, status: 'unchanged' };
  }
  // The omd marker block doubles as the managed sentinel. A file without it is
  // user content → drift unless --force.
  if (exists && !existing.includes('<!-- omd:start') && !force) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift' };
  }
  mkdirSync(dirname(destPath), { recursive: true });
  writeFileSync(destPath, rendered, 'utf8');
  return { target, skill: skillLabel, destPath, status: exists ? 'updated' : 'created' };
}

const STATUS_LABEL: Record<InstallResult['status'], string> = {
  created: pc.green('created'),
  updated: pc.cyan('updated'),
  removed: pc.magenta('removed'),
  unchanged: pc.dim('unchanged'),
  'skipped-drift': pc.yellow('skipped'),
  'skipped-incompat': pc.yellow('skipped (claude-code only)'),
};

function autoDetectTargets(projectRoot: string): SkillTarget[] {
  const presence = detectInstalledAgents(projectRoot);
  const targets: SkillTarget[] = [];
  if (presence.claudeCode) targets.push('claude-code');
  if (presence.codex) targets.push('codex');
  if (presence.opencode) targets.push('opencode');
  // Cursor gets native project Agent Skills plus the small DESIGN.md bootstrap
  // rule. Only select it when .cursor is detected; the no-signal fallback below
  // must not introduce Cursor configuration into unrelated projects.
  if (presence.cursor) targets.push('cursor');
  if (targets.length === 0) {
    // Fallback: install for all three skill channels so user gets coverage
    // even without explicit signal. Idempotent so cost is low.
    return ['claude-code', 'codex', 'opencode'];
  }

  return targets;
}

export async function runInstallSkills(
  opts: InstallSkillsOptions = {}
): Promise<number> {
  const projectRoot = opts.dir ?? process.cwd();
  const packageRoot = findPackageRoot();
  if (!packageRoot) {
    console.error(pc.red('omd install-skills: package data not found'));
    return 1;
  }

  const allSkills = listShippedSkills(packageRoot);
  if (allSkills.length === 0) {
    console.error(pc.red('omd install-skills: no skills found in package'));
    return 1;
  }
  const allAgents = listCanonicalAgents(packageRoot);

  if (opts.agents) {
    const invalidTargets = (opts.agents as string[]).filter(
      (target) => !(VALID_SKILL_TARGETS as readonly string[]).includes(target),
    );
    if (invalidTargets.length > 0) {
      console.error(
        pc.red(
          `omd install-skills: invalid agent channel(s): ${invalidTargets.join(', ')}. ` +
          `Choose from ${VALID_SKILL_TARGETS.join(', ')}.`,
        ),
      );
      return 1;
    }
    if (opts.agents.length === 0) {
      console.error(pc.red('omd install-skills: no agent channel selected'));
      return 1;
    }
  }

  if (opts.skillsFilter) {
    const unknownSkills = opts.skillsFilter.filter((skill) => !allSkills.includes(skill));
    if (unknownSkills.length > 0) {
      console.error(
        pc.red(`omd install-skills: unknown skill(s): ${unknownSkills.join(', ')}`),
      );
      return 1;
    }
    if (opts.skillsFilter.length === 0) {
      console.error(pc.red('omd install-skills: no skill selected'));
      return 1;
    }
  }

  if (opts.agentsFilter) {
    const availableAgentIds = new Set(allAgents.map((name) => name.replace(/\.md$/, '')));
    const unknownAgents = opts.agentsFilter.filter((agent) => !availableAgentIds.has(agent));
    if (unknownAgents.length > 0) {
      console.error(
        pc.red(`omd install-skills: unknown sub-agent(s): ${unknownAgents.join(', ')}`),
      );
      return 1;
    }
  }

  const force = opts.force ?? false;
  const minimal = opts.skillsOnly === true;
  // Install scope: 'project' (channel-local dirs under cwd) or 'global'
  // (channel-specific user dirs). --global forces it; otherwise the interactive
  // TUI asks. Global writes skills + sub-agents
  // (+ data) to the user-level dir but never touches global hooks/settings.json.
  let scope: 'project' | 'global' = opts.global ? 'global' : 'project';

  p.intro(
    pc.bold('omd install-skills') +
      pc.dim(`  (${relative(process.cwd(), projectRoot) || '.'})`)
  );

  // Each dimension (scope / skills / sub-agents / channels) is resolved
  // independently: a CLI flag pins it; otherwise we prompt — but only when stdin
  // is a TTY and --all wasn't passed. This is the key fix: `--skills X` or
  // `--skills-only` no longer suppress the *channel* (where to install) prompt —
  // they only pin the dimension they name.
  const isTTY = Boolean(process.stdin.isTTY && process.stdout.isTTY);
  const interactive = isTTY && !opts.all;

  const detected = autoDetectTargets(projectRoot);
  // Real presence (not the all-3 fallback) — used for hint labels + prompt defaults.
  const presence = detectInstalledAgents(projectRoot);
  const actuallyDetected: SkillTarget[] = [
    presence.claudeCode ? 'claude-code' : null,
    presence.codex ? 'codex' : null,
    presence.opencode ? 'opencode' : null,
    presence.cursor ? 'cursor' : null,
  ].filter((x): x is SkillTarget => x !== null);

  // --- Scope (project vs global) — --global pins it, else ask / default project.
  if (!opts.global && interactive) {
    const scopeResult = await p.select({
      message: 'Install scope · 어디에 설치할까요?',
      options: [
        { value: 'project', label: 'Project', hint: `${relative(process.cwd(), projectRoot) || '.'} · 이 프로젝트만` },
        { value: 'global', label: 'Global', hint: '~/.claude · ~/.agents · ~/.config/opencode (hooks/settings 제외)' },
      ],
      initialValue: 'project',
    });
    if (p.isCancel(scopeResult)) { p.cancel('Install cancelled.'); return 130; }
    scope = scopeResult as 'project' | 'global';
  }

  // --- Skills — --skills pins it, else ask / default ALL.
  let skills: string[];
  if (opts.skillsFilter) {
    skills = allSkills.filter((s) => opts.skillsFilter!.includes(s));
  } else if (interactive) {
    const skillResult = await p.multiselect({
      message: 'Skills · space = 토글 · a = 전체 · enter = 확인 (default ALL)',
      options: allSkills.map((s) => ({ value: s, label: s, hint: 'omd skill' })),
      initialValues: allSkills,
      required: true,
    });
    if (p.isCancel(skillResult)) { p.cancel('Install cancelled.'); return 130; }
    skills = skillResult as string[];
  } else {
    skills = allSkills;
  }

  // --- Sub-agents — dropped by --skills-only, else --agents pins, else ask / ALL.
  let canonicalAgents: string[];
  if (minimal) {
    canonicalAgents = [];
  } else if (opts.agentsFilter) {
    canonicalAgents = allAgents.filter((a) => opts.agentsFilter!.includes(a.replace(/\.md$/, '')));
  } else if (interactive && allAgents.length > 0) {
    const agentResult = await p.multiselect({
      message: 'Sub-agents · space = 토글 · a = 전체 · enter = 확인 (default ALL)',
      options: allAgents.map((a) => ({ value: a, label: a.replace(/\.md$/, ''), hint: 'subagent' })),
      initialValues: allAgents,
      required: false,
    });
    if (p.isCancel(agentResult)) { p.cancel('Install cancelled.'); return 130; }
    canonicalAgents = agentResult as string[];
  } else {
    canonicalAgents = allAgents;
  }

  // --- Channels / targets — the "where do I install" choice.
  // --agent pins it. Otherwise, in a TTY we ASK — limited to the channels the
  // selected skills actually support (claude-design is claude-code only, so its
  // picker shows just Claude Code). Non-TTY / --all falls back to auto-resolution.
  const supportedTargets = ((): SkillTarget[] => {
    const set = new Set<SkillTarget>(skills.flatMap((s) => skillSupportedChannels(packageRoot, s)));
    // Cursor supports native Agent Skills, and explicit rule-only compatibility
    // mode still needs to remain selectable even for a filtered skill set.
    set.add('cursor');
    return targetsAvailableForScope(
      (['claude-code', 'codex', 'opencode', 'cursor'] as SkillTarget[]).filter((t) => set.has(t)),
      scope,
    );
  })();
  const channelLabel: Record<SkillTarget, string> = {
    'claude-code': 'Claude Code',
    codex: 'Codex',
    opencode: 'OpenCode',
    cursor: 'Cursor',
  };
  const channelDir: Record<SkillTarget, string> = {
    'claude-code': '.claude',
    codex: '.codex',
    opencode: '.opencode',
    cursor: '.cursor',
  };
  let targets: SkillTarget[];
  if (opts.agents) {
    targets = opts.agents;
  } else if (interactive) {
    const defaults = actuallyDetected.filter((t) => supportedTargets.includes(t));
    const targetResult = await p.multiselect({
      message: 'Agent channels · 어디에 설치할까요? · space = 토글 · enter = 확인',
      options: supportedTargets.map((t) => ({
        value: t,
        label: channelLabel[t],
        hint: actuallyDetected.includes(t) ? `${channelDir[t]}/ detected` : '',
      })) as { value: SkillTarget; label: string; hint?: string }[],
      initialValues: defaults.length > 0 ? defaults : supportedTargets,
      required: true,
    });
    if (p.isCancel(targetResult)) { p.cancel('Install cancelled.'); return 130; }
    targets = targetResult as SkillTarget[];
  } else {
    // Non-interactive (CI / piped / --all): resolve from flags + detection,
    // narrowed to channels the selected skills support.
    targets = opts.all
      ? (['claude-code', 'codex', 'opencode'] as SkillTarget[])
      : minimal
        ? (actuallyDetected.length > 0 ? actuallyDetected : (['claude-code'] as SkillTarget[]))
        : detected;
    const narrowed = targets.filter((t) => supportedTargets.includes(t));
    if (narrowed.length > 0) targets = narrowed;
  }

  if (targets.length === 0) {
    console.error(pc.red('omd install-skills: no compatible agent channel selected'));
    return 1;
  }

  if (scope === 'global' && targets.includes('cursor')) {
    console.error(
      pc.red('omd install-skills: Cursor rules are project-scoped. Run the Cursor install from the project root without --global.'),
    );
    return 1;
  }
  if (
    opts.repairHooks &&
    (scope !== 'project' || minimal || !targets.includes('claude-code'))
  ) {
    console.error(
      pc.red('omd install-skills: --repair-hooks requires a project-scoped Claude Code target and cannot be combined with --skills-only.'),
    );
    return 1;
  }
  if (opts.cursorRuleOnly && !targets.includes('cursor')) {
    console.error(
      pc.red('omd install-skills: --cursor-rule-only requires the cursor target.'),
    );
    return 1;
  }
  if (opts.cursorRuleOnly && minimal) {
    console.error(
      pc.red('omd install-skills: --cursor-rule-only cannot be combined with --skills-only.'),
    );
    return 1;
  }
  if (opts.proofPolicy && opts.removeProofPolicy) {
    console.error(pc.red('omd install-skills: --proof-policy and --remove-proof-policy are mutually exclusive.'));
    return 1;
  }
  const proofPolicyTargets = targets.filter(
    (target): target is ProofPolicyTarget => target === 'claude-code' || target === 'codex',
  );
  if ((opts.proofPolicy || opts.removeProofPolicy) && (
    scope !== 'project' || minimal || proofPolicyTargets.length === 0
  )) {
    console.error(pc.red(
      'omd install-skills: proof policy requires a project-scoped Claude Code or Codex target and cannot be combined with --skills-only.',
    ));
    return 1;
  }
  if (opts.proofPolicy && proofPolicyTargets.includes('codex') && !existsSync(join(projectRoot, '.git'))) {
    console.error(pc.red('omd install-skills: Codex proof policy requires a Git project root so its trusted hook can resolve the repository safely.'));
    return 1;
  }

  // Global scope roots everything at the home dir, so channel plans resolve to
  // ~/.claude, ~/.agents + ~/.codex, or ~/.config/opencode. Project scope uses
  // cwd (or --dir).
  const installRoot = scope === 'global' ? homedir() : projectRoot;
  if (opts.removeProofPolicy) {
    const removed = proofPolicyTargets.flatMap((target) => removeProofPolicy(installRoot, target));
    for (const result of removed) {
      p.log.message(
        `  ${STATUS_LABEL[result.status]}  ${pc.dim(result.target.padEnd(12))} ${relative(installRoot, result.destPath)}`,
      );
    }
    const drift = removed.filter((result) => result.status === 'skipped-drift').length;
    p.outro(drift > 0
      ? pc.yellow(`Proof policy removal stopped at ${drift} modified or unsafe managed file(s).`)
      : pc.green('Proof policy removed. Existing user hooks were preserved.'));
    return drift > 0 ? 2 : 0;
  }
  // Modern Cursor installs native Agent Skills. The explicit compatibility
  // flag is the only path that suppresses the Cursor skill tree.
  const skillChannelTargets = targets.filter(
    (target): target is SkillChannel => !(target === 'cursor' && opts.cursorRuleOnly),
  );
  const plans = skillChannelTargets.map((t) => planForTarget(installRoot, t, scope));
  const compatibleSkills = skills.filter((skill) =>
    skillChannelTargets.some((target) =>
      skillSupportedChannels(packageRoot, skill).includes(target),
    ),
  );
  // Cursor currently consumes project Agent Skills, not OmD's separately
  // generated sub-agent definitions. Do not claim those roles were installed.
  if (targets.every((target) => target === 'cursor')) {
    canonicalAgents = [];
  }

  p.log.message(
    pc.bold('Scope: ') +
      pc.cyan(scope) +
      pc.dim(scope === 'global' ? '  (channel user directories)' : `  (${relative(process.cwd(), projectRoot) || '.'})`)
  );
  p.log.message(
    pc.bold(`Skills (${compatibleSkills.length}): `) +
      compatibleSkills.map((s) => pc.cyan(s)).join(', ')
  );
  if (minimal) {
    // --skills-only: sub-agents are intentionally skipped (minimal single-skill
    // install). Clear BEFORE the summary so we never print agents we won't write.
    canonicalAgents = [];
    p.log.message(pc.bold('Agents: ') + pc.dim('skipped (--skills-only)'));
  } else if (canonicalAgents.length > 0) {
    p.log.message(
      pc.bold(`Agents (${canonicalAgents.length}): `) +
        canonicalAgents.map((a) => pc.cyan(a.replace(/\.md$/, ''))).join(', ')
    );
  }
  p.log.message(
    pc.bold('Targets: ') + targets.map((t) => pc.cyan(t)).join(', ')
  );

  const results: InstallResult[] = [];
  // Count of reference-catalog DESIGN.md files copied (issue #16) — surfaced in
  // the install summary. Declared here so the outro (outside `if (!minimal)`) sees it.
  let catalogCount = 0;
  const catalogDestinations = new Set<string>();
  for (const plan of plans) {
    const dataDir = dataDirForScope(plan.target, targets, scope);
    const globalDataRoot = scope === 'global' && dataDir
      ? join(installRoot, dataDir, 'data')
      : null;
    for (const skill of skills) {
      results.push(installOne(packageRoot, installRoot, plan, skill, force, globalDataRoot));
    }
  }

  if (targets.includes('codex')) {
    results.push(...removeManagedLegacyCodexSkills(installRoot));
  }

  // Generate per-channel sub-agent definitions from the canonical `agents/`.
  // This is the v2 portable source-of-truth pattern (oh-my-agent style).
  // `canonicalAgents` is already resolved above by the TUI / --agents filter.
  for (const target of targets) {
    if (target === 'claude-code') {
      for (const filename of canonicalAgents) {
        results.push(installAgentFile(packageRoot, installRoot, 'claude', filename, force, scope));
      }
    } else if (target === 'codex') {
      for (const filename of canonicalAgents) {
        results.push(installAgentFile(packageRoot, installRoot, 'codex', filename, force, scope));
      }
    } else if (target === 'opencode') {
      for (const filename of canonicalAgents) {
        results.push(installAgentFile(packageRoot, installRoot, 'opencode', filename, force, scope));
      }
    }
  }

  if (!minimal) {
  // Cursor channel: keep a small always-on DESIGN.md bootstrap beside native
  // Agent Skills. `--cursor-rule-only` deliberately installs the fuller legacy
  // rule for older Cursor clients.
  if (targets.includes('cursor')) {
    results.push(installCursorRule(installRoot, force, opts.cursorRuleOnly === true));
  }

  // Ship the read-only data assets (reference fingerprints, controlled vocab,
  // human-readable tag matrix, opt-out corpus) so skills + hooks can run entirely
  // on the host CLI's own model — no external API keys.
  const dataFiles = [
    'reference-fingerprints.json',
    'reference-quality.json',
    'reference-tags.md',
    'vocabulary.json',
    'synonyms.json',
    'opt-out-corpus.json',
    'workflow-capabilities.json',
  ];
  // Channel→dir resolution (incl. the cursor shared-`.claude/data` dedup guard,
  // issue #20) lives in dataDirFor — single source for all three copy loops.
  for (const target of targets) {
    const dataDir = dataDirForScope(target, targets, scope);
    if (!dataDir) continue;
    for (const dataFile of dataFiles) {
      results.push(installDataFile(packageRoot, installRoot, dataDir, dataFile, force, target));
    }
  }

  // Ship the reference catalog (DESIGN.md per id) into .claude/data/references
  // so omd:init can resolve a reference on clean npx installs — no node_modules,
  // no dev web/references (issue #16). Skipped under --skills-only (handled by the
  // enclosing `if (!minimal)`). Codex gets the same copy under .codex/data.
  // Same dataDirFor single-path rule as the data JSONs above — Cursor reads
  // .claude/data/references, never a second catalog location.
  for (const target of targets) {
    const dataDir = dataDirForScope(target, targets, scope);
    if (dataDir) {
      const catalogRoot = join(installRoot, dataDir, 'data', 'references');
      if (unsafeManagedPath(installRoot, catalogRoot)) {
        results.push({
          target,
          skill: 'data:references',
          destPath: catalogRoot,
          status: 'skipped-drift',
          reason: 'unsafe-path',
        });
        continue;
      }
      const count = installReferenceCatalog(packageRoot, installRoot, dataDir, force);
      catalogCount = Math.max(catalogCount, count);
      if (count > 0) {
        catalogDestinations.add(`${dataDir}/data/references/<id>/DESIGN.md`);
      }
    }
  }

  // Copy deterministic harness helpers into each selected skill
  // channel's scoped data tree so /omd-harness works after either a project or
  // global install. Cursor shares `.claude/data`, including these helpers.
  for (const target of targets) {
    const cd = dataDirForScope(target, targets, scope);
    if (!cd) continue;
    for (const helper of ['ctx-prime.cjs', 'context.cjs', 'design-council-prime.cjs', 'design-council-reconcile.cjs', 'design-council-handoff.cjs', 'design-system-plan.cjs', 'design-md-core-schema.cjs', 'design-md-core-conformance.cjs', 'design-md-core.cjs', 'prepare-design-md-core-review.cjs', 'compile-design-md-core.cjs', 'adopt-design-md-core.cjs', 'migrate-design-md-core.cjs', 'validate-project-design-system.cjs', 'autopilot-mission.cjs', 'autopilot-council-plan.cjs', 'autopilot-council-reconcile.cjs', 'design-harness-context-plan.cjs']) {
      const srcHelper = join(packageRoot, 'scripts', helper);
      if (!existsSync(srcHelper)) continue;
      const destHelper = join(installRoot, cd, 'data', 'scripts', helper);
      if (unsafeManagedPath(installRoot, destHelper)) {
        results.push({
          target,
          skill: `data-script:${helper}`,
          destPath: destHelper,
          status: 'skipped-drift',
          reason: 'unsafe-path',
        });
        continue;
      }
      const srcTxt = readFileSync(srcHelper, 'utf8');
      if (existsSync(destHelper) && readFileSync(destHelper, 'utf8') === srcTxt) continue;
      mkdirSync(dirname(destHelper), { recursive: true });
      writeFileSync(destHelper, srcTxt, 'utf8');
    }
    for (const schema of [
      'design-md-core-manifest-v2.schema.json',
      'design-system-graph-v2.schema.json',
      'design-system-provenance-v2.schema.json',
      'design-system-coverage-v2.schema.json',
      'design-md-core-adoption-review-v2.schema.json',
      'design-md-core-adoption-receipt-v2.schema.json',
      'design-md-core-project-checkpoint-v2.schema.json',
    ]) {
      const srcSchema = join(packageRoot, 'spec', 'schema', schema);
      if (!existsSync(srcSchema)) continue;
      const destSchema = join(installRoot, cd, 'data', 'scripts', 'schema', schema);
      if (unsafeManagedPath(installRoot, destSchema)) {
        results.push({
          target,
          skill: `data-script-schema:${schema}`,
          destPath: destSchema,
          status: 'skipped-drift',
          reason: 'unsafe-path',
        });
        continue;
      }
      const srcTxt = readFileSync(srcSchema, 'utf8');
      if (existsSync(destSchema) && readFileSync(destSchema, 'utf8') === srcTxt) continue;
      mkdirSync(dirname(destSchema), { recursive: true });
      writeFileSync(destSchema, srcTxt, 'utf8');
    }
  }

  // Hooks + settings.json are PROJECT-SCOPED only — a global install must not
  // mutate the user's global Claude config / make hooks fire in every project.
  if (scope === 'project' && targets.includes('claude-code')) {
    for (const hookFile of CLAUDE_HOOK_PATHS) {
      results.push(
        installHookFile(
          packageRoot,
          installRoot,
          hookFile,
          force || opts.repairHooks === true,
        ),
      );
    }
    // settings.json (with merge, never clobber user)
    results.push(installSettingsJson(packageRoot, installRoot, force));
  }
  if (scope === 'project' && opts.proofPolicy) {
    for (const target of proofPolicyTargets) {
      results.push(...installProofPolicy(packageRoot, installRoot, target, force));
    }
  }
  } // !minimal — skills-only skips data files, hooks, and settings.json

  p.log.message(pc.bold('\nResults:'));
  for (const r of results) {
    const rel = relative(installRoot, r.destPath);
    p.log.message(
      `  ${STATUS_LABEL[r.status]}  ${pc.dim(r.target.padEnd(12))} ${rel}`
    );
  }

  const driftCount = results.filter((r) => r.status === 'skipped-drift').length;
  const changedCount = results.filter(
    (r) => r.status === 'created' || r.status === 'updated' || r.status === 'removed'
  ).length;
  const currentCount = results.filter((r) => r.status === 'unchanged').length;

  if (driftCount > 0) {
    const unsafeCount = results.filter(
      (result) => result.status === 'skipped-drift' && result.reason === 'unsafe-path',
    ).length;
    const hookDrift = results.some(
      (result) =>
        result.status === 'skipped-drift' && result.skill.startsWith('hook:'),
    );
    const repairHint = unsafeCount > 0
      ? ` ${unsafeCount} unsafe symlinked managed path(s) were refused; replace them with project-local files and run doctor. --force will not bypass this safety check.`
      : hookDrift
        ? ' Use --repair-hooks for Claude hooks only, or --force to overwrite all unmarked files.'
        : ' Rerun with --force to overwrite.';
    p.outro(
      pc.yellow(
        `${changedCount} changed, ${currentCount} already current, ${driftCount} skipped (existing files lack a valid omd ownership marker).${repairHint}`
      )
    );
    return 2;
  }

  // Minimal single-skill install (--skills-only): no omd onboarding, no agents/hooks.
  // Ideal for shipping a standalone skill (e.g. claude-design) to people who don't
  // want the rest of the omd toolchain.
  if (minimal) {
    for (const r of results.filter((x) => x.status === 'skipped-incompat')) {
      p.log.warn(
        `${pc.bold(r.skill)} ${pc.dim('skipped for ')}${pc.cyan(r.target)}${pc.dim(' — declares x-omd-channels (channel not supported).')}`
      );
    }
    const installed = results.filter(
      (r) => r.status === 'created' || r.status === 'updated' || r.status === 'unchanged'
    );
    if (installed.length === 0) {
      p.outro(pc.yellow('Nothing installed — no compatible skill/channel match.'));
      return 0;
    }
    p.outro(
      pc.green(
        `Done. Installed ${skills.map((s) => pc.bold(s)).join(', ')} ${scope === 'global' ? `globally for ${targets.join(', ')}` : `for ${targets.join(', ')}`}.`
      ) +
        pc.dim('  →  restart your agent, then use the skill (e.g. ') +
        pc.cyan(`/${skillInvocationName(compatibleSkills[0] ?? skills[0], targets[0])}`) +
        pc.dim(').')
    );
    return 0;
  }

  // Friendly next-step nudge after successful install. Keep this in the
  // operator-selected locale so the first activation moment does not fall back
  // to an EN/KR-only block after a five-locale install.
  const cursorOnly = targets.length === 1 && targets[0] === 'cursor';
  const nextSteps = postInstallGuidance(opts.lang ?? 'en', {
    cursorOnly,
    cursorRuleOnly: opts.cursorRuleOnly,
  });
  if (opts.proofPolicy) {
    p.note(
      [
        `${pc.bold('Proof policy is enabled for:')} ${proofPolicyTargets.join(', ')}`,
        pc.dim('Restart the selected agent. Review/trust the project hook in the host before relying on it.'),
        pc.dim('Check with `omd doctor`; remove with the same targets plus `--remove-proof-policy`.'),
      ].join('\n'),
      'Execution guard',
    );
  }
  p.note(nextSteps.body, nextSteps.title);

  // Counts derived from what was actually resolved/installed — never hardcoded,
  // so the outro can't drift from the real skill/agent/hook set (or the README).
  const hookCount = (scope === 'project' && targets.includes('claude-code') ? 4 : 0) +
    (opts.proofPolicy ? proofPolicyTargets.length : 0);
  if (catalogCount > 0) {
    p.log.message(
      pc.bold('Reference catalog: ') +
        pc.cyan(`${catalogCount}`) +
        pc.dim(` DESIGN.md synced → ${[...catalogDestinations].join(' + ')}`),
    );
  }
  const reportedSkillCount = compatibleSkills.length;
  const reportedAgentCount = skillChannelTargets.length > 0 ? canonicalAgents.length : 0;
  p.outro(
    pc.green(
      `Done. ${reportedSkillCount} skills · ${reportedAgentCount} sub-agents · ${hookCount} hooks · ${catalogCount} catalog refs ready (${changedCount} changed · ${currentCount} already current)${scope === 'global' ? ' globally (channel user directories)' : ''}.`,
    ),
  );
  return 0;
}
