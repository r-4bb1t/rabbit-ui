import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export const config: Config = {
  content: ["./src/**/*.tsx", "./index.html", "./dist/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          background: "#111111",
          darker: "#0d0d0d",
          text: "#f5f5f5",
          disabled: "#b4b4b4",
        },
        success: "#6666dd",
        warning: "#dd9933",
        error: "#dd6666",
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
};

export default config;
