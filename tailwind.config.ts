import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        text: 'text s5s ease infinite',
      }
    },
    keyframes: {
      text: {
        '0%, 100%': {
          'background-size': '200% 200%',
          'background-position': 'left center',
        },
        '50%': {
          'background-size': '200% 200%',
          'background-position': 'right center',
        },
      }
    },
    screens: {
      md: "900px",
    },
  },
  plugins: [],
};

export default withMT(config);
