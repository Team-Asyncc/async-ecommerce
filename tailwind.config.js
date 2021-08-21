module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        lgCustom: '1100px',
        xlCustom: '1340px',
      },
      outline: {
        pink: '2px solid #f9a8d400',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
