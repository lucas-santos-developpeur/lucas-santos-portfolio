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
  isHamburguerButtonActive: boolean;
  setIsHamburguerButtonActive: Dispatch<SetStateAction<boolean>>;
}

const defaultValue: IGlobalContextValues = {
  isTransparentHeader: false,
  setIsTransparentHeader: () => {},
  isHamburguerButtonActive: false,
  setIsHamburguerButtonActive: () => {},
};

export const GlobalContext = createContext<IGlobalContextValues>(defaultValue);

export default function GlobalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isTransparentHeader, setIsTransparentHeader] = useState(false);
  const [isHamburguerButtonActive, setIsHamburguerButtonActive] =
    useState(false);
  return (
    <GlobalContext.Provider
      value={{
        isTransparentHeader,
        setIsTransparentHeader,
        isHamburguerButtonActive,
        setIsHamburguerButtonActive,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
