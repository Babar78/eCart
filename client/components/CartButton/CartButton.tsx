"use client";
import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useAppSelector } from "@/lib/store/hooks";

const CartButton = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      border: `2px solid #ffffff`,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "20px",
      height: "20px",
      padding: 0,
    },
  }));

  const count = useAppSelector((state) => state.cart.value);
  return (
    <StyledBadge badgeContent={count} color="error" className="text-sm">
      <LocalMallIcon className="text-[#1a1a1a] cursor-pointer text-2xl" />
    </StyledBadge>
  );
};

export default CartButton;
