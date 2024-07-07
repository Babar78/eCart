"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store/store";

import { PersistGate } from "redux-persist/integration/react";
import { persistedStore } from "@/lib/store/store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }
  const persistor = persistedStore();

  return (
    <Provider store={storeRef.current}>
      <PersistGate persistor={persistor} loading={<div>Loading</div>}>
        {children}
      </PersistGate>
    </Provider>
  );
}
