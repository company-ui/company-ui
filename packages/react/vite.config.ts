import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import commonjs from 'vite-plugin-commonjs';
import eslint from 'vite-plugin-eslint';
import UnoCss from 'unocss/vite';
import terser from '@rollup/plugin-terser';

export default defineConfig({
  // optimizeDeps: {
  //   exclude: ['react', 'react-dom'],
  // },
  build: {
    minify: false,
    rollupOptions: {
      external: ['react', 'react-dom'],
      input: ['./src/main.tsx'],
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
      entry: './src/main.tsx',
      name: 'CompanyUI',
    },
  },
  plugins: [
    commonjs(),
    eslint({
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      // exclude: /node_modules|style/,
    }),
    react(),
    dts({
      entryRoot: './src',
      outDir: ['es/types', 'lib/types'],
    }),
    UnoCss(),
  ],
});
