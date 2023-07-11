import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { BigContainer } from "../../../style-app";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-grid-system";
import CommonCard from "../../common/common-card";


import "./style.css";
import { NewsProductGet } from '../../../redux/news-product/index'
import { useDispatch, useSelector } from "react-redux";

import productimg from "../../../assets/newproduct/productimg.png";
import { NavLink } from "react-router-dom";




const NewProduct = () => {


  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const newsproductGets = useSelector((state) => state.newsproduct.newsproductGet?.data)
  useEffect(() => {
    dispatch(NewsProductGet())
  }, [])

  return (
    <>
      <div className={styles.new_product_section}>
        <BigContainer>
          <h2 className={styles.product_title}>{t("Home.3")}</h2>
          <Row className={styles.product_row}>
            {newsproductGets.slice(0, 8).map((elem) => (
              <Col className={styles.product_col} lg={3} md={6} sm={12}>
                <NavLink to={`/product/${elem.id}`}>
                  <CommonCard
                    title={LanguValue() === "ru" ? (
                      elem.title_ru
                    ) : LanguValue() === "uz" ? (
                      elem.title_uz
                    ) : LanguValue() === "en" ? (
                      elem.title_en
                    ) : (
                      elem.title_ru
                    )}
                    coverImg={elem.image}
                    style={{
                      width: "100%",
                      borderRadius: "15px"
                    }}
                  />
                </NavLink>
              </Col>
            ))}
          </Row>
        </BigContainer>
      </div >
    </>
  );
};

export default NewProduct;
