import { z } from 'zod';
import { loadAllReferences, getDisplayName, hasOfficialDs } from '../data.js';

export const listReferencesSchema = {
  country: z
    .string()
    .optional()
    .describe('Filter by ISO country code (e.g. "KR", "US", "JP"). Case-insensitive.'),
  category: z
    .string()
    .optional()
    .describe('Filter by category (e.g. "ecommerce", "fintech", "saas", "social", "ai"). Case-insensitive.'),
  has_official_ds: z
    .boolean()
    .optional()
    .describe('If true, return only brands that publish an official design system (Tier 1).'),
};

const InputSchema = z.object(listReferencesSchema);

export async function runListReferences(input: z.infer<typeof InputSchema>) {
  const refs = loadAllReferences();
  const country = input.country?.toLowerCase();
  const category = input.category?.toLowerCase();
  const out: Array<{
    id: string;
    name: string;
    displayName: string;
    country: string | null;
    category: string | null;
    primaryColor: string | null;
    hasOfficialDs: boolean;
  }> = [];

  for (const ref of refs.values()) {
    const fm = ref.frontmatter;
    const c = (fm.country as string | undefined) ?? null;
    const cat = (fm.category as string | undefined) ?? null;
    if (country && (!c || c.toLowerCase() !== country)) continue;
    if (category && (!cat || cat.toLowerCase() !== category)) continue;
    const officialDs = hasOfficialDs(ref);
    if (input.has_official_ds === true && !officialDs) continue;
    out.push({
      id: ref.id,
      name: (fm.name as string) ?? ref.id,
      displayName: getDisplayName(ref),
      country: c,
      category: cat,
      primaryColor: (fm.primary_color as string | undefined) ?? null,
      hasOfficialDs: officialDs,
    });
  }
  out.sort((a, b) => a.id.localeCompare(b.id));
  return {
    count: out.length,
    references: out,
  };
}
