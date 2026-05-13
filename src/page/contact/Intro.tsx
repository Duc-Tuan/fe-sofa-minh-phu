"use client";

import React from "react";
import { motion } from "framer-motion";
import banner from "@/assets/images/figma/contact/bg-contact-3.png";
import Icon from "@/assets/icon";
import bgContact from "@/assets/images/figma/contact/contact-bg.png";

function Intro() {
  return (
    <section className="contact-intro">
      <div className="contact-intro__bg">
        <img src={bgContact.src} alt="" />
      </div>
      <div className="contact-intro__container my-container">
        <motion.div
          className="contact-intro__text"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="">

            <span className="contact-intro__eyebrow">THÔNG TIN LIÊN HỆ</span>
            <h2 className="contact-intro__title">
              CÔNG TY TNHH SẢN XUẤT NỘI THẤT <br /> VÀ THƯƠNG MẠI MINH PHÚ
            </h2>
            <div className="contact-intro__desc">
              <p>
                Minh Phú Sofa Factory chuyên sản xuất sofa và nội thất theo thiết kế, tạo ra không gian
                sống tinh tế và bền vững
              </p>
              <p>
                Với đội ngũ thợ lành nghề, chúng tôi hiểu rõ nhu cầu và gu thẩm mỹ của khách hàng, mang
                đến sản phẩm chuẩn kích thước và công năng. Minh Phú cam kết kiểm soát chất lượng chặt
                chẽ, đặt sự hài lòng của khách hàng lên hàng đầu.
              </p>
            </div>
          </div>

          <div className="contact-intro__list">
            <div className="contact-intro__list-item">
              <div className="contact-intro__list-icon">
                <Icon name="icon-phone-v2" />
              </div>
              <motion.p whileHover={{ x: 5 }} whileTap={{ x: 0 }}>0925.36.28.28</motion.p>
            </div>

            <div className="contact-intro__list-item">
              <div className="contact-intro__list-icon">
                <Icon name="icon-email-v2" />
              </div>
              <motion.p whileHover={{ x: 5 }} whileTap={{ x: 0 }}>sale@sofaminhphu.vn</motion.p>
            </div>

            <div className="contact-intro__list-item">
              <div className="contact-intro__list-icon">
                <Icon name="icon-local-v2" />
              </div>
              <motion.p whileHover={{ x: 5 }} whileTap={{ x: 0 }}>286 đường Vân Trì, xã Phúc Thịnh,<br /> TP. Hà Nội</motion.p>
            </div>

            <div className="contact-intro__list-item">
              <div className="contact-intro__list-icon">
                <Icon name="icon-facebook-v2" />
              </div>
              <motion.p whileHover={{ x: 5 }} whileTap={{ x: 0 }}>https://www.facebook.com/<br />xuongsofaminhphu/</motion.p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-intro__image"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <img src={banner.src} alt="Showroom Minh Phú" />
        </motion.div>
      </div>
    </section>
  );
}

export default Intro;
