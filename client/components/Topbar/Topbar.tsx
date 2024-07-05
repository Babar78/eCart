import React from "react";
import Link from "next/link";
import { IconTruckDelivery } from "@tabler/icons-react";

const Topbar = () => {
  return (
    <div className="bg-[#1F2937] w-screen py-[10px]">
      <div className="text-white max-w-[1240px] mx-auto relative text-[14px]">
        <p className="text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <Link href="#" className="font-bold underline">
            Shop Now
          </Link>
        </p>
        <div className="flex gap-[10px] absolute right-0 top-0">
          <IconTruckDelivery className="text-orange-400" />
          <Link href="#" className="hover:underline">
            Track Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
