import type { InputHTMLAttributes } from "react";

import cc from "classcat";
import type { FieldError, UseFormRegister } from "react-hook-form";

type InputProps = {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  required: boolean;
  error: FieldError | undefined;
};

export default function Input({
  label,
  register,
  required,
  error,
  className,
  ...props
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <label className="text-sm font-semibold">{label}</label>
      <input
        {...register(label, {
          required,
          valueAsNumber: props.type === "number",
        })}
        {...props}
        className={cc([
          "rounded border border-gray-300 focus:ring-primary-background focus:border-primary-background",
          "transition-colors w-full px-3 py-2 mt-1",
          className,
        ])}
        aria-invalid={!!error}
      />
      {error && <p className="text-red-500">{error.message}</p>}
    </>
  );
}
