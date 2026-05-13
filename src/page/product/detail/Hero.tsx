"use client";

import React from "react";
import Link from "next/link";
import banner from "@/assets/images/figma/home/slide-2.png";
import { PathName } from "@/router/path";

interface Props {
  productName: string;
}

function Hero({ productName }: Props) {
  return (
    <section className="product-detail__hero">
      <div className="product-detail__bg">
        <img src={banner.src} alt="" />
        <div className="product-detail__overlay" />
      </div>
      <div className="product-detail__hero-content my-container">
        <nav className="product-detail__breadcrumb">
          <Link href={PathName.HOME}>Trang chủ</Link>
          <span>›</span>
          <Link href={PathName.PRODUCT}>Sản phẩm</Link>
          <span>›</span>
          <span>{productName}</span>
        </nav>
      </div>
    </section>
  );
}

export default Hero;
