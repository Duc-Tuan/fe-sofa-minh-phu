"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "@/assets/images/figma/home/capacity-1.png";
import img2 from "@/assets/images/figma/home/capacity-2.png";
import img3 from "@/assets/images/figma/home/capacity-3.png";
import img4 from "@/assets/images/figma/home/capacity-4.png";

const tabs = [
  {
    id: "design",
    title: "TƯ VẤN & THIẾT KẾ 3D",
    desc: "Đội ngũ kỹ thuật chuyển bản vẽ KTS thành mô hình 3D chính xác, đảm bảo phương án sản xuất khả thi và đúng tinh thần thiết kế.",
    image: img1.src,
  },
  {
    id: "frame",
    title: "GIA CÔNG KHUNG SOFA",
    desc: "Hệ thống máy CNC, cưa và xử lý gỗ tự động, đảm bảo từng khung được cắt – ghép – sấy đạt chuẩn về độ bền và độ chính xác.",
    image: img2.src,
  },
  {
    id: "upholstery",
    title: "BỌC NỆM & MAY VẢI",
    desc: "Phòng cắt may riêng biệt với máy may công nghiệp, đảm bảo từng đường chỉ – đường viền của bọc sofa đều ở chuẩn cao cấp.",
    image: img3.src,
  },
  {
    id: "qc",
    title: "KIỂM ĐỊNH CHẤT LƯỢNG",
    desc: "Mỗi sản phẩm trải qua nhiều bước QC trước khi xuất xưởng – kiểm tra cấu trúc, độ êm, chất liệu và tổng thể thẩm mỹ.",
    image: img4.src,
  },
];

function Capacity() {
  const [active, setActive] = useState(0);
  const cur = tabs[active];

  return (
    <section className="manuf-capacity my-container">
      <div className="manuf-capacity__head">
        <span className="manuf-capacity__eyebrow">GIẢI PHÁP TRỌN GÓI</span>
        <h2 className="manuf-capacity__title">
          NĂNG LỰC SẢN XUẤT TRỌN GÓI <br /> THEO TỪNG DỰ ÁN
        </h2>
      </div>

      <div className="manuf-capacity__body">
        <div className="manuf-capacity__tabs">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              className={`manuf-capacity__tab ${active === i ? "is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="manuf-capacity__tab-index">0{i + 1}</span>
              <span className="manuf-capacity__tab-title">{t.title}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={cur.id}
            className="manuf-capacity__panel"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="manuf-capacity__panel-image">
              <img src={cur.image} alt={cur.title} />
            </div>
            <div className="manuf-capacity__panel-content">
              <h3>{cur.title}</h3>
              <p>{cur.desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Capacity;
