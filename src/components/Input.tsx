import type { InputHTMLAttributes } from "react";

import cc from "classcat";
import { Check, Circle, X } from "lucide-react";

export interface InputProps {
  label: string;
  size?: "xs" | "sm" | "md" | "lg";
  error?: {
    err: string;
    ok: string;
    status: boolean;
  }[];
}

export default function Input({
  label,
  size = "md",
  error,
  ...props
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col w-full gap-1">
      <label className="text-sm font-semibold flex gap-0.5 items-center">
        {label}
        {props.required && (
          <div className="w-1 h-1 rounded-full bg-primary-background -translate-y-1" />
        )}
      </label>
      <div
        className={cc([
          "border border-primary-background/20 placeholder:text-primary-background/50 px-3 flex items-center rounded bg-white focus-within:border-2",
          size === "xs" && "text-xs h-8",
          size === "sm" && "text-sm h-10",
          size === "md" && "text-base h-12",
          size === "lg" && "text-lg h-14",
        ])}
      >
        <input
          {...props}
          className={cc([
            "w-full outline-none bg-transparent",
            props.className,
          ])}
        />
      </div>
      <ul>
        {error?.map((err, i) => (
          <li
            key={i}
            className={cc([
              "text-sm flex items-center gap-1",
              err.status ? "text-green-500" : "text-red-500",
            ])}
          >
            {err.status ? <Check size={14} /> : <X size={14} />}
            {err.status ? err.ok : err.err}
          </li>
        ))}
      </ul>
    </div>
  );
}
