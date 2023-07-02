import React, {useEffect} from "react";
import InformationComponent from "../../components/information";

const Information = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <InformationComponent />
    </>
  );
};

export default Information;
