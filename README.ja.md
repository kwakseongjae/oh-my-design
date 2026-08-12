<p align="center">
  <img src="https://raw.githubusercontent.com/kwakseongjae/oh-my-design/main/.github/assets/logo-bg.png" width="480" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>AI コーディングエージェントが、プロジェクト専用の DESIGN.md を基準に作業できる環境を整えます。</strong> ガイド付きインストールと doctor、22 の再利用可能なスキル、19 の専門ロール、品質評価済みの企業リファレンス 440 件以上を提供します。ローカルワークフローに別の API キーや MCP サーバーは不要です。
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

**oh-my-design (OmD)** は、普段使っている AI コーディングツールにローカルのデザインワークフローを導入します。新しい `DESIGN.md Core v2` は、YAML やツール・モデル情報を表面に出さない 7 領域の vendor-neutral な契約です。Claude Design、Open Design、一般的なチャットにはファイル単体で渡せます。任意の `.omd/system` Graph は、検証済みプロジェクトでのみ machine authority になります。Google DESIGN.md との import/export 互換を目指しますが、同一仕様または Google 公式仕様とは主張しません。パッケージには品質と根拠の状態を明示した企業リファレンス 440 件以上も含まれます。**コアのインストールとローカルワークフローに別の API キー、デーモン、MCP サーバーは不要です。**

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

   スキルを読み込んだエージェントが `omd:init` を実行し、リファレンスを
   提案して、正確な Graph と `DESIGN.md` のプレビューを準備します。
   プロジェクトオーナー、またはオーナーポリシーに事前登録された外部の
   authority controller がそのバイト列をレビューして承認し、コンパイル済みの
   hash-bound package も checkpoint で確認すると、OmD はプロジェクトへ
   アトミックに採用します。
   生成・実装したエージェントが自身の提案を承認することはできません。

   採用済みファイルと結び付けられた sidecar はリポジトリに残るため、後の
   セッションでも同じ判断を読み直せます。ここでいう「one shot」は、最初の
   ブリーフが一度で、手動の harness 設定が不要という意味です。権限移行を
   無言で省略する意味ではなく、正確なプレビューと package 採用は重要な
   authority checkpoint として残ります。

3. 作成した仕様を使って画面を作ります。

   > DESIGN.md を読み、現在の動作とロゴを保ったままホーム画面をデザインして。

   エージェントは記録済みの判断を基準に作業し、結果をプロジェクト内に残します。

## サポートされるエージェント

| エージェント | チャネル | インストールされるもの |
|---|---|---|
| **Claude Code** | `--agent claude-code` (デフォルト) | フルバンドル — `.claude/` 配下のスキル、19 サブエージェント、hooks、data |
| **Codex** | `--agent codex` | `.agents/skills/` のスキル、`.codex/agents/` の埋め込みサブエージェント定義、`.codex/data/` のローカルカタログ |
| **OpenCode** | `--agent opencode` | Project: `.opencode/{skills,agents,data}/` のスキル・ネイティブのサブエージェント・カタログ。Global: `~/.config/opencode/{skills,agents,data}/` の同じバンドル |
| **Cursor** | `--agent cursor` | `.cursor/skills/` の互換 Agent Skills 21 個、小さな `.cursor/rules/omd-design.mdc` bootstrap、共有 `.claude/data` カタログ。別個のサブエージェント定義と hooks は導入しない |

デフォルトでは検出されたすべてのエージェントにインストールします。単一チャネルを非対話で導入するには `npx oh-my-design-cli@latest install-skills --agent <name> --all` を実行します。

### Cursor の正しい利用経路

Cursor 2.4+ は `.cursor/skills/` から互換 OmD Agent Skills 21 個を読み込みます。導入後に Cursor を再起動し、自然言語でデザインシステムの作成を依頼するか `/omd-init` を明示的に呼び出してください。常時 rule は、保留中のユーザー修正、採用済み Bound System／standalone DESIGN.md、フレームワーク既定値の順序と unknown-as-absence を維持します。

旧 Cursor では `--cursor-rule-only` で従来の rule + カタログ互換モードを導入できます。OmD の別個の専門サブエージェント定義と hooks は Cursor には導入しません。

## パッケージの中身

**22 スキル · 19 サブエージェント · 品質・根拠ステータス付きの 440 件以上のリファレンス · 起動 hooks** がフルバンドルです。Cursor には移植可能な 21 スキルを導入し、`claude-design`、別個のサブエージェント定義、起動 hooks はチャネル固有です。

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
