"use client";

import Icon from "../Icon";
import Spinner from "../Spinner";
import cc from "classcat";
import type { icons } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  sz?: "xs" | "sm" | "md" | "lg";
  ghost?: boolean;
  icon?: keyof typeof icons;
  square?: boolean;
  children?: React.ReactNode;
}

export default function Button({
  loading = false,
  sz: sz = "md",
  ghost = false,
  icon,
  square = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cc([
        "rounded transition-colors disabled:text-opacity-0 disabled:[&>:not(.loading)]:opacity-0 relative shrink-0 font-semibold flex justify-center items-center",
        ghost
          ? "bg-transparent hover:bg-primary/10 text-primary disabled:bg-transparent"
          : "bg-primary hover:bg-primary-darker text-primary-text disabled:bg-primary",
        sz === "xs" && (square ? "text-xs h-7 w-7" : "text-xs px-2 h-7 w-fit"),
        sz === "sm" && (square ? "text-sm h-9 w-8" : "text-sm px-3 h-8 w-fit"),
        sz === "md" &&
          (square ? "text-md h-9 w-9" : "text-base px-4 h-9 w-fit"),
        sz === "lg" &&
          (square ? "text-lg h-11 w-11" : "text-lg px-5 h-11 w-fit"),
        props.className,
      ])}
      disabled={loading || props.disabled}
    >
      {loading && (
        <div
          className={cc([
            "w-full h-full absolute inset-0 flex items-center justify-center loading",
            ghost ? "text-primary" : "text-primary-text",
          ])}
        >
          <Spinner sz={sz} />
        </div>
      )}
      {!loading && icon && (
        <Icon
          name={icon}
          size={sz === "xs" ? 16 : sz === "sm" ? 18 : sz === "md" ? 20 : 24}
        />
      )}{" "}
      {children}
    </button>
  );
}
