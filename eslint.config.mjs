import jslint from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import tslint from 'typescript-eslint';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      ...jslint.configs.recommended.rules
    }
  },
  ...tslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  pluginPrettier,

  /* override recommended config */
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
];
