import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import postcss from '@tailwindcss/postcss';
import ViteSitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    postcss(),
    ViteSitemap({
      hostname: 'https://www.markyet.in',
      routes: ['/', '/about', '/services', '/blog', '/contact'],
    }),
  ],
});
