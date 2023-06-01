import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUserAlt, FaBars } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full min-h[50px] flex justify-between items-center absolute z-10">
      <ul className="hidden sm:flex px-4">
        <li className="py-2 px-5 bg-white rounded-lg hover:bg-black hover:text-white">
          <a href="/">Home</a>
        </li>
        <li className="py-2 px-5 bg-white rounded-lg hover:bg-black hover:text-white">
          <a href="#Shop">Shop</a>
        </li>
        <li className="py-2 px-5 bg-white rounded-lg hover:bg-black hover:text-white">
          <a href="#Collections">Collections</a>
        </li>
        <li className="py-2 px-5 bg-white rounded-lg hover:bg-black hover:text-white">
          <a href="#Pages">Pages</a>
        </li>
        <li className="py-2 px-5 bg-white rounded-lg hover:bg-black hover:text-white">
          <a href="#Blog">Blog</a>
        </li>
      </ul>
      <div /*  className="pr-60 pl-5 py-2" */>
        <h1 style={{ fontFamily: "'Courgette', cursive", fontSize: "35px" }}>
          Minymals
        </h1>
      </div>
      <div className=" flex justify-between">
        <FaSearch className="mx-4" />
        <FaUserAlt className="mx-4" />
        <FaShoppingCart className="mx-4" />
      </div>
      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20} className=" text-black-300 mr-4 cursor-pointer" />
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li
            className="text-xl my-3 "
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            <a href="/">Home</a>
          </li>
          <li
            className="text-xl my-3"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            <a href="#Shop">Shop</a>
          </li>
          <li
            className="text-xl my-3"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            <a href="#Collections">Collections</a>
          </li>
          <li
            className="text-xl my-3"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            <a href="#Pages">Pages</a>
          </li>
          <li
            className="text-xl my-3"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            <a href="#Blog">Blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
