import React from "react";
import styles from "./style.module.css";
import { BigContainer } from "../../style-app";
import HeroCommon from "../common/hero";
import RequestComponent from "../request";
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";

import Services from "../../assets/services/services.png";
import ServiceheroImg from "../../assets/home/home-hero-img.png";
const ServicesComponent = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeroCommon
        heroImg={ServiceheroImg}
        heroTitle={t("Services.0")}
        heroText={t("Services.1")}
        heroBtn={t("Services.2")}
        isBtn={true}
      />
      <div className={styles.services_section}>
        <BigContainer>
          <Row className={styles.services_row}>
            <Col className={styles.services_col} lg={12}>
              <div>
                <h4>{t("Services.3")}</h4>
                <p>{t("Services.4")}</p>
              </div>
              <div>
                <img src={Services} alt="" />
              </div>
            </Col>
            <Col className={styles.services_col} lg={12}>
              <div>
                <img src={Services} alt="" />
              </div>
              <div>
                <h4>{t("Services.3")}</h4>
                <p>{t("Services.4")}</p>
              </div>
            </Col>
            <Col className={styles.services_col} lg={12}>
              <div>
                <h4>{t("Services.3")}</h4>
                <p>{t("Services.4")}</p>
              </div>
              <div>
                <img src={Services} alt="" />
              </div>
            </Col>
            <Col className={styles.services_col} lg={12}>
              <div>
                <img src={Services} alt="" />
              </div>
              <div>
                <h4>{t("Services.3")}</h4>
                <p>{t("Services.4")}</p>
              </div>
            </Col>
          </Row>
        </BigContainer>
      </div>
      <RequestComponent />
    </>
  );
};

export default ServicesComponent;
