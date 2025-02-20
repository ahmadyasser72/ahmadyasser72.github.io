// @ts-check
import { defineConfig } from "astro/config";

import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://ahmadyasser72.github.io",
  integrations: [UnoCSS({ injectReset: true })],
});
