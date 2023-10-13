import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue';
import UnoCss from 'unocss/vite';
import commonjs from 'vite-plugin-commonjs';

export default defineConfig({
  server: {
    port: 3030,
  },
  plugins: [commonjs(), vue(), react(), UnoCss()],
});
