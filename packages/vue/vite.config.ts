import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import commonjs from 'vite-plugin-commonjs';
import eslint from 'vite-plugin-eslint';
import UnoCss from 'unocss/vite';
// import babel from 'vite-plugin-babel';
import DefineOptions from 'unplugin-vue-define-options/vite';
import terser from '@rollup/plugin-terser';

export default defineConfig({
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
  build: {
    minify: false,
    rollupOptions: {
      external: ['vue'],
      input: ['./src/main.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: 'index.mjs',
          sourcemap: true,
          // preserveModules: true,
          exports: 'named',
          dir: 'es',
        },
        {
          format: 'cjs',
          entryFileNames: 'index.js',
          sourcemap: true,
          // preserveModules: true,
          exports: 'named',
          dir: 'lib',
        },
        {
          format: 'umd',
          name: 'CompanyUI',
          entryFileNames: 'index.full.js',
          sourcemap: true,
          exports: 'named',
          dir: 'dist',
        },
        // prod
        {
          format: 'umd',
          name: 'CompanyUI',
          entryFileNames: 'index.full.prod.js',
          sourcemap: true,
          exports: 'named',
          dir: 'dist',
          plugins: [terser()],
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
    eslint({
      include: ['src/**/*.ts', 'src/**/*.vue'],
      // exclude: /node_modules|style/,
    }),
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
