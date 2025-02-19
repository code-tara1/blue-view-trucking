import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  server: { port: 5001, open: true },
  plugins: [
    react(),
    tsconfigPaths(),
    checker({
      typescript: true,
    }),
  ],
  publicDir: "public",
  optimizeDeps: {
    include: [
      "@phosphor-icons/react",
      "@chakra-ui/react",
      "@emotion/react",
      "@ckeditor/ckeditor5-react",
      "ckeditor5",
    ],
  },
  resolve: {
    alias: {
      "@trucking": path.resolve(__dirname, "src"),
    },
  },
});
