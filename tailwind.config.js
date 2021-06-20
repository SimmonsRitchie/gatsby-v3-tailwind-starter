/* eslint-disable no-undef */
// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  // https://github.com/tailwindlabs/tailwindcss-forms
  plugins: [require("@tailwindcss/forms")],
  theme: {
    fontFamily: {
      sans: ["open-sans", "sans-serif"],
      montserrat: ["montserrat", "sans-serif"]
    },
  },
  variants: {
    extend: {
      textColor: ['visited','disabled'],
      backgroundColor: ['disabled'],
      borderColor: ['disabled'],
      opacity: ['disabled']
    }
  },
};
