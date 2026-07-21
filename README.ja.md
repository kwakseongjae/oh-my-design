<p align="center">
  <img src="https://raw.githubusercontent.com/kwakseongjae/oh-my-design/main/.github/assets/logo-bg.png" width="480" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>AI コーディングエージェントが、プロジェクト専用の DESIGN.md を基準に作業できる環境を整えます。</strong> ガイド付きインストールと doctor、20 の再利用可能なスキル、18 の専門ロール、品質評価済みの企業リファレンス 440 件以上を提供します。ローカルワークフローに別の API キーや MCP サーバーは不要です。
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

**oh-my-design (OmD)** は、普段使っている AI コーディングツールにローカルのデザインワークフローを導入します。Claude Code / Codex / OpenCode には再利用可能なスキルと専門ロールを、Cursor には同じ `DESIGN.md` を適用するプロジェクト rule をインストールします。`DESIGN.md` は、[Google Stitch](https://stitch.withgoogle.com/docs/design-md/overview/) のトークンに Voice、Narrative、Principles、Personas、States、Motion を加えた移植可能なブランド仕様です。パッケージには品質と根拠の状態を明示した企業リファレンス 440 件以上も含まれます。**コアのインストールとローカルワークフローに別の API キー、デーモン、MCP サーバーは不要です。推論には既存のコーディングエージェントのセッションを使います。任意の `claude-design` スキルは、Chrome でログイン済みの claude.ai/design セッションを開きます。**

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

## 最初の 60 秒 — Claude Code、Codex、OpenCode

インストールから画面で確認できる結果までの最短手順です。

1. 上のコマンドでインストールし、**エージェントを再起動**します。続けて `npx oh-my-design-cli@latest doctor` を実行し、チャネル別ファイルを確認します。

2. プロジェクトで次のプロンプトを入力します。

   > 家族向け食事記録アプリの DESIGN.md を作成して。Toss を参考にし、確認済みの値だけを使って、製品固有の内容は決める前に確認して。

   スキルを読み込んだエージェントが `omd:init` を実行し、リファレンスを提案して確認を取り、プロジェクトルートに `DESIGN.md` を作成します。ファイルはリポジトリに残るため、後のセッションでも同じ判断を読み直せます。

3. 作成した仕様を使って画面を作ります。

   > DESIGN.md を読み、現在の動作とロゴを保ったままホーム画面をデザインして。

   エージェントは記録済みの判断を基準に作業し、結果をプロジェクト内に残します。

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

**20 スキル · 18 サブエージェント · 品質・根拠ステータス付きの 440 件以上のリファレンス · 起動 hooks** がスキル対応チャネルのフルバンドルです。Cursor には意図的に rule とカタログのみを導入します。

すべてのリファレンスは `oh-my-design.kr/<id>/design.md` から raw markdown としても取得でき、エージェントが直接 fetch できます。スキル・エージェントごとの詳細リファレンス: **[oh-my-design.kr/docs/ja](https://oh-my-design.kr/docs/ja)**。

## アップグレード

```bash
npx oh-my-design-cli@latest
```

何度実行しても同じ状態に保たれます。OmD のマーカーまたはハッシュが付いた管理ファイルはその場で更新し、ユーザーが編集したファイルは残します。まず `doctor` が表示する対象範囲を限定した修復コマンドを使ってください。管理対象の Claude hook が古い場合は、ほかの未管理ファイルを上書きしない `--repair-hooks` が含まれます。`--force` は意図的なローカル変更を確認した後にだけ使用してください。再インストール後はエージェントを再起動し、もう一度確認します。

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
