import jest from 'eslint-plugin-jest';

export default [
  {
    files: ['test/**/*.{test,spec}.ts'],
    ...jest.configs['flat/recommended'],
    rules: {
      ...jest.configs['flat/recommended'].rules,
      // Replace unbound method with jest version
      '@typescript-eslint/unbound-method': 'off',
      'jest/unbound-method': 'error',

      // This rule was flagging expect.any(Class) as unsafe in specs
      '@typescript-eslint/no-unsafe-assignment': 'off',

      // Turn this off so we don't need to type absolutely everything in specs.
      // It should probably be on but it would be a lot of work to update existing tests.
      '@typescript-eslint/no-unsafe-member-access': 'off'
    }
  }
];
