// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/Armaan-Tech-Tips/",           // exact repo name
  plugins: [react()],                    // keep it simple; add other plugins later
  build: {
    outDir: "docs",
    assetsDir: "assets",
    emptyOutDir: true,
    sourcemap: true
  },
  server: { host: "::", port: 8080 },
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
}));
