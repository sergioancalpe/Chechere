import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        rojo: resolve(__dirname, 'index_rojo.html'),
        tierra: resolve(__dirname, 'index_tierra.html'),
      },
    },
  },
});
