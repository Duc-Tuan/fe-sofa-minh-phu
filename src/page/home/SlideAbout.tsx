"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slide1 from "@/assets/images/figma/home/slide-1.png";
import slide2 from "@/assets/images/figma/home/slide-2.png";
import capacity1 from "@/assets/images/figma/home/capacity-1.png";
import capacity2 from "@/assets/images/figma/home/capacity-2.png";
import Icon from "@/assets/icon";

interface SlideItem {
  index: string;
  label: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  highlightSub: string;
}

const slides: SlideItem[] = [
  {
    index: "01",
    label: "Thành lập",
    eyebrow: "Khởi nguồn từ",
    title: "MINH PHÚ SOFA FACTORY",
    highlight: "2012",
    highlightSub: "",
    description:
      "Sở hữu nhà xưởng rộng, Minh Phú đầu tư bài bản về không gian, máy móc và quy trình sản xuất, đáp ứng hiệu quả các đơn hàng số lượng lớn, đảm bảo chất lượng và tiến độ.",
    image: slide1.src,
  },
  {
    index: "02",
    label: "Nhà xưởng",
    eyebrow: "Diện tích xưởng",
    title: "NHÀ XƯỞNG HIỆN ĐẠI",
    highlight: "8.000",
    highlightSub: "m²",
    description:
      "Nhà xưởng được vận hành đồng bộ, máy móc hiện đại, quy trình khép kín giúp tối ưu công suất và bảo đảm chất lượng từng sản phẩm.",
    image: slide2.src,
  },
  {
    index: "03",
    label: "Nhân lực",
    eyebrow: "Thợ thủ công",
    title: "ĐỘI NGŨ GIÀU KINH NGHIỆM",
    highlight: "120+",
    highlightSub: "",
    description:
      "Đội ngũ thợ lành nghề, kinh nghiệm trên 15 năm, làm chủ kỹ thuật chế tác sofa cao cấp theo từng dấu ấn thiết kế của khách hàng.",
    image: capacity1.src,
  },
  {
    index: "04",
    label: "Khả năng đáp ứng",
    eyebrow: "Công suất lớn",
    title: "ĐÁP ỨNG ĐƠN HÀNG LỚN",
    highlight: "10.000",
    highlightSub: "ĐƠN HÀNG/NĂM",
    description:
      "Sẵn sàng phục vụ các dự án quy mô lớn, đảm bảo tiến độ giao hàng và chất lượng sản phẩm đồng đều ở mọi đơn hàng.",
    image: capacity2.src,
  },
];

function SlideAbout() {
  const [active, setActive] = useState(0);
  const current = slides[active];

  return (
    <section className="home-slide-about">
      <div className="" style={{ height: "20rem", overflow: "hidden" }}>
        <AnimatePresence mode="sync">
          <motion.div
            key={current.image + active}
            className="home-slide-about__bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={current.image} alt={current.title} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="home-slide-about__overlay" />

      <div className="home-slide-about__tabs">
        {slides.map((s, idx) => (
          <button
            key={s.index}
            className={`home-slide-about__tab ${active === idx ? "is-active" : ""}`}
            onClick={() => setActive(idx)}
          >
            <span className="home-slide-about__tab-line" />
            <span className="home-slide-about__tab-index">{s.index}</span>
            <span className="home-slide-about__tab-label">{s.label}</span>
          </button>
        ))}
      </div>
      <div className="home-slide-about__tabs home-slide-about__tabs--mobile">
        <button
          className={`home-slide-about__tab is-active`}
          // onClick={() => setActive(idx)}
        >
          <span className="home-slide-about__tab-line" />
          <span className="home-slide-about__tab-index">0{active + 1}</span>
          <span className="home-slide-about__tab-label">{current.label}</span>
        </button>
      </div>

      <motion.div
        key={`content-${active}`}
        className="home-slide-about__content my-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <p className="home-slide-about__title">MINH PHÚ SOFA FACTORY</p>
        <div className="home-slide-about__highlight">
          <span className={`eyebrow eyebrow-${current.index}`}>
            {current.eyebrow}
          </span>
          <span className={`big big-${current.index}`}>
            {current.highlight}
          </span>
          <span className={`big-sub big-sub-${current.index}`}>
            {current.highlightSub}
          </span>
          <span className={`line line-${current.index}`} />
        </div>
        <p className="home-slide-about__desc">{current.description}</p>
      </motion.div>
      <div className="home-capacity__controls my-container">
        <span className="home-capacity__pagination">
          <strong>{String(active + 1).padStart(2, "0")}</strong>
          <em>/ {String(slides.length).padStart(2, "0")}</em>
        </span>
        <div className="home-capacity__nav">
          <button
            className="home-capacity__nav-btn prev"
            onClick={() =>
              setActive((prev) => {
                const dataNew = active - 1;
                if (dataNew < 0) {
                  return 0;
                }
                return dataNew;
              })
            }
            aria-label="prev"
          >
            <Icon name="icon-arrow-line" />
          </button>
          <button
            className="home-capacity__nav-btn next"
            onClick={() =>
              setActive((prev) => {
                const dataNew = active + 1;
                if (dataNew === slides.length) {
                  return slides.length - 1;
                }
                return dataNew;
              })
            }
            aria-label="next"
          >
            <Icon name="icon-arrow-line" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default SlideAbout;
