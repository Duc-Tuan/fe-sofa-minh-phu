"use client";
import React from "react";
import "@/css/home.model.css";
import Banner from "./Banner";
import SectionHeader from "./SectionHeader";
import SlideAbout from "./SlideAbout";
import ChooseUs from "./ChooseUs";
import Capacity from "./Capacity";
import Collections from "./Collections";
import Projects from "./Projects";
import Process from "./Process";
import WhyUs from "./WhyUs";
import Partners from "./Partners";
import ContactForm from "./ContactForm";
import News from "./News";

function HomePage() {
  return (
    <div className="home-page">
      <Banner />
      <div className="my-container">
        <SectionHeader
          eyebrow="MINH PHÚ SOFA FACTORY"
          title="HÀNH TRÌNH SẢN XUẤT NỘI THẤT CAO CẤP"
        />
      </div>
      <SlideAbout />
      <ChooseUs />
      <Capacity />
      <Collections />
      <Projects />
      <Process />
      <WhyUs />
      <Partners />
      <ContactForm />
      <News />
    </div>
  );
}

export default HomePage;
