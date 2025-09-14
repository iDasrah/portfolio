// astro.config.mjs
import { defineConfig } from 'astro/config';
import swup from "@swup/astro"
import react from '@astrojs/react';

export default defineConfig({
    integrations: [react(), swup({ theme: false })],
    trailingSlash: 'never'
});