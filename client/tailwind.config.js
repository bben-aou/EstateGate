/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          0: "#FFFFFF",
          5: "#FCFCFD",
          10: "#fcfcfe",
          20: "#fbfbfd",
          30: "#EEEEEF",
          40: "#64656A",
          50: "#dfd5f4",
          60: "#4564d5",
          70: "#785cb3",
        },
        dark: {
          10: "#1e1a3d",
          20: "#000000",
        },
        gradient: {
          10: "#6a51a2",
          20: "#6676b1",
        },
        button: {
          active: "#ff916f",
        },
        random: {
          10: "#454655",
          20: "#ff00d3",
        },
        banner: {
          10: "#d8dcdf24",
        },
        statistics: {
          10: "#2d9491",
          20: "#ffc35e",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    screens: {
      md: "640px",
      lg: "1025px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
