"use client";

import React from "react";
import { motion } from "framer-motion";
import bgMission from "@/assets/images/figma/home/slide-2.png";

interface MissionItem {
  title: string;
  desc: string;
}

const items: MissionItem[] = [
  {
    title: "Hiện thực hóa bản vẽ độc bản:",
    desc: "Là “cánh tay nối dài” biến mọi ý tưởng táo bạo trên giấy thành kiệt tác hiện hữu.",
  },
  {
    title: "Nâng tầm trải nghiệm:",
    desc: "Tạo ra những di sản bền bỉ, tối ưu hóa công năng và thẩm mỹ cho gia chủ.",
  },
  {
    title: "Trách nhiệm môi trường:",
    desc: "Nghiên cứu, cải tiến máy móc để giảm thải, hướng tới không gian sống “Xanh”, an toàn.",
  },
  {
    title: "Phát huy giá trị con người:",
    desc: "Kết hợp bàn tay nghệ nhân với tư duy công nghệ để giữ nguyên “linh hồn” sản phẩm từ bản vẽ 3D.",
  },
];

function CoreValues() {
  return (
    <section className="about-mission">
      <div className="about-mission__bg">
        <img src={bgMission.src} alt="" aria-hidden="true" />
        <div className="about-mission__bg-overlay" />
      </div>

      <div className="about-mission__inner my-container">
        <div className="about-mission__head">
          <span className="about-mission__eyebrow">Sứ mệnh</span>
          <h2 className="about-mission__title">
            KIẾN TẠO CHUẨN MỰC SẢN XUẤT <br />
            ĐỒNG HÀNH CÙNG NHỮNG Ý TƯỞNG LỚN
          </h2>
        </div>

        <div className="about-mission__cards">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              className={`about-mission__card about-mission__card--${idx % 2 === 0 ? "left" : "right"}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
