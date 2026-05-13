"use client";

import React from "react";
import { motion } from "framer-motion";
import newsBig1 from "@/assets/images/figma/home/news-big-1.png";
import newsBig2 from "@/assets/images/figma/home/news-big-2.png";
import newsSmall1 from "@/assets/images/figma/home/news-small-1.png";
import newsSmall2 from "@/assets/images/figma/home/news-small-2.png";
import Button from "@/components/button/Button";

interface BigNews {
  title: string;
  image: string;
}
interface SmallNews {
  day: string;
  month: string;
  title: string;
  image: string;
}

const big: BigNews[] = [
  {
    title:
      "MINH PHÚ SOFA FACTORY – ĐƠN VỊ MAY ĐO SOFA CAO CẤP HÀNG ĐẦU TẠI HÀ NỘI",
    image: newsBig1.src,
  },
  {
    title: "QUY TRÌNH SẢN XUẤT 7 BƯỚC TẠI MINH PHÚ SOFA FACTORY",
    image: newsBig2.src,
  },
];

const small: SmallNews[] = [
  {
    day: "12",
    month: "Tháng 06",
    title: "Kích thước cứng thường thiếu phong thủy đúng quy chuẩn 2024",
    image: newsSmall1.src,
  },
  {
    day: "12",
    month: "Tháng 06",
    title: "Kích thước cứng thường thiếu phong thủy đúng quy chuẩn 2024",
    image: newsSmall2.src,
  },
  {
    day: "12",
    month: "Tháng 06",
    title: "Kích thước cứng thường thiếu phong thủy đúng quy chuẩn 2024",
    image: newsSmall1.src,
  },
];

function News() {
  return (
    <section className="home-news my-container">
      <div className="home-news__head">
        <div>
          <span className="home-news__eyebrow">CẬP NHẬT HOẠT ĐỘNG</span>
          <h2 className="home-news__title">TIN TỨC MỚI NHẤT</h2>
        </div>
        <div className="home-news__button">
          <Button
            title="XEM TẤT CẢ"
            typeIcon="cross"
            color="white"
            handleClick={() => {}}
            vavariant
          />
        </div>
      </div>

      <div className="home-news__grid">
        {big.map((b, i) => (
          <motion.article
            key={`big-${i}`}
            className="home-news__big"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="home-news__big-image">
              <img src={b.image} alt={b.title} />
            </div>
            <span className="home-news__big-bg-sub" />
            <h3 className="home-news__big-title">{b.title}</h3>
          </motion.article>
        ))}

        <div className="home-news__small">
          {small.map((s, i) => (
            <motion.article
              key={`small-${i}`}
              className="home-news__small-item"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="home-news__small-image">
                <img src={s.image} alt={s.title} />
              </div>
              <div className="home-news__small-content">
                <div className="home-news__small-date">
                  <strong>{s.day}</strong>
                  <span>{s.month}</span>
                </div>

                <div className="home-news__small-date-mobile">
                  Ngày đăng: 21/01/2026
                </div>
                <span className="home-news__small-content-paga" />
                <h4>{s.title}</h4>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="home-news__button-mobile">
          <Button
            title="XEM TẤT CẢ"
            typeIcon="cross"
            color="white"
            handleClick={() => {}}
            vavariant
          />
        </div>
      </div>
    </section>
  );
}

export default News;
