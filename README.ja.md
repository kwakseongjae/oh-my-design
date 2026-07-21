<p align="center">
  <img src=".github/assets/logo-bg.png" width="480" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>AI コーディングエージェントのためのスキル駆動デザイン — コマンド 1 回でブートストラップ。</strong> 440 社以上の実在する企業デザインシステム。インストールに AI 呼び出しゼロ。あとはエージェントに話しかけるだけ。
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/oh-my-design-cli"><img src="https://img.shields.io/npm/v/oh-my-design-cli?style=flat-square&color=cb3837" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/oh-my-design-cli"><img src="https://img.shields.io/npm/dm/oh-my-design-cli?style=flat-square&color=cb3837" alt="npm downloads" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/kwakseongjae/oh-my-design?style=flat-square" alt="License" /></a>
  <a href="https://github.com/kwakseongjae/oh-my-design/stargazers"><img src="https://img.shields.io/github/stars/kwakseongjae/oh-my-design?style=social" alt="GitHub Stars" /></a>
  <img src="https://img.shields.io/badge/references-440%2B-7c5cfc?style=flat-square" alt="440+ References" />
  <img src="https://img.shields.io/badge/CLI-install%20%2B%20doctor-blue?style=flat-square" alt="Install and doctor CLI" />
</p>

<p align="center">
  日本語 | <a href="README.md">English</a> | <a href="README.ko.md">한국어</a> | <a href="README.zh-TW.md">繁體中文</a>
</p>

---

## oh-my-design とは?

**oh-my-design (OmD)** は AI コーディングエージェントのためのデザインシステムです。Claude Code / Codex / OpenCode には再利用可能なスキルと専門ロールを、Cursor には同じ `DESIGN.md` を適用するプロジェクト rule を導入します。あとは必要なコンポーネント、画面、コピー、アセット、チャートを説明するだけです。`DESIGN.md` が移植可能なブランド仕様([Google Stitch](https://stitch.withgoogle.com/docs/design-md/overview/) トークン + ブランド哲学レイヤー: Voice / Narrative / Principles / Personas / States / Motion)で、440 社以上の実在企業の DESIGN.md がパッケージに同梱されています。**コアのインストールとローカルワークフローに別の API キー、デーモン、MCP サーバーは不要で、既存のコーディングエージェントが推論します。任意の `claude-design` スキルは Chrome でログイン済みの claude.ai/design セッションを開きます。**

## インストール

```bash
npx oh-my-design-cli@latest
```

インストール後、エージェントを再起動してください (Claude Code は Cmd+Q → 再起動)。続いて、実際にインストールされたチャネル別ファイルを一度確認します。

```bash
npx oh-my-design-cli@latest doctor
```

CLI の役割はバンドルの導入と診断までです。その後のデザイン作業はすべてエージェントへの自然言語で進めます。

インストール先は **Project** (このリポジトリ内のチャネル別パス、デフォルト) または **Global** (全プロジェクトで使うユーザーパス) から選べます。OpenCode はプロジェクト導入では `.opencode/`、グローバル導入では `~/.config/opencode/` を使用します。グローバルの hooks/settings は変更しません。`npx oh-my-design-cli@latest install-skills --global` で Global を直接選び、`npx oh-my-design-cli@latest doctor --global` で診断できます。

## サポートされるエージェント

| エージェント | チャネル | インストールされるもの |
|---|---|---|
| **Claude Code** | `--agent claude-code` (デフォルト) | フルバンドル — `.claude/` 配下のスキル、18 サブエージェント、hooks、data |
| **Codex** | `--agent codex` | `.agents/skills/` のスキル、`.codex/agents/` の埋め込みサブエージェント定義、`.codex/data/` のローカルカタログ |
| **OpenCode** | `--agent opencode` | Project: `.opencode/{skills,agents,data}/` のスキル・ネイティブのサブエージェント・カタログ。Global: `~/.config/opencode/{skills,agents,data}/` の同じバンドル |
| **Cursor** | `--agent cursor` | プロジェクト rule `.cursor/rules/omd-design.mdc` + 共有 `.claude/data` カタログ。OmD スキル、サブエージェント、hooks は導入しない |

デフォルトでは検出されたすべてのエージェントにインストールします。単一チャネルを非対話で導入するには `npx oh-my-design-cli@latest install-skills --agent <name> --all` を実行します。

### Cursor の正しい利用経路

Cursor は rules-only チャネルであり、`omd:init`、`omd:feel`、OmD サブエージェントは実行しません。プロジェクト仕様は次のいずれかで用意します。

1. [Builder](https://oh-my-design.kr/builder) でリファレンスを選択・調整し、`DESIGN.md` をダウンロードしてプロジェクトルートに保存する。
2. Cursor に `Read .claude/data/references/toss/DESIGN.md and create a root DESIGN.md for this product using confirmed values only. Keep unknown facts absent.` と明示的に依頼する。

その後、`@DESIGN.md を読み、動作を変えずにホーム画面を再設計して` と依頼します。導入される rule の最小契約は、`DESIGN.md` を最優先し、保留中の `.omd/preferences.md` 修正を次に適用し、フレームワークの既定値を最後に使うことです。

## パッケージの中身

**20 スキル · 18 サブエージェント · 品質・証拠ステータス付きの 440 件以上のリファレンス · 活性化 hooks** がスキル対応チャネルのフルバンドルです。Cursor には意図的に rule とカタログのみを導入します。

すべてのリファレンスは `oh-my-design.kr/<id>/design.md` から raw markdown としても取得でき、エージェントが直接 fetch できます。スキル・エージェントごとの詳細リファレンス: **[oh-my-design.kr/docs/ja](https://oh-my-design.kr/docs/ja)**。

## アップグレード

```bash
npx oh-my-design-cli@latest
```

Idempotent。OmD のマーカー/ハッシュ付き管理ファイルは in-place で更新され、ユーザーが編集したファイルはそのまま残ります。まず `doctor` が表示する範囲限定の修復コマンドを使ってください。管理対象の Claude hook が古い場合は、他の unmarked ファイルを上書きしない `--repair-hooks` が含まれます。`--force` は意図的なローカル変更を確認した後にだけ使用してください。再実行後はエージェントを再起動し、もう一度診断します。

```bash
npx oh-my-design-cli@latest doctor
```

## リンク

- **カタログ** — [oh-my-design.kr/design-systems](https://oh-my-design.kr/design-systems)
- **コレクション** — [oh-my-design.kr/collections](https://oh-my-design.kr/collections)
- **ドキュメント** — [oh-my-design.kr/docs/ja](https://oh-my-design.kr/docs/ja)
- **チェンジログ** — [CHANGELOG.md](CHANGELOG.md) · 0.1.x からの移行: [MIGRATION.md](MIGRATION.md)

## ライセンス

MIT — [LICENSE](LICENSE) を参照。リファレンスは各企業に帰属し、教育的参照のために再構成されています。
