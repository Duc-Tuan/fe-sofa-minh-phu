"use client";

import React from "react";
import { motion } from "framer-motion";
import v1 from "@/assets/images/figma/about/villa-1.png";
import v2 from "@/assets/images/figma/about/villa-2.png";
import v3 from "@/assets/images/figma/about/villa-3.png";
import v4 from "@/assets/images/figma/about/villa-4.png";

const COLS = [
  {
    title: "Đối tác chiến lược của KTS",
    desc: "Chúng tôi không chỉ gia công, chúng tôi tư vấn giải pháp kết cấu, giúp KTS xử lý những chi tiết khó nhất mà xưởng nhỏ không làm được.",
  },
  {
    title: "Khả năng cung ứng dự án",
    desc: "Năng lực sản xuất quy mô lớn, tiến độ chuẩn xác, sẵn sàng đồng hành cùng các công trình biệt thự, khách sạn cao cấp.",
  },
];

function Partners() {
  return (
    <section className="about-partners">
      <div className="about-partners__inner my-container">
        <motion.div
          className="about-partners__text"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-partners__eyebrow">Năng lực đối tác</span>
          <h2 className="about-partners__title">Đồng hành cùng những người kiến tạo</h2>
          <div className="about-partners__cols">
            {COLS.map((c) => (
              <div key={c.title} className="about-partners__col">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about-partners__gallery"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img className="g1" src={v3.src} alt="Dự án biệt thự" />
          <img className="g2" src={v2.src} alt="Dự án nội thất" />
          <img className="g3" src={v1.src} alt="Dự án cao cấp" />
          <img className="g4" src={v4.src} alt="Dự án khách sạn" />
        </motion.div>
      </div>
    </section>
  );
}

export default Partners;
