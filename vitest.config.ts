import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  css: {
    // Prevent loading project PostCSS config during tests
    postcss: { plugins: [] },
  },
  resolve: {
    alias: [
      // Support TS path alias `@/` → `./src/`
      { find: /^@\//, replacement: `${path.resolve(__dirname, "src")}/` },
    ],
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: [
      "src/**/*.test.ts",
      "src/**/*.test.tsx",
    ],
    // Avoid worker-threads issues in some Node environments
    pool: "forks",
    coverage: {
      reporter: ["text", "lcov"],
      include: ["src/lib/**"],
    },
  },
});
