
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";


//TODO - add later on
// import sitemap from "@astrojs/sitemap";
// import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [react(), tailwind(), icon(), mdx()],

  site: 'https://bucolic-lamington-53a301.netlify.app/',
});
