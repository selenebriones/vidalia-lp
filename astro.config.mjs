// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Dominio final pendiente.
  site: 'https://vidalia.mx',
  vite: { plugins: [tailwindcss()] },
});
