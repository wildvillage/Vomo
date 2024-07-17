import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "src/Popup/index.html"),
        options: resolve(__dirname, "src/Management/index.html"),
        background: resolve(__dirname, "public/background.ts"),
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
  server: {
    hmr: {
      protocol: "ws",
      host: "localhost",
    },
    port: 3000,
  },
});