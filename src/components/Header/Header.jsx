import React from "react";
import NavBar from "../NavBar/NavBar";
import logo from "../../assets/digitool_logo.png";
import { ShoppingCart } from "lucide-react";
const navMenu = [
  {
    id: 1,
    name: "Products",
    path: "/products",
  },
  {
    id: 2,
    name: "Features",
    path: "/features",
  },
  {
    id: 3,
    name: "Pricing",
    path: "/pricing",
  },
  {
    id: 4,
    name: "Testimonials",
    path: "/testimonials",
  },
  {
    id: 5,
    name: "FAQ",
    path: "/faq",
  },
];
const Header = () => {
  return (
    <div className="navbar 2xl:px-60 lg:px-20 py-2 bg-white text-black shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 text-white rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navMenu.map((navlink) => (
              <NavBar key={navlink.id} navlink={navlink}></NavBar>
            ))}
          </ul>
        </div>
        <a
          className="hidden lg:flex justify-center items-center gap-2 btn h-full  btn-ghost hover:bg-white "
          href="/"
        >
          <img className="w-16" src={logo} alt="" />
          <span className=" text-3xl font-extrabold text-[#7c21f8]">
            DigiTool
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navMenu.map((navlink) => (
            <NavBar key={navlink.id} navlink={navlink}></NavBar>
          ))}
        </ul>
      </div>
      <div className="navbar-end flex gap-3">
        <span className="md:inline-block relative hidden">
          <span className="absolute -top-4 -right-2 text-green-500 font-bold">
            +0
          </span>
          <ShoppingCart />
        </span>
        <a href="/login">Login</a>
        <a className="bg-linear-to-r text-white font-bold from-[#652ef7] to-[#8a1afb] px-2 py-2 rounded-full text-xs xs:hidden md:text-base ">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Header;
