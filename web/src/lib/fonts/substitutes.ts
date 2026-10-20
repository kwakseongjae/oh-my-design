/**
 * Measured font substitutes (spec/design-md-v3.md §6.1–6.3, owner policy F2/G3).
 *
 * A substitute is an open-licence face chosen by measurement to stand in for a brand face, one per
 * script, and is always labelled "substitute — not the brand face". It is recorded in the
 * reference's DESIGN.md frontmatter (fonts.faces.<family>.substitutes.<script>) with its metrics in
 * reference.json (fonts.substitutes.<family>.<script>.metrics).
 *
 * Round-11 contract: the font-measurement work stream replaces the body of getSubstitutes with a
 * reader over the generated data and keeps this signature; the journey UI calls it and, when it
 * returns nothing for a script, shows "Substitute: none chosen" instead of rendering another face.
 */
export type FontScript = "latin" | "hangul" | "kana" | "han-hans" | "han-hant";

export type FontSubstitute = {
  /** the brand family this stands in for, as captured */
  brandFamily: string;
  script: FontScript;
  /** the open-licence substitute family */
  family: string;
  provider: "google" | "other";
  /** always "substitute — not the brand face" */
  label: string;
  /** stylesheet to load the substitute (Google Fonts css2 URL when provider is google) */
  cssUrl?: string;
  metrics?: {
    xHeightRatio?: number;
    avgAdvance?: number;
    weightRange?: string;
    classification?: string;
    delta?: Record<string, number | string>;
  };
};

export function getSubstitutes(referenceId: string): FontSubstitute[] {
  void referenceId;
  return [];
}
