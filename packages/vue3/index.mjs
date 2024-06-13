import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import vitest from 'eslint-plugin-vitest';
import commonRules from '@rafflebox-technologies-inc/eslint-config-rafflebox-common';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['tests/**'],
    plugins: {
      vitest
    },
    rules: {
      ...vitest.configs.recommended.rules
    }
  },
  ...commonRules,
  { ignores: ['node_modules/', 'dist/', 'build/'] }
];
