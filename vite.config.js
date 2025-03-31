import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  NODE_ENV: "production",
  plugins: [react()],
  base: NODE_ENV === "production" ? "/Personal-Portfolio/" : "/", 
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});