"use client";

import React from "react";
import { motion } from "framer-motion";
import img1 from "@/assets/images/figma/home/project-1.png";
import img2 from "@/assets/images/figma/home/project-3.png";
import img3 from "@/assets/images/figma/home/project-4.png";

const team = [
  { name: "Nguyễn Minh Phú", role: "Founder & CEO", image: img1.src },
  { name: "Trần Thị Hà", role: "Giám đốc sản xuất", image: img2.src },
  { name: "Lê Quang Huy", role: "Trưởng phòng kỹ thuật", image: img3.src },
];

function Team() {
  return (
    <section className="about-team my-container">
      <div className="about-team__head">
        <span className="about-team__eyebrow">ĐỘI NGŨ DẪN DẮT</span>
        <h2 className="about-team__title">NHỮNG NGƯỜI ĐỊNH HÌNH MINH PHÚ</h2>
      </div>

      <div className="about-team__grid">
        {team.map((m, idx) => (
          <motion.article
            key={m.name}
            className="about-team__card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="about-team__image">
              <img src={m.image} alt={m.name} />
            </div>
            <h3>{m.name}</h3>
            <p>{m.role}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Team;
