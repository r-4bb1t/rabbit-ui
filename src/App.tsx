import Button from "./components/Button";
import Layout from "./components/Layout";
import Header from "./components/Layout/Header";
import { useContextStore } from "./store/contextStore";

export default function App() {
  const { addToast, openModal } = useContextStore();

  const handleClick = () => {
    addToast({
      text: "This is a test toast!",
      type: ["info", "success", "warning", "error"][
        Math.floor(Math.random() * 4)
      ] as "info" | "success" | "warning" | "error",
    });
  };

  const openTestModal = () => {
    openModal({
      children: (
        <div className="flex flex-col w-full gap-4">
          <img
            src="https://img.freepik.com/free-photo/fresh-autumn-leaves-reveal-vibrant-organic-pattern-generated-by-ai_188544-15037.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1715558400&semt=ais_user"
            className="w-full h-96 object-cover rounded-lg"
          />
          This is a test modal
        </div>
      ),
      submitButtonText: "확인",
      submitButtonAction: () => {},
      cancelButtonText: "취소",
      cancelButtonAction: () => {},
    });
  };

  return (
    <Layout mobileFirst>
      <Header mobileFirst></Header>
      <main className="w-full pt-24 flex flex-col items-center justify-center p-8 bg-gradient-to-tr from-red-400 to-blue-400 gap-4">
        {["xs", "sm", "md", "lg"].map((size) => (
          <div className="flex items-center gap-2" key={size}>
            <Button
              onClick={handleClick}
              size={size as "xs" | "sm" | "md" | "lg"}
              loading
            >
              Click me!
            </Button>
            <Button
              onClick={handleClick}
              size={size as "xs" | "sm" | "md" | "lg"}
            >
              Add Toast
            </Button>
            <Button
              onClick={handleClick}
              size={size as "xs" | "sm" | "md" | "lg"}
              loading
              ghost
            >
              Click me!
            </Button>
            <Button
              onClick={openTestModal}
              size={size as "xs" | "sm" | "md" | "lg"}
              ghost
            >
              Open Modal
            </Button>
          </div>
        ))}
        <div className="h-[1000px]" />
      </main>
    </Layout>
  );
}
