import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",

    // Vendored components, copied in from upstream registries rather than
    // hand-written. Re-linting them reports upstream's style back at us, and
    // editing them here would be undone by the next update. `globe.tsx` is the
    // three-globe/react-three-fiber showcase component (var, any, an effect
    // that publishes its instance); `carousel.tsx` is the embla wrapper.
    "components/ui/globe.tsx",
    "components/ui/carousel.tsx",
  ]),
]);

export default eslintConfig;
