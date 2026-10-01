import { Schibsted_Grotesk } from "next/font/google";

/**
 * Schibsted Grotesk — the proof-sheet face (display and running text on the
 * landing). Variable wght 400–900, latin subset, self-hosted by next/font at
 * build. Imported only by the landing pages, so the builder, catalog and docs
 * never download it.
 */
export const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  display: "swap",
});
