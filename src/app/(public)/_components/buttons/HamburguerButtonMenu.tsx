import React, { useContext } from "react";
import { GlobalContext } from "@/providers/GlobalContextProvider";
import { Button } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
export default function HamburguerButtonMenu() {
  const { isHamburguerButtonActive, setIsHamburguerButtonActive } =
    useContext(GlobalContext);
  return (
    <div className="md:hidden z-50">
      {!isHamburguerButtonActive ? (
        <Button
          variant={"ghost"}
          onClick={() => {
            setIsHamburguerButtonActive(true);
          }}
          className="px-2"
        >
          <GiHamburgerMenu size={32} />
        </Button>
      ) : (
        <Button
          variant={"ghost"}
          onClick={() => {
            setIsHamburguerButtonActive(false);
          }}
          className="px-2"
        >
          <MdClose size={32} />
        </Button>
      )}
    </div>
  );
}
