"use client";
import "@/css/contact.model.css";
import ContactForm from "../home/ContactForm";
import Hero from "./Hero";
import Intro from "./Intro";
import imagebgForm from "@/assets/images/figma/contact/bg-cantact-2.png"

function ContactPage() {
  return (
    <div className="contact-page">
      <Hero />
      <Intro />
      <ContactForm background={imagebgForm.src} />
    </div>
  );
}

export default ContactPage;
