"use client";
import CustomButton from "@/components/CustomButton/CustomButton";
import CustomInput from "@/components/CustomInput/CustomInput";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Signup = () => {
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
            <h5 className="font-semibold text-[36px]">Create an Account</h5>
            <span>Enter Your Details Below</span>
          </div>
          <CustomInput
            id="username"
            name="username"
            label="Username"
            variant="standard"
            value=""
            type="text"
            inputFieldType="textField"
            onChange={() => {}}
          />
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
          <CustomInput
            id="confirm-password"
            name="confirm-password"
            label="Confirm Password"
            variant="standard"
            value=""
            type="password"
            inputFieldType="passwordField"
            onChange={() => {}}
          />
          <CustomInput
            id="country"
            name="country"
            label="Choose a country"
            variant="standard"
            type="text"
            inputFieldType="selectCountry"
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
        <div className="w-[370px] mt-5">
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
