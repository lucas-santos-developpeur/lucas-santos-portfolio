"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  ReactNode,
} from "react";

interface IGlobalContextValues {
  isTransparentHeader: boolean;
  setIsTransparentHeader: Dispatch<SetStateAction<boolean>>;
}

const defaultValue: IGlobalContextValues = {
  isTransparentHeader: false,
  setIsTransparentHeader: () => {},
};

export const GlobalContext = createContext<IGlobalContextValues>(defaultValue);

export default function GlobalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isTransparentHeader, setIsTransparentHeader] = useState(false);
  return (
    <GlobalContext.Provider
      value={{ isTransparentHeader, setIsTransparentHeader }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
