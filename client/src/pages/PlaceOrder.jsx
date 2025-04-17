import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");

  const {navigate} =useContext(ShopContext);
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 min-h-[80vh] border-t pt-5 sm:pt-14">
      {/* Left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl my-3 gap-6 sm:text-2xl">
          <Title text1={"Delivery"} text2={"Information"} />

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="First name"
              className="border text-sm border-gray-300 rounded py-1.5 px-3.5 w-full outline-none"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border text-sm border-gray-300 rounded py-1.5 px-3.5 w-full outline-none"
            />
          </div>

          <input
            type="text"
            placeholder="Email adress"
            className="border text-sm border-gray-300 rounded py-1.5 px-3.5 w-full outline-none my-2"
          />
          <input
            type="text"
            placeholder="Street name"
            className="border text-sm border-gray-300 rounded py-1.5 px-3.5 w-full outline-none my-2"
          />

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="City name"
              className="border text-sm border-gray-300 rounded py-1.5 px-3.5 w-full outline-none"
            />
            <input
              type="text"
              placeholder="State name"
              className="border text-sm border-gray-300 rounded py-1.5 px-3.5 w-full outline-none"
            />
          </div>

          <div className="flex gap-3 my-2">
            <input
              type="number"
              placeholder="PinCode "
              className="border text-sm border-gray-300 rounded py-1.5 px-3.5 w-full outline-none"
            />
            <input
              type="text"
              placeholder="Country"
              className="border text-sm border-gray-300 rounded py-1.5 px-3.5 w-full outline-none"
            />
          </div>

          <input
            type="numeber"
            placeholder="Phone Number"
            className="border text-sm border-gray-300 rounded py-1.5 px-3.5 w-full outline-none my-2"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="mt-8">
        <div className="mt-8 min-h-80">
          <CartTotal />
        </div>
        <div className="mt-6">
          <Title text1={"Payment"} text2={"Method"} />
          {/* Pyament method selection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-3 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 border rounded-full h-3.5 ${
                  method === "stripe" && "bg-green-400"
                }`}
              ></p>
              <img src={assets.stripe_logo} className="h-5 mx-4" alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-3 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 border rounded-full ${
                  method === "razorpay" && "bg-green-400"
                } h-3.5`}
              ></p>
              <img src={assets.razorpay_logo} className="h-5 mx-4" alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-3 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 border rounded-full ${
                  method === "cod" && "bg-green-400"
                } h-3.5`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                Cash On Delivery
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button onClick={()=>navigate("/orders")} className="bg-black text-white px-10 py-3 text-sm">Place Order</button> 
          
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
