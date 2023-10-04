import { useState, useEffect } from "react";

import Navigation from "./Navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const screenHeight = window.innerHeight;
    const scrollPosition = window.scrollY || window.pageYOffset;
    setIsScrolled(scrollPosition > screenHeight * 0.95);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex  ${
        isScrolled ? "header_fixed bg-secondary-blue" : "absolute"
      } top-0 left-0 justify-center w-full z-10  `}
    >
      <div className="container flex justify-between items-center px-5 ">
        <a
          href="#"
          className=" flex items-center cursor-pointer  py-4 md:mb-0 text-3xl font-bold text-white"
        >
          CleanSolution
        </a>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
