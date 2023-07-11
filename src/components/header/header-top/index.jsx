import React, { useEffect } from "react";
import styles from "./style.module.css";
import { BigContainer } from "../../../style-app";
import { Row, Col } from "react-grid-system";
import Logo from "../../../assets/header/workwearlogo.png";
import LanguageHeader from "../header-language";
import MenuComponent from "../menu";
import { NavLink } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { CategoryGet } from "../../../redux/category/index";
import { useTranslation } from "react-i18next";
import "./style.css";

const HeaderTop = () => {
  const { t } = useTranslation();
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

  const dispatch = useDispatch()
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }

  const categoryGets = useSelector((state) => state.category.categoryGet?.data)
  useEffect(() => {
    dispatch(CategoryGet())
  }, [])

  const items = [];

  categoryGets.map(elem => (
    items.push({
      label: <NavLink to={`/catalog/${elem.id}`}>
        {LanguValue() === "ru" ? (
          elem.title_ru
        ) : LanguValue() === "uz" ? (
          elem.title_uz
        ) : LanguValue() === "en" ? (
          elem.title_en
        ) : (
          elem.title_ru
        )}
      </NavLink>,
      key: elem.id,
    })
  ))
  return (
    <>
      <div className="headertop_section_mobile">
        <BigContainer>
          <Row className="headerrow">
            <Col className="headercol_mobile" lg={12} md={12}>
              <div className="header_top_lang_mobile">
                <div className="contant_links_mobile">
                  <p>
                    <a href="tel:+998(93)570 75 85">+998 (93) 570 75 85</a>
                    <br />
                    <a className="nones" href="tel:+998(98)127 29 60">+998 (98) 127 29 60</a>
                  </p>
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
            <Col className="headercol drop_boxx">
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a>
                  <Space>
                    <i class="bx bxs-category-alt"></i>
                  </Space>
                </a>
              </Dropdown>
            </Col>
            <Col className="headercol">
              <NavLink to="/">
                <img className="header_logo" src={Logo} alt="" />
              </NavLink>
            </Col>
            <Col className="headercol">
              <div className="header_top_lang">
                <div className="contant_links">
                  <p>
                    <a href="tel:+998(93)570 75 85">+998 (93) 570 75 85</a>
                    <br />
                    <a href="tel:+998(98)127 29 60">+998 (98) 127 29 60</a>
                  </p>
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
