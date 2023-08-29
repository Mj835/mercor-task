import React, { useState } from "react";
import Logo from "../assets/logo.png";
import EyeIcon from "../assets/eye button.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="bg-black lg:bg-transparent p-4 md:px-14 md:py-5 flex justify-between items-center">
      <img src={Logo} alt="Logo" />

      {/* Mobile Menu Icon */}
      <div className="lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
        >
          {mobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[75px] left-0 w-full h-full z-10 bg-green-500">
          <div className="flex flex-col items-center py-4">
            {[
              "Sign In",
              "Legal",
              "Licenses",
              "Security",
              "Careers",
              "Press",
              "Support",
              "Status",
              "Codeblog",
            ].map((item) => (
              <Link
                to={"/"}
                key={item}
                className="text-white text-sm font-extrabold uppercase my-2"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-start items-center gap-3 lg:gap-5">
        {[
          "Sign In",
          "Legal",
          "Licenses",
          "Security",
          "Careers",
          "Press",
          "Support",
          "Status",
          "Codeblog",
        ].map((item) => (
          <Link
            to={"/"}
            key={item}
            className="text-white text-sm font-extrabold uppercase leading-[18px] tracking-wide"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="hidden lg:block">
        <img src={EyeIcon} alt="EyeIcon" />
      </div>
    </div>
  );
};

export default Header;
