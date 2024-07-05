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
    <Button
      type={type}
      onClick={onClick}
      variant={variant ? variant : "contained"}
      disabled={disabled}
      id={id}
      endIcon={icon ? <IconDownload size={14} /> : null}
      fullWidth={width === "full" ? true : false}
      size={size}
      className={`${
        variant === "outlined"
          ? "border-[1px] border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white"
          : "bg-orange-400 text-white hover:bg-orange-600 hover:text-white"
      } capitalize hover:border-orange-600`}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
