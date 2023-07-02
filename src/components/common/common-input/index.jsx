import React from "react";
import styles from "./style.module.css";
import { Input } from "antd";

const CommonInput = ({
  pattern,
  placeholder,
  onChange,
  style,
  type,
}) => {
  return (
    <>
      <input
        pattern={pattern}
        className={styles.common_input}
        placeholder={placeholder}
        onChange={onChange}
        style={style}
        required
        type={type}
      />
    </>
  );
};

export default CommonInput;
