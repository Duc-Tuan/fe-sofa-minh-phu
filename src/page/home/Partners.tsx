"use client";

import React from "react";
import { motion } from "framer-motion";
import image1 from "@/assets/images/figma/home/image-partners-1.png";
import Image2 from "@/assets/images/figma/home/image-partners-2.png";
import Image3 from "@/assets/images/figma/home/image-partners-3.png";
import Image4 from "@/assets/images/figma/home/image-partners-4.png";
import Image5 from "@/assets/images/figma/home/image-partners-5.png";
import Image6 from "@/assets/images/figma/home/image-partners-6.png";
import Image7 from "@/assets/images/figma/home/image-partners-7.png";
import image8 from "@/assets/images/figma/home/image-partners-8.png";
import RightToLeftSlider from "@/components/rightToLeftSlider/RightToLeftSlider";

interface Partner {
  image: string;
  label?: string;
  color?: string;
  italic?: boolean;
}

const partners: string[] = [
  Image2.src,
  Image3.src,
  Image4.src,
  Image5.src,
  Image6.src,
  Image7.src,
];

function Partners() {
  return (
    <section className="home-partners my-container">
      <motion.div
        className="home-partners__head"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="home-partners__title">KHÁCH HÀNG TIÊU BIỂU</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <RightToLeftSlider data={partners} />
      </motion.div>
    </section>
  );
}

export default Partners;
