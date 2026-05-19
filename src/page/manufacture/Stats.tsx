"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import cardBg from "@/assets/images/figma/manufacture/stats-card-bg.png";
import w1 from "@/assets/images/figma/manufacture/worker-01.png";
import w2 from "@/assets/images/figma/manufacture/worker-02.png";
import w3 from "@/assets/images/figma/manufacture/worker-03.png";
import w4 from "@/assets/images/figma/manufacture/worker-04.png";
import w5 from "@/assets/images/figma/manufacture/worker-05.png";

const cards = [
  {
    value: "100+",
    label: ["Nghệ Nhân &", "Nhân Sự Tinh Anh"],
    desc: 'Đội ngũ nghệ nhân với hơn 14 năm kinh nghiệm là "linh hồn" của nhà máy, am hiểu về cấu trúc khung xương và tỉ lệ nhân trắc học, đảm bảo sản phẩm đạt độ hoàn thiện cao nhất.',
    valueRight: false,
    image: w1.src,
  },
  {
    value: "99%",
    label: ["Chỉ Số Công Nghệ Chính Xác"],
    desc: "Chúng tôi đầu tư vào máy móc hiện đại như máy cắt CNC tự động và máy may kỹ thuật số, giúp tối ưu hóa 25% nguyên liệu, giảm rác thải và hướng tới quy trình sản xuất bền vững.",
    valueRight: true,
    image: w2.src,
  },
];

const workers = [
  { idx: "01", title: "Tổ khung-mộc", img: w1.src, imgHover: w2.src },
  { idx: "02", title: "Tổ cơ khí", img: w2.src, imgHover: w3.src },
  { idx: "03", title: "Tổ cắt may", img: w3.src, imgHover: w4.src },
  { idx: "04", title: "Tổ hoàn thiện", img: w4.src, imgHover: w5.src },
  { idx: "05", title: "Tổ QC", img: w5.src, imgHover: w1.src },
];

function Stats() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const totalCards = cards.length + 1;

  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    if (children.length === 0) return;

    const recalc = () => {
      const containerRect = el.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      let closest = 0;
      let minDist = Infinity;
      children.forEach((child, i) => {
        const r = child.getBoundingClientRect();
        const center = r.left + r.width / 2;
        const dist = Math.abs(center - containerCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActiveCard(closest);
    };

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(recalc);
    };

    recalc();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", recalc);

    const observer = new IntersectionObserver(
      () => recalc(),
      { root: el, threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    children.forEach((c) => observer.observe(c));

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", recalc);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="manuf-stats">
      <div className="manuf-stats__head my-container">
        <span className="manuf-stats__eyebrow">Về chúng tôi</span>
        <h2 className="manuf-stats__title">NHỮNG CON SỐ BIẾT NÓI</h2>
      </div>

      <div className="manuf-stats__inner">
        <motion.div
          className="manuf-stats__big"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="manuf-stats__big-num">
            8.000<span className="unit-m">m</span>
            <span className="unit-sup">2</span>
          </span>
          <span className="manuf-stats__big-caption">
            Diện tích
            <br />
            nhà máy
          </span>
        </motion.div>

        <div className="manuf-stats__divider" />

        <div className="manuf-stats__cards" ref={cardsRef}>
          {cards.map((c, idx) => (
            <motion.article
              key={c.value}
              className="manuf-stats__card"
              style={{
                backgroundImage: `url(${cardBg.src})`,
                ["--card-bg" as string]: `url(${cardBg.src})`,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img className="manuf-stats__card-image" src={c.image} alt="" />
              <div className="manuf-stats__card-body">
                <div
                  className={`manuf-stats__card-head ${
                    c.valueRight ? "is-right" : ""
                  }`}
                >
                  <strong>{c.value}</strong>
                  <span>
                    {c.label.map((l, i) => (
                      <React.Fragment key={i}>
                        {l}
                        {i < c.label.length - 1 ? <br /> : null}
                      </React.Fragment>
                    ))}
                  </span>
                </div>
                <p>{c.desc}</p>
              </div>
            </motion.article>
          ))}

          <motion.article
            className="manuf-stats__card"
            style={{
              backgroundImage: `url(${cardBg.src})`,
              ["--card-bg" as string]: `url(${cardBg.src})`,
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img className="manuf-stats__card-image" src={w3.src} alt="" />
            <div className="manuf-stats__card-body">
              <div className="manuf-stats__card-head">
                <strong>20.000+</strong>
                <span>Sản phẩm/năm</span>
              </div>
              <p>Mỗi năm, hơn 20.000 sản phẩm tinh xảo được bàn giao.</p>
              <div className="manuf-stats__card-head">
                <strong>1.000+</strong>
                <span>Đối tác</span>
              </div>
              <p>
                Khẳng định uy tín với hơn 1.000 khách hàng và đối tác chiến lược
                (KTS, đơn vị thiết kế) trên toàn quốc.
              </p>
            </div>
          </motion.article>
        </div>

        <div className="manuf-stats__pagination" role="tablist">
          {Array.from({ length: totalCards }).map((_, i) => (
            <button
              type="button"
              key={i}
              className={i === activeCard ? "is-active" : ""}
              aria-label={`Đi tới slide ${i + 1}`}
              aria-selected={i === activeCard}
              onClick={() => {
                const el = cardsRef.current;
                if (!el) return;
                const target = el.children[i] as HTMLElement | undefined;
                if (!target) return;
                const containerRect = el.getBoundingClientRect();
                const targetRect = target.getBoundingClientRect();
                const delta =
                  targetRect.left -
                  containerRect.left -
                  (containerRect.width - targetRect.width) / 2;
                el.scrollTo({
                  left: el.scrollLeft + delta,
                  behavior: "smooth",
                });
              }}
            />
          ))}
        </div>
      </div>

      <div className="manuf-stats__gallery-head my-container">
        <span className="manuf-stats__eyebrow">Minh phú sofa factory</span>
        <h2 className="manuf-stats__title">Đội ngũ nhà xưởng</h2>
      </div>

      <div className="manuf-stats__gallery">
        {workers.map((w, idx) => (
          <motion.div
            key={w.idx}
            className="manuf-stats__cell"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
          >
            <img className="manuf-stats__cell-img" src={w.img} alt={w.title} />
            <img
              className="manuf-stats__cell-img manuf-stats__cell-img--hover"
              src={w.imgHover}
              alt=""
              aria-hidden
            />
            <div className="manuf-stats__cell-shade" />
            <div className="manuf-stats__cell-text">
              <span className="idx">{w.idx}</span>
              <span className="title">{w.title}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
