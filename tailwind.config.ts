import { tailwindPreset } from "./src/libs/tailwind-preset";
import { type Config } from "tailwindcss";

export const config: Config = {
  content: ["./src/**/*.tsx", "./index.html", "./dist/**/*.js"],
  darkMode: "class",
  presets: [tailwindPreset],
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
};

export default config;
