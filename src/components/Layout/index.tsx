import type { HTMLAttributes } from "react";

import Modal from "./Modal";
import Toasts from "./Toasts";
import cc from "classcat";

interface LayoutProps {
  children: React.ReactNode;
  mobileFirst?: boolean;
}

export default function Layout({
  mobileFirst = false,
  children,
  ...props
}: LayoutProps & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="w-full flex justify-center h-screen">
      <Toasts mobileFirst={mobileFirst} />
      <Modal mobileFirst={mobileFirst} />
      <div
        className={cc([
          "w-full h-screen overflow-auto no-scrollbar",
          mobileFirst && "max-w-md shadow-xl",
        ])}
      >
        <div {...props} className={cc(["relative", props.className])}>
          {children}
        </div>
      </div>
    </div>
  );
}
