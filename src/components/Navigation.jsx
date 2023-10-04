import { motion } from "framer-motion";
import { useState } from "react";
import { Navlinks } from "../constants/Navlinks";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuHandler = () => {
    setOpenMenu((prevState) => !prevState);
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <>
      <nav className={`py-4 hidden lg:block`}>
        <ul className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {Navlinks.map((link) => (
            <li key={link.title}>
              <a
                href={link.path}
                className="font-medium text-white p-4 border-solid border-b-2 border-transparent hover:border-white"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="block  lg:hidden z-10">
        <button
          type="button"
          aria-label="Menu"
          className="menu_btn fixed top-0 right-[10px] z-[3]"
          onClick={openMenuHandler}
        >
          <span className={`burger_btn ${openMenu && "rotate"}`} />
        </button>

        <motion.ul
          initial="closed"
          animate={openMenu ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.3 }}
          className="fixed flex flex-col items-center justify-center gap-[50px] w-full h-full top-0 right-0 left-0 bottom-0 bg-primary-blue"
        >
          {Navlinks.map((link) => (
            <li key={link.title}>
              <a
                href={link.path}
                className="font-medium w-full text-xl uppercase text-white p-4 border-solid border-b-2 border-transparent hover:border-white"
                onClick={openMenuHandler}
              >
                {link.title}
              </a>
            </li>
          ))}
        </motion.ul>
      </nav>
    </>
  );
};

export default Navigation;
