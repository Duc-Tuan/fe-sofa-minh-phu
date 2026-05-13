"use client";

import React from "react";
import { motion } from "framer-motion";
import img1 from "@/assets/images/figma/about/story-1.png";
import img2 from "@/assets/images/figma/about/story-2.png";
import img3 from "@/assets/images/figma/about/story-3.png";
import img4 from "@/assets/images/figma/about/story-4.png";
import img5 from "@/assets/images/figma/about/story-5.png";
import img6 from "@/assets/images/figma/about/story-6.png";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, delay },
});

function Story() {
  return (
    <section className="about-story">
      <div className="about-story__inner my-container">
        <div className="about-story__top">
          <motion.div className="about-story__intro" {...reveal()}>
            <span className="about-story__eyebrow">Minh Phú Sofa Factory</span>
            <h2 className="about-story__title">14 năm - Hành trình kiến tạo di sản</h2>
            <p>
              Khởi nguồn từ năm 2012, Minh Phú Sofa Factory tự hào là hệ sinh thái sản xuất tin cậy
              của hàng nghìn Kiến trúc sư trên toàn quốc.
            </p>
            <p>
              14 năm bản lĩnh, chúng tôi vận hành quy trình chuyên nghiệp để hiện thực hóa bản vẽ 3D
              chính xác tuyệt đối. Mỗi sản phẩm là một kiệt tác Luxury, khẳng định năng lực cung ứng
              và giá trị thực hữu cho mọi không gian sống.
            </p>
            <p>
              Từ quy mô xưởng nhỏ, chúng tôi đã đầu tư hệ thống nhà máy hiện đại, sẵn sàng đồng hành
              cùng các Kiến trúc sư để hiện thực hóa những bản vẽ độc bản, những ý tưởng thiết kế táo
              bạo nhất. Sự chuyển mình này là sự kết hợp hoàn hảo giữa kỹ thuật thủ công tinh xảo và
              năng lực sản xuất quy mô lớn.
            </p>
          </motion.div>

          <motion.div className="about-story__media" {...reveal(0.1)}>
            <div className="about-story__media-big">
              <img src={img2.src} alt="Không gian nội thất Minh Phú" />
            </div>
            <div className="about-story__media-tall">
              <img src={img1.src} alt="Nghệ nhân Minh Phú" />
            </div>
            <div className="about-story__media-row">
              <img src={img4.src} alt="Xưởng sản xuất" />
              <img src={img5.src} alt="May đo thủ công" />
            </div>
            <div className="about-story__media-wide">
              <img src={img6.src} alt="Mẫu vật liệu Minh Phú" />
            </div>
          </motion.div>
        </div>

        <motion.figure className="about-story__quote" {...reveal()}>
          <blockquote>
            “Trong nội thất may đo, sự tinh tế không đến từ vẻ xa hoa, mà nằm ở sự trung thực của
            khung xương và sự tỉ mỉ trong từng đường chỉ. Tại Minh Phú, chúng tôi không chỉ làm ghế,
            chúng tôi chế tác ‘di sản’ đồng hành cùng gia chủ. Sứ mệnh của chúng tôi là giải bài toán
            khó nhất của mọi Kiến trúc sư: Hiện thực hóa sản phẩm đẹp hơn cả bản vẽ.”
          </blockquote>
          <figcaption>CEO Lương Văn Minh — “Chúng tôi sản xuất sự tử tế”</figcaption>
        </motion.figure>
      </div>

      <motion.div className="about-story__strip" {...reveal()}>
        <img src={img3.src} alt="Nhà máy Minh Phú" />
      </motion.div>
    </section>
  );
}

export default Story;
