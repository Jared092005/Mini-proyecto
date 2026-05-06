import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
/* import { resolve } from "path"; */

export default defineConfig({
  plugins: [tailwindcss()],
  /*  build: {
    rollupOptions: {
      input: {
        main: resolveConfig(__dirname, "index.html"),
      },
    },
  }, */
});
