<p align="center">
  <img src=".github/assets/logo-bg.png" width="480" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>為 AI 編碼代理打造的技能驅動設計 — 一個指令完成引導。</strong> 440 個以上的真實企業設計系統。安裝過程零 AI 呼叫。之後只要和你的代理對話即可。
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

**oh-my-design (OmD)** 是為 AI 編碼代理打造的設計系統。Claude Code / Codex / OpenCode 會取得可重用的 skills 與專業角色；Cursor 則取得套用同一份 `DESIGN.md` 的專案 rule。安裝後只要描述需要的元件、畫面、文案、素材或圖表即可。`DESIGN.md` 是可攜式品牌規格（[Google Stitch](https://stitch.withgoogle.com/docs/design-md/overview/) 令牌 + 品牌哲學層：Voice / Narrative / Principles / Personas / States / Motion），套件內建 440 個以上真實企業的 DESIGN.md。**核心安裝與本機工作流程不需要額外 API 金鑰、daemon 或 MCP 伺服器，推論由既有編碼代理工作階段提供；選用的 `claude-design` skill 會在 Chrome 開啟已登入的 claude.ai/design 工作階段。**

## 安裝

```bash
npx oh-my-design-cli@latest
```

安裝後請重新啟動代理（Claude Code 請按 Cmd+Q 後重新開啟），再執行一次診斷，確認各通道實際安裝的檔案。

```bash
npx oh-my-design-cli@latest doctor
```

CLI 只負責安裝與診斷套件。之後的設計工作都以自然語言交給代理完成。

安裝位置可選 **Project**（此程式庫內各工具的專用路徑，預設）或 **Global**（所有專案共用的使用者路徑）。OpenCode 的專案安裝使用 `.opencode/`，全域安裝則使用 `~/.config/opencode/`。全域 hooks/settings 不會被修改；執行 `npx oh-my-design-cli@latest install-skills --global` 可直接選擇全域範圍，再以 `npx oh-my-design-cli@latest doctor --global` 診斷。

## 支援的代理

| 代理 | 通道 | 安裝內容 |
|---|---|---|
| **Claude Code** | `--agent claude-code` (預設) | 完整套件 — `.claude/` 下的 skills、18 個子代理、hooks、data |
| **Codex** | `--agent codex` | `.agents/skills/` 技能、`.codex/agents/` 內嵌子代理角色，以及 `.codex/data/` 本機參考目錄 |
| **OpenCode** | `--agent opencode` | 專案：`.opencode/{skills,agents,data}/` 內的技能、原生子代理與參考目錄；全域：`~/.config/opencode/{skills,agents,data}/` 內的相同套件 |
| **Cursor** | `--agent cursor` | 專案 rule `.cursor/rules/omd-design.mdc` + 共用 `.claude/data` 目錄；不安裝 OmD skills、子代理或 hooks |

預設會安裝到所有偵測到的代理。若要以非互動方式安裝單一通道，請執行 `npx oh-my-design-cli@latest install-skills --agent <name> --all`。

### Cursor 的正確使用路徑

Cursor 是 rules-only 通道，不會執行 `omd:init`、`omd:feel` 或 OmD 子代理。請用下列任一路徑建立專案規格：

1. 在 [Builder](https://oh-my-design.kr/builder) 選擇、調整參考，下載 `DESIGN.md` 並存到專案根目錄。
2. 明確要求 Cursor：`Read .claude/data/references/toss/DESIGN.md and create a root DESIGN.md for this product using confirmed values only. Keep unknown facts absent.`

接著要求 Cursor：`讀取 @DESIGN.md，在不改變行為的前提下重新設計首頁。` 安裝的 rule 只負責最小契約：優先使用 `DESIGN.md`，其次套用待處理的 `.omd/preferences.md` 修正，最後才使用框架預設值。

## 套件內容

**20 個 skills · 18 個子代理 · 440 個以上附品質與證據狀態的參考 · 活性化 hooks** 是支援 skills 通道的完整套件。Cursor 則刻意只安裝 rule 與參考目錄。

每個參考也以 raw markdown 形式提供於 `oh-my-design.kr/<id>/design.md`，代理可以直接抓取。完整的 skill 與 agent 參考文件：**[oh-my-design.kr/docs/zh-tw](https://oh-my-design.kr/docs/zh-tw)**。

## 升級

```bash
npx oh-my-design-cli@latest
```

Idempotent。帶有 OmD 標記/雜湊的受管檔案會就地更新，使用者編輯過的檔案保持不動。請先執行 `doctor` 並採用它列出的範圍限定修復指令；若受管 Claude hook 過期，指令會包含不覆寫其他 unmarked 檔案的 `--repair-hooks`。只有在檢查過刻意保留的本機差異後才使用 `--force`。重新執行後請重啟代理並再次診斷。

```bash
npx oh-my-design-cli@latest doctor
```

## 連結

- **目錄** — [oh-my-design.kr/design-systems](https://oh-my-design.kr/design-systems)
- **精選集** — [oh-my-design.kr/collections](https://oh-my-design.kr/collections)
- **文件** — [oh-my-design.kr/docs/zh-tw](https://oh-my-design.kr/docs/zh-tw)
- **更新紀錄** — [CHANGELOG.md](CHANGELOG.md) · 從 0.1.x 遷移：[MIGRATION.md](MIGRATION.md)

## 授權

[MIT](LICENSE) — 參考資料屬於各企業所有,僅為教育性參考而重現。
