module.exports = {
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
  ],
  plugins: [
    'jest',
  ],
  parser: 'babel-eslint',
  env: {
    'jest/globals': true,
  },
};
