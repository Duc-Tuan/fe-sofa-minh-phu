"use client";

import React from "react";
import { motion } from "framer-motion";
import bg1 from "@/assets/images/figma/about/core-bg-1.png";
import bg2 from "@/assets/images/figma/about/core-bg-2.png";
import bg3 from "@/assets/images/figma/about/core-bg-3.png";
import bg4 from "@/assets/images/figma/about/core-bg-4.png";
import Icon from "@/assets/icon";
import SwiperOne from "@/components/swiper/swiperOne";
import { SwiperSlide } from "swiper/react";

const CARDS = [
  {
    bg: bg1,
    icon: "icon-core-1",
    title: "TRUNG THỰC TUYỆT ĐỐI",
    desc: "Minh bạch vật liệu, đúng nguồn gốc, chuẩn xác 100% bản vẽ kỹ thuật",
  },
  {
    bg: bg2,
    icon: "icon-core-2",
    title: "KỸ NGHỆ BẬC THẦY",
    desc: "Hội tụ công nghệ và bàn tay nghệ nhân, tinh tế từng đường kim.",
  },
  {
    bg: bg3,
    icon: "icon-core-3",
    title: "CÁ NHÂN HÓA ĐỘC BẢN",
    desc: "Thấu hiểu ý tưởng riêng biệt, kiến tạo trải nghiệm duy nhất cho gia chủ.",
  },
  {
    bg: bg4,
    icon: "icon-core-4",
    title: "SẢN XUẤT THÔNG MINH",
    desc: "Cải tiến công nghệ, tối ưu quy trình, hướng tới sản xuất xanh bền vững.",
  },
];

function CoreValues() {
  return (
    <section className="about-core">
      <div className="about-core__inner">
        <motion.div
          className="about-core__head my-container"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-core__eyebrow">GIÁ TRỊ CỐT LÕI</span>
          <h2 className="about-core__title">
            NỀN TẢNG NIỀM TIN <br />
            <span>–</span> BẢN LĨNH THỰC THI
          </h2>
        </motion.div>

        <SwiperOne className="about-core__grid-mobile">
          {CARDS.map((c) => (
            <SwiperSlide key={c.title}>
              <motion.article
                className="about-core__card"
                // initial={{ opacity: 0, y: 40 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true, amount: 0.2 }}
                // transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <img
                  className="about-core__card-bg"
                  src={c.bg.src}
                  alt=""
                  aria-hidden
                />
                <div className="about-core__card-top">
                  <div className="about-core__card-icon">
                    <Icon name={c.icon} />
                  </div>
                  <h3>{c.title}</h3>
                </div>
                <p>{c.desc}</p>
              </motion.article>
            </SwiperSlide>
          ))}
        </SwiperOne>

        <div className="about-core__grid my-container">
          {CARDS.map((c, idx) => (
            <motion.article
              key={c.title}
              className="about-core__card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
            >
              <img
                className="about-core__card-bg"
                src={c.bg.src}
                alt=""
                aria-hidden
              />
              <div className="about-core__card-top">
                <div className="about-core__card-icon">
                  <Icon name={c.icon} />
                </div>
                <h3>{c.title}</h3>
              </div>
              <p>{c.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
