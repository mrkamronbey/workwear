import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { BigContainer } from "../../../style-app";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import './style.css'

import styles from "./style.module.css";

import partner1 from "../../../assets/partner/partner1.png";
import partner2 from "../../../assets/partner/partner2.png";
import partner3 from "../../../assets/partner/partner3.png";
import partner4 from "../../../assets/partner/partner4.png";
import partner5 from "../../../assets/partner/partner5.png";
import partner6 from "../../../assets/partner/partner6.png";

const Partner = () => {
  const { t } = useTranslation();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
      <div className={styles.partner_section}>
        <BigContainer>
          <h2 className={styles.partner_title}>{t("Home.4")}</h2>
          <div>
            <Slider {...settings}>
              <div className={styles.partner_slid_div}>
                <img className={styles.partner_img} src={partner1} alt="" />
              </div>
              <div className={styles.partner_slid_div}>
                <img className={styles.partner_img} src={partner2} alt="" />
              </div>
              <div className={styles.partner_slid_div}>
                <img className={styles.partner_img} src={partner3} alt="" />
              </div>
              <div className={styles.partner_slid_div}>
                <img className={styles.partner_img} src={partner4} alt="" />
              </div>
              <div className={styles.partner_slid_div}>
                <img className={styles.partner_img} src={partner5} alt="" />
              </div>
              <div className={styles.partner_slid_div}>
                <img className={styles.partner_img} src={partner6} alt="" />
              </div>
            </Slider>
          </div>
        </BigContainer>
      </div>
    </>
  );
};

export default Partner;
