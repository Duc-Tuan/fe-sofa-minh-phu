"use client";

import React from "react";
import { motion } from "framer-motion";
import bg1 from "@/assets/images/figma/manufacture/trio-bg-1.png";
import bg2 from "@/assets/images/figma/manufacture/trio-bg-2.png";
import bg3 from "@/assets/images/figma/manufacture/trio-bg-3.png";

import icon1 from "@/assets/images/figma/manufacture/trio-icon-1.png";
import icon2 from "@/assets/images/figma/manufacture/trio-icon-2.png";
import icon3 from "@/assets/images/figma/manufacture/trio-icon-3.png";
import { SwiperSlide } from "swiper/react";
import SwiperOne from "@/components/swiper/swiperOne";

interface Card {
  icon: string;
  bg: string;
  eyebrow: string;
  big?: string;
  bigUnit?: string;
  bigUnitBreak?: string;
  largeTitle?: string;
  desc: string;
}

const cards: Card[] = [
  {
    icon: icon1.src,
    bg: bg1.src,
    eyebrow: "Năng suất Công nghiệp",
    big: "20.000+",
    bigUnit: "sản phẩm",
    bigUnitBreak: "/năm",
    desc: "Đáp ứng tiến độ cho mọi dự án từ dân dụng đến Resort/Khách sạn cao cấp. Khả năng tùy biến (Custom-made) không giới hạn.",
  },
  {
    icon: icon2.src,
    bg: bg2.src,
    eyebrow: "Minh chứng Uy tín:",
    big: "1.000+",
    bigUnit: "Khách hàng",
    desc: "Lời khẳng định cho chất lượng và dịch vụ hậu mãi. Đối tác chiến lược của các chủ đầu tư và đơn vị thiết kế lớn.",
  },
  {
    icon: icon3.src,
    bg: bg3.src,
    eyebrow: "Công nghệ Tiên phong:",
    largeTitle: "CNC & Sơn Khép Kín",
    desc: "Cắt khung gỗ chuẩn xác đến từng milimet. Công nghệ sơn đa lớp an toàn cho sức khỏe và bền bỉ cùng thời gian.",
  },
];

function People() {
  return (
    <section className="manuf-people">
      <div className="manuf-people__head">
        <span className="manuf-people__eyebrow">Nền tảng năng lực</span>
        <h2 className="manuf-people__title">Bộ ba “Năng lực Vượt trội”</h2>
      </div>

      <div className="manuf-people__grid my-container">
        {cards.map((c, idx) => (
          <motion.article
            key={c.eyebrow}
            className="manuf-people__card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div
              className="manuf-people__card-bg"
              style={{ backgroundImage: `url(${c.bg})` }}
            />
            <div className="manuf-people__card-shade" />
            <div className="manuf-people__card-body">
              <div className="manuf-people__card-icon">
                <img src={c.icon} alt="" />
              </div>
              <div className="manuf-people__card-text">
                <span className="manuf-people__card-eyebrow">{c.eyebrow}</span>
                {c.big && (
                  <div className="manuf-people__card-big">
                    <strong>{c.big}</strong>
                    <span>
                      {c.bigUnit}
                      {c.bigUnitBreak ? (
                        <>
                          <br />
                          {c.bigUnitBreak}
                        </>
                      ) : null}
                    </span>
                  </div>
                )}
                {c.largeTitle && (
                  <h3 className="manuf-people__card-title">{c.largeTitle}</h3>
                )}
                <span className="manuf-people__card-divider" />
                <p className="manuf-people__card-desc">{c.desc}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <SwiperOne className="manuf-people__grid--mobile manuf-people__grid my-container">
          {cards.map((c, idx) => (
            <SwiperSlide key={idx} className="manuf-people__card">
              <div
              className="manuf-people__card-bg"
              style={{ backgroundImage: `url(${c.bg})` }}
            />
            <div className="manuf-people__card-shade" />
            <div className="manuf-people__card-body">
              <div className="manuf-people__card-icon">
                <img src={c.icon} alt="" />
              </div>
              <div className="manuf-people__card-text">
                <span className="manuf-people__card-eyebrow">{c.eyebrow}</span>
                {c.big && (
                  <div className="manuf-people__card-big">
                    <strong>{c.big}</strong>
                    <span>
                      {c.bigUnit}
                      {c.bigUnitBreak ? (
                        <>
                          <br />
                          {c.bigUnitBreak}
                        </>
                      ) : null}
                    </span>
                  </div>
                )}
                {c.largeTitle && (
                  <h3 className="manuf-people__card-title">{c.largeTitle}</h3>
                )}
                <span className="manuf-people__card-divider" />
                <p className="manuf-people__card-desc">{c.desc}</p>
              </div>
            </div>
            </SwiperSlide>
          ))}
        </SwiperOne>
    </section>
  );
}

export default People;
