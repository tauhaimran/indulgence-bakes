import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F9F5F0",
        espresso: "#3E2723",
        wheat: "#C6A87C",
        taupe: {
          DEFAULT: "#D4C4B5",
          soft: "#E3D5C6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 18px 45px rgba(0,0,0,0.12)",
      },
      borderRadius: {
        "layout": "32px",
      },
    },
  },
  plugins: [],
};

export default config;

