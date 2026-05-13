"use client";

import React from "react";
import "@/css/typical-project.model.css";
import p1 from "@/assets/images/figma/home/project-1.png";
import p2 from "@/assets/images/figma/home/project-2.png";
import p3 from "@/assets/images/figma/home/project-3.png";
import p4 from "@/assets/images/figma/home/project-4.png";
import p5 from "@/assets/images/figma/home/slide-1.png";
import p6 from "@/assets/images/figma/home/slide-2.png";
import p7 from "@/assets/images/figma/home/capacity-1.png";
import p8 from "@/assets/images/figma/home/capacity-3.png";
import Hero from "./Hero";
import Feature from "./Feature";
import ProjectList from "./ProjectList";
import { ProjectItem } from "./ProjectCard";

const tabs = [
  { id: "all", name: "Tất cả" },
  { id: "hotel", name: "Khách sạn" },
  { id: "resort", name: "Resort" },
  { id: "office", name: "Văn phòng" },
  { id: "residential", name: "Nhà ở" },
];

const projectImages = [p1.src, p2.src, p3.src, p4.src, p5.src, p6.src, p7.src, p8.src];

const projectNames = [
  "Mini Hotel",
  "Penthouse Royal",
  "Resort Bãi Bụt",
  "Showroom Đà Nẵng",
  "Villa Hồ Tây",
  "Office Tower",
  "Hilton Saigon",
  "Apartment Vinhomes",
];
const projectCities = [
  "HẢI PHÒNG",
  "HÀ NỘI",
  "ĐÀ NẴNG",
  "ĐÀ NẴNG",
  "HÀ NỘI",
  "HỒ CHÍ MINH",
  "HỒ CHÍ MINH",
  "HÀ NỘI",
];

const projects: ProjectItem[] = projectImages.map((image, i) => ({
  id: String(i + 1),
  name: `Dự án ${projectNames[i]}`,
  city: projectCities[i],
  image,
}));

function TypicalProjectPage() {
  return (
    <div className="project-page">
      <Hero />
      <Feature />
      <ProjectList tabs={tabs} projects={projects} />
    </div>
  );
}

export default TypicalProjectPage;
