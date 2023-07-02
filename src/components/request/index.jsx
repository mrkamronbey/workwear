import React from "react";
import styles from "./style.module.css";
import { BigContainer } from "../../style-app";
import { useTranslation } from "react-i18next";
import CommonInput from "../common/common-input";
import { Col, Row } from "react-grid-system";

const RequestComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id="request" className={styles.request_section}>
        <BigContainer>
          <div className={styles.content_box}>
            <h3>{t("Request.0")}</h3>
            <p>{t("Request.1")}</p>
          </div>
          <form className={styles.request_form}>
            <Row className={styles.request_row}>
              <Col lg={3} md={6} className={styles.request_col}>
                <CommonInput
                  type="text"
                  placeholder={t("Request.2")}
                  required
                />
              </Col>
              <Col lg={3} md={6} className={styles.request_col}>
                <CommonInput
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  type="email"
                  placeholder={t("Request.3")}
                  required
                />
              </Col>
              <Col lg={3} md={6} className={styles.request_col}>
                <CommonInput type="tel" placeholder={t("Request.4")} required />
              </Col>
              <Col lg={3} md={6} className={styles.request_col}>
                <button type="submit">{t("Request.5")}</button>
              </Col>
            </Row>
          </form>
        </BigContainer>
      </div>
    </>
  );
};

export default RequestComponent;
