<p align="center">
  <img src=".github/assets/logo-bg.png" width="480" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>AI コーディングエージェントのためのスキル駆動デザイン — コマンド 1 回でブートストラップ。</strong>400 社の実在する企業デザインシステム。インストールに AI 呼び出しゼロ。あとはエージェントに話しかけるだけ。
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/oh-my-design-cli"><img src="https://img.shields.io/npm/v/oh-my-design-cli?style=flat-square&color=cb3837" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/oh-my-design-cli"><img src="https://img.shields.io/npm/dm/oh-my-design-cli?style=flat-square&color=cb3837" alt="npm downloads" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/kwakseongjae/oh-my-design?style=flat-square" alt="License" /></a>
  <a href="https://github.com/kwakseongjae/oh-my-design/stargazers"><img src="https://img.shields.io/github/stars/kwakseongjae/oh-my-design?style=social" alt="GitHub Stars" /></a>
  <img src="https://img.shields.io/badge/references-400-7c5cfc?style=flat-square" alt="400 References" />
  <img src="https://img.shields.io/badge/CLI%20commands-1-blue?style=flat-square" alt="One CLI command" />
</p>

<p align="center">
  日本語 | <a href="README.md">English</a> | <a href="README.ko.md">한국어</a> | <a href="README.zh-TW.md">繁體中文</a>
</p>

---

## oh-my-design とは?

**oh-my-design (OmD)** は AI コーディングエージェントのためのデザインシステムです。Claude Code / Codex / OpenCode / Cursor を、あなたのブランドを記憶したシニアプロダクトデザイナーに変えます。一度インストールすれば、あとは欲しいものを説明するだけ — コンポーネント、画面、コピー、アセット、チャート — エージェントがプロジェクトのデザインシステムを適用して出力します。`DESIGN.md` がブランド仕様([Google Stitch](https://stitch.withgoogle.com/docs/design-md/overview/) トークン + ブランド哲学レイヤー: Voice / Narrative / Principles / Personas / States / Motion)で、400 社の実在企業の DESIGN.md がパッケージに同梱されています。**API キー不要。外部インフラ不要。すべて既存の CLI セッション内で動作します。**

## インストール

```bash
npx oh-my-design-cli install-skills
```

インストール後、エージェントを再起動してください (Claude Code は Cmd+Q → 再起動) — 新しいスキル + エージェントが読み込まれます。

実行する CLI コマンドはこれだけです。あとはすべてエージェントへの自然言語です。

## サポートされるエージェント

| エージェント | チャネル | インストールされるもの |
|---|---|---|
| **Claude Code** | `--agent claude-code` (デフォルト) | フルバンドル — `.claude/` 配下のスキル、16 サブエージェント、hooks、data |
| **Codex** | `--agent codex` | `.agents/skills/` スキルバンドル (公式 discovery パス) |
| **OpenCode** | `--agent opencode` | `.opencode/skills/` スキルバンドル |
| **Cursor** | `--agent cursor` | 正式な rules チャネル — `.cursor/rules/omd-design.mdc` shim + 共有 `.claude/data` カタログ (スキル/フックなし) |

デフォルトでは検出されたすべてのエージェントにインストールします; 単一チャネルのみなら `--agent <name>`。

## パッケージの中身

**18 スキル · 16 サブエージェント · 400 の検証済みリファレンス · 活性化 hooks** — 上記コマンド 1 回ですべてインストールされます。

すべてのリファレンスは `oh-my-design.kr/<id>/design.md` から raw markdown としても取得でき、エージェントが直接 fetch できます。スキル・エージェントごとの詳細リファレンス: **[oh-my-design.kr/docs](https://oh-my-design.kr/docs)**。

## アップグレード

```bash
npx oh-my-design-cli@latest install-skills
```

Idempotent。`<!-- omd:installed-skill -->` マーカー付きの管理ファイルは in-place で更新され、ユーザーが編集したファイルはそのまま残ります (`--force` で上書き)。再実行後はエージェントを再起動してください。

## リンク

- **カタログ** — [oh-my-design.kr/design-systems](https://oh-my-design.kr/design-systems)
- **コレクション** — [oh-my-design.kr/collections](https://oh-my-design.kr/collections)
- **ドキュメント** — [oh-my-design.kr/docs](https://oh-my-design.kr/docs)
- **チェンジログ** — [CHANGELOG.md](CHANGELOG.md)

## ライセンス

MIT — [LICENSE](LICENSE) を参照。リファレンスは各企業に帰属し、教育的参照のために再構成されています。
