import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "node",
    include: ["src/**/*.test.ts", "__tests__/**/*.test.ts"],
    // Many tests walk every reference, so their run time grows with the catalog (545 -> 700). The 5 s default already
    // failed them on a busy machine (2026-11-03, load ~150 from other builds; all pass at 60 s). The slowest keep their
    // own 120 s.
    testTimeout: 30_000,
  },
});
