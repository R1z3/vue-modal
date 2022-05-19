import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "vue-modal",
      fileName: (format) => `${format}.js`,
    },
    rollupOptions: {
      input: {
        modal: path.resolve(__dirname, 'src/components/modal/modal.js'),
      },
      output: {
        entryFileNames: "index.js",
        dir: "./dist/modal"
      },
      external: ["vue"],
    },
  },
});
