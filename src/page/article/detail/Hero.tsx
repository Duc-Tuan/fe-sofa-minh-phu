"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import banner from "@/assets/images/figma/home/news-big-2.png";
import { PathName } from "@/router/path";

interface Props {
  title: string;
  date: string;
}

function Hero({ title, date }: Props) {
  return (
    <section className="article-detail__hero">
      <div className="article-detail__bg">
        <img src={banner.src} alt="" />
        <div className="article-detail__overlay" />
      </div>
      <div className="article-detail__hero-content my-container">
        <nav className="article-detail__breadcrumb">
          <Link href={PathName.HOME}>Trang chủ</Link>
          <span>›</span>
          <Link href={PathName.ARTICLE}>Bài viết</Link>
          <span>›</span>
          <span>CHI TIẾT</span>
        </nav>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <span className="article-detail__date">{date}</span>
      </div>
    </section>
  );
}

export default Hero;
