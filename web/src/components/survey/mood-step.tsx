"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

/* ── Types ──────────────────────────────────────────────── */

type Mood = "clean" | "warm" | "bold" | "minimal" | "playful" | "dark";

interface MoodOption {
  id: Mood;
  label: string;
  description: string;
  colors: { bg: string; fg: string; primary: string; muted: string; card: string; border: string };
}

const MOODS: MoodOption[] = [
  {
    id: "clean",
    label: "Clean & Professional",
    description: "Clarity, precision, trust",
    colors: { bg: "#ffffff", fg: "#09090b", primary: "#18181b", muted: "#f4f4f5", card: "#ffffff", border: "#e4e4e7" },
  },
  {
    id: "warm",
    label: "Warm & Approachable",
    description: "Soft, inviting, human",
    colors: { bg: "#fffbf5", fg: "#1c1917", primary: "#c2410c", muted: "#fef3c7", card: "#fffbf5", border: "#e7e0d5" },
  },
  {
    id: "bold",
    label: "Bold & Energetic",
    description: "Confident, vibrant, decisive",
    colors: { bg: "#ffffff", fg: "#09090b", primary: "#dc2626", muted: "#fef2f2", card: "#ffffff", border: "#e4e4e7" },
  },
  {
    id: "minimal",
    label: "Minimal & Quiet",
    description: "Restrained, typographic, serene",
    colors: { bg: "#fafafa", fg: "#262626", primary: "#525252", muted: "#f5f5f5", card: "#ffffff", border: "#e5e5e5" },
  },
  {
    id: "playful",
    label: "Playful & Creative",
    description: "Rounded, colorful, delightful",
    colors: { bg: "#fefce8", fg: "#1a1523", primary: "#7c3aed", muted: "#f3e8ff", card: "#ffffff", border: "#e2d6f0" },
  },
  {
    id: "dark",
    label: "Dark & Focused",
    description: "Immersive, technical, precise",
    colors: { bg: "#09090b", fg: "#fafafa", primary: "#3b82f6", muted: "#1c1c1e", card: "#141416", border: "#27272a" },
  },
];

/* ── Tournament bracket: 3 rounds of 2 ─────────────────── */

const BRACKETS: [number, number][] = [
  [0, 1], // clean vs warm
  [2, 3], // bold vs minimal
  [4, 5], // playful vs dark
];

/* ── Mini Page Preview ──────────────────────────────────── */

function MiniPage({ mood }: { mood: MoodOption }) {
  const c = mood.colors;
  const radius = mood.id === "playful" ? "12px" : mood.id === "bold" ? "6px" : mood.id === "minimal" ? "2px" : "8px";

  return (
    <div
      className="w-full h-full overflow-hidden flex flex-col"
      style={{ background: c.bg, color: c.fg, borderRadius: "8px" }}
    >
      {/* Nav */}
      <div
        className="flex items-center justify-between px-3 py-2 border-b"
        style={{ borderColor: c.border }}
      >
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded" style={{ background: c.primary }} />
          <div className="h-1.5 w-10 rounded" style={{ background: c.fg, opacity: 0.7 }} />
        </div>
        <div className="flex gap-2">
          <div className="h-1 w-6 rounded" style={{ background: c.fg, opacity: 0.3 }} />
          <div className="h-1 w-6 rounded" style={{ background: c.fg, opacity: 0.3 }} />
        </div>
        <div
          className="px-2 py-0.5 text-[7px] font-medium"
          style={{ background: c.primary, color: c.bg, borderRadius: radius }}
        >
          CTA
        </div>
      </div>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-3 gap-2">
        <div className="h-2 w-24 rounded" style={{ background: c.fg, opacity: 0.8 }} />
        <div className="h-1.5 w-32 rounded" style={{ background: c.fg, opacity: 0.2 }} />
        <div className="flex gap-1.5 mt-1">
          <div
            className="px-3 py-1 text-[6px] font-medium"
            style={{ background: c.primary, color: c.bg, borderRadius: radius }}
          >
            Primary
          </div>
          <div
            className="px-3 py-1 text-[6px] font-medium border"
            style={{ borderColor: c.border, color: c.fg, borderRadius: radius }}
          >
            Secondary
          </div>
        </div>
      </div>

      {/* Cards row */}
      <div className="flex gap-1.5 px-3 pb-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex-1 p-2 border"
            style={{
              background: c.card,
              borderColor: c.border,
              borderRadius: radius,
              boxShadow: mood.id === "bold" || mood.id === "playful"
                ? "0 2px 8px rgba(0,0,0,0.08)"
                : "none",
            }}
          >
            <div className="h-1 w-8 rounded mb-1" style={{ background: c.fg, opacity: 0.6 }} />
            <div className="h-0.5 w-full rounded mb-0.5" style={{ background: c.fg, opacity: 0.1 }} />
            <div className="h-0.5 w-3/4 rounded" style={{ background: c.fg, opacity: 0.1 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main Component ─────────────────────────────────────── */

export function MoodStep({
  value,
  onChange,
}: {
  value: Mood | null;
  onChange: (mood: Mood) => void;
}) {
  const [round, setRound] = useState(0);
  const [winners, setWinners] = useState<Mood[]>([]);
  const [finalRound, setFinalRound] = useState(false);
  const [finalists, setFinalists] = useState<[Mood, Mood] | null>(null);

  // If already selected (going back), show confirmation
  if (value && !finalRound) {
    const selected = MOODS.find((m) => m.id === value)!;
    return (
      <div>
        <div className="mb-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Your vibe</h2>
          <p className="mt-2 text-base text-muted-foreground">
            You picked <strong>{selected.label}</strong>. Tap to rechoose.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {MOODS.map((m) => (
            <button
              key={m.id}
              onClick={() => onChange(m.id)}
              className={`rounded-xl border-2 p-1 transition-all ${
                m.id === value
                  ? "border-foreground shadow-lg"
                  : "border-border/40 hover:border-border opacity-50"
              }`}
            >
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                <MiniPage mood={m} />
              </div>
              <div className="py-1.5 text-[10px] font-medium text-center">{m.label.split(" & ")[0]}</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Tournament flow
  const handlePick = (picked: Mood) => {
    if (finalRound) {
      onChange(picked);
      return;
    }

    const newWinners = [...winners, picked];
    setWinners(newWinners);

    if (round < BRACKETS.length - 1) {
      setRound(round + 1);
    } else {
      // 3 winners → pick best 2 for final (first two since they represent different axes)
      // Simple approach: final round between first and last winner for max contrast
      setFinalists([newWinners[0], newWinners[2]]);
      setFinalRound(true);
    }
  };

  const currentBracket = finalRound
    ? finalists!
    : [MOODS[BRACKETS[round][0]].id, MOODS[BRACKETS[round][1]].id] as [Mood, Mood];

  const optA = MOODS.find((m) => m.id === currentBracket[0])!;
  const optB = MOODS.find((m) => m.id === currentBracket[1])!;

  return (
    <div>
      <motion.div
        key={finalRound ? "final" : round}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-2">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {finalRound ? "Final pick" : "What's your vibe?"}
          </h2>
          <p className="mt-2 text-base text-muted-foreground">
            {finalRound
              ? "Which atmosphere feels more like you?"
              : `Round ${round + 1}/3 — pick the one that resonates`}
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[optA, optB].map((opt, i) => (
            <motion.button
              key={opt.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handlePick(opt.id)}
              className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-border/40 hover:border-border dark:border-border text-left transition-colors"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden p-3 bg-muted/30 dark:bg-muted/60">
                <MiniPage mood={opt} />
              </div>
              <div className="p-4 border-t">
                <div className="text-sm font-semibold">{opt.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{opt.description}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
