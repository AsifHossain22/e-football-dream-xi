import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import gpIcon from "../../assets/images/gp.png";

const Header = () => {
  // ScrollState
  const [scrolled, setScrolled] = useState(false);

  // HandleScrollFunction
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full ${scrolled ? "backdrop-blur-md shadow-md" : "bg-transparent"} transition-all duration-300 `}
    >
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
          <ul className="menu menu-horizontal px-1 items-center">
            <li>
              <a
                href="#"
                className="btn font-sora bg-transparent shadow-none border-none rounded-full text-white hover:text-e-football-blue hover:bg-e-football-yellow hover:shadow-none px-4 py-1 transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="btn font-sora bg-transparent shadow-none border-none rounded-full text-white hover:text-e-football-blue hover:bg-e-football-yellow hover:shadow-none px-4 py-1 transition-all duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#players"
                className="btn font-sora bg-transparent shadow-none border-none rounded-full text-white hover:text-e-football-blue hover:bg-e-football-yellow hover:shadow-none px-4 py-1 transition-all duration-300"
              >
                Players
              </a>
            </li>
            <li>
              <a
                href="#teams"
                className="btn font-sora bg-transparent shadow-none border-none rounded-full text-white hover:text-e-football-blue hover:bg-e-football-yellow hover:shadow-none px-4 py-1 transition-all duration-300"
              >
                Teams
              </a>
            </li>

            {/* CoinsDisplayButton */}
            <div>
              <a className="btn font-sora shadow-none bg-e-football-pink hover:bg-e-football-yellow border border-e-football-pink hover:border-e-football-yellow text-white hover:text-e-football-blue hover:shadow-none hover:scale-110 transition-all duration-300 px-4 py-1 rounded-full">
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
            className="btn btn-ghost lg:hidden p-0 text-white nav-btn"
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
            className="menu menu-sm dropdown-content bg-e-football-blue border border-white/70 shadow-md rounded-box z-1 mt-3 w-52 p-2 right-0"
          >
            <li>
              <a
                href="#"
                className="btn font-sora bg-transparent shadow-none border-none rounded-full text-white hover:text-e-football-blue hover:bg-e-football-yellow hover:shadow-none px-4 py-1 transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="btn font-sora bg-transparent shadow-none border-none rounded-full text-white hover:text-e-football-blue hover:bg-e-football-yellow hover:shadow-none px-4 py-1 transition-all duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#players"
                className="btn font-sora bg-transparent shadow-none border-none rounded-full text-white hover:text-e-football-blue hover:bg-e-football-yellow hover:shadow-none px-4 py-1 transition-all duration-300"
              >
                Players
              </a>
            </li>
            <li>
              <a
                href="#teams"
                className="btn font-sora bg-transparent shadow-none border-none rounded-full text-white hover:text-e-football-blue hover:bg-e-football-yellow hover:shadow-none px-4 py-1 transition-all duration-300"
              >
                Teams
              </a>
            </li>

            {/* CoinsDisplayButton */}
            <div className="text-center my-3">
              <a className="btn font-sora shadow-none bg-e-football-pink hover:bg-e-football-yellow border border-e-football-pink hover:border-e-football-yellow text-white hover:text-e-football-blue hover:shadow-none hover:scale-110 transition-all duration-300 px-4 py-1 rounded-full">
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
