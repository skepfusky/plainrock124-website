module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '421px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px'
    },
    extend: {
      fontFamily: {
        '8-bit': ['Press Start 2P', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
