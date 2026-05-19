"use client";

import React from "react";
import "@/css/product-detail.model.css";

import imgLiving from "@/assets/images/figma/home/collection-living.png";
import imgBedroom from "@/assets/images/figma/home/collection-bedroom.png";
import imgDining from "@/assets/images/figma/home/collection-dining.png";
import imgInterior from "@/assets/images/figma/home/collection-interior.png";
import imgProject1 from "@/assets/images/figma/home/project-1.png";
import imgProject2 from "@/assets/images/figma/home/project-2.png";
import imgProject3 from "@/assets/images/figma/home/project-3.png";

import Hero from "./Hero";
import Gallery from "./Gallery";
import Info from "./Info";
import Showcase from "./Showcase";
import Related, { RelatedItem } from "./Related";
import Faq from "./Faq";

const galleryImages = [
  imgLiving.src,
  imgBedroom.src,
  imgDining.src,
  imgInterior.src,
  imgProject1.src,
  imgProject2.src,
];

const showcaseImages = [imgInterior.src, imgLiving.src, imgBedroom.src];

const specs = [
  { label: "Vật liệu:", value: "Gỗ thông nhập khẩu + Plywood" },
  { label: "Đệm ngồi:", value: "Mút Việt Nhật K43 + Lò xo đàn hồi" },
  { label: "Chất liệu:", value: "Nỉ Hàn Quốc" },
  { label: "Phụ kiện:", value: "Chân thép 3cm" },
  { label: "Kích thước:", value: "W183 x D183 x C750" },
  {
    label: "Lưu ý:",
    value: "Kích thước, chất liệu, màu sắc có thể thay đổi theo yêu cầu",
  },
];

const colors = ["Đen", "Trắng", "Nâu", "Vàng", "Trắng ngà"];

const related: RelatedItem[] = [
  {
    id: "1",
    collection: "CURVED SOFA",
    name: "Goleta leather",
    image: imgLiving.src,
  },
  {
    id: "2",
    collection: "CURVED SOFA",
    name: "Goleta leather",
    image: imgBedroom.src,
  },
  {
    id: "3",
    collection: "CURVED SOFA",
    name: "Goleta leather",
    image: imgProject3.src,
  },
];

const faqs = [
  {
    q: "Minh Phú Sofa Factory cung cấp những dịch vụ sản phẩm nào?",
    a: "Minh Phú Sofa Factory chuyên sản xuất sofa, ghế, giường, bàn trà và nhiều sản phẩm nội thất cao cấp theo thiết kế. Mỗi sản phẩm đều được chế tác tỉ mỉ, mang đến không gian sống sang trọng và đậm dấu ấn riêng.",
  },
  {
    q: "Sản phẩm có thể đổi màu hoặc chọn chất liệu khác không?",
    a: "Có. Khách hàng có thể yêu cầu đổi màu vải, chất liệu da hoặc gỗ theo bảng mẫu của xưởng. Đội ngũ tư vấn sẽ hỗ trợ chọn lựa phù hợp với không gian.",
  },
  {
    q: "Làm thế nào để chọn được kích thước đồ nội thất phù hợp?",
    a: "Đội ngũ Minh Phú sẽ khảo sát không gian và tư vấn kích thước tối ưu dựa trên bản vẽ kỹ thuật. Khách có thể yêu cầu sản xuất theo kích thước riêng.",
  },
  {
    q: "Các sản phẩm sản xuất có được bảo hành không?",
    a: "Tất cả sản phẩm đều được bảo hành chính hãng từ 2 đến 5 năm tùy hạng mục, hỗ trợ bảo trì trọn đời.",
  },
  {
    q: "Thời gian sản xuất sản phẩm trong bao lâu?",
    a: "Thời gian sản xuất trung bình từ 15 đến 30 ngày làm việc tùy độ phức tạp của sản phẩm và số lượng đặt hàng.",
  },
  {
    q: "Khách hàng có thể nghiệm thu sản phẩm tại xưởng không?",
    a: "Có. Khách hàng được mời đến xưởng để nghiệm thu trực tiếp trước khi sản phẩm được vận chuyển và lắp đặt tại công trình.",
  },
];

function ProductDetailPage({ id: _id }: { id: string }) {
  const name = "Goleta leather";

  return (
    <div className="product-detail">
      <Hero name={name} />

      <section className="product-detail__main">
        <Gallery images={galleryImages} />
        <Info
          collection="CURVED SOFA"
          name={name}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
          specs={specs}
          colors={colors}
        />
      </section>

      <Showcase images={showcaseImages} />

      <Related items={related} />

      <Faq items={faqs} />
    </div>
  );
}

export default ProductDetailPage;
