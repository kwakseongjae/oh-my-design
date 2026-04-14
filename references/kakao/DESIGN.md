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
