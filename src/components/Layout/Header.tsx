import cc from "classcat";

export default function Header({
  title,
  mobileFirst = false,
}: {
  title: React.ReactNode;
  mobileFirst?: boolean;
}) {
  return (
    <header
      className={cc([
        "fixed top-0 w-full h-16 backdrop-blur z-10 shrink-0 flex items-center px-12",
        mobileFirst && "max-w-md",
      ])}
    >
      {title}
    </header>
  );
}
