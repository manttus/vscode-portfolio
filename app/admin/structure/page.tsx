"use client";

import { useForm } from "react-hook-form";

export default function Structure() {
  interface IStructure {
    filename: string;
    extension: string;
  }
  async function submitHandler(data: IStructure) {
    alert(JSON.stringify(data));
  }

  const { handleSubmit } = useForm<IStructure>({
    defaultValues: {
      filename: "",
      extension: "",
    },
  });

  return (
    <div className="flex h-screen w-full flex-col justify-center items-center">
      <form className="flex flex-col" onSubmit={handleSubmit(submitHandler)}>
        <button>Submit</button>
      </form>
    </div>
  );
}
