"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  images: string[];
}

function Gallery({ images }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div className="product-detail__gallery">
      <div className="product-detail__gallery-main">
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={images[active]}
            alt="product"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
      </div>
      <div className="product-detail__thumbs">
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            className={`product-detail__thumb ${active === idx ? "is-active" : ""}`}
            onClick={() => setActive(idx)}
          >
            <img src={img} alt={`thumb-${idx}`} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
