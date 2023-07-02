import React, { useEffect } from "react";
import styles from "./style.module.css";
import { BigContainer } from "../../../style-app";
import { Row, Col } from "react-grid-system";
import Logo from "../../../assets/header/workwearlogo.png";
import LanguageHeader from "../header-language";
import MenuComponent from "../menu";
import { NavLink } from "react-router-dom";
import "./style.css";

const HeaderTop = () => {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".headertop_section");
    const scrollTop = window.scrollY;
    scrollTop >= 60
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  return (
    <>
      <div className="headertop_section_mobile">
        <BigContainer>
          <Row className="headerrow">
            <Col className="headercol_mobile" lg={12} md={12}>
              <div className="header_top_lang_mobile">
                <div className="contant_links_mobile">
                  <a href="tel:+380 630 130 103">+380 630 130 103</a>
                </div>
                <div>
                  <LanguageHeader />
                </div>
              </div>
            </Col>
          </Row>
        </BigContainer>
      </div>
      <div className="headertop_section">
        <BigContainer>
          <Row className="headerrow">
            <Col className="headercol">
              <NavLink to="/">
                <img className="header_logo" src={Logo} alt="" />
              </NavLink>
            </Col>
            <Col className="headercol">
              <div className="header_top_lang">
                <div className="contant_links">
                  <a href="tel:+380 630 130 103">+380 630 130 103</a>
                </div>
                <div>
                  <LanguageHeader />
                </div>
              </div>
              <div className="menu_header">
                <MenuComponent />
              </div>
            </Col>
          </Row>
        </BigContainer>
      </div>
    </>
  );
};

export default HeaderTop;
