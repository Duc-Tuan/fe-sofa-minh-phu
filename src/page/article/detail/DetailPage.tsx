"use client";

import React from "react";
import banner from "@/assets/images/figma/home/news-big-2.png";
import "@/css/article-detail.model.css";
import Hero from "./Hero";
import Body, { Section } from "./Body";
import Share from "./Share";
import Sidebar, { RelatedArticle } from "./Sidebar";

const sections: Section[] = [
  {
    heading: "1. KHÔNG GIAN MỞ – KẾT NỐI LIỀN MẠCH",
    content:
      "Phòng khách hiện đại có xu hướng kết nối tự nhiên với khu vực bếp và bàn ăn. Ranh giới được phá bỏ bằng các giải pháp ánh sáng, chất liệu sàn và chiều cao trần.",
  },
  {
    heading: "2. SOFA MODULE – LINH HOẠT THEO NHU CẦU",
    content:
      "Sofa dạng module cho phép gia chủ tự do tổ hợp theo từng không gian. Minh Phú nhận thiết kế và sản xuất sofa module theo bản vẽ KTS, đảm bảo độ vừa khít và chất lượng đồng đều.",
  },
  {
    heading: "3. CHẤT LIỆU TỰ NHIÊN – HƠI ẤM CON NGƯỜI",
    content:
      "Vải thô, da bò mộc, gỗ óc chó, len bouclé… đang trở lại mạnh mẽ. Sự ấm áp đến từ chất liệu giúp phòng khách trở nên gần gũi hơn.",
  },
  {
    heading: "4. TÔNG MÀU TRUNG TÍNH ĐỘ LỘ CAO",
    content:
      "Beige, taupe, off-white, charcoal là những lựa chọn dễ phối, vừa hiện đại vừa sang trọng. Một mảng màu đậm như deep blue hoặc forest green tạo điểm nhấn bất ngờ.",
  },
  {
    heading: "5. NGHỆ THUẬT CÁ NHÂN HOÁ",
    content:
      "Tranh, tượng, sách – những hiện vật mang dấu ấn cá nhân được tôn trọng và đặt làm điểm nhấn của phòng khách, thay vì chỉ trang trí cho có.",
  },
];

const related: RelatedArticle[] = Array.from({ length: 4 }).map((_, i) => ({
  id: String(i + 100),
  title: `Bài viết liên quan số ${i + 1}`,
  date: "12 Tháng 06, 2026",
  image: banner.src,
}));

function DetailPage({ id }: { id: string }) {
  return (
    <div className="article-detail">
      <Hero
        title={`5 XU HƯỚNG THƯỜNG GẶP KHI THIẾT KẾ PHÒNG KHÁCH (#${id})`}
        date="12 Tháng 06, 2026 · MINH PHÚ EDITORIAL"
      />

      <div className="article-detail__layout my-container">
        <div className="article-detail__content">
          <Body
            lead="Phòng khách là không gian phản chiếu rõ nhất tinh thần của một ngôi nhà. Cùng Minh Phú điểm qua 5 xu hướng nội thất đang định hình thẩm mỹ phòng khách hiện đại."
            sections={sections}
          />
          <Share />
        </div>
        <Sidebar items={related} />
      </div>
    </div>
  );
}

export default DetailPage;
