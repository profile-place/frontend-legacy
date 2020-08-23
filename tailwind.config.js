module.exports = {
  theme: {
    extend: {
      colors: {
        greyple: '#99AAB5',
        blackish: '#23272A',
        darkish: '#2C2F33'
      }
    }
  },
  variants: {},
  plugins: ['@tailwindcss/custom-forms'],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
