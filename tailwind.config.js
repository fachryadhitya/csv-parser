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
        peach: "#ffd6ba",
        "white-primary": "#faf9f9",
        "light-green-primary": "#bee3db",
        "green-primary": "#89b0ae",
        "dark-grey-primary": "#555b6e",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
