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

## 你會拿到什麼

三項產物，全部都是儲存庫裡的檔案。

| | |
|---|---|
| **`DESIGN.md`** | 連犧牲了什麼都寫明的設計哲學、每個選擇都帶 ID 的決策表，以及回指產生自己的那個決策的 token。可攜到能直接貼進一般聊天，具體到設計師能查出「為什麼是這個值」。 |
| **設計系統** | 具備解剖結構的元件契約、**連刻意不適用的狀態與理由都寫上**的狀態矩陣、無障礙契約，以及決策要填入的 token 欄位。基礎、對應 shadcn/Radix 的 primitives、畫面類型、參考來源風格四層共 93 個 preset 契約打底。 |
| **`omd book`** | `npx oh-my-design-cli@latest book` 會在本機連接埠上呈現你的系統：token 旁邊放著產生它的決策、附理由的狀態矩陣、對你宣告的對比配對做的實測值，以及 preset 的來源脈絡。`--static` 會輸出單一 HTML 供交接。 |

在 v2.0.0，上面每一層都是**你可以編輯的檔案** — 哲學、preset、gate、參考皆然。
而下一次建置必須對你寫進去的內容自我證成。無法檢查的品味就無法改進。

## 系統是怎麼被推導出來的

畫面是最後一步，不是第一步。這套 harness 讓代理先建立一個系統，再讓它對那個
系統負責。

```
哲學 → 決策表 → tokens → 元件契約 → 版面文法 → 建置 → 畫面批評 → DESIGN.md
```

每一步都約束下一步。原則必須說明**為了得到什麼而犧牲什麼** — 無法被反駁的原則
只是裝飾。每個決策都有 `D-<原則>-<編號>` 的 ID 與一行理由，token 則回指該 ID。
因此沒有決策依據的 token 值不是品味差異，而是**gate 失敗**。

以下是 harness 實際產出的 `DESIGN.md`
（[`benchmarks/ui-resolve-bench/e2e/onzip/DESIGN.md`](./benchmarks/ui-resolve-bench/e2e/onzip/DESIGN.md)，644 行）：

```markdown
### Principles
- Accent is a signal — terracotta on linen, used for the primary action,
  selected chip, and focus ring, never a full-card wash (D-P2-4).

### Semantic tokens
- **color.accent**: `#8B4529` — Terracotta signal. D-P2-4. 6.1:1 on paper.
```

原則和 token 出現**同一個 ID**。重點就在這裡：從系統裡任何一個值出發，都能回溯到
造成它的那句話。

### 自己驗證

以上都不需要安裝 CLI 才能查證，全部是這個儲存庫裡的檔案。

| 要看的東西 | 位置 |
|---|---|
| 可攜契約、七個錨點與符合等級 | [`spec/design-md-core-v2.md`](./spec/design-md-core-v2.md) |
| 代理所遵循的推導鏈 | [`skills/omd-autopilot/references/derivation-chain.md`](./skills/omd-autopilot/references/derivation-chain.md) |
| 54 個 slop gate + 8 個系統忠實度 gate | [`skills/omd-autopilot/references/slop-gates.md`](./skills/omd-autopilot/references/slop-gates.md) |
| 四層共 93 個 preset 契約 | [`skills/omd-autopilot/references/presets/`](./skills/omd-autopilot/references/presets/) |
| harness 產生的三套完整系統 | [`benchmarks/ui-resolve-bench/e2e/`](./benchmarks/ui-resolve-bench/e2e/) |

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
