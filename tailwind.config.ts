import { tailwindPreset } from "./src/libs/tailwind-preset";
import { type Config } from "tailwindcss";

export const config: Config = {
  content: ["./src/**/*.tsx", "./index.html", "./dist/**/*.js"],
  darkMode: "class",
  presets: [tailwindPreset],
};

export default config;
