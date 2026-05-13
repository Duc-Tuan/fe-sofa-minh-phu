"use client";
import React from "react";
import "@/css/about.model.css";
import Hero from "./Hero";
import Story from "./Story";
import Mission from "./Mission";
import CoreValues from "./CoreValues";
import RnD from "./RnD";
import Partners from "./Partners";
import Milestones from "./Milestones";
import Team from "./Team";
import Future from "./Future";
import WhyUs from "./WhyUs";
import Cta from "./Cta";

function AboutPage() {
  return (
    <div className="about-page">
      <Hero />
      <Story />
      <Mission />
      <CoreValues />
      <RnD />
      <Partners />
      <Milestones />
      <Team />
      <Future />
      <WhyUs />
      <Cta />
    </div>
  );
}

export default AboutPage;
