import React, { useEffect } from "react";
import { BigContainer } from "../../../style-app";
import styles from "./style.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./style.css";
import { Dropdown, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { CategoryGet } from "../../../redux/category/index";

const HeaderBottom = () => {
  const { t } = useTranslation();
  const pathname = useLocation();
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

  console.log(pathname);
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".headerbtm_section");
    const scrollTop = window.scrollY;
    scrollTop >= 60
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  return (
    <>
      <div className="headerbtm_section">
        <BigContainer>
          <div className="navbar">
            <ul className="nav_list">
              <li>
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <a>
                    <Space>{t("Header.0")}</Space>
                  </a>
                </Dropdown>
              </li>
              <li>
                <NavLink
                  className={
                    pathname.pathname == "/services"
                      ? styles.active
                      : styles.isActvie
                  }
                  to={"/services"}
                >
                  {t("Header.1")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={
                    pathname.pathname == "/custumer"
                      ? styles.active
                      : styles.isActvie
                  }
                  to={"/custumer"}
                >
                  {t("Header.2")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={
                    pathname.pathname == "/aboutme"
                      ? styles.active
                      : styles.isActvie
                  }
                  to={"/aboutme"}
                >
                  {t("Header.3")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={
                    pathname.pathname == "/news"
                      ? styles.active
                      : styles.isActvie
                  }
                  to={"/news"}
                >
                  {t("Header.4")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={
                    pathname.pathname == "/contact"
                      ? styles.active
                      : styles.isActvie
                  }
                  to={"/contact"}
                >
                  {t("Header.5")}
                </NavLink>
              </li>
            </ul>
          </div>
        </BigContainer>
      </div>
    </>
  );
};

export default HeaderBottom;
