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

      <div className="about-hero__top-gradient" />

      <div className="about-hero__content">
        <nav className="about-hero__breadcrumb">
          <Link href={PathName.HOME}>Trang chủ</Link>
          <svg
            className="about-hero__breadcrumb-sep"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M2 1l4 3-4 3"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
