import React from "react";
import styles from "./style.module.css";
import HeaderTop from "./header-top";
import HeaderBottom from "./header-bottom";

const Header = () => {
  return (
    <>
      <div className={styles.fixed_box}>
        <HeaderTop />
        <HeaderBottom/>
      </div>
    </>
  );
};

export default Header;
