"use client";
import { useContext, useEffect } from "react";
import { GlobalContext } from "@/providers/GlobalContextProvider";

const Header: React.FC = () => {
  const { isTransparentHeader, setIsTransparentHeader } =
    useContext(GlobalContext);
  // Função que seta o isTranparentHeader caso a tela tenha sido scrollada
  const handlerPageScroll = () => {
    let scrollPosition = window.scrollY;

    if (scrollPosition >= 20) {
      setIsTransparentHeader(true);
    } else {
      setIsTransparentHeader(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handlerPageScroll);
  }, [isTransparentHeader]);

  return (
    <header
      className={`${
        !isTransparentHeader ? "bg-transparent" : "bg-blue-500"
      } fixed top-0 w-full shadow z-50`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Logo
        </div>
        <nav className="flex space-x-4">
          <a
            href="#hero"
            className="text-gray-800 dark:text-gray-200 cursor-pointer"
          >
            Home
          </a>
          <a
            href="#skills"
            className="text-gray-800 dark:text-gray-200 cursor-pointer"
          >
            Skills
          </a>
          <a
            href="#portfolio"
            className="text-gray-800 dark:text-gray-200 cursor-pointer"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="text-gray-800 dark:text-gray-200 cursor-pointer"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
