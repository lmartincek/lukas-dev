
import icon from "astro-icon";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

//TODO - add later on
// import sitemap from "@astrojs/sitemap";
// import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), icon()],
});
