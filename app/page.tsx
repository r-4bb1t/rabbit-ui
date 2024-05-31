import Button from "./components/Button";
import Input from "./components/Form/Input";
import Pagination from "./components/Pagination";
import { useAlert } from "./store/contextStore";

export default function App() {
  const { addToast, openModal } = useAlert();

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
    });
  };

  return (
    <main className="w-full pt-24 flex flex-col items-center justify-center p-8 gap-4">
      <Pagination current={1} total={10} prev={() => {}} next={() => {}} />
      {["xs", "sm", "md", "lg"].map((sz) => (
        <div className="flex items-center gap-2" key={sz}>
          <Button
            onClick={handleClick}
            sz={sz as "xs" | "sm" | "md" | "lg"}
            loading
          >
            Toast
          </Button>
          <Button onClick={handleClick} sz={sz as "xs" | "sm" | "md" | "lg"}>
            Toast
          </Button>
          <Button
            onClick={handleClick}
            sz={sz as "xs" | "sm" | "md" | "lg"}
            loading
            ghost
          >
            Modal
          </Button>
          <Button
            onClick={openTestModal}
            sz={sz as "xs" | "sm" | "md" | "lg"}
            ghost
          >
            Modal
          </Button>
        </div>
      ))}
      <div className="flex flex-col w-full gap-2 max-w-sm">
        <Input
          type="text"
          label="name"
          error={[
            {
              err: "This is an error message",
              ok: "ok",
              status: true,
            },
            {
              err: "This is an error message",
              ok: "ok",
              status: false,
            },
          ]}
          required
        />
        <Input type="number" label="age" />
        <Input type="date" label="date" />

        <Input
          type="text"
          label="xs"
          error={[
            {
              err: "This is an error message",
              ok: "ok",
              status: true,
            },
            {
              err: "This is an error message",
              ok: "ok",
              status: false,
            },
          ]}
          sz="xs"
          required
        />
        <Input
          type="text"
          label="sm"
          error={[
            {
              err: "This is an error message",
              ok: "ok",
              status: true,
            },
            {
              err: "This is an error message",
              ok: "ok",
              status: false,
            },
          ]}
          sz="sm"
          placeholder="asdf"
        />
        <Input
          type="text"
          label="md"
          error={[
            {
              err: "This is an error message",
              ok: "ok",
              status: true,
            },
            {
              err: "This is an error message",
              ok: "ok",
              status: false,
            },
          ]}
          sz="md"
        />
        <Input
          type="text"
          label="lg"
          error={[
            {
              err: "This is an error message",
              ok: "ok",
              status: true,
            },
            {
              err: "This is an error message",
              ok: "ok",
              status: false,
            },
          ]}
          sz="lg"
        />
      </div>
    </main>
  );
}
