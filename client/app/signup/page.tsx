"use client";
import CustomButton from "@/components/CustomButton/CustomButton";
import CustomInput from "@/components/CustomInput/CustomInput";
import Image from "next/image";
import React from "react";
import Link from "next/link";

type FormProps = {
  username: string;
  email: string;
  country: string;
  password: string;
  confirmPassword: string;
};

const Signup = () => {
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
    <div className="lg:bg-white lg:grid lg:grid-cols-7 gap-20 h-screen w-screen overflow-hidden loginOuterDiv sm:p-0 p-10">
      <section className="col-span-4 lg:flex hidden items-center">
        <Image
          src={"/assets/authPageImg.svg"}
          className="object-cover w-full h-full"
          alt="Auth Page Image"
          width={805}
          height={780}
        />
      </section>
      <section className="lg:col-span-3 lg:flex flex-col justify-center lg:items-start items-center lg:bg-transparent bg-white lg:rounded-none rounded-lg lg:p-0 p-10 sm:w-fit w-full">
        <div className="lg:block flex items-center justify-center">
          <Image
            src="/assets/logo/logo1.png"
            alt="Logo"
            width={150}
            height={100}
          />
        </div>
        <form action="" className="sm:w-[370px] mt-5 space-y-10 lg:pr-[20px]">
          <div className="lg:text-start text-center">
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
            filled={true}
            width="full"
            size="md"
          />
        </form>
        <div className="sm:w-[370px] w-full mt-5">
          <p className="text-center">
            Don't have an account?{" "}
            <Link href="/login" className="text-orange-400">
              Login
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Signup;
