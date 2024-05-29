import type { HTMLAttributes } from "react";

import cc from "classcat";

export default function Header({
  title,
  mobileFirst = false,
  ...props
}: {
  title: Element;
  mobileFirst?: boolean;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <header
      {...props}
      className={cc([
        "fixed top-0 w-full h-16 backdrop-blur z-10 shrink-0 flex items-center px-12",
        mobileFirst && "max-w-md",
        props.className,
      ])}
    >
      {title}
    </header>
  );
}
