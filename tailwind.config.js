/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./helpers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Signika: ["Signika", "sans-serif"],
        Poly: ["Poly", "serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        defaultBlack: "#000",
        primaryText: "#EEC594",
        regularText: "#333",
        thatAll: "#111111",
        jsStroke: "#F2F9A4",
        nodeStroke: "#9DC197",
        firebaseStroke: "#D9CBEF",
        reactStroke: "rgba(194, 222, 248, 1);",
        box1: "#CDC9F8",
        tongueColor: "#E08791",
      },
      backgroundColor: {
        primaryGray: "#E4E2FB",
        lightGray: "rgba(217, 217, 217, 0.20)",
        tongueColor: "#E08791",
        primaryYellow: "#E4DF66",
        primaryPurple: "#9666E4",
        primaryBg: "#EEC594",
        primaryBlue: "#66BEE4",
        regularColor: "#333",
        box1: "#CDC9F8",
        reactFill: "#C2DEF8",
        firebaseFill: "#D9CBEF",
        nextFill: "#D9D9D9",
        nodeFill: "rgba(157, 193, 151, 0.35)",
      },
      screens: {
        mobile: "490px",
        xsMobile: "440px",
        mdMobile: "575px",
        lgMobile: "725px",
      },
      gridTemplateColumns: {
        myGrid: "repeat(2, minmax(0, 150px))",
      },
    },
  },
  plugins: [],
};
