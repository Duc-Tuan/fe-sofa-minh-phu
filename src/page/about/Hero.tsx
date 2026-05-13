"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import heroBg from "@/assets/images/figma/about/hero.png";
import { PathName } from "@/router/path";

function Hero() {
  return (
    <section className="about-hero">
      <div className="about-hero__bg">
        <img src={heroBg.src} alt="Về chúng tôi" />
        <div className="about-hero__overlay" />
      </div>

      <div className="about-hero__content my-container">
        <nav className="about-hero__breadcrumb">
          <Link href={PathName.HOME}>Trang chủ</Link>
          <span className="about-hero__breadcrumb-sep">›</span>
          <span>Về chúng tôi</span>
        </nav>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Về chúng tôi
        </motion.h1>
      </div>
    </section>
  );
}

export default Hero;
