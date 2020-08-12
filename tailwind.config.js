const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  // purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          '900': '#283593',
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
