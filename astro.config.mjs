// @ts-check
import { defineConfig } from 'astro/config';
import swup from "@swup/astro"

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), swup({ theme: false })]
});