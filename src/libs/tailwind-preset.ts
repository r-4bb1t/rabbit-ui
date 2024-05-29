import tailwindScrollbar from "tailwind-scrollbar";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export const tailwindPreset: Config = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#111111",
          darker: "#0d0d0d",
          text: "#f5f5f5",
          bright: "#b4b4b4",
        },
      },
      minHeight: {
        // @ts-expect-error this can be an array
        screen: ["100vh", "100dvh"],
      },
      height: {
        // @ts-expect-error this can be an array
        screen: ["100vh", "100dvh"],
      },
      fontFamily: {
        sans: [
          "Pretendard\\ Variable",
          "Pretendard",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [tailwindScrollbar],
};
