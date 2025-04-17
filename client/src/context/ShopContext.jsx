import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setsearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const navigate = useNavigate();

  const addToCart = async (id, size) => {
    let cartData = { ...cartItems };
    if (cartData[id]) {
      if (cartData[id][size]) {
        cartData[id][size] += 1;
      } else {
        cartData[id][size] = 1;
      }
    } else {
      cartData[id] = {};
      cartData[id][size] = 1;
    }
    setCartItems(cartData);
  };

  const updateQunatity = async (id, size, quantity) => {
    let cpyProudct = { ...cartItems };
    cpyProudct[id][size] = quantity;
    setCartItems(cpyProudct);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const key in cartItems) {
      for (const size in cartItems[key]) {
        try {
          if (cartItems[key][size] > 0) {
            totalCount += cartItems[key][size];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const size in cartItems[items]) {
        try {
          if (cartItems[items][size] > 0) {
            totalAmount += cartItems[items][size] * itemInfo.price;
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  return (
    <ShopContext.Provider
      value={{
        search,
        setsearch,
        getCartAmount,
        updateQunatity,
        showSearch,
        setShowSearch,
        products,
        currency,
        delivery_fee,
        cartItems,
        setCartItems,
        getCartCount,
        addToCart,
        navigate,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
