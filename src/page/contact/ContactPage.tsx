"use client";
import React from "react";
import "@/css/contact.model.css";
import Hero from "./Hero";
import Intro from "./Intro";
import FormBlock from "./FormBlock";
import Locations from "./Locations";

function ContactPage() {
  return (
    <div className="contact-page">
      <Hero />
      <Intro />
      <FormBlock />
      <Locations />
    </div>
  );
}

export default ContactPage;
