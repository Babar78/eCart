"use client";
import CustomButton from "@/components/CustomButton/CustomButton";
import CustomInput from "@/components/CustomInput/CustomInput";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="lg:bg-white lg:grid lg:grid-cols-7 gap-20 h-screen w-screen overflow-hidden loginOuterDiv">
      <section className="col-span-4 lg:flex hidden items-center">
        <Image
          src={"/assets/authPageImg.svg"}
          className="object-cover w-full h-full"
          alt="Auth Page Image"
          width={805}
          height={780}
        />
      </section>
      <section className="lg:col-span-3 lg:flex flex-col justify-center lg:items-start items-center lg:bg-transparent bg-white lg:rounded-none rounded-lg">
        <form action="" className="w-[370px] mt-10 space-y-10 pr-[20px]">
          <div>
            <h5 className="font-semibold text-[36px]">Login to eCart</h5>
            <span>Enter Your Details Below</span>
          </div>
          <CustomInput
            id="email"
            name="email"
            label="Email"
            variant="standard"
            value=""
            type="email"
            inputFieldType="textField"
            onChange={() => {}}
          />
          <div className="w-full flex flex-col items-end gap-2">
            <CustomInput
              id="password"
              name="password"
              label="Password"
              variant="standard"
              value=""
              type="password"
              inputFieldType="passwordField"
              onChange={() => {}}
            />
            <button className="text-gray-400 hover:text-orange-400 text-[14px]">
              Forget Password?
            </button>
          </div>
          <CustomButton
            id="login"
            label="Login"
            type="submit"
            filled={true}
            width="full"
            size="md"
          />
        </form>
        <div className="max-w-[370px] mt-5">
          <p className="text-center">
            Don't have an account?{" "}
            <Link href="" className="text-orange-400">
              Sign Up
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
