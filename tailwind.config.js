module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "../../libs/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
  ],
  theme: {
    zIndex: {
      'full': '1000',
      'md': '50',
      'sm': '20'
    },
    fontFamily: {'sans': ['Roboto'] },
    container: { center: true },
    extend:{},
    },
  }