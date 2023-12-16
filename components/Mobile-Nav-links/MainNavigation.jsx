"use client";

import DropDownMenu from "./DropDownMenu";
import Toggle from "./Toggle";
import Logo from "./logo";
import { useEffect, useState } from "react";

export default function MainNavigation() {
  const [isFixed, setIsFixed] = useState(false);
  const [toggleNavigation, setToggleNavigation] = useState(false);

  const fixedScroll = () => {
    if (window.scrollY > 20) setIsFixed(true);
    else setIsFixed(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", fixedScroll);
  }, []);

  return (
    <header
      className={`flex ${
        isFixed && "border-b-[1px] border-gray-200"
      } justify-between items-center h-28 px-6 top-0 right-0 w-full z-20 bg-white 
        ${isFixed ? "fixed" : "relative"} 
      `}
    >
      <Logo />
      <Toggle
        setToggleNavigation={setToggleNavigation}
        toggleNavigation={toggleNavigation}
      />
      <DropDownMenu
        toggleNavigation={toggleNavigation}
        setToggleNavigation={setToggleNavigation}
      />
    </header>
  );
}
