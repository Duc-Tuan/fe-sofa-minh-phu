"use client";

import React from "react";
import "@/css/typical-project.model.css";
import Hero from "./Hero";
import FeatureProject, { FeaturedProjectData } from "./FeatureProject";
import ProjectList, { ProjectItem } from "./ProjectList";
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

const projects: ProjectItem[] = [
  {
    id: "1",
    category: "Căn hộ cao cấp",
    name: "Dự án Mini Hotel",
    image: cap1.src,
  },
  {
    id: "2",
    category: "Biệt thự",
    name: "Dự án du thuyền Diana Curse",
    image: cap3.src,
  },
  {
    id: "3",
    category: "Căn hộ cao cấp",
    name: "Dự án nha khoa Adora",
    image: p2.src,
  },
  {
    id: "4",
    category: "Biệt thự",
    name: "Dự án khách sạn Sheraton Hà Nội",
    image: p4.src,
  },
  {
    id: "5",
    category: "Biệt thự",
    name: "Dự án nội thất novaworld resort",
    image: slide1.src,
  },
  {
    id: "6",
    category: "Căn hộ cao cấp",
    name: "Dự án Mini Hotel",
    image: slide2.src,
  },
];

function TypicalProjectPage() {
  return (
    <div className="project-page">
      <Hero />
      <FeatureProject project={featured1} variant="white" />
      <FeatureProject project={featured2} variant="gray" />
      <ProjectList projects={projects} totalPages={10} />
    </div>
  );
}

export default TypicalProjectPage;
