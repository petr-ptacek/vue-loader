import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue              from "@vitejs/plugin-vue";
import pkg              from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // https://vitejs.dev/guide/build.html
  build: {
    copyPublicDir: false,
    outDir: fileURLToPath(new URL("./dist", import.meta.url)),
    lib: {
      entry: fileURLToPath(new URL("./src/lib/index.ts", import.meta.url)),
      name: "vueLoader",
      fileName: (format) => `vue-loader.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: Object.keys(pkg.peerDependencies),
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: { vue: "Vue" }
      }
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});
