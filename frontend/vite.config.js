import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    proxy: {
      "/api": {
        target: "https://tica-computers-backend.onrender.com", // Render backend URL
        changeOrigin: true,
        secure: true,
      }
    },
  },
});
