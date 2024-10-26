/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        irishGrover: ['"Irish Grover"', 'cursive'],
        jaini: ['"Jaini"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
