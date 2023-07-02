import React, { useEffect } from "react";
import ProductDetailsComponent from "../../components/product-details";

const ProductDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProductDetailsComponent />
    </>
  );
};

export default ProductDetails;
