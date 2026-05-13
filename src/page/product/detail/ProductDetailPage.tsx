"use client";

import React from "react";
import imgL from "@/assets/images/figma/home/collection-living.png";
import imgB from "@/assets/images/figma/home/collection-bedroom.png";
import imgD from "@/assets/images/figma/home/collection-dining.png";
import imgI from "@/assets/images/figma/home/collection-interior.png";
import "@/css/product-detail.model.css";
import Hero from "./Hero";
import Gallery from "./Gallery";
import Info, { Spec } from "./Info";
import Related, { RelatedItem } from "./Related";
import Faq, { FaqItem } from "./Faq";

const gallery = [imgL.src, imgB.src, imgD.src, imgI.src];

const related: RelatedItem[] = [imgB.src, imgD.src, imgI.src, imgL.src].map((image, i) => ({
  id: String(i + 200),
  name: `Sofa Minh Phú M-${(i + 50).toString().padStart(3, "0")}`,
  image,
}));

const specs: Spec[] = [
  { label: "Kích thước", value: "2400 × 1000 × 850 mm" },
  { label: "Chất liệu khung", value: "Gỗ óc chó" },
  { label: "Bọc", value: "Da bò Ý nguyên tấm" },
  { label: "Bảo hành", value: "24 tháng" },
];

const faqs: FaqItem[] = [
  { q: "Thời gian sản xuất một bộ sofa custom là bao lâu?", a: "Trung bình 3–4 tuần kể từ khi chốt bản vẽ và chất liệu, tuỳ độ phức tạp." },
  { q: "Minh Phú có nhận sản xuất theo bản vẽ KTS riêng không?", a: "Có. Đội kỹ thuật sẽ chuyển bản vẽ thành 3D để duyệt trước khi vào sản xuất." },
  { q: "Chế độ bảo hành như thế nào?", a: "24 tháng cho khung và đệm, hỗ trợ vệ sinh – tân trang chuyên sâu trọn đời." },
  { q: "Vận chuyển toàn quốc và quốc tế?", a: "Có. Đội ngũ logistics đảm bảo đóng gói an toàn và bàn giao tận chân công trình." },
];

function ProductDetailPage({ id }: { id: string }) {
  const productName = "QUEEN LEATHER";

  return (
    <div className="product-detail">
      <Hero productName={productName} />

      <section className="product-detail__main my-container">
        <Gallery images={gallery} />
        <Info
          collection="LUXURY COLLECTION"
          name={`${productName} (#${id})`}
          description="Bộ sofa thủ công bọc da bò Ý hảo hạng với khung gỗ óc chó, đệm lông vũ pha mút HD đảm bảo độ êm và độ bền nhiều năm. Một thiết kế đại diện cho dòng Luxury của Minh Phú."
          specs={specs}
        />
      </section>

      <Related items={related} />
      <Faq items={faqs} />
    </div>
  );
}

export default ProductDetailPage;
