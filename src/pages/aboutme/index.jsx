import React, { useEffect } from "react";
// import styles from './style.module.css'
import AboutComponent from "../../components/aboutme";

const Aboutme = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AboutComponent />
    </>
  );
};

export default Aboutme;
