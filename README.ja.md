<p align="center">
  <img src="logo-bg.png" width="480" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>67社の実在する企業デザインシステムから DESIGN.md を生成。インタラクティブウィザード + shadcn/ui CSS エクスポート。AI 呼び出しゼロ。</strong>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/github/license/kwakseongjae/oh-my-design?style=flat-square" alt="License" /></a>
  <a href="https://github.com/kwakseongjae/oh-my-design/stargazers"><img src="https://img.shields.io/github/stars/kwakseongjae/oh-my-design?style=social" alt="GitHub Stars" /></a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" />
  <img src="https://img.shields.io/badge/AI%20calls-zero-blue?style=flat-square" alt="Zero AI" />
  <img src="https://img.shields.io/badge/references-67-7c5cfc?style=flat-square" alt="67 References" />
</p>

<p align="center">
  日本語 | <a href="README.md">English</a> | <a href="README.ko.md">한국어</a> | <a href="README.zh-TW.md">繁體中文</a>
</p>

---

## oh-my-design とは?

**oh-my-design** は [awesome-design-md](https://github.com/VoltAgent/awesome-design-md) を拡張したプロジェクトです。

実在する企業のデザインシステムを選び、インタラクティブな A/B ウィザードでカスタマイズして、AI コーディングエージェントがそのまま使えるプロダクション品質の `DESIGN.md` をエクスポートできます。

- [Google Stitch](https://stitch.withgoogle.com/) の DESIGN.md フォーマット準拠
- **API キー不要。AI 呼び出しゼロ。全てクライアントサイドで完結。**

## 主な機能

- **ビルダー** — リファレンスを選び、カラー / radius / ダークモードを調整し、コンポーネントを選択して Export。
- **デザインシステムディレクトリ** ([oh-my-design.kr/design-systems](https://oh-my-design.kr/design-systems)) — 67 リファレンス中 34 件は公式のデザインシステムまたはブランドガイドラインページを持っており、ディレクトリからライブサムネイル付きで直接アクセスできます。
- **Personal Curation** ([oh-my-design.kr/curation](https://oh-my-design.kr/curation)) — MBTI 風の短いクイズであなたのデザイン傾向を 67 リファレンスのいずれかとマッチングし、そのリファレンスが事前選択されたビルダーへ直接移動します。

## サポートされる 67 のリファレンス

| カテゴリ | 企業 |
|----------|------|
| **AI & LLM** | Claude, Cohere, ElevenLabs, Minimax, Mistral AI, Ollama, OpenCode AI, Replicate, RunwayML, Together AI, VoltAgent, xAI |
| **デザインツール** | Airtable, Clay, Figma, Framer, Miro, Webflow |
| **開発者ツール** | Cursor, Expo, Lovable, Raycast, Superhuman, Vercel, Warp |
| **生産性** | Cal.com, freee, Intercom, Linear, Mintlify, Notion, Resend, Zapier |
| **コンシューマテック** | Airbnb, Apple, Baemin, Dcard, IBM, Kakao, Karrot, LINE, Mercari, NVIDIA, Pinkoi, Pinterest, SpaceX, Spotify, Uber |
| **フィンテック** | Coinbase, Kraken, Revolut, Stripe, Toss, Wise |
| **バックエンド & DevOps** | ClickHouse, Composio, Hashicorp, MongoDB, PostHog, Sanity, Sentry, Supabase |
| **自動車** | BMW, Ferrari, Lamborghini, Renault, Tesla |
| **マーケティング** | Semrush |

> ビルダーの**国フィルター**で地域別に絞り込めます (韓国、台湾、日本、フランス、イタリア、ドイツ、イギリス、アメリカ)。

## エクスポートされる DESIGN.md

[Google Stitch DESIGN.md フォーマット](https://stitch.withgoogle.com/docs/design-md/overview/)に準拠:

1. Visual Theme & Atmosphere
2. Color Palette & Roles
3. Typography Rules
4. Component Stylings
5. Layout Principles
6. Depth & Elevation
7. Do's and Don'ts
8. Responsive Behavior
9. Agent Prompt Guide
10. shadcn/ui Theme (CSS 変数)

その他: Style Preferences, Included Components, Iconography & SVG Guidelines, Document Policies (絵文字不使用ルール)。

## プロジェクト構成

```
oh-my-design/
  references/        67 社分の DESIGN.md ファイル
  src/               CLI コア (TypeScript)
  web/               Next.js ウェブビルダー
    src/app/         Landing + Builder + Directory ページ
    src/components/  Wizard, Preview, Export
  test/              Vitest テスト
```

## 謝辞

- [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) — 本プロジェクトの出発点となった上流の DESIGN.md コレクション。
- [kzhrknt/awesome-design-md-jp](https://github.com/kzhrknt/awesome-design-md-jp) — 日本市場のデザインシステムリファレンス。

oh-my-design はこれらのコレクションにインタラクティブなカスタマイズウィザード、A/B スタイル選択、コンポーネント選択、デザインシステムディレクトリ、CLI エクスポートパイプラインを追加して拡張しています。

## ライセンス

[MIT](LICENSE)
