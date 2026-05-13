"use client";

import React from "react";
import { motion } from "framer-motion";
import Icon from "@/assets/icon";

const cards = [
  {
    icon: "icon-headquarters",
    title: "TRỤ SỞ CHÍNH",
    address: "286 đường Vân Trì, xã Phúc Thịnh, TP. Hà Nội",
    phone: "0925.36.28.28",
    email: "sale@sofaminhphu.vn",
  },
  {
    icon: "icon-factory",
    title: "NHÀ MÁY SẢN XUẤT",
    address: "286 đường Vân Trì, xã Phúc Thịnh, TP. Hà Nội",
    phone: "0925.36.28.28",
    email: "sale@sofaminhphu.vn",
  },
];

function Locations() {
  return (
    <section className="contact-locations my-container">
      <div className="contact-locations__head">
        <span>VĂN PHÒNG & NHÀ MÁY</span>
        <h2>HỆ THỐNG MINH PHÚ TRÊN TOÀN QUỐC</h2>
      </div>
      <div className="contact-locations__grid">
        {cards.map((c, idx) => (
          <motion.article
            key={c.title}
            className="contact-locations__card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="contact-locations__card-head">
              <Icon name={c.icon} />
              <h3>{c.title}</h3>
            </div>
            <p>{c.address}</p>
            <ul>
              <li>
                <span>Điện thoại</span>
                <strong>{c.phone}</strong>
              </li>
              <li>
                <span>Email</span>
                <strong>{c.email}</strong>
              </li>
            </ul>
            <a className="contact-locations__map" href="#">
              <Icon name="icon-map" />
              Xem trên Google Maps
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Locations;
