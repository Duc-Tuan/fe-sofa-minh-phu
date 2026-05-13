"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/button/Button";

function FormBlock() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", topic: "", note: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="contact-form my-container">
      <div className="contact-form__inner">
        <motion.form
          className="contact-form__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="contact-form__eyebrow">FORM TƯ VẤN</span>
          <h2>ĐĂNG KÝ TƯ VẤN NỘI THẤT</h2>

          <div className="contact-form__row">
            <label className="contact-form__field">
              <span>Họ và tên</span>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Họ và tên" />
            </label>
            <label className="contact-form__field">
              <span>Số điện thoại</span>
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Số điện thoại" />
            </label>
          </div>

          <label className="contact-form__field">
            <span>Email</span>
            <input name="email" value={form.email} onChange={handleChange} placeholder="example@email.com" />
          </label>
          <label className="contact-form__field">
            <span>Chủ đề tư vấn</span>
            <input name="topic" value={form.topic} onChange={handleChange} placeholder="Bạn cần tư vấn về…" />
          </label>
          <label className="contact-form__field">
            <span>Lời nhắn</span>
            <textarea name="note" value={form.note} onChange={handleChange} placeholder="Lời nhắn" rows={4} />
          </label>

          <div className="contact-form__action">
            <Button title="GỬI THÔNG TIN" typeIcon="cross" color="black" handleClick={() => {}} />
          </div>
        </motion.form>

        <motion.div
          className="contact-form__map"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="contact-form__map-eyebrow">HIỆN DIỆN TRÊN TOÀN QUỐC</span>
          <h3>HỆ THỐNG SHOWROOM &<br /> NHÀ MÁY MINH PHÚ</h3>

          <svg viewBox="0 0 200 360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              d="M120 10 c-30 20 -60 60 -50 110 c20 50 0 70 -30 110 c10 40 50 70 80 110 c20 -30 50 -70 60 -120 c-10 -50 -40 -90 -40 -130 c0 -50 0 -60 -20 -80 z"
              fill="rgba(255,255,255,0.05)"
              stroke="rgba(255,255,255,0.55)"
              strokeWidth="1.2"
            />
            <circle cx="120" cy="80" r="4" fill="#cdb27c" />
            <circle cx="135" cy="200" r="4" fill="#cdb27c" />
            <circle cx="120" cy="320" r="4" fill="#cdb27c" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

export default FormBlock;
