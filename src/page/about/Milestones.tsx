"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "@/assets/images/figma/home/capacity-1.png";
import img2 from "@/assets/images/figma/home/capacity-2.png";
import img3 from "@/assets/images/figma/home/capacity-3.png";
import img4 from "@/assets/images/figma/home/capacity-4.png";

interface Milestone {
  year: string;
  title: string;
  desc: string;
  image: string;
}

const milestones: Milestone[] = [
  {
    year: "2012",
    title: "Khởi nguồn đam mê",
    desc: "Thành lập Công ty TNHH Sản xuất Nội thất & Thương mại Minh Phú. Bắt đầu hành trình từ một xưởng sản xuất nhỏ với khát vọng nội thất tử tế.",
    image: img1.src,
  },
  {
    year: "2015",
    title: "Đặt nền móng",
    desc: "Mở rộng đội ngũ thợ lành nghề, hoàn thiện quy trình sản xuất chuẩn mực và xác lập tệp khách hàng cốt lõi đầu tiên.",
    image: img2.src,
  },
  {
    year: "2018",
    title: "Vươn ra dự án",
    desc: "Trở thành đối tác sản xuất tin cậy của các kiến trúc sư hàng đầu, tham gia chuỗi dự án biệt thự và khách sạn cao cấp.",
    image: img3.src,
  },
  {
    year: "2022",
    title: "Mở rộng nhà máy",
    desc: "Đầu tư hệ thống nhà máy mới với máy móc nhập khẩu hiện đại, nâng năng lực gia công lên gấp 5 lần.",
    image: img4.src,
  },
  {
    year: "2024",
    title: "Bước ngoặt 8.000m²",
    desc: "Hai nhà máy 8.000m² hoạt động song song theo quy trình khép kín, năng lực 20.000+ sản phẩm/năm.",
    image: img1.src,
  },
  {
    year: "2026",
    title: "Định vị Luxury",
    desc: "Khẳng định vị thế nhà máy sản xuất nội thất Luxury hàng đầu khu vực, tiên phong tích hợp công nghệ và bền vững.",
    image: img2.src,
  },
];

function Milestones() {
  const [active, setActive] = useState(0);
  const current = milestones[active];

  return (
    <section className="about-timeline my-container">
      <div className="about-timeline__head">
        <span className="about-timeline__eyebrow">Về chúng tôi</span>
        <h2 className="about-timeline__title">HÀNH TRÌNH PHÁT TRIỂN</h2>
      </div>

      <div className="about-timeline__rail">
        {milestones.map((m, idx) => (
          <button
            key={m.year}
            type="button"
            onClick={() => setActive(idx)}
            className={`about-timeline__node ${active === idx ? "is-active" : ""}`}
            aria-label={`Năm ${m.year}`}
          >
            <span className="about-timeline__diamond" />
            <span className="about-timeline__year">{m.year}</span>
          </button>
        ))}
      </div>

      <motion.div
        key={current.year}
        className="about-timeline__panel"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="about-timeline__panel-text">
          <h3>{current.title}</h3>
          <p>{current.desc}</p>
        </div>
        <div className="about-timeline__panel-image">
          <img src={current.image} alt={current.title} />
        </div>
      </motion.div>
    </section>
  );
}

export default Milestones;
