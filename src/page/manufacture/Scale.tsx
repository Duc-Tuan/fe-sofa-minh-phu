"use client";

import React from "react";
import { motion } from "framer-motion";
import { SwiperSlide } from "swiper/react";
import SwiperOne from "@/components/swiper/swiperOne";
import imgQuote from "@/assets/images/figma/manufacture/scale-quote.png";
import imgPaper from "@/assets/images/figma/manufacture/scale-paper.png";
import imgRoom from "@/assets/images/figma/manufacture/scale-room.png";
import imgHotel from "@/assets/images/figma/manufacture/scale-hotel.png";

function Star() {
  return (
    <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 2l2.92 6.66 7.08.62-5.39 4.97 1.6 7.25L13 17.77l-6.21 3.73 1.6-7.25L3 9.28l7.08-.62L13 2z"
        fill="#cdb27c"
      />
    </svg>
  );
}

function Scale() {
  return (
    <section className="manuf-scale my-container">
      <div className="manuf-scale__head">
        <div>
          <span className="manuf-scale__eyebrow">Về chúng tôi</span>
          <h2 className="manuf-scale__title">Năng lực thực thi</h2>
        </div>
        <p className="manuf-scale__intro">
          Với Minh Phú Sofa Factory, mỗi dự án không chỉ là một đơn hàng,
          <br />
          mà là một cam kết về chất lượng và tiến độ bền vững.
        </p>
      </div>

      <div className="manuf-scale__row">
        <motion.div
          className="manuf-scale__quote"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <img src={imgQuote.src} alt="" />
        </motion.div>

        <motion.div
          className="manuf-scale__middle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="manuf-scale__card">
            <div className="manuf-scale__card-head">
              <h3>Khả năng cung ứng quy mô lớn</h3>
            </div>
            <div className="manuf-scale__card-body">
              <div className="manuf-scale__card-metric">
                <strong>
                  +100 <span>tỷ</span>
                </strong>
                <em>đồ rời</em>
              </div>
              <p>
                Sản xuất{" "}
                <b>
                  20.000+ sản phẩm/năm, linh hoạt tùy biến theo thiết kế riêng,
                </b>{" "}
                đảm bảo độ chính xác và tiến độ dự án.
              </p>
            </div>
          </div>
          <div
            className="manuf-scale__paper"
            style={{ backgroundImage: `url(${imgPaper.src})` }}
          />
        </motion.div>

        <motion.div
          className="manuf-scale__image"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={imgRoom.src} alt="" />
        </motion.div>
      </div>

      <div className="manuf-scale__row manuf-scale__row--bottom">
        <motion.div
          className="manuf-scale__card manuf-scale__card--dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="manuf-scale__card-head">
            <h3>
              ĐỘI NGŨ TRIỂN KHAI
              <br />& GIÁM SÁT
            </h3>
          </div>
          <div className="manuf-scale__card-body">
            <span className="segment">Khách sạn</span>
            <div className="manuf-scale__card-metric">
              <strong>100-1000</strong>
              <em>phòng</em>
            </div>
            <p>
              <b>Khảo sát trực tiếp,</b> <b>kiểm soát chất lượng nghiêm ngặt,</b>{" "}
              đảm bảo <b>sản phẩm đạt chuẩn</b> trước khi xuất xưởng.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="manuf-scale__hotel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img src={imgHotel.src} alt="" />
        </motion.div>

        <motion.div
          className="manuf-scale__card manuf-scale__card--ghost"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="manuf-scale__card-head">
            <h3>
              LOGISTICS
              <br />& LẮP ĐẶT
            </h3>
          </div>
          <div className="manuf-scale__card-body">
            <span className="segment">Du thuyền</span>
            <div className="manuf-scale__card-metric">
              <strong>5-6</strong>
              <span className="star">
                <Star />
              </span>
            </div>
            <p>
              Vận chuyển an toàn với <b>quy trình đóng gói đạt chuẩn,</b> kết hợp
              đội ngũ lắp đặt lành nghề <b>hoàn thiện chính xác</b> tại công
              trình, xử lý nhanh các phát sinh thực tế.
            </p>
          </div>
        </motion.div>
      </div>

      <SwiperOne className="manuf-scale__slider">
        <SwiperSlide className="manuf-scale__slide">
          <div className="manuf-scale__card manuf-scale__card--mobile">
            <div className="manuf-scale__card-head">
              <h3>Khả năng cung ứng quy mô lớn</h3>
            </div>
            <div className="manuf-scale__card-body">
              <div className="manuf-scale__card-metric">
                <strong>
                  +100 <span>tỷ</span>
                </strong>
                <em>đồ rời</em>
              </div>
              <p>
                Sản xuất{" "}
                <b>
                  20.000+ sản phẩm/năm, linh hoạt tùy biến theo thiết kế riêng,
                </b>{" "}
                đảm bảo độ chính xác và tiến độ dự án.
              </p>
            </div>
          </div>
          <div className="manuf-scale__slide-image">
            <img src={imgRoom.src} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="manuf-scale__slide">
          <div className="manuf-scale__card manuf-scale__card--mobile manuf-scale__card--dark">
            <div className="manuf-scale__card-head">
              <h3>
                ĐỘI NGŨ TRIỂN KHAI
                <br />& GIÁM SÁT
              </h3>
            </div>
            <div className="manuf-scale__card-body">
              <span className="segment">Khách sạn</span>
              <div className="manuf-scale__card-metric">
                <strong>100-1000</strong>
                <em>phòng</em>
              </div>
              <p>
                <b>Khảo sát trực tiếp,</b>{" "}
                <b>kiểm soát chất lượng nghiêm ngặt,</b> đảm bảo{" "}
                <b>sản phẩm đạt chuẩn</b> trước khi xuất xưởng.
              </p>
            </div>
          </div>
          <div className="manuf-scale__slide-image">
            <img src={imgHotel.src} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="manuf-scale__slide">
          <div className="manuf-scale__card manuf-scale__card--mobile">
            <div className="manuf-scale__card-head">
              <h3>
                LOGISTICS
                <br />& LẮP ĐẶT
              </h3>
            </div>
            <div className="manuf-scale__card-body">
              <span className="segment">Du thuyền</span>
              <div className="manuf-scale__card-metric">
                <strong>5-6</strong>
                <span className="star">
                  <Star />
                </span>
              </div>
              <p>
                Vận chuyển an toàn với <b>quy trình đóng gói đạt chuẩn,</b> kết
                hợp đội ngũ lắp đặt lành nghề <b>hoàn thiện chính xác</b> tại
                công trình, xử lý nhanh các phát sinh thực tế.
              </p>
            </div>
          </div>
          <div
            className="manuf-scale__slide-image manuf-scale__slide-image--paper"
            style={{ backgroundImage: `url(${imgPaper.src})` }}
          />
        </SwiperSlide>
      </SwiperOne>
    </section>
  );
}

export default Scale;
