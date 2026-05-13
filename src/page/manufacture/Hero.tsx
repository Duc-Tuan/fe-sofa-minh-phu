"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import banner from "@/assets/images/figma/home/capacity-1.png";
import { PathName } from "@/router/path";

function Hero() {
  return (
    <section className="manuf-hero">
      <div className="manuf-hero__bg">
        <img src={banner.src} alt="Năng lực sản xuất" />
        <div className="manuf-hero__overlay" />
      </div>

      <div className="manuf-hero__content my-container">
        <nav className="manuf-hero__breadcrumb">
          <Link href={PathName.HOME}>Trang chủ</Link>
          <span>›</span>
          <span>NĂNG LỰC SẢN XUẤT</span>
        </nav>

        <motion.div
          className="manuf-hero__big"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="manuf-hero__big-num">8.000</span>
          <div className="manuf-hero__big-meta">
            <span className="unit">M²</span>
            <span className="caption">Tổng diện tích nhà máy</span>
          </div>
        </motion.div>

        <p className="manuf-hero__lead">
          NHÀ MÁY HOẠT ĐỘNG SONG SONG <br /> ĐẢM BẢO NĂNG LỰC SẢN XUẤT QUY MÔ LỚN
        </p>
      </div>
    </section>
  );
}

export default Hero;
