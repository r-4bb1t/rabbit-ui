import Spinner from "./Spinner";
import cc from "classcat";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  ghost?: boolean;
  children: React.ReactNode;
}

export default function Button({
  loading = false,
  size = "md",
  ghost = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cc([
        "rounded flex items-center transition-colors disabled:opacity-20 relative shrink-0",
        ghost
          ? "bg-transparent hover:bg-primary-background/10 text-primary-background disabled:bg-transparent"
          : "bg-primary-background hover:bg-primary-darker text-primary-text disabled:bg-primary-background",
        size === "xs" && "text-xs px-2 py-1.5",
        size === "sm" && "text-sm px-3 py-2",
        size === "md" && "text-base px-4 py-2",
        size === "lg" && "text-lg px-5 py-2",
        props.className,
      ])}
      disabled={loading}
    >
      {loading && (
        <div className="w-full h-full absolute inset-0 flex items-center justify-center">
          <Spinner size={size} />
        </div>
      )}
      <div className={cc([loading && "invisible"])}>{children}</div>
    </button>
  );
}
