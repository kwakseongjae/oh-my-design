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
    "theme": "切換主題",
    "skip": "跳到主要內容"
  },
  "hero": {
    "h1": "<span class=\"nb\">給中日韓介面用的</span><span class=\"nb\">真實設計系統</span>",
    "lede": "{total} 份可以直接交給 AI 程式助理的 DESIGN.md，收錄<b>台灣 {TW} 家、韓國 {KR} 家、日本 {JP} 家、中國 {CN} 家</b>企業。已驗證的檔案裡，每個數值都註明是從哪個頁面讀取的。",
    "searchLabel": "搜尋參考",
    "searchPh": "誠品、台灣高鐵、토스뱅크…",
    "searchEmpty": "找不到這個名稱。試試企業的原文名稱或英文名稱。",
    "searchHint": "{n} 筆結果",
    "tally": {
      "v": "已驗證：每個數值都有擷取的產品頁面或官方文件為據",
      "p": "部分驗證：有出處，但還沒有逐值的依據",
      "l": "舊版：在開始收集依據之前寫成"
    },
    "open": "開啟 DESIGN.md",
    "meta": "{role} {hex}・{date} 檢查・{n} 個頁面",
    "more": "典藏中還有 {n} 家",
    "gridLabel": "已驗證的參考，一格一家企業"
  },
  "status": {
    "v": "已驗證",
    "p": "部分驗證",
    "l": "舊版"
  },
  "tiers": {
    "heading": "三種標示的意思",
    "v": "有實測的 token 來源、至少 5 筆原始證據樣本、官方來源，也沒有未解決的衝突；此外逐值依據圖完整，每個數值都連到頁面、來源、方法與日期。",
    "p": "同樣通過來源與證據檢查，但逐值依據圖還沒建立。",
    "l": "在現行驗證流程之前寫成。{l} 份中有 {legacyProse} 份的 token 是從內文抄錄，並非實測。請當作起點，而不是事實清單。"
  },
  "regions": {
    "names": {
      "KR": "韓國",
      "TW": "台灣",
      "JP": "日本",
      "CN": "中國"
    },
    "checked": "{date} 檢查",
    "surfaces": "{n} 個頁面"
  },
  "reg3": {
    "h2": "台灣、韓國、日本",
    "intro": "三種輸入法，三個典藏。按下鍵帽，看看收錄了哪些企業。",
    "keyCount": "{n} 家",
    "keyVer": "已驗證 {v} 家",
    "thin": "目前收錄最薄",
    "show": "{r}的已驗證參考",
    "all": "在典藏中查看全部 {n} 家"
  },
  "kb": {
    "label": "已驗證參考的鍵盤。一個鍵代表一家企業，塗上經過驗證的顏色。",
    "cap": "鍵帽：{r}・字重 {w}",
    "rad": "{k} {v}px",
    "radNone": "沒有圓角數值，採預設",
    "wNone": "沒有數值，預設 700"
  },
  "gen": {
    "h2": "看畫面從 DESIGN.md 裡流出來",
    "intro": "AI 助理讀取一家企業的檔案，只用其中的 token 組出範例畫面。換一家企業，同一個畫面立刻換上新樣式。",
    "replay": "重播",
    "m": {
      "css": "計算樣式",
      "both": "計算樣式＋官方文件",
      "doc": "官方文件",
      "live": "即時擷取"
    },
    "asSpec": "依規格的字型：{f}。",
    "absent": "來源未提供",
    "stats": [
      "有依據的數值",
      "頁面",
      "來源・官方",
      "檢查日",
      "下次複查"
    ],
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
    "h2": "交給你的 AI 程式助理",
    "intro": "三個步驟：取得檔案、安裝技能、送出第一句提示詞。",
    "s1h": "取得檔案",
    "s1a": "開啟 Toss 參考頁面 →",
    "s1p": "打開參考頁面，複製或下載 DESIGN.md，也可以直接取得原始檔。放在專案根目錄就可以了。",
    "s2h": "安裝技能（選用）",
    "s2p": "為 Claude Code、Codex、OpenCode 與 Cursor 安裝 OmD 技能。安裝後請重新啟動 AI 助理。",
    "s3h": "送出第一句提示詞",
    "s3p": "對 AI 助理這樣說。Toss 可以換成任何一份參考。",
    "copy": "複製",
    "copied": "已複製",
    "failed": "無法複製"
  },
  "skills": {
    "h2": "前端技能",
    "intro": "npm 套件內含 {skills} 個技能，可以先從這幾個開始。",
    "tag": {
      "pub": "已發布",
      "soon": "即將推出",
      "plan": "規劃中"
    },
    "more": "在 GitHub 查看其餘 {n} 個",
    "items": {
      "init": "推薦適合專案的參考，並準備好等你核准的 DESIGN.md 預覽。",
      "apply": "把 DESIGN.md 當作 UI 工作的品牌依據，從修改元件到「更溫暖一點」這類需求都適用。",
      "feel": "17 個面向、113 條介面手感規則。用數字套用或檢查時間、緩動、44px 觸控範圍與焦點框，每個數字都標明出處等級。",
      "slop": "讀取實際頁面，找出缺乏脈絡、反覆出現的生成式套路：濫用的卡片、漸層與圖示方塊、翻譯腔、空泛的文案，每項都附規則 ID 與行號。",
      "locale": "把韓文原稿改寫給英文、日文、簡體與繁體中文讀者。不是翻譯，而是重排語序、重寫語氣；事實、指令與 URL 保持不變。",
      "humanize": "潤飾產品文件與 UX 文案，讓每種語言都讀起來自然，事實、數字、指令與連結一律不動。",
      "hangul": "給 AI 程式助理的韓文排版規則。換行、字距、行距、字型堆疊、數字格式共 14 條，依據 W3C klreq、KRDS・SEED・TDS 公開文件，以及對 67 個韓國服務的實測。附確定性檢查工具。",
      "shader": "墨跡暈開：讓大型中日韓標題看起來像印在宣紙上的墨。標題仍是可選取的真實文字，由 WebGL2 圖層只加上暈染。",
      "ja": "以 JLREQ 為基礎的日文排版。先查原典，沒有出處的規則不收。",
      "tc": "以 CLREQ 為基礎的繁體中文排版。"
    },
    "names": {
      "hangul": "/hangul",
      "shader": "omd-cjk-type-shader",
      "ja": "日文排版",
      "tc": "繁體中文排版"
    }
  },
  "why": {
    "h2": "和靈感圖庫有什麼不同",
    "intro": "靈感型目錄讓你看到網站長什麼樣子；OmD 記錄的是每一個數值從哪裡來。",
    "items": [
      [
        "出處",
        "已驗證的數值都註明讀取的頁面、方法與日期，每份檔案也訂有下次複查的日期。"
      ],
      [
        "中日韓的深度",
        "典藏中有三分之二是台灣、韓國、日本與中國企業，以原文名稱整理；為這些文字設計的排版技能也在準備中。"
      ],
      [
        "不知道就留白",
        "無法確認的字型不會換成 Inter，而是直接拿掉；沒有人測量過的數值就不寫。"
      ]
    ]
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
        "為什麼有些日本、中國企業顯示成英文字母？",
        "格子裡用的是登錄資料上的企業名稱。像 LINE、pixiv、Alipay 這樣登錄名稱是拉丁字母的，就顯示拉丁字母開頭，而不是自行編出沒人確認過的原文名稱。"
      ],
      [
        "需要付費或 API 金鑰嗎？",
        "CLI 採 MIT 授權，核心工作流程不需要 API 金鑰，推論都在你原本使用的 AI 程式助理裡進行。"
      ]
    ]
  },
  "foot": {
    "tag": "給中日韓介面用的 DESIGN.md 典藏與前端技能。",
    "legal": "MIT 授權。參考中的設計屬於各家企業，整理於此僅供學習與參考。"
  }
};
