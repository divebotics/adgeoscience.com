import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#0D2340",
          gray: "#6A737A",
          white: "#FFFFFF",
        },
        secondary: {
          teal: "#3DAFC4",
          sand: "#DBCBB8",
        },
        accent: {
          orange: "#F36C21",
          gold: "#F2D64B",
        },
        template: {
          neutral: "#EDEEEF",
        },
      },
      fontFamily: {
        heading: ["Avenir Next", "Avenir", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "system-ui", "sans-serif"],
        body: ["Avenir Next", "Avenir", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
