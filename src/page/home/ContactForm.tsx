"use client";

import ImagebgMap from "@/assets/images/figma/home/Image Container.png";
import Imagebg from "@/assets/images/figma/home/image-contactForm.png";
import Button from "@/components/button/Button";
import Input from "@/components/input";
import { motion } from "framer-motion";
import React, { useState } from "react";
import "@/css/form.model.css"

function ContactForm({ background = Imagebg.src }: { background?: string }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    topic: "",
    note: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (value !== "") {
      setErrors((p) => ({ ...p, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: form.name === "" ? "Vui lòng nhập trường này" : "",
      phone: form.phone === "" ? "Vui lòng nhập trường này" : "",
      note: form.note === "" ? "Vui lòng nhập trường này" : "",
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((error) => error !== "");
    if (!hasError) {
      // Proceed with form submission
      console.log("Form submitted successfully:", form);
    }
  };

  return (
    <section className="home-contact-form my-container">
      <img src={background} alt="" className="home-contact-form_bg-sub" />
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
              placeholder="Bảo Minh"
              title="Họ và tên"
              requi
              name="name"
              error={errors.name}
            />

            <Input
              type="number"
              name="phone"
              handleChange={handleChange}
              value={form.phone}
              placeholder="0339.888.888"
              title="Số điện thoại"
              requi
              error={errors.phone}
            />
          </div>

          <Input
            type="textarea"
            handleChange={handleChange}
            value={form.note}
            placeholder="Ghi chú"
            title="Tin nhắn cho Minh Phú Sofa Factory"
            name="note"
          />

          <div className="home-contact-form__action">
            <Button
              title="ĐĂNG KÝ TƯ VẤN"
              typeIcon="cross"
              color="black"
              type="submit"
              handleClick={() => { }}
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
