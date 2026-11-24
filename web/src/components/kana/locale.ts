import { AREA_KO, KANA_COPY, KANA_PATH, KANA_RULES_PATH, SOURCE_ORGS, type KanaChrome, type KanaLocale, type SourceOrg } from "./copy";
import { AREA_JA, KANA_COPY_JA, KANA_ISSUE_URL, KANA_PATH_JA, KANA_RULES_PATH_JA, SOURCE_ORGS_JA } from "./copy-ja";

/** What each edition of the kana pages reads its words from: one bundle per locale, picked by the page's prop. */
export interface KanaKit {
  readonly locale: KanaLocale;
  /** the showcase (/ko/kana, /ja/kana) and the reference (/ko/kana/rules, /ja/kana/rules) */
  readonly path: string;
  readonly rulesPath: string;
  readonly t: KanaChrome;
  readonly area: Readonly<Record<string, string>>;
  readonly orgs: readonly SourceOrg[];
  /** where a reader reports a mistake in the edition's Japanese (the Japanese edition only) */
  readonly issueUrl?: string;
}

export const KANA_KIT: Readonly<Record<KanaLocale, KanaKit>> = {
  ko: { locale: "ko", path: KANA_PATH, rulesPath: KANA_RULES_PATH, t: KANA_COPY, area: AREA_KO, orgs: SOURCE_ORGS },
  ja: { locale: "ja", path: KANA_PATH_JA, rulesPath: KANA_RULES_PATH_JA, t: KANA_COPY_JA, area: AREA_JA, orgs: SOURCE_ORGS_JA, issueUrl: KANA_ISSUE_URL },
};

/** The two editions point at each other in the header's language switch. */
export const KANA_PATHS: Readonly<Record<KanaLocale, string>> = { ko: KANA_PATH, ja: KANA_PATH_JA };
export const KANA_RULES_PATHS: Readonly<Record<KanaLocale, string>> = { ko: KANA_RULES_PATH, ja: KANA_RULES_PATH_JA };
