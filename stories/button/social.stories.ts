import { SocialButton } from "@/app";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Button/SocialButton",
  component: SocialButton,
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
    social: {
      control: {
        type: "select",
        options: ["kakao", "google"],
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof SocialButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const social: Story = {
  args: {
    social: "kakao",
    children: "로그인",
  },
};
