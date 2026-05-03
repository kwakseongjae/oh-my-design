import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    include: [
      'test/unit/**/*.test.{ts,mjs}',
      'test/integration/**/*.test.{ts,mjs}',
      'test/scenarios/**/*.test.{ts,mjs}',
      'test/v4/**/*.test.{ts,mjs}',
    ],
  },
});
