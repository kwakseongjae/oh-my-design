/* Landing copy (ja), ported from the approved concept-A prototype
 * (docs/research/2026-10-13-rebrand/a-landing/i18n*.js, rounds 1-5c). Written natively per
 * locale, not converted. Numbers are {placeholders} filled from generated data at build time.
 * Markup allowed in strings: <b>, <code>, <span class="nb"> and &nbsp; &lt; &gt; (see rich.tsx). */
import type { BrandCopy } from "./en";

export const JA: BrandCopy = {
  "htmlLang": "ja",
  "title": "oh-my-design：日中韓の画面のための、実在のデザインシステム",
  "desc": "実在する企業のDESIGN.mdを{total}件。うち{cjk}件が日本・韓国・台湾・中国の企業です。検証済みの値には、読み取ったページが記録されています。",
  "nav": {
    "archive": "アーカイブ",
    "skills": "スキル",
    "docs": "ドキュメント",
    "github": "GitHub",
    "lang": "言語",
    "langTitle": "言語を選ぶ",
    "close": "閉じる",
    "langNames": {"en":"英語", "ko":"韓国語", "ja":"日本語", "zh-tw":"繁体字中国語"},
    "skip": "本文へ移動"
  },
  "hero": {
    "h1": "<span class=\"nb\">日中韓の画面のための、</span><span class=\"nb\">実在のデザインシステム</span>",
    "lede": "実在する企業のDESIGN.mdが{total}件。検証済みの値には、すべて出典があります。",
    "browse": "DESIGN.mdを見る",
    "how": "使い方"
  },
  "status": {
    "v": "検証済み",
    "p": "一部検証",
    "l": "旧版"
  },
  "gen": {
    "h2": "DESIGN.mdから画面になるまで",
    "intro": "企業を選ぶと、同じ画面がその企業のファイルだけで描き直されます。",
    "replay": "もう一度",
    "m": {
      "css": "計算済みスタイル",
      "both": "計算済みスタイル＋公式ドキュメント",
      "doc": "公式ドキュメント",
      "live": "ライブ抽出"
    },
    "asSpec": "指定どおりの書体：{f}",
    "absent": "出典になし",
    "sample": {
      "label": "これらのトークンで組んだサンプル画面",
      "title": "今月の支出",
      "body": "お金の使い道をひと目で確認できます。",
      "card": "最近の記録",
      "rows": [
        "食料品",
        "交通"
      ],
      "cta": "詳細を見る",
      "states": "状態"
    },
    "r5": {
      "pick": "会社",
      "sum": "値{n}個・すべて出典付き",
      "hint": "要素にカーソルを合わせるかタップすると、値の出典が見られます。",
      "missing": "未計測のため中立の既定値で表示：",
      "noFace": "書体の指定がないため、ページの書体で表示しています。",
      "st": {
        "pressed": "押下",
        "hover": "ホバー",
        "focus": "フォーカス"
      },
      "dflt": "未計測・中立の既定値",
      "subF": "{f}：ここでは読み込まないため、ページの書体で表示しています。ブランド書体ではなく、実測で選んだ代替書体でもありません。",
      "disp": "見出し用書体：{d}。",
      "otherDomain": "ボタンとは別の出典ドメイン"
    }
  },
  "use": {
    "h2": "omd CLIではじめる",
    "p": "コマンドひとつで、スキル・サブエージェント・リファレンスカタログがClaude Code、Codex、OpenCodeに入ります。下は空のプロジェクトで実際に出力された内容です。",
    "panel": "ターミナルの出力",
    "note": "oh-my-design-cli {ver}を{date}に空のプロジェクトで実行した実際の出力です。",
    "gap": "{n}行を省略",
    "skills": [
      [
        "omd-init",
        "いちばん近い実在企業のリファレンスからDESIGN.mdを用意します。"
      ],
      [
        "omd-apply",
        "エージェントがUIを変えるたびにDESIGN.mdを適用します。"
      ],
      [
        "omd-feel",
        "数値化した113のインターフェース細部ルールで仕上げ・点検します。"
      ],
      [
        "omd-cjk-type-shader",
        "日中韓の大見出しを、和紙ににじむ墨のように描きます。"
      ]
    ],
    "all": "{skills}個のスキルをすべて見る（GitHub）",
    "copy": "コピー",
    "copied": "コピーしました",
    "failed": "コピーできませんでした"
  },
  "faq": {
    "h2": "よくある質問",
    "items": [
      [
        "DESIGN.mdとは？",
        "製品のデザインシステム（色、書体、角丸、コンポーネント、トーン）を記したMarkdownファイルです。コーディングエージェントがUIを作る前に読みます。"
      ],
      [
        "各社の公式ファイルですか？",
        "いいえ。公開されている製品画面と公式ドキュメントを根拠にOmDが再構成したもので、各ファイルのGovernanceセクションにもそう明記しています。デザインは各社のものであり、ファイルは参考用です。"
      ],
      [
        "CLIは必須ですか？",
        "いいえ。どのリファレンスもコピー・ダウンロードでき、<code>oh-my-design.kr/&lt;id&gt;/design.md</code> から原文を直接取得することもできます。CLIを入れると、Claude Code、Codex、OpenCode、Cursorでこのファイルを適用するスキルが加わります。"
      ],
      [
        "ファイルはどのくらい新しいですか？",
        "検証済みのファイルには、確認日と次回の再確認日が記録されています。たとえばTossは{tossChk}に確認し、{tossNext}に再確認する予定です。"
      ],
      [
        "費用やAPIキーは必要ですか？",
        "CLIはMITライセンスで、主要なワークフローにAPIキーは不要です。推論はお使いのコーディングエージェントの中で行われます。"
      ]
    ]
  },
  "foot": {
    "tag": "日中韓の画面のためのDESIGN.mdアーカイブとフロントエンドスキル",
    "legal": "MITライセンス。リファレンスのデザインは各社に帰属し、学習・参考のために掲載しています。",
    "marks": "ロゴは各社の商標です。参考として表示しています。"
  }
};
