# /kana — Japanese UI typefaces: what published sources say (2026-11-21)

Question from the owner: "Is there something in Japan like Pretendard in Korea?" — a free, widely adopted UI face that teams pick by default.

Our own measurement (`../references/measured-jp.md`, 77 Japanese home pages, 2026-11-12) gives the first Japanese face in each site's stack: Hiragino 27, Noto Sans JP 25, Yu Gothic 7, Meiryo 7, LINE Seed JP 1. Not redone here. This file adds what first-party pages say: licence, publisher, weights, and any statement of adoption. All pages opened 2026-11-21 via WebFetch; quotes are short and as extracted.

## Short answer

- **No single Pretendard-like default was found in published sources.** Two patterns appear instead: (1) an OS-font stack (Hiragino on Apple, Yu Gothic / Meiryo on Windows), which needs no licence and no download; (2) Noto Sans JP as the open web font, which the government design system names. The measurement's near-even split (Hiragino 27 vs Noto Sans JP 25) matches this.
- **Pretendard JP:** one first-party statement of use was found, and it is a Korean company's Japanese app (오늘의집 / Ohouse, below). Nothing found shows a Japanese company or design system using Pretendard JP, and our 77-site measurement found none.

## By typeface

| Typeface | Publisher / designer (as stated) | Licence | Weights (as stated) | First-party adoption statement found |
|---|---|---|---|---|
| Noto Sans JP | Google Fonts metadata: designer "Google" | OFL (Google Fonts METADATA.pb: license "OFL") | variable axis 100–900 | **DADS** (デジタル庁デザインシステム), タイポグラフィ, 2026年8月5日更新: 「フォントはオープンソース（SIL Open Font License 1.1）で、かつWebフォントとしても利用可能な「Noto Sans JP」と等幅フォントの「Noto Sans Mono」を採用します。」 and 「なおこれは、OSやデバイスネイティブのシステムフォントの使用を制限するものではありません。」 (already JT-22 in references/rules.md) |
| Hiragino (ヒラギノ角ゴシック / Hiragino Sans) | SCREEN グラフィックソリューションズ | Bundled with macOS (SCREEN: 「macOS にバンドルされているヒラギノフォントのみの情報となります」); licence terms are on a separate SCREEN ライセンス page, not opened | macOS bundle: 「ヒラギノ角ゴシック W0,W1,W2,W3,W4,W5,W6,W7,W8,W9」 plus 「ヒラギノ角ゴ ProN/Pro W3,W6」 (SCREEN, 2024年10月1日更新) | **Ameba Spindle**, UIタイポグラフィ: default stack "Basic Version 2" includes "Hiragino Sans", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, "Yu Gothic Medium" (stack as listed by the extraction), with 「特に理由がない場合はこの指定を利用してください。」 |
| Yu Gothic (游ゴシック) | Microsoft Learn: designer and vendor JIYUKOBO Ltd. | Windows system font; Microsoft Learn links to commercial licensing for redistribution | Light, Regular, Medium, Bold; Yu Gothic UI: Light, Semilight, Regular, Semibold, Bold (Medium and the UI family added in Windows 10 1507) | Spindle stack (above) names "Yu Gothic Medium". |
| Meiryo (メイリオ) | Microsoft Learn: designers C&G Inc., Eiichi Kono, Matthew Carter; vendor Microsoft | Windows system font: 「Download: N/A – Exclusively included with Microsoft products and services where applicable.」 | Meiryo, Bold, Italic, Bold Italic; Meiryo UI (same four) | Spindle stack (above). |
| LINE Seed JP | LY Corporation (Google Fonts metadata date_added "2024-10-07"; LINEヤフー press release gives Google Fonts availability from 2026年1月22日 — both recorded, not reconciled); Google Fonts metadata designer: "LY Corporation, RixFont, Fontworks"; seed.line.me credits Fontworks, Fontrix and LINE CREATIVE CENTER | OFL 1.1 (seed.line.me: "All fonts are released under the SIL Open Font License, Version1.1."; LINEヤフー press release) | 100, 400, 700, 800 (Google Fonts metadata; seed.line.me: Thin, Regular, Bold, ExtraBold) | **LINEヤフー press release, 2026年1月23日**: 「「LINE Seed」は、コミュニケーションアプリ「LINE」など、LINEヤフーのサービスのUIやコミュニケーションに共通する「シンプルさ」と「親しみやすさ」を体現するために設計されたコーポレートフォント」; on Google Fonts from 2026年1月22日. A corporate face for LY's own services, opened to others. |
| M PLUS 1p / M PLUS 2 | Coji Morishita, M+ Fonts Project (mplusfonts.github.io: "DESIGNED BY COJI MORISHITA") | OFL | M PLUS 1p: 100, 300, 400, 500, 700, 800, 900; M PLUS 2: variable 100–900 | None found. (Pretendard's README credits M PLUS 1p as one of Pretendard's sources.) |
| BIZ UDPGothic | Google Fonts metadata designer: "Type Bank Co., Morisawa Inc." | OFL 1.1 (googlefonts/morisawa-biz-ud-gothic: "This Font Software is licensed under the SIL Open Font License, Version 1.1.") | 400, 700 | None found. |
| IBM Plex Sans JP | Google Fonts metadata designer: "Mike Abbink, Bold Monday"; IBM | OFL | 100–700 (seven static weights) | IBM/plex calls Plex "our corporate typeface family"; no Japanese product adoption statement found. |
| Pretendard JP | orioncactus/pretendard; redesign 길형진; based on Inter, Source Han Sans and M PLUS 1p | OFL ("SIL 오픈 폰트 라이선스") | nine weights plus variable | **오늘의집 (Bucketplace) tech blog, 2026-04-17** (Korean): Pretendard is used in the Korean app, and 「일본 서비스에도 디자인 가이드와 일관된 사용자 경험을 제공할 수 있도록 Pretendard JP 폰트를 적용한」; delivered only to Japanese users as a separate module, 「일본 서비스 사용자에게 7.6MB의 용량 추가로」. The Pretendard README's "Pretendard를 사용하는 곳" shows logos of Korean companies only (no adoption text). The Japanese README (docs/ja) returned HTTP 503. |

## Other first-party statements found

- **SmartHR** (design tokens, タイポグラフィ; also read in the prior round, JT-22 in references/rules.md, where the list likewise "did not survive extraction"): relies on OS fonts — 「ユーザーが慣れ親しんでいる環境を尊重し、またOSの設定に委ねることでさまざまな言語で正しくレンダリングされることを期待し、以下の書体を指定します。」 The list that follows was not captured by the fetch (two attempts); which faces it names is not recorded here.
- **Ubie Vitals** (Typography): a commercial Morisawa face — 「通常のテキストには `A P-OTF UD Shin Go Pr6N / M` を、ボールドには `A P-OTF UD Shin Go Pr6N / DB` を用います。」 No fallback stack on the page.
- **Pepabo Inhouse**: typography page URL guessed (/inhouse/foundation/typography/) returned 404; not found.

## What this means for the skill (for the orchestrator; not a rule)

- For a Korean company shipping a Japanese version, the published evidence supports two defensible defaults: the OS stack (Spindle, SmartHR) or Noto Sans JP (DADS). Pretendard JP has one documented use, by a Korean company keeping its Korean design guide in Japan; there is no Japanese-side evidence that it reads as native. Say that plainly rather than recommending it.
- Licences: Noto Sans JP, LINE Seed JP, M PLUS, BIZ UDPGothic, IBM Plex Sans JP and Pretendard JP are OFL per their own pages or Google Fonts metadata. Yu Gothic and Meiryo ship with Windows; Microsoft Learn links to separate commercial licensing "for enterprises, web developers, for hardware & software redistribution or server installations". Hiragino ships with macOS; its licence page was not read. Whether a project may self-host the OS fonts as web fonts is therefore not established here; naming them in a CSS stack uses the copy already on the reader's device.

## Sources opened for this file

- https://raw.githubusercontent.com/google/fonts/main/ofl/notosansjp/METADATA.pb
- https://raw.githubusercontent.com/google/fonts/main/ofl/lineseedjp/METADATA.pb
- https://raw.githubusercontent.com/google/fonts/main/ofl/mplus1p/METADATA.pb
- https://raw.githubusercontent.com/google/fonts/main/ofl/mplus2/METADATA.pb
- https://raw.githubusercontent.com/google/fonts/main/ofl/bizudpgothic/METADATA.pb
- https://raw.githubusercontent.com/google/fonts/main/ofl/ibmplexsansjp/METADATA.pb
- https://github.com/googlefonts/morisawa-biz-ud-gothic
- https://github.com/IBM/plex
- https://mplusfonts.github.io/
- https://seed.line.me/index_jp.html
- https://www.lycorp.co.jp/ja/news/release/020040/
- https://github.com/orioncactus/pretendard
- https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/ja/README.md (HTTP 503)
- https://www.bucketplace.com/post/2026-04-17-멀티-국가-앱에서-pretendard-jp-도입하기/
- https://hiragino.screen.co.jp/support/support-os/macos
- https://learn.microsoft.com/en-us/typography/font-list/yu-gothic
- https://learn.microsoft.com/en-us/typography/font-list/meiryo
- https://design.digital.go.jp/dads/foundations/typography/
- https://spindle.ameba.design/styles/typography/ui/
- https://smarthr.design/products/design-tokens/typography/
- https://vitals.ubie.life/tokens/typography
- https://design.pepabo.com/inhouse/foundation/typography/ (HTTP 404)
- Opened but not useful: https://github.com/notofonts/noto-cjk (no licence or weights in visible text), https://fonts.google.com/specimen/Noto+Sans+JP/about (title only), https://support.apple.com/en-us/120414 (macOS font list; Hiragino not checked in it), https://www.morisawa.co.jp/fonts/specimen/1543 (wrong page: 黎ミンY10).
