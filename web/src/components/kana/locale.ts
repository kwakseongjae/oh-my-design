import { AREA_KO, KANA_COPY, KANA_PATH, SOURCE_ORGS, type KanaChrome, type KanaLocale, type SourceOrg } from "./copy";
import { AREA_JA, KANA_COPY_JA, KANA_PATH_JA, SOURCE_ORGS_JA } from "./copy-ja";

/** What each edition of the kana page reads its words from: one bundle per locale, picked by the page's prop. */
export interface KanaKit {
  readonly locale: KanaLocale;
  readonly path: string;
  readonly t: KanaChrome;
  readonly area: Readonly<Record<string, string>>;
  readonly orgs: readonly SourceOrg[];
}

export const KANA_KIT: Readonly<Record<KanaLocale, KanaKit>> = {
  ko: { locale: "ko", path: KANA_PATH, t: KANA_COPY, area: AREA_KO, orgs: SOURCE_ORGS },
  ja: { locale: "ja", path: KANA_PATH_JA, t: KANA_COPY_JA, area: AREA_JA, orgs: SOURCE_ORGS_JA },
};

/** The two editions point at each other in the header's language switch. */
export const KANA_PATHS: Readonly<Record<KanaLocale, string>> = { ko: KANA_PATH, ja: KANA_PATH_JA };
