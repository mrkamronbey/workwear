import React from "react";
import HeroCommon from "../../common/hero";
import { useTranslation } from "react-i18next";

import HomeHeroImg from '../../../assets/home/home-hero-img.png'

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeroCommon
        heroTitle={t("Home.0")}
        heroText={t("Home.1")}
        isBtn={false}
        heroBtn={<button>{t("Home.2")}</button>}
        heroImg={HomeHeroImg}
      />
    </>
  );
};

export default Hero;
