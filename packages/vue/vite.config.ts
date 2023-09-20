import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import commonjs from 'vite-plugin-commonjs';
// import eslint from 'vite-plugin-eslint';
import UnoCss from 'unocss/vite';
// import babel from 'vite-plugin-babel';
import DefineOptions from 'unplugin-vue-define-options/vite';

export default defineConfig({
  server: {
    port: 3030,
  },
  build: {
    minify: true,
    rollupOptions: {
      external: ['vue'],
      input: ['./src/main.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: 'index.mjs',
          // preserveModules: true,
          exports: 'named',
          dir: 'es',
        },
        {
          format: 'cjs',
          entryFileNames: 'index.js',
          // preserveModules: true,
          exports: 'named',
          dir: 'lib',
        },
        {
          format: 'umd',
          name: 'CompanyUI',
          entryFileNames: 'index.full.js',
          exports: 'named',
          dir: 'dist',
        },
        {
          format: 'umd',
          name: 'CompanyUI',
          entryFileNames: 'index.full.mjs',
          exports: 'named',
          dir: 'dist',
        },
      ],
    },
    lib: {
      entry: './src/main.ts',
      name: 'CompanyUI',
    },
  },
  plugins: [
    commonjs(),
    // eslint({
    //   include: ['src/**/*.ts', 'src/**/*.vue'],
    //   // exclude: /node_modules|style/,
    // }),
    // babel(),
    vue(),
    DefineOptions(),
    dts({
      entryRoot: './src',
      outDir: ['es/types', 'lib/types'],
    }),
    UnoCss(),
  ],
});
