"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mapBg from "@/assets/images/figma/manufacture/gallery-default-screenshot.png";
import strip from "@/assets/images/figma/manufacture/gallery-strip.png";
import projectImg from "@/assets/images/figma/manufacture/gallery-project.png";
import img1 from "@/assets/images/figma/home/project-1.png";
import img2 from "@/assets/images/figma/home/project-3.png";
import img3 from "@/assets/images/figma/home/capacity-1.png";

interface Project {
  name: string;
  image: string;
  title: string;
  desc: string;
  area: string;
  location: string;
  category: string;
  year: string;
  scope: string;
}

const projects: Project[] = [
  {
    name: "Phòng khám đa khoa nhật bản T-MATSUOKA",
    image: projectImg.src,
    title: "Phòng khám đa khoa nhật bản t-matsuoka",
    desc:
      "Không gian phòng khám được thiết kế theo tinh thần Nhật Bản, kết hợp vật liệu gỗ tự nhiên, ánh sáng dịu và bố cục mở, mang lại cảm giác thư giãn và riêng tư tuyệt đối.",
    area: "Cập nhật",
    location: "quận Ba Đình - Hà Nội",
    category: "Resort & Hotels",
    year: "2025",
    scope: "Cung cấp 200+ bộ sofa cao cấp cho hệ thống Villa và sảnh chờ.",
  },
  {
    name: "Khu nhà ăn & ký túc xá Intco Quảng Ninh",
    image: img1.src,
    title: "Khu nhà ăn & ký túc xá Intco Quảng Ninh",
    desc:
      "Hệ thống nhà ăn và ký túc xá quy mô lớn, đáp ứng nhu cầu sinh hoạt cho hàng nghìn công nhân với tiêu chuẩn bền vững.",
    area: "Cập nhật",
    location: "Quảng Ninh",
    category: "Industrial",
    year: "2024",
    scope: "Cung cấp toàn bộ nội thất sofa, bàn ghế cho khu sinh hoạt chung.",
  },
  {
    name: "VT penthouse (duplex penhouse)",
    image: img2.src,
    title: "VT Penthouse Duplex",
    desc:
      "Căn hộ penthouse cao cấp với thiết kế duplex 2 tầng, sử dụng vật liệu cao cấp và bố cục mở tối ưu ánh sáng tự nhiên.",
    area: "Cập nhật",
    location: "Hà Nội",
    category: "Residential",
    year: "2024",
    scope:
      "Sản xuất theo bản vẽ KTS: sofa custom, bàn console, giường gỗ tự nhiên.",
  },
  {
    name: "Anyla Grand hotels, Thanh Hóa",
    image: img3.src,
    title: "Anyla Grand Hotels Thanh Hóa",
    desc:
      "Khách sạn 5 sao tại Thanh Hóa với phong cách Indochine, kết hợp giữa nét truyền thống Á Đông và tiện nghi hiện đại.",
    area: "Cập nhật",
    location: "Thanh Hóa",
    category: "Resort & Hotels",
    year: "2025",
    scope:
      "Cung cấp hơn 500 bộ nội thất sofa, ghế bành cho 200+ phòng khách sạn.",
  },
];

function Pin({ color = "currentColor" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1.5c-2.7 0-5 2.2-5 5 0 3.7 5 8 5 8s5-4.3 5-8c0-2.8-2.3-5-5-5zm0 6.7a1.7 1.7 0 110-3.4 1.7 1.7 0 010 3.4z"
        fill={color}
      />
    </svg>
  );
}

function Gallery() {
  const [active, setActive] = useState(0);
  const cur = projects[active];
  const goPrev = () => setActive((i) => (i - 1 + projects.length) % projects.length);
  const goNext = () => setActive((i) => (i + 1) % projects.length);

  return (
    <section className="manuf-gallery">
      <div
        className="manuf-gallery__strip"
        style={{ backgroundImage: `url(${strip.src})` }}
      />
      <span className="manuf-gallery__watermark">PROJECT</span>

      <div className="manuf-gallery__head">
        <span className="manuf-gallery__eyebrow">Minh chứng</span>
        <h2 className="manuf-gallery__title">Dự án tiêu biểu</h2>
      </div>

      <div
        className="manuf-gallery__map"
        style={{ backgroundImage: `url(${mapBg.src})` }}
        aria-hidden
      />

      <ul className="manuf-gallery__list">
        {projects.map((p, idx) => (
          <li
            key={p.name}
            className={`manuf-gallery__list-item ${
              idx === active ? "is-active" : ""
            }`}
          >
            <button onClick={() => setActive(idx)}>
              <Pin />
              <span>{p.name}</span>
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence mode="wait">
        <motion.article
          key={cur.name}
          className="manuf-gallery__card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          <div className="manuf-gallery__card-image">
            <img src={cur.image} alt={cur.title} />
            <button className="manuf-gallery__card-arrow manuf-gallery__card-arrow--left" aria-label="Trước">
              <svg viewBox="0 0 16 12" fill="none">
                <path d="M14 6H2M2 6l4-4M2 6l4 4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="manuf-gallery__card-dots">
              <span className="is-active" />
              <span />
              <span />
            </div>
          </div>

          <div className="manuf-gallery__card-body">
            <h3>{cur.title}</h3>
            <p className="manuf-gallery__card-desc">{cur.desc}</p>

            <dl className="manuf-gallery__card-meta">
              <div>
                <dt>Diện tích</dt>
                <dd>{cur.area}</dd>
              </div>
              <div>
                <dt>Địa điểm</dt>
                <dd>{cur.location}</dd>
              </div>
              <div>
                <dt>Phân loại</dt>
                <dd>{cur.category}</dd>
              </div>
              <div>
                <dt>Năm hoàn thiện</dt>
                <dd>{cur.year}</dd>
              </div>
            </dl>

            <div className="manuf-gallery__card-scope">
              <span className="manuf-gallery__card-scope-label">
                Hạng mục sản xuất:
              </span>
              <span className="manuf-gallery__card-scope-text">{cur.scope}</span>
            </div>
          </div>
        </motion.article>
      </AnimatePresence>

      <div className="manuf-gallery__nav">
        <span className="manuf-gallery__nav-count">
          {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
        <div className="manuf-gallery__nav-arrows">
          <button
            type="button"
            className="manuf-gallery__nav-arrow"
            onClick={goPrev}
            aria-label="Trước"
          >
            <svg viewBox="0 0 16 12" fill="none">
              <path d="M14 6H2M2 6l4-4M2 6l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            className="manuf-gallery__nav-arrow"
            onClick={goNext}
            aria-label="Sau"
          >
            <svg viewBox="0 0 16 12" fill="none">
              <path d="M2 6h12M14 6l-4-4M14 6l-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
