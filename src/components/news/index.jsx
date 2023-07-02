import React from "react";
import styles from "./style.module.css";
import { BigContainer } from "../../style-app";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-grid-system";
import CommonCard from "../common/common-card";
import "./style.css";
import HeroCommon from "../common/hero/index";
import RequestComponent from "../request/index";
import { NavLink } from "react-router-dom";

import productimg from "../../assets/newproduct/productimg.png";
import NewsHeroImg from "../../assets/home/home-hero-img.png";
import NewsImg from "../../assets/news/news.png";

const NewsComponent = () => {
  const { t } = useTranslation();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <HeroCommon
        heroImg={NewsHeroImg}
        heroTitle={t("News.0")}
        heroText={t("News.1")}
        heroBtn={t("News.2")}
        isBtn={true}
      />
      <div className={styles.news_section}>
        <BigContainer>
          <h2 className={styles.news_title}>{t("News.3")}</h2>
          <Row className={styles.news_row}>
            {arr.map((_, index) => (
              <Col className={styles.news_col} lg={4} md={6} sm={12}>
                <NavLink to={"#"}>
                  <CommonCard
                    heading="Семинар Heidenhain в Брянске"
                    title="Более чем полувековые, традиции создания, изготовления и внедрения прецизионных метрологических устройств ..."
                    coverImg={NewsImg}
                    isText={true}
                    textStyle={{
                      fontFamily: "Rubik",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#686C90",
                    }}
                    headingStyle={{
                      fontFamily: "Rubik",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                      lineHeight: "24px",
                      color: "#111B51",
                      marginBottom: "0"
                    }}
                    style={{
                      width: "100%",
                      borderRadius: "15px",
                      padding: "0",
                    }}
                  />
                </NavLink>
              </Col>
            ))}
          </Row>
        </BigContainer>
      </div>
      <RequestComponent />
    </>
  );
};

export default NewsComponent;
