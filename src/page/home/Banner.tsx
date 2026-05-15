"use client";

import React, { useCallback, useRef, useState } from "react";
import slide1 from "@/assets/images/figma/home/slide-1.png";
import slide2 from "@/assets/images/figma/home/slide-2.png";
import capacity1 from "@/assets/images/figma/home/capacity-1.png";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";

import "@/css/banner.model.css";
import Button from "@/components/button/Button";

const images = [slide1.src, slide2.src, capacity1.src];

const AUTOPLAY_DELAY_MS = 3000;
const PROGRESS_RADIUS = 20;

function Banner() {
  const swiperRef = useRef<SwiperType | null>(null);
  const progressCircleRef = useRef<SVGSVGElement | null>(null);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  const handleSwiper = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
  }, []);

  const onAutoplayTimeLeft = useCallback(
    (_swiper: SwiperType, _time: number, progress: number) => {
      const svg = progressCircleRef.current;
      if (svg) svg.style.setProperty("--progress", String(1 - progress));
    },
    []
  );

  const toggleAutoplay = useCallback(() => {
    const swiper = swiperRef.current;
    if (!swiper?.autoplay) return;
    if (isAutoplayPaused) {
      swiper.autoplay.start();
    } else {
      swiper.autoplay.stop();
    }
  }, [isAutoplayPaused]);

  return (
    <motion.section
      className="banner"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: AUTOPLAY_DELAY_MS,
          // disableOnInteraction: false,
          // pauseOnMouseEnter: true,
        }}
        speed={800}
        className="banner-container"
        onSwiper={handleSwiper}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        onAutoplayStop={() => setIsAutoplayPaused(true)}
        onAutoplayStart={() => setIsAutoplayPaused(false)}
      >
        {images.map((i, idx) => (
          <SwiperSlide key={idx} className="banner-container__item">
            <img src={i} alt="" />
          </SwiperSlide>
        ))}

        <div className="banner-autoplay" slot="container-end">
          <svg
            className="banner-autoplay__ring"
            viewBox="0 0 48 48"
            ref={progressCircleRef}
            aria-hidden
          >
            <circle cx="24" cy="24" r={PROGRESS_RADIUS} />
          </svg>
          <button
            type="button"
            className="banner-autoplay-toggle"
            onClick={toggleAutoplay}
            aria-label={
              isAutoplayPaused ? "Bật tự động chuyển slide" : "Tạm dừng tự động chuyển slide"
            }
            aria-pressed={!isAutoplayPaused}
          >
            {isAutoplayPaused ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                <path d="M8.33301 6.66667L-0.000326739 13.3333L-0.000326157 -3.64262e-07L8.33301 6.66667Z" fill="#D9D9D9" />
              </svg>
            ) : (
              <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="3.125" height="10.1562" fill="#D9D9D9" />
                <rect x="4.6875" width="3.125" height="10.1562" fill="#D9D9D9" />
              </svg>
            )}
          </button>
        </div>
      </Swiper>

      <div className="banner-content">
        <h1>
          Tái định nghĩa giá trị của sự tin cậy và <br /> chuyên nghiệp trong
          từng sản phẩm nội thất
        </h1>
        <Button
          title="Khám phá ngay"
          typeIcon="cross"
          color="white"
          handleClick={() => { }}
        />
      </div>
    </motion.section>
  );
}

export default Banner;
