module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xxs: "0.625rem",
      },
    },
    colors: {
      pinkm: "#E8C9D9",
      pinkt: "#641E42",
      putih: "#FFFFFF",
      pinks: "#C98DAC",
      pinkss: "#DDA8C3",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
