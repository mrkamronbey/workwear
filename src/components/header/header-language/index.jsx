import { useTranslation } from "react-i18next";
import { Wrapper } from "./styled-index";
import { Select } from "antd";

function LanguageHeader({}) {
  const { t, i18n } = useTranslation();
  const handleLang = (e) => {
    const lang = e.currentTarget.id;
    i18n.changeLanguage(lang);
    window.location.reload();
  };
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }

  return (
    <Wrapper>
      <div className="lang_btn_wrapp">
        <button
          style={
            LanguValue() === "ru"
              ? { fontWeight: "bold", color: "#000", fontSize: "22px" }
              : { fontWeight: "bold", color: "#8e8e8e", fontSize: "16px" }
          }
          onClick={handleLang}
          id="ru"
        >
          {t("Header.HeaderTop.0")}
        </button>
        /
        <button
          style={
            LanguValue() === "en"
              ? { fontWeight: "bold", color: "#000", fontSize: "22px" }
              : { fontWeight: "bold", color: "#8e8e8e", fontSize: "16px" }
          }
          onClick={handleLang}
          id="en"
        >
          {t("Header.HeaderTop.1")}
        </button>
        /
        <button
          style={
            LanguValue() === "uz"
              ? { fontWeight: "bold", color: "#000", fontSize: "22px" }
              : { fontWeight: "bold", color: "#8e8e8e", fontSize: "16px" }
          }
          onClick={handleLang}
          id="uz"
        >
          {t("Header.HeaderTop.2")}
        </button>
      </div>
    </Wrapper>
  );
}
export default LanguageHeader;
