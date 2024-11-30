// import React from 'react'
// import { AiOutlineMenuUnfold } from "react-icons/ai";

// const Navbar = () => {
//   return (
//     <div className='container pt-8'>
//         <div className="flex justify-between items-center">
//             <div className="text-xl font-medium">Portfolio</div>
//             <ul className='gap-10 lg:gap-16 hidden md:flex'>
//                 <li className='menuLink'><a href="#hero">Home</a></li>
//                 <li className='menuLink'><a href="#about">About</a></li>
//                 <li className='menuLink'><a href="#project">Projects</a></li>
//                 <li className='menuLink'><a href="#skill">Skills</a></li>
//                 <li className='menuLink'><a href="#contact">Contact</a></li>
//             </ul>
//             <AiOutlineMenuUnfold className='md:hidden' size={30}/>
//         </div>
      
//     </div>
//   )
// }

// export default Navbar

"use client";
import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="bg-black fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-white">
                  Logo
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <a
                  href="#hero"
                  className="text-white rounded-lg p-2 menuLink"
                >
                  Home
                </a>

                <a
                  href="#about"
                  className="text-white rounded-lg p-2 menuLink"
                >
                  About
                </a>

                <a
                  href="#project"
                  className="text-white rounded-lg p-2 menuLink"
                >
                  Projects
                </a>

                <a
                  href="#skill"
                  className="text-white rounded-lg p-2 menuLink"
                >
                  Skills
                </a>

                <a
                  href="#contact"
                  className="text-white rounded-lg p-2 menuLink"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6L12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#hero"
                className="text-white block rounded-lg p-2 menuLink"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-white block rounded-lg p-2 menuLink"
              >
                About
              </a>

              <a
                href="#project"
                className="text-white block rounded-lg p-2 menuLink"
              >
                Projects
              </a>

              <a
                href="#skill"
                className="text-white block rounded-lg p-2 menuLink"
              >
                Skills
              </a>

              <a
                href="#contact"
                className="text-white block rounded-lg p-2 menuLink"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
