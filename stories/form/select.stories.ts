import { Select } from "@/app";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Form/Select",
  component: Select,
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
    disabled: {
      control: {
        type: "boolean",
      },
    },
    /* error: {
      type:""
    },
    options: {
      control: {
      },
    }, */
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const select: Story = {
  args: {
    value: "1",
    options: [
      {
        value: "1",
        label: "Option 1",
      },
      {
        value: "2",
        label: "Option 2",
      },
      {
        value: "3",
        label: "Option 3",
      },
      {
        value: "4",
        label: "Option 4",
      },
      {
        value: "5",
        label: "Option 5",
      },
      {
        value: "6",
        label: "Option 6",
      },
      {
        value: "7",
        label: "Option 7",
      },
    ],
  },
};
