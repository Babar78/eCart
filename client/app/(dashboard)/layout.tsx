"use client";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import { useEffect } from "react";
import { useAppSelector } from "@/lib/store/hooks";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="fixed">
        <Topbar />
        <Navbar />
      </div>
      <div className="pt-[112.7px]">{children}</div>
    </>
  );
}
