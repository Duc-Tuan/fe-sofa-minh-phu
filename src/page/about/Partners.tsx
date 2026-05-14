"use client";

import React from "react";
import { motion } from "framer-motion";
import v1 from "@/assets/images/figma/about/partners-1.png";
import v2 from "@/assets/images/figma/about/partners-2.png";
import v3 from "@/assets/images/figma/about/partners-3.png";
import v4 from "@/assets/images/figma/about/partners-4.png";

function Partners() {
  return (
    <section className="about-partners my-container">
      <div className="about-partners__inner">
        <motion.div
          className="about-partners__text"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-partners__head">
            <span className="about-partners__eyebrow">NĂNG LỰC ĐỐI TÁC</span>
            <h2 className="about-partners__title">
              ĐỒNG HÀNH CÙNG NHỮNG NGƯỜI KIẾN TẠO
            </h2>
          </div>

          <div className="about-partners__gallery-mobile" aria-hidden>
            <div className="about-partners__gallery-mobile-top">
              <div className="about-partners__gallery-mobile-stack">
                <div className="about-partners__mobile-photo about-partners__mobile-photo--m1">
                  <img src={v1.src} alt="" />
                </div>
                <div className="about-partners__mobile-photo about-partners__mobile-photo--m2">
                  <img src={v4.src} alt="" />
                </div>
              </div>
              <div className="about-partners__mobile-photo about-partners__mobile-photo--m3">
                <img src={v2.src} alt="" />
              </div>
            </div>
            <div className="about-partners__mobile-photo about-partners__mobile-photo--m4">
              <img src={v3.src} alt="" />
            </div>
          </div>

          <div className="about-partners__cols">
            <div className="about-partners__col">
              <h3>ĐỐI TÁC CHIẾN LƯỢC CỦA KTS</h3>
              <p>
                Chúng tôi không chỉ gia công, chúng tôi tư vấn giải pháp kết
                cấu, giúp KTS xử lý những chi tiết khó nhất mà xưởng nhỏ không
                làm được.
              </p>
            </div>
            <div className="about-partners__divider" aria-hidden />
            <div className="about-partners__col">
              <h3>KHẢ NĂNG CUNG ỨNG DỰ ÁN</h3>
              <p>
                Với nhà máy 8.000m2, Minh Phú tự tin đáp ứng tiến độ cho các dự
                án khách sạn 5 sao, biệt thự quy mô lớn và chuỗi căn hộ cao cấp
                trên toàn quốc.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="about-partners__gallery" aria-hidden>
          <motion.div
            className="about-partners__photo about-partners__photo--p1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <img src={v3.src} alt="Dự án biệt thự" />
          </motion.div>
          <motion.div
            className="about-partners__photo about-partners__photo--p2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <img src={v2.src} alt="Dự án nội thất" />
          </motion.div>
          <motion.div
            className="about-partners__photo about-partners__photo--p3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <img src={v1.src} alt="Dự án cao cấp" />
          </motion.div>
          <motion.div
            className="about-partners__photo about-partners__photo--p4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <img src={v4.src} alt="Dự án khách sạn" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
