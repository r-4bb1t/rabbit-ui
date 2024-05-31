import { tailwindPreset } from "./app";
import type { Config } from "tailwindcss";

const config: Config = {
  presets: [tailwindPreset],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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
        error: "#EF4444",
        ok: "#22C55E",
      },
    },
  },
  plugins: [],
};
export default config;
