"use client";

import { useEffect } from "react";

import { useAlert } from "../../store/contextStore";
import type { ToastType } from "../../types/modalType";
import Button from "../Button";
import cc from "classcat";
import { AnimatePresence, motion } from "framer-motion";
import { CircleCheck, CircleX, Info, TriangleAlert, X } from "lucide-react";

export default function Toasts({ mobileFirst }: { mobileFirst?: boolean }) {
  const { toasts } = useAlert();

  return (
    <div className="z-20 fixed inset-0 pointer-events-none flex justify-center">
      <div
        className={cc([
          "flex p-4 flex-col-reverse gap-1 items-end w-full",
          mobileFirst && "max-w-sm",
        ])}
      >
        <AnimatePresence>
          {toasts.map((item) => (
            <Toast
              key={item.id}
              item={item}
              mobileFirst={mobileFirst ?? false}
            />
          ))}
        </AnimatePresence>
      </div>
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
  const { removeToast } = useAlert();

  useEffect(() => {
    setTimeout(() => removeToast(item.id!), 5000);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className={cc([
        "flex justify-between items-center w-full max-w-sm p-4 rounded bg-primary/70 text-primary-text gap-4 pointer-events-auto backdrop-blur",
        /* item.type === "info" && "bg-primary/70",
        item.type === "success" && "bg-success/70",
        item.type === "error" && "bg-error/70",
        item.type === "warning" && "bg-warning/70", */
        mobileFirst && "max-w-xs",
      ])}
    >
      <div className="flex items-center gap-2">
        <Icon type={item.type} />
        {item.text}
      </div>
      <Button
        ghost
        sz="xs"
        onClick={() => {
          removeToast(item.id!);
        }}
      >
        <X className={cc(["w-4 h-4 text-primary-text"])} />
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
