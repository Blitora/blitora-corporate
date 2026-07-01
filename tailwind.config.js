/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
      },
      colors: {
        navy:    '#0D1B3E',
        orange:  '#E8560A',
        green:   '#1D9E75',
        lgrey:   '#F5F6FA',
        mgrey:   '#E0E3ED',
        dgrey:   '#4A5568',
        bgrey:   '#718096',
        nearblack: '#1A202C',
      },
    },
  },
  plugins: [],
};
