import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Prouduct = () => {
  const { id } = useParams();

  const { products, currency, addToCart } = useContext(ShopContext);
  const [size, setSize] = useState("");
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const fetchProductData = async () => {
    const data = products.find((product) => product._id === id);
    setProductData(data);
    setImage(data.image[0]);
  };

  useEffect(() => {
    fetchProductData();
  }, [id, products, productData]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data*/}
      <div className=" flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:w-[18.7%] sm:justify-normal w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                alt=""
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full flex-shrink-0 h-auto" alt="" />
          </div>
          <div className="">
            {/* Proudct information */}
            <div className="">
              <div className="flex-1 "></div>
              <h1 className="font-medium text-2xl">{productData.name}</h1>
              <div className="flex items-center gap-1 mt-2">
                <img src={assets.star_icon} alt="" />
                <img src={assets.star_icon} alt="" />
                <img src={assets.star_icon} alt="" />
                <img src={assets.star_icon} alt="" />
                <img src={assets.star_dull_icon} alt="" />
                <p className="pl-2">{122}</p>
              </div>
              <p className="mt-5 text-3xl font-medium">
                {currency}
                {productData.price}
              </p>
              <p className="mt-5 text-gray-400 md:w-4/5 font-medium">
                {productData.description}
              </p>
              <div className="flex flex-col gap-4 my-8">
                <p>Select Size </p>
                <div className="flex gap-2">
                  {productData.sizes.map((item, index) => (
                    <button
                      onClick={() => setSize(item)}
                      className={`border py-2 px-3 text-sm bg-gray-200 ${
                        item === size && "border-orange-500"
                      }`}
                      key={index}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <button
                disabled={size === "" ? true : false}
                onClick={() => addToCart(productData._id, size)}
                className={`uppercase px-8 py-3 text-sm bg-black text-white active:bg-gray-700 
    ${!size ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {size ? "add to cart" : "select size"}
              </button>
              <hr className=" sm:w-4/5" />
              <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                <p>100% Original Proudct.</p>
                <p>CAsh on Delevary is available</p>
                <p>Easy return and exchange policy available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Discription */}
      <div className="mt-20">
        <div className="flex">
          <p className="border px-5 text-sm py-3">Discription</p>
          <p className="border px-5 text-sm py-3">Reviews {122}</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
            eveniet debitis blanditiis cumque tempora neque accusantium deserunt
            quas ab quasi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            dolores est obcaecati quia dignissimos dolorem explicabo saepe!
            Minus, quisquam! Quibusdam cum minus delectus quia quod!
          </p>
        </div>
      </div>
      {/* Related products */}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Prouduct;
