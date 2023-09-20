module.exports = {
  // parser: '@typescript-eslint/parser', // 解析器，默认使用Espree
  parser: 'vue-eslint-parser',
  env: {
    // 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量。
    browser: true, // 运行在浏览器
    es2021: true, // 支持es2021
    es6: true,
  },
  extends: [
    // 使用的外部代码格式化配置文件
    'semistandard',
    'plugin:import/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-recommended',
  ],
  plugins: ['import'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 12, // ecmaVersion 用来指定支持的 ECMAScript 版本 。默认为 5，即仅支持es5
    sourceType: 'module',
  },
  globals: {
    // 脚本在执行期间访问的额外的全局变量
    describe: true,
    it: true,
    after: true,
    before: true,
    afterEach: true,
    beforeEach: true,
    __BUILD__: true,
    __DEV__: true,
    __SIT__: true,
    __UAT__: true,
    __PROD__: true,
  },
  rules: {
    // 忽略virtual module
    'import/no-unresolved': [
      'error',
      { ignore: ['^virtual:', 'unocss/vite', 'unplugin-vue-define-options/vite'] },
    ],
    // 启用的规则及其各自的错误级别。0(off)  1(warning)  2(error)
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-unused-vars': [2],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'space-before-function-paren': 'off',
    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      },
    },
  },
};
