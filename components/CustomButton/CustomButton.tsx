import React from "react";
import { Button } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";

interface CustomButtonProps {
  id: string;
  label: string;
  type: "button" | "submit" | "reset";
  onClick: () => void;
  disabled: boolean;
  filled: boolean;
  icon: boolean;
}

const CustomButton = ({
  id,
  label,
  type,
  onClick,
  disabled,
  filled,
  icon,
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
    >
      {label}
    </Button>
  );
};

export default CustomButton;
