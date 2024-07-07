"use client";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store/store";
import { fillSavedData } from "@/lib/store/features/authSlice/authSlice";
import Cookies from "js-cookie";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();

    // Fill the saved data from cookies if it exists\
    // if (Cookies.get("userData")) {
    //   storeRef.current.dispatch(fillSavedData(Cookies.get("userData")));
    // }
  }
  // Using use effect to avoid server and client side rendering issues
  useEffect(() => {
    const userData = Cookies.get("userData");
    if (userData) {
      storeRef.current?.dispatch(fillSavedData(userData));
    }
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
