import cc from "classcat";

export default function List({
  marker,
  children,
  className,
}: {
  marker?: "disc" | "decimal" | string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ul
      className={cc([
        marker === "disc"
          ? "list-disc"
          : marker === "decimal"
            ? "list-decimal"
            : `[&>li]:before:content-[${marker}]`,
        "marker:text-primary",
        className,
      ])}
    >
      {children}
    </ul>
  );
}
