import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';
import commonRules from '@rafflebox-technologies-inc/eslint-config-rafflebox-common';
import vitestRules from '@rafflebox-technologies-inc/eslint-config-rafflebox-vitest';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  ...pluginVueA11y.configs['flat/recommended'],
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
  ...vitestRules,
  ...commonRules,
  eslintConfigPrettier,
  { ignores: ['node_modules/', 'dist/', 'build/'] }
);
