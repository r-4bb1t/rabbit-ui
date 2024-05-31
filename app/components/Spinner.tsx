import cc from "classcat";

interface SpinnerProps {
  sz?: "xs" | "sm" | "md" | "lg";
}

export default function Spinner({ sz = "md" }: SpinnerProps) {
  return (
    <div
      className={cc([
        "flex items-center justify-center",
        sz === "xs" && "w-4 h-4",
        sz === "sm" && "w-5 h-5",
        sz === "md" && "w-6 h-6",
        sz === "lg" && "w-7 h-7",
      ])}
    >
      <div
        className={cc([
          "border-current rounded-full animate-spin border-2 border-t-transparent",
          sz === "xs" && "w-3 h-3",
          sz === "sm" && "w-3.5 h-3.5",
          sz === "md" && "w-4 h-4",
          sz === "lg" && "w-5 h-5 border-[3px]",
        ])}
      ></div>
    </div>
  );
}
