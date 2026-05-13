"use client";

import React from "react";
import { motion } from "framer-motion";
import img1 from "@/assets/images/figma/home/capacity-1.png";
import img2 from "@/assets/images/figma/home/capacity-2.png";
import img3 from "@/assets/images/figma/home/capacity-3.png";
import img4 from "@/assets/images/figma/home/capacity-4.png";

const CARDS = [
  {
    no: "01",
    img: img1,
    title: "Khởi tạo nền tảng chế tác độc bản",
    desc: "Duy trì các giá trị thủ công cốt lõi làm nền tảng để hiện thực hóa mọi ý tưởng thiết kế riêng biệt.",
  },
  {
    no: "02",
    img: img2,
    title: "Sáng tạo không giới hạn",
    desc: "Phá vỡ các khuôn mẫu đại trà, không ngừng tìm kiếm giải pháp thẩm mỹ mới cho không gian sống đẳng cấp.",
  },
  {
    no: "03",
    img: img3,
    title: "Đổi mới công nghệ chế tác",
    desc: "Ứng dụng kỹ thuật số và dây chuyền hiện đại vào quy trình may đo để đạt độ chuẩn xác tuyệt đối trên từng sản phẩm.",
  },
  {
    no: "04",
    img: img4,
    title: "Vươn tầm hợp tác chiến lược",
    desc: "Thiết lập mối quan hệ bền vững với các đối tác kiến trúc sư, cùng kiến tạo những công trình nội thất biểu tượng.",
  },
];

function Future() {
  return (
    <section className="about-future">
      <div className="about-future__inner my-container">
        <motion.div
          className="about-future__head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-future__eyebrow">Định hướng phát triển</span>
          <h2 className="about-future__title">Vươn tầm và sáng tạo</h2>
        </motion.div>

        <div className="about-future__grid">
          {CARDS.map((c, idx) => (
            <motion.article
              key={c.no}
              className="about-future__card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
            >
              <div className="about-future__card-img">
                <img src={c.img.src} alt={c.title} />
              </div>
              <div className="about-future__card-meta">
                <span className="about-future__card-no">{c.no}</span>
                <span className="about-future__card-dot" />
                <h3>{c.title}</h3>
              </div>
              <p className="about-future__card-desc">{c.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Future;
