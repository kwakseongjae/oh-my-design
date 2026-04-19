<p align="center">
  <img src="logo-bg.png" width="480" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>從 67 家真實企業的設計系統生成 DESIGN.md。</strong>互動式精靈。零 AI 呼叫。
</p>

<p align="center">
  <strong>新增 OmD v0.1 Philosophy Layer。</strong>Voice・Narrative・Principles・Personas・States・Motion — 讓 Claude Code 輸出你的品牌,而不是 AI 的預設值。
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

**oh-my-design (OmD)** 是一份開放規範,為 AI 編碼代理提供「足以產出品牌級 UI」的品牌脈絡,而不是依賴 AI 的統計預設值。

[Google 提出的](https://stitch.withgoogle.com/docs/design-md/overview/) `DESIGN.md` 本質上是**令牌文件** — 色彩、字體、元件。必要,但不夠。只靠令牌產 UI,形狀看似合理,卻「不像任何品牌」,會收斂到 AI 的預設:Inter-on-white、紫色漸層、毫無緣由的 emoji。OmD v0.1 在其上疊加**品牌哲學層**:**Voice・Narrative・Principles・Personas・States・Motion**。將 OmD 格式的 `DESIGN.md` 放在專案根目錄,代理的輸出就不再通用,而是「你的」。

三個組成部分:

1. **[規範](spec/omd-v0.1.md)** — 版本化的 Google Stitch 擴充,MIT 授權。
2. **[Claude Code skill](.claude/skills/omd/SKILL.md)** — 將規範作為硬性約束自動套用。
3. **[67 個參考檔案](references/)** — 真實企業的 `DESIGN.md`,可以 fork、透過 builder 客製化後直接上線。

**無須 API 金鑰。零 AI 呼叫。全部在客戶端執行。**

## OmD v0.1 Philosophy Layer

OmD 在 Google Stitch 的 9 個章節之上再加的 6 個章節:

| 章節 | 用途 |
|---|---|
| **10. Voice & Tone** | 微文案約束 — 按鈕文字、錯誤訊息、導引流程 |
| **11. Brand Narrative** | 「為什麼」 — 品牌拒絕什麼、試圖撼動哪個類別 |
| **12. Principles** | 令牌無法裁決時用來拍板的 5〜10 條第一性原理 |
| **13. Personas** | 2〜4 位具體使用者,讓代理輸出扎根於實際情境 |
| **14. States** | Empty / loading / error / skeleton 模式 — 避免通用的「無資料」 |
| **15. Motion & Easing** | 命名的 duration + easing 令牌 — Stitch 9 章節遺漏的維度 |

完整 OmD v0.1 範例請見 [references/toss/DESIGN.md](references/toss/DESIGN.md)。

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

以 [Google Stitch DESIGN.md 格式](https://stitch.withgoogle.com/docs/design-md/overview/)為基礎 — 1〜9 章節,加上選用的 OmD v0.1 Philosophy Layer(10〜15 章節):

**基礎 (Google Stitch)**
1. Visual Theme & Atmosphere
2. Color Palette & Roles
3. Typography Rules
4. Component Stylings
5. Layout Principles
6. Depth & Elevation
7. Do's and Don'ts
8. Responsive Behavior
9. Agent Prompt Guide

**OmD v0.1 Philosophy Layer (附加)**

10. Voice & Tone
11. Brand Narrative
12. Principles
13. Personas
14. States
15. Motion & Easing

另加:Style Preferences、Included Components、Iconography & SVG Guidelines、Document Policies。

## 專案結構

```
oh-my-design/
  spec/              OmD v0.1 規範 (正本)
  .claude/skills/omd/ Claude Code skill 包
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
