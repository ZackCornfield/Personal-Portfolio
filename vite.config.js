import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { env } from "process";

export default defineConfig({
  plugins: [react()],
  base: env.BASE_URL || "/",  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});