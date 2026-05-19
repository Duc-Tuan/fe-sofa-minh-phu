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

      <div className="manuf-hero__top-gradient" />

      <div className="manuf-hero__content">
        <nav className="manuf-hero__breadcrumb">
          <Link href={PathName.HOME}>Trang chủ</Link>
          <svg
            className="manuf-hero__breadcrumb-sep"
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
          <span>Năng lực sản xuất</span>
        </nav>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Năng lực sản xuất
        </motion.h1>
      </div>
    </section>
  );
}

export default Hero;
