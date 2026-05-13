"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import bgChooseUs from "@/assets/images/figma/home/choose-us-1.png";
import Icon from "@/assets/icon";
import SwiperOne from "@/components/swiper/swiperOne";
import { SwiperSlide } from "swiper/react";

interface Item {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const items: Item[] = [
  {
    icon: <Icon name="icon-choose-us-1" />,
    title: "HIỆN THỰC HÓA CHUẨN XÁC 3D",
    desc: "Tái hiện sản phẩm một cách chính xác theo thiết kế ban đầu, chú trọng đến từng chi tiết nhỏ nhất để đảm bảo tính chân thực và chất lượng.",
  },
  {
    icon: <Icon name="icon-choose-us-2" />,
    title: "ĐỘI NGŨ GIÀU KINH NGHIỆM",
    desc: "Đội ngũ trên 150 thợ lành nghề với nhiều năm kinh nghiệm trong từng công đoạn chế tác và đảm bảo những sản phẩm chất lượng cao.",
  },
  {
    icon: <Icon name="icon-choose-us-3" />,
    title: "SẢN XUẤT QUY MÔ LỚN",
    desc: "Hệ thống nhà xưởng hiện đại của chúng tôi cho phép sản xuất số lượng lớn, đảm bảo đáp ứng nhu cầu thị trường và đối tác.",
  },
  {
    icon: <Icon name="icon-choose-us-4" />,
    title: "KIỂM SOÁT CHẤT LƯỢNG",
    desc: "Chúng tôi thực hiện việc theo dõi sát sao trong từng công đoạn sản xuất, đảm bảo mọi sản phẩm đạt tiêu chuẩn cao nhất.",
  },
];

function ChooseUs() {
  return (
    <section
      className="home-choose-us my-container"
      style={{ background: `url(${bgChooseUs.src})` }}
    >
      <SectionHeader
        eyebrow="LỢI THẾ CỦA CHÚNG TÔI"
        title="CHẾ TÁC NỘI THẤT CAO CẤP THEO DẤU ẤN THIẾT KẾ"
      />

      <SwiperOne className="home-choose-us__grid-mobile">
        {items.map((it) => (
          <SwiperSlide key={it.title}>
            <div className="home-choose-us__card">
              <div className="home-choose-us__card-icon">{it.icon}</div>
              <h3>{it.title}</h3>
            </div>
            <p>{it.desc}</p>
          </SwiperSlide>
        ))}
      </SwiperOne>

      <div className="home-choose-us__grid">
        {items.map((it, idx) => (
          <motion.article
            key={it.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="home-choose-us__card">
              <div className="home-choose-us__card-icon">{it.icon}</div>
              <h3>{it.title}</h3>
            </div>
            <p>{it.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function BoxIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 4L42 14V34L24 44L6 34V14L24 4Z"
        stroke="#1d262d"
        strokeWidth="1.5"
      />
      <path d="M6 14L24 24L42 14" stroke="#1d262d" strokeWidth="1.5" />
      <path d="M24 24V44" stroke="#1d262d" strokeWidth="1.5" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="6" stroke="#1d262d" strokeWidth="1.5" />
      <circle cx="32" cy="20" r="4" stroke="#1d262d" strokeWidth="1.5" />
      <path
        d="M6 40c0-6 6-10 12-10s12 4 12 10"
        stroke="#1d262d"
        strokeWidth="1.5"
      />
      <path d="M28 32c4-2 12 0 14 8" stroke="#1d262d" strokeWidth="1.5" />
    </svg>
  );
}

function FactoryIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 42V22L18 28V22L30 28V22L42 28V42H6Z"
        stroke="#1d262d"
        strokeWidth="1.5"
      />
      <rect
        x="14"
        y="34"
        width="4"
        height="6"
        stroke="#1d262d"
        strokeWidth="1.5"
      />
      <rect
        x="26"
        y="34"
        width="4"
        height="6"
        stroke="#1d262d"
        strokeWidth="1.5"
      />
      <rect
        x="34"
        y="14"
        width="6"
        height="14"
        stroke="#1d262d"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 4L40 10V24c0 10-7 17-16 20-9-3-16-10-16-20V10l16-6Z"
        stroke="#1d262d"
        strokeWidth="1.5"
      />
      <path
        d="M16 24l6 6 12-12"
        stroke="#1d262d"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ChooseUs;
