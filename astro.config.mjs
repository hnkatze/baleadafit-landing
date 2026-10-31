// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // La barra de desarrollo de Astro tapa la landing al revisar el diseño en dev.
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});