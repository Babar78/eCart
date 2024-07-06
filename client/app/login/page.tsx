import Image from "next/image";
import React from "react";
import Link from "next/link";
import LoginForm from "@/components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className="lg:bg-white lg:grid lg:grid-cols-7 gap-20 h-screen w-screen overflow-hidden loginOuterDiv sm:p-0 p-10">
      <section className="col-span-4 lg:flex hidden items-center">
        <Image
          src={"/authPageImg.svg"}
          className="object-cover w-full h-full"
          alt="Auth Page Image"
          width={805}
          height={780}
        />
      </section>
      <section className="lg:col-span-3 lg:flex flex-col justify-center lg:items-start items-center lg:bg-transparent bg-white lg:rounded-none rounded-lg lg:p-0 p-10 sm:w-fit w-full">
        <div className="lg:block flex items-center justify-center">
          <Image
            src="/logo/logo1.png"
            alt="Logo"
            width={150}
            height={100}
          />
        </div>
        <LoginForm />
        <div className="lg:w-[370px] w-full mt-5">
          <p className="text-center text-[#1a1a1a]">
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
