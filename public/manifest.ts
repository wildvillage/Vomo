import { Plugin } from "vite";
import fs from "fs";
import path from "path";

const isDev = process.env.NODE_ENV === "development";

function createManifest(mode: string) {
  const isDev =
    mode === "development" || process.env.NODE_ENV === "development";
  const manifest: chrome.runtime.ManifestV3 = {
    manifest_version: 3,
    name: "Vomo",
    version: "1.0",
    description: "A Chrome extension to modify API responses.",
    permissions: ["tabs", "storage", "declarativeNetRequest"],
    background: {
      service_worker: "background.js",
    },
    action: {
      default_popup: isDev ? "dev.html" : "popup.html",
      default_icon: {
        16: "vite.svg",
        48: "vite.svg",
        128: "vite.svg",
      },
    },
    icons: {
      16: "vite.svg",
      48: "vite.svg",
      128: "vite.svg",
    },
    options_page: isDev ? "management-dev.html" : "management.html",
    content_security_policy: {
      extension_pages: isDev
        ? "script-src 'self' http://localhost:5173; object-src 'self'"
        : "script-src 'self'; object-src 'self'",
    },
  };
  return manifest;
}

function manifestGeneratorPlugin(mode: string): Plugin {
  return {
    name: "vite-plugin-manifest-generator",
    buildStart() {
      const manifestContent = JSON.stringify(createManifest(mode), null, 2);
      const manifestPath = path.resolve(__dirname, "manifest.json");

      fs.writeFileSync(manifestPath, manifestContent);
    },
  };
}

export default manifestGeneratorPlugin;
