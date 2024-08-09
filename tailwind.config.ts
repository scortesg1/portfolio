import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg": "#2D2D2D",
        "aqua": "#08BA84",
        "dark-gray": "#202020",
        "white": "#D8D8D8",
        "soft-gray": "#B5B5B5"
      },
    },
  },
  plugins: [],
};
export default config;
