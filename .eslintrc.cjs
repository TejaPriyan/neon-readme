module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
  },
  extends: ['eslint:recommended'],
  rules: {
    'no-console': 'off',
  },
};
