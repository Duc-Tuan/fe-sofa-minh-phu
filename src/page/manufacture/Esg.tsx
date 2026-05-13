"use client";

import React from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    label: "E – ENVIRONMENTAL",
    title: "Sản xuất xanh, tối thiểu phát thải",
    desc: "Hệ thống xử lý bụi, mùn cưa và khí thải đáp ứng tiêu chuẩn môi trường. Ưu tiên nguyên liệu có nguồn gốc bền vững.",
  },
  {
    label: "S – SOCIAL",
    title: "Đầu tư con người, gắn kết cộng đồng",
    desc: "Chính sách phúc lợi, đào tạo nghề và môi trường làm việc an toàn. Tham gia các chương trình cộng đồng địa phương.",
  },
  {
    label: "G – GOVERNANCE",
    title: "Quy trình minh bạch, cam kết chất lượng",
    desc: "Hệ thống quản trị chuẩn quốc tế, dữ liệu sản xuất truy xuất rõ ràng, hợp đồng minh bạch với mọi đối tác.",
  },
];

function Esg() {
  return (
    <section className="manuf-esg">
      <span className="manuf-esg__watermark">ESG</span>
      <div className="my-container">
        <div className="manuf-esg__head">
          <span className="manuf-esg__eyebrow">PHÁT TRIỂN BỀN VỮNG</span>
          <h2 className="manuf-esg__title">CAM KẾT ESG CỦA MINH PHÚ</h2>
          <p>
            Phát triển công nghiệp đi cùng trách nhiệm với môi trường, con người và quy trình minh
            bạch là kim chỉ nam của Minh Phú trên hành trình hơn một thập kỷ.
          </p>
        </div>

        <div className="manuf-esg__grid">
          {pillars.map((p, idx) => (
            <motion.article
              key={p.label}
              className="manuf-esg__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <span>{p.label}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Esg;
