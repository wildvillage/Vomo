import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import manifestConfig from "./public/manifest";

export default defineConfig({
  plugins: [react(), manifestConfig()],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "popup.html"),
        options: resolve(__dirname, "management.html"),
        background: resolve(__dirname, "src/background.ts"),
        dev: resolve(__dirname, "dev.html"),
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
