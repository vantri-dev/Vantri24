/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        boxshadowbt: "rgb(0 0 0 / 12%) 0px 5px 12px",
     
      },
     
      fontFamily: {
        inter: ['"Inter"', "ui-sans-serif"],
      },
      colors: {
        violet: "#e879f9",
        e2e8f0: " #e2e8f0",
        textword: "#334155",
        f5f5f5: "#f9fafb",
        f0abfc: "#f0abfc",
        f5d0fe: "#f5d0fe",
        f1f5f9: "#f9fafb",
        transparent: "transparent",
        white: "white",
        f8fafc: "#fafafa",
        ffffff: "#ffffff",
      },
      padding: {
        "10px": "10px",
        "7px": "7px",
        "40px": "40px",
        "4px": "4px",
        "10%": "10%",
        "3%": "3%",
        "15px": "15px",
        "5px": "5px",
      },
      margin: {
        "7%": "7%",
        "4.3%": "4.3%",
        auto: "auto",
      },
      fontSize: {
        base: ["15px", "20px"],
        17: ["17px", "20px"],
      },
      height: {
        "100px": "100px",
        "100%": "100%",
      },
      minWidth: {
        "30%": "33.33%",
        "100px": "100px",
        "650px": "650px",
        "600px": "600px",
        "550px": "550px",
        "450px": "450px",
        "400px": "450px",
        "62%": "20%",
      },
      zIndex: {
        999: "999",
      },
      screens: {
        mmd: {
          min: "787px",
          max: "890px",
        },
        ssm: {
          min: "767px",
          max: "787px",
        },
        sm: { min: "640px", max: "767px" },
        smm: { max: "640px" },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
