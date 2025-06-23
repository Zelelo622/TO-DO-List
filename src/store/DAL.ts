import { createContext, useContext } from "react";
import { CommonStore } from "./store";

export const createStore = (): CommonStore => new CommonStore();

export const StoreContext = createContext<CommonStore | null>(null);

export const useCommonStore = (): CommonStore => {
  const stores = useContext(StoreContext);

  if (!stores) {
    throw new Error(
      "useCommonStore() allow use inside <StoreContext.provider /> only"
    );
  }

  return stores;
};
