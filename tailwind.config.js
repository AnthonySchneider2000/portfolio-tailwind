/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Remove unused CSS
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

