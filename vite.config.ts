/// <reference types="node" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import type { UserConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: { mode: string }): UserConfig => ({
  base:'/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
