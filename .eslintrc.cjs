const vitest = require("eslint-plugin-vitest");

module.exports = {
  globals: {
    ...vitest.environments.env.globals,
  },
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:testing-library/react',
    'plugin:vitest/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true
      },
    ],
    "no-unused-vars": "warn",
    "vitest/expect-expect": "off",
  },
}