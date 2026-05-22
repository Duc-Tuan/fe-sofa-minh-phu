"use client";

import React from "react";
import { motion } from "framer-motion";
import bg from "@/assets/images/figma/about/mission-bg.png";
import Icon from "@/assets/icon";

const ITEMS = [
  {
    title: "Hiện thực hóa bản vẽ độc bản:",
    desc: 'Là "cánh tay nối dài" biến mọi ý tưởng táo bạo trên giấy thành kiệt tác hiện hữu.',
    offset: 0,
    icon: "icon-mission-1",
  },
  {
    title: "Nâng tầm trải nghiệm:",
    desc: "Tạo ra những di sản bền bỉ, tối ưu hóa công năng và thẩm mỹ cho gia chủ.",
    offset: 1,
    icon: "icon-mission-2",
  },
  {
    title: "Trách nhiệm môi trường:",
    desc: 'Nghiên cứu, cải tiến máy móc để giảm thải, hướng tới không gian sống "Xanh", an toàn.',
    offset: 1,
    icon: "icon-mission-3",
  },
  {
    title: "Phát huy giá trị con người:",
    desc: 'Kết hợp bàn tay nghệ nhân với tư duy công nghệ để giữ nguyên "linh hồn" sản phẩm từ bản vẽ 3D.',
    offset: 0,
    icon: "icon-mission-4",
  },
];

function Mission() {
  return (
    <section className="about-mission">
      <div className="about-mission__bg" aria-hidden>
        <img src={bg.src} alt="" />
        <div className="about-mission__bg-overlay" />
      </div>

      <div className="about-mission__inner my-container">
        <motion.div
          className="about-mission__head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-mission__eyebrow">SỨ MỆNH</span>
          <h2 className="about-mission__title">
            KIẾN TẠO CHUẨN MỰC SẢN XUẤT
            <br />
            ĐỒNG HÀNH CÙNG NHỮNG Ý TƯỞNG LỚN
          </h2>
        </motion.div>

        <div className="about-mission__list-wrap">
          <div className="about-mission__connector">
            <Icon name="icon-circle" />
          </div>
          <div className="about-mission__list">
            {ITEMS.map((it, idx) => (
              <motion.div
                className="about-mission__item-content"
                key={it.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="svg">
                  <Icon name={it.icon} />
                </div>
                <div
                  className={`about-mission__item about-mission__item--off-${it.offset}`}
                >
                  <h3>{it.title}</h3>
                  <p>{it.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
