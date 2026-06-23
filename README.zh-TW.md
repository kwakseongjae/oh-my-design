<p align="center">
  <img src=".github/assets/logo-bg.png" width="480" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>為 AI 編碼代理打造的技能驅動設計 — 一個指令完成引導。</strong>326 個真實企業設計系統。安裝過程零 AI 呼叫。之後只要和你的代理對話即可。
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/oh-my-design-cli"><img src="https://img.shields.io/npm/v/oh-my-design-cli?style=flat-square&color=cb3837" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/oh-my-design-cli"><img src="https://img.shields.io/npm/dm/oh-my-design-cli?style=flat-square&color=cb3837" alt="npm downloads" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/kwakseongjae/oh-my-design?style=flat-square" alt="License" /></a>
  <a href="https://github.com/kwakseongjae/oh-my-design/stargazers"><img src="https://img.shields.io/github/stars/kwakseongjae/oh-my-design?style=social" alt="GitHub Stars" /></a>
  <img src="https://img.shields.io/badge/references-326-7c5cfc?style=flat-square" alt="326 References" />
  <img src="https://img.shields.io/badge/CLI%20commands-1-blue?style=flat-square" alt="One CLI command" />
</p>

<p align="center">
  繁體中文 | <a href="README.md">English</a> | <a href="README.ko.md">한국어</a> | <a href="README.ja.md">日本語</a>
</p>

---

## 什麼是 oh-my-design?

**oh-my-design (OmD)** 是為 AI 編碼代理打造的設計系統。它讓 Claude Code / Codex / OpenCode / Cursor 變成一位記得你品牌的資深產品設計師。安裝一次之後,只要描述你想要的東西 — 元件、畫面、文案、素材、圖表 — 代理就會套用專案的設計系統並交付成果。`DESIGN.md` 是品牌規格([Google Stitch](https://stitch.withgoogle.com/docs/design-md/overview/) 令牌 + 品牌哲學層: Voice / Narrative / Principles / Personas / States / Motion),套件內建 326 個真實企業的 DESIGN.md。**無須 API 金鑰。無須外部基礎設施。一切都在你既有的 CLI 工作階段內執行。**

## 安裝

```bash
npx oh-my-design-cli install-skills
```

安裝後請重新啟動你的代理 (Claude Code 為 Cmd+Q 後重新開啟) — 新的 skills + agents 才會載入。

這是你唯一需要執行的 CLI 指令。其餘一切都是對代理說的自然語言。

## 支援的代理

| 代理 | 通道 | 安裝內容 |
|---|---|---|
| **Claude Code** | `--agent claude-code` (預設) | 完整套件 — `.claude/` 下的 skills、16 個子代理、hooks、data |
| **Codex** | `--agent codex` | `.agents/skills/` 技能套件 (官方 discovery 路徑) |
| **OpenCode** | `--agent opencode` | `.opencode/skills/` 技能套件 |
| **Cursor** | `--agent cursor` | 正式 rules 通道 — `.cursor/rules/omd-design.mdc` shim + 共用 `.claude/data` 目錄 (不含 skills/hooks) |

預設會安裝到所有偵測到的代理; 只要單一通道請加 `--agent <name>`。

## 套件內容

**18 個 skills · 16 個子代理 · 326 個經驗證的參考 · 活性化 hooks** — 上述一個指令全部安裝完成。

每個參考也以 raw markdown 形式提供於 `oh-my-design.kr/<id>/design.md`,代理可以直接抓取。完整的 skill 與 agent 參考文件: **[oh-my-design.kr/docs](https://oh-my-design.kr/docs)**。

## 升級

```bash
npx oh-my-design-cli@latest install-skills
```

Idempotent。帶有 `<!-- omd:installed-skill -->` 標記的受管檔案會就地更新,使用者編輯過的檔案則保持不動 (要覆寫請加 `--force`)。重新執行後請重新啟動代理。

## 連結

- **目錄** — [oh-my-design.kr/design-systems](https://oh-my-design.kr/design-systems)
- **精選集** — [oh-my-design.kr/collections](https://oh-my-design.kr/collections)
- **文件** — [oh-my-design.kr/docs](https://oh-my-design.kr/docs)
- **更新紀錄** — [CHANGELOG.md](CHANGELOG.md)

## 授權

[MIT](LICENSE) — 參考資料屬於各企業所有,僅為教育性參考而重現。
