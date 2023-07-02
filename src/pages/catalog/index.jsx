import React, {useEffect} from "react";
import CatalogComponent from "../../components/catalog";

const Catalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <CatalogComponent />
    </>
  );
};

export default Catalog;
