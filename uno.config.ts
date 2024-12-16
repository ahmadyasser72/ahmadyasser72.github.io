import { defineConfig, presetTypography, presetWind } from "unocss";

export default defineConfig({
  presets: [presetWind(), presetTypography()],

  theme: {
    colors: {
      background: "hsl(var(--background) / <alpha-value>)",
      foreground: "hsl(var(--foreground) / <alpha-value>)",
      primary: "hsl(var(--primary) / <alpha-value>)",
      accent: "hsl(var(--accent) / <alpha-value>)",
      danger: "hsl(var(--danger) / <alpha-value>)",
    },
  },
});
