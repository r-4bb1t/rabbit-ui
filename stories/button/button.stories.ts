import { Button } from "@/app";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Button/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    loading: {
      control: {
        type: "boolean",
      },
    },
    sz: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg"],
      },
    },
    ghost: {
      control: {
        type: "boolean",
      },
    },
    icon: {
      control: {
        type: "select",
        options: [
          "alert-circle",
          "alert-triangle",
          "check",
          "info",
          "loader",
          "x",
        ],
      },
    },
    square: {
      control: {
        type: "boolean",
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const button: Story = {
  args: {
    children: "Button",
  },
};
