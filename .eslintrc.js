module.exports = {
  env: {
    es2020: true
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  rules: {
    semi: ['error', 'never'],
    'max-len': ['error', { code: 120 }],
    'prettier/prettier': 'error'
  }
}
