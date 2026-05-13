"use client";

import React from "react";
import { motion } from "framer-motion";
import Icon from "@/assets/icon";

const CARDS = [
  {
    icon: "icon-choose-us-1",
    title: "Trung thực tuyệt đối",
    desc: "Minh bạch vật liệu, đúng nguồn gốc, chuẩn xác 100% bản vẽ kỹ thuật.",
  },
  {
    icon: "icon-choose-us-2",
    title: "Kỹ nghệ bậc thầy",
    desc: "Hội tụ công nghệ và bàn tay nghệ nhân, tinh tế từng đường kim.",
  },
  {
    icon: "icon-choose-us-3",
    title: "Cá nhân hóa độc bản",
    desc: "Thấu hiểu ý tưởng riêng biệt, kiến tạo trải nghiệm duy nhất cho gia chủ.",
  },
  {
    icon: "icon-choose-us-4",
    title: "Sản xuất thông minh",
    desc: "Cải tiến công nghệ, tối ưu quy trình, hướng tới sản xuất xanh bền vững.",
  },
];

function CoreValues() {
  return (
    <section className="about-core">
      <div className="about-core__inner my-container">
        <motion.div
          className="about-core__head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-core__eyebrow">Giá trị cốt lõi</span>
          <h2 className="about-core__title">Nền tảng niềm tin – bản lĩnh thực thi</h2>
        </motion.div>

        <div className="about-core__grid">
          {CARDS.map((c, idx) => (
            <motion.article
              key={c.title}
              className="about-core__card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <span className="about-core__card-icon">
                <Icon name={c.icon} />
              </span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
