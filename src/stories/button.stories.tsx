import { Button } from "..";

import type { Story } from "@ladle/react";

export const TextButton: Story = () => (
  <div className="flex flex-col gap-4">
    <Button sz="xs">Click Me!</Button>
    <Button sz="sm">Click Me!</Button>
    <Button sz="md">Click Me!</Button>
    <Button sz="lg">Click Me!</Button>
  </div>
);
