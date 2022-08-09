module.exports = {
  plugins: ['./node_modules/@trivago/prettier-plugin-sort-imports'],
  singleQuote: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderSeparation: true,
  importOrder: [
    '^(.*)[.]css$',
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '^@[/](.*)$',
    '^[.][/](.*)$',
  ],
};
