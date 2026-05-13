"use client";

import React from "react";
import { motion } from "framer-motion";
import w1 from "@/assets/images/figma/about/why-1.png";
import w2 from "@/assets/images/figma/about/why-2.png";
import w3 from "@/assets/images/figma/about/why-3.png";
import w4 from "@/assets/images/figma/about/why-4.png";

const CARDS = [
  {
    img: w1,
    title: "Sản xuất trực tiếp tại xưởng 8.000m²",
    desc: "Toàn bộ quy trình khép kín tại nhà máy, kiểm soát chất lượng và tối ưu chi phí cho gia chủ.",
  },
  {
    img: w2,
    title: 'Bậc thầy "May đo" độc bản',
    desc: "Chuyên môn hóa việc hiện thực hóa 100% bản vẽ thiết kế của KTS, cá nhân hóa từng chi tiết theo yêu cầu riêng biệt.",
  },
  {
    img: w3,
    title: "Nguyên liệu cao cấp, minh bạch",
    desc: "Cam kết chỉ sử dụng khung gỗ tự nhiên, mút cao cấp và da/vải nhập khẩu chính hãng, có nguồn gốc rõ ràng.",
  },
  {
    img: w4,
    title: "Kỹ nghệ từ đội ngũ 14+ năm kinh nghiệm",
    desc: "Sở hữu những nghệ nhân am hiểu sâu sắc về cấu trúc sofa, đảm bảo độ bền vững và trải nghiệm ngồi êm ái nhất.",
  },
  {
    img: w1,
    title: "Tiến độ chuẩn xác",
    desc: "Cam kết bàn giao đúng thời hạn, đảm bảo tính chuyên nghiệp và sự an tâm tuyệt đối cho mọi dự án.",
  },
];

function WhyUs() {
  return (
    <section className="about-why">
      <div className="about-why__inner my-container">
        <motion.div
          className="about-why__head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-why__eyebrow">Về chúng tôi</span>
          <h2 className="about-why__title">Tại sao chọn Minh Phú Sofa Factory?</h2>
        </motion.div>

        <div className="about-why__grid">
          {CARDS.map((c, idx) => (
            <motion.article
              key={idx}
              className="about-why__card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <img src={c.img.src} alt={c.title} />
              <div className="about-why__card-overlay" />
              <div className="about-why__card-body">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
