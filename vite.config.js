import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, "views", "index.html"),
    },
  },
});
