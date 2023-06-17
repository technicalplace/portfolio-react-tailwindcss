/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        homeColor: '#02aa7d',
        homeContentsColor: '#c0f8e9'
      }
    },
  },
  plugins: [],
}

