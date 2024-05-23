import Spinner from "./Spinner";
import cc from "classcat";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  sz?: "xs" | "sm" | "md" | "lg";
  ghost?: boolean;
  children: React.ReactNode;
}

export default function Button({
  loading = false,
  sz: sz = "md",
  ghost = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cc([
        "rounded flex items-center transition-colors disabled:opacity-20 relative shrink-0 w-fit",
        ghost
          ? "bg-transparent hover:bg-primary-background/10 text-primary-background disabled:bg-transparent"
          : "bg-primary-background hover:bg-primary-darker text-primary-text disabled:bg-primary-background",
        sz === "xs" && "text-xs px-2 py-1.5",
        sz === "sm" && "text-sm px-3 py-2",
        sz === "md" && "text-base px-4 py-2",
        sz === "lg" && "text-lg px-5 py-2",
        props.className,
      ])}
      disabled={loading}
    >
      {loading && (
        <div className="w-full h-full absolute inset-0 flex items-center justify-center">
          <Spinner sz={sz} />
        </div>
      )}
      <div className={cc([loading && "invisible"])}>{children}</div>
    </button>
  );
}
