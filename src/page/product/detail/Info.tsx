"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Spec {
  label: string;
  value: string;
}

interface Props {
  collection: string;
  name: string;
  description: string;
  specs: Spec[];
  colors: string[];
}

function Info({ collection, name, description, specs, colors }: Props) {
  const [color, setColor] = useState(colors[0]);

  return (
    <motion.div
      className="product-detail__info"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="product-detail__info-head">
        <span className="product-detail__collection">{collection}</span>
        <h1>{name}</h1>
        <p className="product-detail__desc">{description}</p>
      </div>

      <div className="product-detail__info-body">
        <ul className="product-detail__specs">
          {specs.map((s) => (
            <li key={s.label}>
              <span>{s.label}</span>
              <strong>{s.value}</strong>
            </li>
          ))}
        </ul>

        <div className="product-detail__colors">
          <span className="product-detail__colors-label">Màu sắc:</span>
          <div className="product-detail__colors-list">
            {colors.map((c) => (
              <button
                key={c}
                type="button"
                className={`product-detail__color-chip ${
                  c === color ? "is-active" : ""
                }`}
                onClick={() => setColor(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="product-detail__cta">
        <button type="button" className="product-detail__cta-zalo">
          <svg
            viewBox="0 0 19 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M9.5 0C4.25 0 0 3.4 0 7.6c0 2.6 1.5 4.9 3.9 6.3-.2.8-.7 2.1-.7 2.1-.1.3.2.6.5.4 0 0 1.9-1 3-1.7.9.2 1.8.3 2.8.3 5.25 0 9.5-3.4 9.5-7.6S14.75 0 9.5 0Z"
              fill="currentColor"
            />
          </svg>
          <span>Nhận tư vấn qua Zalo</span>
        </button>
        <button
          type="button"
          className="product-detail__cta-share"
          aria-label="Chia sẻ"
        >
          <svg viewBox="0 0 19 17" fill="none" aria-hidden>
            <path
              d="M14 1a2 2 0 110 4 2 2 0 010-4zM5 7a2 2 0 110 4 2 2 0 010-4zM14 13a2 2 0 110 4 2 2 0 010-4zM6.7 8.7l5.6-3.4M6.7 9.3l5.6 3.4"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}

export default Info;
