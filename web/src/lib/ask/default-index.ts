/**
 * The shared retriever over the committed build-time index, built once per server instance on
 * first use. Server-only: the index is ~440 KB and must never reach a client bundle.
 */
import ASK_INDEX from "@/data/ask-index.generated.json";
import type { AskIndexFile } from "./chunk";
import { createRetriever, type AskRetriever } from "./retrieve";

let shared: AskRetriever | null = null;

export function askRetriever(): AskRetriever {
  if (!shared) {
    const file = ASK_INDEX as unknown as AskIndexFile;
    shared = createRetriever(file.chunks, file.intent);
  }
  return shared;
}
