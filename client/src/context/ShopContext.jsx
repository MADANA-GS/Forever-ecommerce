import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setsearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  return (
    <ShopContext.Provider
      value={{
        search,
        setsearch,
        showSearch,
        setShowSearch,
        products,
        currency,
        delivery_fee,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
