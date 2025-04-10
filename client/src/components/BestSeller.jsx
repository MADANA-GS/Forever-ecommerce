import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [BestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const product = products.filter((product) => product.bestseller === true);
    setBestSeller(product.slice(0, 5));
    // console.log(BestSeller);
  }, [products]);
  return (
    <div className="my-10 ">
      <div className="text-center text-3xl py-8">
        <Title text1={"Best"} text2={"Seller"} />
        <p className="w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
          voluptatum voluptatem ducimus assumenda asperiores excepturi. Minus
          iusto pariatur porro dolorum?
        </p>
        <div className="grid mt-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-y-6 gap-4">
          {BestSeller.map((item, index) => (
            <ProductItem
              id={item._id}
              key={index}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
