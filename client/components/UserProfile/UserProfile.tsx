"use client";
import React from "react";
import Link from "next/link";
import CustomButton from "../CustomButton/CustomButton";
import { Menu, rem, Avatar } from "@mantine/core";
import {
  IconSettings,
  IconMessageCircle,
  IconLogout,
} from "@tabler/icons-react";
import { useAppSelector } from "@/lib/store/hooks";

import { useAppDispatch } from "@/lib/store/hooks";
import { logout } from "@/lib/store/features/authSlice/authSlice";

const UserProfile = () => {
  const loggedIn = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return !loggedIn ? (
    <Link href={"/login"}>
      <CustomButton
        id="login"
        label="Login"
        type="button"
        size="medium"
        variant="outlined"
      />
    </Link>
  ) : (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
          alt="userProfile"
        />
      </Menu.Target>

      <Menu.Dropdown className="">
        <Menu.Label>Application</Menu.Label>
        <Menu.Item
          leftSection={
            <IconSettings style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Settings
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconMessageCircle style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Messages
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          color="red"
          leftSection={
            <IconLogout style={{ width: rem(14), height: rem(14) }} />
          }
          onClick={handleLogout}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserProfile;
