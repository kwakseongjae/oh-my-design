---
id: kakao
name: Kakao
country: KR
category: consumer-tech
homepage: "https://www.kakao.com"
primary_color: "#fee500"
logo:
  type: simpleicons
  slug: kakaotalk
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  components_harvested: true
  colors:
    primary: "#fee500"
    marketing-yellow: "#fae100"
    unread: "#faeb00"
    base: "#1e1e1e"
    canvas: "#ffffff"
    error: "#e02000"
    link: "#2196f3"
    success: "#47b881"
    warning: "#ff9800"
    text-primary: "#222222"
    text-standard: "#333333"
    text-secondary: "#666666"
    text-muted: "#808080"
    text-light: "#999999"
    text-lightest: "#bbbbbb"
    surface-elevated: "#f8f8f8"
    surface-fill: "#f0f0f0"
    border: "#e5e5e5"
    footer-fill: "#eeeeee"
    dark-pill: "#111111"
    on-primary: "#000000"
  typography:
    family: { sans: "-apple-system", mono: "SF Mono" }
    display-hero:  { size: 36, weight: 800, lineHeight: 1.25, use: "Splash screens, marketing — Kakao Big Sans" }
    display-large: { size: 28, weight: 700, lineHeight: 1.30, use: "Service section titles — Kakao Big Sans" }
    heading-large: { size: 22, weight: 700, lineHeight: 1.36, use: "Screen titles, major sections" }
    heading:       { size: 20, weight: 600, lineHeight: 1.40, use: "Navigation titles, modal headers" }
    title:         { size: 18, weight: 600, lineHeight: 1.44, use: "Friend names, chat room titles" }
    body:          { size: 16, weight: 400, lineHeight: 1.50, use: "Chat messages, descriptions" }
    body-small:    { size: 14, weight: 400, lineHeight: 1.57, use: "Secondary info, metadata" }
    caption:       { size: 13, weight: 400, lineHeight: 1.54, use: "Timestamps, status text" }
    caption-small: { size: 12, weight: 400, lineHeight: 1.50, use: "Fine print, badges" }
    micro:         { size: 11, weight: 400, lineHeight: 1.45, use: "Tab bar text, smallest labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32, section: 48 }
  rounded: { sm: 4, md: 12, lg: 20, full: 9999 }
  shadow:
    minimal: "0px 1px 3px rgba(0,0,0,0.04)"
    subtle: "0px 2px 6px rgba(0,0,0,0.08)"
    elevated: "0px 4px 12px rgba(0,0,0,0.12)"
  components:
    button-login: { type: button, bg: "#fee500", fg: "#000000", radius: 12, padding: "12px 20px", font: "16px/600", use: "Kakao Login compliance-mandated CTA" }
    button-marketing-pill: { type: button, bg: "#fae100", fg: "#000000", radius: 16, padding: "7px 13px", font: "13px/700", use: "Brand marketing CTA, bordered yellow pill" }
    button-dark-pill: { type: button, bg: "#111111", fg: "#ffffff", radius: 16, padding: "7px 8px", font: "13px/700", use: "Marketing CTA paired with yellow pill" }
    button-nav-pill: { type: button, bg: "#ffffff", fg: "#000000", radius: 9999, padding: "3px 14px", font: "16px/700", use: "Top-nav active item" }
    button-secondary: { type: button, bg: "transparent", fg: "#333333", radius: 12, padding: "12px 20px", font: "16px/600", use: "Secondary outline action" }
    button-footer-pill: { type: button, bg: "#eeeeee", fg: "#000000", radius: 24, padding: "10px 20px", font: "12px/400", use: "Footer link pill" }
    button-danger: { type: button, bg: "#e02000", fg: "#ffffff", radius: 12, padding: "12px 20px", font: "16px/600", use: "Destructive actions" }
    input-default: { type: input, bg: "#ffffff", fg: "#222222", radius: 12, padding: "12px 16px", font: "16px/400", use: "Form fields" }
    input-chat: { type: input, bg: "#f0f0f0", fg: "#222222", radius: 20, padding: "10px 16px", font: "16px/400", use: "Chat composer" }
    input-search: { type: input, bg: "#f0f0f0", fg: "#222222", radius: 20, padding: "10px 16px 10px 40px", font: "14px/400", use: "Search bar" }
    card-standard: { type: card, bg: "#ffffff", radius: 12, padding: "16px", use: "Most surfaces — barely-there shadow" }
    card-bordered: { type: card, bg: "#ffffff", radius: 12, padding: "16px", use: "Inline content cards, 1px border" }
    bubble-mine: { type: card, bg: "#fee500", fg: "#333333", radius: 18, padding: "8px 12px", font: "14px/400", use: "Outgoing chat bubble, asymmetric 9-patch" }
    bubble-other: { type: card, bg: "#ffffff", fg: "#333333", radius: 18, padding: "8px 12px", font: "14px/400", use: "Incoming chat bubble" }
    bubble-system: { type: card, bg: "#f0f0f0", fg: "#999999", radius: 9999, padding: "4px 12px", font: "12px/400", use: "System notice in chat" }
    badge-notification: { type: badge, bg: "#e02000", fg: "#ffffff", radius: 9999, padding: "2px 6px", font: "11px/700", use: "Unread count" }
    badge-tag: { type: badge, bg: "#f0f0f0", fg: "#666666", radius: 4, padding: "2px 6px", font: "11px/500", use: "Generic metadata tag" }
    tab-top: { type: tab, bg: "#ffffff", fg: "#999999", padding: "12px 16px", font: "14px/600", active: "#333333 text + 2px bottom border #333333", use: "Top tab bar" }
    listItem-friend: { type: listItem, fg: "#222222", padding: "0 16px", use: "Friend list row, 64px height, 48px rounded-square avatar" }
---

# Design System Inspiration of Kakao (카카오)

## 1. Visual Theme & Atmosphere

Kakao is the connective tissue of Korean digital life -- KakaoTalk is on virtually every smartphone in the country, and the iconic yellow is as recognizable as any global tech brand's signature. The interface presents a clean, functional canvas where conversations take center stage, accented by that unmistakable Kakao Yellow (`#FEE500`) that radiates warmth and friendliness. This isn't the cautious, muted yellow of enterprise warnings; it's full-saturation sunshine that feels like a friend's smile.

The design philosophy is "모든 연결의 시작" (The Beginning of All Connections). Every decision serves communication -- the interface should be invisible enough that conversations flow naturally, yet distinctive enough that users feel at home. KakaoTalk's chat bubbles are the defining UI element: warm yellow for your messages, clean white for others', creating an instantly legible visual language that has become the standard mental model for messaging in Korea.

Typography is deliberately neutral -- system fonts (San Francisco on iOS, Roboto on Android) so messages feel personal, not branded. When personality is needed, the custom **Kakao Font** steps in: Big Sans for confident headlines, Small Sans for legible small-screen details. The overall aesthetic is flat, warm, and content-forward. Minimal shadows, minimal gradients, strong color coding through yellow and clean neutrals.

**Key Characteristics:**
- Kakao Yellow (`#FEE500`) as the singular brand accent -- pure sunshine
- System font stack for conversations -- messages feel personal, not designed
- Kakao Font (Big Sans + Small Sans) for brand display moments (OFL open-source)
- Chat bubble-centric UI: yellow for self, white for others -- the defining pattern
- Flat design with minimal shadow -- depth through background color layering, not elevation
- Near-black (`#1E1E1E`) brand base instead of pure black -- subtle warmth
- 12px border-radius as the universal standard for interactive elements
- 9-patch chat bubble system for pixel-perfect messaging UI

## 2. Color Palette & Roles

### Primary
- **Kakao Yellow** (`#FEE500`): Primary brand color, login button, send button, CTA accent. Compliance-mandated for Kakao Login. The iconic color.
- **Near Black** (`#1E1E1E`): Brand base color (Pantone 433 C). Wordmark, symbol, primary text in corporate contexts.
- **Pure White** (`#ffffff`): Chat background, card surfaces, other-person chat bubbles.

### Chat-Specific
- **My Bubble** (`#FEE500`): Yellow -- your messages are sunshine.
- **Other's Bubble** (`#ffffff`): Clean white with subtle `#E5E5E5` border.
- **System Message** (`#F0F0F0`): Date dividers, join/leave notices.
- **Unread Count** (`#FAEB00`): Yellow text on unread badge -- draws attention.

### Semantic
- **Error Red** (`#E02000`): Error messages, destructive actions, critical alerts.
- **Link Blue** (`#2196F3`): Hyperlinks within chat and content.
- **Success Green** (`#47B881`): Completion states, verified status.
- **Warning Orange** (`#FF9800`): Attention-needed states.

### Neutral Scale
- **Text Primary** (`#222222`): Friend names, chat titles, strong labels.
- **Text Standard** (`#333333`): Chat messages, body text, action bar titles. The workhorse.
- **Text Secondary** (`#666666`): Secondary labels, descriptions.
- **Text Muted** (`#808080`): Status messages, placeholder-level text.
- **Text Light** (`#999999`): Captions, timestamps, system messages.
- **Text Lightest** (`#BBBBBB`): Disabled text, hint text.

### Surface & Borders
- **Surface Elevated** (`#F8F8F8`): Subtle elevation through background shift.
- **Surface Fill** (`#F0F0F0`): Secondary surfaces, search bars, disabled fields.
- **Border Default** (`#E5E5E5`): Standard borders, dividers, input outlines.
- **Border Subtle** (`#F0F0F0`): Lightest borders, subtle separation.
- **Overlay** (`rgba(0,0,0,0.4)`): Modal backdrops -- lighter than most systems, keeping context visible.

## 3. Typography Rules

### Font Family
- **UI Primary**: `-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Roboto, "Noto Sans KR", "Malgun Gothic", sans-serif`
- **Monospace**: `"SF Mono", SFMono-Regular, Menlo, Consolas, monospace`
- **Brand Display**: `"Kakao Big Sans"` -- confident headlines, promotional banners
- **Brand Body**: `"Kakao Small Sans"` -- legible small-screen brand text

Kakao Font is open-source (OFL-1.1) on GitHub. Big Sans has Regular/Bold/ExtraBold weights, Small Sans has Light/Regular/Bold. Both support full Hangul (11,172 characters).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Kakao Big Sans | 36px | 800 | 1.25 | normal | Splash screens, marketing |
| Display Large | Kakao Big Sans | 28px | 700 | 1.30 | normal | Service section titles |
| Heading Large | System | 22px | 700 | 1.36 | normal | Screen titles, major sections |
| Heading | System | 20px | 600 | 1.40 | normal | Navigation titles, modal headers |
| Title | System | 18px | 600 | 1.44 | normal | Friend names, chat room titles |
| Body | System | 16px | 400 | 1.50 | normal | Chat messages, descriptions |
| Body Small | System | 14px | 400 | 1.57 | normal | Secondary info, metadata |
| Caption | System | 13px | 400 | 1.54 | normal | Timestamps, status text |
| Caption Small | System | 12px | 400 | 1.50 | normal | Fine print, badges |
| Micro | System | 11px | 400 | 1.45 | normal | Tab bar text, smallest labels |

### Principles
- **System fonts for trust**: Custom fonts would make conversations feel "designed" rather than personal. Messages should feel like YOUR messages.
- **Kakao Font for brand**: When the brand speaks (promotions, onboarding, empty states), Big Sans adds personality. When users speak, the system font stays neutral.
- **Weight restraint**: Most UI uses 400-500 weight. Bold (700) only for names, titles, amounts. Chat-heavy apps need typographic calm, not emphasis competition.

## 4. Component Stylings

### Buttons

Kakao surfaces use two yellows: `#FEE500` for the Kakao Login compliance button (mandated by Kakao Developers) and `#fae100` for marketing CTAs (verified at kakaocorp.com). Bordered (2px solid black) buttons are a distinctive Kakao marketing pattern.

**Kakao Login (Compliance-Mandated)**
- Background: `#FEE500`
- Text: `#000000`
- Border: none
- Radius: 12px
- Padding: 12px 20px
- Font: 16px / 600 / KakaoSmall
- Disabled: opacity 0.5
- Use: Kakao Login integration — specs are non-negotiable per Kakao Developers (do not modify color, text, or icon)

**Marketing Pill (Bordered)**
- Background: `#fae100`
- Text: `#000000`
- Border: 2px solid `#000000`
- Radius: 16px
- Padding: 7px 13px
- Font: 13px / 700 / KakaoSmall
- Use: Brand marketing CTA on kakaocorp.com (카카오톡 다운로드) — bordered yellow pill is the signature shape

**Dark Marketing Pill (Bordered)**
- Background: `#111111`
- Text: `#ffffff`
- Border: 2px solid `#ffffff`
- Radius: 16px
- Padding: 7px 8px
- Font: 13px / 700 / KakaoSmall
- Use: Marketing CTA paired with the yellow Marketing Pill (Kanana, sub-brands)

**Nav Pill**
- Background: `#ffffff`
- Text: `#000000`
- Border: none
- Radius: 999px
- Padding: 3px 14px
- Font: 16px / 700 / KakaoBig
- Use: Top-nav active item (소개, 카카오 문화) — full-pill rounded, KakaoBig display weight

**Secondary (Outline)**
- Background: transparent
- Text: `#333333`
- Border: 1px solid `#E5E5E5`
- Radius: 12px
- Padding: 12px 20px
- Font: 16px / 600 / KakaoSmall
- Use: Secondary action in product UI (취소, 더보기)

**Footer Link Pill**
- Background: `#eeeeee`
- Text: `#000000`
- Border: none
- Radius: 24px
- Padding: 10px 20px
- Font: 12px / 400 / KakaoSmall
- Use: Footer link/관련사이트 (verified at kakaocorp.com)

**Danger**
- Background: `#E02000`
- Text: `#ffffff`
- Border: none
- Radius: 12px
- Padding: 12px 20px
- Font: 16px / 600 / KakaoSmall
- Use: Destructive actions (삭제, 차단)

### Inputs

**Default**
- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#E5E5E5`
- Radius: 12px
- Padding: 12px 16px
- Font: 16px / 400 / Apple SD Gothic Neo
- Placeholder: `#BBBBBB`
- Focus: border changes to `#333333`
- Use: Form fields (login, profile edit, signup)

**Chat Input**
- Background: `#F0F0F0`
- Text: `#222222`
- Border: none
- Radius: 20px
- Padding: 10px 16px
- Font: 16px / 400 / Apple SD Gothic Neo
- Placeholder: `#BBBBBB`
- Use: Chat composer at bottom of conversation

**Search**
- Background: `#F0F0F0`
- Text: `#222222`
- Border: none
- Radius: 20px
- Padding: 10px 16px 10px 40px
- Font: 14px / 400 / Apple SD Gothic Neo
- Placeholder: `#999999`
- Use: Search bar (friends, chat history) — left-icon at `#999999`

### Cards

**Standard**
- Background: `#ffffff`
- Border: none
- Radius: 12px
- Padding: 16px
- Shadow: `0px 1px 3px rgba(0,0,0,0.04)`
- Use: Most surfaces — Kakao is intentionally flat, shadows are barely-there

**Bordered**
- Background: `#ffffff`
- Border: 1px solid `#E5E5E5`
- Radius: 12px
- Padding: 16px
- Shadow: none
- Use: Inline cards on content surfaces where shadow would clash

**My Message (Chat Bubble)**
- Background: `#FEE500`
- Text: `#333333`
- Border: none
- Radius: 18px 4px 18px 18px
- Padding: 8px 12px
- Font: 14px / 400 / Apple SD Gothic Neo
- Use: Sender's outgoing chat bubble (right-aligned) — asymmetric 9-patch radius

**Other's Message (Chat Bubble)**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#E5E5E5`
- Radius: 4px 18px 18px 18px
- Padding: 8px 12px
- Font: 14px / 400 / Apple SD Gothic Neo
- Use: Counterparty's incoming chat bubble (left-aligned)

**System Message (Chat Bubble)**
- Background: `#F0F0F0`
- Text: `#999999`
- Border: none
- Radius: 9999px
- Padding: 4px 12px
- Font: 12px / 400 / Apple SD Gothic Neo
- Use: System notice in chat ("친구가 입장했습니다")

### Badges

**Notification Dot**
- Background: `#E02000`
- Text: `#ffffff`
- Border: none
- Radius: 9999px
- Padding: 2px 6px
- Font: 11px / 700 / Apple SD Gothic Neo
- Use: Unread count on tab/list (caps to "99+" past 99)

**Tag (Default)**
- Background: `#F0F0F0`
- Text: `#666666`
- Border: none
- Radius: 4px
- Padding: 2px 6px
- Font: 11px / 500 / Apple SD Gothic Neo
- Use: Generic metadata tag (channel/category)

### Tabs

**Top Tab**
- Background: `#ffffff`
- Text: `#999999`
- Border: 1px solid `#E5E5E5`
- Active: `#333333` text + 2px solid `#333333` bottom border
- Padding: 12px 16px
- Font: 14px / 600 / Apple SD Gothic Neo
- Use: Tab bar — 4 equal tabs, 44px height

### List items

**Friend List Item**
- Text: `#222222`
- Use: Friend list row — avatar 48px rounded square (12px radius — KakaoTalk uses rounded squares, not circles), name 16px weight 500 `#222222`, status 14px weight 400 `#808080` single-line ellipsis. Row height 64px, horizontal padding 16px.

---

**Verified:** 2026-05-08
**Tier 1 sources:** kakaocorp.com (live DOM via playwright — Marketing Pill `#FAE100` / `#000000` / 16px / 7×13/30 / 13px·700·32px ✓; Dark Marketing Pill `#111111` 16px ✓; Nav Pill `#ffffff` / `#000000` / 999px / 3×14 / 16px·700·36px ✓; Footer Link Pill `#eeeeee` / 24px / 12px·400·40px ✓; KakaoTalk compliance Login button `#FEE500` retained per Kakao Developers requirement)
**Tier 2 sources:** styles.refero.design — no record (?q=Kakao returns 0 brand match). getdesign.md/kakao — no record.
**Tier 2b status:** unavailable; Tier 1 (kakaocorp.com live inspect) treated as authoritative.
**Conflicts unresolved:** none. The dual-yellow split (`#FEE500` compliance vs `#FAE100` marketing) is verified against both Kakao Developers docs and the live kakaocorp.com DOM.

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px
- Horizontal screen padding: 16px
- Chat message gap (same sender): 4px, (different sender): 16px
- List item vertical padding: 12px

### Grid & Container
- Mobile: full-width, 16px horizontal padding
- Chat messages: left-aligned (others) or right-aligned (self) with 16px margins
- Friend list: single-column, full-width items
- Grid menu (More tab): 3-4 column icon grid

### Whitespace Philosophy
- **Conversation-optimized**: Message bubbles are compact but well-separated between senders. Maximize visible messages while maintaining clear attribution.
- **List efficiency**: Friend/chat lists prioritize density -- 64px rows show avatar + name + status in a scannable format.
- **Flat layering**: Instead of shadows, Kakao uses background color shifts (`#ffffff` → `#F0F0F0` → `#E5E5E5`) for visual hierarchy. Lightweight, fast-rendering.

### Border Radius Scale
- Standard (12px): Buttons, cards, avatars (rounded square), inputs, login button
- Rounded (20px): Search bars, rounded containers
- Pill (9999px): System message bubbles, notification badges
- Chat bubble: asymmetric via 9-patch assets

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Primary — most elements. Chat bubbles, list items, cards |
| Minimal (Level 1) | `0px 1px 3px rgba(0,0,0,0.04)` | Rare — floating action button, keyboard toolbar |
| Subtle (Level 2) | `0px 2px 6px rgba(0,0,0,0.08)` | Popovers, dropdown menus |
| Elevated (Level 3) | `0px 4px 12px rgba(0,0,0,0.12)` | Bottom sheets, modal dialogs |

**Shadow Philosophy**: Kakao is intentionally one of the flattest major design systems in production. Depth is communicated almost entirely through background color differentiation and border lines, not shadow elevation. This serves two purposes: performance on the millions of low-to-mid-range devices KakaoTalk targets, and aesthetic -- a messaging app should feel like a clean sheet of paper, not floating cards.

## 7. Do's and Don'ts

### Do
- Use Kakao Yellow (`#FEE500`) as the primary brand accent
- Follow Kakao Login button specs exactly -- they are compliance-mandated
- Use system fonts for all conversational/functional UI
- Use 12px border-radius as the standard for most interactive elements
- Keep the interface flat -- rely on background color, not shadows, for depth
- Use yellow bubbles for self-messages, white for others -- the universal Kakao pattern
- Use rounded squares (12px radius) for KakaoTalk-style avatars

### Don't
- Don't modify Kakao Login button colors, radius, or proportions
- Don't use heavy shadows -- Kakao is one of the flattest design systems in production
- Don't use yellow for text on white backgrounds -- contrast ratio is insufficient
- Don't use pure black (`#000000`) for text -- use `#222222` or `#333333` for warmth
- Don't override system fonts in chat contexts -- messages should feel personal
- Don't use rounded circles for KakaoTalk avatars -- they use 12px rounded squares
- Don't add gradient or 3D effects to brand elements -- strictly prohibited

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (Primary) | <480px | Full design fidelity, KakaoTalk native layout |
| Tablet | 480-768px | Side panel for chat list + detail |
| Desktop | >768px | Fixed sidebar + chat panel + optional right panel |

### Touch Targets
- Chat bubble: entire bubble tappable for context menu
- Friend list items: 64px row height, full-width tappable
- Tab bar items: 56px height, evenly distributed
- Send button: 36px minimum, right side of input bar

### Collapsing Strategy
- Desktop: multi-column (chat list | conversation | info panel)
- Tablet: 2-column (chat list | conversation)
- Mobile: single screen with navigation between views
- Chat input: always bottom-fixed with safe area handling

### Image Behavior
- Chat photos: grid layout (1/2/3+ images), 8px rounded corners
- Profile avatars: 48px in lists, 80-100px in profile view, rounded square (12px)
- Stickers/Emoticons: centered in bubble area, 120-200px display

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Kakao Yellow (`#FEE500`)
- CTA Text: Near Black (`#333333`) -- NOT white on yellow
- Background: Pure White (`#ffffff`)
- Background Fill: Light Gray (`#F0F0F0`)
- Heading text: Dark (`#222222`)
- Body text: Charcoal (`#333333`)
- Secondary text: Gray (`#666666`)
- Caption text: Muted (`#999999`)
- Placeholder: Light (`#BBBBBB`)
- Border: Soft Gray (`#E5E5E5`)
- My Bubble: Kakao Yellow (`#FEE500`)
- Other Bubble: White (`#ffffff`)
- Link: Blue (`#2196F3`)
- Error: Red (`#E02000`)

### Example Component Prompts
- "Create a KakaoTalk chat screen: white bg. My messages: right-aligned #FEE500 bubbles, #333333 text 16px, timestamp below #999999 12px. Others: left-aligned, 36px circle avatar, 12px sender name #666666 above white bubble with #E5E5E5 border."
- "Build a Kakao Login button: #FEE500 bg, 12px radius. Left: black chat bubble icon. Center: '카카오 로그인' in #000000 at 85% opacity. Full-width, 16px margin."
- "Design a friend list: white bg, 16px h-padding. Each row: 48px rounded-square avatar (12px radius) + 12px gap + name (16px weight 500, #222222) over status (14px weight 400, #808080, ellipsis). 64px row height. Divider: 1px #F0F0F0."
- "Create a tab bar: white bg, 44px height, 4 tabs. Active: #333333 text (14px weight 600) + 2px bottom border. Inactive: #999999 text."
- "Design a chat input bar: #F0F0F0 bg, 20px radius, 40px height. Left: plus button 36px #999999. Right: send button #FEE500 bg 36px circle. Text input #222222, placeholder #BBBBBB '메시지 보내기'. Bottom-fixed with safe area."

### Iteration Guide
1. System fonts for ALL functional UI -- Kakao Font for brand/marketing only
2. Primary yellow is `#FEE500` -- text ON yellow is `#333333` (never white)
3. Chat bubbles are the visual DNA: yellow = self, white = other, pill = system
4. 12px is THE border-radius -- buttons, cards, avatars, login, all 12px
5. Flat design: no shadows on chat bubbles, minimal elsewhere, depth via background color
6. Gray hierarchy: #222222 → #333333 → #666666 → #808080 → #999999 → #BBBBBB
7. Kakao Login specs are non-negotiable compliance requirements

## 10. Voice & Tone

Kakao's voice is **친근하고 일상적이며 따뜻한 (familiar, everyday, warm)** — the language of a friend explaining something, not a corporation announcing something. The phrase that anchors the company brand on kakaocorp.com is *"나의 세계를 바꾸는 카카오"* (Kakao that transforms my world), which sets the register: personal scale ("나의"), present-tense action ("바꾸는"), product-as-companion. The product surfaces extend this — system messages in KakaoTalk read as observations rather than alerts ("친구가 입장했습니다"), and onboarding microcopy uses the polite-conversational `해요체` rather than `합니다체`.

| Context | Tone |
|---|---|
| 시스템 메시지 (chat) | 관찰형 단문. "OOO님이 들어왔습니다." 사실 묘사, 감정 부재 |
| CTA / 버튼 | 동사+명사 혹은 동사 단독, 짧게. "보내기", "친구 추가하기", "확인" |
| 에러 (네트워크/인증) | 구체적 원인 + 즉시 행동 가능한 한 줄. "다시 시도해주세요"는 마지막 fallback |
| 약관 / 정책 | 격식체 (`-합니다`) — 법무성 명확함이 우선 |
| 프로모션 / 마케팅 | 짧은 카피, 종결어미 다양화 ("받아요!", "지금 시작") |
| 빈 상태 (Empty) | 다음 행동 1개를 제시. 위로하지 않음 ("친구를 추가하면 대화를 시작할 수 있어요") |
| 성공 확인 | 토스트 1초, 짧은 확인 — 축하 이모지·과한 메시지 금지 |

**Voice samples**
- 카카오 로그인 버튼 라벨: *"카카오 계정으로 로그인"* <!-- verified: developers.kakao.com Kakao Login docs (2026-05) -->
- 친구 추가 화면 빈 상태: *"친구가 없어요. 추천 친구를 살펴보세요."* <!-- illustrative: not verified as live KakaoTalk copy -->
- 네트워크 오류: *"연결이 불안정해요. Wi-Fi를 확인해주세요."* <!-- illustrative -->

**Forbidden phrases.** "혁신", "최고의" 같은 마케팅 superlative (kakaocorp.com 어디에도 안 보임). 영어 원문 그대로 (Get Started → "시작하기"로 번역). 명령형 (`-해라`). 이모지 in product chrome (스티커/이모티콘은 콘텐츠라 OK, UI 텍스트엔 금지).

## 11. Brand Narrative

Kakao는 **2006년 11월 29일** 김범수(Brian Kim, 前 NHN 임원)와 이제범 공동창업으로 **iWilab(아이위랩)** 으로 출발했다 — Mountain View 실리콘밸리의 한국 창업가 인큐베이터를 모태로 한국에 설립 ([Kim Beom-soo — Wikipedia](https://en.wikipedia.org/wiki/Kim_Beom-soo_(businessman)), [PortersFiveForce — Kakao Brief History](https://portersfiveforce.com/blogs/brief-history/kakaocorp)). **카카오톡 출시(2010-03)** 가 한국 모바일 인터넷의 분기점 — 90% 스마트폰 침투율의 메신저 인프라가 됐다. 첫 흑자 $42M(2012), 100M 누적가입자 돌파(2013), **2014-10 다음(Daum)과 합병** 'Daum Kakao'(2015 Kakao로 재브랜딩) — 김범수는 22.2% 최대주주가 됐다 ([Kakao — Wikipedia](https://en.wikipedia.org/wiki/Kakao)). 회사는 통신·결제·모빌리티·콘텐츠로 확장하면서도 *"사람과 세상을 연결한다"* 는 단일 명제를 brand positioning의 중심으로 유지한다. 공식 brand 페이지(kakaocorp.com)에 노출되는 문구 *"그 어떤 목소리도 소외되지 않도록"* 은 inclusivity를 명시적 design constraint로 못박는다 — 글꼴 크기·접근성·다국어 등 미시 결정의 윗단 origin.

2024-2025년의 **카나나(Kanana)** AI 브랜드 launch는 *"나에게 가장 가까운, 가장 쉬운 AI"* 로 캐치프레이즈 — 여전히 `나의 / 가까운 / 쉬운` 의 personal·proximity·simplicity 삼각형이다. 즉 brand evolution은 있어도 voice의 핵심은 "1인칭, 친근, 단순"으로 일관.

What Kakao refuses: corporate 거리감, 기능 자랑, 영어 원문 노출. What it embraces: KakaoTalk 노란 색의 일관성(15년 동일), 한국 텍스트 우선, 시스템 폰트 (KakaoFont는 marketing 한정), 챗 거품의 시각 DNA.

## 12. Principles

1. **Familiar over impressive.** 사용자가 "어, 이거 그냥 친구한테 말하듯 쓰면 되네"라고 느껴야 한다. *UI implication:* 마이크로카피는 `해요체`, 동사 단독, ≤8 글자 우선.
2. **Connection is the product.** 모든 surface는 "사람-사람" 또는 "사람-서비스" 연결이라는 1차 목적을 지운다. *UI implication:* 친구·메시지·전송·통화 entry는 main nav에서 ≤2 tap 이내.
3. **Inclusivity is a constraint, not a value.** *"그 어떤 목소리도 소외되지 않도록"* 은 슬로건이 아니라 색상 contrast·글자 크기·다국어·접근성 라벨의 mandatory check. *UI implication:* 모든 interactive element WCAG AA 이상, 글자 14px 미만은 정보 보조 용도로만.
4. **Yellow is sacred.** `#FEE500` Kakao Login은 Kakao Developers compliance 사항으로 **변경 불가** — 색상·텍스트·아이콘 전부 spec 그대로. *UI implication:* 로그인 버튼 = 제3의 design choice 영역 아님. 비-compliance 마케팅 yellow는 `#FAE100` 분리 토큰.
5. **Korean text first.** UI 텍스트는 한글이 우선이며 영어는 보조. 폰트 매트릭(line-height, letter-spacing)도 한글 기준으로 튜닝됨. *UI implication:* 영어 placeholder를 한글로 의역, 글자 가운데정렬은 한글이 짧을 때만.

## 13. Personas

*Personas are fictional archetypes informed by publicly described KakaoTalk user segments (universal Korean adult population, small-business owners, content creators), not individual people.*

**김지영, 38, 서울.** 마케팅 회사 팀장. KakaoTalk으로 가족·동료·거래처 모두 소통. 페르소나라기엔 너무 평범한 게 핵심 — Kakao 디자인의 성공은 "이 사람이 친구의 카톡과 회사 거래처 카톡을 같은 앱에서 안 헷갈리게" 만드는 것.

**이용운, 56, 부산.** 식당 운영. 카카오 비즈니스(고객 응대), 카카오페이(결제), 카카오맵(위치)을 매일 쓴다. 새로운 기능을 자발적으로 탐색하지 않으며, 기능이 *조용히* 추가되어 *우연히* 발견되는 패턴이 가장 잘 맞는다.

**박서연, 22, 대전.** 대학생, 이모티콘 스토어 즐겨 사용. 친구들과 채팅의 대부분을 이모티콘으로 한다 — 감정의 미세 조정을 텍스트가 아닌 그림으로. Kakao가 글꼴·이모티콘·스티커를 콘텐츠 카테고리로 격상시킨 게 이 페르소나의 일상에 깊이 박혀 있음.

## 14. States

| State | Treatment |
|---|---|
| **Empty (친구 목록)** | 16px Apple SD Gothic Neo, `#222222` "친구가 없어요." + 14px `#666666` "추천 친구를 살펴보세요." + 카카오 옐로우 텍스트 링크 1개. 일러스트 없음 (Kakao Empty는 일관되게 텍스트만) |
| **Empty (대화 없음)** | 시스템 메시지 톤. "아직 메시지가 없어요" 14px `#999999`. 추천 행동 없음 — 첫 메시지를 입력하면 자연히 채워지므로 |
| **Loading (친구 목록 새로고침)** | Pull-to-refresh 시 카카오 옐로우 dot 3개 progressive loader. Native iOS/Android 인디케이터 그대로 |
| **Loading (이미지)** | `#F0F0F0` skeleton 박스, 8px radius (이미지 grid radius와 일치). 시머 없음 |
| **Error (네트워크)** | Toast 상단, `#E02000` 배경 white text, "연결이 불안정해요. Wi-Fi를 확인해주세요." 자동 dismiss 4s |
| **Error (메시지 발송 실패)** | 메시지 옆 빨간 ! 아이콘 + 길게 누르면 "다시 보내기 / 삭제" 메뉴. 메시지 자체는 yellow bubble 유지 |
| **Success (메시지 전송)** | 보낸 직후 옅은 회색 시계 → 한 사람 읽으면 회색 1, 모두 읽으면 표시 사라짐. 토스트 없음 — 메시지 자체가 confirmation |
| **Success (결제)** | 별도 모달 — 카카오페이 노란 체크 마크, 지불 액수 큰 글씨, "확인" CTA. 0.6초 spring scale 애니메이션 |
| **Skeleton (대화 목록)** | 64px row 그대로 사용, 텍스트 영역만 `#F0F0F0` 박스. 아바타 자리도 동일한 12px rounded square skeleton |
| **Disabled** | 버튼 opacity 0.4, 배경·텍스트 색조 그대로 — Kakao yellow disabled는 `#DEE2E6` `#ADB5BD`로 *바뀜* (위 §4 기재) |
| **Loading (긴 작업: 백업)** | 진행률 % + "약 N분 남음" 라벨. 카카오 옐로우 progress bar |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | 토글 / 체크박스 즉시 |
| `motion-fast` | 150ms | 버튼 active 피드백, hover |
| `motion-standard` | 250ms | 모달 / 시트 enter / exit |
| `motion-message` | 300ms | 채팅 메시지 fade-in (yellow bubble 등장) |
| `motion-spring` | variable | pull-to-refresh, 친구 추가 콜백 |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | 메시지·시트 등장 |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | 모달 dismiss |
| `ease-spring` | spring (mass 1, stiffness 380) | 결제 confirm scale, 친구 추가 callback |

**Motion rules.**
1. 메시지 거품은 **항상** spring scale (0.95 → 1.0)로 등장 — Kakao 채팅의 시그니처 모션
2. 노란 색조에 색상 transition 사용 금지 — `#FEE500` 은 binary on/off, 중간색 사용 시 brand 인지도 하락
3. `prefers-reduced-motion: reduce` 시 모든 spring → 즉시 fade. 채팅 거품도 spring 제거하고 100ms fade-in
4. 토스트는 항상 상단(notch 아래) 등장 — 하단은 채팅 input과 충돌

---

**Verified:** 2026-05-08
**Tier 1 sources (Philosophy):** kakaocorp.com (mission/vision quotes "나의 세계를 바꾸는 카카오", "그 어떤 목소리도 소외되지 않도록"), developers.kakao.com (Kakao Login compliance spec for §12 Principle 4)
**Tier 2 sources:** none independent — Kakao brand narrative is primarily self-published. Voice samples marked `illustrative` are derived patterns from Kakao chat surfaces, not verbatim live UI text.
**Style ref for tone:** `toss` (한국어 페르소나 어조 일관성).
**Conflicts unresolved:** none.
