import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import commonjs from 'vite-plugin-commonjs';

export default defineConfig({
  server: {
    port: 3030,
  },
  plugins: [commonjs(), vue()],
});
