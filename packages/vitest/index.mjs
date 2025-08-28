import vitest from '@vitest/eslint-plugin';

export default [
  {
    plugins: {
      vitest
    },
    files: ['**/*.{test,spec}.ts'],
    rules: {
      ...vitest.configs.recommended.rules,
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off'
    }
  }
];
