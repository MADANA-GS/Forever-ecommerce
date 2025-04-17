import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { showSearch,getCartCount, setShowSearch, search, setsearch } =
    useContext(ShopContext);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <div className="w-36 h-full">
        <Link className="cursor-pointer" to="/">
          <img src={assets.logo} className="w-full h-full" alt="" />
        </Link>
      </div>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink
          className="flex items-center flex-col gap-2 hover:text-gray-900"
          to="/"
        >
          <p>HOME</p>
          <hr className={`w-2/4 h-[1.5px] hidden  bg-gray-700 border-none`} />
        </NavLink>
        <NavLink
          className="flex items-center flex-col gap-2 hover:text-gray-900"
          to="/colection"
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 h-[1.5px] hidden bg-gray-700 border-none" />
        </NavLink>
        <NavLink
          className="flex items-center flex-col gap-2 hover:text-gray-900"
          to="/about"
        >
          <p>ABOUT</p>
          <hr className="w-2/4 h-[1.5px] hidden bg-gray-700 border-none" />
        </NavLink>
        <NavLink
          className="flex items-center flex-col gap-2 hover:text-gray-900"
          to="/contact"
        >
          <p>CONTACT</p>
          <hr className="w-2/4 h-[1.5px] hidden bg-gray-700 border-none" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
        onClick={()=>setShowSearch(!showSearch)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="Search"
        />

        {/* Profile Dropdown */}
        <div className="relative group">
         <Link to={"/login"}> <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt="Profile Icon"
          /></Link>

          {/* Dropdown menu */}
          <div className="absolute top-6 right-0 bg-white shadow-lg rounded-lg p-4 w-40 hidden group-hover:flex group-hover:flex-col gap-2 z-10">
            <Link
              to="/login"
              className="text-gray-700 hover:text-black transition-colors"
            >
              My Profile
            </Link>
            <Link
              to="/orders"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Orders
            </Link>
            <Link
              to="/cart"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Logout
            </Link>
          </div>
        </div>
        <Link className="relative" to="/cart">
          <img
            src={assets.cart_icon}
            className="w-5 cursor-pointer"
            alt="Cart Icon"
          />
          <p className="absolute top-2 right-[-4px] bg-[#C586A6] text-white text-xs w-4 aspect-square h-4 flex items-center justify-center rounded-full">
            {getCartCount()}
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          onClick={() => setOpen(!open)}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      {/* for smalle screen size bar menu */}
      <div
        className={`absolute top-0 right-0 duration-300zz overflow-hidden bottom-0 ${
          open ? "w-full" : "w-0"
        } bg-white transition-all`}
      >
        <div className="flex flex-col  text-gray-600">
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center cursor-pointer gap-2 p-3"
          >
            <img
              src={assets.dropdown_icon}
              className="h-4 rotate-180 "
              alt=""
            />
            <p>Back</p>
          </div>
          <ul className="flex flex-col ">
            <NavLink
              onClick={() => setOpen(!open)}
              className="flex py-2 border items-center flex-col gap-2 hover:text-gray-900"
              to="/"
            >
              <p>HOME</p>
            </NavLink>
            <NavLink
              onClick={() => setOpen(!open)}
              className="flex border py-2 items-center flex-col gap-2 hover:text-gray-900"
              to="/colection"
            >
              <p>COLLECTION</p>
            </NavLink>
            <NavLink
              onClick={() => setOpen(!open)}
              className="flex border py-2 items-center flex-col gap-2 hover:text-gray-900"
              to="/about"
            >
              <p>ABOUT</p>
            </NavLink>
            <NavLink
              onClick={() => setOpen(!open)}
              className="flex border py-2 items-center flex-col gap-2 hover:text-gray-900"
              to="/contact"
            >
              <p>CONTACT</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
