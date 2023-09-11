/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
      screens: {
        'xsm': {'min': '300px', 'max': '720px'},
      'sm': {'min': '721px','max': '900px'},
      'lg': {'min': '901px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
      },
  },
  plugins: [
  ],
}