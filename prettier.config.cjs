/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  semi: true,
  singleQuote: true,
  tabWidth: 4,
  useTabs: false,
  jsxBracketSameLine: false,
  arrowParens: 'avoid',
  trailingComma: 'none'
};