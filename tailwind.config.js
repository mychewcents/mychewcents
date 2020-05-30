const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E3E1F0',
          200: '#B2B6D1',
          300: '#6976A2',
          400: '#394B83',
          500: '#082064',
          600: '#061A5C',
          700: '#051355',
          800: '#030D4D',
          900: '#010342',
        },
        secondary: {
          100: '#A7F3FC',
          200: '#82DAF5',
          300: '#5DC2EF',
          400: '#38A9E9',
          500: '#0084DF',
          600: '#005FB4',
          700: '#004697',
          800: '#002D7A',
          900: '#00145D',
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
