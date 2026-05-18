import { z } from 'zod';
import { loadAllReferences, getDisplayName, type Reference } from '../data.js';

export const searchByVibeSchema = {
  description: z
    .string()
    .min(2)
    .describe(
      'Mood/vibe description. Examples: "calm B2B fintech", "playful kids app", "editorial newspaper", "developer-first dark CLI".',
    ),
  limit: z
    .number()
    .int()
    .min(1)
    .max(20)
    .optional()
    .describe('Max number of matches to return (default 5).'),
};

const InputSchema = z.object(searchByVibeSchema);

// Tokenize a query/text into normalized lowercase words, dropping stopwords.
const STOP = new Set([
  'a', 'an', 'and', 'or', 'the', 'of', 'for', 'with', 'to', 'in', 'on',
  'is', 'are', 'be', 'app', 'apps', 'design', 'system', 'like', 'style',
]);
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOP.has(t));
}

// Search corpus per reference: frontmatter fields + first 500 body chars + sections.
function corpusOf(ref: Reference): { tokens: Set<string>; snippet: string } {
  const fm = ref.frontmatter;
  const parts: string[] = [
    ref.id,
    (fm.name as string) ?? '',
    (fm.displayName as string) ?? '',
    (fm.country as string) ?? '',
    (fm.category as string) ?? '',
    ref.sections.join(' '),
    ref.body.slice(0, 500),
  ];
  const text = parts.join(' ');
  return { tokens: new Set(tokenize(text)), snippet: ref.body.slice(0, 500) };
}

// Simple keyword overlap scoring with category/country boost.
// Deterministic, fast, zero-dependency. v0.2 will add embeddings.
export async function runSearchByVibe(input: z.infer<typeof InputSchema>) {
  const limit = input.limit ?? 5;
  const queryTokens = tokenize(input.description);
  if (queryTokens.length === 0) {
    return { query: input.description, count: 0, matches: [] };
  }
  const refs = loadAllReferences();
  const scored: Array<{
    id: string;
    name: string;
    score: number;
    matchedTerms: string[];
    reasoning: string;
  }> = [];

  for (const ref of refs.values()) {
    const { tokens } = corpusOf(ref);
    const matched: string[] = [];
    let score = 0;
    for (const q of queryTokens) {
      if (tokens.has(q)) {
        matched.push(q);
        score += 2;
        const fm = ref.frontmatter;
        if (
          (fm.category as string | undefined)?.toLowerCase() === q ||
          (fm.country as string | undefined)?.toLowerCase() === q
        ) {
          score += 3; // boost direct category/country match
        }
      } else {
        // partial substring match in corpus snippet
        for (const t of tokens) {
          if (t.includes(q) || q.includes(t)) {
            score += 0.5;
            break;
          }
        }
      }
    }
    if (score <= 0) continue;
    const fm = ref.frontmatter;
    const cat = (fm.category as string | undefined) ?? 'unknown';
    const country = (fm.country as string | undefined) ?? 'unknown';
    const reasoning =
      `Matched [${matched.join(', ') || 'partial'}] · category=${cat} · country=${country}`;
    scored.push({
      id: ref.id,
      name: getDisplayName(ref),
      score: Math.round(score * 100) / 100,
      matchedTerms: matched,
      reasoning,
    });
  }
  scored.sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
  const top = scored.slice(0, limit);
  return {
    query: input.description,
    count: top.length,
    matches: top,
  };
}
