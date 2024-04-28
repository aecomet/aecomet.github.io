module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'vue', 'prettier'],
  parser: 'vue-eslint-parser', // ESLintでVueを解析
  parserOptions: {
    parser: '@typescript-eslint/parser' // ESLintでTypescriptを解析する
  },
  root: true,
  rules: {
    'prettier/prettier': 'error',
    'vue/singleline-html-element-content-newline': 0,
    'vue/component-name-in-template-casing': ['error', 'PascalCase']
  }
};
