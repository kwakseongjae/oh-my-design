<p align="center">
  <img src="https://raw.githubusercontent.com/kwakseongjae/oh-my-design/main/.github/assets/logo-bg.png" width="480" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>讓 AI 程式助理依照專案自己的 DESIGN.md 工作。</strong> 內含引導式安裝與 doctor、22 個可重複使用的 skills、19 個專業角色，以及 440 個以上經過品質分級的企業參考。使用本機工作流程不需要另外申請 API 金鑰或架設 MCP 伺服器。
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

**oh-my-design (OmD)** 會把本機設計工作流程安裝到你原本使用的 AI 程式助理。新的 `DESIGN.md Core v2` 是不在可見頂部放置 YAML、工具或模型資訊的七領域 vendor-neutral 契約，可將單一檔案交給 Claude Design、Open Design 或一般聊天使用。選用的 `.omd/system` Graph 只在通過驗證的專案中成為 machine authority。它以與 Google DESIGN.md 的匯入／匯出相容為目標，但不宣稱是同一規格或 Google 官方規格。套件另附 440 個以上標示品質與依據狀態的企業參考。**核心安裝與本機工作流程不需要額外 API 金鑰、daemon 或 MCP 伺服器。**

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

   載入 skills 後，AI 程式助理會執行 `omd:init`、提出參考，並準備精確的
   Graph 與 `DESIGN.md` 預覽。專案擁有者，或依擁有者政策預先登錄的外部
   authority controller 檢閱並核准該組位元組，且在 checkpoint 確認編譯後的
   hash-bound package，OmD 才會以原子交易採用到專案中。產生或實作內容的
   AI 程式助理不得自行核准自己的提案。

   已採用的檔案與綁定的 sidecar 會保留在專案儲存庫中，後續工作階段可以
   再次讀取同一組設計決策。此處的「one shot」是指只需一份初始 brief，且
   不必手動設定 harness；並不表示可以默默略過權限轉移。精確預覽與 package
   採用仍是會影響結果的 authority checkpoints。

3. 接著用這份規格建立畫面：

   > 請讀取 DESIGN.md，在保留現有行為與 Logo 的前提下設計首頁。

   AI 程式助理會依照已記錄的決策工作，成果則留在專案中供你檢查。

## 支援的工具

| 工具 | 通道 | 安裝內容 |
|---|---|---|
| **Claude Code** | `--agent claude-code` (預設) | 完整套件 — `.claude/` 下的 skills、19 個子代理、hooks、data |
| **Codex** | `--agent codex` | `.agents/skills/` 技能、`.codex/agents/` 內嵌子代理角色，以及 `.codex/data/` 本機參考目錄 |
| **OpenCode** | `--agent opencode` | 專案：`.opencode/{skills,agents,data}/` 內的技能、原生子代理與參考目錄；全域：`~/.config/opencode/{skills,agents,data}/` 內的相同套件 |
| **Cursor** | `--agent cursor` | `.cursor/skills/` 中 21 個相容 Agent Skills、精簡 `.cursor/rules/omd-design.mdc` bootstrap 與共用 `.claude/data` 目錄；不安裝獨立子代理定義或 hooks |

預設會安裝到所有偵測到的 AI 程式助理。若要以非互動方式安裝單一通道，請執行 `npx oh-my-design-cli@latest install-skills --agent <name> --all`。

### Cursor 的正確使用路徑

Cursor 2.4+ 會從 `.cursor/skills/` 載入 21 個相容 OmD Agent Skills。安裝後重新啟動 Cursor，以自然語言要求建立設計系統，或直接呼叫 `/omd-init`。常駐 rule 維持保留中的使用者修正、已採用 Bound System／standalone DESIGN.md、框架預設值的順序，以及 unknown-as-absence。

舊版 Cursor 可使用 `--cursor-rule-only` 安裝既有 rule + 目錄相容模式。OmD 的獨立專業子代理定義與 hooks 不會安裝到 Cursor。

## 套件內容

**22 個 skills · 19 個子代理角色 · 440 個以上附品質與依據狀態的參考 · 啟動 hooks** 是完整套件。Cursor 會取得 21 個可攜 skills；`claude-design`、獨立子代理定義與啟動 hooks 仍依通道而定。

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
