module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    // настройка, что и как будет проверенно на ошибки:
    semi: ['error', 'never'],
    indent: ['error', 2],
    // quotes: ["error", "double", { allowTemplateLiterals: true }],
    'multiline-ternary': ['error', 'never'],
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never' }
    ],
    'arrow-spacing': ['error', { before: true, after: true }]
  }
}
