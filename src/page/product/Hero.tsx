"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import banner from "@/assets/images/figma/home/slide-1.png";
import { PathName } from "@/router/path";

function Hero() {
  return (
    <section className="product-hero">
      <div className="product-hero__bg">
        <img src={banner.src} alt="Sản phẩm" />
        <div className="product-hero__overlay" />
      </div>
      <div className="product-hero__content my-container">
        <nav className="product-hero__breadcrumb">
          <Link href={PathName.HOME}>Trang chủ</Link>
          <span>›</span>
          <span>SẢN PHẨM</span>
        </nav>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          DANH SÁCH SẢN PHẨM
        </motion.h1>
      </div>
    </section>
  );
}

export default Hero;
