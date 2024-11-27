module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  globals: {
    AudioWorkletGlobalScope: 'readonly',
  },
  plugins: ['jest'],
  rules: {
    // Add custom rules here if needed
  },
};