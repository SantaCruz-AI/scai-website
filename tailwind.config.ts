import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans"],
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
    },
    screens: {
      md: "900px",
    },
  },
  plugins: [],
};
export default config;
