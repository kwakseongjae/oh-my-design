---
omd: 0.1
brand: Kakao
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

**Kakao Login (Compliance-Mandated)**
- Background: `#FEE500` (mandatory, do not modify)
- Text: `#000000` at 85% opacity (mandatory)
- Icon: Kakao chat bubble in `#000000` (mandatory)
- Radius: 12px (mandatory)
- Use: Kakao Login integration -- specs are non-negotiable

**Primary Action**
- Background: `#FEE500`
- Text: `#333333` (not white -- insufficient contrast on yellow)
- Padding: 12px 20px
- Radius: 12px
- Font: 16px system weight 600
- Use: Primary CTAs ("확인", "완료", "보내기")

**Secondary / Outline**
- Background: transparent
- Text: `#333333`
- Border: 1px solid `#E5E5E5`
- Radius: 12px
- Use: Secondary actions ("취소", "더보기")

**Danger**
- Background: `#E02000`
- Text: `#ffffff`
- Radius: 12px
- Use: Destructive actions ("삭제", "차단")

### Chat Bubbles (Defining Component)
- **My Message**: `#FEE500` bg, `#333333` text, asymmetric radius via 9-patch, max-width ~70% of chat
- **Other's Message**: `#ffffff` bg, `#333333` text, subtle `#E5E5E5` border, sender name 12px weight 600 `#666666` above
- **System**: `#F0F0F0` bg, `#999999` text, pill (9999px), centered, 12px weight 400

### Cards & Containers
- Background: `#ffffff`
- Border: 1px solid `#E5E5E5` or no border
- Radius: 12px
- Shadow: none or `0px 1px 3px rgba(0,0,0,0.04)` -- Kakao is intentionally flat

### Friend List Item
- Avatar: 48px rounded square (12px radius) -- KakaoTalk uses rounded squares, not circles
- Name: 16px weight 500, `#222222`
- Status: 14px weight 400, `#808080`, single line ellipsis
- Row height: 64px, Horizontal padding: 16px

### Inputs & Forms
- Border: 1px solid `#E5E5E5`, Radius: 12px
- Focus: border changes to `#333333`
- Text: `#222222`, Placeholder: `#BBBBBB`
- Chat input: `#F0F0F0` bg, 20px radius
- Search bar: `#F0F0F0` bg, 20px radius, `#999999` search icon

### Navigation
- Tab bar: white bg, 44px height, 4 equal tabs
- Active: `#333333` text + 2px bottom border, Inactive: `#999999` text
- Font: 14px weight 600

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

---

## 10. Voice & Tone

Kakao speaks like the person in your group chat who happens to also run the group — familiar, plainspoken, never institutional. The register is **친근한 존댓말** (casual-polite): `-어요 / -예요` endings, never `-습니다` outside of legal and policy surfaces. Messages are about people, not about the platform; sentences commit to a single idea and exit. Kakao Yellow is a visual event — copy does not need to shout when the color already does. Korean is first-class everywhere; English strings are translations of a Korean-originated voice, not parity.

| Context | Tone |
|---|---|
| CTAs | Imperative `-기` or `-하기` nominal (`보내기`, `확인`, `카카오 로그인`). Short — 2–4 characters preferred on chat-adjacent surfaces. |
| Success toasts | Past-tense single line (`전송됐어요`, `저장했어요`). Never `~완료되었습니다`. |
| Error messages | Blameless + concrete + one retry path. Never `알 수 없는 오류가 발생했습니다`. |
| Onboarding | One idea per screen, second-person casual (`친구를 추가해보세요`). No bullet lists, no tour overlays stacked on tour overlays. |
| Chat system notices | Neutral third-person (`OO님이 나갔습니다`). These are the one place `-습니다` endings stay — they are log entries, not conversation. |
| Legal / policy / finance | Formal `-합니다` register. Separate from the everyday voice; compliance copy is a different surface. |
| Empty states | Explain what happens next in one sentence, offer one action (add friend / start chat / open camera). Never `데이터가 없습니다`. |
| Push notifications | Sender name first, then message preview — subject matters more than verb (`정민: 오늘 저녁 어때?`). Never platform-authored hype. |

**Forbidden phrases.** `오류가 발생했습니다` (generic, blameful), `알 수 없는 오류` (vague), `~완료되었습니다` on chat/social surfaces (over-formal), `카카오톡이 당신의 ~` (platform-subject voice — users don't want the app to talk about itself), `Oops` / `죄송합니다만`, fireworks emoji on transactional copy (🎉🎊). Do not modify Kakao Login button copy away from `카카오 로그인` / `Login with Kakao` — `<!-- cited: developers.kakao.com/docs/ko/kakaologin/design-guide -->` the label options are enumerated and mandatory.

**Representative voice samples.** Where a public Kakao surface carries the exact string it is cited; where the string would live on a logged-in surface only, it is marked *illustrative* and a production team should replace it with observed live copy before shipping.

- Corporate positioning line: *"나의 세계를 바꾸는 카카오"* <!-- verified: kakaocorp.com/page, 2026-04 --> — first-person-possessive (`나의`), single-verb claim (`바꾸는`). Exemplar of the personal-register voice.
- KakaoTalk service tagline: *"사람과 세상을 연결하는 전 우주 통신규약을 꿈꾸는 메신저"* <!-- verified: kakaocorp.com/page, 2026-04 --> — ambitious noun phrase rather than a sentence; "dreaming of" (`꿈꾸는`) signals aspiration without boast.
- KakaoPay service tagline: *"마음놓고 금융하다"* <!-- verified: kakaocorp.com/page, 2026-04 --> — five syllables, verb-anchored, trust framed as an emotional state rather than a feature.
- Kakao Login button label (mandated): *"카카오 로그인"* / *"Login with Kakao"* <!-- cited: developers.kakao.com/docs/ko/kakaologin/design-guide --> — exact strings are compliance-mandated; abbreviated form `로그인` / `Login` allowed only when container narrows.
- Empty state (no chats): *"아직 대화가 없어요. 친구를 추가해서 시작해보세요."* <!-- illustrative: not verified as live Kakao copy -->
- Error (message send failed): *"전송하지 못했어요. 다시 시도해주세요."* <!-- illustrative: not verified as live Kakao copy -->
- Success (friend added): *"<name>님을 친구로 추가했어요."* <!-- illustrative: not verified as live Kakao copy -->

## 11. Brand Narrative

Kakao launched **KakaoTalk in 2010** as free messaging for Korean smartphones at a moment when carrier SMS was still metered per message — a single design decision (free, unlimited, over data) rewrote domestic communication inside a year. The company ([formed by the 2014 Daum–Kakao merger](https://www.kakaocorp.com/page)) frames itself not as a messaging company but as a connective platform: *"사람과 세상을 연결하는 전 우주 통신규약을 꿈꾸는 메신저"* ([kakaocorp.com/page](https://www.kakaocorp.com/page)) — *"a messenger dreaming of a universal communication protocol between people and the world."* The service tagline across the current corporate site is *"나의 세계를 바꾸는 카카오"* — *Kakao that changes my world* — first-person, possessive, small-scale; explicitly not *"changes the world"* singular.

Kakao is a super-app by accumulation rather than by architecture: KakaoTalk carries the user, and **KakaoPay, KakaoMap, Kakao T, Melon, Zigzag, KakaoPage** live as adjacent services reached through the same identity. Financial copy is blameless and concrete — *"마음놓고 금융하다"* ([kakaocorp.com/page](https://www.kakaocorp.com/page)) — *"bank with peace of mind"* — the feature is emotional, not functional. The AI positioning is `"나에게 가장 가까운, 가장 쉬운 AI"` ([kakaocorp.com/page](https://www.kakaocorp.com/page)) — *"the closest, easiest AI for me"* — defining AI by proximity and ease rather than capability or scale. Kakao's user base is measured in *near-saturation of Korean smartphones* <!-- source: base DESIGN.md §1, not independently re-verified 2026-04 -->; the design consequence is that the product cannot style-shift for trend cycles without breaking continuity for tens of millions of daily chats.

What Kakao refuses: the cold-institutional aesthetic of legacy carrier messaging; the cartoon-playfulness of Western consumer social (no cluttered emoji reactions, no animated stickers by default); the elevation-heavy material-design depth that Korean mid-range devices would stutter on. What it embraces: flat surfaces, Kakao Yellow as a **singular brand signal** (never decorative), system fonts in chat so conversation reads as the user's voice rather than a designed surface, and the chat bubble — yellow-for-self, white-for-others — as a national-scale mental model that changes at a cost the brand refuses to pay.

## 12. Principles

1. **Yellow is a signal, not a decoration.** `#FEE500` appears on the login button, the send button, the user's own chat bubble, and the primary CTA — nowhere else. Illustrations, headers, dividers, and section backgrounds never use brand yellow, because if everything is yellow, nothing is Kakao. *UI implication:* secondary buttons are outline or neutral; tertiary surfaces are `#F0F0F0` or `#F8F8F8`. Brand yellow is reserved for the single most-tapped action per screen.

2. **Chat bubbles are the brand, not the logo.** The yellow-self / white-other asymmetry is a Korean mental model at near-population scale. A Kakao-style product that renders chats as symmetric pills, or as cards, or with the sender's avatar on both sides, reads as "not Kakao" before any user reads a word. *UI implication:* maintain yellow on the user's bubbles with `#333333` text; keep other-user bubbles `#ffffff` with a 1px `#E5E5E5` border and sender name above.

3. **System fonts in conversation.** When two users talk to each other, the UI should disappear. System fonts (`-apple-system` / `Roboto` / `Apple SD Gothic Neo` / `Noto Sans KR`) render at the user's chosen size and weight, not at a designer's. Kakao Big Sans and Small Sans are for **Kakao-authored** surfaces — banners, marketing, empty states. *UI implication:* never set a custom font on chat message bodies; the user's system accessibility settings (Dynamic Type, bold text) must pass through untouched.

4. **Never white text on Kakao Yellow.** `#FEE500` against white text is 1.5:1 contrast — visually harsh and WCAG-failing. The primary CTA's text is `#333333` or `#000000` at ≥85% opacity. This is explicit in the Kakao Login guideline (*"Label: #000000 85%"* — [developers.kakao.com](https://developers.kakao.com/docs/ko/kakaologin/design-guide)) and extends by default to every other yellow surface. *UI implication:* all yellow-background buttons ship with dark text; no brand-palette exception.

5. **12px is the radius.** Buttons, cards, inputs, avatars (rounded square, not circle), login button — all 12px. The avatar-rounded-square instead of a circle is one of Kakao's strongest visual signatures; a circular profile avatar reads as "another messenger" (iMessage, Telegram, WhatsApp), not as Kakao. *UI implication:* default `border-radius: 12px`, `avatar-radius: 12px`. Circles are reserved for system-message pills and notification badges (9999px).

6. **Flat by default.** Kakao is one of the flattest major production design systems — depth comes from background color layering (`#ffffff` → `#F8F8F8` → `#F0F0F0` → `#E5E5E5`), not from shadow elevation. This is both performance (millions of low- and mid-range devices) and aesthetic (a messenger should feel like paper, not cards on a desk). *UI implication:* chat bubbles, list items, and cards ship with no shadow. Shadow is used only on dropdowns, popovers, and floating action buttons — and stays under `0px 2px 6px rgba(0,0,0,0.08)`.

7. **Near-black, not pure black.** Body text is `#333333`; headings are `#222222`; the brand wordmark base is `#1E1E1E`. `#000000` on `#ffffff` is an institutional-cold combination Kakao refuses — it belongs to spreadsheet tools, not conversation. *UI implication:* text tokens ladder `#222 → #333 → #666 → #808080 → #999 → #BBB`; never specify `#000000` for UI text bodies.

8. **Service-adjacent, not platform-voiced.** KakaoPay is *"마음놓고 금융하다"*; KakaoTalk is *"사람과 세상을 연결하는"*; KakaoPage is *"나를 표현하는 쇼핑"* ([kakaocorp.com/page](https://www.kakaocorp.com/page)). Each service voice is about the user's experience of the service, never about Kakao-as-corporation. *UI implication:* service-level copy speaks to the user's action (`금융하다`, `연결하는`, `표현하는`); never frames the user as a Kakao customer or prospect. Sentences start with the user's verb.

9. **Compliance is a design surface.** Kakao Login specs (`#FEE500` container, `#000000` symbol, `#000000` at 85% for label, 12px radius, speech-bubble-symbol-required — [developers.kakao.com](https://developers.kakao.com/docs/ko/kakaologin/design-guide)) are non-negotiable. Third-party products that alter the button geometry, change the color, or de-emphasize it versus competing logins are violating Kakao's guideline. *UI implication:* treat the Kakao Login button as a vendored asset; do not restyle. When container width narrows, swap to the abbreviated `로그인` / `Login` form rather than compressing proportions.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described Korean smartphone-user segments and Kakao's service positioning, not individual people.*

**지훈 (Jihoon), 24, Seoul.** Marketing coordinator; opens KakaoTalk ~80 times a day across two group chats (college crew, work team). Treats the app as the operating system of his social life — if an event isn't in KakaoTalk, it doesn't exist. Switches to KakaoPay and Kakao T without thinking of them as separate apps; the yellow is the mental anchor that says *"this is the Kakao layer."*

**영숙 (Youngsook), 58, Daejeon.** Owns a small rice-cake shop. Uses KakaoTalk primarily for supplier orders and daughter updates; distrusts anything that looks like an ad in a chat window. Relies on the yellow **send** button as a muscle-memory target — would be derailed by a layout change more than by a feature change. Reads every system message carefully because she has been trained to by years of scam-warning headlines.

**서윤 (Seoyoon), 17, Gwangju.** High-school student. KakaoTalk is her only messaging app; iMessage and Instagram DMs exist but they're for peripheral contacts. Uses stickers and emoticons constantly — the Kakao emoticon economy is a fluency layer her parents don't participate in. Expects new features to appear in the existing surface, not behind a new tab; a "let's move this conversation to <app>" prompt would feel like a friend ghosting.

## 14. States

| State | Treatment |
|---|---|
| **Empty (chat list, first use)** | `#ffffff` canvas. One line of `#333333` body text (16px, 400): *"아직 대화가 없어요. 친구를 추가해서 시작해보세요."* <!-- illustrative --> One secondary CTA button (outline, 12px radius, `#333333` text) — *"친구 추가"*. Never an illustration of a chat bubble; the bubble belongs to real conversation, not empty state. |
| **Empty (search, no results)** | `#999999` caption (14px, 400) one line: *"'<query>'에 대한 결과가 없어요."* <!-- illustrative --> No retry button — the search input stays focused; the user edits in place. |
| **Loading (chat room first paint)** | Skeleton list of message-row shapes in `#F0F0F0`, alternating left/right alignment to preview the bubble layout. 1.0s shimmer, 8% white highlight. The avatar placeholder is a 48px `#F0F0F0` rounded square (12px radius) — never a circle, even in skeleton. |
| **Loading (image in chat)** | `#F0F0F0` block at the image's intended aspect ratio, 8px inner radius (chat image radius is 8px, one step tighter than the 12px bubble radius). Spinner uses brand yellow `#FEE500` at 24px diameter, centered. |
| **Error (send failed)** | Red warning dot (`#E02000`, 6px) attached to the right edge of the failed bubble. Tap-and-hold on the bubble opens *"다시 보내기 / 삭제"* action sheet. Never a full-screen error, never a blocking toast — send failure is ambient, recoverable. |
| **Error (network lost)** | Top banner `#FF9800` (warning orange) with `#ffffff` 14px text — *"연결이 끊겼어요."* <!-- illustrative --> — auto-dismisses when connectivity returns; no user action required. |
| **Error (blocking, server-side)** | White screen, centered `#222222` 16px (600) one-line cause + `#FEE500` retry button below. Reserved for auth-level or outage-level failures. No illustration. |
| **Success (sent, inline)** | Bubble fades in from `#FEE500` at 85% opacity → 100% over 120ms. Read receipt ("1" → disappear when read) in `#FAEB00` 11px, outside the bubble at the timestamp position. No toast — the bubble landing is the confirmation. |
| **Success (payment, KakaoPay context)** | Dedicated confirmation screen, not a toast. `#47B881` (success green) checkmark top-center, exact amount in 28px weight 700 `#222222`, recipient name below in 16px weight 500, timestamp 13px `#999999`. Single `확인` button in `#FEE500` with `#333333` text. |
| **Skeleton** | `#F0F0F0` blocks at exact final dimensions, 12px radius for card-like shapes, asymmetric 9-patch bubble for message rows. Shimmer 1.0–1.2s. Never shown over the user's own historic chats — those paint last-rendered values, then diff in. |
| **Disabled** | Background fades to `#F0F0F0`, text to `#BBBBBB`. Disabled yellow buttons drop to `#FEE500` at 40% opacity over `#F0F0F0` backplate (yellow alone at 40% disappears on white). Geometry stays identical — the 12px radius does not change when a button disables. |

## 15. Motion & Easing

Kakao's motion vocabulary is **domestic and functional** — fast feedback on tap, conversational transitions between screens, and **no spring** anywhere in the system. A chat bubble is a document of what someone said; overshooting it on arrival would introduce the idea that the message itself is uncertain. Kakao picked the opposite: bubbles commit instantly, without bounce. The Kakao motion stance is *"conversation is ambient, not performative."*

**Durations** (named, not raw milliseconds):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, read-receipt updates, bubble state changes |
| `motion-fast` | 120ms | Tap feedback (button press, bubble long-press), emoji-picker open |
| `motion-standard` | 220ms | Sheet open/close, tab switch, drawer slide, chat room push |
| `motion-slow` | 360ms | KakaoPay success confirmation, onboarding step advance |
| `motion-page` | 300ms | Top-level route push/pop between tabs (Chats / Friends / More) |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things appearing — bubbles landing, sheets rising, toasts entering |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Things leaving — dismissals, bubble removal, sheet collapse |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — tabs, segmented controls, collapsible rows |

**Spring stance.** Spring and overshoot are **forbidden** across the system. Kakao does not include `ease-spring`, `ease-bounce`, or any cubic-bezier with y-values outside `[0, 1]`. Rationale: chat bubbles, payment confirmations, and profile updates are all factual events — overshoot reads as uncertainty about the fact. The one place other brands license spring (money-moved success) Kakao renders with `motion-slow` + `ease-standard` instead, because *"bank with peace of mind"* (`마음놓고 금융하다`, [kakaocorp.com/page](https://www.kakaocorp.com/page)) and kinetic overshoot are in tension. Sticker send — where other messengers reach for spring — uses a simple scale-in from 0.92 → 1.0 with `ease-standard`, no rebound.

**Signature motions.**

1. **Bubble landing.** A new outgoing message bubble enters with opacity 0 → 1 over `motion-fast` and a 4px `y` translate (starting below its final position). Never scaled from 0.9 → 1.0 — scale on a 70%-of-screen element is visually noisy in a chat-dense surface.
2. **Bottom sheet rise.** Sheets rise from `y+32px` with `motion-standard / ease-enter` and a backdrop fade to `rgba(0,0,0,0.4)` (Kakao's backdrop is lighter than most systems — context stays visible). Dismissal uses `motion-fast / ease-exit`.
3. **Send-button state.** The yellow send button fades from `#FEE500` 40% → 100% as the input field transitions from empty → filled, over `motion-fast`. No scale change; the color commit is the signal.
4. **KakaoPay success.** Check icon draws over `motion-slow` with `ease-standard` (not spring), amount counter-animates from 0 to final value over the same window. The screen is a commitment; it does not bounce.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Sheets and modals appear via opacity only, bubbles cross-fade in place instead of translating. The app remains fully functional; motion is never load-bearing for comprehension.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Extracted 2026-04-20 via omd:add-reference AUGMENT mode.
Style reference: toss/DESIGN.md (KR region matrix auto-pick).

Direct verification via WebFetch (2026-04-20):
- https://www.kakaocorp.com/page — confirms the corporate positioning line
  "나의 세계를 바꾸는 카카오" (Kakao that changes my world), the AI positioning
  "나에게 가장 가까운, 가장 쉬운 AI" (the closest, easiest AI for me), the
  sustainability framing "더 나은 세상을 만드는 카카오 서비스", and the
  verbatim service taglines for KakaoTalk ("사람과 세상을 연결하는 전 우주
  통신규약을 꿈꾸는 메신저"), KakaoPay ("마음놓고 금융하다"), KakaoMap
  ("좋은 곳을 함께 찾아가는 지도"), Kakao T ("모든 이동을 위한 모빌리티
  서비스"), Zigzag ("나를 표현하는 쇼핑"), Melon ("음악이 필요한 순간").
- https://www.kakaocorp.com/page/service/service/KakaoTalk — confirms
  KakaoTalk's service-layer positioning "편리함 넘어 더 새롭고 쾌적한 대화
  경험" (beyond convenience toward fresher, more pleasant conversation
  experiences) and "일상을 바꾼 대표 메신저" (the flagship messenger that
  transformed daily life). Provides the service-voice exemplar of
  user-action-anchored sentences over platform-authored claims.
- https://developers.kakao.com/docs/ko/kakaologin/design-guide — confirms the
  compliance-mandated Kakao Login button spec: container #FEE500, symbol
  #000000, label #000000 at 85% opacity, 12px radius, symbol-required,
  label options (카카오 로그인 / Login with Kakao — full; 로그인 / Login —
  abbreviated), sizing rules (expand laterally, label ≤ 1/3 of container
  height, no proportional shrinking — swap to abbreviated form instead).

Base DESIGN.md (sections 1–9) is the source for all token-level claims:
Kakao Yellow #FEE500, brand base #1E1E1E (Pantone 433 C), the 12px radius
signature, flat-by-default depth stance (single-layer shadows, depth via
background color layering #ffffff → #F8F8F8 → #F0F0F0 → #E5E5E5), the
system-font-for-chat / Kakao-Big-Sans-for-brand split, the asymmetric
9-patch yellow-self / white-other chat bubble pattern, the near-black
text ladder #222222 → #333333 → #666666 → #808080 → #999999 → #BBBBBB,
and the motion-forward / spring-forbidden stance.

Not independently verified in this session but widely documented public facts
(base-carried):
- KakaoTalk launched 2010; free-over-data messaging at the moment carrier SMS
  was still metered per message.
- Daum–Kakao merger 2014 (the holding company is Kakao Corp).
- KakaoPay, KakaoMap, Kakao T, Melon, KakaoPage, Zigzag are listed as the
  featured services on kakaocorp.com/page (verified above).
- Kakao emoticon / sticker economy as a cultural fluency layer — general
  Korean-digital-culture knowledge, not a sourced Kakao statement.

Interpretive / editorial claims (not documented Kakao statements):
- "Yellow is a signal, not a decoration" — interpretive reading of how
  Kakao deploys #FEE500 across surfaces; consistent with Kakao's stated
  compliance rules for the login button but extended by inference to the
  broader UI.
- "Chat bubbles are the brand, not the logo" — editorial framing; Kakao
  does not publish this as a written principle.
- Persona archetypes (지훈 / 영숙 / 서윤) are fictional, informed by
  publicly described KakaoTalk user segments and smartphone-saturation
  context; not individual people. Any resemblance is unintended.
- Spring-forbidden stance rationale ("chat bubbles are factual events;
  overshoot reads as uncertainty") is editorial; consistent with but not
  directly stated in Kakao brand materials.
-->

