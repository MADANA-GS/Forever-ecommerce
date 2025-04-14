import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProduct, setFilteredProduct] = useState([]);

  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(category.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(subCategory.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let prouductsCopy = [...products];

    if(showSearch && search.length > 0) {
      prouductsCopy = prouductsCopy.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (category.length > 0) {
      prouductsCopy = prouductsCopy.filter((product) =>
        category.includes(product.category)
      );
    }
    if (subCategory.length > 0) {
      prouductsCopy = prouductsCopy.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }
    setFilteredProduct(prouductsCopy);
  };

  const sortProduct = () => {
    let prouductsCopy = [...products];
    switch (sortType) {
      case "low-high":
        setFilteredProduct(prouductsCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilteredProduct(prouductsCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };
  useEffect(() => {
    sortProduct();
  }, [sortType]);

  useEffect(() => {
    applyFilter();
  }, [category, search , showSearch, subCategory]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 border-t">
      {/* Filer optins */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilters(!showFilters)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          Filters
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden transition-all duration-300 ${
              showFilters ? "rotate-90" : ""
            }`}
            alt=""
          />
        </p>
        {/* category filter */}
        <div
          className={` border border-gray-300 pl-5 sm:block py-3 mt-6 ${
            showFilters ? " " : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={toggleCategory}
              />{" "}
              Kids
            </p>
          </div>
        </div>
        {/*Sub category filter */}
        <div
          className={` border border-gray-300 pl-5 sm:block py-3 my-2 ${
            showFilters ? " " : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                type="checkbox"
                className="w-3"
                value={"Topwear"}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
   {filteredProduct.length === 0 ? (
    <div className="flex mx-auto flex-col items-center justify-center py-20 px-4 bg-transparent  rounded-lg shadow-sm text-center animate-fadeIn">
    <img
      src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
      alt="Empty Box"
      className="w-20 h-20 mb-4 opacity-60"
    />
    <h2 className="text-xl font-semibold text-gray-600 mb-2">No items available</h2>
    <p className="text-sm text-gray-500">Try changing your filters or check back later.</p>
  </div>
  
   ) : (
    <div className="flex-1 mt-2">
    <div className="flex justify-between text-base sm:text-2xl mb-4">
      <Title text1={"All"} text2={"Collection"} />
      {/* Proucts Sort */}
      <select
        onChange={(e) => setSortType(e.target.value)}
        className="border border-gray-300 text-sm px-2"
      >
        <option value="relavent">Relavent</option>
        <option value="low-high">Low to High</option>
        <option value="high-low">High to Low</option>
      </select>
    </div>
    {/* Map products */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 ">
      {filteredProduct.map((item, index) => (
        <ProductItem
          key={index}
          id={item._id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  </div>
   )}
    </div>
  );
};

export default Collection;
