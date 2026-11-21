---
title: "Measuring the brand colors of 169 Korean services: blue is the largest hue family under all seven ways of choosing the primary color (29.5–36.6%)"
description: "We collected the brand colors of the 185 Korean services listed as verified references on oh-my-design as hex codes, counted them by hue family, and calculated the contrast of the text on each primary action button."
date: 2026-11-21
tags: [data, brand-color, accessibility, korea]
---

oh-my-design is an archive that records the colors, fonts and button values of real services from their public web pages and materials, one reference file (DESIGN.md) per service. 185 Korean services are listed there as verified references. They are the services in this archive, not a sample drawn from all Korean services. For 169 of them, the color each reference file states as its primary could be pinned to a single color code. Sorted into hue families, the most common color among those 169 is blue: 60 services, or 35.5%. We counted again under seven different ways of choosing the primary color, and blue was the largest family every time, at between 29.5% and 36.6%. Under no method did the second-largest family exceed 13.2%. The figures were calculated on November 21, 2026.

<picture>
<source media="(max-width: 639px)" srcset="/blog-assets/korean-brand-colors-measured/figure-wall-en-narrow.svg" width="360" height="870">
<img src="/blog-assets/korean-brand-colors-measured/figure-wall-en.svg" alt="Swatches of the primary colors of 169 Korean services, one per service, grouped by hue family: red 18, orange 13, yellow 7, green 17, teal/cyan 14, blue 60, indigo/violet 10, magenta/pink 6, achromatic: black-ish 12, achromatic: grey 10, achromatic: white-ish 2" width="720" height="769">
</picture>

Figure: the primary colors of the 169 services chosen under Rule W. One swatch is one service; the swatches are grouped by hue family and ordered by hue angle within each family. Each swatch is the primary color value recorded in `rows.json`, and the number of services per family matches the table below (W1). Every figure in this article is drawn by [`docs/research/2026-11-14-kr-brand-colours/figures.py`](https://github.com/kwakseongjae/oh-my-design/blob/main/docs/research/2026-11-14-kr-brand-colours/figures.py) in the oh-my-design public repository, from `rows.json`, `contrast-recheck.json` and `tables.md` in the same folder.

| Hue family | Range (HSL) | Services | Share |
|---|---|---:|---:|
| blue | H 200–250° | 60 | 35.5% |
| red | H 345–15° | 18 | 10.7% |
| green | H 70–165° | 17 | 10.1% |
| teal/cyan | H 165–200° | 14 | 8.3% |
| orange | H 15–45° | 13 | 7.7% |
| achromatic: black-ish | L below 8% | 12 | 7.1% |
| indigo/violet | H 250–290° | 10 | 5.9% |
| achromatic: grey | S below 10% | 10 | 5.9% |
| yellow | H 45–70° | 7 | 4.1% |
| magenta/pink | H 290–345° | 6 | 3.6% |
| achromatic: white-ish | L above 95% | 2 | 1.2% |
| Total | | 169 | |

H is the hue angle, S the saturation and L the lightness; each range includes its lower bound. The table above is W1 in [`docs/research/2026-11-14-kr-brand-colours/tables.md`](https://github.com/kwakseongjae/oh-my-design/blob/main/docs/research/2026-11-14-kr-brand-colours/tables.md) in the oh-my-design public repository. The other tables and figures in this post come from that file and from the raw rows (`rows.json`) in the same folder (calculated 2026-11-21). Button text sizes were read from each service's DESIGN.md. Names in parentheses such as W1 and W5 are section names in `tables.md`.

## Which color is most common?

<picture>
<source media="(max-width: 639px)" srcset="/blog-assets/korean-brand-colors-measured/figure-hues-en-narrow.svg" width="360" height="633">
<img src="/blog-assets/korean-brand-colors-measured/figure-hues-en.svg" alt="Bar chart of the primary colors of 169 Korean services, counted by hue family: blue 60 (35.5%), red 18 (10.7%), green 17 (10.1%), teal/cyan 14 (8.3%), orange 13 (7.7%), achromatic: black-ish 12 (7.1%), indigo/violet 10 (5.9%), achromatic: grey 10 (5.9%), yellow 7 (4.1%), magenta/pink 6 (3.6%), achromatic: white-ish 2 (1.2%). Each bar is drawn from the primary colors of the services in that family" width="720" height="497">
</picture>

Figure: services per hue family of the primary color (Rule W, 169 services). Each bar is drawn from the primary colors of the services in that family, one stripe per service, and the values are the same as in the table above (W1).

After blue's 60 services come red with 18 (10.7%), green with 17 (10.1%), teal/cyan with 14 (8.3%) and orange with 13 (7.7%). Among the achromatic colors, black-ish was the largest group, with 12 services (7.1%).

Blue here means HSL hue angles from 200° to 250°. A sky blue with a hue angle below 200° counts as teal/cyan, as with the `#00b7ff` of [Gaudio Lab](https://oh-my-design.kr/design-systems/gaudiolab), an audio-technology company. A dark color in that hue range still counts as blue as long as its lightness is at least 8% and its saturation at least 10%. Under this rule, near-black colors such as `#15181e` from [Imweb](https://oh-my-design.kr/design-systems/imweb), a website builder and brand-commerce platform, `#1c2028` from [Bithumb](https://oh-my-design.kr/design-systems/bithumb), a virtual-asset exchange, and `#002c5f` from [Hyundai](https://oh-my-design.kr/design-systems/hyundai) (Hyundai Motor Company) fall into blue. `#3182f6` from [Toss](https://oh-my-design.kr/design-systems/toss), a financial platform, `#0066ff` from [Wanted](https://oh-my-design.kr/design-systems/wanted), a career platform, `#0046ff` from [Shinhan Bank](https://oh-my-design.kr/design-systems/shinhanbank) and `#0067ac` from [Woori Bank](https://oh-my-design.kr/design-systems/wooribank) are also in the blue family.

These shares depend on how the primary color is chosen, so we counted the same references in seven ways (W5).

| How the primary color was chosen | Services counted | Blue | Second-largest family |
|---|---:|---:|---|
| Rule W (this article) | 169 | 60 (35.5%) | red 18 (10.7%) |
| Rule S (first draft) | 153 | 56 (36.6%) | red 15 (9.8%) |
| The original button rule | 176 | 54 (30.7%) | achromatic: black-ish 22 (12.5%) |
| The catalog's representative color (`primaryColor`) | 185 | 63 (34.1%) | red and achromatic: black-ish, 19 each (10.3%) |
| Background of the first non-white button | 176 | 52 (29.5%) | achromatic: black-ish 22 (12.5%) |
| `primary` token only | 149 | 52 (34.9%) | red 15 (10.1%) |
| The button rule with near-white buttons filtered out | 174 | 55 (31.6%) | achromatic: black-ish 23 (13.2%) |

<picture>
<source media="(max-width: 639px)" srcset="/blog-assets/korean-brand-colors-measured/figure-rules-en-narrow.svg" width="360" height="664">
<img src="/blog-assets/korean-brand-colors-measured/figure-rules-en.svg" alt="Bar chart of the share of blue and of the second-largest family under each of the seven ways of choosing the primary color. Blue: Rule W (this article) 35.5%, Rule S (first draft) 36.6%, The original button rule 30.7%, The catalog's representative color (primaryColor) 34.1%, Background of the first non-white button 29.5%, primary token only 34.9%, The button rule with near-white buttons filtered out 31.6%. The second-largest family is 13.2% or less under every method" width="720" height="679">
</picture>

Figure: the share of blue (dark bar) and of the second-largest family (light bar) under each of the seven methods. The light violet band marks the range from 29.5% to 36.6%. The values are the same as in the table above (W5).

Blue was the largest family under all seven methods, at between 29.5% and 36.6%. There is no basis for picking any single value in that range as the correct one, so the title gives the range.

## Does it differ by sector?

We split the services by the sector recorded in the catalog (W2). Only sectors with 8 or more references are shown.

| Sector | Services counted | Blue | Largest family other than blue |
|---|---:|---:|---|
| Consumer tech | 53 | 14 | green 9 |
| Fintech | 29 | 14 | yellow 5 |
| Commerce | 23 | 5 | red 5 |
| AI | 15 | 7 | red 2, green 2 |
| Education | 11 | 1 | red 2, orange 2, teal/cyan 2, indigo/violet 2 |
| SaaS | 9 | 4 | achromatic: grey 2 |
| Healthcare | 8 | 4 | teal/cyan 2 |

<picture>
<source media="(max-width: 639px)" srcset="/blog-assets/korean-brand-colors-measured/figure-sectors-en-narrow.svg" width="360" height="506">
<img src="/blog-assets/korean-brand-colors-measured/figure-sectors-en.svg" alt="Seven strips, one per sector, each showing the primary colors of the services counted in that sector, one cell per service. Consumer tech: 14 of 53 blue, Fintech: 14 of 29 blue, Commerce: 5 of 23 blue, AI: 7 of 15 blue, Education: 1 of 11 blue, SaaS: 4 of 9 blue, Healthcare: 4 of 8 blue" width="720" height="499">
</picture>

Figure: for each sector, the primary colors of the services counted, one cell per service, ordered by hue family and hue angle. The length of a strip is the number of services counted, which matches the table above (W2).

Blue was the largest family in five sectors: consumer tech, fintech, AI, SaaS and healthcare. In commerce, blue and red are tied at 5 services each. In education, 1 of 11 services is blue.

In fintech, 14 of 29 services are blue, and not one has an achromatic primary. Of the 7 yellow services overall, 5 are in fintech: [KakaoBank](https://oh-my-design.kr/design-systems/kakaobank), [KakaoPay](https://oh-my-design.kr/design-systems/kakaopay), [KB국민은행](https://oh-my-design.kr/design-systems/kb-kookmin) (KB Kookmin Bank), [KB Insurance](https://oh-my-design.kr/design-systems/kbinsurance) and [KB Pay](https://oh-my-design.kr/design-systems/kbpay). The other two are [Kakao](https://oh-my-design.kr/design-systems/kakao), a mobile-life platform, and [KakaoPage](https://oh-my-design.kr/design-systems/kakaopage), Kakao Entertainment's webtoon and web-novel service.

Among the 23 commerce services, the 4 black-ish and 3 grey primaries add up to 7, more than either blue or red. The 4 black-ish ones are [29CM](https://oh-my-design.kr/design-systems/29cm), [Musinsa](https://oh-my-design.kr/design-systems/musinsa), [롯데ON](https://oh-my-design.kr/design-systems/lotteon) (Lotte ON) and [IICOMBINED](https://oh-my-design.kr/design-systems/iicombined). The 3 grey ones are [Brandi](https://oh-my-design.kr/design-systems/brandi), [Sinsang Market (Dealicious)](https://oh-my-design.kr/design-systems/dealicious) and [KREAM](https://oh-my-design.kr/design-systems/kream). The 5 red ones are [11st](https://oh-my-design.kr/design-systems/11st), [Ably](https://oh-my-design.kr/design-systems/ably), [Bunjang](https://oh-my-design.kr/design-systems/bunjang), [Hyundai Hmall](https://oh-my-design.kr/design-systems/hmall) and [SSG.COM](https://oh-my-design.kr/design-systems/ssg).

This table counts how often a sector and a color occur together. The data cannot tell us why the distribution looks like this. The number of services counted per sector ranges from 8 to 53.

## Which services share the same color code?

We looked for services whose primary hex matches character for character (W3). 8 values are shared by two or more services, and 26 services are involved.

- `#000000`, 9 services: [29CM](https://oh-my-design.kr/design-systems/29cm), [KRAFTON](https://oh-my-design.kr/design-systems/krafton), [롯데ON](https://oh-my-design.kr/design-systems/lotteon), [Musinsa](https://oh-my-design.kr/design-systems/musinsa), [POZAlabs](https://oh-my-design.kr/design-systems/pozalabs), [Remember](https://oh-my-design.kr/design-systems/remember), [Samsung](https://oh-my-design.kr/design-systems/samsung), [Stayfolio](https://oh-my-design.kr/design-systems/stayfolio), [Yanolja](https://oh-my-design.kr/design-systems/yanolja)
- `#222222`, 4 services: [Sinsang Market (Dealicious)](https://oh-my-design.kr/design-systems/dealicious), [Greencar](https://oh-my-design.kr/design-systems/greencar), [KREAM](https://oh-my-design.kr/design-systems/kream), [Return Zero](https://oh-my-design.kr/design-systems/returnzero)
- `#3182f6`, 3 services: [Toss](https://oh-my-design.kr/design-systems/toss), [Toss Securities](https://oh-my-design.kr/design-systems/toss-securities), [Toss Bank](https://oh-my-design.kr/design-systems/tossbank)
- `#0066ff`, 2 services: [MediBloc](https://oh-my-design.kr/design-systems/medibloc), [Wanted](https://oh-my-design.kr/design-systems/wanted)
- `#111111`, 2 services: [Genesis](https://oh-my-design.kr/design-systems/genesis), [IICOMBINED](https://oh-my-design.kr/design-systems/iicombined)
- `#256ef4`, 2 services: [Government24](https://oh-my-design.kr/design-systems/gov24), [KRDS](https://oh-my-design.kr/design-systems/krds)
- `#ffcc00`, 2 services: [KB국민은행](https://oh-my-design.kr/design-systems/kb-kookmin), [KB Pay](https://oh-my-design.kr/design-systems/kbpay)
- `#ffffff`, 2 services: [Lemonbase](https://oh-my-design.kr/design-systems/lemonbase), [NCSOFT](https://oh-my-design.kr/design-systems/ncsoft)

<picture>
<source media="(max-width: 639px)" srcset="/blog-assets/korean-brand-colors-measured/figure-shared-en-narrow.svg" width="360" height="599">
<img src="/blog-assets/korean-brand-colors-measured/figure-shared-en.svg" alt="Swatches of the 8 primary color codes shared by two or more services, with the services that use each. #000000 9 services, #222222 4, #3182f6 3, and #0066ff, #111111, #256ef4, #ffcc00 and #ffffff 2 each" width="720" height="645">
</picture>

Figure: the 8 primary color codes shared by two or more services, with the services that use each (W3). The family name beside each value follows the ranges in the first table.

`#222222` has an L above 8%, so it counts as grey, not black-ish. Two dark colors can land on different sides: `#111111` goes to black-ish and `#222222` to grey.

If you are looking up Toss's color code, note that there are two values. The `primary` token of all three Toss services is `#3182f6`, and the background of Toss's `tds-button` is the same value. The catalog's representative color (`primaryColor`), however, is `#0064ff` for Toss and Toss Bank and `#3182f6` for Toss Securities (note under S5). The Toss Bank DESIGN.md records the two separately: `#0064ff` as the brand blue stated by the Toss brand resource center, and `#3182f6` as the value observed on public pages.

## Is the text on primary action buttons easy to read?

Among the 169 services with a primary color, we collected the buttons whose background is exactly that primary color and whose text color is given as an opaque value (W4). 95 services had at least one such button; 74 had none. Where a service had several, we took the button with the highest contrast as that service's value. This counts each service in its most favorable light.

The median contrast ratio across the 95 services is 5.03:1. 34 services (35.8%) fall below 4.5:1, and 12 (12.6%) below 3:1. Those 34, however, include buttons that are not primary actions, because every button whose background matched the primary color was counted regardless of its name.

So we checked each of the 34 buttons against that service's DESIGN.md. A button counted as a primary action only if the file calls it the primary action, or if it performs one of the service's Primary tasks as the file lists them. 23 services passed this test. On November 21, 2026 we re-measured those 23 on each service's home page and kept in the table below only the 18 where white text is still drawn on the same background color. For Karrot, Toss, Team Sparta and idus (Backpackr), that background color was not found on the home page, and Ably showed only black text on it. Their buttons may sit on pages other than the home page, so this re-measurement could not confirm these five; it does not mean their values are wrong (`contrast-recheck.md` in the same folder). The other 11 of the 34 are not named (W4b). They are buttons leading to job postings or recruiting sites, buttons that open menus and slider arrows, icon buttons with no text, a banner button whose color changes on other slides, a write button that is not among the Primary tasks, and buttons whose purpose or Primary task the file does not state. Deciding which buttons are primary actions was done from the reference files alone, without measuring again in a browser.

| Contrast | Service | Button background | Which button |
|---:|---|---|---|
| 2.28:1 | [Gaudio Lab](https://oh-my-design.kr/design-systems/gaudiolab) | `#00b7ff` | Contact us button in the home hero |
| 2.30:1 | [JANDI](https://oh-my-design.kr/design-systems/jandi) | `#00c473` | Primary action in the global top navigation |
| 2.30:1 | [LaundryGo](https://oh-my-design.kr/design-systems/laundrygo) | `#0ac290` | Contact button fixed on the three recorded pages ("상담 문의하기", Request a consultation, and others), large text |
| 2.64:1 | [MiriCanvas](https://oh-my-design.kr/design-systems/miricanvas) | `#21afbf` | Primary action in the home hero |
| 2.89:1 | [Stibee](https://oh-my-design.kr/design-systems/stibee) | `#ff6464` | "무료로 시작하기" (Start for free) |
| 3.17:1 | [Moreh](https://oh-my-design.kr/design-systems/moreh) | `#ff5700` | Request Demo |
| 3.24:1 | [Greeting](https://oh-my-design.kr/design-systems/greeting) | `#1890ff` | "도입 문의" (adoption inquiry) |
| 3.33:1 | [Pet Friends](https://oh-my-design.kr/design-systems/petfriends) | `#ff4081` | "APP 설치하기" (Install the app) in the sign-up coupon sheet |
| 3.39:1 | [여기어때](https://oh-my-design.kr/design-systems/yeogiotte) (GoodChoice) | `#1d8bff` | "검색" (Search) for stays on the home page |
| 3.42:1 | [Classum](https://oh-my-design.kr/design-systems/classum) | `#ff4438` | Primary action in the home hero |
| 3.68:1 | [Buzzvil](https://oh-my-design.kr/design-systems/buzzvil) | `#f44336` | "문의하기" (Contact us) |
| 3.71:1 | [Toss Securities](https://oh-my-design.kr/design-systems/toss-securities) | `#3182f6` | Primary action on the public WTS screen |
| 3.73:1 | [Moin](https://oh-my-design.kr/design-systems/moin) | `#0082ff` | "송금 시작하기" (Start a transfer) |
| 3.77:1 | [Watcha](https://oh-my-design.kr/design-systems/watcha) | `#f82f62` | "로그인" (Log in) at the top |
| 3.89:1 | [ProtoPie](https://oh-my-design.kr/design-systems/protopie) | `#8169ff` | Book a Demo at the top |
| 4.09:1 | [SOCAR](https://oh-my-design.kr/design-systems/socar) | `#0078ff` | "웹에서 예약하기" (Book on the web) |
| 4.14:1 | [Payhere](https://oh-my-design.kr/design-systems/payhere) | `#0077fe` | "구입하기" (Buy) on the hardware product cards, large text |
| 4.33:1 | [Heydealer](https://oh-my-design.kr/design-systems/heydealer) | `#396eff` | Car search button on the home page |

<picture>
<source media="(max-width: 639px)" srcset="/blog-assets/korean-brand-colors-measured/figure-contrast-en-narrow.svg" width="360" height="930">
<img src="/blog-assets/korean-brand-colors-measured/figure-contrast-en.svg" alt="The 18 services in the table redrawn as buttons with a white label, in order of contrast ratio. Gaudio Lab 2.28:1, JANDI 2.30:1, LaundryGo 2.30:1, MiriCanvas 2.64:1, Stibee 2.89:1, Moreh 3.17:1, Greeting 3.24:1, Pet Friends 3.33:1, 여기어때 (GoodChoice) 3.39:1, Classum 3.42:1, Buzzvil 3.68:1, Toss Securities 3.71:1, Moin 3.73:1, Watcha 3.77:1, ProtoPie 3.89:1, SOCAR 4.09:1, Payhere 4.14:1, Heydealer 4.33:1. Dashed lines at 3:1 and 4.5:1" width="720" height="978">
</picture>

Figure: the 18 services in the table, redrawn as button specimens. Only the background and label colors come from the reference files; the shape, size and typeface of the buttons, and the service name written on each, were chosen for the figure. These are not screenshots. The position of each dot is the contrast ratio, and the dashed lines mark 3:1 and 4.5:1 (W4a, `contrast-recheck.md`).

The text color is `#ffffff` for all 18, so the table has no column for it. 5 of the 18 fall below even 3:1 (W4a, `contrast-recheck.md`).

These figures alone cannot tell you whether a button meets an accessibility standard. 4.5:1 is what WCAG 2.x AA requires for body-size text, and 3:1 is what it requires for large text. This count does not include text size or weight, so for a service between 3:1 and 4.5:1 the verdict depends on whether the button text is large text. Checking the 18 services against the button text size and weight recorded in their reference files, two qualify as WCAG large text (18pt or more, or 14pt or more in bold): LaundryGo and Payhere, marked "large text" in the table. The 3:1 threshold applies to these two; Payhere (4.14:1) passes it and LaundryGo (2.30:1) does not.

What we measured is two values per button, as each DESIGN.md recorded them from public pages and materials: the background color and the text color. Hover and pressed colors are not included.

## How does Korea compare with Japan and Taiwan?

We also counted the verified references from Japan and Taiwan (S6). Rule W in this article was widened by reading Korean reference files only, so the three-country comparison uses Rule S, the rule before widening. The services counted are 153 in Korea (of 185), 56 in Japan (of 76) and 29 in Taiwan (of 34).

| Hue family | Korea (153) | Japan (56) | Taiwan (29) |
|---|---:|---:|---:|
| blue | 56 (36.6%) | 22 (39.3%) | 9 (31.0%) |
| red | 15 (9.8%) | 13 (23.2%) | 5 (17.2%) |
| green | 14 (9.2%) | 4 (7.1%) | 3 (10.3%) |
| teal/cyan | 14 (9.2%) | 8 (14.3%) | 6 (20.7%) |
| orange | 12 (7.8%) | 4 (7.1%) | 4 (13.8%) |
| achromatic: black-ish | 11 (7.2%) | 3 (5.4%) | 0 (0.0%) |
| indigo/violet | 10 (6.5%) | 0 (0.0%) | 0 (0.0%) |
| achromatic: grey | 8 (5.2%) | 2 (3.6%) | 0 (0.0%) |
| magenta/pink | 6 (3.9%) | 0 (0.0%) | 2 (6.9%) |
| yellow | 5 (3.3%) | 0 (0.0%) | 0 (0.0%) |
| achromatic: white-ish | 2 (1.3%) | 0 (0.0%) | 0 (0.0%) |

<picture>
<source media="(max-width: 639px)" srcset="/blog-assets/korean-brand-colors-measured/figure-countries-en-narrow.svg" width="360" height="426">
<img src="/blog-assets/korean-brand-colors-measured/figure-countries-en.svg" alt="The primary colors of Korea, Japan and Taiwan, one strip per country (Rule S). Blue is 36.6% of 153 services in Korea, 39.3% of 56 in Japan and 31.0% of 29 in Taiwan. The second-largest family is red at 9.8% in Korea, red at 23.2% in Japan and teal/cyan at 20.7% in Taiwan" width="720" height="456">
</picture>

Figure: for each country, the primary colors of the services counted under Rule S, laid out in one strip in cells of equal width. The brackets under each strip mark the stretch taken by blue and by the second-largest family, and the values are the same as in the table above (S6).

Blue is the largest family in all three countries. Second place goes to red in Korea and Japan and to teal/cyan in Taiwan. Counted under Rule W, Korea's blue share is 60 of 169 services (35.5%) (W6).

## How we counted

The sample is the 185 references in the catalog whose country is Korea and whose quality status is verified (`verified_v2`). The 23 partially verified references (partial) and the 21 older snapshots (legacy_snapshot) are not included. For each reference we read `colors` and `components` from the frontmatter of `web/references/<id>/DESIGN.md`.

The primary color was chosen with Rule W.

1. If the `colors.primary` token is an opaque color, use that value.
2. If there is no such token, use the background of the first button whose name contains `primary`. Buttons whose names also contain `marketing`, `secondary`, `ghost`, `outline` or `tertiary` are skipped, and only buttons with an opaque background and an L of 95% or less are considered.
3. If neither exists, read the reference file and use the token the file presents as its main color. This is accepted only when the file's color list describes that token as an official or brand color, or as the color that fills action buttons such as purchase or sign-in, and when its value equals the catalog's representative color.
4. If the primary color still cannot be determined, leave the reference out of the count.

Steps 1 and 2 are Rule S from the first draft, and they settled 153 services. Because Rule S looked only at a token named `primary` and at buttons with `primary` in their names, it left out 32 services that had neither. In most of them, the main color token is simply not named `primary`. Step 3 was added for these 32. We read all 32 files one by one; the token name used for each service and the sentence it rests on are in `missing-32.md`.

<picture>
<source media="(max-width: 639px)" srcset="/blog-assets/korean-brand-colors-measured/figure-method-en-narrow.svg" width="360" height="346">
<img src="/blog-assets/korean-brand-colors-measured/figure-method-en.svg" alt="The 185 verified Korean references drawn one tile each. The 153 settled by steps 1 and 2 (Rule S) and the 16 added in step 3 are shown in their primary color; the 16 that could not be determined are empty tiles" width="720" height="383">
</picture>

Figure: the 185 verified Korean references, one tile each. The 153 settled by Rule S and the 16 added in step 3 are drawn in their primary color; the 16 that could not be determined are drawn as empty tiles (W1).

- Added, 16 services: [Naver](https://oh-my-design.kr/design-systems/naver) (`brand`), [11st](https://oh-my-design.kr/design-systems/11st) (`brand-red`), [Shinhan Bank](https://oh-my-design.kr/design-systems/shinhanbank) (`brand-primary`), [Woori Bank](https://oh-my-design.kr/design-systems/wooribank) (`brand-deep-blue`), [Kakao](https://oh-my-design.kr/design-systems/kakao) (`login`), [KB국민은행](https://oh-my-design.kr/design-systems/kb-kookmin) (`header-accent`), [Melon](https://oh-my-design.kr/design-systems/melon) (`signature-green`), [Olive Young](https://oh-my-design.kr/design-systems/oliveyoung) (`corporate-brand-green`), [National Health Insurance Service](https://oh-my-design.kr/design-systems/nhis) (`nhis-primary`), [Ohouse](https://oh-my-design.kr/design-systems/ohouse) (`action`), [Class101](https://oh-my-design.kr/design-systems/class101) (`brand`), [CatchTable](https://oh-my-design.kr/design-systems/catchtable) (`brand-orange`), [Hwahae](https://oh-my-design.kr/design-systems/hwahae) (`label`), [Brandi](https://oh-my-design.kr/design-systems/brandi) (`action-direct`), [Korea Expressway Corporation](https://oh-my-design.kr/design-systems/koexpressway) (`service-fill`), [Remember](https://oh-my-design.kr/design-systems/remember) (`action-black`)
- Left out, 16 services: [Coupang](https://oh-my-design.kr/design-systems/coupang), [CGV](https://oh-my-design.kr/design-systems/cgv), [ZIGZAG](https://oh-my-design.kr/design-systems/zigzag), [Millie](https://oh-my-design.kr/design-systems/millie), [카카오게임즈](https://oh-my-design.kr/design-systems/kakaogames) (Kakao Games), [SK텔레콤](https://oh-my-design.kr/design-systems/sktelecom), [Upbit](https://oh-my-design.kr/design-systems/upbit), [RIDI](https://oh-my-design.kr/design-systems/ridi), [TVING](https://oh-my-design.kr/design-systems/tving), [Wavve](https://oh-my-design.kr/design-systems/wavve), [Kakao T](https://oh-my-design.kr/design-systems/kakaot), [강남언니](https://oh-my-design.kr/design-systems/gangnamunni) (Gangnamunni), [Hyundai Card](https://oh-my-design.kr/design-systems/hyundaicard), [Megastudy](https://oh-my-design.kr/design-systems/megastudy), [flex](https://oh-my-design.kr/design-systems/flex), [Datarize](https://oh-my-design.kr/design-systems/datarize)

For the 16 left out, this does not mean the service has no primary color. It means the reference file alone was not enough to settle on a single one: the representative color matched only a text color token, or did not appear among the tokens at all, or the file stated that it does not define a brand color, or there were two candidates with no order between them. The catalog's representative color was used only to corroborate, and only where the same value appears among that reference's tokens. Even if we also count those of the 16 left-out services whose representative color is among their tokens, blue is 64 of 180 services (35.6%) (W7).

The original button rule took the first button with primary in its name, or, if there was none, the first non-white button. That rule sometimes picked a near-white secondary button as the primary color. For Toss, it picked `#e8f3ff` from the `marketing-primary` button. Rules S and W look at tokens first and filter out near-white buttons.

Hue families were assigned by converting each primary color to HSL. Achromatic colors were separated first, and the rest were split by the hue-angle ranges in the first table. Achromatic colors were checked in this order:

- L below 8%: achromatic: black-ish
- L above 95%: achromatic: white-ish
- otherwise, S below 10%: achromatic: grey

These thresholds were set for this count, so a color near a boundary moves into the neighboring family if the threshold shifts even slightly. Sectors are the catalog's `category` values as they are.

A DESIGN.md records each service's public web pages and materials, and each reference was recorded on a different date. The calculation script and the raw rows are in `docs/research/2026-11-14-kr-brand-colours/`, the same folder as `tables.md`. `compute.py` does the calculation, `rows.json` holds the raw row for each reference, `method.md` sets out the decision criteria, and `missing-32.md` gives the reasoning for the 32 services. `figures.py` in the same folder redraws the bar chart above from `rows.json`.

## What should you check alongside the primary color?

Three things follow directly from the data.

First, choose the primary color as a pair with the text color that will sit on it, and measure the contrast of the two together. If white text were placed on all 169 primary colors, 91 (53.8%) would fall below 4.5:1 and 45 (26.6%) below 3:1. These are calculated from that assumption, not from values recorded on actual buttons (W4c).

Second, choosing blue does not by itself give enough contrast with white text. 8 of the 18 services in the table above are in the blue family. That includes `#3182f6` from Toss Securities, an investment platform, `#0078ff` from SOCAR, a car-sharing platform, and `#396eff` from Heydealer, a used-car platform, and the white text on each of their primary action buttons falls between 3:1 and 4.5:1. With a primary color like these, you need to decide the size and weight of the button text before you can say which threshold it meets.

Third, some services put dark text on a light primary color. [Modusign](https://oh-my-design.kr/design-systems/modusign), an electronic-signature and contract platform, sets `#000000` text on `#fed05f` in its "무료 체험 시작" (Start free trial) button, at 14.40:1. [3o3](https://oh-my-design.kr/design-systems/3o3), a tax-refund service, sets `#000000` text on `#fbbd41` in its "내 환급금 조회하기" (Check my refund) button, at 12.46:1. Both buttons were confirmed as primary actions by the same test as above (W4d).

All Korean references are in [oh-my-design's list of Korean design systems](https://oh-my-design.kr/design-systems?region=KR).

<!-- fact map
Every figure comes from docs/research/2026-11-14-kr-brand-colours/tables.md (calculated 2026-11-21, compute.py re-run). tables.md unless stated otherwise.

Title and first paragraph
185 services: Population N = 185 / W1 N = 185
169 services, 60 services, 35.5%: W1 Rule W counted 169, blue 60, 35.5%
seven, 29.5–36.6%, 13.2%: W5 table and Claim sentence (the title's "all seven ways" is also W5) (blue being largest is asserted by compute.py)

W1 table (services and share per family): W1 Rule W n / share columns. Range (HSL) column: tables.md Bucket rule
Figures (drawn by figures.py; every number inside a figure is a value in the tables of the text; the English files end in -en.svg and -en-narrow.svg)
figure-wall: rows.json ruleW_primary and ruleW_family; services per family are W1
figure-hues: W1; the stripes are rows.json ruleW_primary
figure-rules: W5 blue share and runner-up share (red and black-ish at 10.3% each are red 19 and black-ish 19 in 1b)
figure-sectors: W2 counted and blue; cell colors are rows.json category and ruleW_primary
figure-shared: W3 hex, count, family, services
figure-contrast: the fill, text and ratio of the 18 rows of W4a whose contrast-recheck.json verdict starts with same; the 2 large-text services are on the "large text" line above
figure-countries: S6 KR/JP/TW n and share; cell colors are rows.json ruleS_primary
figure-method: Population 185, W1 Rule S 153, added 16, left out 16

Which color is most common?
red 18 (10.7%), green 17 (10.1%), teal/cyan 14 (8.3%), black-ish 12 (7.1%): W1
Gaudio Lab #00b7ff teal/cyan: W4a gaudiolab, rows.json ruleW_family teal/cyan
Imweb #15181e, Bithumb #1c2028, Hyundai #002c5f blue (dark examples): rows.json ruleW_primary, ruleW_family blue, ruleW_light 0.100/0.133/0.186 (L 8% or more, S 10% or more)
Toss #3182f6, Wanted #0066ff: W3 / Shinhan Bank #0046ff, Woori Bank #0067ac blue: W1 Added references
Seven-method table: each row of W5 (rule names from the W5 rule column: Rule W, Rule S, original measured rule, registry primaryColor, alt 1, alt 2, alt 3)

Does it differ by sector?
Each figure in the table: each row of W2 (consumer-tech 53, fintech 29, ecommerce 23, ai 15, education 11, saas 9, healthcare 8)
5 of the 7 yellow services in fintech and their names, the other 2: W1 yellow 7, W2 fintech yellow 5, rows.json ruleW_family yellow
Commerce black-ish 4, grey 3, red 5 names: rows.json ruleW_family and category ecommerce
8 to 53 services: W2 counted column

Same color code
8 values, 26 services, each row: W3
Toss note: Toss family note under S5, web/references/tossbank/DESIGN.md body

Text on primary action buttons
95 services, 74 services, median 5.03, 34 services (35.8%), 12 services (12.6%): W4 header list
23 kept (before the re-measurement), 11 dropped and why, the test: W4 "Of the 34" sentence, Test sentence, W4a, W4b. The 18 kept and 5 dropped after re-measuring on home pages on November 21: contrast-recheck.md
18 table rows (contrast, background, button): rows of the 23 in W4a with kept = yes in contrast-recheck.md; "Which button" is the last column of W4a (file quotes in compute.py CONTRAST_CHECK)
5 below 3:1 (of 18 rows), text color #ffffff: the after-recheck line under W4a; 8 in the blue family: family column of the 18 remaining W4a rows
2 large-text services (LaundryGo floating-cta 24px/700, Payhere purchase-button 32px/700): each web/references/<id>/DESIGN.md components.<component>.typography. The other 21 are below WCAG large text; karrot box-button gives no size (gates.md revision round 1)
File check without a browser: method.md Rule W section

Japan and Taiwan
whole S6 table, 153/185, 56/76, 29/34
Rule W Korea 60/169 35.5%: W6

How we counted
partial 23, legacy_snapshot 21: Population
153 services (Rule S), 32 services, 16 added, 16 left out, token names: W1, missing-32.md
four reasons for leaving out: missing-32.md Left out why column (ink-only, not-a-token, declined, two-candidates)
64/180 = 35.6%: W7
Toss marketing-primary #e8f3ff: S5 Toss family note, method.md decision 3

What to check alongside the primary color
91 services (53.8%), 45 services (26.6%): W4c
Toss Securities 3.71, SOCAR 4.09, Heydealer 4.33, 8 in the blue family: lines of W4a kept in contrast-recheck.md
18 kept after re-measurement, 5 dropped and why: contrast-recheck.md (recheck_contrast.mjs, 2026-11-21)
Modusign #fed05f/#000000 14.40, 3o3 #fbbd41/#000000 12.46, primary-action verdict: W4d (Kmong and KB Pay are dropped in W4d, so they are not named)
-->
