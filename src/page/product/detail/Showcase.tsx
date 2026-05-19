"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
// @ts-ignore
import "swiper/css";

interface Props {
  images: string[];
}

function Showcase({ images }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [active, setActive] = useState(0);

  if (images.length === 0) return null;

  const total = images.length;
  const current = active + 1;
  const last = total;

  return (
    <section className="product-detail__showcase">
      <Swiper
        centeredSlides
        slidesPerView="auto"
        spaceBetween={42}
        loop={images.length > 1}
        loopAdditionalSlides={images.length}
        speed={600}
        watchSlidesProgress
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={(s) => setActive(s.realIndex)}
        className="product-detail__showcase-swiper"
      >
        {images.map((src, idx) => (
          <SwiperSlide
            key={idx}
            className={`product-detail__showcase-slide ${
              idx === active ? "is-active" : ""
            }`}
          >
            <img src={src} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="product-detail__showcase-pager" aria-hidden>
        <span className="product-detail__showcase-pager-side">
          <em className="line" />
          <strong>{current}</strong>
        </span>
        <span className="product-detail__showcase-pager-side product-detail__showcase-pager-side--right">
          <strong>{last}</strong>
          <em className="line" />
        </span>
      </div>

      <div className="product-detail__showcase-pager-mb" aria-hidden>
        {images.map((_, idx) => (
          <React.Fragment key={idx}>
            <span
              className={`product-detail__showcase-pager-mb-num ${
                idx === active ? "is-active" : ""
              }`}
            >
              {String(idx + 1).padStart(2, "0")}
            </span>
            {idx === active && (
              <em className="product-detail__showcase-pager-mb-line" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Showcase;
