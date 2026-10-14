import type { DocsLocale } from "@/lib/docs/locales";

/**
 * /docs/<locale>/shadcn — "where do I get a real DESIGN.md for shadcn's skill?"
 *
 * Every number on this page is a measurement, with its source:
 * - shadcn skill facts: shadcn-ui/ui `skills/shadcn/SKILL.md` and
 *   `apps/v4/content/docs/(root)/skills.mdx` at 2d3f1cd436 (PR #12252,
 *   merged 2026-10-09). `npx skills add shadcn/ui` installs it; its frontmatter
 *   is `name: shadcn`, `user-invocable: false` (no slash command).
 * - Carry-over: one end-to-end run on 2026-10-14 against the released
 *   file, downloaded unchanged from https://oh-my-design.kr/toss/design.md
 *   (sha256 2856700e…). Files: docs/research/2026-10-14-referral/shadcn-run/.
 *   Earlier: four runs on a smaller v3 draft (PHASE1.md §2.3, bd-test/).
 * - Lint: `npx @google/design.md@0.4.0 lint web/references/toss/DESIGN.md`,
 *   run 2026-10-14 on the released file.
 * The excerpt is quoted from shadcn-run/REPORT.md without edits, so it stays
 * in English in every locale.
 */

export type RecipeStep = { title: string; body: string; command?: string };
export type RecipeFact = { label: string; value: string };

export interface ShadcnRecipeCopy {
  navLabel: string;
  eyebrow: string;
  title: string;
  lead: string;
  answerTitle: string;
  answerBody: string;
  stepsTitle: string;
  steps: RecipeStep[];
  promptTitle: string;
  prompt: string;
  carryTitle: string;
  carryLead: string;
  carries: RecipeFact[];
  limitsTitle: string;
  limits: string[];
  evidenceTitle: string;
  evidenceBody: string;
  evidenceLink: string;
  evidenceLinkEarlier: string;
}

export const SHADCN_SKILL_INSTALL = "npx skills add shadcn/ui";
export const OMD_RAW_DESIGN_MD = "curl -o DESIGN.md https://oh-my-design.kr/toss/design.md";
export const SHADCN_SKILL_SOURCE = "https://github.com/shadcn-ui/ui/pull/12252";
export const SHADCN_RUN_EVIDENCE =
  "https://github.com/kwakseongjae/oh-my-design/tree/main/docs/research/2026-10-14-referral/shadcn-run";
export const SHADCN_EARLIER_RUNS =
  "https://github.com/kwakseongjae/oh-my-design/tree/main/docs/research/2026-10-13-format/bd-test";

/** Two passages, verbatim, from shadcn-run/REPORT.md (shadcn skill, claude -p --model sonnet, 2026-10-14). */
export const SHADCN_RUN_EXCERPT = `- **Fonts:**
  - Stack is \`"Toss Product Sans", "Noto Sans Variable", "Noto Sans KR Variable", system\`.
  - Substitute: none. The DESIGN.md chose none and says Toss Product Sans can't be redistributed.
  - Noto Sans and Noto Sans KR are the documented safe default. They are a fallback, not the brand face.

## Contrast pairs under 4.5:1
Ratios were computed with the WCAG formula.

| Pair | Ratio | Source |
| --- | --- | --- |
| White on \`#3182f6\` (primary button, light and dark) | **3.71:1** | The DESIGN.md itself records this in Known Gaps; left as specified. |
| \`#8b95a1\` muted text on white | **3.04:1** | DESIGN.md "Muted". Applies to descriptions and placeholders. |
| \`#8b95a1\` muted text on \`#f2f4f6\` | **2.76:1** | Same. |
| \`#e42939\` danger on white | **4.49:1** | DESIGN.md danger; just under AA. |
| \`#8ac0ff\` focus ring on white | 1.90:1 | Below the 3:1 non-text target. The DESIGN.md spec is kept. |`;

const en: ShadcnRecipeCopy = {
  navLabel: "With shadcn/ui",
  eyebrow: "RECIPE · SHADCN/UI",
  title: "A real company's DESIGN.md, applied by shadcn's skill.",
  lead: "shadcn's skill turns a DESIGN.md into a themed shadcn/ui app, but it does not write the DESIGN.md. This page shows how to feed it one measured from a live product, and what survives the trip.",
  answerTitle: "The short answer",
  answerBody: "Pick a Verified v2 reference on oh-my-design.kr, save its DESIGN.md in your project root, install shadcn's skill with `npx skills add shadcn/ui`, and ask your agent to build a design system from ./DESIGN.md. OmD references use the Google DESIGN.md format: tokens in YAML frontmatter, then prose. The skill reads the frontmatter, the Do's and Don'ts and the Known Gaps before it edits anything.",
  stepsTitle: "Four steps",
  steps: [
    { title: "Pick a verified reference", body: "Open the catalog and choose a reference marked Verified v2. Those carry a source for each value and a Known Gaps list. Partial and legacy references have fewer tokens and no measured gaps, so the skill has less to work with." },
    { title: "Save its DESIGN.md", body: "On the reference page, the Use block has Copy and Download. Or fetch the raw file: it is the canonical DESIGN.md plus a two-line source footer.", command: OMD_RAW_DESIGN_MD },
    { title: "Install shadcn's skill", body: "This is shadcn's documented install. The skill is called `shadcn` and has no slash command; your agent loads it when you ask for a shadcn/ui design system or mention a DESIGN.md. Its DESIGN.md workflow arrived in PR #12252 (merged 2026-10-09).", command: SHADCN_SKILL_INSTALL },
    { title: "Ask your agent", body: "Use plain language. The skill scaffolds the app (`init` with a style preset, then `add --all`), maps the tokens to shadcn's CSS variables, restyles component variants and writes a report. The prompt below asks it to keep OmD's font rule." },
  ],
  promptTitle: "Prompt to paste",
  prompt: "Build a shadcn/ui design system from ./DESIGN.md. Follow the shadcn skill's design-system workflow: read the frontmatter, Do's and Don'ts and Known Gaps first, map the tokens, and list every value you had to derive in your report. Do not substitute the brand font; if it cannot be installed, use only the safe default DESIGN.md names and label it as a fallback.",
  carryTitle: "What carries over",
  carryLead: "Measured on 2026-10-14 in one end-to-end run of the skill on the released Toss file, downloaded from oh-my-design.kr unchanged. Four earlier runs on a smaller draft (2026-10-13) agreed on colors, radius, button heights, the contrast gap and fonts.",
  carries: [
    { label: "Colors", value: "Every color role mapped into globals.css, and all eight 50–900 palettes registered as tokens" },
    { label: "Radius", value: "7 steps pinned, 4 to 16px; pills capped at 16px" },
    { label: "Type", value: "26 type styles as type-* utilities, in px" },
    { label: "Control heights", value: "TDS buttons 56 / 48 / 38 / 32px in button.tsx; inputs, selects and tabs moved to 38px with them" },
    { label: "States", value: "Pressed scale(0.96) and the documented two-layer focus ring applied; no hover on the primary button, as the DESIGN.md says" },
    { label: "Known Gaps", value: "The 3.71:1 primary-button contrast reported as recorded, not adjusted; the skill also flagged that the documented focus ring is 1.90:1 on white" },
    { label: "Fonts", value: "\"Substitute: none\" kept; Noto Sans and Noto Sans KR installed as a labelled fallback behind Toss Product Sans; Inter never used" },
  ],
  limitsTitle: "Limits",
  limits: [
    "One run on the released file (Claude Sonnet through claude -p: 15 turns, 3 min 41 s, $0.80) and four on the draft. Run-to-run differences were larger than format differences, so read this as a worked example, not a benchmark.",
    "The skill's last two steps (the showcase page and browser checks) were not run, so there are no screenshots here; the evidence is the files it wrote.",
    "The skill fills roles a DESIGN.md leaves empty, such as a dark theme, chart colors and secondary, and marks them as derived in its report. Those values are the agent's choices, not the brand's.",
    "It also makes judgment calls: in this run the default button became 38px instead of TDS's 56px (\"a web app\"), and weight 600 went on every button size. The report lists each one; read it before you ship.",
    "Google's linter reads the released Toss file with 0 errors and 110 warnings: 89 palette tokens no component uses, 20 component properties outside its schema (type, states, pressed), and the same 3.71:1 contrast already listed in Known Gaps.",
    "Brand fonts are usually not redistributable. You get the brand face's name and a labelled safe default, not the font itself.",
  ],
  evidenceTitle: "From a real run",
  evidenceBody: "Unedited passages from REPORT.md, written by the shadcn skill in the 2026-10-14 run on the released Toss file.",
  evidenceLink: "This run: prompt, extraction table, report, globals.css and button.tsx before and after",
  evidenceLinkEarlier: "The four earlier runs on the draft",
};

const ko: ShadcnRecipeCopy = {
  navLabel: "shadcn/ui와 함께",
  eyebrow: "레시피 · SHADCN/UI",
  title: "실제 회사의 DESIGN.md를 shadcn 스킬에 넣기",
  lead: "shadcn 스킬은 DESIGN.md를 받아 테마가 입혀진 shadcn/ui 앱을 만듭니다. DESIGN.md를 써 주지는 않습니다. 실제 서비스에서 측정한 DESIGN.md를 넣는 방법과, 넣었을 때 무엇이 그대로 넘어가는지 정리했습니다.",
  answerTitle: "짧은 답",
  answerBody: "oh-my-design.kr에서 Verified v2 레퍼런스를 고르고, 그 DESIGN.md를 프로젝트 루트에 저장한 뒤, `npx skills add shadcn/ui`로 shadcn 스킬을 설치하고, 에이전트에게 ./DESIGN.md로 디자인 시스템을 만들어 달라고 하면 됩니다. OmD 레퍼런스는 Google DESIGN.md 형식입니다. YAML frontmatter에 토큰이 있고 그 아래에 설명이 이어집니다. 스킬은 편집을 시작하기 전에 frontmatter, Do's and Don'ts, Known Gaps를 먼저 읽습니다.",
  stepsTitle: "네 단계",
  steps: [
    { title: "검증된 레퍼런스 고르기", body: "카탈로그에서 Verified v2 표시가 있는 레퍼런스를 고르세요. 값마다 출처가 있고 Known Gaps 목록이 붙어 있습니다. partial·legacy 레퍼런스는 토큰이 적고 측정된 공백 기록이 없어서 스킬이 쓸 재료가 줄어듭니다." },
    { title: "DESIGN.md 저장하기", body: "레퍼런스 페이지의 Use 블록에서 복사하거나 내려받으세요. 원문 파일을 바로 받아도 됩니다. 정본 DESIGN.md 끝에 출처 두 줄이 붙어 있습니다.", command: OMD_RAW_DESIGN_MD },
    { title: "shadcn 스킬 설치하기", body: "shadcn 문서에 있는 설치 명령입니다. 스킬 이름은 `shadcn`이고 슬래시 명령은 없습니다. shadcn/ui 디자인 시스템을 요청하거나 DESIGN.md를 언급하면 에이전트가 알아서 불러옵니다. DESIGN.md 워크플로는 PR #12252(2026-10-09 머지)로 들어왔습니다.", command: SHADCN_SKILL_INSTALL },
    { title: "에이전트에게 요청하기", body: "평소 말투로 요청하면 됩니다. 스킬이 앱을 만들고(스타일 프리셋으로 `init`, 이어서 `add --all`), 토큰을 shadcn CSS 변수에 연결하고, 컴포넌트 variant를 고친 뒤 보고서를 씁니다. 아래 프롬프트는 OmD의 폰트 규칙을 지키라고 덧붙인 것입니다." },
  ],
  promptTitle: "붙여 넣을 프롬프트",
  prompt: "./DESIGN.md로 shadcn/ui 디자인 시스템을 만들어 줘. shadcn 스킬의 design-system 워크플로를 따라서 frontmatter, Do's and Don'ts, Known Gaps를 먼저 읽고 토큰을 연결해. 직접 추정해서 채운 값은 보고서에 전부 적어. 브랜드 폰트를 다른 폰트로 바꾸지 말고, 설치할 수 없으면 DESIGN.md가 지정한 safe default만 쓰고 fallback이라고 표시해.",
  carryTitle: "그대로 넘어가는 것",
  carryLead: "2026-10-14에 oh-my-design.kr에서 그대로 내려받은 배포판 토스 파일로 스킬을 처음부터 끝까지 한 번 돌려 측정했습니다. 그보다 작은 초안(2026-10-13)으로 앞서 돌린 네 번도 색, radius, 버튼 높이, 대비 공백, 폰트에서 같은 결과였습니다.",
  carries: [
    { label: "색", value: "색 역할 전부가 globals.css에 들어가고, 50–900 팔레트 여덟 벌이 모두 토큰으로 등록됨" },
    { label: "radius", value: "4~16px 7단계 고정. pill 모양은 16px로 제한" },
    { label: "글자", value: "글자 스타일 26개가 px 단위 type-* 유틸리티로 들어감" },
    { label: "컨트롤 높이", value: "TDS 버튼 56 / 48 / 38 / 32px가 button.tsx에 반영되고, input·select·tab도 함께 38px로 맞춰짐" },
    { label: "상태", value: "눌림 scale(0.96)과 문서에 있는 2겹 focus ring 적용. DESIGN.md대로 기본 버튼에는 hover 없음" },
    { label: "Known Gaps", value: "기본 버튼 대비 3.71:1을 고치지 않고 기록된 그대로 보고. 문서의 focus ring이 흰 바탕에서 1.90:1이라는 점도 스킬이 짚음" },
    { label: "폰트", value: "\"Substitute: none\" 유지. Noto Sans·Noto Sans KR을 Toss Product Sans 뒤에 fallback으로 표시해 설치. Inter는 쓰지 않음" },
  ],
  limitsTitle: "한계",
  limits: [
    "배포판 파일로 한 번(claude -p로 Claude Sonnet, 15턴, 3분 41초, 0.80달러), 초안으로 네 번 돌렸습니다. 실행마다 생기는 차이가 형식 차이보다 컸으니 벤치마크가 아니라 실제 예시로 읽어 주세요.",
    "스킬의 마지막 두 단계(쇼케이스 페이지, 브라우저 검증)는 돌리지 않아서 스크린샷은 없습니다. 근거는 스킬이 쓴 파일입니다.",
    "DESIGN.md에 없는 역할(다크 테마, 차트 색, secondary 등)은 스킬이 직접 채우고 보고서에 추정값이라고 표시합니다. 이 값은 브랜드가 아니라 에이전트가 고른 것입니다.",
    "스킬이 판단해서 바꾸는 부분도 있습니다. 이번 실행에서는 기본 버튼을 TDS의 56px가 아니라 38px로 잡았고(\"웹 앱이라서\"), 굵기 600을 모든 버튼 크기에 적용했습니다. 보고서에 하나씩 적혀 있으니 배포 전에 읽어 보세요.",
    "Google 린터로 배포된 토스 파일을 읽으면 오류 0개, 경고 110개입니다. 어떤 컴포넌트도 쓰지 않는 팔레트 토큰 89개, 스키마 밖의 컴포넌트 속성 20개(type, states, pressed), 그리고 Known Gaps에 이미 적힌 3.71:1 대비 1개입니다.",
    "브랜드 폰트는 대개 재배포할 수 없습니다. 받는 것은 폰트 파일이 아니라 브랜드 폰트의 이름과 fallback 표시가 붙은 safe default입니다.",
  ],
  evidenceTitle: "실제 실행 결과",
  evidenceBody: "2026-10-14 배포판 토스 파일 실행에서 shadcn 스킬이 쓴 REPORT.md 일부를 고치지 않고 옮겼습니다. 원문이 영어라 영어로 둡니다.",
  evidenceLink: "이번 실행 기록: 프롬프트, 추출 표, 보고서, 전후 globals.css·button.tsx",
  evidenceLinkEarlier: "초안으로 돌린 앞선 네 번의 기록",
};

const ja: ShadcnRecipeCopy = {
  navLabel: "shadcn/ui と使う",
  eyebrow: "レシピ · SHADCN/UI",
  title: "実在する企業の DESIGN.md を shadcn のスキルに渡す",
  lead: "shadcn のスキルは DESIGN.md からテーマ付きの shadcn/ui アプリを作りますが、DESIGN.md 自体は書きません。実際のプロダクトで計測した DESIGN.md を渡す手順と、渡したときに何が引き継がれるかをまとめました。",
  answerTitle: "要点",
  answerBody: "oh-my-design.kr で Verified v2 のリファレンスを選び、その DESIGN.md をプロジェクトのルートに保存し、`npx skills add shadcn/ui` で shadcn のスキルを入れてから、./DESIGN.md でデザインシステムを作るようエージェントに頼みます。OmD のリファレンスは Google の DESIGN.md 形式で、YAML frontmatter にトークン、その下に説明文があります。スキルは編集を始める前に frontmatter、Do's and Don'ts、Known Gaps を読みます。",
  stepsTitle: "4 つの手順",
  steps: [
    { title: "検証済みのリファレンスを選ぶ", body: "カタログで Verified v2 と表示されたリファレンスを選びます。値ごとの出典と Known Gaps の一覧が付いています。partial や legacy のリファレンスはトークンが少なく、計測した欠落の記録もないため、スキルが使える材料が減ります。" },
    { title: "DESIGN.md を保存する", body: "リファレンスページの Use ブロックからコピーまたはダウンロードします。原文ファイルを直接取得しても構いません。正本の DESIGN.md の末尾に出典が 2 行付いています。", command: OMD_RAW_DESIGN_MD },
    { title: "shadcn のスキルを入れる", body: "shadcn のドキュメントにあるインストール方法です。スキル名は `shadcn` で、スラッシュコマンドはありません。shadcn/ui のデザインシステムを頼んだり DESIGN.md に触れたりすると、エージェントが自動で読み込みます。DESIGN.md のワークフローは PR #12252（2026-10-09 マージ）で追加されました。", command: SHADCN_SKILL_INSTALL },
    { title: "エージェントに頼む", body: "普段の言葉で頼めば十分です。スキルはアプリを用意し（スタイルプリセットで `init`、続けて `add --all`）、トークンを shadcn の CSS 変数に対応付け、コンポーネントの variant を直してからレポートを書きます。下のプロンプトは OmD のフォント規則を守るよう付け加えたものです。" },
  ],
  promptTitle: "貼り付けるプロンプト",
  prompt: "./DESIGN.md から shadcn/ui のデザインシステムを作ってください。shadcn スキルの design-system ワークフローに沿って、まず frontmatter、Do's and Don'ts、Known Gaps を読み、トークンを対応付けてください。自分で推定して埋めた値はすべてレポートに書いてください。ブランドフォントを別のフォントに置き換えず、インストールできない場合は DESIGN.md が指定する safe default だけを使い、fallback と明記してください。",
  carryTitle: "引き継がれるもの",
  carryLead: "2026-10-14 に、oh-my-design.kr からそのまま取得した公開版の Toss ファイルでスキルを最初から最後まで 1 回実行して計測しました。それより小さい草稿（2026-10-13）での先行 4 回も、色、角丸、ボタンの高さ、コントラストの欠落、フォントで同じ結果でした。",
  carries: [
    { label: "色", value: "すべての色の役割が globals.css に入り、50–900 のパレット 8 系統もすべてトークンとして登録された" },
    { label: "角丸", value: "4〜16px の 7 段階を固定。pill 形状は 16px に制限" },
    { label: "文字", value: "26 の文字スタイルが px 単位の type-* ユーティリティになった" },
    { label: "コントロールの高さ", value: "TDS のボタン 56 / 48 / 38 / 32px が button.tsx に反映され、input・select・tab も 38px に揃った" },
    { label: "状態", value: "押下時の scale(0.96) と、文書にある 2 層のフォーカスリングを適用。DESIGN.md のとおり主ボタンに hover はない" },
    { label: "Known Gaps", value: "主ボタンのコントラスト 3.71:1 を直さず記録どおり報告。文書のフォーカスリングが白地で 1.90:1 であることもスキルが指摘" },
    { label: "フォント", value: "\"Substitute: none\" を維持。Noto Sans と Noto Sans KR を Toss Product Sans の後ろに fallback として明記して導入。Inter は使われなかった" },
  ],
  limitsTitle: "限界",
  limits: [
    "公開版ファイルで 1 回（claude -p で Claude Sonnet、15 ターン、3 分 41 秒、0.80 ドル）、草稿で 4 回の実行です。実行ごとの差が形式による差より大きかったため、ベンチマークではなく実例として読んでください。",
    "スキルの最後の 2 手順（ショーケースページとブラウザ確認）は実行していないため、スクリーンショットはありません。根拠はスキルが書いたファイルです。",
    "DESIGN.md にない役割（ダークテーマ、チャートの色、secondary など）はスキルが自分で埋め、レポートで推定値と明記します。これらはブランドではなくエージェントが選んだ値です。",
    "スキル自身の判断も入ります。今回の実行では既定のボタンを TDS の 56px ではなく 38px にし（「Web アプリなので」）、weight 600 をすべてのボタンサイズに適用しました。レポートに一つずつ書かれているので、出荷前に読んでください。",
    "Google のリンターで公開中の Toss ファイルを読むと、エラー 0 件、警告 110 件です。どのコンポーネントも使わないパレットのトークン 89 件、スキーマ外のコンポーネント属性 20 件（type、states、pressed）、そして Known Gaps に記載済みのコントラスト 3.71:1 が 1 件です。",
    "ブランドフォントはたいてい再配布できません。得られるのはフォントそのものではなく、ブランドフォントの名前と fallback と明記された safe default です。",
  ],
  evidenceTitle: "実際の実行結果",
  evidenceBody: "2026-10-14 の公開版 Toss ファイルでの実行で、shadcn のスキルが書いた REPORT.md の一部を手を加えずに載せています。原文が英語のため英語のままです。",
  evidenceLink: "今回の実行記録：プロンプト、抽出表、レポート、変更前後の globals.css と button.tsx",
  evidenceLinkEarlier: "草稿での先行 4 回の記録",
};

const zhCn: ShadcnRecipeCopy = {
  navLabel: "配合 shadcn/ui",
  eyebrow: "配方 · SHADCN/UI",
  title: "把真实公司的 DESIGN.md 交给 shadcn 技能",
  lead: "shadcn 技能能根据 DESIGN.md 生成带主题的 shadcn/ui 应用，但它不负责编写 DESIGN.md。本页说明如何把一份从真实产品中测得的 DESIGN.md 交给它，以及交过去之后哪些内容会被保留。",
  answerTitle: "简短回答",
  answerBody: "在 oh-my-design.kr 选一个 Verified v2 参考，把它的 DESIGN.md 保存到项目根目录，用 `npx skills add shadcn/ui` 安装 shadcn 技能，然后让智能体根据 ./DESIGN.md 构建设计系统。OmD 参考采用 Google 的 DESIGN.md 格式：令牌写在 YAML frontmatter 里，下面是说明文字。技能在动手修改之前会先读 frontmatter、Do's and Don'ts 和 Known Gaps。",
  stepsTitle: "四个步骤",
  steps: [
    { title: "选一个已验证的参考", body: "在目录中选择标有 Verified v2 的参考。它们为每个值注明来源，并附有 Known Gaps 列表。partial 和 legacy 参考的令牌更少，也没有经过测量的缺口记录，技能能用的材料会少很多。" },
    { title: "保存 DESIGN.md", body: "在参考页面的 Use 区块中复制或下载。也可以直接获取原始文件：它就是正式的 DESIGN.md，末尾附两行来源说明。", command: OMD_RAW_DESIGN_MD },
    { title: "安装 shadcn 技能", body: "这是 shadcn 文档中的安装方式。技能名为 `shadcn`，没有斜杠命令；当你请求 shadcn/ui 设计系统或提到 DESIGN.md 时，智能体会自动加载它。DESIGN.md 工作流由 PR #12252（2026-10-09 合并）加入。", command: SHADCN_SKILL_INSTALL },
    { title: "让智能体去做", body: "用平常的话提出请求即可。技能会搭建应用（用风格预设执行 `init`，再执行 `add --all`），把令牌映射到 shadcn 的 CSS 变量，修改组件的 variant，最后写一份报告。下面的提示词额外要求它遵守 OmD 的字体规则。" },
  ],
  promptTitle: "可直接粘贴的提示词",
  prompt: "请根据 ./DESIGN.md 构建 shadcn/ui 设计系统。按照 shadcn 技能的 design-system 工作流，先读 frontmatter、Do's and Don'ts 和 Known Gaps，再映射令牌。凡是你自行推断补上的值，都在报告中列出。不要用其他字体替换品牌字体；如果无法安装，只使用 DESIGN.md 指定的 safe default，并标明它是 fallback。",
  carryTitle: "会被保留的内容",
  carryLead: "2026-10-14 用从 oh-my-design.kr 原样下载的已发布 Toss 文件，把技能从头到尾运行了一次并测量。此前用较小的草稿（2026-10-13）运行的四次，在颜色、圆角、按钮高度、对比度缺口和字体上结果一致。",
  carries: [
    { label: "颜色", value: "所有颜色角色写入 globals.css，八组 50–900 色板也全部注册为令牌" },
    { label: "圆角", value: "固定 4 至 16px 共 7 级；胶囊形状上限为 16px" },
    { label: "文字", value: "26 种文字样式成为以 px 为单位的 type-* 工具类" },
    { label: "控件高度", value: "TDS 按钮 56 / 48 / 38 / 32px 写入 button.tsx；输入框、下拉框和标签页也一起调整为 38px" },
    { label: "状态", value: "应用按下时的 scale(0.96) 和文档中的双层焦点环；按照 DESIGN.md，主按钮没有 hover" },
    { label: "Known Gaps", value: "主按钮对比度 3.71:1 按记录报告，没有被修改；技能还指出文档中的焦点环在白底上只有 1.90:1" },
    { label: "字体", value: "保留 \"Substitute: none\"；Noto Sans 和 Noto Sans KR 作为标明的 fallback 排在 Toss Product Sans 之后安装；从未使用 Inter" },
  ],
  limitsTitle: "局限",
  limits: [
    "已发布文件运行一次（通过 claude -p 运行 Claude Sonnet：15 轮，3 分 41 秒，0.80 美元），草稿运行四次。每次运行之间的差异大于格式之间的差异，请把它当作实例，而不是基准测试。",
    "技能的最后两步（展示页面和浏览器检查）没有运行，所以这里没有截图；证据是技能写下的文件。",
    "DESIGN.md 没有定义的角色（深色主题、图表颜色、secondary 等）由技能自行补上，并在报告中标为推断值。这些值是智能体的选择，不是品牌的。",
    "技能也会自行判断：这次运行把默认按钮设为 38px，而不是 TDS 的 56px（\"因为是网页应用\"），并把字重 600 用在所有按钮尺寸上。报告逐条列出了这些决定，发布前请先读一遍。",
    "用 Google 的 linter 读取已发布的 Toss 文件，结果是 0 个错误、110 个警告：89 个没有组件使用的调色板令牌，20 个超出其 schema 的组件属性（type、states、pressed），以及 Known Gaps 中已记录的 3.71:1 对比度。",
    "品牌字体通常不能再分发。你得到的是品牌字体的名称和一个标明为 fallback 的 safe default，而不是字体本身。",
  ],
  evidenceTitle: "真实运行的结果",
  evidenceBody: "以下是 2026-10-14 用已发布 Toss 文件运行时，shadcn 技能写下的 REPORT.md 片段，未经修改。原文为英文，因此保留英文。",
  evidenceLink: "本次运行记录：提示词、提取表、报告，以及修改前后的 globals.css 和 button.tsx",
  evidenceLinkEarlier: "此前用草稿运行的四次记录",
};

const zhTw: ShadcnRecipeCopy = {
  navLabel: "搭配 shadcn/ui",
  eyebrow: "配方 · SHADCN/UI",
  title: "把真實公司的 DESIGN.md 交給 shadcn 技能",
  lead: "shadcn 技能能依據 DESIGN.md 產生套好主題的 shadcn/ui 應用程式，但它不會替你寫 DESIGN.md。這一頁說明如何交給它一份從真實產品量測而來的 DESIGN.md，以及交過去之後哪些內容會留下來。",
  answerTitle: "簡短回答",
  answerBody: "在 oh-my-design.kr 挑一份 Verified v2 參考，把它的 DESIGN.md 存到專案根目錄，用 `npx skills add shadcn/ui` 安裝 shadcn 技能，再請代理依據 ./DESIGN.md 建立設計系統。OmD 參考採用 Google 的 DESIGN.md 格式：token 寫在 YAML frontmatter，下面接說明文字。技能在動手修改前，會先讀 frontmatter、Do's and Don'ts 與 Known Gaps。",
  stepsTitle: "四個步驟",
  steps: [
    { title: "挑一份已驗證的參考", body: "在目錄中選擇標示 Verified v2 的參考。每個值都附來源，也有 Known Gaps 清單。partial 與 legacy 參考的 token 較少，也沒有量測過的缺口紀錄，技能能用的素材會少很多。" },
    { title: "儲存 DESIGN.md", body: "在參考頁面的 Use 區塊複製或下載。也可以直接取得原始檔：就是正式的 DESIGN.md，結尾附兩行來源說明。", command: OMD_RAW_DESIGN_MD },
    { title: "安裝 shadcn 技能", body: "這是 shadcn 文件中的安裝方式。技能名稱是 `shadcn`，沒有斜線指令；當你要求 shadcn/ui 設計系統或提到 DESIGN.md 時，代理會自動載入。DESIGN.md 工作流程由 PR #12252（2026-10-09 合併）加入。", command: SHADCN_SKILL_INSTALL },
    { title: "交給代理處理", body: "用平常的說法提出要求就好。技能會建立應用程式（用風格預設執行 `init`，再執行 `add --all`），把 token 對應到 shadcn 的 CSS 變數，修改元件的 variant，最後寫一份報告。下面的提示詞另外要求它遵守 OmD 的字型規則。" },
  ],
  promptTitle: "可直接貼上的提示詞",
  prompt: "請依據 ./DESIGN.md 建立 shadcn/ui 設計系統。照著 shadcn 技能的 design-system 工作流程，先讀 frontmatter、Do's and Don'ts 與 Known Gaps，再對應 token。凡是你自行推估補上的值，都要寫進報告。不要用其他字型取代品牌字型；如果無法安裝，只使用 DESIGN.md 指定的 safe default，並標明它是 fallback。",
  carryTitle: "會留下來的內容",
  carryLead: "2026-10-14 用從 oh-my-design.kr 原封不動下載的已發布 Toss 檔案，把技能從頭到尾執行一次並量測。先前用較小的草稿（2026-10-13）執行的四次，在顏色、圓角、按鈕高度、對比缺口與字型上結果相同。",
  carries: [
    { label: "顏色", value: "所有顏色角色寫入 globals.css，八組 50–900 色票也全部註冊為 token" },
    { label: "圓角", value: "固定 4 到 16px 共 7 級；膠囊形狀上限為 16px" },
    { label: "文字", value: "26 種文字樣式成為以 px 為單位的 type-* 工具類別" },
    { label: "控制項高度", value: "TDS 按鈕 56 / 48 / 38 / 32px 寫入 button.tsx；輸入框、下拉選單與分頁標籤也一起調整為 38px" },
    { label: "狀態", value: "套用按下時的 scale(0.96) 與文件中的雙層焦點框；依照 DESIGN.md，主要按鈕沒有 hover" },
    { label: "Known Gaps", value: "主要按鈕對比 3.71:1 照紀錄回報，沒有被修改；技能也指出文件中的焦點框在白底上只有 1.90:1" },
    { label: "字型", value: "保留 \"Substitute: none\"；Noto Sans 與 Noto Sans KR 以標明的 fallback 排在 Toss Product Sans 之後安裝；從未使用 Inter" },
  ],
  limitsTitle: "限制",
  limits: [
    "已發布檔案執行一次（透過 claude -p 執行 Claude Sonnet：15 輪、3 分 41 秒、0.80 美元），草稿執行四次。每次執行之間的差異大於格式之間的差異，請把它當成實例，而不是基準測試。",
    "技能的最後兩步（展示頁面與瀏覽器檢查）沒有執行，所以這裡沒有截圖；證據是技能寫下的檔案。",
    "DESIGN.md 沒有定義的角色（深色主題、圖表顏色、secondary 等）由技能自行補上，並在報告中標為推估值。這些值是代理的選擇，不是品牌的。",
    "技能也會自行判斷：這次執行把預設按鈕設為 38px，而不是 TDS 的 56px（「因為是網頁應用程式」），並把字重 600 套用到所有按鈕尺寸。報告逐條列出這些決定，上線前請先讀過。",
    "用 Google 的 linter 讀取已發布的 Toss 檔案，結果是 0 個錯誤、110 個警告：89 個沒有元件使用的色票 token，20 個超出其 schema 的元件屬性（type、states、pressed），以及 Known Gaps 已記錄的 3.71:1 對比。",
    "品牌字型通常不能再散布。你拿到的是品牌字型的名稱和標明為 fallback 的 safe default，不是字型本身。",
  ],
  evidenceTitle: "真實執行的結果",
  evidenceBody: "以下是 2026-10-14 用已發布 Toss 檔案執行時，shadcn 技能寫下的 REPORT.md 片段，未經修改。原文是英文，所以保留英文。",
  evidenceLink: "本次執行紀錄：提示詞、擷取表、報告，以及修改前後的 globals.css 與 button.tsx",
  evidenceLinkEarlier: "先前用草稿執行的四次紀錄",
};

export const SHADCN_RECIPE: Record<DocsLocale, ShadcnRecipeCopy> = {
  en,
  ko,
  ja,
  "zh-cn": zhCn,
  "zh-tw": zhTw,
};
