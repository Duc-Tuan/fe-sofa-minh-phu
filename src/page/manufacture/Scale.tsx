"use client";

import React from "react";
import { motion } from "framer-motion";
import imgQuote from "@/assets/images/figma/home/capacity-3.png";
import imgRight from "@/assets/images/figma/home/capacity-4.png";

interface Block {
  title: string;
  metric?: string;
  metricLabel?: string;
  segmentLabel?: string;
  desc: string;
}

const top: Block[] = [
  {
    title: "Khả năng cung ứng quy mô lớn",
    metric: "+100 tỷ",
    metricLabel: "đồ rời",
    desc: "Sản xuất 20.000+ sản phẩm/năm, linh hoạt tùy biến theo thiết kế riêng, đảm bảo độ chính xác và tiến độ dự án.",
  },
];

const bottom: Block[] = [
  {
    title: "ĐỘI NGŨ TRIỂN KHAI & GIÁM SÁT",
    segmentLabel: "Khách sạn",
    metric: "100-1000",
    metricLabel: "phòng",
    desc: "Khảo sát trực tiếp, kiểm soát chất lượng nghiêm ngặt, đảm bảo sản phẩm đạt chuẩn trước khi xuất xưởng.",
  },
  {
    title: "LOGISTICS & LẮP ĐẶT",
    segmentLabel: "Du thuyền",
    metric: "5-6 ★",
    desc: "Vận chuyển an toàn với quy trình đóng gói đạt chuẩn, kết hợp đội ngũ lắp đặt lành nghề hoàn thiện chính xác tại công trình, xử lý nhanh các phát sinh thực tế.",
  },
];

function Scale() {
  return (
    <section className="manuf-scale my-container">
      <div className="manuf-scale__head">
        <div>
          <span className="manuf-scale__eyebrow">DỊCH VỤ</span>
          <h2 className="manuf-scale__title">CAM KẾT CHẤT LƯỢNG</h2>
        </div>
        <p className="manuf-scale__intro">
          Với Minh Phú Sofa Factory, mỗi dự án không chỉ là một đơn hàng, mà là một cam kết về chất lượng và tiến độ bền vững.
        </p>
      </div>

      <div className="manuf-scale__row">
        <motion.div
          className="manuf-scale__quote"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <img src={imgQuote.src} alt="" />
        </motion.div>

        {top.map((b) => (
          <motion.div
            key={b.title}
            className="manuf-scale__card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3>{b.title}</h3>
            <div className="manuf-scale__metric">
              <strong>{b.metric}</strong>
              {b.metricLabel && <em>{b.metricLabel}</em>}
            </div>
            <p>{b.desc}</p>
          </motion.div>
        ))}

        <motion.div
          className="manuf-scale__image"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={imgRight.src} alt="" />
        </motion.div>
      </div>

      <div className="manuf-scale__row manuf-scale__row--bottom">
        {bottom.map((b, i) => (
          <motion.div
            key={b.title}
            className="manuf-scale__card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3>{b.title}</h3>
            <div className="manuf-scale__metric">
              {b.segmentLabel && <span className="segment">{b.segmentLabel}</span>}
              <strong>{b.metric}</strong>
              {b.metricLabel && <em>{b.metricLabel}</em>}
            </div>
            <p>{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Scale;
