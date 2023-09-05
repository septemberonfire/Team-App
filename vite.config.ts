import { defineConfig } from 'vite'
// import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  build: {
    target: 'es2022',
  },
  esbuild: {
    supported: {
      'top-level-await': true,
    },
  },
  base: "/team-app/"
})
