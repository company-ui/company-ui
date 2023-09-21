import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import UnoCss from '@unocss/postcss';

export default [
  {
    input: 'src/main.ts',
    output: {
      file: 'index.js',
    },
    plugins: [
      postcss({
        plugins: [autoprefixer(), cssnano(), UnoCss()],
        extract: 'dist/index.css',
      }),
    ],
  },
];
