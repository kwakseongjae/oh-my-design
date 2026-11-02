import embeddings from "@/data/embeddings.generated.json";
import { REGISTRY } from "@/data/registry.generated";
import { CATALOG } from "./contracts";
import { cosineSimilarity, isEmbeddingVector } from "./search-data.mjs";

export const QUERY_EMBEDDING_TIMEOUT_MS = 1_500;
const isObject = (value: unknown): value is Record<string, unknown> => !!value && typeof value === "object" && !Array.isArray(value);

function corpus(data: unknown) {
  if (!isObject(data) || data.reference_ast !== CATALOG.reference_ast
    || typeof data.model !== "string" || !data.model.trim()
    || typeof data.dim !== "number" || !Number.isInteger(data.dim) || data.dim <= 0
    || !isObject(data.vectors) || Object.keys(data.vectors).length !== REGISTRY.length) return;
  const { model, dim, vectors } = data;
  if (!REGISTRY.every(({ id }) => isEmbeddingVector(vectors[id], dim))) return;
  return { model, dim, vectors: vectors as Record<string, number[]> };
}

/** No retained queries, provider responses, logs or per-user caches. */
export async function semanticScores(query: string): Promise<Map<string, number> | undefined> {
  const key = process.env.OPENROUTER_API_KEY;
  if (!key || !query.trim()) return;
  const data = corpus(embeddings);
  if (!data) return;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), QUERY_EMBEDDING_TIMEOUT_MS);
  try {
    const response = await fetch("https://openrouter.ai/api/v1/embeddings", {
      method: "POST", cache: "no-store", signal: controller.signal,
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model: data.model, input: query }),
    });
    if (!response.ok) return;
    const payload: unknown = await response.json();
    if (!isObject(payload) || !Array.isArray(payload.data) || payload.data.length !== 1) return;
    const item: unknown = payload.data[0];
    if (!isObject(item) || item.index !== 0 || !isEmbeddingVector(item.embedding, data.dim)) return;
    const queryVector = item.embedding;
    return new Map(REGISTRY.map(({ id }) => [id, cosineSimilarity(queryVector, data.vectors[id])]));
  } catch {
    // Provider failures must not reveal the query (including in error messages).
    return;
  } finally {
    clearTimeout(timeout);
  }
}
