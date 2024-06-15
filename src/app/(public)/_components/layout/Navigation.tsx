import { Button } from "@/components/ui/button";
import { GlobalContext } from "@/providers/GlobalContextProvider";
import React, { useContext } from "react";

type Props = {};

const NavigationLinkList = [
  { label: "início", path: "#hero" },
  { label: "sobre", path: "#about" },
  { label: "habilidades", path: "#skills" },
  { label: "certificações", path: "#courses" },
  { label: "portfólio", path: "#portfolio" },
  { label: "contatos", path: "#contact" },
];

export default function Navigation({}: Props) {
  const { isHamburguerButtonActive } = useContext(GlobalContext);

  return (
    <nav
      className={`fixed ${
        !isHamburguerButtonActive ? "left-full" : "left-0"
      } gap-y-8 flex flex-col justify-center lg:flex-row lg:pt-0 z-40 bg-gray-300 bottom-0 top-0 w-full min-h-screen lg:static lg:bg-transparent lg:w-fit lg:min-h-fit lg:flex lg:space-x-4`}
    >
      <NavigationLinks />
    </nav>
  );
}

const NavigationLinks = () => {
  const { setIsHamburguerButtonActive } = useContext(GlobalContext);
  return (
    <>
      {NavigationLinkList.map((link, index) => (
        <Button
          key={index}
          onClick={() => setIsHamburguerButtonActive(false)}
          className="block lg:flex rounded-none ml-0 first:mt-8 lg:first:mt-0 bg-transparent"
        >
          <a
            href={link.path}
            className="text-gray-800 text-xl ml-0 lg:text-lg capitalize"
          >
            {link.label}
          </a>
        </Button>
      ))}
    </>
  );
};
