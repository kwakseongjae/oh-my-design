---
name: Xiaohongshu
colors:
  primary: '#ff2442'
  red-tint: '#ffedf0'
  sidebar-login: '#ff2e4d'
  canvas: '#ffffff'
  surface: '#f5f5f5'
  background-light: '#fafafa'
  foreground: '#333333'
  separator-opaque: '#eaeaea'
  link: '#13386c'
  information: '#3d8af5'
  information-tint: '#ecf4fe'
  success: '#02b940'
  success-tint: '#eaf8ef'
  warning: '#ff7d03'
  warning-tint: '#fff2e6'
typography:
  h1:
    fontSize: 32px
    fontWeight: 600
    use: Root --h1-font-size and --h1-font-weight; no h1 rendered in the survey
  h2:
    fontSize: 24px
    fontWeight: 600
    use: Root --h2-font-size and --h2-font-weight
  h3:
    fontSize: 20px
    fontWeight: 600
    use: Root --h3-font-size and --h3-font-weight
  header:
    fontSize: 18px
    fontWeight: 600
    use: Root --t1-font-size and --t1-font-weight; profile-name use unconfirmed
  body:
    fontSize: 16px
    fontWeight: 400
    use: Root --b1-font-size and --b1-font-weight; not a note-detail measurement
  body-small:
    fontSize: 14px
    fontWeight: 400
    use: Root --b2-font-size and --b2-font-weight
  body-loose-switch:
    fontSize: 15px
    fontWeight: 400
    use: Root --b2-loose-switch-font-size and --b2-loose-switch-font-weight
  note-title:
    fontSize: 14px
    fontWeight: 500
    use: Survey a.title; line-height 19.6px
  meta:
    fontSize: 12px
    fontWeight: 400
    use: Survey a.author; creator label
  caption:
    fontSize: 10px
    fontWeight: 400
    use: Root --c3-font-size and --c3-font-weight; hashtag use unconfirmed
rounded:
  small: 4px
  sm: 8px
  large: 12px
  md: 16px
spacing:
  xs: 4
  sm: 8
  md: 12
  base: 16
  lg: 24
components:
  creator-center:
    type: button
    textColor: rgba(51, 51, 51, 0.8)
    rounded: 100px
    height: 40px
    padding: 0px 16px
    typography: 16px / 400
    hover: 'background rgba(0, 0, 0, 0.03); label #333333; computed radius 999px'
    use: Header 创作中心 button on rgba(255, 255, 255, 0.98) over the white page. Visible label is 16px/400; button host is 16px/600. Transparent rest fill omitted. Pressed unmeasured; focus has no measured style change.
  nav-red:
    type: button
    textColor: '#333333'
    rounded: 0px
    height: 48px
    padding: 0px
    typography: 16px / 600
    hover: parent li background changes to rgba(0, 0, 0, 0.03)
    use: 'RED navigation link to /red_video on the white sidebar; the visible span and SVG are #333333. Link host is 12px/600 with rgba(51, 51, 51, 0.6) ink; its own radius is 0. Hover paints the parent row. Transparent rest fill omitted.'
  note-cover:
    type: card
    rounded: 16px
    height: 270px
    padding: 0px
    hover: '::after paints rgba(0, 0, 0, 0.25) at opacity 1 over the cover image; shadow stays none'
    use: First a.cover.mask image link in section.note-item, 202.7px wide in this desktop capture, over a white page. No own text label or opaque fill. Rest has a 1px rgba(0, 0, 0, 0.08) inset outline at offset -1px. This is the cover link, not the entire note card.
---

# Design System Inspiration of Xiaohongshu

## Overview

### Visual Theme & Atmosphere

Xiaohongshu (小红书) is a lifestyle platform founded in Shanghai in 2013 by 毛文超 and 瞿芳. Its [official company page](https://www.xiaohongshu.com/protocols/about) describes people recording and sharing their lives through images, text and short videos, and interacting around interests. Its mission is “Inspire Lives 分享和发现世界的精彩.” The same page dates its overseas-shopping sharing community to December 2013; today's home title, “你的生活兴趣社区,” places interests and community at the front of its identity.

The measured desktop interface gives that content a white ground, a five-column waterfall of image covers, small titles and creator rows. Saturated red marks the logo and login actions; most surrounding controls use dark text and pale neutral fills. Rounded image corners and long pill controls give the chrome a softer shape than the rectangular grid it occupies. These are observations of the live interface, rather than a published brand manifesto.

The measured homepage is the Chinese-language desktop surface at `www.xiaohongshu.com/explore`, reached from the root URL with `zh-CN`; it did not redirect to a Korean path. The current [privacy policy](https://agree.xiaohongshu.com/h5/terms/ZXXY20220509001/-1) distinguishes mainland Xiaohongshu from its overseas product, rednote. This reference describes the Xiaohongshu web surface.

#### Primary tasks

The captured surface offers discovery, RED video, live streams, publishing, notifications, messages and search. Note covers, titles and creator names are links. A login dialog initially covers the feed; it was closed for the main control measurements.

### Brand Narrative

The [company history](https://www.xiaohongshu.com/protocols/about) marks a Shanghai founding in June 2013 and the launch of an overseas-shopping sharing community that December. Its current home title describes a life-interest community. Together, these first-party surfaces connect the original sharing use case with the broader interests visible in today's category row: clothing, food, beauty, film, work, home, games, travel and fitness.

The [privacy policy](https://agree.xiaohongshu.com/h5/terms/ZXXY20220509001/-1), updated September 20, 2026 and effective September 27, describes Xiaohongshu and overseas rednote as distinct products. It identifies the operator as 行吟信息科技（上海）有限公司及其关联公司.

### Principles

The company states a vision of “成为最受用户信任的互联网公司.” The following implementation guidance is derived from the measured surface, rather than presented as additional company principles:

- Keep discovery imagery prominent and attach a compact title and creator row to each note.
- Use component-specific neutral hover feedback: a small fill on a navigation row, a label and fill change on a header control, and a dark mask on an image cover.
- Retain documented token definitions independently of whether their associated component state was reachable in this logged-out capture.

### Personas

No first-party persona research was opened; no fictional persona is supplied as a brand fact.

## Colors

The live root exposes 341 custom properties. The product palette below comes from computed values, with 340 retained after excluding the Swiper default. The survey also found two scoped declaration groups that are not the root product theme: `.heshen_B_Blue_light` and `.fe-captcha-app`.

| Role | Measured value | Evidence |
|---|---|---|
| Primary red | `#ff2442` | `--primary`, `--color-red`; login-dialog submit button |
| Red tint | `#ffedf0` | `--primary2` |
| Sidebar login red | `#ff2e4d` | `.side-bar button.login-btn` at rest |
| Canvas | `#ffffff` | `--bg`, `--color-background` |
| Surface | `#f5f5f5` | `--bg0`, `--bg1` |
| Light background | `#fafafa` | `--bg0-lighter`, `--color-information-background` |
| Foreground | `#333333` | `--color-primary-label`; note titles and search input |
| Opaque separator | `#eaeaea` | `--opaque-separator` |
| Link | `#13386c` | `--color-link`; login-dialog legal links |
| Information | `#3d8af5` | `--info`, `--color-blue` |
| Information tint | `#ecf4fe` | `--info2` |
| Success | `#02b940` | `--success` |
| Success tint | `#eaf8ef` | `--success2` |
| Warning | `#ff7d03` | `--warning` |
| Warning tint | `#fff2e6` | `--warning2` |

Information, success, warning and tint entries above are root-token definitions; their associated result states were not exercised. Another root link token, `--link`, is `#133667`, so the two link definitions should stay distinct.

The neutral hierarchy relies on alpha as well as solid colors: `--color-secondary-label` is `rgba(51,51,51,0.8)`, tertiary is `rgba(51,51,51,0.6)`, and quaternary is `rgba(51,51,51,0.3)`. The active-background token is `rgba(0,0,0,0.03)` and the separator token is `rgba(0,0,0,0.08)`. Preserve those alpha values with their actual backgrounds. The search field's computed fill is the 3% black value, even though a separate surface token is solid light gray.

Paragraph ink in this capture is `rgba(51, 51, 51, 0.3)` and `rgba(51, 51, 51, 0.6)`, 18 samples each. No note-detail reading paragraph was measured. The most frequent rendered text color, `rgba(51, 51, 51, 0.8)` at 83 samples, is a separate census result.

## Typography

**Official product use:** no opened first-party source documents a product typeface. **Live-loaded:** the census's `document.fonts` loaded list is empty. **Official distributed assets:** no font asset was established; the readable stylesheet walk returned no `@font-face` records, but 11 external sheets were unreadable to that walk. **Declared-only:** body and the first button declare the stack below; 17 root `--Typography-FontFamily-*` properties separately name PingFang SC. **Unresolved:** the actual local face selected for each script and whether other brand font assets exist. No family is promoted into the typography tokens and no face receives a specimen. Substitute: none chosen.

```text
system-ui, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "system-ui", "Helvetica Neue", Arial, "PingFang SC", "PingFang TC", "PingFang HK", "Microsoft Yahei", "Microsoft JhengHei"
```

There is no rendered `h1` in the survey. Sizes and weights remain useful independently of the unresolved family:

| Evidence class / role | Size / weight | Line height |
|---|---|---|
| Root H1 / H2 / H3 tokens | 32 / 24 / 20px, all 600 | 40 / 32 / 28px |
| Root T1 / T2 / T3 tokens | 18px/600, 16px/500, 14px/500 | 26 / 24 / 20px |
| Root B1 / B2 tokens | 16px/400, 14px/400 | 24 / 20px |
| Root B2 loose-switch | 15px/400 | 22px |
| Root C1 / C2 / C3 tokens | 13 / 12 / 10px, all 400 | 20 / 18 / 14px |
| Root emphasized C1 / C2 / C3 | 13 / 12 / 10px, all 500 | 20 / 18 / 14px |
| Live note-title links | 14px/500 | 19.6px |
| Live creator links | 12px/400 | 13.8px |
| Live RED navigation label | 16px/600 | Host line-height 13.8px; label height 18px |
| Live creator-center label | 16px/400 | Host line-height 19.2px |
| Live search input | 16px/400 | 19.2px |
| Live sidebar / modal login | 16px/600 | 16 / 18.4px |

Some surveyed note titles occupy two 19.6px lines, while others occupy one. The capture establishes that two-line presentation; it does not establish the exact CSS clamping rule. The root also defines number weights of 400, 500 and 700; a universal 600 weight ceiling would contradict those tokens.

## Layout

At 1440 × 1000, the feed has five columns (`--feeds-columns: 5`). Cover left edges in the survey are approximately 267, 501, 736, 971 and 1205px; covers are 202.7px wide with approximately 32px horizontal gaps. Their heights vary: surveyed covers include 152px and 270px examples. Titles sit below images, followed by creator and engagement rows.

The root geometry is explicit: `--header-height: 72px`, `--horizontalGapPx: 32px`, `--verticalGapPx: 16px`, and `--columnWidth: calc((100vw - 32px * 7) / 6)`. The width formula divides by six, while the captured feed renders five columns beside the sidebar. A fixed left sidebar and top header keep navigation and search outside the staggered image field.

Both `--gap-inc-*` and `--gap-dec-*` expose the same 18-step sequence: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34 and 36px. The reference spacing aliases 4 / 8 / 12 / 16 / 24 correspond to `xs` / `default` / `xl` / `3xl` / `7xl` in those site scales. The title links are inset 12px from their cover's left edge in the survey; this is an observed inset, not a complete footer-padding measurement.

### Responsive Behavior

Only 1440 × 1000 desktop was measured; mobile layouts, touch behavior and breakpoint rules remain unverified.

## Elevation & Depth

The measured cover link and its three ancestor levels have no box shadow at rest or hover. The persistent inset outline and the hover mask provide local separation. The search ancestor header has `backdrop-filter: blur(20px)` and `rgba(255, 255, 255, 0.98)` fill.

The root nevertheless defines elevation for other uses. Keep these as token definitions without assigning them to an unmeasured dialog or sheet:

| Root token | Raw value |
|---|---|
| `--elevation-low-shadow` | `0 2px 8px 0 rgba(0,0,0,0.04),0 1px 2px 0 rgba(0,0,0,0.02)` |
| `--elevation-high-shadow` | `0 4px 32px 0 rgba(0,0,0,0.08),0 1px 4px 0 rgba(0,0,0,0.04)` |
| `--elevation-note-shadow` | `0 8px 64px 0 rgba(0,0,0,0.04),0 1px 4px 0 rgba(0,0,0,0.02)` |
| `--ai-chat-input-box-shadow` | `0 8px 40px 0 rgba(0,0,0,0.05)` |
| `--mask-bg` / `--mask-backdrop` | `rgba(0,0,0,0.4)` / `rgba(0,0,0,0.25)` |
| `--material-filter` | `saturate(150%) blur(10px)` |

Small, medium and large radius tokens are 4, 8 and 12px; note covers have their own 16px token. Pill definitions are `--border-radius-pill: 999px` and `--border-radius-button: 9999px`, while the measured sidebar and header buttons use computed 100px radii. Keep the token and element measurements separate.

## Motion & Easing

The cover link's raw computed transition is `background 0.2s ease 0s`. The login-dialog button declares `all 0.2s ease 0s`; the sidebar login, creator-center, RED navigation and search hosts declare `all 0s ease 0s`. These are host transition declarations, not measured durations for a like animation or the cover's pseudo-element. The verified hover snapshot establishes the final overlay paint; it does not establish an easing curve for the overlay itself.

No custom cubic-bezier curve, spring, like-pop sequence, sheet transition or reduced-motion rule was established.

---

Sources: [live discovery surface](https://www.xiaohongshu.com/explore), [company and history](https://www.xiaohongshu.com/protocols/about), [privacy policy](https://agree.xiaohongshu.com/h5/terms/ZXXY20220509001/-1). Captured November 3, 2026, Asia/Seoul. Raw measurement paths, source quotes, exceptions and the complete prior-content disposition are in verification.md and report.md.

## Components

The main pass closed the login dialog using `.login-container .close-button`. All hover snapshots below matched `:hover`; keyboard focus was reached by real Tab presses. Pressed states failed the `:active` identity check and remain unmeasured. Only the three controls with measured hover changes are structured components.

| Control | Rest identity | Measured hover |
|---|---|---|
| **创作中心** header button | 89.5 × 40px; radius 100px; padding `0px 16px`; no border or shadow; transparent on the header's `rgba(255, 255, 255, 0.98)` surface. Visible label 16px/400 in `rgba(51, 51, 51, 0.8)`; host 16px/600. | Background becomes `rgba(0, 0, 0, 0.03)`, label becomes `#333333`, computed radius becomes 999px. |
| **RED** navigation link | 202.7 × 48px; own radius 0; padding 0; no border or shadow; transparent on white. Visible label and SVG `#333333`, label 16px/600; host 12px/600 and `rgba(51, 51, 51, 0.6)`. | Its parent `li` gains `rgba(0, 0, 0, 0.03)`; the link's own paint stays unchanged. |
| **First note cover** image link, `a.cover.mask` | 202.7 × 270px; radius 16px; padding 0; transparent over a white page; no shadow or border. A persistent 1px `rgba(0, 0, 0, 0.08)` outline has offset -1px. Host 14px/400; no own text label. | `::after` changes from unpainted to a full-cover `rgba(0, 0, 0, 0.25)` layer at opacity 1. Shadow remains none. |

The cover link's computed host color is browser-blue `#0000ee`; it has no visible text label, so that value is not a brand foreground token. This component describes the image link rather than the whole card. The adjacent title and creator row retain their own typography and links.

Three additional measured controls stay in prose because hover and focus produced no style change within the probe's comparison scope:

- **Sidebar 登录:** 218.7 × 48px, radius 100px, padding `0px 24px`, 16px/600, background `#ff2e4d` and text `#ffffff`, no border or shadow.
- **Login-dialog 登录:** 304 × 48px, radius 999px, padding 0, 16px/600, background `#ff2442` and text `#ffffff`, no border or shadow. The dialog stayed open for this separate pass; no credentials were entered or form submitted.
- **Search:** 437.3 × 40px, radius 999px, padding `0px 84px 0px 16px`, 16px/400, `#333333` text and `rgba(0, 0, 0, 0.03)` fill, no border or shadow. Placeholder: “登录探索更多内容.” No focus-border or caret-color claim is made.

### States

| State | Measured treatment |
|---|---|
| Header-button hover | 创作中心: transparent → 3% black fill, alpha-dark → solid foreground, computed radius 100 → 999px. |
| Navigation hover | RED: parent `li` gains 3% black fill. |
| Cover hover | First cover: previously unpainted `::after` becomes a 25% black layer at opacity 1; no shadow change in scope. |
| Keyboard focus | All six controls reached by Tab; no focus-only style changes in the compared DOM scope. The cover's existing inset outline persists at rest, so it is not a focus treatment. |
| Pressed | Unmeasured for all six controls: `:active` did not match while the mouse was down. |

The comparison covers each control, its `::before`/`::after`, all sampled descendants and their pseudos, three ancestor levels and their pseudos, plus image and SVG attributes. The largest sampled subtree is the cover's four descendants. It cannot establish pixel-only animation changes, closed-shadow behavior or cross-origin frame internals. Empty, loading, network-error, success and disabled treatments were not exercised.

## Do's and Don'ts

- Use the measured white, dark text and alpha-neutral hierarchy around image content; keep the two measured login reds distinct.
- Build this desktop reference as a five-column staggered feed with 16px cover corners and 32px horizontal gaps.
- Reproduce the cover's overlay hover and the navigation row's parent background when matching these controls.
- Preserve visible child typography: the RED label is 16px/600 even though its anchor reports 12px/600; the creator-center label is 16px/400 even though its button reports weight 600.
- Use the measured geometry and typography metrics without selecting an unverified font face.

## Voice & Tone

The measured product chrome uses concise functional labels: “发现,” “发布,” “创作中心,” “业务合作” and “登录.” The search placeholder invites access with “登录探索更多内容,” while the dialog says “登录后推荐更懂你的笔记.” These strings support direct action labels and a recommendation-oriented invitation; they do not establish a comprehensive voice guide or forbidden-word list.

## Agent Prompt Guide

“Build the measured Xiaohongshu desktop discovery surface: white canvas, fixed sidebar, 72px header, centered pill search and five staggered image columns. At 1440px wide, use approximately 202.7px cover widths, 32px horizontal gaps and 16px cover corners. Put 14px/500 titles and 12px/400 creator names below the imagery. Use the measured typography metrics without inventing a family.”

“For a cover link, retain the faint inset outline at rest. On hover, paint a full-size 25% black `::after` overlay while keeping the box shadow absent. For 创作中心, use a transparent rest fill, alpha-dark regular label and a 3% black hover fill with solid foreground.”

Quick palette: primary `#ff2442`; sidebar login `#ff2e4d`; canvas `#ffffff`; foreground `#333333`; surface token `#f5f5f5`. Hover neutrals are alpha values, as detailed above.
