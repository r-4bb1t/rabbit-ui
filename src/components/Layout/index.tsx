import cc from "classcat";

interface LayoutProps {
  children: React.ReactNode;
  mobileFirst?: boolean;
}

export default function Layout({ mobileFirst = false, children }: LayoutProps) {
  return (
    <div className="w-full flex justify-center h-screen">
      <div
        className={cc([
          "w-full shadow-xl h-screen overflow-auto no-scrollbar",
          mobileFirst && "max-w-md",
        ])}
      >
        <div className="flex flex-col items-center relative">{children}</div>
      </div>
    </div>
  );
}
