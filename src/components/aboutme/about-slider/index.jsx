import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import styles from "./style.module.css";
import { BigContainer } from "../../../style-app";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import './style.css'

import Slider1 from "../../../assets/slider/slider1.png";
import Slider2 from "../../../assets/slider/slider2.png";
import Slider3 from "../../../assets/slider/slider3.png";
import Slider4 from "../../../assets/slider/slider4.png";

const AboutSlider = () => {
  const { t } = useTranslation();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className={styles.about_slider_section}>
        <BigContainer>
          <div className={styles.about_slider_wrapp}>
            <p>{t("AboutMe.37")}</p>
            <h4>{t("AboutMe.38")}</h4>
            <Slider {...settings}>
              <div className={styles.slider_item}>
                <div className={styles.slider_box}>
                  <img src={Slider1} alt="" />
                  <p>{t("AboutMe.39")}</p>
                </div>
              </div>
              <div className={styles.slider_item}>
                <div className={styles.slider_box}>
                  <img src={Slider2} alt="" />
                  <p>{t("AboutMe.40")}</p>
                </div>
              </div>
              <div className={styles.slider_item}>
                <div className={styles.slider_box}>
                  <img src={Slider3} alt="" />
                  <p>{t("AboutMe.41")}</p>
                </div>
              </div>
              <div className={styles.slider_item}>
                <div className={styles.slider_box}>
                  <img src={Slider4} alt="" />
                  <p>{t("AboutMe.42")}</p>
                </div>
              </div>
              <div className={styles.slider_item}>
                <div className={styles.slider_box}>
                  <img src={Slider1} alt="" />
                  <p>{t("AboutMe.39")}</p>
                </div>
              </div>
              <div className={styles.slider_item}>
                <div className={styles.slider_box}>
                  <img src={Slider2} alt="" />
                  <p>{t("AboutMe.40")}</p>
                </div>
              </div>
              <div className={styles.slider_item}>
                <div className={styles.slider_box}>
                  <img src={Slider3} alt="" />
                  <p>{t("AboutMe.41")}</p>
                </div>
              </div>
              <div className={styles.slider_item}>
                <div className={styles.slider_box}>
                  <img src={Slider4} alt="" />
                  <p>{t("AboutMe.42")}</p>
                </div>
              </div>
            </Slider>
          </div>
        </BigContainer>
      </div>
    </>
  );
};

export default AboutSlider;
