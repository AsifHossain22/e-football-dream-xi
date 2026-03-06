import React from "react";
import logo from "../../assets/images/logo.png";
import gpIcon from "../../assets/images/gp.png";

const Header = () => {
  return (
    <header className="bg-[#eeeeee] sticky top-0 z-50 backdrop-blur-xl shadow-sm">
      {/* Navbar */}
      <div className="navbar justify-between max-w-7xl mx-auto px-4 lg:px-0">
        <div className="navbar-start">
          {/* Logo */}
          <a
            href="#"
            className="hover:scale-110 transition-transform duration-300"
          >
            <img
              src={logo}
              alt="E-Football Dream XI Logo"
              className="w-16 h-16"
            />
          </a>
        </div>
        {/* DesktopNav */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-12 items-center">
            <li>
              <a
                href="#"
                className="btn font-sora bg-transparent shadow-none border-none text-nav-link hover:text-hover-nav-link hover:bg-transparent hover:shadow-none transition-all duration-300 p-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="btn font-sora bg-transparent shadow-none border-none text-nav-link hover:text-hover-nav-link hover:bg-transparent hover:shadow-none transition-all duration-300 p-0"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#players"
                className="btn font-sora bg-transparent shadow-none border-none text-nav-link hover:text-hover-nav-link hover:bg-transparent hover:shadow-none transition-all duration-300 p-0"
              >
                Players
              </a>
            </li>
            <li>
              <a
                href="#teams"
                className="btn font-sora bg-transparent shadow-none border-none text-nav-link hover:text-hover-nav-link hover:bg-transparent hover:shadow-none transition-all duration-300 p-0"
              >
                Teams
              </a>
            </li>

            {/* CoinsDisplayButton */}
            <div className="">
              <a className="btn font-sora bg-transparent shadow-none border-2 border-[#13131310] text-hover-nav-link hover:bg-transparent hover:shadow-none hover:scale-110 transition-all duration-300 px-3 py-6 rounded-2xl">
                <span>
                  <img
                    className="w-7 rounded-full"
                    src={gpIcon}
                    alt="GP Icon"
                  />
                </span>{" "}
                0
              </a>
            </div>
          </ul>
        </div>

        {/* MobileNav */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden p-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow right-0"
          >
            <li>
              <a
                href="#"
                className="btn font-sora bg-transparent shadow-none border-none text-nav-link hover:text-hover-nav-link hover:bg-transparent hover:shadow-none transition-all duration-300 p-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="btn font-sora bg-transparent shadow-none border-none text-nav-link hover:text-hover-nav-link hover:bg-transparent hover:shadow-none transition-all duration-300 p-0"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#players"
                className="btn font-sora bg-transparent shadow-none border-none text-nav-link hover:text-hover-nav-link hover:bg-transparent hover:shadow-none transition-all duration-300 p-0"
              >
                Players
              </a>
            </li>
            <li>
              <a
                href="#teams"
                className="btn font-sora bg-transparent shadow-none border-none text-nav-link hover:text-hover-nav-link hover:bg-transparent hover:shadow-none transition-all duration-300 p-0"
              >
                Teams
              </a>
            </li>

            {/* CoinsDisplayButton */}
            <div className="text-center">
              <a className="btn font-sora bg-transparent shadow-none border-2 border-[#13131310] text-hover-nav-link hover:bg-transparent hover:shadow-none hover:scale-110 transition-all duration-300 px-3 py-6 rounded-2xl">
                <span>
                  <img
                    className="w-7 rounded-full"
                    src={gpIcon}
                    alt="GP Icon"
                  />
                </span>{" "}
                0
              </a>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
