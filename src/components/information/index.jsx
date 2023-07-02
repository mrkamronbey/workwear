import React from "react";
import styles from "./style.module.css";
import { BigContainer } from "../../style-app";
import HeroCommon from "../common/hero/index";
import Request from "../request/index";
import Tables from "./tables";
import Collapses from "./collapses";

import CustumerImg from "../../assets/custumer/custumer.png";
import { useTranslation } from "react-i18next";
import { Col, Row } from "react-grid-system";
import "./style.css";

const InformationComponent = () => {
  const { t } = useTranslation();
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <>
      <HeroCommon
        heroImg={CustumerImg}
        heroTitle={t("Custumer.0")}
        heroText={t("Custumer.1")}
        heroBtn={t("Custumer.2")}
        isBtn={true}
        id="request"
      />
      <div className={styles.inform_section}>
        <BigContainer>
          <div className={styles.infor_content_box}>
            <h3>{t("Custumer.3")}</h3>
            <p>{t("Custumer.4")}</p>
            <h3>{t("Custumer.5")}</h3>
            <p>{t("Custumer.6")}</p>
          </div>

          <div className={styles.infor_grid_wrap}>
            <h3>{t("Custumer.7")}</h3>
            <Row className={styles.infor_row}>
              <Col className={styles.infor_col} lg={6} md={12} sm={12}>
                <Collapses />
              </Col>
              <Col className={styles.infor_col} lg={6} md={12} sm={12}>
                <i class="bx bx-info-circle"></i>
              </Col>
            </Row>
          </div>
          <div className={styles.table_wrap}>
            <Tables />
          </div>
        </BigContainer>
      </div>
      <Request />
    </>
  );
};

export default InformationComponent;
