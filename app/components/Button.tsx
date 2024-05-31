"use client";

import Icon from "./Icon";
import Spinner from "./Spinner";
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
        "rounded flex items-center justify-center transition-colors disabled:opacity-20 relative shrink-0",
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
      disabled={loading}
    >
      {loading && (
        <div className="w-full h-full absolute inset-0 flex items-center justify-center">
          <Spinner sz={sz} />
        </div>
      )}
      <div className={cc([loading && "invisible"])}>
        {icon && (
          <Icon
            name={icon}
            size={sz === "xs" ? 16 : sz === "sm" ? 18 : sz === "md" ? 20 : 24}
          />
        )}{" "}
        {children}
      </div>
    </button>
  );
}
