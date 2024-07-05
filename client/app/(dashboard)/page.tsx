"use client";
import { useAppDispatch } from "@/lib/store/hooks";
import { add } from "@/lib/store/features/cartSlice/cartSlice";

export default function Home() {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(add());
  };

  return (
    <main className="flex flex-col items-center">
      Home Page <br />
      <button className="bg-red-300 p-4" onClick={handleAddToCart}>
        Add To Cart
      </button>
    </main>
  );
}
