"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import imgCapacity from "@/assets/images/figma/home/capacity-2.png";
import imgProject from "@/assets/images/figma/home/project-1.png";
import Button from "@/components/button/Button";
import { PathName } from "@/router/path";

interface Card {
  title: string;
  desc: string;
  image: string;
  href: string;
}

const cards: Card[] = [
  {
    title: "KHÁM PHÁ NĂNG LỰC SẢN XUẤT",
    desc: "Tìm hiểu quy trình sản xuất chuẩn 5 sao trên diện tích 8.000m².",
    image: imgCapacity.src,
    href: PathName.MANUFACTURE,
  },
  {
    title: "CÁC DỰ ÁN TIÊU BIỂU",
    desc: "Chiêm ngưỡng những công trình thực tế Minh Phú đã thực thi cho các biệt thự, khách sạn cao cấp.",
    image: imgProject.src,
    href: PathName.TYPICALPROJECT,
  },
];

function Cta() {
  return (
    <section className="about-cta my-container">
      <div className="about-cta__grid">
        {cards.map((c, idx) => (
          <motion.article
            key={c.title}
            className="about-cta__card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="about-cta__card-bg">
              <img src={c.image} alt={c.title} />
              <div className="about-cta__card-overlay" />
            </div>
            <div className="about-cta__card-content">
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <Link href={c.href}>
                <Button title="KHÁM PHÁ NGAY" typeIcon="cross" color="white" handleClick={() => {}} />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Cta;
