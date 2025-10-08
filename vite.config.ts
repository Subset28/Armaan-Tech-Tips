import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()], // Keep config simple and robust for all environments
  base: '/Armaan-s-Tech-Tips/', // <-- IMPORTANT for GitHub Pages
  build: {
    outDir: 'docs', // Build to docs folder for GitHub Pages
    emptyOutDir: true,
  },
  server: {
    host: "::",
    port: 8080,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
