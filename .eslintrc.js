module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier:prettier/recommended'],

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': 'error',
    'vue/singleline-html-element-content-newline': 0,
    'vue/component-name-in-template-casing': ['error', 'PascalCase']
  }
};
