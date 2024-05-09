import Button from "./components/Button";

export default function App() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-tr from-red-400 to-blue-400 gap-4">
      {["xs", "sm", "md", "lg"].map((size) => (
        <div className="flex items-center gap-2" key={size}>
          <Button
            onClick={() => alert("Hello, world!")}
            size={size as "xs" | "sm" | "md" | "lg"}
            loading
          >
            Click me!
          </Button>
          <Button
            onClick={() => alert("Hello, world!")}
            size={size as "xs" | "sm" | "md" | "lg"}
          >
            Click me!
          </Button>
          <Button
            onClick={() => alert("Hello, world!")}
            size={size as "xs" | "sm" | "md" | "lg"}
            loading
            ghost
          >
            Click me!
          </Button>
          <Button
            onClick={() => alert("Hello, world!")}
            size={size as "xs" | "sm" | "md" | "lg"}
            ghost
          >
            Click me!
          </Button>
        </div>
      ))}
    </main>
  );
}
