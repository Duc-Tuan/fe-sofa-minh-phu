"use client";

import React from "react";
import { motion } from "framer-motion";
import featured from "@/assets/images/figma/home/project-3.png";
import Button from "@/components/button/Button";

function Feature() {
  return (
    <section className="project-feature my-container">
      <motion.article
        className="project-feature__card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="project-feature__image">
          <img src={featured.src} alt="Featured" />
        </div>
        <div className="project-feature__content">
          <span className="project-feature__city">HẢI PHÒNG · 2024</span>
          <h2>NHÀ HÀNG – KHÁCH SẠN MINH ĐĂNG</h2>
          <p>
            Dự án tiêu biểu với 200+ sofa custom theo bản vẽ KTS. Toàn bộ ghế phòng chờ,
            phòng VIP và khu lounge đều được Minh Phú sản xuất và lắp đặt trong 8 tuần.
          </p>
          <div className="project-feature__cta">
            <Button title="XEM DỰ ÁN" typeIcon="cross" color="black" handleClick={() => {}} />
          </div>
        </div>
      </motion.article>
    </section>
  );
}

export default Feature;
