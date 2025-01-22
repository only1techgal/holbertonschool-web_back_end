module.exports = [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: require("globals").browser }},
  require("@eslint/js").configs.recommended,
  ...require("typescript-eslint").configs.recommended,
  require("eslint-plugin-react").configs.flat.recommended,
];
