import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Service", href: "#service" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contacts" },
];

function Navbar() {
  return (
    <nav
      aria-label="Main Navigation"
      className="fixed top-2 left-1/2 transform -translate-x-1/2 z-30 
                 bg-blue-500 dark:bg-gray-900 backdrop-blur-md shadow-navbar 
                 w-auto h-[60px] rounded-full px-8 sm:px-8 md:px-16 lg:px-20 flex items-center justify-center"
    >
      <ul className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-textWhiteColor dark:text-gray-200 no-underline 
                         text-sm sm:text-base md:text-lg lg:text-xl font-medium 
                         hover:text-textThemeColor transition-colors duration-200"
            >
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <DarkModeToggle />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
