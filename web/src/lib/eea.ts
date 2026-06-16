// EEA (EU-27 + Iceland / Liechtenstein / Norway) + United Kingdom + Switzerland
// — the set we treat as "consent required" for both the GA Consent Mode v2
// region defaults and the EU-only consent banner. Visitors outside this set are
// auto-granted (no banner) so the common (US) path keeps full, frictionless
// analytics. Intentionally country-level (no subdivision/overseas-territory
// codes) — sufficient at this scale; widen here if ever needed.
export const EEA_PLUS: ReadonlySet<string> = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU",
  "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES",
  "SE", "IS", "LI", "NO", "GB", "CH",
]);

export function isEEA(country?: string | null): boolean {
  return !!country && EEA_PLUS.has(country.toUpperCase());
}

/** Array form (ISO-3166-1 alpha-2) for the gtag consent `region` parameter. */
export const EEA_REGION_CODES: string[] = [...EEA_PLUS];
