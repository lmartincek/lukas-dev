import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown'

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [
    react(),
    tailwind(),
    icon(),
    mdx(),
    sitemap(),
    robotsTxt(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    compressor(),
  ],

  site: 'https://lmartincek.dev/',
});