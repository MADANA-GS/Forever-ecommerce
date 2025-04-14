import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [Related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = [...products];

      if (category.length > 0) {
        productsCopy = productsCopy.filter((product) =>
          category.includes(product.category)
        );
      }
      if (subCategory.length > 0) {
        productsCopy = productsCopy.filter((product) =>
          subCategory.includes(product.subCategory)
        );
      }
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-16">
      <div className="text-center text-3xl py-2">
        <Title text1={"Related"} text2={"Products"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {Related.map((item, index) => (
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
  );
};

export default RelatedProduct;
