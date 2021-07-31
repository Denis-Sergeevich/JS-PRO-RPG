module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'object-curly-newline': ['error', { multiline: true, minProperties: 10 }],
    camelcase: ['error', { ignoreGlobals: true, properties: 'never', ignoreDestructuring: true, ignoreImports: true }],
  },
};
