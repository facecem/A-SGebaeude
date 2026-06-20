import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import path from "path";

const port = Number(process.env.PORT) || 5173;
const basePath = process.env.BASE_PATH || "/";
const isStandalone = process.env.VITE_STANDALONE === "true";
const isGhPages = process.env.VITE_HASH_ROUTING === "true";

const outDirName = isStandalone ? "dist/standalone" : isGhPages ? "dist/gh-pages" : "dist/public";

export default defineConfig({
  base: isStandalone ? "./" : basePath,
  plugins: [react(), tailwindcss(), ...(isStandalone ? [viteSingleFile()] : [])],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
    dedupe: ["react", "react-dom"],
  },
  optimizeDeps: {
    entries: ["index.html"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, outDirName),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
