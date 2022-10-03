/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#1f88f2",
        
"secondary": "#c1222a",
        
"accent": "#b8f9a9",
        
"neutral": "#191B24",
        
"base-100": "#3C4553",
        
"info": "#5BB6E6",
        
"success": "#2BBFB0",
        
"warning": "#E9A41C",
        
"error": "#F71D2F",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

}
