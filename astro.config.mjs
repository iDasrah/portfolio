// astro.config.mjs
import { defineConfig } from 'astro/config';
import swup from "@swup/astro"
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    integrations: [react(), swup({ theme: false }), sitemap()],
    trailingSlash: 'never',
    site: "https://matheo-picouleau.fr"
});