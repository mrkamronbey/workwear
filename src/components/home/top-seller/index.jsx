import React, { useEffect } from "react";
import styles from "./style.module.css";
import { BigContainer } from "../../../style-app";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-grid-system";
import CommonCard from "../../common/common-card";
import "./style.css";
import { ProductGet } from '../../../redux/products/index'
import { useDispatch, useSelector } from "react-redux";

import productimg from "../../../assets/newproduct/productimg.png";
import { NavLink } from "react-router-dom";

const TopSeller = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const productGets = useSelector((state) => state.product.productGet?.data)

  useEffect(() => {
    dispatch(ProductGet())
  }, [])
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }
  return (
    <>
      <div className={styles.top_seller_section}>
        <BigContainer>
          <h2 className={styles.product_title}>{t("Home.5")}</h2>
          <Row className={styles.product_row}>
            {productGets.slice(0, 8).map((elem) => (
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
                      borderRadius: "15px",
                    }}
                  />
                </NavLink>
              </Col>
            ))}
          </Row>
        </BigContainer>
      </div>
    </>
  );
};

export default TopSeller;
