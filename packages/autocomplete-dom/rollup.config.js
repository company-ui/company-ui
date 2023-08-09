import filesize from 'rollup-plugin-filesize'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import eslint from '@rollup/plugin-eslint'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import strip from '@rollup/plugin-strip'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

const name = 'CompanyUIAutocompleteDom'

const output = [
  {
    name,
    format: 'esm',
    file: 'dist/index.esm.js',
    sourcemap: true
  },
  {
    name,
    format: 'umd',
    file: 'dist/index.umd.js',
    sourcemap: true
  },
  {
    name,
    format: 'iife',
    file: 'dist/index.iife.js',
    sourcemap: true
  },
  {
    name,
    format: 'cjs',
    file: 'dist/index.cjs.js',
    sourcemap: true
  },
  // min
  {
    name,
    format: 'esm',
    file: 'dist/index.esm.min.js',
    plugins: [terser()]
  },
  {
    name,
    format: 'umd',
    file: 'dist/index.umd.min.js',
    plugins: [terser()]
  },
  {
    name,
    format: 'iife',
    file: 'dist/index.iife.min.js',
    plugins: [terser()]
  },
  {
    name,
    format: 'cjs',
    file: 'dist/index.cjs.min.js',
    plugins: [terser()]
  }
]

export default [
  {
    input: 'src/main.ts',
    output,
    plugins: [
      eslint({
        throwOnError: true,
        throwOnWarning: true,
        include: /src/,
        exclude: /node_modules|style/
      }),
      resolve(),
      strip(),
      typescript(),
      postcss({
        plugins: [
          autoprefixer(),
          cssnano()
        ]
      }),
      commonjs(),
      babel({ babelHelpers: 'runtime', exclude: /node_modules/ }),
      filesize()
    ]
  }
]
