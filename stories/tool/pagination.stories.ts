import { Pagination } from "@/app";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Tool/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    current: {
      control: {
        type: "number",
      },
    },
    total: {
      control: {
        type: "number",
      },
    },
    prev: { action: "prev" },
    next: { action: "next" },
  },
  args: {
    prev: fn(),
    next: fn(),
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const pagination: Story = {
  args: {
    current: 1,
    total: 10,
  },
};
