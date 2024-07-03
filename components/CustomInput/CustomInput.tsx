import React from "react";

interface CustomInputProps {
  id: string;
  label: string;
  value: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({
  id,
  label,
  value,
  type,
  placeholder,
  onChange,
}: CustomInputProps) => {
  return <div>CustomInput</div>;
};

export default CustomInput;
