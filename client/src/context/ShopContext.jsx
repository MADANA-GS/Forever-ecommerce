import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;

  return (
    <ShopContext.Provider value={{ products, currency, delivery_fee }}>
      {children}
    </ShopContext.Provider>
  );
};
