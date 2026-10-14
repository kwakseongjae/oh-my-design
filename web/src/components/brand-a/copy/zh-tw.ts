/* Landing copy (zh-Hant-TW), ported from the approved concept-A prototype
 * (docs/research/2026-10-13-rebrand/a-landing/i18n*.js, rounds 1-5c). Written natively per
 * locale, not converted. Numbers are {placeholders} filled from generated data at build time.
 * Markup allowed in strings: <b>, <code>, <span class="nb"> and &nbsp; &lt; &gt; (see rich.tsx). */
import type { BrandCopy } from "./en";

export const ZH_TW: BrandCopy = {
  "htmlLang": "zh-Hant-TW",
  "title": "oh-my-design：給中日韓介面用的真實設計系統",
  "desc": "收錄 {total} 份真實企業的 DESIGN.md，其中 {cjk} 份來自台灣、韓國、日本與中國。已驗證的數值都註明讀取自哪個頁面。",
  "nav": {
    "archive": "典藏",
    "skills": "技能",
    "docs": "文件",
    "github": "GitHub",
    "lang": "語言",
    "langTitle": "選擇語言",
    "close": "關閉",
    "langNames": {"en":"英文", "ko":"韓文", "ja":"日文", "zh-tw":"繁體中文"},
    "theme": "切換主題",
    "skip": "跳到主要內容"
  },
  "hero": {
    "h1": "<span class=\"nb\">給中日韓介面用的</span><span class=\"nb\">真實設計系統</span>",
    "lede": "{total} 份真實企業的 DESIGN.md，可以直接交給 AI 程式助理。已驗證的數值都註明了出處。",
    "searchLabel": "搜尋參考",
    "searchPh": "誠品、台灣高鐵、토스뱅크…",
    "searchEmpty": "找不到這個名稱。試試企業的原文名稱或英文名稱。",
    "searchHint": "{n} 筆結果",
    "browse": "瀏覽典藏",
    "how": "使用方式"
  },
  "status": {
    "v": "已驗證",
    "p": "部分驗證",
    "l": "舊版"
  },
  "kb": {
    "label": "刻在鍵盤上的企業。按下按鍵，就會打開它的 DESIGN.md。"
  },
  "gen": {
    "h2": "從 DESIGN.md 到畫面的旅程",
    "intro": "選一家企業，同一個畫面就只用它的檔案重新繪製。",
    "replay": "重播",
    "m": {
      "css": "計算樣式",
      "both": "計算樣式＋官方文件",
      "doc": "官方文件",
      "live": "即時擷取"
    },
    "asSpec": "依規格的字型：{f}。",
    "absent": "來源未提供",
    "sample": {
      "label": "用這些 token 組出的範例畫面",
      "title": "本月支出",
      "body": "一眼看出錢花到哪裡。",
      "card": "最近紀錄",
      "rows": [
        "日用品",
        "交通"
      ],
      "cta": "查看詳情",
      "states": "狀態"
    },
    "r5": {
      "pick": "企業",
      "sum": "{n} 個數值・全部有來源",
      "hint": "將游標移到元素上或點一下，就能看到數值的來源。",
      "missing": "來源未提供：",
      "noFace": "沒有指定字型，因此使用本頁字型。",
      "st": {
        "pressed": "按下",
        "hover": "懸停",
        "focus": "焦點"
      },
      "stNone": "來源沒有狀態數值",
      "dflt": "來源未提供・預設值",
      "subF": "{f}：此處未載入，畫面改用本頁字型。這不是品牌字型，也不是經實測挑選的替代字型。",
      "disp": "標題字型：{d}。",
      "otherDomain": "與按鈕不同的來源網域"
    }
  },
  "use": {
    "h2": "從 omd CLI 開始",
    "p": "一行指令，就把技能、子代理與參考資料庫裝進 Claude Code、Codex 和 OpenCode。下面是它在空專案裡實際印出的內容。",
    "panel": "終端機輸出",
    "note": "oh-my-design-cli {ver} 於 {date} 在空專案中執行的實際輸出。",
    "gap": "省略 {n} 行",
    "skills": [
      [
        "omd-init",
        "從最接近的真實企業參考建立 DESIGN.md。"
      ],
      [
        "omd-apply",
        "助理每次修改 UI 時，都套用你的 DESIGN.md。"
      ],
      [
        "omd-feel",
        "用 113 條量化的介面細節規則來打磨或檢查。"
      ],
      [
        "omd-cjk-type-shader",
        "把中日韓大標題畫成在宣紙上暈開的墨跡。"
      ]
    ],
    "all": "在 GitHub 查看全部 {skills} 個技能",
    "copy": "複製",
    "copied": "已複製",
    "failed": "無法複製"
  },
  "faq": {
    "h2": "常見問題",
    "items": [
      [
        "DESIGN.md 是什麼？",
        "描述產品設計系統（色彩、字型、圓角、元件、語氣）的 Markdown 檔案，讓 AI 程式助理在動手做 UI 之前先讀。"
      ],
      [
        "這些是企業官方提供的檔案嗎？",
        "不是。每份都是 OmD 根據公開的產品頁面與官方文件重建而成，檔案的 Governance 段落也這樣寫明。設計屬於各家企業，檔案僅供參考。"
      ],
      [
        "一定要用 CLI 嗎？",
        "不用。任何參考都可以複製、下載，或直接從 <code>oh-my-design.kr/&lt;id&gt;/design.md</code> 取得原始檔。CLI 則會加上在 Claude Code、Codex、OpenCode 與 Cursor 中套用這份檔案的技能。"
      ],
      [
        "檔案有多新？",
        "每份已驗證檔案都記錄了檢查日期與下次複查日期。例如 Toss 在 {tossChk} 檢查過，預定 {tossNext} 複查。"
      ],
      [
        "需要付費或 API 金鑰嗎？",
        "CLI 採 MIT 授權，核心工作流程不需要 API 金鑰，推論都在你原本使用的 AI 程式助理裡進行。"
      ]
    ]
  },
  "foot": {
    "tag": "給中日韓介面用的 DESIGN.md 典藏與前端技能。",
    "legal": "MIT 授權。參考中的設計屬於各家企業，整理於此僅供學習與參考。",
    "marks": "標誌為各自所有者的商標，僅供參考展示。"
  }
};
