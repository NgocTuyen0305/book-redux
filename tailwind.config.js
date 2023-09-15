/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'inclusiveSans' : ['Inclusive Sans', 'sans-serif'],
      'poppins' : ['Poppins', 'sans-serif'],
      'Raleway': ['Raleway', 'sans-serif'],
      'dancingScript':['Dancing Script', 'cursive']
    }
  },
  plugins: [],
}