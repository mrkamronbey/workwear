import React from "react";
import styles from "./style.module.css";
import { BigContainer } from "../../../style-app";
import { Row, Col } from "react-grid-system";

const HeroCommon = ({ heroTitle, heroText, heroImg, heroBtn, isBtn, id }) => {
  return (
    <>
      <div className={styles.hero_section}>
        <BigContainer>
          <Row className={styles.home_hero_row}>
            <Col className={styles.home_hero_col} lg={6} md={6} sx={12} sm={12}>
              <h2>{heroTitle}</h2>
              <p>{heroText}</p>
              {isBtn == true ? <a className={styles.hero_btn} href={id}>{heroBtn}</a> : null}
            </Col>
            <Col className={styles.home_hero_col} lg={6} md={6} sx={12} sm={12}>
              <img src={heroImg} alt="hero-img" />
            </Col>
          </Row>
        </BigContainer>
      </div>
    </>
  );
};

export default HeroCommon;
