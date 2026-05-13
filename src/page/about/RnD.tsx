"use client";

import React from "react";
import { motion } from "framer-motion";

const CARDS = [
  {
    no: "01",
    title: "Nghiên cứu công nghệ",
    desc: "Đầu tư hệ thống máy cắt tự động CNC giúp tối ưu hóa vật liệu, giảm thiểu 25% rác thải công nghiệp.",
  },
  {
    no: "02",
    title: "Vật liệu sinh học",
    desc: "Ưu tiên nguồn nguyên liệu thân thiện môi trường, an toàn cho sức khỏe người sử dụng.",
  },
  {
    no: "03",
    title: 'Sofa "Sạch"',
    desc: "Quy trình sản xuất kiểm soát phát thải, hướng tới không gian sống xanh, an toàn.",
  },
];

function RnD() {
  return (
    <section className="about-rnd">
      <div className="about-rnd__inner my-container">
        <motion.div
          className="about-rnd__head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-rnd__eyebrow">R&D & Sống xanh</span>
          <h2 className="about-rnd__title">Cải tiến vì sức khỏe cộng đồng</h2>
          <p className="about-rnd__lead">
            Minh Phú tối ưu vật liệu và công nghệ để giảm thải, ưu tiên nguồn nguyên liệu sạch, an
            toàn cho sức khỏe. Mỗi kiệt tác là sự kết hợp giữa tư duy đổi mới và trách nhiệm môi
            trường, hướng tới hệ sinh thái nội thất: Sạch – Sang – Bền vững.
          </p>
        </motion.div>

        <div className="about-rnd__grid">
          {CARDS.map((c, idx) => (
            <motion.article
              key={c.no}
              className="about-rnd__card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
            >
              <span className="about-rnd__card-no">{c.no}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RnD;
