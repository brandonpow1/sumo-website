module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.{html,js}',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.{md,html}',
    './assets/js/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'caveat': ['"Caveat Brush"', 'regular']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
        require('flowbite/plugin'),
        require('@tailwindcss/typography'),
    ],
}
