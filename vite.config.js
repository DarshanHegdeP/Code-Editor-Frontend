import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
    base: '/Code-Editor-Frontend/',
  resolve: {
    alias: {
      "monaco-languageclient/lib/browser":
        "monaco-languageclient/es/browser/index.js",
    },
  },
});
