"use client";
import React from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";

type FormProps = {
  username: string;
  email: string;
  country: string;
  password: string;
  confirmPassword: string;
};

const SignupForm = () => {
  const [data, setData] = React.useState({
    username: "",
    email: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: string, field: keyof FormProps) => {
    setData({ ...data, [field]: e });
  };

  return (
    <form className="sm:w-[370px] mt-5 space-y-10 lg:pr-[20px]">
      <div className="lg:text-start text-center text-[#1a1a1a]">
        <h5 className="font-semibold text-[36px]">Create an Account</h5>
        <span>Enter Your Details Below</span>
      </div>
      <CustomInput
        id="username"
        name="username"
        label="Username"
        variant="standard"
        value={data.username}
        type="text"
        inputFieldType="textField"
        onChange={(newValue) => handleChange(newValue, "username")}
        required={true}
      />
      <CustomInput
        id="email"
        name="email"
        label="Email"
        variant="standard"
        value={data.email}
        type="email"
        inputFieldType="textField"
        onChange={(newValue) => handleChange(newValue, "email")}
        required={true}
      />
      <CustomInput
        id="password"
        name="password"
        label="Password"
        variant="standard"
        value={data.password}
        type="password"
        inputFieldType="passwordField"
        onChange={(newValue) => handleChange(newValue, "password")}
        required={true}
      />
      <CustomInput
        id="confirm-password"
        name="confirm-password"
        label="Confirm Password"
        variant="standard"
        value={data.confirmPassword}
        type="password"
        inputFieldType="passwordField"
        onChange={(newValue) => handleChange(newValue, "confirmPassword")}
        required={true}
      />
      <CustomInput
        id="country"
        name="country"
        label="Choose a country"
        value={data.country}
        variant="standard"
        type="text"
        inputFieldType="selectCountry"
        onChange={(newValue) => handleChange(newValue, "country")}
        required={true}
      />
      <CustomButton
        id="Signup"
        label="Create Account"
        type="submit"
        width="full"
        size="medium"
      />
    </form>
  );
};

export default SignupForm;
