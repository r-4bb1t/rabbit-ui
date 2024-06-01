import { Input } from "@/app";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Form/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["text", "password", "email", "number", "tel", "url"],
      },
    },
    disabled: {
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
    fullWidth: {
      control: {
        type: "boolean",
      },
    },
    /* error: {
      err: {
        type: "string",
      },
      ok: {
        type: "string",
      },
      status: {
        type: "boolean",
      },
    }, */
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const text: Story = {
  args: {
    placeholder: "placeholder",
    fullWidth: true,
  },
};

export const number: Story = {
  args: {
    type: "number",
    placeholder: "1",
    fullWidth: true,
  },
};
