"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import imgBg from "@/assets/images/figma/about/cta-bg.png";
import img1 from "@/assets/images/figma/about/cta-1.png";
import img2 from "@/assets/images/figma/about/cta-2.png";
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
    desc: "Tìm hiểu quy trình sản xuất chuẩn 5 sao trên diện tích 8.000m2.",
    image: img1.src,
    href: PathName.MANUFACTURE,
  },
  {
    title: "CÁC DỰ ÁN TIÊU BIỂU",
    desc:
      "Chiêm ngưỡng những công trình thực tế Minh Phú đã thực thi cho các biệt thự, khách sạn cao cấp",
    image: img2.src,
    href: PathName.TYPICALPROJECT,
  },
];

function Cta() {
  return (
    <section className="about-cta">
      <div className="about-cta__bg" aria-hidden>
        <img src={imgBg.src} alt="" />
      </div>

      <div className="about-cta__inner my-container">
        <div className="about-cta__grid">
          {cards.map((c, idx) => (
            <motion.article
              key={c.title}
              className="about-cta__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
            >
              <div className="about-cta__card-content">
                <div className="about-cta__card-text">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
                <Link href={c.href}>
                  <Button
                    title="KHÁM PHÁ NGAY"
                    typeIcon="cross"
                    color="white"
                    handleClick={() => {}}
                  />
                </Link>
              </div>
              <div className="about-cta__card-img">
                <img src={c.image} alt={c.title} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cta;
