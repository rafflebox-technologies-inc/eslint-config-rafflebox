import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import jest from 'eslint-plugin-jest';
import globals from 'globals';
import commonRules from '@rafflebox-technologies-inc/eslint-config-rafflebox-common';

export default tseslint.config(
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/vue2-recommended'],
  {
    files: ['tests/**'],
    ...jest.configs['flat/recommended']
  },
  ...commonRules,
  { ignores: ['node_modules/', 'dist/', 'build/'] }
);
