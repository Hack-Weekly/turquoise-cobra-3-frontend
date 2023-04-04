/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors:{
      turquoise: {
      '50': '#f5fdfc', 
      '100': '#eafbfa', 
      '200': '#cbf5f1', 
      '300': '#aceee9', 
      '400': '#6ee2d9', 
      '500': '#30d5c8', 
      '600': '#2bc0b4', 
      '700': '#24a096', 
      '800': '#1d8078', 
      '900': '#186862'
  }},},
  },
  plugins: [],
}

