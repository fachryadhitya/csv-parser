module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Architects Daughter", "cursive"],
      serif: ["Montserrat", "sans-serif"],
    },

    extend: {
      colors: {
        "red-primary": "#e63946",
        "white-primary": "#f1faee",
        "light-blue-primary": "#a8dadc",
        "blue-primary": "#457b9d",
        "dark-blue-primary": "#1d3557",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
