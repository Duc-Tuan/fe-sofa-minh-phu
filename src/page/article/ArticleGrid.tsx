"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import img1 from "@/assets/images/figma/home/news-big-1.png";
import img2 from "@/assets/images/figma/home/news-big-2.png";
import img3 from "@/assets/images/figma/home/news-small-1.png";
import img4 from "@/assets/images/figma/home/news-small-2.png";
import img5 from "@/assets/images/figma/home/collection-living.png";
import img6 from "@/assets/images/figma/home/collection-bedroom.png";
import img7 from "@/assets/images/figma/home/collection-dining.png";
import img8 from "@/assets/images/figma/home/collection-interior.png";
import img9 from "@/assets/images/figma/home/capacity-1.png";

const cycle = [img1.src, img2.src, img3.src, img4.src, img5.src, img6.src, img7.src, img8.src, img9.src];

const articles = Array.from({ length: 9 }).map((_, i) => ({
  id: String(i + 1),
  title: `Cách lựa chọn nệm ngồi cho từng phong cách thiết kế ${i + 1}`,
  date: "12 Tháng 06, 2026",
  image: cycle[i % cycle.length],
}));

function ArticleGrid() {
  return (
    <section className="article-grid my-container">
      <div className="article-grid__head">
        <span>DANH SÁCH BÀI VIẾT</span>
      </div>

      <div className="article-grid__list">
        {articles.map((a, idx) => (
          <motion.article
            key={a.id}
            className="article-grid__card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
          >
            <Link href={`/article/${a.id}`} className="article-grid__image">
              <img src={a.image} alt={a.title} />
            </Link>
            <span className="article-grid__date">{a.date}</span>
            <Link href={`/article/${a.id}`}>
              <h3>{a.title}</h3>
            </Link>
          </motion.article>
        ))}
      </div>

      <div className="article-grid__pagination">
        <button className="article-grid__page-btn is-active">1</button>
        <button className="article-grid__page-btn">2</button>
        <button className="article-grid__page-btn">3</button>
        <button className="article-grid__page-btn">›</button>
      </div>
    </section>
  );
}

export default ArticleGrid;
