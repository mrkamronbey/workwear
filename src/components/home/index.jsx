import React from "react";
import Hero from "./hero";
import HomeCatalog from "./home-catalog";
import NewProduct from "./new-product";
import TopSeller from "./top-seller";
import Partner from "./partner-slider";
import RequestComponent from "../request";

const HomeComponent = () => {
  return (
    <>
      <Hero />
      <HomeCatalog />
      <NewProduct />
      <Partner />
      <TopSeller />
      <RequestComponent />
    </>
  );
};

export default HomeComponent;
