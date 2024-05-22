import Button from "./components/Button";
import Input from "./components/Form/Input";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

interface Person {
  name: string;
  address: string;
  age: number;
}

const schema = z.object({
  name: z.string().min(1, { message: "이름은 필수값입니다." }),
  address: z.string().min(1, { message: "주소는 필수값입니다." }),
  age: z
    .number({
      invalid_type_error: "나이는 필수값입니다.",
    })
    .min(1, { message: "나이는 1살부터 입력이 가능합니다." }),
});

export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Person>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      address: "",
      age: 0,
    },
  });

  return (
    <form
      onSubmit={handleSubmit((e) => console.log(e))}
      className="flex flex-col gap-2 max-w-sm w-full"
    >
      <Input
        type="text"
        label="name"
        register={register}
        required
        error={errors.name}
      />

      <Input
        type="text"
        label="address"
        register={register}
        required
        error={errors.address}
      />

      <Input
        type="number"
        label="age"
        register={register}
        required
        error={errors.age}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
}
