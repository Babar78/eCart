"use client";
import CustomButton from "@/components/CustomButton/CustomButton";
import CustomInput from "@/components/CustomInput/CustomInput";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const LoginPage = () => {
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
        <form
          action=""
          className="sm:w-[370px] w-full mt-5 space-y-10 lg:pr-[20px]"
        >
          <div className="lg:text-start text-center">
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
        <div className="lg:w-[370px] w-full mt-5">
          <p className="text-center">
            Don't have an account?{" "}
            <Link href="/signup" className="text-orange-400">
              Sign Up
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
