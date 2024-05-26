import Input from "../components/Input";

import type { Story } from "@ladle/react";

export const TextInput: Story = () => (
  <div className="flex flex-col gap-4">
    {["xs", "sm", "md", "lg"].map((sz) => (
      <Input type="text" label={sz} sz={sz as "xs" | "sm" | "md" | "lg"} />
    ))}
  </div>
);
