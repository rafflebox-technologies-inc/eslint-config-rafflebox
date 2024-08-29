import vitest from 'eslint-plugin-vitest';

export default [
  {
    plugins: {
      vitest
    },
    rules: {
      ...vitest.configs.recommended.rules
    }
  }
];
