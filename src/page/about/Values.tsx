"use client";

import React from "react";
import { motion } from "framer-motion";

interface ValueCard {
  title: string;
  desc: string;
}

const cards: ValueCard[] = [
  {
    title: "TRUNG THỰC TUYỆT ĐỐI",
    desc: "Minh bạch vật liệu, đúng nguồn gốc, chuẩn xác 100% bản vẽ kỹ thuật",
  },
  {
    title: "KỸ NGHỆ BẬC THẦY",
    desc: "Hội tụ công nghệ và bàn tay nghệ nhân, tinh tế từng đường kim.",
  },
  {
    title: "CÁ NHÂN HÓA ĐỘC BẢN",
    desc: "Thấu hiểu ý tưởng riêng biệt, kiến tạo trải nghiệm duy nhất cho gia chủ.",
  },
  {
    title: "SẢN XUẤT THÔNG MINH",
    desc: "Cải tiến công nghệ, tối ưu quy trình, hướng tới sản xuất xanh bền vững.",
  },
];

function Values() {
  return (
    <section className="about-values my-container">
      <div className="about-values__head">
        <span className="about-values__eyebrow">Giá trị cốt lõi</span>
        <h2 className="about-values__title">
          NỀN TẢNG NIỀM TIN – BẢN LĨNH THỰC THI
        </h2>
      </div>

      <div className="about-values__grid">
        {cards.map((c, idx) => (
          <motion.article
            key={c.title}
            className="about-values__card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <span className="about-values__card-icon" aria-hidden="true">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Values;
