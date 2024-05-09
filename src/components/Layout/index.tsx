import cc from "classcat";

interface LayoutProps {
  children: React.ReactNode;
  mobileFirst?: boolean;
}

export default function Layout({ mobileFirst = false, children }: LayoutProps) {
  return (
    <div className="w-full flex justify-center h-[100dvh] overflow-auto">
      <div
        className={cc([
          "w-full h-full flex flex-col items-center shadow-xl relative",
          mobileFirst && "max-w-md",
        ])}
      >
        {children}
      </div>
    </div>
  );
}
