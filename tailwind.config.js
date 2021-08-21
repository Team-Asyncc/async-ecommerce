module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        lgCustom: '1100px',
        xlCustom: '1340px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
