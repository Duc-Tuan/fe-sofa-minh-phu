"use client";
import React from "react";
import "@/css/manufacture.model.css";
import Hero from "./Hero";
import Stats from "./Stats";
import People from "./People";
import Capacity from "./Capacity";
import Scale from "./Scale";
import Gallery from "./Gallery";
import Esg from "./Esg";

function ManufacturePage() {
  return (
    <div className="manufacture-page">
      <Hero />
      <Stats />
      <People />
      <Capacity />
      <Scale />
      <Gallery />
      <Esg />
    </div>
  );
}

export default ManufacturePage;
