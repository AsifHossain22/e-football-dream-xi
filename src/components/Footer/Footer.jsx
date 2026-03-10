import React from "react";
import footerLogo from "../../assets/images/banner.png";

const Footer = () => {
  return (
    <footer className="bg-e-football-nav-blue text-white pt-62.5 px-4 lg:px-0">
      {/* FooterLogo */}
      <div className="text-center">
        <img
          src={footerLogo}
          alt="Footer Logo"
          className="w-64  mx-auto mb-16"
        />
      </div>

      {/* FooterContent */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3">
        <div>
          <h6 className="text-e-football-pink text-lg font-semibold">
            About Us
          </h6>
          <p className="text-white mt-4 w-10/12">
            A football dream team builder where fans can select their favorite
            players, manage a limited GP budget and create the ultimate squad
          </p>
        </div>
        <div className="my-8 lg:my-0">
          <h6 className="text-e-football-pink text-lg font-semibold">
            Quick Links
          </h6>
          <ul className="footer-links mt-4 space-y-1">
            <li>
              <a
                href="#"
                className="text-white hover:text-e-football-blue transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="text-white hover:text-e-football-blue transition-colors duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#teams"
                className="text-white hover:text-e-football-blue transition-colors duration-300"
              >
                Teams
              </a>
            </li>
            <li>
              <a
                href="#players"
                className="text-white hover:text-e-football-blue transition-colors duration-300"
              >
                Players
              </a>
            </li>
          </ul>
        </div>
        <form>
          <h6 className="text-e-football-pink text-lg font-semibold">
            Subscribe
          </h6>
          <p className="mt-4 w-8/12">
            Subscribe to our newsletter for the latest updates.
          </p>
          <fieldset className="w-80 mt-5">
            <div className="join gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="input text-black input-bordered join-item focus:outline-none rounded-full"
              />
              <button className="btn bg-e-football-yellow hover:bg-e-football-pink text-e-football-nav-blue hover:text-white shadow-none transition-colors duration-300 border-none rounded-full">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#FFFFFF1A] mt-10 py-6 text-center">
        <p className="text-[#FFFFFF70]">
          <span className="text-white">E-Football</span> &copy;{" "}
          {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
