import { InputHTMLAttributes } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import Input from "@/app/components/ui/input";

interface IInputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<FieldValues>;
  name: Path<FieldValues>;
}

export default function CustomInput<T extends FieldValues>(
  props: IInputProps<T>,
) {
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field }) => <Input {...props} {...field} />}
    />
  );
}
