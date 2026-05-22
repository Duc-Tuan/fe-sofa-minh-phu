"use client";

import React from "react";
import { motion } from "framer-motion";
import imageStory3 from "@/assets/images/figma/about/story-3.png";
import imgTall from "@/assets/images/figma/about/story-tall.png";
import imgThumb1 from "@/assets/images/figma/about/story-thumb1.png";
import imgThumb2 from "@/assets/images/figma/about/story-thumb2.png";
import imgPano from "@/assets/images/figma/about/image-mission-1.png";
import imgWatermark from "@/assets/images/figma/about/image-mission-2.png";

import imgstory1 from "@/assets/images/figma/about/image-story-1.png";
import imgstory2 from "@/assets/images/figma/about/image-story-2.png";
import imgstory4 from "@/assets/images/figma/about/image-story-4.png";
import Icon from "@/assets/icon";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay },
});
const revealX = (delay = 0) => ({
  initial: { opacity: 0, x: 28 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay },
});
const revealXY = (delay = 0) => ({
  initial: { opacity: 0, x: 28, y: 28 },
  whileInView: { opacity: 1, x: 0, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay },
});

function Story() {
  return (
    <section className="about-story">
      {/* <div className="about-story__watermark" aria-hidden>
        <img src={imgWatermark.src} alt="" />
      </div> */}

      <div className="about-story__inner my-container">
        <div className="about-story__top">
          <motion.div className="about-story__intro" {...reveal()}>
            <span className="about-story__eyebrow">MINH PHÚ SOFA FACTORY</span>
            <h2 className="about-story__title">
              14 NĂM - HÀNH TRÌNH KIẾN TẠO DI SẢN
            </h2>
            <p className="about-story__intro-lead">
              Khởi nguồn từ năm 2012, Minh Phú Sofa Factory tự hào là hệ sinh
              thái sản xuất tin cậy của hàng nghìn Kiến trúc sư trên toàn quốc.
            </p>
            <p>
              14 năm bản lĩnh, chúng tôi vận hành quy trình chuyên nghiệp để
              hiện thực hóa bản vẽ 3D chính xác tuyệt đối. Mỗi sản phẩm là một
              kiệt tác Luxury, khẳng định năng lực cung ứng và giá trị thực hữu
              cho mọi không gian sống.
            </p>
          </motion.div>
          <motion.div className="about-story__tall" {...reveal(0.1)}>
            <img src={imageStory3.src} alt="Nghệ nhân Minh Phú" />
          </motion.div>
        </div>

        <div className="about-story__image-mobile">
          <motion.div
            className="about-story__image-mobile--item one"
            {...reveal(0.1)}
          >
            <img src={imageStory3.src} alt="Nghệ nhân Minh Phú" />
          </motion.div>
          <div className="about-story__image-mobile--content">
            <motion.div
              className="about-story__image-mobile--item two"
              {...reveal(0.1)}
            >
              <img src={imageStory3.src} alt="Nghệ nhân Minh Phú" />
            </motion.div>
            <motion.div
              className="about-story__image-mobile--item three"
              {...reveal(0.1)}
            >
              <img src={imageStory3.src} alt="Nghệ nhân Minh Phú" />
            </motion.div>
          </div>
        </div>

        <div className="about-story__mid">
          <motion.div className="about-story__tall" {...reveal(0.1)}>
            <img src={imgTall.src} alt="Nghệ nhân Minh Phú" />
          </motion.div>

          <motion.div className="about-story__side" {...reveal(0.1)}>
            <p className="about-story__side-text">
              Từ quy mô xưởng nhỏ, chúng tôi đã đầu tư hệ thống nhà máy hiện
              đại, sẵn sàng đồng hành cùng các Kiến trúc sư để hiện thực hóa
              những bản vẽ độc bản, những ý tưởng thiết kế táo bạo nhất. Sự
              chuyển mình này là sự kết hợp hoàn hảo giữa kỹ thuật thủ công tinh
              xảo và năng lực sản xuất quy mô lớn.
            </p>
            <div className="about-story__thumbs">
              <div className="about-story__thumb">
                <img src={imgThumb1.src} alt="Vật liệu may đo" />
              </div>
              <div className="about-story__thumb">
                <img src={imgThumb2.src} alt="Sản phẩm hoàn thiện" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div className="about-story__pano" {...revealX()}>
        <div className="about-story__pano-content my-container">
          <motion.div className="about-story__pano-image" {...revealX(0.1)}>
            <img src={imgWatermark.src} alt="Sản phẩm hoàn thiện" />
          </motion.div>

          <div className="about-story__pano-content--text">
            <motion.div {...revealX(0.1)}>
              <Icon name="icon-comma" />
            </motion.div>
            <motion.p className="about-story__pano-title" {...revealX(0.1)}>
              CEO LƯƠNG VĂN MINH:
              <br />
              &quot;CHÚNG TÔI SẢN XUẤT SỰ TỬ TẾ&quot;
            </motion.p>
            <motion.div
              className="about-story__pano-content--text-separation"
              {...revealX(0.1)}
            />
            <motion.p className="about-story__pano-quote" {...revealX(0.1)}>
              &quot;Trong nội thất may đo, sự tinh tế không đến từ vẻ xa hoa, mà
              nằm ở sự trung thực của khung xương và sự tỉ mỉ trong từng đường
              chỉ. Tại Minh Phú, chúng tôi không chỉ làm ghế, chúng tôi chế tác
              &apos;di sản&apos; đồng hành cùng gia chủ. Sứ mệnh của chúng tôi
              là giải bài toán khó nhất của mọi Kiến trúc sư: Hiện thực hóa sản
              phẩm đẹp hơn cả bản vẽ&quot;
            </motion.p>
          </div>
        </div>
      </motion.div>
      <motion.div className="about-story__vision" {...revealXY()}>
        <img
          src={imgstory2.src}
          alt="Toàn cảnh nhà máy Minh Phú"
          className="about-story__vision-bg-one"
        />
        <img
          src={imgstory1.src}
          alt="Toàn cảnh nhà máy Minh Phú"
          className="about-story__vision-bg-two"
        />
        <div className="about-story__vision-content my-container">
          <motion.h3 className="about-story__vision-title" {...revealXY(0.1)}>
            TẦM NHÌN
          </motion.h3>
          <motion.h1 className="about-story__vision-context" {...revealXY(0.1)}>
            NHÀ MÁY THÔNG MINH <br/> <span>-</span> SẢN XUẤT XANH
          </motion.h1>
          <motion.p className="about-story__vision-quote" {...revealXY(0.1)}>
            Đến năm 2030: Khẳng định vị thế Nhà máy sản xuất đồ rời số 1 miền
            Bắc. Minh Phú tiên phong hội tụ công nghệ hiện đại và kỹ nghệ di sản
            để kiến tạo hệ sinh thái bền vững và thân thiện với môi trường.
          </motion.p>

          <motion.div {...revealXY(0.1)} className="about-story__vision--review-img">
            <img src={imgstory4.src} alt="Sản phẩm hoàn thiện" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Story;
