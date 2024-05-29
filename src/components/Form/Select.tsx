import { type HTMLAttributes, useEffect, useRef, useState } from "react";

import cc from "classcat";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, X } from "lucide-react";

export interface SelectProps {
  label?: string;
  sz?: "xs" | "sm" | "md" | "lg";
  error?: {
    err: string;
    ok: string;
    status: boolean;
  }[];
  options: {
    value: string | undefined;
    label: string;
  }[];
  value?: string;
  onChange?: (e: string) => void;
}

export default function Select({
  label,
  sz = "md",
  error,
  options,
  value: defaultValue,
  onChange,
  ...props
}: SelectProps & HTMLAttributes<HTMLDivElement>) {
  const [value, setValue] = useState<string>((defaultValue ?? "") as string);
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onChange?.(value);
  }, [onChange, value]);

  useEffect(() => {
    const handleBlur = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", handleBlur);

    return () => {
      window.removeEventListener("click", handleBlur);
    };
  }, []);

  return (
    <div className="flex flex-col w-full gap-1 relative" ref={ref}>
      <label className="text-sm font-semibold flex gap-0.5 items-center">
        {label}
      </label>
      <div
        className={cc([
          "border relative border-primary/20 placeholder:text-primary/50 px-3 flex items-center rounded bg-white focus-within:border-primary",
          sz === "xs" && "text-xs h-8",
          sz === "sm" && "text-sm h-10",
          sz === "md" && "text-base h-12",
          sz === "lg" && "text-lg h-14",
        ])}
      >
        <div
          {...props}
          className={cc([
            "w-full outline-none bg-transparent select-none",
            props.className,
          ])}
          onClick={() => setOpen(!open)}
        >
          {options.find((opt) => opt.value === value)?.label ?? "Select"}
        </div>
        <div
          className={cc([
            "absolute right-2 pointer-events-none transition-transform text-primary-darker",
            open && "rotate-180",
          ])}
        >
          <ChevronDown size={16} />
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.ul
            transition={{ duration: 0.1 }}
            initial={{ opacity: 0, y: -5, scaleY: 0 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -5, scaleY: 0 }}
            className="absolute z-10 flex flex-col border border-primary-bright divide-primary-bright top-full w-full rounded divide-y bg-white origin-top"
          >
            {options.map((opt) => (
              <div
                className={cc([
                  "hover:bg-primary-bright cursor-pointer select-none flex items-center px-2",
                  (sz === "xs" || sz === "sm") && "text-xs h-8",
                  (sz === "md" || sz === "lg") && "text-sm h-10",
                ])}
                key={opt.value}
                onClick={() => {
                  setValue(opt.value ?? "");
                  setOpen(false);
                }}
              >
                {opt.label}
              </div>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
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
