import { useState } from "react";

import Pagination from "../components/Pagination";

import type { Story } from "@ladle/react";

export const PaginationStory: Story = () => {
  const [page, setPage] = useState(1);
  const total = 10;
  return (
    <Pagination
      current={page}
      total={total}
      prev={() => setPage((p) => p - 1)}
      next={() => setPage((p) => p + 1)}
    />
  );
};
