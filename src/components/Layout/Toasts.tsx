import { useEffect } from "react";

import Button from "../Button";
import cc from "classcat";
import { AnimatePresence, motion } from "framer-motion";
import { CircleCheck, CircleX, Info, TriangleAlert, X } from "lucide-react";

import { useContextStore } from "@/store/contextStore";
import type { ToastType } from "@/types/modalType";

export default function Toasts({ mobileFirst }: { mobileFirst?: boolean }) {
  const { toasts } = useContextStore();

  return (
    <div className="z-20 fixed inset-0 flex p-4 flex-col pointer-events-none gap-1 items-center">
      <AnimatePresence>
        {toasts.map((item) => (
          <Toast key={item.id} item={item} mobileFirst={mobileFirst ?? false} />
        ))}
      </AnimatePresence>
    </div>
  );
}

const Toast = ({
  item,
  mobileFirst,
}: {
  item: ToastType;
  mobileFirst: boolean;
}) => {
  const { removeToast } = useContextStore();

  useEffect(() => {
    setTimeout(() => removeToast(item.id!), 5000);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className={cc([
        "flex justify-between items-center w-full p-4 rounded text-primary-text gap-4 pointer-events-auto backdrop-blur",
        item.type === "info" && "bg-primary-background/70",
        item.type === "success" && "bg-success/70",
        item.type === "error" && "bg-error/70",
        item.type === "warning" && "bg-warning/70",
        mobileFirst && "max-w-sm",
      ])}
    >
      <div className="flex items-center gap-2">
        <Icon type={item.type} />
        {item.text}
      </div>
      <Button
        ghost
        size="xs"
        onClick={() => {
          removeToast(item.id!);
        }}
      >
        <X
          className={cc([
            "w-4 h-4",
            item.type === "info"
              ? "text-primary-text"
              : "text-primary-background",
          ])}
        />
      </Button>
    </motion.div>
  );
};

const Icon = ({ type }: { type: ToastType["type"] }) => {
  switch (type) {
    case "info":
      return <Info className="w-5 h-5 stroke-primary-text" />;
    case "success":
      return <CircleCheck className="w-5 h-5 stroke-primary-text" />;
    case "error":
      return <CircleX className="w-5 h-5 stroke-primary-text" />;
    case "warning":
      return <TriangleAlert className="w-5 h-5 stroke-primary-text" />;
    default:
      return null;
  }
};
