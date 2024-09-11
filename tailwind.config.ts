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
        "index": {
          50: "#ffecec",
          100: "#ffd6d6",
          200: "#ffbcbc",
          300: "#ff9999",
          400: "#ff7676",
          500: "#de7665",
          600: "#cf6662",
          700: "#b95550",
          800: "#9c4c48",
          900: "#7d403e",
        }
      },
    },
    plugins: [],
  }
}
export default config;
