/* eslint-disable no-unused-vars */
import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-[#2362AB] px-6 md:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content - Grid Layout for Desktop and Flex Column for Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 py-8 border-t-[3px] border-b-[3px]  border-blue-600">
          {/* Logo and Description */}
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <img src={logo} alt="Logo" loading="lazy"  className="h-16 mb-4" />
            <p className="text-center md:text-left text-sm">
              Helping property owners, entrepreneurs, and real estate
              professionals transform and matchmake spaces into profitable
              coworking business.
            </p>
          </div>

          {/* Menu Section */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-2">Menu</h3>
            <ul>
              {/* <li>
                <Link to="/" className="hover:underline">
                  Blog
                </Link>
              </li> */}
              <li>
                <a
                  href="https://propques.zohorecruit.in/jobs/Careers"
                  className="hover:underline"
                >
                  Careers
                </a>
              </li>
              {/* <li>
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Quick Links */}
          {/* <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
            <ul>
              <li>
                <a href="https://findurspace.tech/" className="hover:underline">
                  Looking for Offices
                </a>
              </li>
            </ul>
          </div> */}

          {/* Contact Us */}
          <div className="col-span-1 border-r-[3px]  border-blue-600">
            <h3 className="font-semibold text-lg mb-2 ">Contact Us</h3>
            <p className="text-sm">
            OUTER RING ROAD, DOLLAR SCHEME COLONY, 1ST STAGE, BTM LAYOUT 1, BANGALORE
            </p>
            <a
              href="mailto:Buzz@propques.com"
              className="text-blue-600 hover:underline"
            >
              Buzz@propques.com
            </a>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-1 ">
            <h3 className="font-semibold text-lg mb-2">Newsletter</h3>
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                className="border p-2 rounded"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="border p-2 rounded"
              />
              <button className="bg-[#2362AB] text-white py-2 rounded">
                Subscribe
              </button>
            </form>
            <div className="flex gap-3 mt-4">
              <Link to="https://www.instagram.com/propques_services/">
                <FaInstagram
                  size={24}
                  className="text-[#2362AB] hover:text-blue-600 cursor-pointer"
                />
              </Link>

              <Link to="https://www.linkedin.com/company/propques/posts/?feedView=all">
                <FaLinkedin
                  size={24}
                  className="text-[#2362AB] hover:text-blue-600 cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Links */}
        <div className="text-center my-4 pt-4 text-sm">
          <p className="text-gray-500">
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>{" "}
            |
            <Link to="/terms-and-conditions" className="hover:underline ml-2">
              Terms and Conditions
            </Link>{" "}
            |
            <a href="/sitemap.xml" target="_blank"  className="hover:underline ml-2">
              Sitemap
            </a>{" "}
            |<span className="ml-2">Copyright © 2024</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
