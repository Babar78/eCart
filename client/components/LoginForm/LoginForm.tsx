"use client";
import React, { useEffect } from "react";
import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInput/CustomInput";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { login } from "@/lib/store/features/authSlice/authSlice";
import { useRouter } from "next/navigation";

type FormProps = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e: string, field: keyof FormProps) => {
    setData({ ...data, [field]: e });
  };

  // Handle form submit
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(data));
  };

  const router = useRouter();

  const { username, isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    console.log("Authenticated", isAuthenticated);
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated]);

  return (
    <form
      className="sm:w-[370px] w-full mt-5 space-y-10 lg:pr-[20px]"
      onSubmit={handleFormSubmit}
    >
      <div className="lg:text-start text-center text-[#1a1a1a]">
        <h5 className="font-semibold text-[36px]">Login to eCart</h5>
        <span>Enter Your Details Below</span>
      </div>
      <CustomInput
        id="email"
        name="email"
        label="Email"
        variant="standard"
        value={data.email}
        type="email"
        inputFieldType="textField"
        onChange={(newValue) => handleChange(newValue, "email")}
      />
      <div className="w-full flex flex-col items-end gap-2">
        <CustomInput
          id="password"
          name="password"
          label="Password"
          variant="standard"
          value={data.password}
          type="password"
          inputFieldType="passwordField"
          onChange={(newValue) => handleChange(newValue, "password")}
        />
        <button className="text-gray-400 hover:text-orange-400 text-[14px]">
          Forget Password?
        </button>
      </div>
      <CustomButton
        id="login"
        label="Login"
        type="submit"
        width="full"
        size="medium"
      />
    </form>
  );
};

export default LoginForm;
