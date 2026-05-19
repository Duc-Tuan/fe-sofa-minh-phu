"use client";

import React from "react";
import { motion } from "framer-motion";
import sofa from "@/assets/images/figma/manufacture/cta-sofa.png";

function Cta() {
  return (
    <section className="manuf-cta">
      <div
        className="manuf-cta__bg"
        style={{ backgroundImage: `url(${sofa.src})` }}
      >
        <div className="manuf-cta__overlay" />
      </div>

      <motion.div
        className="manuf-cta__content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <span className="manuf-cta__eyebrow">CÓ DỰ ÁN CẦN TRIỂN KHAI?</span>
        <h2 className="manuf-cta__title">
          Hãy để năng lực của chúng tôi<br />
          hiện thực hóa ý tưởng của bạn
        </h2>
        <div className="manuf-cta__actions">
          <a className="manuf-cta__btn manuf-cta__btn--alt" href="tel:0925362828">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M3 4.5a1.5 1.5 0 011.5-1.5h2.07c.35 0 .67.21.79.54l1.16 3.06c.13.35.05.74-.2.99l-1.4 1.4a11 11 0 005.4 5.4l1.4-1.4c.25-.25.64-.33.99-.2l3.06 1.16c.33.12.54.44.54.79V17.5A1.5 1.5 0 0116.5 19h-1.5C8.83 19 3 13.17 3 7V4.5z"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <span>
              <em>Hotline:</em> 0925.36.28.28
            </span>
          </a>
          <a className="manuf-cta__btn" href="#contact">
            Đăng ký tư vấn
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 11L11 3M11 3H5M11 3v6"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Cta;
