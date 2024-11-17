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
          15: "#f8f8ff",
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
          30: "#2c264b",
        },
        gradient: {
          10: "#6a51a2",
          20: "#6676b1",
          30: "#3c58bd",
        },
        button: {
          active: "#ff916f",
        },
        random: {
          10: "#454655",
          20: "#ff00d3",
          30: "#8c8db9",
          40: "#D4D7E3",
          50: "#F7FBFF",
          60: "#808bbf",
          70: "#757c8b",
          80: "#4564d5d6",
          90: "#F0EFFB",
        },
        banner: {
          10: "#d8dcdf24",
          20: "#2643ab",
          30: "#222"
        },
        statistics: {
          10: "#2d9491",
          20: "#ffc35e",
        },
        error: {
          10: "#ffebf0",
          20: "#fc5d6d",
        },
        success: {
          10: "#66bb6a",
        },
        profile: {
          SectionBackGround: "#f2f2f2c6",
        },
        socialMedia: {
          instagram: "#c13584",
          linkedIn: "#0a66c2",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        banner:
          "0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)",
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "shiny-text": "shiny-text 8s infinite",
        gradient: "gradient 8s linear infinite",
        pulse: "pulse var(--duration) ease-out infinite",
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
        grid: "grid 15s linear infinite",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
        "shiny-text": {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shiny-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shiny-width)) 0",
          },
        },
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        pulse: {
          "0%, 100%": {
            boxShadow: "0 0 0 0 var(--pulse-color)",
          },
          "50%": {
            boxShadow: "0 0 0 8px var(--pulse-color)",
          },
        },
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
        grid: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
    },
    screens: {
      md: "640px",
      lg: "1025px",
      xl: "1280px",
      "2xl": "1536px",
      tablet: {
        min: "1025px",
        max: "1023px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".hide-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
