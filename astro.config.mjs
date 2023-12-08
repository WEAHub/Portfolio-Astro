import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import webmanifest from 'astro-webmanifest';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    react(),
  ]
});