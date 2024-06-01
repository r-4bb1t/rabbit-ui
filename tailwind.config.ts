import { tailwindPreset } from "./app";
import tailwindScrollbar from "tailwind-scrollbar";
import type { Config } from "tailwindcss";

const config: Config = {
  presets: [tailwindPreset],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ff6464",
          darker: "#ff4c4c",
          text: "#ffffff",
          bright: "#ffdddd",
        },
      },
    },
  },
  plugins: [tailwindScrollbar],
};
export default config;
