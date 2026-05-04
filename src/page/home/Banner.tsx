"use client";

import React, { useRef } from "react";
import banner from "@/assets/images/imageFooter.png";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";

import "@/css/banner.model.css";
import Button from "@/components/button/Button";

const images = [banner.src, banner.src, banner.src, banner.src];

function Banner() {
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
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={800}
        className="banner-container"
      >
        {images.map((i, idx) => (
          <SwiperSlide key={idx} className="banner-container__item">
            <img src={i} alt="" />
          </SwiperSlide>
        ))}
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
          handleClick={() => {}}
        />
      </div>
    </motion.section>
  );
}

export default Banner;
