module.exports = {
  extends: 'stylelint-config-recommended',
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'block-no-empty': null,
    'unit-whitelist': ['em', 'rem', 's', 'ms', '%', 'px'],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
}
