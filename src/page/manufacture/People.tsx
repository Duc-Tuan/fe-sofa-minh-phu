"use client";

import React from "react";
import { motion } from "framer-motion";

interface PeopleStat {
  value: string;
  label: string;
  desc: string;
}

const items: PeopleStat[] = [
  {
    value: "20+",
    label: "Chuyên viên tư vấn",
    desc: "Thấu hiểu khách hàng, đưa ra giải pháp kỹ thuật tối ưu nhất.",
  },
  {
    value: "100+",
    label: "Nghệ nhân & Thợ lành nghề",
    desc: "14+ năm kinh nghiệm, am hiểu sâu sắc kết cấu và vật liệu.",
  },
  {
    value: "Kỹ sư",
    label: "Thiết kế & Kỹ thuật",
    desc: "Những người chuyển hóa bản vẽ 3D thành kiệt tác thực tế.",
  },
];

function People() {
  return (
    <section className="manuf-people my-container">
      <div className="manuf-people__head">
        <span className="manuf-people__eyebrow">CON NGƯỜI MINH PHÚ</span>
        <h2 className="manuf-people__title">
          Mỗi sản phẩm không chỉ được làm bằng máy móc, <br /> mà còn được “thổi hồn” bởi sự tận tâm.
        </h2>
      </div>

      <div className="manuf-people__grid">
        {items.map((it, idx) => (
          <motion.article
            key={it.label}
            className="manuf-people__card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="manuf-people__card-top">
              <strong className="manuf-people__card-value">{it.value}</strong>
              <span className="manuf-people__card-label">{it.label}</span>
            </div>
            <span className="manuf-people__card-divider" />
            <p className="manuf-people__card-desc">{it.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default People;
