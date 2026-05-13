"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import t1 from "@/assets/images/figma/about/timeline-1.png";
import t2 from "@/assets/images/figma/about/timeline-2.png";
import t3 from "@/assets/images/figma/about/timeline-3.png";

const STEPS = [
  {
    year: "2012",
    title: "Khởi nguồn đam mê",
    desc: "Thành lập Công ty TNHH Sản xuất Nội thất & Thương mại Minh Phú. Bắt đầu hành trình từ một xưởng sản xuất nhỏ với khát vọng lớn.",
  },
  {
    year: "2015",
    title: "Mở rộng quy mô",
    desc: "Đầu tư máy móc, chuẩn hóa quy trình sản xuất, trở thành đối tác tin cậy của nhiều kiến trúc sư.",
  },
  {
    year: "2018",
    title: "Khẳng định thương hiệu",
    desc: "Mở rộng nhà xưởng, phát triển đội ngũ nghệ nhân may đo bậc thầy.",
  },
  {
    year: "2022",
    title: "Chuyển đổi công nghệ",
    desc: "Ứng dụng dây chuyền CNC hiện đại, nâng cao độ chuẩn xác trên từng sản phẩm.",
  },
  {
    year: "2024",
    title: "Vươn tầm sản xuất",
    desc: "Hoàn thiện nhà máy 8.000m² vận hành song song, đảm bảo năng lực cung ứng quy mô lớn.",
  },
  {
    year: "2026",
    title: "Hệ sinh thái nội thất",
    desc: "Hướng tới hệ sinh thái Sạch – Sang – Bền vững, đồng hành cùng hàng nghìn kiến trúc sư trên toàn quốc.",
  },
];

function Milestones() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  return (
    <section className="about-mile">
      <div className="about-mile__inner my-container">
        <motion.div
          className="about-mile__head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-mile__eyebrow">Về chúng tôi</span>
          <h2 className="about-mile__title">Hành trình phát triển</h2>
        </motion.div>

        <div className="about-mile__timeline">
          {STEPS.map((s, idx) => (
            <button
              key={s.year}
              className={`about-mile__node ${idx === active ? "is-active" : ""}`}
              onClick={() => setActive(idx)}
            >
              <span className="about-mile__diamond" />
              <span className="about-mile__year">{s.year}</span>
            </button>
          ))}
        </div>

        <div className="about-mile__body">
          <div className="about-mile__content">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.year}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <span className="about-mile__big-year">{step.year}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="about-mile__media">
            <img className="m1" src={t1.src} alt="Cột mốc Minh Phú" />
            <img className="m2" src={t2.src} alt="Cột mốc Minh Phú" />
            <img className="m3" src={t3.src} alt="Cột mốc Minh Phú" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Milestones;
