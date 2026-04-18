/**
 * Official design-system / brand-guideline links per reference.
 *
 * Each entry was verified live (not 404, not a marketing/auth wall).
 * Type distinguishes a full documented design system (components +
 * tokens + foundations) from a pure brand/trademark guidelines page.
 * Refs without a verified public site simply aren't in the map —
 * `getDesignSystem()` returns null and the UI hides the card.
 */

export type DesignSystemType = "system" | "brand";

export interface DesignSystemInfo {
  refId: string;
  name: string;
  url: string;
  type: DesignSystemType;
  description: string;
  /** og:image / twitter:image harvested from the site (scripts/fetch-og-images.mjs).
   *  Missing when the site doesn't publish one — UI falls back to a logo thumbnail. */
  ogImage?: string;
}

// og:image URLs harvested from each site's public meta tags on 2026-04-18
// via scripts/fetch-og-images.mjs. Re-run that script to refresh.
const OG_IMAGES: Record<string, string> = {
  airbnb: "https://firebasestorage.googleapis.com/v0/b/standards-site-beta.appspot.com/o/documents%2Fa130cd31136%2F099b28f7432%2Fmeta%2Fstandards---project-thumbnail.png?alt=media&token=b1ee4a9a-cb2a-4dd9-ae43-01dd309d6f17",
  airtable: "https://www.airtable.com/images/airtable-seo.jpg",
  apple: "https://docs.developer.apple.com/tutorials/developer-og.jpg",
  cohere: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/0750efbc3db33b1a67bc77575525b076f0137f26-1200x630.jpg?w=1200&h=630",
  cursor: "https://cursor.com/public/opengraph-image.png",
  elevenlabs: "https://elevenlabs.io/cover.png",
  expo: "https://og.expo.dev/?theme=universe&title=Brand%2C+Assets%2C+Styles&description=Get+Expo+brand+assets+and+styles+for+any+use.",
  figma: "https://cdn.sanity.io/images/599r6htc/regionalized/342e17642c7afa81206490b0dd21c3e5724ae040-2400x1260.png?w=1200&q=70&fit=max&auto=format",
  framer: "https://framerusercontent.com/assets/MFmOCFlEnwFAS9IP2HbUEH68axo.jpg",
  ibm: "https://carbondesignsystem.com/ogimage.png",
  line: "https://designsystem.line.me/static/36a4ead41b7b972b1130287e849a14b1/73f08/SEO_IMG_1741574443.png",
  "linear.app": "https://linear.app/api/og/generic?title=Brand&v=3",
  miro: "https://www.mirotone.xyz/cover.png",
  "mistral.ai": "https://mistral.ai/-/brand/opengraph-image-1robrb.png",
  "opencode.ai": "https://opencode.ai/social-share.png",
  posthog: "https://d36j3rcgc2qfsv.cloudfront.net/handbookcompanybrand-assets.jpeg",
  resend: "https://cdn.resend.com/cover-brand.png",
  sanity: "https://cdn.sanity.io/images/mos42crl/production/f378d0067c1406f4e3d3ed6874cd715c72f52d2c-1920x1080.png",
  supabase: "https://supabase.com/images/og/supabase-og.png",
  superhuman: "https://superhumanstatic.com/super-funnel/main/public/images/v3/social-share.png",
  "together.ai": "https://cdn.prod.website-files.com/69654e88dce9154b5f1206dd/69a49f8243e74bf4b805d130_og-brand.jpg",
  vercel: "https://assets.vercel.com/image/upload/v1709494095/front/design/geist-og.jpg",
  // wise → OG link (Hero-Illustration-Globe.webp) 404s in client fetch; let mShots render it instead.
  zapier: "https://firebasestorage.googleapis.com/v0/b/standards-site-beta.appspot.com/o/documents%2F279072ea39f%2F8fc2c38ae5f%2Fmeta%2Fthumbnail_1_2.jpg?alt=media&token=0d0ea63f-6a32-4e46-b516-9db3c6c6ffe4",
};

const DESIGN_SYSTEMS: Record<string, Omit<DesignSystemInfo, "refId" | "ogImage">> = {
  // ─────────── Full design systems (components + tokens + docs) ───────────
  apple: {
    name: "Human Interface Guidelines",
    url: "https://developer.apple.com/design/human-interface-guidelines",
    type: "system",
    description: "Apple's official design guidelines for iOS, macOS, watchOS, and visionOS.",
  },
  clickhouse: {
    name: "ClickHouse Design",
    url: "https://clickhouse.design",
    type: "system",
    description: "ClickHouse brand hub plus the Click UI design system and component library.",
  },
  freee: {
    name: "Vibes",
    url: "https://vibes.freee.co.jp",
    type: "system",
    description: "freee's open-source design system with accessibility-focused components.",
  },
  hashicorp: {
    name: "Helios",
    url: "https://helios.hashicorp.design",
    type: "system",
    description: "HashiCorp's design system documenting components and foundations.",
  },
  ibm: {
    name: "Carbon",
    url: "https://carbondesignsystem.com",
    type: "system",
    description: "IBM's open-source design system with React, Angular, Vue, and Web Components.",
  },
  karrot: {
    name: "SEED Design",
    url: "https://seed-design.io",
    type: "system",
    description: "Karrot (Daangn)'s open-source design system for marketplace apps.",
  },
  line: {
    name: "LINE Design System",
    url: "https://designsystem.line.me",
    type: "system",
    description: "LINE's shared design system for products across the LINE family.",
  },
  miro: {
    name: "Mirotone",
    url: "https://mirotone.xyz",
    type: "system",
    description: "Miro's CSS component library for apps built on the Miro platform.",
  },
  mongodb: {
    name: "LeafyGreen",
    url: "https://www.mongodb.design",
    type: "system",
    description: "MongoDB's open-source design system with an extensive React component library.",
  },
  pinterest: {
    name: "Gestalt",
    url: "https://gestalt.pinterest.systems",
    type: "system",
    description: "Pinterest's open-source React component library with tokens and foundations.",
  },
  sanity: {
    name: "Sanity UI",
    url: "https://www.sanity.io/ui",
    type: "system",
    description: "Sanity's accessible React toolkit for building apps with design tokens.",
  },
  toss: {
    name: "TDS",
    url: "https://tossmini-docs.toss.im/tds-mobile/",
    type: "system",
    description: "Toss's mobile design system — 40+ components, tokens, and hooks.",
  },
  uber: {
    name: "Base Web",
    url: "https://baseweb.design",
    type: "system",
    description: "Uber's React implementation of Base — a living component system.",
  },
  vercel: {
    name: "Geist",
    url: "https://vercel.com/geist",
    type: "system",
    description: "Vercel's design system with 50+ components, foundations, and brand resources.",
  },
  wise: {
    name: "Wise Design",
    url: "https://wise.design",
    type: "system",
    description: "Wise's design system covering foundations, components, patterns, and tone of voice.",
  },

  // ─────────── Brand / trademark guideline pages ───────────
  airbnb: {
    name: "Airbnb Brand Hub",
    url: "https://brand.withairbnb.com",
    type: "brand",
    description: "Airbnb's brand guidelines hub with logo, color, and visual identity rules.",
  },
  airtable: {
    name: "Airtable Trademark Guidelines",
    url: "https://www.airtable.com/company/trademark-guidelines",
    type: "brand",
    description: "Airtable's trademark usage and brand guidelines.",
  },
  clay: {
    name: "Clay Newsroom",
    url: "https://www.clay.com/press",
    type: "brand",
    description: "Clay's official press kit and co-branding guidelines.",
  },
  cohere: {
    name: "Cohere Newsroom",
    url: "https://cohere.com/newsroom",
    type: "brand",
    description: "Cohere's press kit with logos, symbols, and media resources.",
  },
  cursor: {
    name: "Cursor Brand",
    url: "https://www.cursor.com/brand",
    type: "brand",
    description: "Cursor's brand guidelines with logos, icons, and naming conventions.",
  },
  elevenlabs: {
    name: "ElevenLabs Brand",
    url: "https://elevenlabs.io/brand",
    type: "brand",
    description: "ElevenLabs brand guidelines covering logo, symbol, and product sub-brands.",
  },
  expo: {
    name: "Expo Brand",
    url: "https://expo.dev/brand",
    type: "brand",
    description: "Expo logo/wordmark trademark and usage guidelines.",
  },
  figma: {
    name: "Figma Brand Guidelines",
    url: "https://www.figma.com/using-the-figma-brand",
    type: "brand",
    description: "Figma's official trademark and brand usage guidelines with logo downloads.",
  },
  framer: {
    name: "Framer Brand Guidelines",
    url: "https://www.framer.com/brand",
    type: "brand",
    description: "Framer's brand and trademark guidelines with logo rules and color palette.",
  },
  "linear.app": {
    name: "Linear Brand",
    url: "https://linear.app/brand",
    type: "brand",
    description: "Linear's brand guidelines with wordmark, logomark, and color specifications.",
  },
  "mistral.ai": {
    name: "Mistral Brand",
    url: "https://mistral.ai/brand",
    type: "brand",
    description: "Mistral AI's logo, colors, typography, and brand asset kit.",
  },
  "opencode.ai": {
    name: "OpenCode Brand",
    url: "https://opencode.ai/brand",
    type: "brand",
    description: "OpenCode's terminal-oriented logo and brand assets.",
  },
  posthog: {
    name: "PostHog Brand Assets",
    url: "https://posthog.com/handbook/company/brand-assets",
    type: "brand",
    description: "PostHog's public handbook brand, logo, and illustration guidelines.",
  },
  raycast: {
    name: "Raycast Brand",
    url: "https://www.raycast.com/templates/brand-guidelines",
    type: "brand",
    description: "Raycast's brand guidelines with colors, logos, and asset kit.",
  },
  resend: {
    name: "Resend Brand",
    url: "https://resend.com/brand",
    type: "brand",
    description: "Resend's brand guidelines with wordmark, icons, and naming rules.",
  },
  // revolut → brand.revolut.com now gates behind SSO, so there's no public
  // surface to link. Dropped from the directory.
  superhuman: {
    name: "Superhuman Media Assets",
    url: "https://superhuman.com/media-assets",
    type: "brand",
    description: "Superhuman's press and brand asset kit.",
  },
  supabase: {
    name: "Supabase Brand Assets",
    url: "https://supabase.com/brand-assets",
    type: "brand",
    description: "Supabase's brand guidelines with logos and integration button specs.",
  },
  "together.ai": {
    name: "Together AI Brand",
    url: "https://www.together.ai/brand",
    type: "brand",
    description: "Together AI's logo, color, and typography brand guidelines.",
  },
  // x.ai → /legal/brand-guidelines sits behind Cloudflare's bot challenge,
  // so both og:image harvest and mShots screenshots fail. Dropped from the
  // directory; users can still open x.ai manually.
  zapier: {
    name: "Zapier Brand",
    url: "https://brand.zapier.com",
    type: "brand",
    description: "Zapier's official brand guidelines 1.0.",
  },
};

export function getDesignSystem(refId: string): DesignSystemInfo | null {
  const entry = DESIGN_SYSTEMS[refId];
  if (!entry) return null;
  return { refId, ogImage: OG_IMAGES[refId], ...entry };
}

/** All design-system entries, full systems first (alphabetical within each type). */
export function getAllDesignSystems(): DesignSystemInfo[] {
  return Object.entries(DESIGN_SYSTEMS)
    .map(([refId, v]) => ({ refId, ogImage: OG_IMAGES[refId], ...v }))
    .sort((a, b) => {
      if (a.type !== b.type) return a.type === "system" ? -1 : 1;
      return a.name.localeCompare(b.name);
    });
}
