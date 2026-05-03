"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { LandingToggle } from "@/components/landing-toggle";
import { V2Nav } from "@/components/landing-v2/nav";
import { HeroV2 } from "@/components/landing-v2/hero";
import { LiveProof } from "@/components/landing-v2/live-proof";
import { TheWall } from "@/components/landing-v2/the-wall";
import {
  SideBySide,
  CliStrip,
  PhilosophyBand,
  FinalCtaFooter,
} from "@/components/landing-v2/sections";
import { V2 } from "@/components/landing-v2/tokens";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-v2",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono-v2",
});

export default function LandingV2() {
  return (
    <div
      className={`${geist.variable} ${geistMono.variable}`}
      style={{
        fontFamily: "var(--font-geist-v2), system-ui, sans-serif",
        // Dark wrapper so the transparent nav at scroll-0 shows the hero's
        // dark surface (not a light gap). Light sections set their own bg.
        background: V2.bgDark,
        color: V2.textOnDark,
      }}
    >
      <V2Nav />

      {/* Sections — render after mount to avoid SSR hydration drift on motion libs */}
      <HeroV2 />
      <LiveProof />
      <TheWall />
      <SideBySide />
      <CliStrip />
      <PhilosophyBand />
      <FinalCtaFooter />

      <LandingToggle current="v2" />
    </div>
  );
}
