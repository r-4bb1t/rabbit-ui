import type { HTMLAttributes, ReactElement } from "react";

import cc from "classcat";

export default function Header({
  title,
  mobileFirst = false,
  ...props
}: {
  title: string | JSX.Element | ReactElement;
  mobileFirst?: boolean;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <header
      {...props}
      className={cc([
        "fixed top-0 w-full h-16 backdrop-blur z-10 shrink-0 flex items-center",
        mobileFirst ? "max-w-md px-4" : "px-12",
        props.className,
      ])}
    >
      {title}
    </header>
  );
}
