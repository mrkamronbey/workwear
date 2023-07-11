import React from "react";
import styles from "./style.module.css";
import {
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  IconButton,
} from "@chakra-ui/react";
import LanguageHeader from "../header-language";
import { Dropdown, Space } from "antd";

import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./style.css";
const MenuComponent = () => {
  const { t, i18n } = useTranslation();
  const items = [
    {
      label: <NavLink to="/catalog">{t("Header.0")}</NavLink>,
      key: 1,
    },
    {
      label: <NavLink to="/catalog">{t("Header.1")}</NavLink>,
      key: "2",
    },
    {
      label: <NavLink to="/catalog">{t("Header.2")}</NavLink>,
      key: "3",
    },
    {
      label: <NavLink to="/catalog">{t("Header.3")}</NavLink>,
      key: "4",
    },
    {
      label: <NavLink to="/catalog">{t("Header.4")}</NavLink>,
      key: "5",
    },
    {
      label: <NavLink to="/catalog">{t("Header.5")}</NavLink>,
      key: "6",
    },
  ];
  const pathname = useLocation();

  const handleLang = (e) => {
    const lang = e.currentTarget.id;
    i18n.changeLanguage(lang);
    window.location.reload();
  };
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          {/* <MenuItem>
            <div className={styles.menu_box}>
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a>
                  <Space>
                    <i class="bx bxs-category-alt"></i>
                    {t("Header.0")}
                  </Space>
                </a>
              </Dropdown>
            </div>
          </MenuItem> */}
          <MenuItem>
            <div className={styles.menu_box}>
              <NavLink
                className={
                  pathname.pathname == "/services"
                    ? styles.active
                    : styles.isActvie
                }
                to={"/services"}
              >
                <i class="bx bxs-server"></i>
                {t("Header.1")}
              </NavLink>
            </div>
          </MenuItem>
          <MenuItem>
            <div className={styles.menu_box}>
              <NavLink
                className={
                  pathname.pathname == "/custumer"
                    ? styles.active
                    : styles.isActvie
                }
                to={"/custumer"}
              >
                <i class="bx bxs-user-circle"></i>
                {t("Header.2")}
              </NavLink>
            </div>
          </MenuItem>
          <MenuItem>
            <div className={styles.menu_box}>
              <NavLink
                className={
                  pathname.pathname == "/aboutme"
                    ? styles.active
                    : styles.isActvie
                }
                to={"/aboutme"}
              >
                <i class="bx bxs-detail"></i>
                {t("Header.3")}
              </NavLink>
            </div>
          </MenuItem>
          <MenuItem>
            <div className={styles.menu_box}>
              <NavLink
                className={
                  pathname.pathname == "/news" ? styles.active : styles.isActvie
                }
                to={"/news"}
              >
                <i class="bx bx-news"></i>
                {t("Header.4")}
              </NavLink>
            </div>
          </MenuItem>
          <MenuItem>
            <div className={styles.menu_box}>
              <NavLink
                className={
                  pathname.pathname == "/contact"
                    ? styles.active
                    : styles.isActvie
                }
                to={"/contact"}
              >
                <i class="bx bxs-contact"></i>
                {t("Header.5")}
              </NavLink>
            </div>
          </MenuItem>
          <MenuItem>
            <div className={styles.lang_box_media}>
              <div className="lang_btn_wrapp">
                <button
                  className="ru_btn"
                  style={
                    LanguValue() === "ru"
                      ? { fontWeight: "bold", color: "#000", fontSize: "22px" }
                      : {
                          fontWeight: "bold",
                          color: "#8e8e8e",
                          fontSize: "16px",
                        }
                  }
                  onClick={handleLang}
                  id="ru"
                >
                  {t("Header.HeaderTop.0")}
                </button>
                /
                <button
                  className="en_btn"
                  style={
                    LanguValue() === "en"
                      ? { fontWeight: "bold", color: "#000", fontSize: "22px" }
                      : {
                          fontWeight: "bold",
                          color: "#8e8e8e",
                          fontSize: "16px",
                        }
                  }
                  onClick={handleLang}
                  id="en"
                >
                  {t("Header.HeaderTop.1")}
                </button>{" "}
                /
                <button
                  className="en_btn"
                  style={
                    LanguValue() === "uz"
                      ? { fontWeight: "bold", color: "#000", fontSize: "22px" }
                      : {
                          fontWeight: "bold",
                          color: "#8e8e8e",
                          fontSize: "16px",
                        }
                  }
                  onClick={handleLang}
                  id="uz"
                >
                  {t("Header.HeaderTop.2")}
                </button>
              </div>
            </div>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default MenuComponent;
