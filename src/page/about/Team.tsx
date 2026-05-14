"use client";

import React from "react";
import { motion } from "framer-motion";
import bg from "@/assets/images/figma/about/about-team.png";
import bg1 from "@/assets/images/figma/about/about-team-1.png";

const LEFT_TEAMS = [
  "Tổ khung-mộc",
  "Tổ cơ khí",
  "Tổ cắt may",
  "Tổ hoàn thiện",
  "Tổ QC",
];
const RIGHT_TEAMS = [
  "P.Kinh doanh",
  "P.Thiết kế",
  "P.Marketing",
  "P.HCNS-Kế toán",
];

function Team() {
  return (
    <section className="about-team">
      <div className="about-team__inner my-container">
        <motion.div
          className="about-team__head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-team__head-left">
            <span className="about-team__eyebrow">ĐỘI NGŨ NHÂN SỰ</span>
            <h2 className="about-team__title">
              ĐỘI NGŨ NHÂN SỰ:
              <br />
              &quot;LINH HỒN&quot; CỦA NHÀ MÁY
            </h2>
          </div>
          <p className="about-team__lead">
            Với 14+ năm kinh nghiệm, đội ngũ nghệ nhân tại Minh Phú am hiểu
            tường tận mọi cấu trúc nội thất. Mỗi nhân sự là một mắt xích tâm
            huyết, tỉ mỉ trong từng đường kim mũi chỉ để tạo nên những kiệt tác
            bền vững vượt thời gian.
          </p>
        </motion.div>

        <motion.div
          className="about-team__center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <img src={bg.src} alt="" />
        </motion.div>

        <motion.div
          className="about-team__org"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <img src={bg1.src} alt="" />
        </motion.div>
      </div>
    </section>
  );
}

export default Team;
