import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import UnoCss from 'unocss/vite';
import commonjs from 'vite-plugin-commonjs';

export default defineConfig({
  server: {
    port: 3031,
  },
  resolve: {
    alias: {
      vue: 'node_modules/vue/dist/vue.runtime.esm.js',
    },
  },
  plugins: [commonjs(), vue(), UnoCss()],
});
