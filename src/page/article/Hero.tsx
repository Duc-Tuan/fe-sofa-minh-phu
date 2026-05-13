"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import banner from "@/assets/images/figma/home/news-big-1.png";
import { PathName } from "@/router/path";

function Hero() {
  return (
    <section className="article-hero">
      <div className="article-hero__bg">
        <img src={banner.src} alt="Bài viết" />
        <div className="article-hero__overlay" />
      </div>
      <div className="article-hero__content my-container">
        <nav className="article-hero__breadcrumb">
          <Link href={PathName.HOME}>Trang chủ</Link>
          <span>›</span>
          <span>BÀI VIẾT</span>
        </nav>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          DANH SÁCH BÀI VIẾT
        </motion.h1>
      </div>
    </section>
  );
}

export default Hero;
