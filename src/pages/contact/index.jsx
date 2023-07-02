import React, { useEffect } from "react";
// import styles from './style.module.css'
import ContactComponent from "../../components/contact";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ContactComponent />
    </>
  );
};

export default Contact;
