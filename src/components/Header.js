import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [serviceDropdown, setServicDropdown] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const serviceToggle = () => {
    setServicDropdown(!serviceDropdown);
  };

  return (
    <nav className={`bg-white p-4 ${isScrolled ? "fixed top-0 w-full" : ""}`}>
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:space-x-8">
          {/* <!-- Left side: Links (Hidden on mobile) --> */}

          {/* <!-- Center: Logo --> */}
          <div className="flex justify-left">
            <Link to="/">
              <img src={logo} alt="logo" width={"70"} height={"70px"} />
            </Link>
          </div>
          <div className="hidden md:flex items-center p-4  flex justify-center ">
            <Link to="/houses">
              <div className="text-black hover:text-hoverColor p-4">Houses</div>
            </Link>
            <div class="group  relative dropdown  px-4 text-primary hover:text-p cursor-pointer  text-primary  tracking-wide">
              <Link to="/persons">
                <div className="text-black hover:text-hoverColor p-4">
                  Persons
                </div>
              </Link>
            </div>
            <Link to="/quotes">
              <div className="text-black hover:text-hoverColor p-4">Quotes</div>
            </Link>
          </div>
          <div className="flex justify-left ">
            <Button
              url={"/page404"}
              text={"More details"}
              className={"hover:bg-hoverColor"}
            />
          </div>
          {/* <!-- Mobile menu button (Hidden on desktop) --> */}
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="text-gray hover:text-primary"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu (hidden on larger screens) --> */}
      <div
        className={`md:hidden ${isMenuOpen ? "" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <ul className="mt-6 space-y-2 tracking-wide">
            <li className="min-w-max">
              <Link to="/">
                <div
                  aria-label="Home"
                  className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-primary"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  <span className="group-hover:text-primary">Home </span>
                </div>
              </Link>
            </li>
            <li className="min-w-max">
              <Link to="/services">
                <div className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-primary"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  <span
                    className="group-hover:text-primary"
                    onClick={serviceToggle}
                  >
                    Serivces
                  </span>
                </div>
              </Link>
            </li>
            {serviceDropdown && (
              <div>
                <li className="min-w-max">
                  <Link to="/analysis">
                    <div className="group flex items-center space-x-4 rounded-md px-8 py-3 text-gray">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 text-primary"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                        />
                      </svg>
                      <span className="group-hover:text-primary">Analysis</span>
                    </div>
                  </Link>
                </li>
                <li className="min-w-max">
                  <Link to="/testing">
                    <div className="group flex items-center space-x-4 rounded-md px-8 py-3 text-gray">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 text-primary"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                        />
                      </svg>
                      <span className="group-hover:text-primary">Testing</span>
                    </div>
                  </Link>
                </li>
              </div>
            )}
            <li className="min-w-max">
              <Link to="/pricing">
                <div className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="group-hover:text-primary">Pricing</span>
                </div>
              </Link>
            </li>
            <li className="min-w-max">
              <Link to="/contactUs">
                <div className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-primary"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                    />
                  </svg>
                  <span className="group-hover:text-primary">Contact</span>
                </div>
              </Link>
            </li>
            <li className="min-w-max">
              <Link to="/aboutUs">
                <div className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                  <span className="group-hover:text-primary">About Us</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
