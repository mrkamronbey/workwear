import React, { useEffect } from "react";
import { BigContainer } from "../../../style-app";
import styles from "./style.module.css";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";

import catalog1 from "../../../assets/home/catalog1.png";
import catalog2 from "../../../assets/home/catalog2.png";
import catalog3 from "../../../assets/home/catalog3.png";
import catalog4 from "../../../assets/home/catalog4.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CategoryGet } from "../../../redux/category/index";

const HomeCatalog = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const categoryGets = useSelector((state) => state.category.categoryGet?.data)
  useEffect(() => {
    dispatch(CategoryGet())
  }, [])

  return (
    <>
      <div className={styles.home_catalog_section}>
        <BigContainer>
          <div className={styles.title_box}>
            <h2>{t("Header.0")}</h2>
          </div>
          <Row className={styles.catalog_row}>
            {
              categoryGets.slice(0, 1).map(elem => (
                <Col className={styles.catalog_col} lg={7} md={12} sm={12} sx={12}>
                  <NavLink className={styles.catalog_col_box_link} to={`/catalog/${elem.id}`}>
                    <img src={elem.image} alt="catalog-img" />
                  </NavLink>
                </Col>
              ))
            }

            <Col className={styles.catalog_col} lg={5} md={12} sm={12} sx={12}>
              <Row className={styles.catalog_rows}>
                {
                  categoryGets.slice(1, 2).map(elem => (
                    <Col className={styles.catalog_cols} lg={12}>
                      <NavLink className={styles.catalog_col_box_link} to={`/catalog/${elem.id}`}>
                        <img src={elem.image} alt="catalog-img" />
                      </NavLink>
                    </Col>
                  ))
                }

                {
                  categoryGets.slice(2, 3).map(elem => (
                    <Col className={styles.catalog_cols} lg={6}>
                      <NavLink className={styles.catalog_col_box_link} to={`/catalog/${elem.id}`}>
                        <img src={elem.image} alt="catalog-img" />
                      </NavLink>
                    </Col>
                  ))
                }
                {
                  categoryGets.slice(3, 4).map(elem => (
                    <Col className={styles.catalog_cols} lg={6}>
                      <NavLink className={styles.catalog_col_box_link} to={`/catalog/${elem.id}`}>
                        <img src={elem.image} alt="catalog-img" />
                      </NavLink>
                    </Col>
                  ))
                }
              </Row>
            </Col>
          </Row>

          <Row className={styles.catalog_row_mobile}>
            {
              categoryGets.slice(0, 4).map(elem => (
                <Col
                  className={styles.catalog_col_mobile}
                  lg={6}
                  md={6}
                  sm={6}
                  sx={6}
                >
                  <NavLink className={styles.catalog_col_box_link_mobile} to={`/catalog/${elem.id}`}>
                    <img src={elem.image} alt="catalog-img" />
                  </NavLink>
                </Col>
              ))
            }

            {/* <Col
              className={styles.catalog_col_mobile}
              lg={6}
              md={6}
              sm={6}
              sx={6}
            >
              <NavLink className={styles.catalog_col_box_link_mobile}>
                <img src={catalog2} alt="catalog-img" />
              </NavLink>
            </Col>
            <Col
              className={styles.catalog_col_mobile}
              lg={6}
              md={6}
              sm={6}
              sx={6}
            >
              <NavLink className={styles.catalog_col_box_link_mobile}>
                <img src={catalog2} alt="catalog-img" />
              </NavLink>
            </Col>
            <Col
              className={styles.catalog_col_mobile}
              lg={6}
              md={6}
              sm={6}
              sx={6}
            >
              <NavLink className={styles.catalog_col_box_link_mobile}>
                <img src={catalog1} alt="catalog-img" />
              </NavLink>
            </Col> */}
          </Row>
        </BigContainer>
      </div>
    </>
  );
};

export default HomeCatalog;
