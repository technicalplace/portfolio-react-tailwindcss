/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        card: '4px 7px 19px 6px #2b52ee',
        btn: '4px 7px 10px 1px #385be5',
      }
    },
  },
  plugins: [],
}

