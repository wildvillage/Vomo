import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import manifestGeneratorPlugin from "./public/manifest";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  return {
    plugins: [react(), manifestGeneratorPlugin(mode)],
    build: {
      rollupOptions: {
        input: {
          dev: resolve(__dirname, "dev.html"),
          popup: resolve(__dirname, "popup.html"),
          options: resolve(__dirname, "management.html"),
          background: resolve(__dirname, "src/background.ts"),
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
      port: 5173,
    },
  };
});
