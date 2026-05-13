"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import banner from "@/assets/images/figma/home/slide-2.png";
import { PathName } from "@/router/path";

function Hero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero__bg">
        <img src={banner.src} alt="Liên hệ" />
        <div className="contact-hero__overlay" />
      </div>

      <div className="contact-hero__content my-container">
        <nav className="contact-hero__breadcrumb">
          <Link href={PathName.HOME}>Trang chủ</Link>
          <span>›</span>
          <span>LIÊN HỆ</span>
        </nav>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          THÔNG TIN LIÊN HỆ
        </motion.h1>
        <p>
          Minh Phú Sofa Factory sẵn sàng đồng hành cùng bạn từ ý tưởng đầu tiên cho tới sản phẩm hoàn
          thiện. Vui lòng để lại thông tin để được tư vấn miễn phí.
        </p>
      </div>
    </section>
  );
}

export default Hero;
