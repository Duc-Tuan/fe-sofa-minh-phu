"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import slide1 from "@/assets/images/figma/home/slide-1.png";
import slide2 from "@/assets/images/figma/home/slide-2.png";
import capacity1 from "@/assets/images/figma/home/capacity-1.png";
import capacity2 from "@/assets/images/figma/home/capacity-2.png";
import Icon from "@/assets/icon";

const MOBILE_MQ = "(max-width: 768px)";
const IMAGE_PARALLAX = "70%";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}

interface SlideItem {
  index: string;
  label: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  highlightSub: string;
}

const slides: SlideItem[] = [
  {
    index: "01",
    label: "Thành lập",
    eyebrow: "Khởi nguồn từ",
    title: "MINH PHÚ SOFA FACTORY",
    highlight: "2012",
    highlightSub: "",
    description:
      "Sở hữu nhà xưởng rộng, Minh Phú đầu tư bài bản về không gian, máy móc và quy trình sản xuất, đáp ứng hiệu quả các đơn hàng số lượng lớn, đảm bảo chất lượng và tiến độ.",
    image: slide1.src,
  },
  {
    index: "02",
    label: "Nhà xưởng",
    eyebrow: "Diện tích xưởng",
    title: "NHÀ XƯỞNG HIỆN ĐẠI",
    highlight: "8.000",
    highlightSub: "m²",
    description:
      "Nhà xưởng được vận hành đồng bộ, máy móc hiện đại, quy trình khép kín giúp tối ưu công suất và bảo đảm chất lượng từng sản phẩm.",
    image: slide2.src,
  },
  {
    index: "03",
    label: "Nhân lực",
    eyebrow: "Thợ thủ công",
    title: "ĐỘI NGŨ GIÀU KINH NGHIỆM",
    highlight: "120+",
    highlightSub: "",
    description:
      "Đội ngũ thợ lành nghề, kinh nghiệm trên 15 năm, làm chủ kỹ thuật chế tác sofa cao cấp theo từng dấu ấn thiết kế của khách hàng.",
    image: capacity1.src,
  },
  {
    index: "04",
    label: "Khả năng đáp ứng",
    eyebrow: "Công suất lớn",
    title: "ĐÁP ỨNG ĐƠN HÀNG LỚN",
    highlight: "10.000",
    highlightSub: "ĐƠN HÀNG/NĂM",
    description:
      "Sẵn sàng phục vụ các dự án quy mô lớn, đảm bảo tiến độ giao hàng và chất lượng sản phẩm đồng đều ở mọi đơn hàng.",
    image: capacity2.src,
  },
];

function SlideAbout() {
  const swiperRef = useRef<SwiperType | null>(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const current = slides[activeIndex];

  const syncActiveIndex = (swiper: SwiperType) => {
    activeIndexRef.current = swiper.realIndex;
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section
      className={`home-slide-about ${isMobile ? "home-slide-about--fade" : "home-slide-about--parallax"}`}
    >
      <Swiper
        key={isMobile ? "slide-about-fade" : "slide-about-parallax"}
        modules={isMobile ? [EffectFade, Autoplay] : [Parallax, Autoplay]}
        {...(isMobile
          ? {
            effect: "fade" as const,
            fadeEffect: { crossFade: true },
          }
          : { parallax: true })}
        slidesPerView={1}
        loop
        speed={isMobile ? 600 : 1200}
        watchOverflow
        allowTouchMove
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          if (activeIndexRef.current > 0) {
            swiper.slideToLoop(activeIndexRef.current, 0);
          }
          syncActiveIndex(swiper);
        }}
        onSlideChange={syncActiveIndex}
        className="home-slide-about__swiper"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.index} className="home-slide-about__slide">
            <div
              className="home-slide-about__bg"
              {...(!isMobile && { "data-swiper-parallax": IMAGE_PARALLAX })}
            >
              <img src={s.image} alt={s.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="home-slide-about__overlay" />

      <div
        className="home-slide-about__tabs"
        role="tablist"
        aria-label="Slide about pagination"
      >
        {slides.map((s, idx) => (
          <button
            key={s.index}
            type="button"
            role="tab"
            aria-selected={activeIndex === idx}
            className={`home-slide-about__tab ${activeIndex === idx ? "is-active" : ""}`}
            onClick={() => swiperRef.current?.slideToLoop(idx)}
          >
            <span className="home-slide-about__tab-line" />
            <span className="home-slide-about__tab-index">{s.index}</span>
            <span className="home-slide-about__tab-label">{s.label}</span>
          </button>
        ))}
      </div>

      <div className="home-slide-about__tabs home-slide-about__tabs--mobile">
        <button type="button" className="home-slide-about__tab is-active">
          <span className="home-slide-about__tab-line" />
          <span className="home-slide-about__tab-index">{current.index}</span>
          <span className="home-slide-about__tab-label">{current.label}</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="home-slide-about__content my-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: isMobile ? 0.2 : 0.4,
            ease: "easeInOut",
          }}
        >
          <p className="home-slide-about__title">
            MINH PHÚ SOFA FACTORY
          </p>

          <div className="home-slide-about__highlight">
            <span className={`eyebrow eyebrow-${current.index}`}>
              {current.eyebrow}
            </span>

            <span className={`big big-${current.index}`}>
              {current.highlight}
            </span>

            <span className={`big-sub big-sub-${current.index}`}>
              {current.highlightSub}
            </span>

            <span className={`line line-${current.index}`} />
          </div>

          <p className="home-slide-about__desc">
            {current.description}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="home-capacity__controls my-container">
        <span className="home-capacity__pagination">
          <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
          <em>/ {String(slides.length).padStart(2, "0")}</em>
        </span>
        <div className="home-capacity__nav">
          <button
            type="button"
            className="home-capacity__nav-btn prev"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="prev"
          >
            <Icon name="icon-arrow-line" />
          </button>
          <button
            type="button"
            className="home-capacity__nav-btn next"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="next"
          >
            <Icon name="icon-arrow-line" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default SlideAbout;
