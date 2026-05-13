"use client";

import React from "react";
import { motion } from "framer-motion";
import imgGallery1 from "@/assets/images/figma/home/project-1.png";
import imgGallery2 from "@/assets/images/figma/home/project-2.png";
import imgGallery3 from "@/assets/images/figma/home/project-3.png";
import imgGallery4 from "@/assets/images/figma/home/project-4.png";

function Partnership() {
  return (
    <section className="about-partnership my-container">
      <div className="about-partnership__inner">
        <div className="about-partnership__head">
          <span className="about-partnership__eyebrow">Năng lực đối tác</span>
          <h2 className="about-partnership__title">
            ĐỒNG HÀNH CÙNG NHỮNG NGƯỜI KIẾN TẠO
          </h2>
        </div>

        <div className="about-partnership__columns">
          <motion.div
            className="about-partnership__col"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Đối tác chiến lược của KTS</h3>
            <p>
              Chúng tôi không chỉ gia công, chúng tôi tư vấn giải pháp kết cấu,
              giúp KTS xử lý những chi tiết khó nhất mà xưởng nhỏ không làm
              được.
            </p>
          </motion.div>

          <span className="about-partnership__divider" aria-hidden="true" />

          <motion.div
            className="about-partnership__col"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3>Khả năng cung ứng dự án</h3>
            <p>
              Quy mô 8.000m² nhà xưởng, năng lực 20.000+ sản phẩm/năm — sẵn sàng
              cung ứng đồng bộ cho biệt thự, khách sạn cao cấp và chuỗi dự án
              thương mại quy mô lớn.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="about-partnership__gallery" aria-hidden="true">
        <div className="about-partnership__gallery-img about-partnership__gallery-img--a">
          <img src={imgGallery1.src} alt="" />
        </div>
        <div className="about-partnership__gallery-img about-partnership__gallery-img--b">
          <img src={imgGallery2.src} alt="" />
        </div>
        <div className="about-partnership__gallery-img about-partnership__gallery-img--c">
          <img src={imgGallery3.src} alt="" />
        </div>
        <div className="about-partnership__gallery-img about-partnership__gallery-img--d">
          <img src={imgGallery4.src} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Partnership;
