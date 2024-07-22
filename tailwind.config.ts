import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        red: "#FF3939",
        white: "##FF3939",
        black: "#333333",
        purple: "#633CFF",
        "purple-light": "#BEADFF",
        "purple-lightest": "#EFEBFF",
        gray: "#737373",
        "gray-light": "D9D9D9",
        "gray-lightest": "FAFAFA",
      },
      fontFamily: {
        instrument: ["Instrument Sans", "sans-serif"],
      },
      fontSize: {
        "h-big": ["2rem", { lineHeight: "3rem" }],
        "h-normal": ["1rem", { lineHeight: "1.5rem" }],
        "b-s": ["2rem", { lineHeight: "3rem" }],
      },
      fontWeight: {
        extrabold: "700",
        bold: "600",
        normal: "400",
      },
      screens: {
        md: "768px",
        lg: "1200px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
