"use client";

import React from "react";
import { motion } from "framer-motion";

interface Pillar {
  index: string;
  label: string;
  desc: string;
}

const pillars: Pillar[] = [
  {
    index: "01",
    label: "Nghiên cứu công nghệ",
    desc: "Đầu tư hệ thống máy cắt tự động CNC giúp tối ưu hóa vật liệu, giảm thiểu 25% rác thải công nghiệp.",
  },
  {
    index: "02",
    label: "Vật liệu sinh học",
    desc: "Ưu tiên nguồn nguyên liệu sạch, có chứng nhận, an toàn cho sức khỏe người dùng và môi trường.",
  },
  {
    index: "03",
    label: 'Sofa "Sạch"',
    desc: "Sản phẩm đạt chuẩn phát thải thấp, kết hợp công nghệ và bàn tay nghệ nhân để bền vững theo thời gian.",
  },
];

function Sustainability() {
  return (
    <section className="about-sustainability my-container">
      <div className="about-sustainability__head">
        <span className="about-sustainability__eyebrow">R&D & Sống xanh</span>
        <h2 className="about-sustainability__title">
          CẢI TIẾN VÌ SỨC KHỎE CỘNG ĐỒNG
        </h2>
      </div>

      <div className="about-sustainability__body">
        <p className="about-sustainability__desc">
          Minh Phú tối ưu hóa vật liệu và công nghệ để giảm phát thải, ưu tiên
          nguồn nguyên liệu sạch, an toàn cho sức khỏe. Mỗi kiệt tác là sự kết
          hợp giữa tư duy đổi mới và trách nhiệm môi trường, hướng tới hệ sinh
          thái nội thất: Sạch – Sang – Bền vững.
        </p>

        <div className="about-sustainability__pillars">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.index}
              className="about-sustainability__pillar"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <span className="about-sustainability__pillar-number">{p.index}</span>
              <span className="about-sustainability__pillar-label">{p.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="about-sustainability__detail">
          <span className="about-sustainability__detail-label">
            Nghiên cứu công nghệ
          </span>
          <p>{pillars[0].desc}</p>
        </div>
      </div>
    </section>
  );
}

export default Sustainability;
