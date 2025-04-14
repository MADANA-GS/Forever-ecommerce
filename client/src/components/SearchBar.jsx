import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const SearchBar = () => {
  const { showSearch, setShowSearch, search, setsearch } =
    useContext(ShopContext);

  return (
    <div
      className={`overflow-hidden transition-all flex items-center justify-center duration-300 mb-2 bg-gray-50 text-center border-t border-b ${
        showSearch ? "h-20 opacity-100 py-4" : "h-0 opacity-0 py-0"
      }`}
    >
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-3 mx-3 w-3/4 sm:w-1/2 rounded-full transition-all duration-300">
        <input
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm"
        />
        <img src={assets.search_icon} className="w-4 ml-2" alt="Search" />
      </div>

      <div className="">
        <img
          onClick={() => setShowSearch(false)}
          src={assets.cross_icon}
          className="inline w-3 cursor-pointer transition-transform duration-200 hover:scale-110"
          alt="Close"
        />
      </div>
    </div>
  );
};

export default SearchBar;
