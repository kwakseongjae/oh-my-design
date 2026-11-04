---
name: ECPay
colors:
  primary: '#00783c'
  service-fill: '#588c3f'
  nav-hover: '#408a00'
  foreground: '#333333'
  canvas: '#ffffff'
  service-border: '#e1e3e6'
  solution-border: '#dce2ec'
typography:
  action:
    fontSize: 16px
    fontWeight: 400
    use: Main registration and sales links; computed line-height 25.6px; font face unresolved.
  navigation:
    fontSize: 14px
    fontWeight: 400
    use: Fees navigation link; computed line-height 23.8px; font face unresolved.
  card-link:
    fontSize: 16px
    fontWeight: 400
    use: ECShop solution-card link; computed line-height 22.4px; font face unresolved.
rounded:
  none: 0px
  service-action: 8px
spacing:
  action-inline: 24
  service-action-start: 32
  service-action-end: 16
components:
  fees-nav:
    type: button
    textColor: '#333333'
    rounded: 0px
    height: 67.8px
    padding: 28px 15px 16px
    typography: 14px / 400
    hover: 'fg #408a00'
    pressed: 'fg #408a00'
    use: 費用 — a transparent navigation link on a white (#ffffff) header; hover and held press change the label colour. Press adds no change beyond hover. Keyboard focus uses the browser auto outline, so no focus token is declared.
  ecshop-card:
    type: card
    textColor: '#00783c'
    rounded: 0px
    height: 22.4px
    padding: 0px
    typography: 16px / 400
    hover: 'text-decoration: underline solid #00783c'
    pressed: 'text-decoration: underline solid #00783c'
    use: ECShop 網路開店 — a transparent link inside a white (#ffffff) solution card. Geometry describes the anchor, not the outer card. Hover and held press underline the green label; press adds no change beyond hover. Keyboard focus is the browser auto outline.
---

# Design System Inspiration of ECPay

## Overview

### Visual Theme & Atmosphere

ECPay is the payment platform of Taiwan's 綠界科技股份有限公司. The company's history dates its service to 1996 and the launch of the ECPay integrated payment platform to January 2016. Its public offering brings payment collection, logistics and electronic invoices together for merchants. [Company](https://corp.ecpay.com.tw/), [history](https://corp.ecpay.com.tw/%E6%A0%B8%E5%BF%83%E5%83%B9%E5%80%BC%E8%88%87%E5%85%AC%E5%8F%B8%E6%B2%BF%E9%9D%A9/).

The homepage expresses that breadth with green actions, white bordered panels, service illustrations and a prominent news area. Two greens coexist: the main registration link is dark `#00783c`, while payment-service actions use `#588c3f`. The registration and sales links are pills; the service action has an 8px corner radius. These are observations of the public homepage, rather than a published brand specification.

The current page puts “營運管理一站整合” and “AI 工具一站整合” beside one another. Its evolution now includes merchant tools for operations, marketing and customer service. A company-hosted news item also describes expansion across transactions, applications and data. [Live homepage](https://www.ecpay.com.tw/), [company-hosted update](https://www.ecpay.com.tw/Announcement/DetailAnnouncement?nID=6310).

### Brand Narrative

The company's history connects a service founded in 1996 with the integrated ECPay platform introduced in 2016. Today's homepage carries that integration theme into both business operations and AI tools. For a visual reference, that means presenting related merchant services in parallel panels with clear task links. [History](https://corp.ecpay.com.tw/%E6%A0%B8%E5%BF%83%E5%83%B9%E5%80%BC%E8%88%87%E5%85%AC%E5%8F%B8%E6%B2%BF%E9%9D%A9/), [homepage](https://www.ecpay.com.tw/).

### Principles

The company's stated operating philosophy is “專業、誠信、創新” — professionalism, integrity and innovation. Green actions, white bordered service panels and compact task labels are observed interface patterns; the opened sources do not name them as formal design principles. [Company history and values](https://corp.ecpay.com.tw/%E6%A0%B8%E5%BF%83%E5%83%B9%E5%80%BC%E8%88%87%E5%85%AC%E5%8F%B8%E6%B2%BF%E9%9D%A9/).

### Personas

The official history names small and medium e-commerce businesses and individual e-commerce sellers as a market focus; no research-backed persona profiles were verified. [History](https://corp.ecpay.com.tw/%E6%A0%B8%E5%BF%83%E5%83%B9%E5%80%BC%E8%88%87%E5%85%AC%E5%8F%B8%E6%B2%BF%E9%9D%A9/).

## Colors

The survey found no readable root or stylesheet-declared CSS custom properties. The following names are reference labels for measured literal values, not ECPay custom-property names.

| Reference role | Value | Measured use |
|---|---|---|
| Primary / CTA fill | `#00783c` | Main registration background; sales-link text and border; ECShop card-link text |
| Service fill | `#588c3f` | Payment-service “了解更多” background |
| Navigation hover | `#408a00` | “費用” label on hover and held press |
| Foreground | `#333333` | Most frequent paragraph ink; resting “費用” label |
| Canvas | `#ffffff` | Header behind navigation, card surfaces and white action labels |
| Service border | `#e1e3e6` | Computed 1px border on the registration panel and payment-service card |
| Solution border | `#dce2ec` | Computed 1px border on the ECShop solution card |

Paragraph ink was `rgb(51, 51, 51)` on six paragraphs, with two each in `rgb(88, 140, 63)` and `rgb(68, 68, 68)`. The global colour census includes embeds and the consent layer; it is not a palette by itself. LINE's green, Google search styling and cookie-banner colours are excluded from these reference roles.

## Typography

- **Official product use:** no font-use statement was verified in the opened company or product material.
- **Live-loaded:** `document.fonts` reported an empty loaded-face list. No live webfont specimen is established.
- **Official distributed assets:** the survey returned no readable `@font-face` records; no font distribution or font licence was verified.
- **Declared-only:** the body stack is `微軟正黑體, "Apple LiGothic Medium", "Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial, Verdana, sans-serif`. The measured links declare `微軟正黑體`; the census's sampled button declares `Arial`. These declarations do not establish the face that supplied the visible glyphs.
- **Unresolved:** actual rendered faces and per-script fallback. The census has no `h1` font record. No family is exported in the typography tokens, and no face receives a specimen. **Substitute: none chosen.**

Preserve the verified metrics independently of the unresolved family:

| Surface | Size / weight | Computed line height |
|---|---|---|
| Main registration and sales links | 16px / 400 | 25.6px |
| Fees navigation link | 14px / 400 | 23.8px |
| ECShop card link | 16px / 400 | 22.4px |
| Payment-service action | 16px / 400 | 22.4px |

The opened homepage stylesheet declares `.ind-title` at 26px, bold, with `line-height: 1.4`; this is a CSS declaration, not a computed heading measurement. [Homepage stylesheet](https://www.ecpay.com.tw/Content/Themes/WebStyle20151209/css/home_new.css?t=20151209).

## Layout

The desktop homepage begins with a utility strip and navigation, then a promotional carousel beside news. Below are an operating-statistics panel, paired operations/AI panels, payment and application-service cards, solution cards, developer resources and partner banks. This order is visible in the survey's full-page capture and homepage HTML.

The opened homepage CSS declares a 1170px payment-service container with wrapping flex items and 64px bottom padding. The solution-card rule declares 185px height, `24px 20px` padding and 20px corners. Treat these as declared desktop layout values; only the chosen links' geometry was measured directly.

### Responsive Behavior

Desktop measured at 1440×1000 only; mobile layout and breakpoint behaviour were not measured.

## Elevation & Depth

The selected actions and their captured card ancestors have `box-shadow: none`. Their separation comes from white surfaces and thin borders: `#e1e3e6` around the service panel, `#dce2ec` around the ECShop solution card. No elevation scale was verified.

## Motion & Easing

Every selected control reported the raw computed transition `all 0s ease 0s`. These six controls establish no nonzero transition-duration or custom easing token; carousel motion was not measured.

---

Measurement evidence: survey `ecpay/20261103-095103` and states `ecpay/20261103-095348`, captured 2026-11-03. First-party narrative and asset URLs are linked beside their claims; legal identity and collector limitations are recorded in `verification.md`.

## Components

**Fees navigation link.** “費用” is a 54.2×67.8px anchor with square corners, padding `28px 15px 16px` and 14px/400 text. Its background is transparent over the white header. The label changes from `#333333` to `#408a00` on hover and held press. Press adds no difference beyond hover.

**ECShop card link.** “ECShop 網路開店” is a 224.7×22.4px anchor inside a white solution card. The anchor has zero padding and radius, 16px/400 text, and foreground `#00783c`. Hover and held press add `underline solid rgb(0, 120, 60)`. These dimensions describe the link, not the card container.

The other measured actions remain useful visual references in prose:

- “立即註冊”: 138×54px, `border-radius: 999px`, padding `0px 24px`, background `#00783c`, white text, no border or shadow.
- “聯繫銷售顧問”: 159.2×54px, the same pill radius and padding, white fill, `#00783c` text and a 1px solid green border, no shadow.
- Payment-service “了解更多”: 132×54px, 8px radius, padding `16px 16px 16px 32px`, `#588c3f` fill, white text, no border or shadow.

Those three actions had no computed hover or pressed change in the probe's compared scope. Their only measured focus indication was a browser `auto` outline, so they are not exported as interactive component tokens. The Google search input is an embed and is also excluded.

### States

| Control | Hover | Held press | Keyboard focus |
|---|---|---|---|
| Main registration | No computed change in compared scope | Same | Browser `auto` outline only |
| Sales link | No computed change in compared scope | Same | Browser `auto` outline only |
| Fees navigation | Foreground `#408a00` | Same as hover | Browser `auto` outline only |
| ECShop card link | Green solid underline | Same as hover | Browser `auto` outline only |
| Payment-service action | No computed change in compared scope | Same | Browser `auto` outline only |
| Google search input, excluded | No computed change in compared scope | Branding background image disappears | Branding background image disappears; returns after blur |

All six pointer targets matched `:hover`; held press also matched `:active`. Focus came from a real Tab walk. Comparisons covered each control, its pseudo-elements and three ancestor levels with their pseudo-elements; the six anchors/inputs had no descendants. The probe cannot establish absence of pixel-only effects or changes inside external SVG files. Disabled states were not exercised.

The anti-fraud popup was closed. The cookie banner remained open because both its agreement button and its unlabelled × invoke the agreement handler; `hideOverlays: true` was passed for pointer measurements. The measured states are raw observations under that collection condition.

## Do's and Don'ts

- Keep the dark content CTA green and the lighter service-action green distinct.
- Pair the filled registration pill with its white, green-bordered sales link.
- Preserve the navigation's colour change and the solution link's underline as separate interaction patterns.
- Keep the three unchanged action styles intact on hover and press within the measured pattern.
- Retain the browser's keyboard indication; no authored focus colour is established here.
- Keep Google, Genesys, LINE and consent styling outside the ECPay component palette.

## Voice & Tone

The homepage groups services around merchant tasks: “營運管理一站整合” and “AI 工具一站整合”. Actions are short and direct: “立即註冊”, “聯繫銷售顧問” and “了解更多”. This is an observation of the opened copy, not an official tone-of-voice guide. [Homepage](https://www.ecpay.com.tw/).

## Agent Prompt Guide

- “Build a white navigation header with a 67.8px-high fees link, 14px/400 text, padding `28px 15px 16px`, and text changing from `#333333` to `#408a00` on hover and held press. Font family is unresolved.”
- “Use a 54px-high dark-green registration pill beside a white, green-bordered sales pill; each has `0px 24px` padding and 16px/400 text. Preserve their observed unchanged hover and pressed appearance.”
- “Put an ECShop text link in a white bordered solution card; keep its green label and underline it on hover and held press.”
