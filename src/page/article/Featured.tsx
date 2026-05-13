"use client";

import React from "react";
import { motion } from "framer-motion";
import banner from "@/assets/images/figma/home/news-big-2.png";
import Button from "@/components/button/Button";
import Link from "next/link";

function Featured() {
  return (
    <section className="article-featured my-container">
      <div className="article-featured__head">
        <span>BÀI VIẾT NỔI BẬT</span>
      </div>
      <motion.article
        className="article-featured__card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <Link href={`${"/article"}/1`} className="article-featured__image">
          <img src={banner.src} alt="Featured article" />
        </Link>
        <div className="article-featured__content">
          <span className="article-featured__date">12 Tháng 06, 2026</span>
          <h2>5 XU HƯỚNG THƯỞNG GẶP KHI THIẾT KẾ PHÒNG KHÁCH</h2>
          <p>
            Phòng khách là không gian phản chiếu rõ nhất tinh thần của một ngôi nhà. Cùng Minh Phú
            điểm qua 5 xu hướng nội thất đang định hình thẩm mỹ phòng khách hiện đại.
          </p>
          <Button title="ĐỌC TIẾP" typeIcon="cross" color="black" handleClick={() => {}} />
        </div>
      </motion.article>
    </section>
  );
}

export default Featured;
