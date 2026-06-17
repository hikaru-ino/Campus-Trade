import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // 開発時、/api をバックエンド(4000)へプロキシ
    proxy: {
      "/api": "http://localhost:4000",
    },
  },
});
