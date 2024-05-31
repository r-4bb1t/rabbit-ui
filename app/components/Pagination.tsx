"use client";

import Button from "./Button";

export default function Pagination({
  current,
  total,
  prev,
  next,
}: {
  current: number;
  total: number;
  prev: () => void;
  next: () => void;
}) {
  return (
    <div className="flex justify-between items-center w-full h-16 px-12 max-w-sm">
      <Button
        onClick={prev}
        disabled={current === 1}
        icon="ChevronLeft"
        square
        ghost
      />
      <span className="text-base">
        <span className="font-bold">{current}</span> / {total}
      </span>
      <Button
        onClick={next}
        className="text-lg font-bold"
        disabled={current === total}
        icon="ChevronRight"
        square
        ghost
      />
    </div>
  );
}
