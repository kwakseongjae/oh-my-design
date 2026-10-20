import { beforeEach, describe, expect, it, vi } from "vitest";

const constructed: Record<string, unknown>[] = [];
vi.mock("@anthropic-ai/sdk", () => ({
  default: class FakeAnthropic {
    messages = { stream: vi.fn() };
    constructor(opts: Record<string, unknown>) {
      constructed.push(opts);
    }
  },
}));

describe("createAskClient", () => {
  beforeEach(() => {
    constructed.length = 0;
  });

  it("uses only the key it is given: no env API key, auth token, profile or base URL", async () => {
    const { createAskClient } = await import("./client");
    createAskClient("omd-ask-key");
    expect(constructed).toHaveLength(1);
    const opts = constructed[0];
    expect(opts.apiKey).toBe("omd-ask-key");
    // an explicit null stops the SDK reading ANTHROPIC_AUTH_TOKEN, which would ride along
    expect(opts).toHaveProperty("authToken", null);
    expect(opts.baseURL).toBe("https://api.anthropic.com");
    expect(opts).not.toHaveProperty("profile");
    expect(opts).not.toHaveProperty("credentials");
  });
});
