import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3f0ff",
          100: "#ebe5ff",
          200: "#d9ceff",
          300: "#bea6ff",
          400: "#a07af5",
          500: "#8E6BC4",
          600: "#5B3B8A",
          700: "#4a2f72",
          800: "#3d2560",
          900: "#1E1040",
          950: "#13092b",
        },
        dark: {
          bg: "#1E1040",
          card: "#2D1B55",
          border: "#3d2a6b",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 12px 0 rgba(91,59,138,0.10)",
        "card-hover": "0 8px 30px 0 rgba(91,59,138,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
