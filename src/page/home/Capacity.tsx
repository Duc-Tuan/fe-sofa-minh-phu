"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
// @ts-ignore
import "swiper/css";
import capacity1 from "@/assets/images/figma/home/capacity-1.png";
import capacity2 from "@/assets/images/figma/home/capacity-2.png";
import capacity3 from "@/assets/images/figma/home/capacity-3.png";
import capacity4 from "@/assets/images/figma/home/capacity-4.png";
import slide1 from "@/assets/images/figma/home/slide-1.png";
import Icon from "@/assets/icon";

type Stat = {
  value: string;
  unit?: string;
  label: string;
};

const stats: Stat[] = [
  {
    value: "8.000",
    unit: "M²",
    label: "Nhà xưởng vận hành song song theo quy trình khép kín",
  },
  {
    value: "02",
    unit: "Nhà máy",
    label: "Vận hành song song theo quy trình khép kín",
  },
  { value: "1.000+", label: "Đối tác & khách hàng" },
  { value: "20.000+", label: "Sản phẩm/năm" },
];

const images = [
  capacity1.src,
  capacity2.src,
  capacity3.src,
  capacity4.src,
  slide1.src,
];

function Capacity() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const dataComponent = [
    <ComponentOne />,
    <ComponentTow />,
    <ComponentThree />,
    <ComponentFire />,
  ];

  return (
    <section className="home-capacity my-container">
      <div className="home-capacity__header">
        <div className="home-capacity__intro">
          <span className="home-capacity__eyebrow">Hệ thống nhà máy</span>
          <h2 className="home-capacity__title">
            Năng lực sản xuất <br /> của Minh Phú Sofa Factory
          </h2>
        </div>
        <p className="home-capacity__desc">
          Với định hướng phát triển bền vững, chúng tôi mang đến các giải pháp
          sofa cao cấp chuẩn thiết kế, gia công đến hoàn thiện sản phẩm
        </p>
      </div>

      <div className="home-capacity__body">
        <div className="home-capacity__panel">
          {dataComponent[activeIndex]}

          <div className="home-capacity__controls none-mobile">
            <span className="home-capacity__pagination">
              <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
              <em>/ {String(images.length).padStart(2, "0")}</em>
            </span>
            <div className="home-capacity__nav">
              <button
                className="home-capacity__nav-btn prev"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="prev"
              >
                <Icon name="icon-arrow-line" />
              </button>
              <button
                className="home-capacity__nav-btn next"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="next"
              >
                <Icon name="icon-arrow-line" />
              </button>
            </div>
          </div>
        </div>

        <div className="home-capacity__slider">
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            spaceBetween={36}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.12,
                spaceBetween: 36,
              },
            }}
            loop={true}
            speed={700}
            onBeforeInit={(s) => (swiperRef.current = s)}
            onSlideChange={(s) => setActiveIndex(s.realIndex)}
            className="home-capacity__swiper"
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx} className="home-capacity__slide">
                <img src={src} alt={`capacity-${idx}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="home-capacity__controls none-pc">
          <span className="home-capacity__pagination">
            <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
            <em>/ {String(images.length).padStart(2, "0")}</em>
          </span>
          <div className="home-capacity__nav">
            <button
              className="home-capacity__nav-btn prev"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="prev"
            >
              <Icon name="icon-arrow-line" />
            </button>
            <button
              className="home-capacity__nav-btn next"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="next"
            >
              <Icon name="icon-arrow-line" />
            </button>
          </div>
        </div>
      </div>

      <span className="home-capacity__watermark" aria-hidden="true">
        ABOUT US
      </span>
    </section>
  );
}

const ComponentOne = () => {
  return (
    <ul className="home-capacity__stats">
      {stats.map((s, i) => (
        <motion.li
          key={s.label}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="home-capacity__stats-num">
            <span className="value">{s.value}</span>
            {s.unit && <span className="unit">{s.unit}</span>}
          </div>
          <span className="home-capacity__stats-label">{s.label}</span>
        </motion.li>
      ))}
    </ul>
  );
};
const ComponentTow = () => {
  return (
    <ul className="home-capacity__stats">
      {stats.map((s, i) => (
        <motion.li
          key={s.label}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="home-capacity__stats-num">
            <span className="value">{s.value}</span>
            {s.unit && <span className="unit">{s.unit}</span>}
          </div>
          <span className="home-capacity__stats-label">{s.label}</span>
        </motion.li>
      ))}
    </ul>
  );
};
const ComponentThree = () => {
  return (
    <ul className="home-capacity__stats">
      {stats.map((s, i) => (
        <motion.li
          key={s.label}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="home-capacity__stats-num">
            <span className="value">{s.value}</span>
            {s.unit && <span className="unit">{s.unit}</span>}
          </div>
          <span className="home-capacity__stats-label">{s.label}</span>
        </motion.li>
      ))}
    </ul>
  );
};
const ComponentFire = () => {
  return (
    <ul className="home-capacity__stats">
      {stats.map((s, i) => (
        <motion.li
          key={s.label}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="home-capacity__stats-num">
            <span className="value">{s.value}</span>
            {s.unit && <span className="unit">{s.unit}</span>}
          </div>
          <span className="home-capacity__stats-label">{s.label}</span>
        </motion.li>
      ))}
    </ul>
  );
};
export default Capacity;
