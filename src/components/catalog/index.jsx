import React, { useEffect } from "react";
import styles from "./style.module.css";
import { BigContainer } from "../../style-app";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-grid-system";
import CommonCard from "../common/common-card";
import "./style.css";
import { useParams } from "react-router-dom";
import RequestComponent from "../request";
import { useDispatch, useSelector } from "react-redux";
import { CategoryGet } from "../../redux/category/index";


import productimg from "../../assets/newproduct/productimg.png";
import { NavLink } from "react-router-dom";

const CatalogComponent = () => {
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }
  const { t } = useTranslation();
  const { id } = useParams()
  const dispatch = useDispatch()

  const categoryGets = useSelector((state) => state.category.categoryGet?.data)
  const findData = categoryGets.filter(elem => elem.id == id)
  useEffect(() => {
    dispatch(CategoryGet())
  }, [])

  return (
    <>
      <div className={styles.catalog_section}>
        <BigContainer>
          <h2 className={styles.catalog_title}>{t("Home.3")}</h2>
          <Row className={styles.catalog_row}>
            {
              findData.map(elem => elem.products.map(el => (
                <Col className={styles.catalog_col} lg={3} md={6} sm={12}>
                  <NavLink to={`/product/${el.id}`}>
                    <CommonCard
                      title={LanguValue() === "ru" ? (
                        el.title_ru
                      ) : LanguValue() === "uz" ? (
                        el.title_uz
                      ) : LanguValue() === "en" ? (
                        el.title_en
                      ) : (
                        el.title_ru
                      )}
                      coverImg={el.image}
                      style={{
                        width: "100%",
                        borderRadius: "15px",
                      }}
                    />
                  </NavLink>
                </Col>
              )))
            }
          </Row>
        </BigContainer>
      </div>
      <RequestComponent />
    </>
  );
};

export default CatalogComponent;
