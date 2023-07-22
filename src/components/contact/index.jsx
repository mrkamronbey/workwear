import React from "react";
import styles from "./style.module.css";
import HeroCommon from "../common/hero/index";
import RequestComponent from "../request/index";
import { BigContainer } from "../../style-app";
import CommonInput from "../common/common-input";
import { useDispatch, useSelector } from "react-redux";
import { PostContact } from "../../redux/contact/index";
import ContactHeroImg from "../../assets/home/home-hero-img.png";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-grid-system";
import { useState, useEffect } from "react";
import { message } from 'antd';

import WeChat from '../../assets/slider/wechat.png'

const ContactComponent = () => {
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
          },
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
          },
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
      <HeroCommon
        heroImg={ContactHeroImg}
        heroTitle={t("Contact.0")}
        heroText={t("Contact.1")}
        heroBtn={t("Contact.2")}
        isBtn={true}
        id="#request"
      />
      <div id="request" className={styles.contact_section}>
        <BigContainer>
          <h4 className={styles.contact_title}>{t("Contact.3")}</h4>
          <div className={styles.contact_row_wrapp}>
            <Row className={styles.contact_row}>
              <Col className={styles.contact_col} lg={5}>
                <div className={styles.contact_col_item_bg}>
                  <div className={styles.contact_local}>
                    <h4>{t("Contact.4")}</h4>
                    <p>{t("Contact.17")}</p>
                  </div>
                  <div className={styles.contact_locals}>
                    <h4>{t("Contact.24")}</h4>
                    <p>{t("Contact.23")}</p>
                  </div>
                  <div className={styles.contact_time_box}>
                    <h4>
                      {t("Contact.5")}
                    </h4>
                    <p>08:00 - 18:00</p>
                    <h4>
                      {t("Contact.19")}
                    </h4>
                    <a href="tel:+998 (93) 570 75 85">+998 (93) 570 75 85</a>
                    <br />
                    <a href="tel:+998 (98) 127 29 60">+998 (98) 127 29 60</a>
                    <h4>
                      {t("Contact.18")}
                    </h4>
                    <a href="tel:+998 (71) 279 85 47">+998 (71) 279 85 47</a>
                    <br />
                    <a href="tel:+998 (71) 279 88 47">+998 (71) 279 88 47</a>
                  </div>
                  <div className={styles.social_box}>
                    <h4>
                      {t("Contact.20")}
                    </h4>
                    <a href="#">
                      <i
                        style={{ color: "#fff" }}
                        class="bx bxl-telegram"
                      ></i>
                      <span>Telegram</span>
                    </a>
                    <a href="#">
                      <i
                        style={{ color: "#fff" }}
                        class="bx bxl-whatsapp"
                      ></i>
                      <span>Whatsapp</span>
                    </a>
                    <a href="#">
                      {/* <i
                        style={{ color: "#fff" }}
                        class="bx bxl-linkedin-square"
                      ></i> */}
                      <img width="30px" height='30px' src={WeChat} alt="" />
                      <span>We Chat</span>
                    </a>
                  </div>
                  {/* <div className={styles.contact_inn}>
                    <ul>
                      <li>
                        <div>
                          <p>{t("Contact.6")}</p>
                        </div>
                        <div>
                          <p>86200584412</p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <p>{t("Contact.7")}</p>
                        </div>
                        <div>
                          <p>862005844</p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <p>{t("Contact.8")}</p>
                        </div>
                        <div>
                          <p>862005844</p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <p>{t("Contact.9")}</p>
                        </div>
                        <div>
                          <p>42307-920-3-0000-1-3625</p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <p>{t("Contact.10")}</p>
                        </div>
                        <div>
                          <p>301502682100000000600</p>
                        </div>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </Col>
              <Col className={styles.contact_col} lg={7}>
                <div className={styles.contact_col_item}>
                  <h4>{t("Contact.11")}</h4>
                  <form onSubmit={HandleSubmit}>
                    <div className={styles.form_box}>
                      <div className={styles.input_box}>
                        <CommonInput onChange={(e) => setName(e.target.value)} type='text' required placeholder={t("Contact.12")} />
                        <CommonInput onChange={(e) => setEmail(e.target.value)} type='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required placeholder={t("Contact.13")} />
                      </div>
                      <CommonInput onChange={(e) => setPhone(e.target.value)} type='tel' required placeholder={t("Request.4")} />
                    </div>

                    <div className={styles.btn_box}>
                      <p>{t("Contact.15")}</p>
                      {contextHolder}

                      <button onClick={openMessage} disabled={disableds} type="submit">{t("Contact.16")}</button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </div>

          <div className={styles.contact_map}>
            <iframe
              src="https://yandex.uz/map-widget/v1/?ll=69.173313%2C41.216595&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0NTcwNTQ5NTkzEmFPyrt6YmVraXN0b24sIFRvc2hrZW50IHZpbG95YXRpLCBaYW5naW90YSB0dW1hbmksIE1hZGFuaXlhdCBhaG9saSBwdW5rdGksIEFtaXIgVGVtdXIga28nY2hhc2ksIDJBIgoNvFiKQhXK3SRC&z=16.43"
              width="100%"
              height="500"
              frameborder="0"
              allowfullscreen="true"
              style={{ position: "relative" }}
            ></iframe>
          </div>
        </BigContainer>
      </div>
      {/* <RequestComponent /> */}
    </>
  );
};

export default ContactComponent;
