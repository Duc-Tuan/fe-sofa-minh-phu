"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  images: string[];
}

function Gallery({ images }: Props) {
  const [active, setActive] = useState(0);
  const count = images.length;

  const prev = () => setActive((i) => (i - 1 + count) % count);
  const next = () => setActive((i) => (i + 1) % count);

  return (
    <motion.div
      className="product-detail__gallery"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="product-detail__gallery-main">
        <img src={images[active]} alt="" />
        <div className="product-detail__gallery-shade" />

        <button
          className="product-detail__gallery-arrow product-detail__gallery-arrow--left"
          onClick={prev}
          aria-label="Ảnh trước"
        >
          <svg viewBox="0 0 16 12" fill="none" aria-hidden>
            <path
              d="M14 6H2M2 6l4-4M2 6l4 4"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className="product-detail__gallery-arrow product-detail__gallery-arrow--right"
          onClick={next}
          aria-label="Ảnh kế"
        >
          <svg viewBox="0 0 16 12" fill="none" aria-hidden>
            <path
              d="M2 6h12M14 6l-4-4M14 6l-4 4"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="product-detail__thumbs">
        {images.map((src, idx) => (
          <button
            key={idx}
            type="button"
            className={`product-detail__thumb ${
              idx === active ? "is-active" : ""
            }`}
            onClick={() => setActive(idx)}
            aria-label={`Xem ảnh ${idx + 1}`}
          >
            <img src={src} alt="" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export default Gallery;
