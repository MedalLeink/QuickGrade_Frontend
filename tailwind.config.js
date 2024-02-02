/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "purple-50":"#2D00F7",
        "gray-400" : "#98A2B3",
        "gray-500": "#667085"

      },
        fontFamily:{
          inter:["Inter"]
        },
       
    },
  },
  plugins: [],
}

