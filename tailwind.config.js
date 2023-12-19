/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
     content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

     darkMode: 'class',
     theme: {
          extend: {
               fontFamily: {
                    sans: ['Poppins', ...defaultTheme.fontFamily.sans],
               },
               colors: {
                    darks: '#1c1c1c',
               },
          },
     },
     safelist: [
          {
               pattern: /(from|via|to|bg)-(black|white)/,
          },
          {
               pattern: /(from|via|to|bg)-(.+)-([1-9]00)/,
          },
     ],
};
