import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        nuvix: {
          dark: "#1B0B3A",
          purple: "#7C3AED",
          violet: "#A855F7",
          soft: "#F6F2FF"
        }
      },
      boxShadow: {
        soft: "0 24px 80px rgba(42, 20, 90, 0.12)"
      }
    },
  },
  plugins: [],
};
export default config;
