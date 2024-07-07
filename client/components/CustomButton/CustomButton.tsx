import React from "react";
import Button from "@mui/material/Button";
import { IconDownload } from "@tabler/icons-react";

interface CustomButtonProps {
  id: string;
  label: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  variant?: "outlined" | "contained";
  icon?: boolean;
  width?: string;
  size?: "small" | "medium" | "large";
}

const CustomButton = ({
  id,
  label,
  type,
  onClick,
  disabled,
  variant,
  icon,
  width,
  size,
}: CustomButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      id={id}
      className={`${
        variant === "outlined"
          ? "border-[1px] border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white"
          : "bg-orange-400 text-white hover:bg-orange-600 hover:text-white"
      } capitalize hover:border-orange-600 ${
        size === "large"
          ? "px-[22px] py-[8px]"
          : size === "medium"
          ? "px-[16px] py-[6px]"
          : "px-[10px] py-[4px]"
      } ${width === "full" ? "w-full" : "w-fit"} rounded-md`}
    >
      {label}
      {icon && <IconDownload size={20} />}
    </button>
  );
};

export default CustomButton;
