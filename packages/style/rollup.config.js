import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default [
  {
    input: 'src/main.ts',
    output: {
      file: 'index.js',
    },
    plugins: [
      postcss({
        plugins: [autoprefixer(), cssnano()],
        extract: 'dist/index.css',
      }),
    ],
  },
];
