"use client";

import React from "react";
import "@/css/typical-project.model.css";
import Hero from "./Hero";
import FeatureProject, { FeaturedProjectData } from "./FeatureProject";
import ProjectList, { ProjectItem, ProjectSlide } from "./ProjectList";
import p1 from "@/assets/images/figma/home/project-1.png";
import p2 from "@/assets/images/figma/home/project-2.png";
import p3 from "@/assets/images/figma/home/project-3.png";
import p4 from "@/assets/images/figma/home/project-4.png";
import slide1 from "@/assets/images/figma/home/slide-1.png";
import slide2 from "@/assets/images/figma/home/slide-2.png";
import cap1 from "@/assets/images/figma/home/capacity-1.png";
import cap3 from "@/assets/images/figma/home/capacity-3.png";

const featured1: FeaturedProjectData = {
  eyebrow: "Dự án nổi bật",
  title: "Nhà Sang - Group Nghiện nhà",
  description:
    "Không gian biệt thự được thiết kế theo tinh thần nghỉ dưỡng, kết hợp vật liệu gỗ tự nhiên, ánh sáng dịu và bố cục mở, mang lại cảm giác thư giãn và riêng tư tuyệt đối.",
  meta: [
    { label: "Phân loại", value: "Biệt thự" },
    { label: "Địa điểm", value: "quận Ba Đình - Hà Nội" },
    { label: "Diện tích", value: "Cập nhật" },
    { label: "Năm hoàn thiện", value: "2025" },
  ],
  production:
    "Sofa, ghế đơn, giường tủ, kệ TV, tab đầu giường và một số hạng mục khác.",
  images: [p3.src, slide1.src, p1.src, p2.src, slide2.src],
};

const featured2: FeaturedProjectData = {
  eyebrow: "Dự án nổi bật",
  title: "Tổ hợp Nghỉ dưỡng Flamingo đại lải",
  description:
    "Không gian biệt thự được thiết kế theo tinh thần nghỉ dưỡng, kết hợp vật liệu gỗ tự nhiên, ánh sáng dịu và bố cục mở, mang lại cảm giác thư giãn và riêng tư tuyệt đối.",
  meta: [
    { label: "Phân loại", value: "Biệt thự" },
    { label: "Địa điểm", value: "quận Ba Đình - Hà Nội" },
    { label: "Diện tích", value: "Cập nhật" },
    { label: "Năm hoàn thiện", value: "2025" },
  ],
  production:
    "Sofa, ghế đơn, giường tủ, kệ TV, tab đầu giường và một số hạng mục khác.",
  images: [slide2.src, p3.src, slide1.src, p4.src, cap1.src],
};

function makeSlides(images: string[]): ProjectSlide[] {
  const titles = [
    "Nhà Sang - Group Nghiện nhà",
    "Sản phẩm ghế bar",
    "Không Gian Bếp Mở",
    "Phòng Ngủ Master",
    "Phòng Tắm Hiện Đại",
    "Góc Thư Giãn",
    "Sân Vườn Tiểu Cảnh",
  ];
  const descs = [
    "Không gian biệt thự được thiết kế theo tinh thần nghỉ dưỡng, kết hợp vật liệu gỗ tự nhiên, ánh sáng dịu và bố cục mở, mang lại cảm giác thư giãn và riêng tư tuyệt đối.",
    "Không gian biệt thự được thiết kế theo tinh thần nghỉ dưỡng, kết hợp vật liệu gỗ tự nhiên, ánh sáng dịu và bố cục mở, mang lại cảm giác thư giãn và riêng tư tuyệt đối. Không gian biệt thự được thiết kế theo tinh thần nghỉ dưỡng, kết hợp vật liệu gỗ tự nhiên, ánh sáng dịu và bố cục mở, mang lại cảm giác thư giãn và riêng tư tuyệt đối.Không gian biệt thự được thiết kế theo tinh thần nghỉ dưỡng, kết hợp vật liệu gỗ tự nhiên, ánh sáng dịu và bố cục mở, mang lại cảm giác thư giãn và riêng tư tuyệt đối.",
    "Không gian bếp mở được thiết kế thông minh với hệ tủ bếp gỗ óc chó nhập khẩu, đảo bếp trung tâm tích hợp nhiều công năng.",
    "Phòng ngủ master với giường king-size bọc nỉ cao cấp, hệ thống đèn thông minh và rèm tự động tạo không gian nghỉ ngơi hoàn hảo.",
    "Phòng tắm hiện đại với sen vòi nhập khẩu, bồn tắm nằm thiết kế tinh tế, ốp lát đá tự nhiên cao cấp.",
    "Góc thư giãn được bố trí bên cửa sổ lớn với ghế thư giãn ergonomic, kệ sách âm tường và cây xanh trang trí.",
    "Sân vườn tiểu cảnh với hồ cá koi, cây xanh bản địa và lối đi lát đá tự nhiên tạo không gian xanh giữa lòng phố thị.",
  ];
  const categories = [
    "Biệt thự",
    "Căn hộ cao cấp",
    "Biệt thự",
    "Căn hộ cao cấp",
    "Biệt thự",
    "Căn hộ cao cấp",
    "Biệt thự",
  ];
  return images.map((img, i) => ({
    image: img,
    title:
      titles[i % titles.length] + (i >= titles.length ? ` (${i + 1})` : ""),
    description: descs[i % descs.length],
    meta: [
      { label: "Phân loại", value: categories[i % categories.length] },
      { label: "Địa điểm", value: "Quận Ba Đình - Hà Nội" },
      { label: "Diện tích", value: "Cập nhật" },
      { label: "Năm hoàn thiện", value: "2025" },
    ],
    production:
      "Sofa, ghế đơn, giường tủ, kệ TV, tab đầu giường và một số hạng mục khác.",
    type: i === 1 ? "product" : "default",
  }));
}

const projects: ProjectItem[] = [
  {
    id: "1",
    category: "Căn hộ cao cấp",
    name: "Dự án Mini Hotel",
    image: cap1.src,
    slides: makeSlides([
      cap1.src,
      p1.src,
      p3.src,
      slide1.src,
      slide2.src,
      p2.src,
      p4.src,
    ]),
  },
  {
    id: "2",
    category: "Biệt thự",
    name: "Dự án du thuyền Diana Curse",
    image: cap3.src,
    slides: makeSlides([
      cap3.src,
      slide1.src,
      p4.src,
      p2.src,
      p1.src,
      slide2.src,
      p3.src,
    ]),
  },
  {
    id: "3",
    category: "Căn hộ cao cấp",
    name: "Dự án nha khoa Adora",
    image: p2.src,
    slides: makeSlides([
      p2.src,
      p4.src,
      slide2.src,
      cap1.src,
      p3.src,
      slide1.src,
      cap3.src,
    ]),
  },
  {
    id: "4",
    category: "Biệt thự",
    name: "Dự án khách sạn Sheraton Hà Nội",
    image: p4.src,
    slides: makeSlides([
      p4.src,
      cap3.src,
      p1.src,
      slide2.src,
      slide1.src,
      p2.src,
      cap1.src,
    ]),
  },
  {
    id: "5",
    category: "Biệt thự",
    name: "Dự án nội thất Novaworld Resort",
    image: slide1.src,
    slides: makeSlides([
      slide1.src,
      cap1.src,
      p3.src,
      p4.src,
      p2.src,
      cap3.src,
      slide2.src,
    ]),
  },
  {
    id: "6",
    category: "Căn hộ cao cấp",
    name: "Dự án Mini Hotel",
    image: slide2.src,
    slides: makeSlides([
      slide2.src,
      p2.src,
      cap3.src,
      slide1.src,
      p1.src,
      p4.src,
      cap1.src,
    ]),
  },
];

function TypicalProjectPage() {
  return (
    <div className="project-page">
      <Hero />
      <div className="project-page__one">
        <FeatureProject project={featured1} variant="white" />
      </div>
      <div className="project-page__two">
        <FeatureProject project={featured2} variant="gray" />
      </div>
      <ProjectList projects={projects} totalPages={10} />
    </div>
  );
}

export default TypicalProjectPage;
