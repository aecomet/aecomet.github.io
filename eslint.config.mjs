import jslint from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import { parser } from 'typescript-eslint';
import tslint from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      parser: parser,
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      ...jslint.configs.recommended.rules,
      ...tslint.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: parser
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      ...pluginVue.configs['flat/recommended'].rules,
      '@typescript-eslint/no-explicit-any': 'warn',
      'vue/multi-word-component-names': 'warn',
      'vue/component-name-in-template-casing': ['error', 'PascalCase']
    }
  }
];
