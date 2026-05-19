"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import banner from "@/assets/images/figma/home/capacity-1.png";
import { PathName } from "@/router/path";

interface Props {
  name: string;
}

function Chevron() {
  return (
    <svg
      className="product-detail__breadcrumb-sep"
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
  );
}

function Hero({ name }: Props) {
  return (
    <section className="product-detail__hero">
      <div className="product-detail__bg">
        <img src={banner.src} alt={name} />
      </div>
      <div className="product-detail__hero-overlay" />
      <div className="product-detail__hero-top-gradient" />

      <div className="product-detail__hero-content">
        <nav className="product-detail__breadcrumb">
          <Link href={PathName.HOME}>Trang chủ</Link>
          <Chevron />
          <Link href={PathName.PRODUCT}>Danh sách sản phẩm</Link>
          <Chevron />
          <span>{name}</span>
        </nav>
        <motion.h1
          className="product-detail__hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {name}
        </motion.h1>
      </div>
    </section>
  );
}

export default Hero;
