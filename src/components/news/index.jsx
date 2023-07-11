import React, { useEffect } from "react";
import styles from "./style.module.css";
import { BigContainer } from "../../style-app";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-grid-system";
import CommonCard from "../common/common-card";
import "./style.css";
import HeroCommon from "../common/hero/index";
import RequestComponent from "../request/index";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NewsGet } from '../../redux/news/index'

import productimg from "../../assets/newproduct/productimg.png";
import NewsHeroImg from "../../assets/home/home-hero-img.png";
import NewsImg from "../../assets/news/news.png";

const NewsComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const newsGets = useSelector((state => state.news.newsGet?.data))

  useEffect(() => {
    dispatch(NewsGet())
  }, [])
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
            {newsGets.map((elem) => (
              <Col className={styles.news_col} lg={4} md={6} sm={12}>
                <a href={elem.link}>
                  <CommonCard
                    heading={elem.title_ru}
                    title={`${elem.description_ru.slice(0, 30)}...`}
                    coverImg={elem.image}
                    isText={true}
                    style={{
                      width: "100%",
                      borderRadius: "20px",
                    }}
                  />
                </a>
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
