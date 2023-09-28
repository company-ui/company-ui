import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import UnoCss from 'unocss/vite';
import commonjs from 'vite-plugin-commonjs';
export default defineConfig({
  server: {
    port: 3032,
  },
  plugins: [
    commonjs(),
    // @ts-ignore
    createVuePlugin(),
    UnoCss(),
  ],
});
