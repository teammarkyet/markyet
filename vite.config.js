import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwincss from '@tailwindcss/vite';
import postcss from '@tailwindcss/postcss';
import ViteSitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    tailwincss(),
    postcss(),
    ViteSitemap({
      hostname: 'https://www.markyet.in',
    }),
  ],
});
