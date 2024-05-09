import cc from "classcat";

interface SpinnerProps {
  size?: "xs" | "sm" | "md" | "lg";
}

export default function Spinner({ size = "md" }: SpinnerProps) {
  return (
    <div
      className={cc([
        "flex items-center justify-center",
        size === "xs" && "w-4 h-4",
        size === "sm" && "w-5 h-5",
        size === "md" && "w-6 h-6",
        size === "lg" && "w-7 h-7",
      ])}
    >
      <div
        className={cc([
          "border-current rounded-full animate-spin border-2 border-t-transparent",
          size === "xs" && "w-3 h-3",
          size === "sm" && "w-3.5 h-3.5",
          size === "md" && "w-4 h-4",
          size === "lg" && "w-5 h-5 border-[3px]",
        ])}
      ></div>
    </div>
  );
}
