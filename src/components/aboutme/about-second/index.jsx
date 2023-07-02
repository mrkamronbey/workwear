import React from "react";
import styles from "./style.module.css";
import { BigContainer } from "../../../style-app"; 
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";

import Services from "../../../assets/services/services.png";

const AboutSecond = () => {
    const {t} = useTranslation()
  return (
    <>
      <div className={styles.about_second_section}>
        <BigContainer>
            <Row className={styles.about_second_row}>
                <Col className={styles.about_second_col} lg={6} md={12} sm={12}>
                    <h4>{t("AboutMe.3")}</h4>
                    <p>{t("AboutMe.4")}</p>
                </Col>
                <Col className={styles.about_second_col} lg={6} md={12} sm={12}>
                   <img src={Services} alt="" />
                </Col>
            </Row>
        </BigContainer>
      </div>
    </>
  );
};

export default AboutSecond;
