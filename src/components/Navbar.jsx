import React from "react";
function Navbar() {
  return (
    <section className="bg-blue-500 backdrop-blur-[10px] shadow-navbar w-auto h-[60px] flex justify-between items-center px-8 sm:px-8 md:px-16 lg:px-20 text-center fixed top-2 rounded-full left-1/2 transform -translate-x-1/2 z-[30]">
      {/* list  */}
      <div className="flex justify-between items-center w-full">
        <ul className="flex justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center m-auto text-center">
          <li>
            <a
              href="#projects"
              className="no-underline text-textWhiteColor text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:text-textThemeColor"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="no-underline text-textWhiteColor text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:text-textThemeColor"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="no-underline text-textWhiteColor text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:text-textThemeColor"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              className="no-underline text-textWhiteColor text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:text-textThemeColor"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;