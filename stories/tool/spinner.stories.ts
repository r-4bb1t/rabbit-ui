import { Spinner } from "@/app";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Tool/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    sz: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg"],
      },
    },
  },
  args: {},
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const spinner: Story = {
  args: {},
};
