<p align="center">
  <img src="logo-bg.png" width="480" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>Generate DESIGN.md from 67 real company design systems. Interactive wizard + shadcn/ui CSS export. Zero AI calls.</strong>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/github/license/kwakseongjae/oh-my-design?style=flat-square" alt="License" /></a>
  <a href="https://github.com/kwakseongjae/oh-my-design/stargazers"><img src="https://img.shields.io/github/stars/kwakseongjae/oh-my-design?style=social" alt="GitHub Stars" /></a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" />
  <img src="https://img.shields.io/badge/AI%20calls-zero-blue?style=flat-square" alt="Zero AI" />
  <img src="https://img.shields.io/badge/references-67-7c5cfc?style=flat-square" alt="67 References" />
</p>

<p align="center">
  <a href="README.ko.md">한국어</a> | <a href="README.ja.md">日本語</a> | <a href="README.zh-TW.md">繁體中文</a> | English
</p>

---

## What is oh-my-design?

**oh-my-design** picks up where [awesome-design-md](https://github.com/VoltAgent/awesome-design-md) left off.

Choose a real company's design system, customize it through an interactive A/B wizard, and export a production-ready `DESIGN.md` that any AI coding agent can use to generate consistent UI.

- Built on the [Google Stitch](https://stitch.withgoogle.com/) DESIGN.md format
- **No API keys. No AI calls. Everything runs client-side.**

## What's inside

- **Builder** — pick a reference, tune colors / radius / dark mode, select components, hit Export.
- **Design Systems Directory** ([oh-my-design.kr/design-systems](https://oh-my-design.kr/design-systems)) — 34 of the 67 references have a verified public design system or brand-guidelines page; the directory links straight out to each one with live thumbnails.
- **Personal Curation** ([oh-my-design.kr/curation](https://oh-my-design.kr/curation)) — a short MBTI-style quiz that maps your design personality to one of the 67 references and drops you straight into the builder with that reference preloaded.

## 67 Supported References

| Category | Companies |
|----------|-----------|
| **AI & LLM** | Claude, Cohere, ElevenLabs, Minimax, Mistral AI, Ollama, OpenCode AI, Replicate, RunwayML, Together AI, VoltAgent, xAI |
| **Design Tools** | Airtable, Clay, Figma, Framer, Miro, Webflow |
| **Developer Tools** | Cursor, Expo, Lovable, Raycast, Superhuman, Vercel, Warp |
| **Productivity** | Cal.com, freee, Intercom, Linear, Mintlify, Notion, Resend, Zapier |
| **Consumer Tech** | Airbnb, Apple, Baemin, Dcard, IBM, Kakao, Karrot, LINE, Mercari, NVIDIA, Pinkoi, Pinterest, SpaceX, Spotify, Uber |
| **Fintech** | Coinbase, Kraken, Revolut, Stripe, Toss, Wise |
| **Backend & DevOps** | ClickHouse, Composio, Hashicorp, MongoDB, PostHog, Sanity, Sentry, Supabase |
| **Automotive** | BMW, Ferrari, Lamborghini, Renault, Tesla |
| **Marketing** | Semrush |

> Use the **country filter** in the builder to browse by region (Korea, Taiwan, Japan, France, Italy, Germany, UK, US).

## Exported DESIGN.md

Follows the [Google Stitch DESIGN.md format](https://stitch.withgoogle.com/docs/design-md/overview/):

1. Visual Theme & Atmosphere
2. Color Palette & Roles
3. Typography Rules
4. Component Stylings
5. Layout Principles
6. Depth & Elevation
7. Do's and Don'ts
8. Responsive Behavior
9. Agent Prompt Guide
10. shadcn/ui Theme (CSS variables)

Plus: Style Preferences, Included Components, Iconography & SVG Guidelines, Document Policies (no-emoji rule).

## Project Structure

```
oh-my-design/
  references/        67 company DESIGN.md files
  src/               CLI core (TypeScript)
  web/               Next.js web builder
    src/app/         Landing + Builder + Directory pages
    src/components/  Wizard, Preview, Export
  test/              Vitest tests
```

## Acknowledgments

- [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) — the upstream collection of DESIGN.md files that seeded this project.
- [kzhrknt/awesome-design-md-jp](https://github.com/kzhrknt/awesome-design-md-jp) — Japanese-market design-system references.

oh-my-design extends these collections with an interactive customization wizard, A/B style preferences, component selection, a Design Systems directory, and a CLI export pipeline.

## License

[MIT](LICENSE)
