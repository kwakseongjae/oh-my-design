/**
 * Quiz Data — Company design tokens + question templates
 *
 * All color values are extracted from each company's DESIGN.md reference.
 * Scene types map to specific UI mockup renderers in company-mini-ui.tsx.
 */

import type { Temperature, Density, Elevation, Shape } from "./types";

/* ── Company Design Tokens ──────────────────────────────── */

export interface CompanyTokens {
  id: string;
  name: string;
  primary: string;
  bg: string;
  fg: string;
  accent?: string;
  border?: string;
  radius: string;
  shadow: string;
  darkNative: boolean;
  saturation: "muted" | "vivid";
  typography: "geometric" | "humanist" | "monospace";
}

export const COMPANY_TOKENS: Record<string, CompanyTokens> = {
  vercel: {
    id: "vercel",
    name: "Vercel",
    primary: "#171717",
    bg: "#ffffff",
    fg: "#171717",
    accent: "#0a72ef",
    border: "rgba(0,0,0,0.08)",
    radius: "6px",
    shadow: "rgba(0,0,0,0.08) 0px 0px 0px 1px",
    darkNative: false,
    saturation: "muted",
    typography: "geometric",
  },
  "linear.app": {
    id: "linear.app",
    name: "Linear",
    primary: "#5e6ad2",
    bg: "#08090a",
    fg: "#f7f8f8",
    accent: "#7170ff",
    border: "rgba(255,255,255,0.05)",
    radius: "6px",
    shadow: "inset 0 0.5px 0 0 rgba(255,255,255,0.1)",
    darkNative: true,
    saturation: "muted",
    typography: "geometric",
  },
  apple: {
    id: "apple",
    name: "Apple",
    primary: "#0071e3",
    bg: "#f5f5f7",
    fg: "#1d1d1f",
    accent: "#2997ff",
    border: "transparent",
    radius: "8px",
    shadow: "rgba(0,0,0,0.22) 3px 5px 30px",
    darkNative: false,
    saturation: "muted",
    typography: "geometric",
  },
  airbnb: {
    id: "airbnb",
    name: "Airbnb",
    primary: "#ff385c",
    bg: "#ffffff",
    fg: "#222222",
    accent: "#460479",
    border: "#c1c1c1",
    radius: "12px",
    shadow: "0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)",
    darkNative: false,
    saturation: "vivid",
    typography: "humanist",
  },
  notion: {
    id: "notion",
    name: "Notion",
    primary: "#0075de",
    bg: "#ffffff",
    fg: "#191919",
    accent: "#213183",
    border: "rgba(0,0,0,0.1)",
    radius: "4px",
    shadow: "0 1px 2px rgba(0,0,0,0.04)",
    darkNative: false,
    saturation: "muted",
    typography: "humanist",
  },
  claude: {
    id: "claude",
    name: "Claude",
    primary: "#c96442",
    bg: "#f5f4ed",
    fg: "#141413",
    accent: "#d97757",
    border: "#e8e6dc",
    radius: "12px",
    shadow: "0 0 0 1px rgba(0,0,0,0.06)",
    darkNative: false,
    saturation: "muted",
    typography: "humanist",
  },
  raycast: {
    id: "raycast",
    name: "Raycast",
    primary: "#FF6363",
    bg: "#07080a",
    fg: "#f9f9f9",
    accent: "#55b3ff",
    border: "rgba(255,255,255,0.06)",
    radius: "6px",
    shadow: "inset 0 0.5px 0 rgba(255,255,255,0.12), 0 2px 4px rgba(0,0,0,0.4)",
    darkNative: true,
    saturation: "vivid",
    typography: "geometric",
  },
  expo: {
    id: "expo",
    name: "Expo",
    primary: "#000000",
    bg: "#f0f0f3",
    fg: "#1c2024",
    accent: "#0d74ce",
    border: "#e0e1e6",
    radius: "6px",
    shadow: "0 3px 6px rgba(0,0,0,0.08)",
    darkNative: false,
    saturation: "muted",
    typography: "geometric",
  },
  clickhouse: {
    id: "clickhouse",
    name: "ClickHouse",
    primary: "#faff69",
    bg: "#000000",
    fg: "#ffffff",
    accent: "#166534",
    border: "rgba(65,65,65,0.8)",
    radius: "4px",
    shadow: "inset 0 1px 2px rgba(0,0,0,0.3)",
    darkNative: true,
    saturation: "vivid",
    typography: "geometric",
  },
  superhuman: {
    id: "superhuman",
    name: "Superhuman",
    primary: "#1b1938",
    bg: "#ffffff",
    fg: "#292827",
    accent: "#cbb7fb",
    border: "#dcd7d3",
    radius: "8px",
    shadow: "none",
    darkNative: false,
    saturation: "muted",
    typography: "geometric",
  },
  stripe: {
    id: "stripe",
    name: "Stripe",
    primary: "#533afd",
    bg: "#ffffff",
    fg: "#061b31",
    accent: "#ea2261",
    border: "#e5edf5",
    radius: "4px",
    shadow: "0 2px 5px rgba(50,50,93,0.1), 0 1px 2px rgba(0,0,0,0.08)",
    darkNative: false,
    saturation: "vivid",
    typography: "geometric",
  },
  framer: {
    id: "framer",
    name: "Framer",
    primary: "#0099ff",
    bg: "#000000",
    fg: "#ffffff",
    accent: "#a6a6a6",
    border: "rgba(0,153,255,0.15)",
    radius: "12px",
    shadow: "0 0 0 1px rgba(0,153,255,0.15), 0 8px 30px rgba(0,0,0,0.4)",
    darkNative: true,
    saturation: "vivid",
    typography: "geometric",
  },
  toss: {
    id: "toss",
    name: "Toss",
    primary: "#3182f6",
    bg: "#ffffff",
    fg: "#191f28",
    accent: "#0064FF",
    border: "#e5e8eb",
    radius: "12px",
    shadow: "0 2px 8px rgba(0,0,0,0.08)",
    darkNative: false,
    saturation: "vivid",
    typography: "geometric",
  },
  spotify: {
    id: "spotify",
    name: "Spotify",
    primary: "#1ed760",
    bg: "#121212",
    fg: "#ffffff",
    accent: "#b3b3b3",
    border: "#4d4d4d",
    radius: "9999px",
    shadow: "0 8px 24px rgba(0,0,0,0.5)",
    darkNative: true,
    saturation: "vivid",
    typography: "humanist",
  },
  kakao: {
    id: "kakao",
    name: "Kakao",
    primary: "#FEE500",
    bg: "#ffffff",
    fg: "#222222",
    accent: "#2196F3",
    border: "#E5E5E5",
    radius: "12px",
    shadow: "none",
    darkNative: false,
    saturation: "vivid",
    typography: "humanist",
  },
  cal: {
    id: "cal",
    name: "Cal.com",
    primary: "#242424",
    bg: "#ffffff",
    fg: "#242424",
    accent: "#0099ff",
    border: "rgba(34,42,53,0.08)",
    radius: "8px",
    shadow: "0 0 0 1px rgba(34,42,53,0.06), 0 1px 1px rgba(0,0,0,0.05), 0 2px 6px rgba(34,42,53,0.04)",
    darkNative: false,
    saturation: "muted",
    typography: "geometric",
  },
  supabase: {
    id: "supabase",
    name: "Supabase",
    primary: "#3ecf8e",
    bg: "#171717",
    fg: "#fafafa",
    accent: "#00c573",
    border: "#2e2e2e",
    radius: "6px",
    shadow: "none",
    darkNative: true,
    saturation: "vivid",
    typography: "geometric",
  },
  sentry: {
    id: "sentry",
    name: "Sentry",
    primary: "#6a5fc1",
    bg: "#1f1633",
    fg: "#ffffff",
    accent: "#c2ef4e",
    border: "#362d59",
    radius: "8px",
    shadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 16px rgba(0,0,0,0.3)",
    darkNative: true,
    saturation: "vivid",
    typography: "geometric",
  },
  tesla: {
    id: "tesla",
    name: "Tesla",
    primary: "#3E6AE1",
    bg: "#FFFFFF",
    fg: "#171A20",
    border: "#EEEEEE",
    radius: "4px",
    shadow: "none",
    darkNative: false,
    saturation: "muted",
    typography: "geometric",
  },
  bmw: {
    id: "bmw",
    name: "BMW",
    primary: "#1c69d4",
    bg: "#ffffff",
    fg: "#262626",
    accent: "#0653b6",
    border: "#e0e0e0",
    radius: "0px",
    shadow: "none",
    darkNative: false,
    saturation: "muted",
    typography: "geometric",
  },
};

/* ── Question Templates ─────────────────────────────────── */

export type CoreAxis = "temperature" | "density" | "elevation" | "shape";
export type QuizAxis = CoreAxis | "saturation" | "typography" | "comprehensive" | "darkmode";

export interface QuestionTemplate {
  id: string;
  axis: QuizAxis;
  sceneType: string;
  question: string;
  sub: string;
  companyA: string;
  companyB: string;
  poleA: string;
  poleB: string;
}

export const CORE_TEMPLATES: QuestionTemplate[] = [
  // ── Temperature: Cool (C) vs Warm (W) ──────────────────
  // All pairs: both light-mode to isolate color temperature
  {
    id: "T1",
    axis: "temperature",
    sceneType: "landing",
    question: "Which landing page draws you in?",
    sub: "The tone of color sets the first impression.",
    companyA: "vercel",
    companyB: "airbnb",
    poleA: "C",
    poleB: "W",
  },
  {
    id: "T2",
    axis: "temperature",
    sceneType: "navigation",
    question: "Which navigation feels right?",
    sub: "The header anchors the entire experience.",
    companyA: "apple",
    companyB: "claude",
    poleA: "C",
    poleB: "W",
  },
  {
    id: "T3",
    axis: "temperature",
    sceneType: "landing",
    question: "Which hero section appeals to you?",
    sub: "Where the most important message lives.",
    companyA: "tesla",
    companyB: "notion",
    poleA: "C",
    poleB: "W",
  },

  // ── Density: Dense (D) vs Open (O) ─────────────────────
  // D1/D3: both light. D2: both dark (ClickHouse + Sentry).
  {
    id: "D1",
    axis: "density",
    sceneType: "dashboard",
    question: "Which dashboard layout do you prefer?",
    sub: "How much info fits on one screen.",
    companyA: "stripe",
    companyB: "expo",
    poleA: "D",
    poleB: "O",
  },
  {
    id: "D2",
    axis: "density",
    sceneType: "notifications",
    question: "Which notification list feels better?",
    sub: "Spacing between items shapes the experience.",
    companyA: "clickhouse",
    companyB: "superhuman",
    poleA: "D",
    poleB: "O",
  },
  {
    id: "D3",
    axis: "density",
    sceneType: "dashboard",
    question: "Which settings page do you prefer?",
    sub: "How complex options are laid out.",
    companyA: "raycast",
    companyB: "tesla",
    poleA: "D",
    poleB: "O",
  },

  // ── Elevation: Flat (F) vs Layered (L) ─────────────────
  // All pairs: same background mode
  {
    id: "E1",
    axis: "elevation",
    sceneType: "card",
    question: "Which card style do you like?",
    sub: "How elements separate from the surface.",
    companyA: "toss",
    companyB: "stripe",
    poleA: "F",
    poleB: "L",
  },
  {
    id: "E2",
    axis: "elevation",
    sceneType: "dropdown",
    question: "Which dropdown style appeals more?",
    sub: "How popover elements float above content.",
    companyA: "kakao",
    companyB: "cal",
    poleA: "F",
    poleB: "L",
  },
  {
    id: "E3",
    axis: "elevation",
    sceneType: "card",
    question: "Which dialog style feels right?",
    sub: "The visual weight of important actions.",
    companyA: "notion",
    companyB: "airbnb",
    poleA: "F",
    poleB: "L",
  },

  // ── Shape: Sharp (S) vs Rounded (R) ────────────────────
  // All pairs: same background mode
  {
    id: "S1",
    axis: "shape",
    sceneType: "buttonInput",
    question: "Which buttons and inputs feel right?",
    sub: "Corners define the personality of your UI.",
    companyA: "bmw",
    companyB: "toss",
    poleA: "S",
    poleB: "R",
  },
  {
    id: "S2",
    axis: "shape",
    sceneType: "buttonInput",
    question: "Which tags and badges do you prefer?",
    sub: "Small elements reveal the design character.",
    companyA: "tesla",
    companyB: "kakao",
    poleA: "S",
    poleB: "R",
  },
  {
    id: "S3",
    axis: "shape",
    sceneType: "buttonInput",
    question: "Which form UI appeals to you?",
    sub: "Where users input data most often.",
    companyA: "vercel",
    companyB: "airbnb",
    poleA: "S",
    poleB: "R",
  },
];

export const SUPPLEMENTARY_TEMPLATES: QuestionTemplate[] = [
  {
    id: "SAT",
    axis: "saturation",
    sceneType: "palette",
    question: "Which color palette speaks to you?",
    sub: "Saturation level sets the overall energy.",
    companyA: "muted",
    companyB: "vivid",
    poleA: "muted",
    poleB: "vivid",
  },
  {
    id: "TYP",
    axis: "typography",
    sceneType: "typography",
    question: "Which typography feels natural?",
    sub: "Font character shapes brand perception.",
    companyA: "geometric",
    companyB: "humanist",
    poleA: "geometric",
    poleB: "humanist",
  },
  {
    id: "COMP",
    axis: "comprehensive",
    sceneType: "fullApp",
    question: "Which app resonates with you?",
    sub: "Your overall design direction.",
    companyA: "vercel",
    companyB: "airbnb",
    poleA: "minimal",
    poleB: "rich",
  },
  {
    id: "DM",
    axis: "darkmode",
    sceneType: "theme",
    question: "Dark mode or light mode?",
    sub: "Last one! Your default theme preference.",
    companyA: "dark",
    companyB: "light",
    poleA: "dark",
    poleB: "light",
  },
];

/* ── Template Selection (randomization) ─────────────────── */

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function shuffleWithRng<T>(arr: T[], rng: () => number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Select 12 question templates for a quiz session.
 *
 * For each core axis (4), picks 2 of 3 available templates randomly.
 * Supplementary templates (4) are always included.
 * Total: 8 core + 4 supplementary = 12 questions.
 *
 * @param seed — optional seed for deterministic randomization.
 *               Pass the same seed to get the same question set.
 */
export function selectTemplates(seed?: number): QuestionTemplate[] {
  const rng = seed != null ? seededRandom(seed) : Math.random;

  const coreAxes: CoreAxis[] = ["temperature", "density", "elevation", "shape"];
  const selected: QuestionTemplate[] = [];

  for (const axis of coreAxes) {
    const pool = CORE_TEMPLATES.filter((t) => t.axis === axis);
    const shuffled = shuffleWithRng(pool, typeof rng === "function" ? rng : Math.random);
    selected.push(shuffled[0], shuffled[1]);
  }

  // Supplementary are always included in fixed order
  selected.push(...SUPPLEMENTARY_TEMPLATES);

  return selected;
}

/**
 * Get tokens for a company. Returns undefined if not found.
 */
export function getCompanyTokens(id: string): CompanyTokens | undefined {
  return COMPANY_TOKENS[id];
}
