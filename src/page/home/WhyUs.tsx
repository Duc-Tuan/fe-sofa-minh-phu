"use client";

import React from "react";
import { motion } from "framer-motion";
import bgWhyUs from "@/assets/images/figma/home/why-us.png";
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
    icon: <Icon name="icon-why-1" />,
    title: `Sản Xuất Theo Yêu Cầu <br/> Tính Cá Nhân Hóa Cao`,
    desc: "Minh Phú chế tác sofa độc quyền theo yêu cầu từng dự án với độ linh hoạt cao về phong cách, chất liệu và kích thước. Đảm bảo sản phẩm hoàn thiện đúng tinh thần thiết kế, phù hợp với từng không gian và đối tượng sử dụng.",
  },
  {
    icon: <Icon name="icon-why-2" />,
    title: `Năng Lực Triển Khai <br/> Dự Án Thực Tế`,
    desc: "Minh Phú đã và đang chuyên sản xuất sofa chuẩn thiết kế cao cấp, sẵn sàng đáp ứng các đơn hàng lớn với đội ngũ kỹ thuật chuyên nghiệp. Chúng tôi cam kết tiến độ và chất lượng, đồng hành cùng đối tác trong từng dự án thực tế.",
  },
  {
    icon: <Icon name="icon-why-3" />,
    title: `Năng Lực <br/> Chuyên Môn Cao`,
    desc: "Với 14 năm kinh nghiệm và nhà máy hơn 8.000m², Minh Phú sở hữu đội ngũ thợ lành nghề có trình độ kỹ thuật cao. Quy trình sản xuất hiện đại kết hợp với công nghệ tiên tiến giúp đảm bảo chất lượng và hiệu quả công việc tối ưu.",
  },
  {
    icon: <Icon name="icon-why-4" />,
    title: `Sản Phẩm Chất Lượng Cao <br/> Giá Cạnh Tranh`,
    desc: "Minh Phú vận hành xưởng sản xuất riêng, đảm bảo mọi sản phẩm phục vụ nhu cầu đa dạng với chất lượng cao và giá thành cạnh tranh. Mọi nguyên liệu đều được tuyển chọn kỹ lưỡng để mang đến độ thẩm mỹ và độ bền tối ưu.",
  },
];

function WhyUs() {
  return (
    <section className="home-why-us">
      <img src={bgWhyUs.src} alt="" className="home-why-us_bg-sub" />
      <div className="my-container">
        <div className="home-why-us__head">
          <span className="home-why-us__eyebrow">ĐỐI TÁC CHIẾN LƯỢC</span>
          <h2 className="home-why-us__title">
            TẠI SAO NÊN CHỌN <br /> MINH PHÚ SOFA FACTORY ?
          </h2>
        </div>

        <SwiperOne className="home-choose-us__grid-mobile home-collections__card">
          {items.map((it) => (
            <SwiperSlide key={it.title} className="">
              <div className="home-why-us__card-icon">{it.icon}</div>
              <div className="home-why-us__card-content">
                <h3 dangerouslySetInnerHTML={{ __html: it.title }} />
                <span className="home-why-us__card-pagani" />
                <p>{it.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </SwiperOne>

        <div className="home-why-us__grid">
          {items.map((it, idx) => (
            <React.Fragment key={it.title}>
              <motion.article
                className="home-why-us__card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="home-why-us__card-icon">{it.icon}</div>
                <div className="home-why-us__card-content">
                  <h3 dangerouslySetInnerHTML={{ __html: it.title }} />
                  <span className="home-why-us__card-pagani" />
                  <p>{it.desc}</p>
                </div>
              </motion.article>

              {idx !== items.length - 1 && (
                <span className="home-why-us__card-sub" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function SettingsIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="6" stroke="#cdb27c" strokeWidth="1.5" />
      <path
        d="M24 4v6M24 38v6M44 24h-6M10 24H4M38.1 9.9l-4.2 4.2M14.1 33.9l-4.2 4.2M38.1 38.1l-4.2-4.2M14.1 14.1l-4.2-4.2"
        stroke="#cdb27c"
        strokeWidth="1.5"
      />
    </svg>
  );
}
function ToolIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M30 6l12 12-6 6-12-12 6-6Z" stroke="#cdb27c" strokeWidth="1.5" />
      <path d="M22 14L8 28l12 12 14-14" stroke="#cdb27c" strokeWidth="1.5" />
    </svg>
  );
}
function PeopleIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="16" r="8" stroke="#cdb27c" strokeWidth="1.5" />
      <path
        d="M8 42c0-8 7-14 16-14s16 6 16 14"
        stroke="#cdb27c"
        strokeWidth="1.5"
      />
    </svg>
  );
}
function TrophyIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M14 8h20v10c0 6-4 12-10 12s-10-6-10-12V8Z"
        stroke="#cdb27c"
        strokeWidth="1.5"
      />
      <path
        d="M14 12H8v4c0 4 3 6 6 6M34 12h6v4c0 4-3 6-6 6M20 36h8v6h-8z"
        stroke="#cdb27c"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default WhyUs;
