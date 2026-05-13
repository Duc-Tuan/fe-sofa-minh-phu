"use client";

import React from "react";
import { motion } from "framer-motion";
import banner from "@/assets/images/figma/home/collection-interior.png";

function Intro() {
  return (
    <section className="contact-intro my-container">
      <motion.div
        className="contact-intro__text"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2>
          CÔNG TY TNHH SẢN XUẤT NỘI THẤT <br /> VÀ THƯƠNG MẠI MINH PHÚ
        </h2>
        <p>
          Khởi nguồn từ năm 2012, Minh Phú vận hành hệ sinh thái sản xuất sofa cao cấp tại Hà Nội với
          đội ngũ KTS, kỹ sư và thợ lành nghề giàu kinh nghiệm. Liên hệ với chúng tôi để được tư vấn
          giải pháp nội thất phù hợp với từng dự án.
        </p>
      </motion.div>

      <motion.div
        className="contact-intro__image"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <img src={banner.src} alt="Showroom Minh Phú" />
      </motion.div>
    </section>
  );
}

export default Intro;
