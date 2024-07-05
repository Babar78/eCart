"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CustomSearchbar from "../CustomSearchbar/CustomSearchbar";
import logo from "@/public/assets/logo/logo1.png";
import Link from "next/link";
import Image from "next/image";

import CartButton from "../CartButton/CartButton";
import UserProfile from "../UserProfile/UserProfile";
const Navbar = () => {
  return (
    <nav className="navbar">
      <AppBar
        position="static"
        sx={{ backgroundColor: "#ffffff", padding: "0px" }}
      >
        <Toolbar className="max-w-[1240px] mx-auto w-full space-x-10 p-0!">
          <div className="grow">
            <Image src={logo} alt="" className="max-w-[150px]" />
          </div>
          <Box
            className="flex gap-5"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
          >
            <Link
              href="/"
              className="text-[#1a1a1a] hover:text-orange-400 uppercase text-nowrap"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[#1a1a1a] hover:text-orange-400 uppercase text-nowrap"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-[#1a1a1a] hover:text-orange-400 uppercase text-nowrap"
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className="text-[#1a1a1a] hover:text-orange-400 uppercase text-nowrap"
            >
              Track Order
            </Link>
          </Box>
          <CustomSearchbar />
          <CartButton />
          <UserProfile />
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Navbar;
