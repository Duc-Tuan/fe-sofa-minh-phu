"use client";
import React from "react";
import "@/css/manufacture.model.css";
import Hero from "./Hero";
import Stats from "./Stats";
import People from "./People";
import Capacity from "./Capacity";
import Compare from "./Compare";
import Scale from "./Scale";
import Gallery from "./Gallery";
import Process from "./Process";
import Esg from "./Esg";
import Cta from "./Cta";

function ManufacturePage() {
  return (
    <div className="manufacture-page">
      <Hero />
      <Stats />
      <People />
      <Capacity />
      <Compare />
      <Scale />
      <Gallery />
      <Process />
      <Esg />
      {/* <Cta /> */}
    </div>
  );
}

export default ManufacturePage;
