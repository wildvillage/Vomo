import webExtension from "@samrum/vite-plugin-web-extension";

const isDev = process.env.NODE_ENV === "development";

function manifestConfig() {
  return webExtension({
    manifest: {
      manifest_version: 3,
      name: "Vomo",
      version: "1.0",
      description: "A Chrome extension to modify API responses.",
      permissions: ["tabs", "storage", "declarativeNetRequest"],
      background: {
        service_worker: "src/background.ts",
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
      options_page: "management.html",
      content_security_policy: {
        extension_pages: isDev
          ? "script-src 'self' http://localhost:3000; object-src 'self'"
          : "script-src 'self'; object-src 'self'",
      },
    },
  });
}

export default manifestConfig;
