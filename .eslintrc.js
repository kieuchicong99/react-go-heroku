module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['universe/web'],
  plugins: ['react'],
  rules: {
    'import/no-unresolved': 'off',
    'import/order': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'no-case-declarations': 'off',
    'no-script-url': 'off',
    'no-console': ['warn', { allow: ['warn', 'info'] }],
    'arrow-body-style': ['warn', 'as-needed', { requireReturnForObjectLiteral: false }],
    'prefer-template': 'warn',
    'max-len': ['warn', 120],
  },
};
