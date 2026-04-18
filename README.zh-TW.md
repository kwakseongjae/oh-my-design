<p align="center">
  <img src="logo-bg.png" width="480" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>從 67 家真實企業的設計系統生成 DESIGN.md。互動式精靈 + shadcn/ui CSS 匯出。零 AI 呼叫。</strong>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/github/license/kwakseongjae/oh-my-design?style=flat-square" alt="License" /></a>
  <a href="https://github.com/kwakseongjae/oh-my-design/stargazers"><img src="https://img.shields.io/github/stars/kwakseongjae/oh-my-design?style=social" alt="GitHub Stars" /></a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" />
  <img src="https://img.shields.io/badge/AI%20calls-zero-blue?style=flat-square" alt="Zero AI" />
  <img src="https://img.shields.io/badge/references-67-7c5cfc?style=flat-square" alt="67 References" />
</p>

<p align="center">
  繁體中文 | <a href="README.md">English</a> | <a href="README.ko.md">한국어</a> | <a href="README.ja.md">日本語</a>
</p>

---

## 什麼是 oh-my-design?

**oh-my-design** 是 [awesome-design-md](https://github.com/VoltAgent/awesome-design-md) 的延伸。

挑選一家真實企業的設計系統,透過互動式 A/B 精靈進行客製化,匯出可立即投入生產的 `DESIGN.md`,任何 AI 編碼代理都能用來產生風格一致的 UI。

- 遵循 [Google Stitch](https://stitch.withgoogle.com/) 的 DESIGN.md 格式
- **無須 API 金鑰。零 AI 呼叫。全部在客戶端執行。**

## 主要功能

- **Builder** — 選擇參考、調整色彩 / radius / 深色模式、挑選元件,然後按下 Export。
- **Design Systems 目錄** ([oh-my-design.kr/design-systems](https://oh-my-design.kr/design-systems)) — 67 個參考中有 34 個擁有官方設計系統或品牌指南頁面,可從目錄配合即時縮圖直接前往。
- **Personal Curation** ([oh-my-design.kr/curation](https://oh-my-design.kr/curation)) — 透過 MBTI 風格的簡短測驗,將你的設計偏好對應到 67 個參考之一,並直接帶你進入已預選該參考的 Builder。

## 67 個支援的參考

| 類別 | 企業 |
|------|------|
| **AI & LLM** | Claude, Cohere, ElevenLabs, Minimax, Mistral AI, Ollama, OpenCode AI, Replicate, RunwayML, Together AI, VoltAgent, xAI |
| **設計工具** | Airtable, Clay, Figma, Framer, Miro, Webflow |
| **開發者工具** | Cursor, Expo, Lovable, Raycast, Superhuman, Vercel, Warp |
| **生產力** | Cal.com, freee, Intercom, Linear, Mintlify, Notion, Resend, Zapier |
| **消費科技** | Airbnb, Apple, Baemin, Dcard, IBM, Kakao, Karrot, LINE, Mercari, NVIDIA, Pinkoi, Pinterest, SpaceX, Spotify, Uber |
| **金融科技** | Coinbase, Kraken, Revolut, Stripe, Toss, Wise |
| **後端 & DevOps** | ClickHouse, Composio, Hashicorp, MongoDB, PostHog, Sanity, Sentry, Supabase |
| **汽車** | BMW, Ferrari, Lamborghini, Renault, Tesla |
| **行銷** | Semrush |

> 使用 Builder 中的**國家篩選器**按地區瀏覽 (韓國、台灣、日本、法國、義大利、德國、英國、美國)。

## 匯出的 DESIGN.md

遵循 [Google Stitch DESIGN.md 格式](https://stitch.withgoogle.com/docs/design-md/overview/):

1. Visual Theme & Atmosphere
2. Color Palette & Roles
3. Typography Rules
4. Component Stylings
5. Layout Principles
6. Depth & Elevation
7. Do's and Don'ts
8. Responsive Behavior
9. Agent Prompt Guide
10. shadcn/ui Theme (CSS 變數)

加上: Style Preferences、Included Components、Iconography & SVG Guidelines、Document Policies (不使用 emoji 規則)。

## 專案結構

```
oh-my-design/
  references/        67 家企業的 DESIGN.md 檔案
  src/               CLI 核心 (TypeScript)
  web/               Next.js 網頁 builder
    src/app/         Landing + Builder + Directory 頁面
    src/components/  Wizard、Preview、Export
  test/              Vitest 測試
```

## 致謝

- [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) — 啟動本專案的上游 DESIGN.md 集合。
- [kzhrknt/awesome-design-md-jp](https://github.com/kzhrknt/awesome-design-md-jp) — 日本市場的設計系統參考。

oh-my-design 在這些集合的基礎上加入了互動式客製化精靈、A/B 風格偏好、元件選擇、Design Systems 目錄與 CLI 匯出管線。

## 授權

[MIT](LICENSE)
