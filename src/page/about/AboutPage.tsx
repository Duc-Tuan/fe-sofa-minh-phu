"use client";
import React from "react";
import "@/css/about.model.css";
import Hero from "./Hero";
import Intro from "./Intro";
import CoreValues from "./CoreValues";
import Approach from "./Approach";
import Milestones from "./Milestones";
import Team from "./Team";
import Cta from "./Cta";

function AboutPage() {
  return (
    <div className="about-page">
      <Hero />
      <Intro />
      <CoreValues />
      <Approach />
      <Milestones />
      <Team />
      <Cta />
    </div>
  );
}

export default AboutPage;
