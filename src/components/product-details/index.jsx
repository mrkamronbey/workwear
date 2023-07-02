import React, { useEffect } from "react";
import styles from "./style.module.css";
import { BigContainer } from "../../style-app";
import Request from "../request/index";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { ProductGet } from '../../redux/products/index'
import { useDispatch, useSelector } from "react-redux";

import productImg from "../../assets/newproduct/wear.jpg";

const ProductDetailsComponent = () => {
  const { t } = useTranslation();
  const { id } = useParams()

  const dispatch = useDispatch()
  const productGets = useSelector((state) => state.product.productGet?.data)
  const findData = productGets.filter(elem => elem.id == id)
  console.log(findData.map(elem => elem.title_ru))

  useEffect(() => {
    dispatch(ProductGet())
  }, [])
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }


  return (
    <>
      <div className={styles.product_details_section}>
        <BigContainer>
          <Row className={styles.details_row}>
            {
              findData.map(elem => (
                <>
                  <Col className={styles.details_col} lg={8} md={12} xs={12} sm={12}>
                    <div className={styles.details_wrapper}>
                      <h4>
                        <span> {LanguValue() === "ru" ? (
                          elem.title_ru
                        ) : LanguValue() === "uz" ? (
                          elem.title_uz
                        ) : LanguValue() === "en" ? (
                          elem.title_en
                        ) : (
                          elem.title_ru
                        )}</span> <br />
                        <span>{t("ProductDetails.3")}</span>
                      </h4>
                      <ul className={styles.details_list}>
                        <li>
                          <div>
                            <p>{t("ProductDetails.4")}</p>
                          </div>
                          <div>
                            <p> {LanguValue() === "ru" ? (
                              elem.product_type_ru
                            ) : LanguValue() === "uz" ? (
                              elem.product_type_uz
                            ) : LanguValue() === "en" ? (
                              elem.product_type_en
                            ) : (
                              elem.product_type_ru
                            )}</p>
                          </div>
                        </li>
                        <li>
                          <div>
                            <p>{t("ProductDetails.5")}</p>
                          </div>
                          <div>
                            <p> {LanguValue() === "ru" ? (
                              elem.contents_ru
                            ) : LanguValue() === "uz" ? (
                              elem.contents_uz
                            ) : LanguValue() === "en" ? (
                              elem.contents_en
                            ) : (
                              elem.contents_ru
                            )}</p>
                          </div>
                        </li>
                        <li>
                          <div>
                            <p>{t("ProductDetails.6")}</p>
                          </div>
                          <div>
                            <p> {LanguValue() === "ru" ? (
                              elem.destination_ru
                            ) : LanguValue() === "uz" ? (
                              elem.destination_uz
                            ) : LanguValue() === "en" ? (
                              elem.destination_en
                            ) : (
                              elem.destination_ru
                            )}</p>
                          </div>
                        </li>
                        <li>
                          <div>
                            <p>{t("ProductDetails.7")}</p>
                          </div>
                          <div>
                            <p> {LanguValue() === "ru" ? (
                              elem.color_ru
                            ) : LanguValue() === "uz" ? (
                              elem.color_uz
                            ) : LanguValue() === "en" ? (
                              elem.color_en
                            ) : (
                              elem.color_ru
                            )}</p>
                          </div>
                        </li>
                        <li>
                          <div>
                            <p>{t("ProductDetails.8")}</p>
                          </div>
                          <div>
                            <p> {LanguValue() === "ru" ? (
                              elem.main_fabric_ru
                            ) : LanguValue() === "uz" ? (
                              elem.main_fabric_uz
                            ) : LanguValue() === "en" ? (
                              elem.main_fabric_en
                            ) : (
                              elem.main_fabric_ru
                            )}</p>
                          </div>
                        </li>
                        <li>
                          <div>
                            <p>{t("ProductDetails.9")}</p>
                          </div>
                          <div>
                            <p> {elem.Compound}</p>
                          </div>
                        </li>
                        <li>
                          <div>
                            <p>{t("ProductDetails.10")}</p>
                          </div>
                          <div>
                            <p> {LanguValue() === "ru" ? (
                              elem.storage_ru
                            ) : LanguValue() === "uz" ? (
                              elem.storage_uz
                            ) : LanguValue() === "en" ? (
                              elem.storage_en
                            ) : (
                              elem.storage_ru
                            )}</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col className={styles.details_col} lg={4} md={12} xs={12} sm={12}>
                    <img src={elem.image} alt="workwearimg" />
                  </Col></>
              ))
            }

          </Row>
        </BigContainer>
      </div>
      <Request />
    </>
  );
};

export default ProductDetailsComponent;
