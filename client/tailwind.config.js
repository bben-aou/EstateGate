/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        light : {
          0 : "#FFFFFF",
          5:  "#FCFCFD",
          10 : "#fcfcfe",
          20 : "#fbfbfd",
          30 : "#EEEEEF",
          40 : "#64656A",
          50 : "#dfd5f4",
          60 : "#4564d5",
          70 : "#785cb3",
        },
        dark : {
          10 : "#1e1a3d",
          20 : "#000000"
        }
      }
    },
    screens: {
      'md': '640px',
      'lg': '1025px',
    },
  },
  plugins: [],
}
