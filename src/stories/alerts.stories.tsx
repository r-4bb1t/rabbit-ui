import { Button, Layout } from "..";

import { useContextStore } from "@/store/contextStore";
import type { Story } from "@ladle/react";

export const Toast: Story = () => {
  const { addToast } = useContextStore();

  return (
    <Layout>
      <div className="flex flex-col gap-4">
        {["info", "success", "warning", "error"].map((type) => (
          <Button
            onClick={() =>
              addToast({
                text: "This is a test toast!",
                type: type as "info" | "success" | "warning" | "error",
              })
            }
          >
            Open {type} toast
          </Button>
        ))}
      </div>
    </Layout>
  );
};

export const Modal: Story = () => {
  const { openModal } = useContextStore();

  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <Button
          onClick={() =>
            openModal({
              children: (
                <div className="flex flex-col w-full gap-4">
                  <img
                    src="https://img.freepik.com/free-photo/fresh-autumn-leaves-reveal-vibrant-organic-pattern-generated-by-ai_188544-15037.jpg?sz=626&ext=jpg&ga=GA1.1.2008272138.1715558400&semt=ais_user"
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  This is a test modal
                  <br />
                  This is a test modal
                  <br />
                  This is a test modal
                  <br />
                  This is a test modal
                  <br />
                  This is a test modal
                  <br />
                  This is a test modal
                  <br />
                  This is a test modal
                  <br />
                  This is a test modal
                  <br />
                  This is a test modal
                  <br />
                  This is a test modal
                  <br />
                  This is a test modal
                  <br />
                  This is a test modal
                </div>
              ),
              submitButtonText: "확인",
              submitButtonAction: () => {},
              cancelButtonText: "취소",
              cancelButtonAction: () => {},
            })
          }
        >
          Open Modal
        </Button>
      </div>
    </Layout>
  );
};
