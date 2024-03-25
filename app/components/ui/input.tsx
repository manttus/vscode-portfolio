import React, { FC, InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<IInputProps> = function (props) {
  return <input {...props} />;
};

export default Input;
