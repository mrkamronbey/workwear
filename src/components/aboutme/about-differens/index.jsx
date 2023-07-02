import React from "react";
import styles from "./style.module.css";
import { BigContainer } from "../../../style-app";
import { useTranslation } from "react-i18next";

const AboutDifferens = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.about_differens_section}>
        <BigContainer>
          <h4 className={styles.about_differens_title}>{t("AboutMe.14")}</h4>
          <div className={styles.about_list_wrapp}>
            <ol className={styles.about_list}>
              <li>{t("AboutMe.15")}</li>
              <li>{t("AboutMe.16")}</li>
              <li>{t("AboutMe.17")}</li>
              <li>{t("AboutMe.18")}</li>
              <li>{t("AboutMe.19")}</li>
              <li>{t("AboutMe.20")}</li>
              <li>{t("AboutMe.21")}</li>
              <li>{t("AboutMe.22")}</li>
              <li>{t("AboutMe.23")}</li>
              <li>{t("AboutMe.24")}</li>
              <li>{t("AboutMe.25")}</li>
              <li>{t("AboutMe.26")}</li>
              <li>{t("AboutMe.27")}</li>
              <li>{t("AboutMe.28")}</li>
              <li>{t("AboutMe.29")}</li>
              <li>{t("AboutMe.30")}</li>
              <li>{t("AboutMe.31")}</li>
              <li>{t("AboutMe.32")}</li>
              <li>{t("AboutMe.33")}</li>
              <li>{t("AboutMe.34")}</li>
              <li>{t("AboutMe.35")}</li>
              <li>{t("AboutMe.36")}</li>
            </ol>
          </div>
        </BigContainer>
      </div>
    </>
  );
};

export default AboutDifferens;
