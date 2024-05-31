import { List } from "@/app";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "List/List",
  component: List,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    marker: {
      control: {
        type: "select",
        options: ["decimal", "disc"],
      },
    },
  },
  args: {},
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const unordered: Story = {
  args: {
    marker: "disc",
    children: (
      <>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </>
    ),
  },
};

export const ordered: Story = {
  args: {
    marker: "decimal",
    children: (
      <>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </>
    ),
  },
};
