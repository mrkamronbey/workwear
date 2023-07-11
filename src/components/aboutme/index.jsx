import React from "react";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";
import HeroCommon from "../common/hero/index";
import RequestComponent from "../request/index";
import AboutSecond from "./about-second";
import AboutCard from "./about-card";
import AboutDifferens from "./about-differens";
import AboutSlider from "./about-slider";
import PartnerSlider from '../home/partner-slider/index'

import AboutHeroImg from "../../assets/home/home-hero-img.png";

const AboutComponent = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeroCommon
        heroImg={AboutHeroImg}
        heroTitle={t("AboutMe.0")}
        heroText={t("AboutMe.1")}
        heroBtn={t("AboutMe.2")}
        isBtn={true}
      />
      <AboutSecond />
      <AboutCard />
      <AboutDifferens />
      <PartnerSlider />
      <RequestComponent />
    </>
  );
};

export default AboutComponent;
