module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        noto: ["Noto Sans SC"],
      },
      width: {
        "8xl": "1400px",
      },

      colors: {
        primary: "#26496d",
        secondary: "#F8F9FA",
        hoverColor: "#e0a103",
        background: "#F8F9FA",
        gray: "#495057",
        textColor: "#000",
      },
      screens: {
        xs: "320px",

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        xls: "1366px",

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
};
