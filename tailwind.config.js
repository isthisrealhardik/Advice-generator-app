/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary
        'light-cyan': 'hsl(193, 38%, 86%)',
        'neon-green': 'hsl(150, 100%, 66%)',
        // neutral 
        'grayish-blue': 'hsl(217, 19%, 28%)',
        'dark-grayish-blue': 'hsl(217, 19%, 24%)',
        'dark-blue': 'hsl(218, 23%, 16%)',
      },
      fontSize: {
        'quote': '28px',
      },
      fontFamily: {
        'Manrope': ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}

