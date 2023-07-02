import React from "react";
import styles from "./style.module.css";
import { BigContainer } from "../../../style-app";
import { useTranslation } from "react-i18next";
import { Col, Row } from "react-grid-system";

const AboutCard = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.about_card_section}>
        <BigContainer>
          <h2 className={styles.about_card_title}>{t("AboutMe.5")}</h2>
          <Row className={styles.about_card_row}>
            <Col className={styles.about_card_col} lg={6} md={12} sm={12}>
                <div className={styles.about_card_item}>
                    <h4>{t("AboutMe.6")}</h4>
                    <p>{t("AboutMe.7")}</p>
                </div>
            </Col>
            <Col className={styles.about_card_col} lg={6} md={12} sm={12}>
                <div className={styles.about_card_item}>
                    <h4>{t("AboutMe.8")}</h4>
                    <p>{t("AboutMe.11")}</p>
                </div>
            </Col>
            <Col className={styles.about_card_col} lg={6} md={12} sm={12}>
                <div className={styles.about_card_item}>
                    <h4>{t("AboutMe.10")}</h4>
                    <p>{t("AboutMe.11")}</p>
                </div>
            </Col>
            <Col className={styles.about_card_col} lg={6} md={12} sm={12}>
                <div className={styles.about_card_item}>
                    <h4>{t("AboutMe.12")}</h4>
                    <p>{t("AboutMe.13")}</p>
                </div>
            </Col>
          </Row>
        </BigContainer>
      </div>
    </>
  );
};

export default AboutCard;
