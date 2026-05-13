"use client";

import React from "react";
import { motion } from "framer-motion";
import imgMain from "@/assets/images/figma/home/collection-living.png";
import imgSmall1 from "@/assets/images/figma/home/collection-bedroom.png";
import imgSmall2 from "@/assets/images/figma/home/collection-dining.png";
import imgBg from "@/assets/images/figma/home/capacity-1.png";

function Intro() {
  return (
    <section className="about-intro">
      <div className="about-intro__bg">
        <img src={imgBg.src} alt="" aria-hidden="true" />
      </div>

      <div className="about-intro__inner my-container">
        <div className="about-intro__row">
          <div className="about-intro__text">
            <span className="about-intro__eyebrow">Minh Phú Sofa Factory</span>
            <h2 className="about-intro__title">
              14 NĂM - HÀNH TRÌNH KIẾN TẠO DI SẢN
            </h2>
            <p className="about-intro__lead">
              Khởi nguồn từ năm 2012, Minh Phú Sofa Factory tự hào là hệ sinh thái
              sản xuất tin cậy của hàng nghìn Kiến trúc sư trên toàn quốc.
            </p>
            <p className="about-intro__body">
              14 năm bản lĩnh, chúng tôi vận hành quy trình chuyên nghiệp để hiện
              thực hóa bản vẽ 3D chính xác tuyệt đối. Mỗi sản phẩm là một kiệt
              tác Luxury, khẳng định năng lực cung ứng và giá trị thực hữu cho
              mọi không gian sống.
            </p>
          </div>

          <motion.div
            className="about-intro__main-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <img src={imgMain.src} alt="Showroom Minh Phú" />
          </motion.div>
        </div>

        <div className="about-intro__bottom">
          <p className="about-intro__bottom-text">
            Từ quy mô xưởng nhỏ, chúng tôi đã đầu tư hệ thống nhà máy hiện đại,
            sẵn sàng đồng hành cùng các Kiến trúc sư để hiện thực hóa những bản
            vẽ độc bản, những ý tưởng thiết kế táo bạo nhất. Sự chuyển mình này
            là sự kết hợp hoàn hảo giữa kỹ thuật thủ công tinh xảo và năng lực
            sản xuất quy mô lớn.
          </p>
          <div className="about-intro__bottom-images">
            <motion.div
              className="about-intro__bottom-image"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <img src={imgSmall1.src} alt="Workshop" />
            </motion.div>
            <motion.div
              className="about-intro__bottom-image"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img src={imgSmall2.src} alt="Showroom" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
