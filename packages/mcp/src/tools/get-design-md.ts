import { z } from 'zod';
import { getReference, listReferenceIds } from '../data.js';

export const getDesignMdSchema = {
  id: z
    .string()
    .min(1)
    .describe('Reference id (e.g. "toss", "stripe", "linear"). Use list_references to discover ids.'),
};

const InputSchema = z.object(getDesignMdSchema);

export async function runGetDesignMd(input: z.infer<typeof InputSchema>) {
  const ref = getReference(input.id);
  if (!ref) {
    const known = listReferenceIds();
    const hint = known.slice(0, 5).join(', ');
    throw new Error(
      `Unknown reference id "${input.id}". ${known.length} known. Examples: ${hint}. Use list_references to discover all ids.`,
    );
  }
  return {
    id: ref.id,
    frontmatter: ref.frontmatter,
    sections: ref.sections,
    content: ref.raw,
  };
}
