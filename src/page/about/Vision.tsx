"use client";

import React from "react";
import { motion } from "framer-motion";
import imgVision from "@/assets/images/figma/home/capacity-3.png";

function Vision() {
  return (
    <section className="about-vision">
      <div className="about-vision__inner my-container">
        <div className="about-vision__head">
          <span className="about-vision__eyebrow">Tầm nhìn</span>
          <h2 className="about-vision__title">
            NHÀ MÁY THÔNG MINH - SẢN XUẤT XANH
          </h2>
        </div>
        <p className="about-vision__desc">
          Đến năm 2030: Khẳng định vị thế Nhà máy sản xuất đồ rời số 1 miền Bắc.
          Minh Phú tiên phong hội tụ công nghệ hiện đại và kỹ nghệ di sản để
          kiến tạo hệ sinh thái bền vững và thân thiện với môi trường.
        </p>
      </div>

      <motion.div
        className="about-vision__image"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <img src={imgVision.src} alt="Nhà máy thông minh" />
      </motion.div>
    </section>
  );
}

export default Vision;
