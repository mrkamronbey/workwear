import React from "react";
import styles from "./style.module.css";
import { BigContainer } from "../../style-app";
import HeroCommon from "../common/hero";
import RequestComponent from "../request";
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";

import Services from "../../assets/services/1.png";
import Services1 from "../../assets/services/2.png";
import Services2 from "../../assets/services/3.png";
import ServiceheroImg from "../../assets/home/home-hero-img.png";
import TermoPechat from '../../assets/termapechat.png'
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
        id='#request'
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
                <img src={TermoPechat} alt="" />
              </div>
              <div>
                <h4>{t("Services.9")}</h4>
                <p>{t("Services.10")}</p>
              </div>

            </Col>
            <Col className={styles.services_col} lg={12}>
              <div>
                <h4>{t("Services.5")}</h4>
                <p>{t("Services.6")}</p>
              </div>
              <div>
                <img src={Services1} alt="" />
              </div>
            </Col>
            <Col className={styles.services_col} lg={12}>
              <div>
                <img src={Services2} alt="" />
              </div>
              <div>
                <h4>{t("Services.7")}</h4>
                <p>{t("Services.8")}</p>
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
