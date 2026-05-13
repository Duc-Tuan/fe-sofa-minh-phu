"use client";

import React from "react";
import { motion } from "framer-motion";
import img1 from "@/assets/images/figma/home/capacity-1.png";
import img2 from "@/assets/images/figma/home/capacity-2.png";
import img3 from "@/assets/images/figma/home/capacity-3.png";
import img4 from "@/assets/images/figma/home/capacity-4.png";

interface Phase {
  index: string;
  title: string;
  desc: string;
  image: string;
}

const phases: Phase[] = [
  {
    index: "01",
    title: "KHỞI TẠO NỀN TẢNG CHẾ TÁC ĐỘC BẢN",
    desc: "Duy trì các giá trị thủ công cốt lõi làm nền tảng để hiện thực hóa mọi ý tưởng thiết kế riêng biệt.",
    image: img1.src,
  },
  {
    index: "02",
    title: "SÁNG TẠO KHÔNG GIỚI HẠN",
    desc: "Phá vỡ các khuôn mẫu đại trà, không ngừng tìm kiếm giải pháp thẩm mỹ mới cho không gian sống đẳng cấp.",
    image: img2.src,
  },
  {
    index: "03",
    title: "ĐỔI MỚI CÔNG NGHỆ CHẾ TÁC",
    desc: "Ứng dụng kỹ thuật số và dây chuyền hiện đại vào quy trình may đo để đạt độ chuẩn xác tuyệt đối trên từng sản phẩm.",
    image: img3.src,
  },
  {
    index: "04",
    title: "VƯƠN TẦM HỢP TÁC CHIẾN LƯỢC",
    desc: "Thiết lập mối quan hệ bền vững với các đối tác kiến trúc sư, cùng kiến tạo những công trình nội thất biểu tượng.",
    image: img4.src,
  },
];

function Approach() {
  return (
    <section className="about-approach my-container">
      <div className="about-approach__head">
        <span className="about-approach__eyebrow">PHƯƠNG PHÁP TIẾP CẬN</span>
        <h2 className="about-approach__title">
          BỐN TRỤ CỘT KIẾN TẠO NÊN <br /> CHUẨN MỰC MINH PHÚ
        </h2>
      </div>

      <div className="about-approach__grid">
        {phases.map((p, idx) => (
          <motion.article
            key={p.index}
            className="about-approach__card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: idx * 0.1 }}
          >
            <div className="about-approach__card-image">
              <img src={p.image} alt={p.title} />
            </div>
            <div className="about-approach__card-meta">
              <span className="about-approach__card-index">{p.index}</span>
              <span className="about-approach__card-dot" />
              <h3 className="about-approach__card-title">{p.title}</h3>
            </div>
            <p className="about-approach__card-desc">{p.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Approach;
