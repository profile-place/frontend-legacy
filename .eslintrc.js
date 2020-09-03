module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['@aero', '@nuxtjs', 'plugin:nuxt/recommended'],
  rules: {
    '@vue/this-in-template': 'off',
    'no-warning-comments': 'off',
    'no-trailing-spaces': 'off',
    'max-len': 'off'
  }
}
