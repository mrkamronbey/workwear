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

const ContactComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null)
  const [disableds, setDisableds] = useState(true);
  const contactPost = useSelector((state) => state.contact);
  const [messageApi, contextHolder] = message.useMessage();
  console.log(contactPost)
  const key = 'updatable';
  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });

    contactPost.postContact.Success == true ?
      setTimeout(() => {
        messageApi.open({
          key,
          type: 'error',
          content: 'This is an error message!',
          duration: 2,
        });
      }, 2000) : setTimeout(() => {
        messageApi.open({
          key,
          type: 'success',
          content: 'This is a success message!',
          duration: 2,
        });
      }, 2000)
  };

  // {
  //   contactPost.postContact.Success == true ? {
  //     name: name.value == '',
  //     phone: phone.value == '',
  //     email: email.value == ''
  //   } : null
  // }



  const HandleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      PostContact({
        name: name,
        phone_number: phone,
        email: email
      })
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
      />
      <div className={styles.contact_section}>
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
                  <div className={styles.contact_time_box}>
                    <h4>
                      {t("Contact.5")} <span>08:00 - 18:00</span>
                    </h4>
                    <a href="tel:+8 800 511 02 67">8 800 511 02 67</a>
                    <br />
                    <a href="tel:+8 919 046 48 49">8 919 046 48 49</a>
                  </div>
                  <div className={styles.contact_inn}>
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
                  </div>
                </div>
              </Col>
              <Col className={styles.contact_col} lg={7}>
                <div className={styles.contact_col_item}>
                  <h4>{t("Contact.11")}</h4>
                  <form onSubmit={HandleSubmit}>
                    <div className={styles.form_box}>
                      <div className={styles.input_box}>
                        <CommonInput onChange={(e) => setName(e.target.value)} type='text' required placeholder={t("Contact.12")} />
                        <CommonInput onChange={(e) => setEmail(e.target.value)} type='email' required placeholder={t("Contact.13")} />
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
              src="https://yandex.uz/map-widget/v1/?ll=64.626410%2C40.014107&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxODg2NjEwMzkxEkZPyrt6YmVraXN0b24sIEJ1eG9ybyB2aWxveWF0aSwgVm9ia2VudCB0dW1hbmksIEt1bXVzaGtlbnQgYWhvbGkgcHVua3RpIgoN70CBQhWIDiBC&sctx=ZAAAAAgBEAAaKAoSCcueBDbnUVFAERGPxMvTp0RAEhIJnZ53Y0Fh0z8RMqoM424QwT8iBgABAgMEBSgKOABAo58GSAFqAnV6nQHNzEw9oAEAqAEAvQFIGc7awgELueHomnCN79ja9ATqAQDyAQD4AQCCAgY3IGRheXOKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=64.626410%2C40.014107&sspn=0.019867%2C0.008919&text=7%20days&z=15.93"
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
