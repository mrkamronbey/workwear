import React from "react";
import "./style.css";
import { Card } from "antd";

const CommonCard = ({
  style,
  title,
  heading,
  coverImg,
  textStyle,
  isText,
  headingStyle
}) => {
  return (
    <>
      <Card
        hoverable
        style={style}
        cover={<img alt="example" style={{aspectRatio: 1 / 1}} src={coverImg} />}
      >
        {isText == true ? <h4 style={headingStyle}>{heading}</h4> : null}
        <p style={textStyle}>{title}</p>
      </Card>
    </>
  );
};

export default CommonCard;
