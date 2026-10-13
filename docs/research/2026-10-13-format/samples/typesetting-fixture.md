---
name: Typesetting Fixture
colors:
  primary: "#3182f6"
typography:
  body:
    fontFamily: "Brand Sans, Noto Sans KR, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
fonts:
  roles:
    ui: Brand Sans
  faces:
    Brand Sans:
      scripts: [hangul, latin]
      evidence: [official-product-use]
      distribution: none-asserted
      substitutes:
        hangul:
          family: Noto Sans KR
          provider: google
          label: substitute — not the brand face
        latin:
          family: Noto Sans
          provider: google
          label: substitute — not the brand face
  safeDefaults:
    hangul: [Noto Sans KR]
    kana: [Noto Sans JP]
    han-hant: [Noto Sans TC]
    han-hans: [Noto Sans SC]
    latin: [Noto Sans]
typesetting:
  hangul:
    wordBreak: keep-all
    lineBreak: strict
    stack: [Brand Sans, Noto Sans KR, sans-serif]
    punctuation:
      compression: none
      hanging: none
    interScriptSpacing: none
    tracking:
      body:
        em: -0.01
      display:
        emMin: -0.03
        emMax: -0.02
    leading:
      min: 1.5
      max: 1.7
    numerals: tabular
  kana:
    wordBreak: normal
    lineBreak: strict
    stack: [Noto Sans JP, sans-serif]
    punctuation:
      compression: palt
      hanging: allow-end
    interScriptSpacing: autospace
    writingMode: horizontal-tb
  han-hant:
    lineBreak: strict
    punctuation:
      compression: none
  latin:
    wordBreak: normal
    tracking:
      body: normal
---

# Typesetting Fixture

## Overview

Fixture that exercises every `typesetting:` and `fonts:` field defined in spec/design-md-v3.md §6–§7. It exists only to prove that Google lint stays silent on both keys.

## Colors

- **Primary** (`#3182f6`).

## Typography

Body uses Brand Sans; Noto Sans KR is a substitute — not the brand face.

## CJK Typesetting

Prose explanation of the structured fields above.
