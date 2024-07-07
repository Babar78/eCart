"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { add } from "@/lib/store/features/cartSlice/cartSlice";
import { useRouter } from "next/navigation";

export default function Home() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleAddToCart = () => {
    dispatch(add());
  };
  
  const { username, isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  });


  return (
    <main className="flex flex-col items-center">
      Home Page <br />
      <button className="bg-red-300 p-4" onClick={handleAddToCart}>
        Add To Cart
      </button>
      <div>{isAuthenticated}</div>
    </main>
  );
}
