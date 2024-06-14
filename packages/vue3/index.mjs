import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import vitest from 'eslint-plugin-vitest';
import eslintConfigPrettier from 'eslint-config-prettier';
import commonRules from '@rafflebox-technologies-inc/eslint-config-rafflebox-common';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    plugins: {
      'typescript-eslint': tseslint.plugin
    },
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        project: './tsconfig.lint.json',
        extraFileExtensions: ['.vue'],
        sourceType: 'module'
      }
    }
  },
  {
    plugins: {
      vitest
    },
    rules: {
      ...vitest.configs.recommended.rules
    }
  },
  ...commonRules,
  eslintConfigPrettier,
  { ignores: ['node_modules/', 'dist/', 'build/'] }
);
