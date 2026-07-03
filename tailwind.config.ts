
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        muted: "#64748B",
        purple: {
          50: "#F5F0FF",
          100: "#EEE5FF",
          500: "#7C3AED",
          600: "#6D28D9",
          700: "#5B21B6",
          900: "#21084A"
        }
      },
      boxShadow: {
        soft: "0 18px 60px rgba(40, 15, 85, .12)",
        card: "0 16px 40px rgba(15, 23, 42, .08)"
      }
    },
  },
  plugins: [],
};
export default config;
