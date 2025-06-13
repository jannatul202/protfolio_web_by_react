import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const menuIteam = [
  { path: "home", label: "Home" },
  { path: "services", label: "Services" },
  { path: "projects", label: "Projects" },
  { path: "reviews", label: "Reviews" },
  { path: "contact", label: "Contact" },
];

const Navmenu = ({ toggleHnadle, activeSection, onMenuItemClick }) => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 justify-center gap-6 font-semibold">
      {menuIteam.map((item, index) => (
        <li key={index} onClick={() => { toggleHnadle && toggleHnadle(); onMenuItemClick(item.path); }}>
          <span
            className={`cursor-pointer pb-2 ${
              activeSection === item.path
                ? "text-primary border-b-3 border-primary"
                : "hover:text-primary hover:border-b-3 transition-all ease-in-out duration-200"
            }`}
          >
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleHnadle = () => {
    setIsOpen((prev) => !prev);
  };

  // Smooth scroll to section by id and set active section state
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };


  // for nav scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }

      // Find which section is currently in viewport
      let current = activeSection;
      for (let item of menuIteam) {
        const section = document.getElementById(item.path);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Adjust this threshold as needed (here: section top within upper half of viewport)
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 4) {
            current = item.path;
            break;
          }
        }
      }
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <>
      <header
        id="header"
        className={`fixed top-0 right-0 left-0 w-full z-50 py-10 px-4 ${
          isScroll ? "bg-transparent backdrop-blur-md shadow-lg" : "text-black"
        }`}
      >
        <nav className="container mx-auto max-w-screen-xl flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-bold">
            <a href="#" className="text-primary border-b-3 border-primary">
              Portfolio Web
            </a>
          </div>

          {/* Hamburger menu mobile */}
          <div
            onClick={toggleHnadle}
            className="md:hidden block text-xl cursor-pointer hover:text-primary focus:text-primary"
          >
            {isOpen ? null : <RxHamburgerMenu />}
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <Navmenu
              activeSection={activeSection}
              onMenuItemClick={scrollToSection}
              toggleHnadle={() => {}}
            />
          </div>

          {/* Mobile menu */}
          <div
            className={`fixed top-0 left-0 w-full h-screen bg-gray-900/80 flex flex-col items-center justify-center space-y-8 text-white transition-transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } md:hidden`}
          >
            <div className="absolute top-4 right-4 text-xl" onClick={toggleHnadle}>
              <FaTimes />
            </div>
            <Navmenu
              toggleHnadle={toggleHnadle}
              activeSection={activeSection}
              onMenuItemClick={scrollToSection}
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
