/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Remove unused CSS
  theme: {
    extend: {},
  },
  plugins: [],
}

