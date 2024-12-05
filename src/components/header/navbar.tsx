import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { GrFormNext } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";
import { GoProjectRoadmap } from "react-icons/go";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { FaLinkedin, FaInstagram, FaFacebookSquare } from "react-icons/fa";

interface NavbarProps {
  isOpen: boolean;
  toggleSlider: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, toggleSlider }) => {
  const navbarRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
    toggleSlider();
  };

  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        toggleSlider();
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isOpen, toggleSlider]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        if (isOpen) {
          toggleSlider();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleSlider]);

  return (
    <div className="fixed top-0 left-0 h-full flex z-[1] navbar-container">
      {!isOpen && (
        <div
          onClick={toggleSlider}
          className={`flex items-center justify-center h-full p-2 cursor-pointer bg-transparent shadow-lg shadow-gray-400 border-r border-gray-300 text-gray-400`}
        >
          <GrFormNext
            size={30}
            className={`transition-transform transform ${
              isOpen ? "rotate-180 flex " : "rotate-0 flex "
            }`}
          />
        </div>
      )}

      <motion.div
        ref={navbarRef}
        initial={{ width: isOpen ? 256 : 0 }}
        animate={{ width: isOpen ? 256 : 0 }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 2,
        }}
        className={`overflow-hidden bg-pink-100 text-gray-600 shadow-lg shadow-gray-400 border-r border-gray-300 flex flex-col h-full`}
      >
        <div className="p-7 flex-1">
          <div className="mb-5 flex items-center flex-col justify-center">
            <img
              src="/public/images/janu.jpg"
              alt="Janaki Rai"
              className="w-[100px] h-[100px] rounded-full object-cover mb-2"
            />
            <h1 className="text-lg font-bold mb-3 text-gray-600">Janaki Rai</h1>
            <div className="flex items-center text-[20px] gap-3 text-gray-500 cursor-pointer">
              <Link to="https://www.instagram.com/zanu_rae/">
                <FaInstagram />
              </Link>
              <Link to="https://www.facebook.com/zanu.rai.37">
                <FaFacebookSquare />
              </Link>
              <Link to="https://www.linkedin.com/in/janaki-rai-637b50270/">
                <FaLinkedin />
              </Link>
            </div>
          </div>

          <nav className="flex flex-col space-y-4 cursor-pointer">
            <div
              className="cursor-pointer hover:text-gray-500 flex items-center gap-3"
              onClick={() => scrollToSection("about-section")}
            >
              <AiOutlineIssuesClose className="text-[25px] text-gray-500" />
              About
            </div>
            <div
              className="cursor-pointer hover:text-gray-500 flex items-center gap-3"
              onClick={() => scrollToSection("project-section")}
            >
              <GoProjectRoadmap className="text-[25px] text-gray-500" />
              Project
            </div>
            <div
              className="cursor-pointer hover:text-gray-500 flex items-center gap-3"
              onClick={() => scrollToSection("contact-section")}
            >
              <IoMdContact className="text-[25px] text-gray-500" />
              Contact
            </div>
          </nav>
          {isOpen && (
            <div
              onClick={toggleSlider}
              className="flex items-center justify-end cursor-pointer"
            >
              <GrFormNext
                size={30}
                className={`transition-transform transform text-gray-400 ${
                  isOpen ? "rotate-180 flex " : "rotate-0 flex "
                }`}
              />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
