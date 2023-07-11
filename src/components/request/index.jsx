import React from "react";
import styles from "./style.module.css";
import { BigContainer } from "../../style-app";
import { useTranslation } from "react-i18next";
import CommonInput from "../common/common-input";
import { Col, Row } from "react-grid-system";
import { useDispatch, useSelector } from "react-redux";
import { PostContact } from "../../redux/contact";
import { useState, useEffect } from "react";
import { message } from 'antd';

const RequestComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('')
  const [disableds, setDisableds] = useState(true);
  const contactPost = useSelector((state) => state.contact);
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
      style: {
        padding: "10px 20px",
        fontSize: "16px",
        fontWeight: "500"
      },
    });
    contactPost.postContact.Success == true || contactPost.postContact.Error == false ?
      setTimeout(() => {
        messageApi.open({
          key,
          type: 'success',
          content: t("Contact.21"),
          duration: 2,
          style: {
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "500"
          }
        });
        setTimeout(() => {
          window.location.reload()
        }, 3000)
      }, 2500) : setTimeout(() => {
        messageApi.open({
          key,
          type: 'error',
          content: t("Contact.22"),
          duration: 2,
          style: {
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "500"
          }
        });
      }, 2500)
  }

  const HandleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      PostContact({
        name: name,
        phone_number: phone,
        email: email
      }),

    );
  };
  useEffect(() => {
    !phone || !name || !email ? setDisableds(true) : setDisableds(false);
  }, [phone]);

  return (
    <>
      <div id="request" className={styles.request_section}>
        <BigContainer>
          <div className={styles.content_box}>
            <h3>{t("Request.0")}</h3>
            <p>{t("Request.1")}</p>
          </div>
          <form onSubmit={HandleSubmit} className={styles.request_form}>
            <Row className={styles.request_row}>
              <Col lg={3} md={6} className={styles.request_col}>
                <CommonInput
                  onChange={(e) => setName(e.currentTarget.value)}
                  type="text"
                  placeholder={t("Request.2")}
                  required
                />
              </Col>
              <Col lg={3} md={6} className={styles.request_col}>
                <CommonInput
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  type="email"
                  placeholder={t("Request.3")}
                  required
                />
              </Col>
              <Col lg={3} md={6} className={styles.request_col}>
                <CommonInput onChange={(e) => setPhone(e.currentTarget.value)} type="tel" placeholder={t("Request.4")} required />
              </Col>
              <Col lg={3} md={6} className={styles.request_col}>
                {contextHolder}
                <button onClick={openMessage} disabled={disableds} type="submit">{t("Request.5")}</button>
              </Col>
            </Row>
          </form>
        </BigContainer>
      </div>
    </>
  );
};

export default RequestComponent;
