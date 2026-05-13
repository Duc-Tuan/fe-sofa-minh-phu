"use client";

import React from "react";
import { motion } from "framer-motion";
import img1 from "@/assets/images/figma/home/capacity-1.png";
import img2 from "@/assets/images/figma/home/capacity-2.png";
import img3 from "@/assets/images/figma/home/capacity-3.png";
import img4 from "@/assets/images/figma/home/capacity-4.png";
import img5 from "@/assets/images/figma/home/project-1.png";
import img6 from "@/assets/images/figma/home/project-3.png";

const images = [img1.src, img2.src, img3.src, img4.src, img5.src, img6.src];

function Gallery() {
  return (
    <section className="manuf-gallery my-container">
      <div className="manuf-gallery__head">
        <span className="manuf-gallery__eyebrow">HÌNH ẢNH NHÀ MÁY</span>
        <h2 className="manuf-gallery__title">KHÔNG GIAN SẢN XUẤT</h2>
      </div>

      <div className="manuf-gallery__grid">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            className={`manuf-gallery__cell cell-${idx % 6}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
          >
            <img src={src} alt={`gallery-${idx}`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
