import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const plugins: PluginOption[] = [react() as PluginOption];

  // Load lovable-tagger only in development and only if available
  if (mode === "development") {
    try {
      const mod: any = await import("lovable-tagger");
      const maybePlugin = mod?.componentTagger?.();
      if (Array.isArray(maybePlugin)) {
        plugins.push(...(maybePlugin as PluginOption[]));
      } else if (maybePlugin) {
        plugins.push(maybePlugin as PluginOption);
      }
    } catch {
      // Plugin not installed in this environment – safely ignore
    }
  }

  return {
    plugins,
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
  };
});
