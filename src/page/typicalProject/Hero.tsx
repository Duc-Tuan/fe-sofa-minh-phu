"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import banner from "@/assets/images/figma/home/project-2.png";
import { PathName } from "@/router/path";

function Hero() {
  return (
    <section className="project-hero">
      <div className="project-hero__bg">
        <img src={banner.src} alt="Dự án tiêu biểu" />
        <div className="project-hero__overlay" />
      </div>
      <div className="project-hero__content my-container">
        <nav className="project-hero__breadcrumb">
          <Link href={PathName.HOME}>Trang chủ</Link>
          <span>›</span>
          <span>DỰ ÁN TIÊU BIỂU</span>
        </nav>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          DỰ ÁN TIÊU BIỂU
        </motion.h1>
      </div>
    </section>
  );
}

export default Hero;
