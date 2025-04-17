import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className="border-t pt-16 px-4">
      <div className="text-2xl mb-6">
        <Title text1={"Your"} text2={"Orders"} />
      </div>
      <div className="flex flex-col gap-6">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="border-t border-b py-4 px-2 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 w-full">
              <img
                src={item.image[0]}
                className="w-24 h-auto object-cover"
                alt=""
              />

              <div className="flex flex-col gap-2 w-full">
                <p className="sm:text-base text-sm font-medium">{item.name}</p>

                <div className="flex flex-wrap gap-4 text-sm sm:text-base text-gray-700">
                  <p className="text-lg">
                    {currency} {item.price}.00
                  </p>
                  <p className="text-lg">Quantity 1</p>
                  <p className="text-lg">Size M</p>
                </div>

                <p className="text-sm text-gray-500">
                  Date: <span className="text-gray-400">25 , July 2023</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 rounded-full bg-green-400 h-2"></p>
                <p className="text-sm sm:text-base">Ready to Ship</p>
              </div>
              <button className="border px-4 py-2 text-sm font-medium rounded-sm ">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
