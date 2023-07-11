import React from "react";
import "./style.css";
import { Card } from "antd";
const { Meta } = Card;

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
        cover={<img alt="example"  style={{ aspectRatio: 1 / 1 }} src={coverImg} />}
      >
        <Meta title={isText == true ? heading : null} description={title} />
      </Card>
    </>
  );
};

export default CommonCard;
