import React from "react";
import { Button } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";

interface CustomButtonProps {
  id: string;
  label: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  filled?: boolean;
  icon?: boolean;
  width?: string;
  size?: string;
}

const CustomButton = ({
  id,
  label,
  type,
  onClick,
  disabled,
  filled,
  icon,
  width,
  size,
}: CustomButtonProps) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      variant={filled ? "filled" : "outline"}
      disabled={disabled}
      color="orange"
      id={id}
      rightSection={icon ? <IconDownload size={14} /> : null}
      fullWidth={width === "full" ? true : false}
      size={size}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
