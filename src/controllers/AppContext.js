import { useContext, createContext } from "react";

const setstore = '';

export const AppContext = createContext([

]);

export function useAppContext() {
  return useContext(AppContext);
}