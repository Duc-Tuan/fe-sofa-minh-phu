"use client";

import React from "react";
import { motion } from "framer-motion";

const ITEMS = [
  {
    title: "Hiện thực hóa bản vẽ độc bản",
    desc: 'Là “cánh tay nối dài” biến mọi ý tưởng táo bạo trên giấy thành kiệt tác hiện hữu.',
  },
  {
    title: "Nâng tầm trải nghiệm",
    desc: "Tạo ra những di sản bền bỉ, tối ưu hóa công năng và thẩm mỹ cho gia chủ.",
  },
  {
    title: "Trách nhiệm môi trường",
    desc: 'Nghiên cứu, cải tiến máy móc để giảm thải, hướng tới không gian sống “Xanh”, an toàn.',
  },
  {
    title: "Phát huy giá trị con người",
    desc: 'Kết hợp bàn tay nghệ nhân với tư duy công nghệ để giữ nguyên “linh hồn” sản phẩm từ bản vẽ 3D.',
  },
];

function Mission() {
  return (
    <section className="about-mission">
      <div className="about-mission__inner my-container">
        <motion.div
          className="about-mission__head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-mission__eyebrow">Sứ mệnh</span>
          <h2 className="about-mission__title">
            Kiến tạo chuẩn mực sản xuất, đồng hành cùng những ý tưởng lớn
          </h2>
        </motion.div>

        <div className="about-mission__list">
          {ITEMS.map((it, idx) => (
            <motion.div
              key={it.title}
              className="about-mission__item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <span className="about-mission__dot" />
              <div>
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mission;
