import React from "react";
import "./style.css";
import styles from './style.module.css'
import { Collapse, Space } from "antd";
import { useTranslation } from "react-i18next";

const Collapses = () => {
  const { t } = useTranslation()
  return (
    <>
      <Space direction="vertical" className={styles.infor_space}>
        <Collapse
          collapsible="header"
          defaultActiveKey={["1"]}
          items={[
            {
              key: "1",
              label: t("Custumer.8"),
              children: (
                <div className={styles.accor_content}>
                  <h4>{t("Custumer.9")}</h4>
                  <ul>
                    <li>{t("Custumer.10")}</li>
                    <li>{t("Custumer.21")}</li>
                    <li>{t("Custumer.11")}</li>
                    <li>{t("Custumer.22")}</li>
                    <p className="variant">{t("Custumer.33")}</p>
                    <p className="variant">{t("Custumer.34")}</p>
                    <li>{t("Custumer.12")}</li>
                    <li>{t("Custumer.23")}</li>
                    <li>{t("Custumer.24")}</li>
                  </ul>
                </div>
              ),
            },
          ]}
        />
        <Collapse
          collapsible="header"
          items={[
            {
              key: "1",
              label: t("Custumer.13"),
              children: (
                <div className={styles.accor_content}>
                  <ul>
                    <li>{t("Custumer.25")}</li>
                    <li>{t("Custumer.26")}</li>
                  </ul>
                </div>
              ),
            },
          ]}
        />
        <Collapse
          items={[
            {
              key: "1",
              label: t("Custumer.14"),
              children: (
                <div className={styles.accor_content}>
                  <ul>
                    <li>{t("Custumer.28")}</li>
                    <li>{t("Custumer.29")}</li>
                    <li>{t("Custumer.27")}</li>
                    <li>{t("Custumer.30")}</li>
                  </ul>
                </div>
              ),
            },
          ]}
          collapsible="header"
        />
        <Collapse
          collapsible="header"
          items={[
            {
              key: "1",
              label: t("Custumer.15"),
              children: (
                <div className={styles.accor_content}>
                  <ul>
                    <li>{t("Custumer.31")}</li>
                    <li>{t("Custumer.32")}</li>
                  </ul>
                </div>
              ),
            },
          ]}
        />
      </Space>
    </>
  );
};

export default Collapses;
