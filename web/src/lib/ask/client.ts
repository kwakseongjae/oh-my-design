/**
 * The Anthropic client for /api/ask. It only ever uses the owner's separate question-box key
 * (OMD_ASK_ANTHROPIC_API_KEY), passed in explicitly. Left to itself the SDK would also read
 * ANTHROPIC_API_KEY, ANTHROPIC_AUTH_TOKEN, an `ant auth login` profile and ANTHROPIC_BASE_URL
 * from the environment, which could bill or route through another account; the explicit
 * apiKey, the null authToken (an env token would otherwise ride along) and the fixed base URL
 * close all three.
 */
import Anthropic from "@anthropic-ai/sdk";

export interface AskStream extends AsyncIterable<Anthropic.MessageStreamEvent> {
  finalMessage(): Promise<Anthropic.Message>;
  abort(): void;
}

/** The slice of the SDK the route uses, so tests can hand in a fake. */
export interface AskClient {
  messages: {
    stream(body: Anthropic.MessageStreamParams, options?: { signal?: AbortSignal }): AskStream;
  };
}

export function createAskClient(apiKey: string): AskClient {
  return new Anthropic({
    apiKey,
    authToken: null,
    baseURL: "https://api.anthropic.com",
    maxRetries: 1,
    timeout: 30_000,
  });
}
