import type { InputHTMLAttributes } from "react";

import cc from "classcat";
import { Check, X } from "lucide-react";

export interface InputProps {
  label?: string;
  sz?: "xs" | "sm" | "md" | "lg";
  error?: {
    err: string;
    ok: string;
    status: boolean;
  }[];
  fullWidth?: boolean;
}

export default function Input({
  label,
  sz = "md",
  error,
  fullWidth = true,
  ...props
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={cc(["inline-flex flex-col gap-1", fullWidth && "w-full"])}>
      {label && (
        <label className="text-sm font-semibold flex gap-0.5 items-center">
          {label}
          {props.required && (
            <div className="w-1 h-1 rounded-full bg-primary -translate-y-1" />
          )}
        </label>
      )}
      <div
        className={cc([
          "border relative border-primary/20 placeholder:text-primary/50 px-3 flex items-center rounded bg-white focus-within:border-primary",
          sz === "xs" && "text-xs h-8",
          sz === "sm" && "text-sm h-10",
          sz === "md" && "text-base h-12",
          sz === "lg" && "text-lg h-14",
          props.disabled &&
            "pointer-events-none cursor-not-allowed border-primary-bright",
          props.className,
        ])}
      >
        <input
          {...props}
          className={cc(["w-full outline-none bg-transparent"])}
          // type이 number일 때, 숫자만 입력할 수 있도록 설정
          onChange={(e) => {
            if (props.type === "number") {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }

            props.onChange && props.onChange(e);
          }}
        />
        {!label && props.required && (
          <div className="absolute right-2 top-3 w-1 h-1 rounded-full bg-primary -translate-y-1" />
        )}
      </div>
      <ul>
        {error?.map((err, i) => (
          <li
            key={i}
            className={cc([
              "text-sm flex items-center gap-1",
              err.status ? "text-ok" : "text-error",
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
