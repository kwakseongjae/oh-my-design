<p align="center">
  <img src="https://raw.githubusercontent.com/kwakseongjae/oh-my-design/main/.github/assets/logo-bg.png" width="480" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>讓 AI 程式助理依照專案自己的 DESIGN.md 工作。</strong> 內含引導式安裝與 doctor、20 個可重複使用的 skills、18 個專業角色，以及 440 個以上經過品質分級的企業參考。使用本機工作流程不需要另外申請 API 金鑰或架設 MCP 伺服器。
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
  繁體中文 | <a href="README.md">English</a> | <a href="README.ko.md">한국어</a> | <a href="README.ja.md">日本語</a>
</p>

---

## 什麼是 oh-my-design?

**oh-my-design (OmD)** 會把本機設計工作流程安裝到你原本使用的 AI 程式助理。Claude Code / Codex / OpenCode 會取得可重複使用的 skills 與專業角色；Cursor 則取得套用同一份 `DESIGN.md` 的專案 rule。`DESIGN.md` 是可攜式品牌規格，內容結合 [Google Stitch](https://stitch.withgoogle.com/docs/design-md/overview/) tokens 與 Voice、Narrative、Principles、Personas、States、Motion。套件另附 440 個以上標示品質與依據狀態的企業參考。**核心安裝與本機工作流程不需要額外 API 金鑰、daemon 或 MCP 伺服器；推論會留在既有的 AI 程式助理工作階段。選用的 `claude-design` skill 會在 Chrome 開啟已登入的 claude.ai/design 工作階段。**

## 安裝

```bash
npx oh-my-design-cli@latest
```

安裝後請重新啟動 AI 程式助理（Claude Code 請按 Cmd+Q 後重新開啟），再執行一次檢查，確認各通道實際安裝的檔案。

```bash
npx oh-my-design-cli@latest doctor
```

CLI 只負責安裝與檢查套件。之後的設計工作都以自然語言交給 AI 程式助理完成。

安裝位置可選 **Project**（此專案儲存庫內各工具的專用路徑，預設）或 **Global**（所有專案共用的使用者路徑）。OpenCode 的專案安裝使用 `.opencode/`，全域安裝則使用 `~/.config/opencode/`。全域 hooks/settings 不會被修改；執行 `npx oh-my-design-cli@latest install-skills --global` 可直接選擇全域範圍，再以 `npx oh-my-design-cli@latest doctor --global` 檢查。

## 最初 60 秒 — Claude Code、Codex、OpenCode

這是從安裝到看見成果的最短路徑。

1. 執行上方安裝指令，**重新啟動 AI 程式助理**，再執行 `npx oh-my-design-cli@latest doctor` 檢查通道檔案。

2. 在專案中輸入第一段提示：

   > 請為家庭餐點記錄 App 建立 DESIGN.md。以 Toss 作為參考，只採用已確認的值；遇到產品專屬資訊時，先詢問再決定。

   載入 skills 後，AI 程式助理會執行 `omd:init`、提出參考並請你確認，最後在專案根目錄建立 `DESIGN.md`。檔案會保留在專案儲存庫中，後續工作階段可以再次讀取同一組設計決策。

3. 接著用這份規格建立畫面：

   > 請讀取 DESIGN.md，在保留現有行為與 Logo 的前提下設計首頁。

   AI 程式助理會依照已記錄的決策工作，成果則留在專案中供你檢查。

## 支援的工具

| 工具 | 通道 | 安裝內容 |
|---|---|---|
| **Claude Code** | `--agent claude-code` (預設) | 完整套件 — `.claude/` 下的 skills、18 個子代理、hooks、data |
| **Codex** | `--agent codex` | `.agents/skills/` 技能、`.codex/agents/` 內嵌子代理角色，以及 `.codex/data/` 本機參考目錄 |
| **OpenCode** | `--agent opencode` | 專案：`.opencode/{skills,agents,data}/` 內的技能、原生子代理與參考目錄；全域：`~/.config/opencode/{skills,agents,data}/` 內的相同套件 |
| **Cursor** | `--agent cursor` | 專案 rule `.cursor/rules/omd-design.mdc` + 共用 `.claude/data` 目錄；不安裝 OmD skills、子代理或 hooks |

預設會安裝到所有偵測到的 AI 程式助理。若要以非互動方式安裝單一通道，請執行 `npx oh-my-design-cli@latest install-skills --agent <name> --all`。

### Cursor 的正確使用路徑

Cursor 是 rules-only 通道，不會執行 `omd:init`、`omd:feel` 或 OmD 子代理。請用下列任一路徑建立專案規格：

1. 在 [Builder](https://oh-my-design.kr/builder) 選擇、調整參考，下載 `DESIGN.md` 並存到專案根目錄。
2. 明確要求 Cursor：`Read .claude/data/references/toss/DESIGN.md and create a root DESIGN.md for this product using confirmed values only. Keep unknown facts absent.`

接著要求 Cursor：`讀取 @DESIGN.md，在不改變行為的前提下重新設計首頁。` 安裝的 rule 只負責最小契約：優先使用 `DESIGN.md`，其次套用待處理的 `.omd/preferences.md` 修正，最後才使用框架預設值。

## 套件內容

**20 個 skills · 18 個子代理角色 · 440 個以上附品質與依據狀態的參考 · 啟動 hooks** 是支援 skills 通道的完整套件。Cursor 則刻意只安裝 rule 與參考目錄。

每個參考也以 raw markdown 形式提供於 `oh-my-design.kr/<id>/design.md`，AI 程式助理可以直接讀取。完整的 skill 與 agent 參考文件：**[oh-my-design.kr/docs/zh-tw](https://oh-my-design.kr/docs/zh-tw)**。

## 升級

```bash
npx oh-my-design-cli@latest
```

可重複執行。帶有 OmD 標記或雜湊的受管檔案會直接更新，使用者編輯過的檔案則保持不動。請先執行 `doctor`，並採用它列出的指定範圍修復指令；若受管 Claude hook 已過期，指令會包含不覆寫其他未標記檔案的 `--repair-hooks`。只有在檢查過刻意保留的本機差異後才使用 `--force`。重新執行後請重啟 AI 程式助理並再次檢查。

```bash
npx oh-my-design-cli@latest doctor
```

## 連結

- **目錄** — [oh-my-design.kr/design-systems](https://oh-my-design.kr/design-systems)
- **精選集** — [oh-my-design.kr/collections](https://oh-my-design.kr/collections)
- **文件** — [oh-my-design.kr/docs/zh-tw](https://oh-my-design.kr/docs/zh-tw)
- **更新紀錄** — [CHANGELOG.md](CHANGELOG.md) · 從 0.1.x 遷移：[MIGRATION.md](MIGRATION.md)

## 授權

[MIT](LICENSE) — 參考資料屬於各企業所有，僅為教育性參考而重現。
