"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/button/Button";
import Imagebg from "@/assets/images/figma/home/image-contactForm.png";
import ImagebgMap from "@/assets/images/figma/home/Image Container.png";
import ImagebgDecor from "@/assets/images/figma/home/image 13.png";
import Input from "@/components/input";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    topic: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="home-contact-form my-container">
      <img src={Imagebg.src} alt="" className="home-contact-form_bg-sub" />
      <div className="home-contact-form__inner">
        <motion.form
          className="home-contact-form__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="home-contact-form__eyebrow">LIÊN HỆ</span>
          <h2 className="home-contact-form__title">ĐĂNG KÝ TƯ VẤN NỘI THẤT</h2>

          <div className="home-contact-form__row">
            <Input
              handleChange={handleChange}
              value={form.name}
              placeholder="Họ và tên"
              title="Bảo Minh"
              requi
              name="name"
            />

            <Input
              type="number"
              name="phone"
              handleChange={handleChange}
              value={form.phone}
              placeholder="0339.888.888"
              title="Số điện thoại"
              requi
            />
          </div>

          <Input
            type="textarea"
            handleChange={handleChange}
            value={form.name}
            placeholder="Ghi chú"
            title="Tin nhắn cho Minh Phú Sofa Factory"
            name="note"
          />

          <div className="home-contact-form__action">
            <Button
              title="ĐĂNG KÝ TƯ VẤN"
              typeIcon="cross"
              color="black"
              handleClick={() => {}}
            />
          </div>
        </motion.form>

        <motion.div
          className="home-contact-form__locations"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="home-contact-form__map">
            <span className="home-contact-form__map-deco" />
            <img
              src={ImagebgMap.src}
              alt=""
              className="home-contact-form__map-imagebgMap"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactForm;
