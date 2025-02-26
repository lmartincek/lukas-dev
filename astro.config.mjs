
import icon from "astro-icon";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";


//TODO - add later on
// import sitemap from "@astrojs/sitemap";
// import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [react(), tailwind(), icon()],

  site: 'https://bucolic-lamington-53a301.netlify.app/',
});
