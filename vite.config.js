import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  base: '/',
  plugins: [
    tailwindcss(),
    {
      name: 'client-only-router-directive',
      // This app is entirely client-rendered. Remove React Server Component
      // directives from the router before bundling; no RSC boundary is needed.
      transform(code, id) {
        if (/node_modules\/react-router\//.test(id) && /^['"]use client['"];?/m.test(code)) {
          return { code: code.replace(/^['"]use client['"];?\s*/m, ''), map: null };
        }
      },
    },
  ],
  esbuild: { jsx: 'automatic' },
});
