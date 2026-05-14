"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import t1 from "@/assets/images/figma/about/milestone-1.png";
import t2 from "@/assets/images/figma/about/milestone-2.png";
import t3 from "@/assets/images/figma/about/milestone-3.png";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";

const STEPS = [
  {
    year: "2012",
    title: "Khởi nguồn đam mê",
    desc:
      "Thành lập Công ty TNHH Sản xuất Nội thất & Thương mại Minh Phú. Bắt đầu hành trình từ một xưởng sản xuất nhỏ với khát vọng lớn.",
  },
  {
    year: "2015",
    title: "Mở rộng quy mô",
    desc: "Đầu tư máy móc, chuẩn hóa quy trình sản xuất, trở thành đối tác tin cậy của nhiều kiến trúc sư.",
  },
  {
    year: "2018",
    title: "Khẳng định thương hiệu",
    desc: "Mở rộng nhà xưởng, phát triển đội ngũ nghệ nhân may đo bậc thầy.",
  },
  {
    year: "2022",
    title: "Chuyển đổi công nghệ",
    desc: "Ứng dụng dây chuyền CNC hiện đại, nâng cao độ chuẩn xác trên từng sản phẩm.",
  },
  {
    year: "2024",
    title: "Vươn tầm sản xuất",
    desc: "Hoàn thiện nhà máy 8.000m² vận hành song song, đảm bảo năng lực cung ứng quy mô lớn.",
  },
  {
    year: "2026",
    title: "Hệ sinh thái nội thất",
    desc: "Hướng tới hệ sinh thái Sạch – Sang – Bền vững, đồng hành cùng hàng nghìn kiến trúc sư trên toàn quốc.",
  },
];

function Milestones() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  useEffect(() => {
    const id = window.setTimeout(() => {
      setActive((prev) => (prev + 1) % STEPS.length);
    }, 5000);
    return () => window.clearTimeout(id);
  }, [active]);

  return (
    <section className="about-mile">
      <div className="about-mile__inner my-container">
        <motion.div
          className="about-mile__head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-mile__eyebrow">VỀ CHÚNG TÔI</span>
          <h2 className="about-mile__title">HÀNH TRÌNH PHÁT TRIỂN</h2>
        </motion.div>

        <div className="about-mile__desktop">
          <motion.div className="about-mile__timeline" layout>
            {STEPS.map((s, idx) => (
              <React.Fragment key={s.year}>
                <motion.button
                  layout
                  transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
                  type="button"
                  className={`about-mile__node ${
                    idx === active ? "is-active" : ""
                  }`}
                  onClick={() => setActive(idx)}
                  aria-label={s.year}
                >
                  <span className="about-mile__diamond-outer">
                    <span className="about-mile__diamond" />
                  </span>
                  <span className="about-mile__year">{s.year}</span>
                </motion.button>
                {idx < STEPS.length - 1 && (
                  <motion.span
                    layout
                    transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
                    className={`about-mile__line ${
                      idx === active ? "is-flex" : ""
                    }`}
                    aria-hidden
                  />
                )}
              </React.Fragment>
            ))}
          </motion.div>

          <div className="about-mile__body">
            <div className="about-mile__content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.year}
                  initial={{ opacity: 0, x: 120 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -120 }}
                  transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
                >
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="about-mile__media">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.year}
                  className="about-mile__media-track"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="about-mile__media-group">
                    <div className="about-mile__media-cell about-mile__media-cell--tall">
                      <img src={t1.src} alt={`Cột mốc ${step.year}`} />
                    </div>
                    <div className="about-mile__media-mid">
                      <div className="about-mile__media-cell about-mile__media-mid-top">
                        <img src={t2.src} alt={`Cột mốc ${step.year}`} />
                      </div>
                      <div className="about-mile__media-cell about-mile__media-mid-bot">
                        <img src={t3.src} alt={`Cột mốc ${step.year}`} />
                      </div>
                    </div>
                  </div>
                  <div className="about-mile__media-cell about-mile__media-cell--tall">
                    <img src={t1.src} alt={`Cột mốc ${step.year}`} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="about-mile__mobile">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1.1}
            spaceBetween={0}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="about-mile__mobile-swiper"
          >
            {STEPS.map((s) => (
              <SwiperSlide key={s.year}>
                <div className="about-mile__mobile-card">
                  <div className="about-mile__mobile-rail" aria-hidden>
                    <span className="about-mile__mobile-diamond">
                      <span className="about-mile__mobile-diamond-inner" />
                    </span>
                    <span className="about-mile__mobile-line" />
                  </div>
                  <div className="about-mile__mobile-year">{s.year}</div>
                  <div className="about-mile__mobile-text">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                  <div className="about-mile__mobile-media">
                    <div className="about-mile__mobile-media-left">
                      <div className="about-mile__mobile-media-cell">
                        <img src={t2.src} alt={`Cột mốc ${s.year}`} />
                      </div>
                      <div className="about-mile__mobile-media-cell">
                        <img src={t3.src} alt={`Cột mốc ${s.year}`} />
                      </div>
                    </div>
                    <div className="about-mile__mobile-media-right">
                      <img src={t1.src} alt={`Cột mốc ${s.year}`} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Milestones;
