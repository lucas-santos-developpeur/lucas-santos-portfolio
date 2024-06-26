"use client";
import { useCallback, useContext, useEffect } from "react";
import { GlobalContext } from "@/providers/GlobalContextProvider";
import HamburguerButtonMenu from "../buttons/HamburguerButtonMenu";
import Navigation from "./Navigation";
import { ToggleThemeButton } from "../buttons/ToggleThemeButton";

const Header: React.FC = () => {
  const {
    isTransparentHeader,
    setIsTransparentHeader,
    isHamburguerButtonActive,
  } = useContext(GlobalContext);
  // Função que seta o isTranparentHeader caso a tela tenha sido scrollada
  const toggleScroll = useCallback(() => {
    const body = document.querySelector("body");

    isHamburguerButtonActive
      ? body?.classList.toggle("y-scroll-hidden")
      : body?.classList.toggle("y-scroll-hidden");
  }, [isHamburguerButtonActive]);

  useEffect(toggleScroll, [isHamburguerButtonActive]);
  const handlerPageScroll = useCallback(() => {
    let scrollPosition = window.scrollY;

    if (scrollPosition >= 20) {
      setIsTransparentHeader(true);
    } else {
      setIsTransparentHeader(false);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handlerPageScroll);
  }, [isTransparentHeader]);

  return (
    <header
      className={`${
        !isTransparentHeader ? "bg-transparent" : "bg-gray-100 dark:bg-gray-950"
      } fixed top-0 w-full z-50`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-950 dark:text-gray-50">
          Logo
        </div>
        <Navigation />
        <HamburguerButtonMenu />
        <ToggleThemeButton />
      </div>
    </header>
  );
};

export default Header;
