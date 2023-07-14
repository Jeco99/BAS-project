/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      'beetleGreen' : '#407C87',
      'morningGlory': '#A5DBDD',
      'porcelain': '#EEF1F6',
      'geyser' : '#D3E1E2',
    },
    fontFamily: {
      sans: ['Poppins']
    }
  },
  plugins: [require('flowbite/plugin')],
})
