import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, navigate ,cartItems, updateQunatity, setCartItems } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"Your"} text2={"Cart"} />
      </div>
      <div className="">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="py-4 gird gird-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center flex justify-between gap-4 border-t border-b to-gray-700 "
            >
              <div className="">
                <div className="flex items-start gap-6">
                  <img
                    className="w-16 sm:w-20"
                    src={productData.image[0]}
                    alt=""
                  />
                </div>
                <p className="text-sm sm:text-lg font-medium">
                  {productData.name}
                </p>
                <div className="flex uppercase gap-5 mt-2">
                  <p>
                    {currency}
                    {productData.price}
                  </p>
                  <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                    {item.size}
                  </p>
                </div>
              </div>
              <input
                type="number"
                min={1}
                onChange={(e) =>
                  e.target.value === "" || e.target.vlaue === "0"
                    ? null
                    : updateQunatity(item._id, item.size, e.target.value)
                }
                value={item.quantity}
                className="border max-w-10 sm:max-w-20 px-1 py-1 sm:px-2"
              />
              <img
                src={assets.bin_icon}
                className="w-5 mr-4 cursor-pointer"
                alt=""
                onClick={() =>
                  updateQunatity(item._id, item.size, item.quantity - 1)
                }
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button onClick={() => navigate("/placeorder")} className="bg-black text-white text-sm my-8 px-8 py-3">
              Procced to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
