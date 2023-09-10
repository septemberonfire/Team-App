import { defineConfig } from 'vite'
import { resolve } from 'path'


export default defineConfig({
  build: {
    target: 'es2022',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'blogPage.html'),
        nested2: resolve(__dirname, 'post.html'),
        nested3: resolve(__dirname, 'support.html'),
      },
    }
  },
  esbuild: {
    supported: {
      'top-level-await': true,
    },
  },
  base: '',
})
