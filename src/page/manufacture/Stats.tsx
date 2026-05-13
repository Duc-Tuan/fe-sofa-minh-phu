"use client";

import React from "react";
import { motion } from "framer-motion";
import banner from "@/assets/images/figma/home/capacity-2.png";

const stats = [
  { value: "30.000+", label: "Sản phẩm xuất xưởng / năm" },
  { value: "1.000+", label: "Đối tác doanh nghiệp & cá nhân" },
  { value: "20+", label: "Quốc gia có khách hàng Minh Phú" },
  { value: "100+", label: "Mẫu sofa độc bản theo bản vẽ KTS" },
];

function Stats() {
  return (
    <section className="manuf-stats">
      <div className="my-container">
        <div className="manuf-stats__head">
          <span className="manuf-stats__eyebrow">SỨC MẠNH SẢN XUẤT</span>
          <h2 className="manuf-stats__title">CON SỐ TẠO NÊN MINH PHÚ</h2>
        </div>

        <div className="manuf-stats__grid">
          <ul className="manuf-stats__list">
            {stats.map((s, idx) => (
              <motion.li
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </motion.li>
            ))}
          </ul>

          <div className="manuf-stats__image">
            <img src={banner.src} alt="Factory" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
