// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://upnt.github.io",
  base: "/public/",

  vite: {
    plugins: [tailwindcss()],
  },
});
